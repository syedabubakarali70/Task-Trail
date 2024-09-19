import { createSlice } from "@reduxjs/toolkit";


export type LeaveRequest = {
    startingDate: string,
    endingDate: string,
    reason: string,
    status: "Pending" | "Approved" | "Rejected"
}

const initialState: LeaveRequest[] = [{
    startingDate: "10-10-2024",
    endingDate: "12-10-2024",
    reason: "UUmmmmfcmwencfjcvjr3 vc fcefcneflvc vfvnr3nv34tklc fncevn3kvc f3vn3v3evc vt3nvc3jcv",
    status: "Pending"
}, {
    startingDate: "10-10-2024",
    endingDate: "12-10-2024",
    reason: "UUmmmm",
    status: "Approved"
}, {
    startingDate: "10-10-2024",
    endingDate: "12-10-2024",
    reason: "UUmmmm",
    status: "Rejected"
},]

const leaveRequestsSlice = createSlice({
    name: "leaveRequests",
    initialState,
    reducers: {},
    selectors: {
        selectLeaveRequests: (state) => state
    }
})

export const { selectLeaveRequests } = leaveRequestsSlice.selectors
export default leaveRequestsSlice.reducer