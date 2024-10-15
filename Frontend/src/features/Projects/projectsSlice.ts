import { createSlice } from '@reduxjs/toolkit';
import { Project } from "@/lib/types";

// Define the initial state type
interface ProjectsState {
    projects: Project[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

// Initial state
const initialState: ProjectsState = {
    projects: [
        {
            id: "p1",
            title: "Website Redesign",
            description: "A complete overhaul of the company website to improve user experience.",
            status: "active",
            members: ["Abubakar Ali", "Jane Smith", "Emily Davis"],
            dueDate: new Date(2024, 11, 1),  // December 1, 2024
            tasksId: ["t1", "t2", "t3"],
            progress: 55
        },
        {
            id: "p2",
            title: "Mobile App Development",
            description: "Develop a mobile application for iOS and Android platforms.",
            status: "on-hold",
            members: ["Mark Johnson", "Alice Brown", "Abubakar Ali"],
            dueDate: new Date(2025, 1, 15),  // February 15, 2025
            tasksId: ["t4", "t5"],
            progress: 30
        },
        {
            id: "p3",
            title: "Marketing Campaign 2024",
            description: "Design and execute a marketing campaign for the upcoming product launch.",
            status: "completed",
            members: ["Sophia Martinez", "Ethan Wilson", "Olivia Taylor"],
            dueDate: new Date(2024, 5, 30),  // June 30, 2024
            tasksId: ["t6", "t7", "t8", "t9"],
            progress: 100
        },
        {
            id: "p4",
            title: "Cloud Migration",
            description: "Migrate all services and data to a cloud infrastructure.",
            status: "active",
            members: ["Noah Thomas", "Abubakar Ali", "Charlotte White"],
            dueDate: new Date(2024, 10, 20),  // November 20, 2024
            tasksId: ["t10", "t11"],
            progress: 65
        },
        {
            id: "p5",
            title: "Cybersecurity Audit",
            description: "Conduct a thorough cybersecurity audit to ensure system security.",
            status: "on-hold",
            members: ["Lucas Moore", "Mia Scott", "Benjamin Harris"],
            dueDate: new Date(2025, 0, 10),  // January 10, 2025
            tasksId: ["t12", "t13"],
            progress: 45
        },
        {
            id: "p6",
            title: "Customer Feedback Portal",
            description: "Develop a portal for collecting and analyzing customer feedback.",
            status: "completed",
            members: ["Amelia Hall", "James Walker", "Ava Young"],
            dueDate: new Date(2024, 2, 15),  // March 15, 2024
            tasksId: ["t14", "t15"],
            progress: 100
        },
        {
            id: "p7",
            title: "Data Warehouse Implementation",
            description: "Build a data warehouse to improve data analysis capabilities.",
            status: "active",
            members: ["Henry Allen", "Chloe Wright", "Daniel Hill"],
            dueDate: new Date(2024, 9, 5),  // October 5, 2024
            tasksId: ["t16", "t17", "t18"],
            progress: 70
        },
        {
            id: "p8",
            title: "Employee Training Program",
            description: "Design a training program for new employees on company protocols.",
            status: "completed",
            members: ["Ella Green", "Oliver Adams", "Lily Campbell"],
            dueDate: new Date(2024, 6, 20),  // July 20, 2024
            tasksId: ["t19", "t20", "t21"],
            progress: 100
        },
        {
            id: "p9",
            title: "AI Integration",
            description: "Integrate AI solutions to enhance product automation.",
            status: "active",
            members: ["Sophia Roberts", "David Perez", "Grace Edwards"],
            dueDate: new Date(2025, 2, 1),  // March 1, 2025
            tasksId: ["t22", "t23"],
            progress: 40
        },
        {
            id: "p10",
            title: "Sustainability Initiative",
            description: "Launch a company-wide sustainability initiative to reduce environmental impact.",
            status: "on-hold",
            members: ["Elijah Ramirez", "Isabella Stewart", "Aiden Barnes"],
            dueDate: new Date(2025, 5, 1),  // June 1, 2025
            tasksId: ["t24", "t25", "t26"],
            progress: 20
        }
    ],

    status: 'idle',
    error: null,
};

// Thunks for asynchronous actions (e.g., fetching data from the server)
// export const fetchProjects = createAsyncThunk('projects/fetchProjects', async () => {
//     const response = await fetch('/api/projects'); // Replace with your API endpoint
//     const data = await response.json();
//     return data as Project[];
// });

// export const addProject = createAsyncThunk('projects/addProject', async (newProject: Project) => {
//     const response = await fetch('/api/projects', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(newProject),
//     });
//     const data = await response.json();
//     return data as Project;
// });

// export const updateProject = createAsyncThunk('projects/updateProject', async (updatedProject: Project) => {
//     const response = await fetch(`/api/projects/${updatedProject.id}`, {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(updatedProject),
//     });
//     const data = await response.json();
//     return data as Project;
// });

// export const deleteProject = createAsyncThunk('projects/deleteProject', async (projectId: string) => {
//     await fetch(`/api/projects/${projectId}`, { method: 'DELETE' });
//     return projectId;
// });

// Create the slice
const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        // Reducer for manually updating the state, if needed
        resetProjectsState(state) {
            state.projects = [];
            state.status = 'idle';
            state.error = null;
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(fetchProjects.pending, (state) => {
    //             state.status = 'loading';
    //         })
    //         .addCase(fetchProjects.fulfilled, (state, action: PayloadAction<Project[]>) => {
    //             state.status = 'succeeded';
    //             state.projects = action.payload;
    //         })
    //         .addCase(fetchProjects.rejected, (state, action) => {
    //             state.status = 'failed';
    //             state.error = action.error.message || 'Failed to fetch projects';
    //         })
    //         .addCase(addProject.fulfilled, (state, action: PayloadAction<Project>) => {
    //             state.projects.push(action.payload);
    //         })
    //         .addCase(updateProject.fulfilled, (state, action: PayloadAction<Project>) => {
    //             const index = state.projects.findIndex((project: Project) => project.id === action.payload.id);
    //             if (index !== -1) {
    //                 state.projects[index] = action.payload;
    //             }
    //         })
    //         .addCase(deleteProject.fulfilled, (state, action: PayloadAction<string>) => {
    //             state.projects = state.projects.filter((project: Project) => project.id !== action.payload);
    //         });
    // },
    selectors: {
        selectAllProjects: (state) => state.projects,
        selectProjectById: (state, projectId: string) =>
            state.projects.find((project) => project.id === projectId)
    },

});

// Export actions and reducer
export const { resetProjectsState } = projectsSlice.actions;

export default projectsSlice.reducer;

export const { selectAllProjects, selectProjectById } = projectsSlice.selectors
