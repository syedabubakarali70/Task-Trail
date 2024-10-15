import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "../../lib/types";
import { tasks } from "./dummyTasks";
const initialState: Task[] = tasks

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        changeStatus: (state, action: PayloadAction<{ id: string, status: "In Progress" | "Completed" | "To-do" | "Stuck" }>) => {
            const task = state.find((task) => task.id === action.payload.id)
            if (task) {
                task.status = action.payload.status;
            }
        }
    },
    selectors: {
        selectTasks: (state) => state,
        selectTask: (state, id: string) => state.find(task => task.id === id)
    }
})

export const { selectTasks, selectTask } = taskSlice.selectors
export const { changeStatus } = taskSlice.actions

export default taskSlice.reducer
