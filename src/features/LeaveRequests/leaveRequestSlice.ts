import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LeaveRequest } from "@/Types/types";

const initialState: LeaveRequest[] = [{
    startingDate: "10-10-2024",
    endingDate: "12-10-2024",
    reason: "UUmmmmfcmwencfjcvjr3 vc fcefcneflvc vfvnr3nv34tklc fncevn3kvc f3vn3v3evc vt3nvc3jcv ljsgjdb bgfbjfbn hgnbfdjnbd dfgbnfdnbjdf gfbfnbfdnb gfjbnfjbnfjbn gfjnbfdbnjfdnb fgjnbfjdnbjfndbnj fgbjnfjgnbnfjg b fghnbjfgb fgjbnfjgb fnjfnbfjbgf nfnbfn fj",
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
    reducers: {
        newRequest: (state, payload: PayloadAction<{ startingDate: string, endingDate: string, reason: string }>) => {
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