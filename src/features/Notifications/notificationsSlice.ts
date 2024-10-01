import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Notification } from "@/lib/types";

const initialState: Notification[] = [
    {
        "id": 1,
        "msg": "Tommorrow will be off",
        "date": "19-10-2024"
    },
    {
        "id": 2,
        "msg": "New project assigned",
        "date": "20-10-2024"
    },
    {
        "id": 3,
        "msg": "Team meeting scheduled at 10 AM",
        "date": "21-10-2024"
    },
    {
        "id": 4,
        "msg": "Task deadline approaching",
        "date": "22-10-2024"
    },
    {
        "id": 5,
        "msg": "System maintenance on 23rd Oct",
        "date": "23-10-2024"
    },
    {
        "id": 6,
        "msg": "Your performance review is available",
        "date": "24-10-2024"
    },
    {
        "id": 7,
        "msg": "Holiday declared for Diwali",
        "date": "25-10-2024"
    },
    {
        "id": 8,
        "msg": "New features added to the platform",
        "date": "26-10-2024"
    },
    {
        "id": 9,
        "msg": "All hands meeting at 3 PM",
        "date": "27-10-2024"
    },
    {
        "id": 10,
        "msg": "Annual company event on 30th Oct",
        "date": "28-10-2024"
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