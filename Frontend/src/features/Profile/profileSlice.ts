import { createSlice } from "@reduxjs/toolkit";
import { Profile } from "@/lib/types";


const initialState: Profile = {
    id: 'user1',
    firstName: "Abubakar",
    lastName: "Ali",
    email: "syedabubakarali70@gmail.com",
    phoneNumber: '+92 3174963506',
    department: "Development",
    role: "admin",
    position: "Associate Software Engineer",
    status: "Active",
    address: "Wapda Town Lahore"
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {

    },
    selectors: {
        selectProfile: (state) => state,
        selectName: (state) => (state.firstName + " " + state.lastName).trim(),
        selectRole: (state) => state.role
    }
})
export const { selectName, selectProfile, selectRole } = profileSlice.selectors;
export default profileSlice.reducer