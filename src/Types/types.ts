export interface Project {
    id: string;
    name: string;
    description: string;
    status: 'active' | 'completed' | 'on-hold';
    members: string[];
    dueDate: string;
    tasksId: string[],
    progress: number
}

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

export type Profile = {
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    department: string,
    role: "admin" | "employee" | "manager",
    position: string,
    status: "Active" | "on Leave" | "Terminated",
    address: string,
}

export type Notification = {
    id: number,
    msg: string,
    date: string,
}

export type LeaveRequest = {
    startingDate: string,
    endingDate: string,
    reason: string,
    status: "Pending" | "Approved" | "Rejected"
}

export type Attendance = {
    date: string,
    checkInTime: Date,
    checkOutTime: Date
}