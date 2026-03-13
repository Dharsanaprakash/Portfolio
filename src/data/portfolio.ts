import {
  Sparkles,
  Search,
  TrendingUp,
  Brain,
  FileSpreadsheet,
  BarChart3,
  Database,
  FileCode
} from "lucide-react";

export const personalInfo = {
  name: "Dharsana Prakash",
  title: "Data Analyst",
  email: "dharsanasp28@gmail.com",
  phone: "9360117147",
  location: "Erode, Tamil Nadu, India",

  about:
    "Entry-level Data Analyst with hands-on experience in Excel and Power BI, specializing in data cleaning, exploratory data analysis, and data visualization. Experienced in analyzing real-world datasets to identify trends and generate actionable insights. Currently learning SQL and expanding analytics capabilities.",

  social: {
    github: "https://github.com/Dharsanaprakash",
    linkedin: "https://www.linkedin.com/in/dharsana-s-p-480570259"
  }
};

export const techSkills = [
  { name: "Data Cleaning", icon: Sparkles },
  { name: "Exploratory Data Analysis", icon: Search },
  { name: "Trend Analysis", icon: TrendingUp },
  { name: "Data Interpretation", icon: Brain }
];

export const tools = [
  { name: "Microsoft Excel", icon: FileSpreadsheet },
  { name: "Power BI", icon: BarChart3 },
  { name: "SQL", icon: Database },
  { name: "Python", icon: FileCode }
];

export const projects = [
  {
    title: "College Placement Data Analysis",
    description:
      "Analyzed student placement dataset using Excel to identify factors influencing hiring outcomes and examined relationships between CGPA, skills, internships, and placement status.",
    github: "https://github.com/Dharsanaprakash/College-Placement-Analysis"
  },

  {
    title: "Food Delivery Data Analysis",
    description:
      "Analyzed food delivery dataset to identify order patterns, peak delivery hours, and operational delays.",
    github: "https://github.com/Dharsanaprakash/Food-Delivery-Delay_Analysis"
  },

  {
    title: "Hospital Waiting Time Analysis",
    description:
      "Analyzed hospital patient dataset to identify waiting time patterns and operational bottlenecks.",
    github: "https://github.com/Dharsanaprakash/Hospital-Waiting-Time-Analysis"
  },

  {
    title: "E-commerce Product Return Data Analysis",
    description:
      "Analyzed e-commerce return dataset to identify product categories with high return rates and return trends.",
    github: "https://github.com/Dharsanaprakash/E-commerce-Product-Return-Analysis"
  }
];

export const certifications = [
  {
    title: "Quantium Data Analytics Job Simulation",
    description:
      "Completed practical tasks in data preparation, customer analytics, and commercial analytics."
  },

  {
    title: "Deloitte Data Analytics Job Simulation",
    description:
      "Performed data analysis and forensic technology tasks in a simulated analytics project."
  },

  {
    title: "GenAI Powered Data Analytics Simulation",
    description:
      "Worked on exploratory data analysis and AI-driven analytics for business insights."
  }
];

export const education = {
  college: {
    institution: "Kongu Engineering College, Erode",
    degree: "B.E Computer Science and Design",
    cgpa: "7.88"
  },

  school: {
    institution: "URC Natarajamani Mehta Higher Secondary School, Erode",
    grades: "12th Grade: 66.5% | 10th Grade: 75.6%"
  }
};