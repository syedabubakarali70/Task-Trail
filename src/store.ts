import { configureStore } from '@reduxjs/toolkit'
import type { Action, ThunkAction } from '@reduxjs/toolkit'
import profileReducer from "@/features/Profile/profileSlice"
import leaveRequestsReducer from './features/LeaveRequests/leaveRequestSlice'
import notificationsReducer from "@/features/Notifications/notificationsSlice"
export const store = configureStore({
    reducer: {
        profile: profileReducer,
        leaveRequests: leaveRequestsReducer,
        notifications: notificationsReducer
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

// Infer the type of `store`
export type AppStore = typeof store
// Define a reusable type describing thunk functions
export type AppThunk<ThunkReturnType = void> = ThunkAction<
    ThunkReturnType,
    RootState,
    unknown,
    Action
>