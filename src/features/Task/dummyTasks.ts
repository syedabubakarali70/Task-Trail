import { Task } from "@/Types/types";

export const tasks: Task[] = [
    // Tasks for Project: Website Redesign
    {
        id: "t1",
        title: "Design Wireframes",
        description: "Create wireframes for the new website layout.",
        assignedTo: ["John Doe", "Emily Davis"],
        assignedBy: "Jane Smith",
        startDate: "2024-10-01",
        dueDate: "2024-11-15",
        priority: "High",
        status: "In Progress",
        comments: []
    },
    {
        id: "t2",
        title: "Develop Frontend",
        description: "Implement the frontend for the new website.",
        assignedTo: ["Jane Smith"],
        assignedBy: "John Doe",
        startDate: "2024-11-01",
        dueDate: "2024-11-30",
        priority: "Medium",
        status: "To-do",
        comments: []
    },
    {
        id: "t3",
        title: "Content Creation",
        description: "Prepare updated content for the redesigned website.",
        assignedTo: ["Emily Davis"],
        assignedBy: "John Doe",
        startDate: "2024-10-10",
        dueDate: "2024-12-01",
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
        startDate: "2024-09-01",
        dueDate: "2024-12-01",
        priority: "High",
        status: "In Progress",
        comments: []
    },
    {
        id: "t5",
        title: "Backend Integration",
        description: "Connect the mobile app with the backend services.",
        assignedTo: ["Chris Lee"],
        assignedBy: "Mark Johnson",
        startDate: "2024-11-01",
        dueDate: "2025-01-15",
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
        assignedBy: "Ethan Wilson",
        startDate: "2024-04-01",
        dueDate: "2024-05-01",
        priority: "High",
        status: "Completed",
        comments: []
    },
    {
        id: "t7",
        title: "Create Marketing Materials",
        description: "Develop creative materials for the campaign.",
        assignedTo: ["Ethan Wilson"],
        assignedBy: "Sophia Martinez",
        startDate: "2024-05-05",
        dueDate: "2024-06-10",
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
        startDate: "2024-06-15",
        dueDate: "2024-06-30",
        priority: "High",
        status: "Completed",
        comments: []
    },
    {
        id: "t9",
        title: "Monitor Campaign Performance",
        description: "Track performance metrics and adjust if necessary.",
        assignedTo: ["Sophia Martinez"],
        assignedBy: "Ethan Wilson",
        startDate: "2024-06-20",
        dueDate: "2024-06-30",
        priority: "Low",
        status: "Completed",
        comments: []
    },

    // Tasks for Project: Cloud Migration
    {
        id: "t10",
        title: "Assess Current Infrastructure",
        description: "Analyze current on-premise infrastructure before migration.",
        assignedTo: ["Noah Thomas"],
        assignedBy: "Liam King",
        startDate: "2024-08-01",
        dueDate: "2024-09-30",
        priority: "High",
        status: "In Progress",
        comments: []
    },
    {
        id: "t11",
        title: "Migrate Databases to Cloud",
        description: "Move all databases to cloud services.",
        assignedTo: ["Liam King", "Charlotte White"],
        assignedBy: "Noah Thomas",
        startDate: "2024-10-01",
        dueDate: "2024-11-15",
        priority: "High",
        status: "To-do",
        comments: []
    },

    // Tasks for Project: Cybersecurity Audit
    {
        id: "t12",
        title: "Audit System Vulnerabilities",
        description: "Perform security audit to identify vulnerabilities.",
        assignedTo: ["Lucas Moore"],
        assignedBy: "Mia Scott",
        startDate: "2024-11-01",
        dueDate: "2024-12-15",
        priority: "High",
        status: "In Progress",
        comments: []
    },
    {
        id: "t13",
        title: "Penetration Testing",
        description: "Conduct penetration tests on critical systems.",
        assignedTo: ["Benjamin Harris"],
        assignedBy: "Lucas Moore",
        startDate: "2024-12-20",
        dueDate: "2025-01-10",
        priority: "Medium",
        status: "To-do",
        comments: []
    },

    // Tasks for Project: Customer Feedback Portal
    {
        id: "t14",
        title: "Define Requirements",
        description: "Gather and document requirements for feedback portal.",
        assignedTo: ["Amelia Hall"],
        assignedBy: "James Walker",
        startDate: "2023-12-01",
        dueDate: "2024-01-15",
        priority: "High",
        status: "Completed",
        comments: []
    },
    {
        id: "t15",
        title: "Develop Feedback Form",
        description: "Create the user interface for feedback submission.",
        assignedTo: ["James Walker"],
        assignedBy: "Amelia Hall",
        startDate: "2024-01-20",
        dueDate: "2024-03-01",
        priority: "Medium",
        status: "Completed",
        comments: []
    },

    // Tasks for Project: Data Warehouse Implementation
    {
        id: "t16",
        title: "Design Data Models",
        description: "Design the data models for the warehouse.",
        assignedTo: ["Henry Allen"],
        assignedBy: "Chloe Wright",
        startDate: "2024-06-01",
        dueDate: "2024-08-01",
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
        startDate: "2024-08-05",
        dueDate: "2024-09-15",
        priority: "Medium",
        status: "To-do",
        comments: []
    },
    {
        id: "t18",
        title: "Test Data Warehouse",
        description: "Test data integrity and performance.",
        assignedTo: ["Daniel Hill"],
        assignedBy: "Henry Allen",
        startDate: "2024-09-20",
        dueDate: "2024-10-05",
        priority: "Medium",
        status: "To-do",
        comments: []
    },

    // Tasks for Project: Employee Training Program
    {
        id: "t19",
        title: "Develop Training Material",
        description: "Create all necessary material for the training program.",
        assignedTo: ["Ella Green"],
        assignedBy: "Oliver Adams",
        startDate: "2024-04-01",
        dueDate: "2024-06-01",
        priority: "High",
        status: "Completed",
        comments: []
    },
    {
        id: "t20",
        title: "Schedule Training Sessions",
        description: "Organize and schedule training sessions for new employees.",
        assignedTo: ["Oliver Adams"],
        assignedBy: "Lily Campbell",
        startDate: "2024-06-05",
        dueDate: "2024-07-10",
        priority: "Medium",
        status: "Completed",
        comments: []
    },
    {
        id: "t21",
        title: "Evaluate Training Feedback",
        description: "Collect and analyze feedback from training sessions.",
        assignedTo: ["Lily Campbell"],
        assignedBy: "Ella Green",
        startDate: "2024-07-15",
        dueDate: "2024-07-20",
        priority: "Low",
        status: "Completed",
        comments: []
    },

    // Tasks for Project: AI Integration
    {
        id: "t22",
        title: "Research AI Solutions",
        description: "Identify AI solutions for automation.",
        assignedTo: ["Sophia Roberts"],
        assignedBy: "David Perez",
        startDate: "2024-09-01",
        dueDate: "2024-11-01",
        priority: "High",
        status: "In Progress",
        comments: []
    },
    {
        id: "t23",
        title: "Implement AI in Product",
        description: "Integrate AI capabilities into the product for automation.",
        assignedTo: ["David Perez"],
        assignedBy: "Grace Edwards",
        startDate: "2024-11-10",
        dueDate: "2025-02-15",
        priority: "High",
        status: "To-do",
        comments: []
    },

    // Tasks for Project: Sustainability Initiative
    {
        id: "t24",
        title: "Sustainability Assessment",
        description: "Analyze current environmental impact and areas of improvement.",
        assignedTo: ["Elijah Ramirez"],
        assignedBy: "Isabella Stewart",
        startDate: "2024-10-01",
        dueDate: "2024-12-01",
        priority: "High",
        status: "In Progress",
        comments: []
    },
    {
        id: "t25",
        title: "Implement Green Practices",
        description: "Deploy new green practices in daily operations.",
        assignedTo: ["Isabella Stewart"],
        assignedBy: "Aiden Barnes",
        startDate: "2025-01-01",
        dueDate: "2025-04-01",
        priority: "Medium",
        status: "To-do",
        comments: []
    },
    {
        id: "t26",
        title: "Sustainability Report",
        description: "Compile a report on the sustainability efforts and outcomes.",
        assignedTo: ["Aiden Barnes"],
        assignedBy: "Elijah Ramirez",
        startDate: "2025-04-10",
        dueDate: "2025-06-01",
        priority: "Low",
        status: "To-do",
        comments: []
    }
];
