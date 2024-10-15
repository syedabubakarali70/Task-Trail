import { Task } from "../../lib/types";

export const tasks: Task[] = [
    // Tasks for Project: Website Redesign
    // Tasks for Project: Website Redesign
    {
        id: "t1",
        title: "Design Wireframes",
        description: "Create wireframes for the new website layout.",
        assignedTo: ["Abubakar Ali", "John Doe"],
        assignedBy: "Jane Smith",
        startDate: new Date(2024, 9, 1),  // October 1, 2024
        dueDate: new Date(2024, 10, 15),  // November 15, 2024
        priority: "High",
        status: "In Progress",
        comments: []
    },
    {
        id: "t2",
        title: "Develop Frontend",
        description: "Implement the frontend for the new website.",
        assignedTo: ["Jane Smith"],
        assignedBy: "Abubakar Ali",
        startDate: new Date(2024, 10, 1), // November 1, 2024
        dueDate: new Date(2024, 10, 30),  // November 30, 2024
        priority: "Medium",
        status: "To-do",
        comments: []
    },
    {
        id: "t3",
        title: "Content Creation",
        description: "Prepare updated content for the redesigned website.",
        assignedTo: ["Abubakar Ali"],
        assignedBy: "Abubakar Ali",
        startDate: new Date(2024, 9, 10),  // October 10, 2024
        dueDate: new Date(2024, 11, 1),   // December 1, 2024
        priority: "Low",
        status: "To-do",
        comments: []
    },

    // Tasks for Project: Mobile App Development
    {
        id: "t4",
        title: "App UI Design",
        description: "Design user interface for both iOS and Android apps.",
        assignedTo: ["Mark Johnson", "Alice Brown"],
        assignedBy: "Chris Lee",
        startDate: new Date(2024, 8, 1),   // September 1, 2024
        dueDate: new Date(2024, 11, 1),    // December 1, 2024
        priority: "High",
        status: "In Progress",
        comments: []
    },
    {
        id: "t5",
        title: "Backend Integration",
        description: "Connect the mobile app with the backend services.",
        assignedTo: ["Abubakar Ali"],
        assignedBy: "Mark Johnson",
        startDate: new Date(2024, 10, 1),  // November 1, 2024
        dueDate: new Date(2025, 0, 15),    // January 15, 2025
        priority: "Medium",
        status: "To-do",
        comments: []
    },

    // Tasks for Project: Marketing Campaign 2024
    {
        id: "t6",
        title: "Campaign Strategy",
        description: "Define strategy for the marketing campaign.",
        assignedTo: ["Sophia Martinez"],
        assignedBy: "Abubakar Ali",
        startDate: new Date(2024, 3, 1),   // April 1, 2024
        dueDate: new Date(2024, 4, 1),     // May 1, 2024
        priority: "High",
        status: "Completed",
        comments: []
    },
    {
        id: "t7",
        title: "Create Marketing Materials",
        description: "Develop creative materials for the campaign.",
        assignedTo: ["Abubakar Ali"],
        assignedBy: "Sophia Martinez",
        startDate: new Date(2024, 4, 5),   // May 5, 2024
        dueDate: new Date(2024, 5, 10),    // June 10, 2024
        priority: "Medium",
        status: "Completed",
        comments: []
    },
    {
        id: "t8",
        title: "Launch Campaign",
        description: "Deploy marketing campaign across all channels.",
        assignedTo: ["Olivia Taylor"],
        assignedBy: "Sophia Martinez",
        startDate: new Date(2024, 5, 15),  // June 15, 2024
        dueDate: new Date(2024, 5, 30),    // June 30, 2024
        priority: "High",
        status: "Completed",
        comments: []
    },
    {
        id: "t9",
        title: "Monitor Campaign Performance",
        description: "Track performance metrics and adjust if necessary.",
        assignedTo: ["Sophia Martinez"],
        assignedBy: "Abubakar Ali",
        startDate: new Date(2024, 5, 20),  // June 20, 2024
        dueDate: new Date(2024, 5, 30),    // June 30, 2024
        priority: "Low",
        status: "Completed",
        comments: []
    },

    // Tasks for Project: Cloud Migration
    {
        id: "t10",
        title: "Assess Current Infrastructure",
        description: "Analyze current on-premise infrastructure before migration.",
        assignedTo: ["Abubakar Ali"],
        assignedBy: "Liam King",
        startDate: new Date(2024, 7, 1),   // August 1, 2024
        dueDate: new Date(2024, 8, 30),    // September 30, 2024
        priority: "High",
        status: "In Progress",
        comments: []
    },
    {
        id: "t11",
        title: "Migrate Databases to Cloud",
        description: "Move all databases to cloud services.",
        assignedTo: ["Liam King", "Charlotte White"],
        assignedBy: "Abubakar Ali",
        startDate: new Date(2024, 9, 1),   // October 1, 2024
        dueDate: new Date(2024, 10, 15),   // November 15, 2024
        priority: "High",
        status: "To-do",
        comments: []
    },

    // Tasks for Project: Cybersecurity Audit
    {
        id: "t12",
        title: "Audit System Vulnerabilities",
        description: "Perform security audit to identify vulnerabilities.",
        assignedTo: ["Abubakar Ali"],
        assignedBy: "Mia Scott",
        startDate: new Date(2024, 10, 1),  // November 1, 2024
        dueDate: new Date(2024, 11, 15),   // December 15, 2024
        priority: "High",
        status: "In Progress",
        comments: []
    },
    {
        id: "t13",
        title: "Penetration Testing",
        description: "Conduct penetration tests on critical systems.",
        assignedTo: ["Benjamin Harris"],
        assignedBy: "Abubakar Ali",
        startDate: new Date(2024, 11, 20), // December 20, 2024
        dueDate: new Date(2025, 0, 10),    // January 10, 2025
        priority: "Medium",
        status: "To-do",
        comments: []
    },

    // Tasks for Project: Customer Feedback Portal
    {
        id: "t14",
        title: "Define Requirements",
        description: "Gather and document requirements for feedback portal.",
        assignedTo: ["Abubakar Ali"],
        assignedBy: "James Walker",
        startDate: new Date(2023, 11, 1),  // December 1, 2023
        dueDate: new Date(2024, 0, 15),    // January 15, 2024
        priority: "High",
        status: "Completed",
        comments: []
    },
    {
        id: "t15",
        title: "Develop Feedback Form",
        description: "Create the user interface for feedback submission.",
        assignedTo: ["James Walker"],
        assignedBy: "Abubakar Ali",
        startDate: new Date(2024, 0, 20),  // January 20, 2024
        dueDate: new Date(2024, 2, 1),     // March 1, 2024
        priority: "Medium",
        status: "Completed",
        comments: []
    },

    // Tasks for Project: Data Warehouse Implementation
    {
        id: "t16",
        title: "Design Data Models",
        description: "Design the data models for the warehouse.",
        assignedTo: ["Abubakar Ali"],
        assignedBy: "Chloe Wright",
        startDate: new Date(2024, 5, 1),   // June 1, 2024
        dueDate: new Date(2024, 7, 1),     // August 1, 2024
        priority: "High",
        status: "In Progress",
        comments: []
    },
    {
        id: "t17",
        title: "Set Up ETL Pipelines",
        description: "Configure ETL pipelines for data ingestion.",
        assignedTo: ["Chloe Wright"],
        assignedBy: "Daniel Hill",
        startDate: new Date(2024, 7, 5),   // August 5, 2024
        dueDate: new Date(2024, 7, 26),
        priority: "High",
        status: "In Progress",
        comments: []
    }
];
