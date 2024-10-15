import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LeaveRequest } from "../../lib/types";

const initialState: LeaveRequest[] = [
    {
        startingDate: new Date(2024, 9, 15), // October 15, 2024
        endingDate: new Date(2024, 9, 20),   // October 20, 2024
        reason: "Medical leave due to illness",
        status: "Pending",
    },
    {
        startingDate: new Date(2024, 10, 1), // November 1, 2024
        endingDate: new Date(2024, 10, 5),   // November 5, 2024
        reason: "Family emergency",
        status: "Approved",
    },
    {
        startingDate: new Date(2024, 10, 10), // November 10, 2024
        endingDate: new Date(2024, 10, 12),   // November 12, 2024
        reason: "Personal vacation",
        status: "Rejected",
    },
    {
        startingDate: new Date(2024, 11, 20), // December 20, 2024
        endingDate: new Date(2024, 11, 25),   // December 25, 2024
        reason: "Christmas holidays",
        status: "Pending",
    },
    {
        startingDate: new Date(2024, 11, 28), // December 28, 2024
        endingDate: new Date(2025, 0, 2),     // January 2, 2025
        reason: "New Year celebrations",
        status: "Approved",
    },
    {
        startingDate: new Date(2025, 0, 5), // January 5, 2025
        endingDate: new Date(2025, 0, 10),   // January 10, 2025
        reason: "Travel plans",
        status: "Rejected",
    }
];

const leaveRequestsSlice = createSlice({
    name: "leaveRequests",
    initialState,
    reducers: {
        newRequest: (state, payload: PayloadAction<{ startingDate: Date, endingDate: Date, reason: string }>) => {
            const request: LeaveRequest = {
                status: "Pending",
                startingDate: payload.payload.startingDate,
                endingDate: payload.payload.endingDate,
                reason: payload.payload.reason
            }
            state.push(request)
        }
    },
    selectors: {
        selectLeaveRequests: (state) => state
    }
})

export const { selectLeaveRequests } = leaveRequestsSlice.selectors
export const { newRequest } = leaveRequestsSlice.actions
export default leaveRequestsSlice.reducer