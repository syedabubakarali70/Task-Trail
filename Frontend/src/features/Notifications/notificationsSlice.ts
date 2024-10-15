import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Notification } from "@/lib/types";

const initialState: Notification[] = [
    {
        "id": 1,
        "msg": "Tommorrow will be off",
        "date": new Date(2024, 9, 19)  // October 19, 2024
    },
    {
        "id": 2,
        "msg": "New project assigned",
        "date": new Date(2024, 9, 20)  // October 20, 2024
    },
    {
        "id": 3,
        "msg": "Team meeting scheduled at 10 AM",
        "date": new Date(2024, 9, 21)  // October 21, 2024
    },
    {
        "id": 4,
        "msg": "Task deadline approaching",
        "date": new Date(2024, 9, 22)  // October 22, 2024
    },
    {
        "id": 5,
        "msg": "System maintenance on 23rd Oct",
        "date": new Date(2024, 9, 23)  // October 23, 2024
    },
    {
        "id": 6,
        "msg": "Your performance review is available",
        "date": new Date(2024, 9, 24)  // October 24, 2024
    },
    {
        "id": 7,
        "msg": "Holiday declared for Diwali",
        "date": new Date(2024, 9, 25)  // October 25, 2024
    },
    {
        "id": 8,
        "msg": "New features added to the platform",
        "date": new Date(2024, 9, 26)  // October 26, 2024
    },
    {
        "id": 9,
        "msg": "All hands meeting at 3 PM",
        "date": new Date(2024, 9, 27)  // October 27, 2024
    },
    {
        "id": 10,
        "msg": "Annual company event on 30th Oct",
        "date": new Date(2024, 9, 28)  // October 28, 2024
    }

]

const notificationsSlice = createSlice({
    name: 'notifications',
    initialState,
    reducers: {
        deleteNotification: (state, payload: PayloadAction<number>) => {
            return state.filter(noti => noti.id != payload.payload)
        }
    },
    selectors: {
        selectNotifications: (state) => state
    }
})
export const { selectNotifications } = notificationsSlice.selectors
export const { deleteNotification } = notificationsSlice.actions
export default notificationsSlice.reducer