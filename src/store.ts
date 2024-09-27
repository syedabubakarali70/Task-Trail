import { configureStore } from '@reduxjs/toolkit'
import type { Action, ThunkAction } from '@reduxjs/toolkit'
import profileReducer from "@/features/Profile/profileSlice"
import leaveRequestsReducer from './features/LeaveRequests/leaveRequestSlice'
import notificationsReducer from "@/features/Notifications/notificationsSlice"
import attendanceReducer from './features/Attendance/attendanceSlice'
import taskReducer from "@/features/Task/taskSlice"
import projectReducer from "@/features/Projects/projectsSlice"
export const store = configureStore({
    reducer: {
        profile: profileReducer,
        leaveRequests: leaveRequestsReducer,
        notifications: notificationsReducer,
        attendance: attendanceReducer,
        task: taskReducer,
        projects: projectReducer
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