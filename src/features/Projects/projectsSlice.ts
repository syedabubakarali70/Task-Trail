import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { Project } from '@/Types/types';  // Adjust this import to match your project types

// Define the initial state type
interface ProjectsState {
    projects: Project[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

// Initial state
const initialState: ProjectsState = {
    projects: [{
        id: '1',
        description: "Project Description",
        members: ["1"],
        dueDate: "01-02-2025",
        name: "Project 1",
        status: "active"
    }],
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
