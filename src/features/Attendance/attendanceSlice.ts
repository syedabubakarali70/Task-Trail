import { createSlice } from "@reduxjs/toolkit";

export type Attendance = {
    date: string,
    checkInTime: Date,
    checkOutTime: Date
}

type InitialState = {
    status: "Absent" | "Present" | "on Leave",
    isOnLeave: boolean,
    attendanceHistory: Attendance[]
}

const initialState: InitialState = {
    status: "on Leave",
    isOnLeave: true,
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
        selectStatus: (state) => state.status
    }
})

export const { setStatus } = attendanceSlice.actions
export const { selectStatus } = attendanceSlice.selectors
export default attendanceSlice.reducer
