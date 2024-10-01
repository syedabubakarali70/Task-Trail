import { z } from "zod";

// Project Schema
export const ProjectSchema = z.object({
    id: z.string(),
    name: z.string(),
    description: z.string(),
    status: z.enum(['active', 'completed', 'on-hold']),
    members: z.array(z.string()),
    dueDate: z.string(),
    tasksId: z.array(z.string()),
    progress: z.number(),
});

// Comment Schema
export const CommentSchema = z.object({
    id: z.string(),
    author: z.string(),
    text: z.string(),
});

// Task Schema
export const TaskSchema = z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    assignedTo: z.array(z.string()),
    assignedBy: z.string(),
    startDate: z.string(),
    dueDate: z.string(),
    priority: z.enum(["Low", "Medium", "High"]),
    status: z.enum(["In Progress", "Completed", "To-do", "Stuck"]),
    comments: z.array(CommentSchema),
});

// Profile Schema
export const ProfileSchema = z.object({
    id: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    email: z.string(),
    phoneNumber: z.string(),
    department: z.string(),
    role: z.enum(["admin", "employee", "manager"]),
    position: z.string(),
    status: z.enum(["Active", "on Leave", "Terminated"]),
    address: z.string(),
});

// Notification Schema
export const NotificationSchema = z.object({
    id: z.number(),
    msg: z.string(),
    date: z.string(),
});

// LeaveRequest Schema
export const LeaveRequestSchema = z.object({
    startingDate: z.string(),
    endingDate: z.string(),
    reason: z.string(),
    status: z.enum(["Pending", "Approved", "Rejected"]),
});

// Attendance Schema
export const AttendanceSchema = z.object({
    date: z.string(),
    checkInTime: z.date(),
    checkOutTime: z.date(),
});

export const AttendanceSliceSchema = z.object({
    status: z.enum(["Absent", "Present", "on Leave"]),
    isOnLeave: z.boolean(),
    totalActiveDays: z.number(),
    totalLeaves: z.number(),
    leavesAvailed: z.number(),
    attendanceHistory: z.array(AttendanceSchema),
});