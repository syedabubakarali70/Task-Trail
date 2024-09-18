import { createSlice } from "@reduxjs/toolkit";

export type Profile = {
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    department: string,
    role: string,
    status: "Active" | "on Leave" | "Terminated",
    address: string,
}

const initialState: Profile = {
    firstName: "Syed Abubakar",
    lastName: "Ali",
    email: "syedabubakarali70@gmail.com",
    phoneNumber: '+92 3174963506',
    department: "Development",
    role: "Associate Software Engineer",
    status: "Active",
    address: "Wapda Town Lahore"
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {

    },
    selectors: {
        profile: (state) => state
    }
})
export const { profile } = profileSlice.selectors;
export default profileSlice.reducer