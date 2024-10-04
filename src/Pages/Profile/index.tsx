import { useAppSelector } from "@/Hooks/ReduxHooks";
import { selectProfile } from "@/features/Profile/profileSlice";
import { InputWithLabel } from "@/components/ui/InputWithLabel";
import { Paper } from "@/components/ui/paper";
import { H3 } from "@/components/ui/Typography";
import { SquarePen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProfileSchema } from "@/lib/schemas";
import { Profile as ProfileType } from "@/lib/types";
const sectionClasses = "grid md:grid-cols-2 w-full  gap-5";

const Profile = () => {
  const data = useAppSelector(selectProfile);
  const {
    register,
    formState: { errors },
  } = useForm<ProfileType>({
    resolver: zodResolver(ProfileSchema),
    defaultValues: {
      id: "66fe5c2cf3f1b6a570d1679a",
      firstName: data.firstName,
      lastName: data.lastName,
      address: data.address,
      email: data.email,
      position: data.position,
      phoneNumber: data.phoneNumber,
    },
  });

  const [isEditing, setIsEditing] = useState(false);
  return (
    <Paper className=" p-4">
      <div className="flex flex-col gap-3 mb-5">
        <div className="flex justify-between items-center">
          <H3>Personal Info</H3>
          <Button
            variant="link"
            size="icon"
            className="w-6 h-6 flex justify-center items-end text-black dark:text-white"
            onClick={() => setIsEditing(!isEditing)}
          >
            <SquarePen className="w-4 h-4" />
          </Button>
        </div>
        <section className={sectionClasses}>
          <InputWithLabel
            label="First Name"
            register={register("firstName")}
            type="text"
            error={errors.firstName}
            readonly={!isEditing}
          />
          <InputWithLabel
            label="Last Name"
            register={register("lastName")}
            type="text"
            error={errors.lastName}
            readonly={!isEditing}
          />
          <InputWithLabel
            label="Email"
            register={register("email")}
            type="email"
            readonly={!isEditing}
          />
          <InputWithLabel
            label="Phone Number"
            register={register("phoneNumber")}
            type="text"
            readonly={!isEditing}
          />
          <InputWithLabel
            label="Address"
            value={data.address}
            type="text"
            readonly={!isEditing}
            register={register("address")}
          />
        </section>
        <div
          className={`${isEditing ? "block" : "hidden"} flex justify-end gap-2`}
        >
          <Button variant="outlined">Cancel</Button>
          <Button variant="filled">Submit</Button>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <H3>Work Info</H3>
        <section className={sectionClasses}>
          <InputWithLabel
            label="Department"
            value={data.department}
            type="text"
            register={register("department")}
            readonly={true}
          />
          <InputWithLabel
            label="Position"
            value={data.position}
            type="text"
            register={register("position")}
            readonly={true}
          />
          <InputWithLabel
            label="Status"
            value={data.status}
            type="text"
            register={register("status")}
            readonly={true}
          />
        </section>
      </div>
    </Paper>
  );
};

export default Profile;
