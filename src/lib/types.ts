// export interface Project {
//     id: string;
//     name: string;
//     description: string;
//     status: 'active' | 'completed' | 'on-hold';
//     members: string[];
//     dueDate: string;
//     tasksId: string[],
//     progress: number
// }

// export type Comment = {
//     id: string,
//     author: string,
//     text: string
// }

// export type Task = {
//     id: string,
//     title: string,
//     description: string,
//     assignedTo: string[],
//     assignedBy: string,
//     startDate: string,
//     dueDate: string
//     priority: "Low" | "Medium" | "High",
//     status: "In Progress" | "Completed" | "To-do" | "Stuck",
//     comments: Comment[]
// }

// export type Profile = {
//     id: string,
//     firstName: string,
//     lastName: string,
//     email: string,
//     phoneNumber: string,
//     department: string,
//     role: "admin" | "employee" | "manager",
//     position: string,
//     status: "Active" | "on Leave" | "Terminated",
//     address: string,
// }

// export type Notification = {
//     id: number,
//     msg: string,
//     date: string,
// }

// export type LeaveRequest = {
//     startingDate: string,
//     endingDate: string,
//     reason: string,
//     status: "Pending" | "Approved" | "Rejected"
// }

// export type Attendance = {
//     date: string,
//     checkInTime: Date,
//     checkOutTime: Date
// }

import { z } from "zod";
import {
    ProjectSchema,
    CommentSchema,
    TaskSchema,
    ProfileSchema,
    NotificationSchema,
    LeaveRequestSchema,
    AttendanceSchema,
    AttendanceSliceSchema,
    ProjectStatusSchema,
    TaskPrioritySchema,
    TaskStatusSchema,
    RoleSchema,
    ProfileStatusSchema,
    AttendanceStatusSchema,
    LeaveRequestStatusSchema
} from "./schemas.ts";

export type Project = z.infer<typeof ProjectSchema>;
export type Comment = z.infer<typeof CommentSchema>;
export type Task = z.infer<typeof TaskSchema>;
export type Profile = z.infer<typeof ProfileSchema>;
export type Notification = z.infer<typeof NotificationSchema>;
export type LeaveRequest = z.infer<typeof LeaveRequestSchema>;
export type Attendance = z.infer<typeof AttendanceSchema>;
export type AttendanceSlice = z.infer<typeof AttendanceSliceSchema>;
export type ProjectStatus = z.infer<typeof ProjectStatusSchema>;
export type TaskPriority = z.infer<typeof TaskPrioritySchema>;
export type TaskStatus = z.infer<typeof TaskStatusSchema>;
export type Role = z.infer<typeof RoleSchema>;
export type ProfileStatus = z.infer<typeof ProfileStatusSchema>;
export type AttendanceStatus = z.infer<typeof AttendanceStatusSchema>;
export type LeaveRequestStatus = z.infer<typeof LeaveRequestStatusSchema>;