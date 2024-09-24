import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export type Comment = {
    id: string,
    author: string,
    text: string
}

export type Task = {
    id: string,
    title: string,
    description: string,
    assignedTo: string[],
    assignedBy: string,
    startDate: string,
    dueDate: string
    priority: "Low" | "Medium" | "High",
    status: "In Progress" | "Completed" | "To-do" | "Stuck",
    comments: Comment[]
}

const initialState: Task[] = [{
    "id": "task1",
    "title": "Implement Authentication",
    "description": "Develop the login functionality for the app using JWT.",
    "assignedTo": ["John Doe", "Jane Smith"],
    "assignedBy": "Manager A",
    "startDate": "2024-09-01",
    "dueDate": "2024-09-10",
    "priority": "High",
    "status": "In Progress",
    "comments": [
        { "id": "comment1", "author": "John Doe", "text": "Started working on the backend." },
        { "id": "comment2", "author": "Jane Smith", "text": "Working on the frontend login form." }
    ]
},
{
    "id": "task2",
    "title": "Implement Authentication",
    "description": "Develop the login functionality for the app using JWT.",
    "assignedTo": ["John Doe", "Jane Smith"],
    "assignedBy": "Manager A",
    "startDate": "2024-09-01",
    "dueDate": "2024-09-10",
    "priority": "Low",
    "status": "Stuck",
    "comments": [
        { "id": "comment1", "author": "John Doe", "text": "Started working on the backend." },
        { "id": "comment2", "author": "Jane Smith", "text": "Working on the frontend login form." }
    ]
},
{
    "id": "task3",
    "title": "Implement Authentication",
    "description": "Develop the login functionality for the app using JWT.",
    "assignedTo": ["John Doe", "Jane Smith"],
    "assignedBy": "Manager A",
    "startDate": "2024-09-01",
    "dueDate": "2024-09-10",
    "priority": "Medium",
    "status": "To-do",
    "comments": [
        { "id": "comment1", "author": "John Doe", "text": "Started working on the backend." },
        { "id": "comment2", "author": "Jane Smith", "text": "Working on the frontend login form." }
    ]
},


]

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
