// import { z } from "zod";


// export const ProjectStatusSchema = z.enum(['active', 'completed', 'on-hold'])
// // Project Schema
// export const ProjectSchema = z.object({
//     id: z.string(),
//     name: z.string(),
//     description: z.string(),
//     status: ProjectStatusSchema,
//     members: z.array(z.string()),
//     dueDate: z.string(),
//     tasksId: z.array(z.string()),
//     progress: z.number(),
// });

// // Comment Schema
// export const CommentSchema = z.object({
//     id: z.string(),
//     author: z.string(),
//     text: z.string(),
// });

// export const TaskPrioritySchema = z.enum(["Low", "Medium", "High"])
// export const TaskStatusSchema = z.enum(["In Progress", "Completed", "To-do", "Stuck"])
// // Task Schema
// export const TaskSchema = z.object({
//     id: z.string(),
//     title: z.string(),
//     description: z.string(),
//     assignedTo: z.array(z.string()),
//     assignedBy: z.string(),
//     startDate: z.date(),
//     dueDate: z.string(),
//     priority: TaskPrioritySchema,
//     status: TaskStatusSchema,
//     comments: z.array(CommentSchema),
// });

// export const RoleSchema = z.enum(["admin", "employee", "manager"])
// export const ProfileStatusSchema = z.enum(["Active", "on Leave", "Terminated"])
// // Profile Schema
// export const ProfileSchema = z.object({
//     id: z.string(),
//     firstName: z.string(),
//     lastName: z.string(),
//     email: z.string(),
//     phoneNumber: z.string(),
//     department: z.string(),
//     role: RoleSchema,
//     position: z.string(),
//     status: ProfileStatusSchema,
//     address: z.string(),
// });

// // Notification Schema
// export const NotificationSchema = z.object({
//     id: z.number(),
//     msg: z.string(),
//     date: z.string(),
// });

// export const LeaveRequestStatusSchema = z.enum(["Pending", "Approved", "Rejected"])
// // LeaveRequest Schema
// export const LeaveRequestSchema = z.object({
//     startingDate: z.string(),
//     endingDate: z.string(),
//     reason: z.string(),
//     status: LeaveRequestStatusSchema,
// });

// // Attendance Schema
// export const AttendanceSchema = z.object({
//     date: z.string(),
//     checkInTime: z.date(),
//     checkOutTime: z.date(),
// });

// export const AttendanceStatusSchema = z.enum(["Absent", "Present", "on Leave"])

// export const AttendanceSliceSchema = z.object({
//     status: AttendanceStatusSchema,
//     isOnLeave: z.boolean(),
//     totalActiveDays: z.number(),
//     totalLeaves: z.number(),
//     leavesAvailed: z.number(),
//     attendanceHistory: z.array(AttendanceSchema),
// });

import { z } from "zod";
import mongoose from "mongoose";

// Mongoose's ObjectId
const { Types } = mongoose;

// Custom Zod validator for MongoDB ObjectId
const ObjectIdSchema = z.string().refine((val) => Types.ObjectId.isValid(val), {
    message: "Invalid MongoDB ObjectId",
});

// Project Status Enum
export const ProjectStatusSchema = z.enum(['active', 'completed', 'on-hold']);

// Project Schema using Zod for validation
export const ProjectSchema = z.object({
    id: ObjectIdSchema,
    title: z
        .string()
        .min(1, "Project title is required")
        .refine((value) => value.trim().length > 0, {
            message: "Project title cannot be empty or only spaces",
        }),
    description: z.string().optional(),
    status: ProjectStatusSchema,
    members: z.array(ObjectIdSchema),
    dueDate: z.date(),
    tasksId: z.array(ObjectIdSchema).default([]),
    progress: z.number().min(0).max(100).default(0),
    // createdAt: z.date().optional().default(() => new Date()),
    // updatedAt: z.date().optional().default(() => new Date()),
});

// Comment Schema
export const CommentSchema = z.object({
    id: ObjectIdSchema,
    author: ObjectIdSchema,
    text: z.string().min(1, "Comment text cannot be empty"),
    createdAt: z.date().default(() => new Date()),
});

// Task Schema
export const TaskSchema = z.object({
    id: ObjectIdSchema,
    title: z
        .string()
        .min(1, "Task title is required")
        .refine((value) => value.trim().length > 0, {
            message: "Task title cannot be empty or only spaces",
        }),
    description: z.string().optional(),
    assignedTo: z.array(ObjectIdSchema),
    assignedBy: ObjectIdSchema,
    startDate: z.date(),
    dueDate: z.date(),
    priority: z.enum(["Low", "Medium", "High"]),
    status: z.enum(["In Progress", "Completed", "To-do", "Stuck"]).default("To-do"),
    comments: z.array(CommentSchema).optional(),
    // createdAt: z.date().default(() => new Date()),
    // updatedAt: z.date().default(() => new Date()),
});

// Task Priority Enum
export const TaskPrioritySchema = z.enum(["Low", "Medium", "High"]);

// Task Status Enum
export const TaskStatusSchema = z.enum(["In Progress", "Completed", "To-do", "Stuck"]);

// Role Enum
export const RoleSchema = z.enum(["admin", "employee", "manager"]);

// Profile Status Enum
export const ProfileStatusSchema = z.enum(["Active", "on Leave", "Terminated"]);

// Profile Schema
export const ProfileSchema = z.object({
    id: ObjectIdSchema,
    firstName: z.string().min(1, "First name is required").refine((value) => value.trim().length > 0, {
        message: "First Name cannot be empty or only spaces",
    }),
    lastName: z.string().min(1, "Last name is required").refine((value) => value.trim().length > 0, {
        message: "Last Name cannot be empty or only spaces",
    }),
    email: z.string().email("Invalid email format"),
    phoneNumber: z.string().regex(/^[0-9]{10,15}$/, "Invalid phone number"),
    department: z.string().min(1, "Department is required").optional(),
    role: RoleSchema,
    position: z.string().min(1, "Position is required"),
    status: ProfileStatusSchema,
    address: z.string().optional(),
    // createdAt: z.date().default(() => new Date()),
    // updatedAt: z.date().default(() => new Date()),
});

// Notification Schema
export const NotificationSchema = z.object({
    id: z.number(),
    msg: z.string().min(1, "Message is required"),
    date: z.date(),
});

// Leave Request Status Enum
export const LeaveRequestStatusSchema = z.enum(["Pending", "Approved", "Rejected"]);

// Leave Request Schema
export const LeaveRequestSchema = z.object({
    startingDate: z.date(),
    endingDate: z.date(),
    reason: z.string().min(1, "Reason for leave is required"),
    status: LeaveRequestStatusSchema,
});

// Attendance Schema
export const AttendanceSchema = z.object({
    date: z.date(),
    checkInTime: z.date(),
    checkOutTime: z.date(),
});

// Attendance Status Enum
export const AttendanceStatusSchema = z.enum(["Absent", "Present", "on Leave"]);

// Attendance Slice Schema
export const AttendanceSliceSchema = z.object({
    status: AttendanceStatusSchema,
    isOnLeave: z.boolean(),
    totalActiveDays: z.number().nonnegative(),
    totalLeaves: z.number().nonnegative(),
    leavesAvailed: z.number().nonnegative(),
    attendanceHistory: z.array(AttendanceSchema),
});

