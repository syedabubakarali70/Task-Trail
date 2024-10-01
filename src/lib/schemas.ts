import { z } from "zod";


export const ProjectStatusSchema = z.enum(['active', 'completed', 'on-hold'])
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

export const TaskPrioritySchema = z.enum(["Low", "Medium", "High"])
export const TaskStatusSchema = z.enum(["In Progress", "Completed", "To-do", "Stuck"])
// Task Schema
export const TaskSchema = z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    assignedTo: z.array(z.string()),
    assignedBy: z.string(),
    startDate: z.string(),
    dueDate: z.string(),
    priority: TaskPrioritySchema,
    status: TaskStatusSchema,
    comments: z.array(CommentSchema),
});

export const RoleSchema = z.enum(["admin", "employee", "manager"])
export const ProfileStatusSchema = z.enum(["Active", "on Leave", "Terminated"])
// Profile Schema
export const ProfileSchema = z.object({
    id: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    email: z.string(),
    phoneNumber: z.string(),
    department: z.string(),
    role: RoleSchema,
    position: z.string(),
    status: ProfileStatusSchema,
    address: z.string(),
});

// Notification Schema
export const NotificationSchema = z.object({
    id: z.number(),
    msg: z.string(),
    date: z.string(),
});

export const LeaveRequestStatusSchema = z.enum(["Pending", "Approved", "Rejected"])
// LeaveRequest Schema
export const LeaveRequestSchema = z.object({
    startingDate: z.string(),
    endingDate: z.string(),
    reason: z.string(),
    status: LeaveRequestStatusSchema,
});

// Attendance Schema
export const AttendanceSchema = z.object({
    date: z.string(),
    checkInTime: z.date(),
    checkOutTime: z.date(),
});

export const AttendanceStatusSchema = z.enum(["Absent", "Present", "on Leave"])

export const AttendanceSliceSchema = z.object({
    status: AttendanceStatusSchema,
    isOnLeave: z.boolean(),
    totalActiveDays: z.number(),
    totalLeaves: z.number(),
    leavesAvailed: z.number(),
    attendanceHistory: z.array(AttendanceSchema),
});