import { useAppSelector } from "@/Hooks/ReduxHooks";
import { profile } from "@/features/Profile/profileSlice";
import { InputWithLabel } from "@/components/ui/InputWithLabel";
import { Paper } from "@/components/ui/paper";
import { H3 } from "@/components/ui/Typography";

const sectionClasses = "grid md:grid-cols-2 w-full  gap-5";

const Profile = () => {
  const data = useAppSelector(profile);
  return (
    <Paper className=" p-4">
      <div className="flex flex-col gap-2 mb-5">
        <H3>Personal Info</H3>
        <section className={sectionClasses}>
          <InputWithLabel
            label="First Name"
            value={data.firstName}
            type="text"
          />
          <InputWithLabel label="Last Name" value={data.lastName} type="text" />
          <InputWithLabel label="Email" value={data.email} type="email" />
          <InputWithLabel
            label="Phone Number"
            value={data.phoneNumber}
            type="text"
          />
          <InputWithLabel label="Address" value={data.address} type="text" />
        </section>
      </div>
      <div className="flex flex-col gap-2">
        <H3>Work Info</H3>
        <section className={sectionClasses}>
          <InputWithLabel
            label="Department"
            value={data.department}
            type="text"
          />
          <InputWithLabel label="Role" value={data.role} type="text" />
          <InputWithLabel label="Status" value={data.status} type="text" />
        </section>
      </div>
    </Paper>
  );
};

export default Profile;
