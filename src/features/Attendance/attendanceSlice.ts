import { createSlice } from "@reduxjs/toolkit";
import { Attendance } from "@/Types/types";

type InitialState = {
    status: "Absent" | "Present" | "on Leave",
    isOnLeave: boolean,
    totalActiveDays: number,
    totalLeaves: number,
    leavesAvailed: number,
    attendanceHistory: Attendance[]
}

const initialState: InitialState = {
    status: "on Leave",
    isOnLeave: true,
    totalActiveDays: 150,
    totalLeaves: 30,
    leavesAvailed: 10,
    attendanceHistory: []
}

const attendanceSlice = createSlice({
    name: 'attendance',
    initialState,
    reducers: {
        setStatus: (state) => {
            if (state.status === "Present") {
                if (state.isOnLeave)
                    state.status = "on Leave"
                else
                    state.status = "Absent"
            }
            else {
                state.status = "Present"
            }
        }
    },
    selectors: {
        selectStatus: (state) => state.status,
        selectTotalLeaves: (state) => state.totalLeaves,
        selectTotalActiveDays: (state) => state.totalActiveDays,
        selectLeavesAvailed: (state) => state.leavesAvailed
    }
})

export const { setStatus } = attendanceSlice.actions
export const { selectStatus, selectLeavesAvailed, selectTotalActiveDays, selectTotalLeaves } = attendanceSlice.selectors
export default attendanceSlice.reducer
