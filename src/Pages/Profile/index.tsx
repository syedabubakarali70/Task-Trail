import { useAppSelector } from "@/Hooks/ReduxHooks";
import { profile } from "@/features/Profile/profileSlice";
import { InputWithLabel } from "@/components/ui/InputWithLabel";
import { Paper } from "@/components/ui/paper";
const Profile = () => {
  const data = useAppSelector(profile);
  return (
    <Paper className="grid grid-cols-2 w-full p-4 gap-5">
      <InputWithLabel label="First Name" value={data.firstName} type="text" />
      <InputWithLabel label="Last Name" value={data.lastName} type="text" />
      <InputWithLabel label="Email" value={data.email} type="email" />
      <InputWithLabel
        label="Phone Number"
        value={data.phoneNumber}
        type="text"
      />
      <InputWithLabel label="Department" value={data.department} type="text" />
    </Paper>
  );
};

export default Profile;
