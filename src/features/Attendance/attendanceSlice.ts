import { createSlice } from "@reduxjs/toolkit";

export type Attendance = {
    date: string,
    checkInTime: Date,
    checkOutTime: Date
}

type InitialState = {
    status: "Absent" | "Present" | "on Leave",
    attendanceHistory: Attendance[]
}

const initialState: InitialState = {
    status: "on Leave",
    attendanceHistory: []
}

const attendanceSlice = createSlice({
    name: 'attendance',
    initialState,
    reducers: {
        setStatus: (state) => {
            if (state.status === "Absent") {
                state.status = "Present"
            }
            else {
                state.status = "Absent"
            }
        }
    },
    selectors: {
        selectStatus: (state) => state.status
    }
})

export const { setStatus } = attendanceSlice.actions
export const { selectStatus } = attendanceSlice.selectors
export default attendanceSlice.reducer
