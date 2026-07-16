import {
    FaTags,
    FaUsers,
    FaBalanceScale,
    FaStar,
    FaCamera,
    FaGamepad,
    FaBatteryFull,
    FaMoneyBillWave,
    FaBriefcase,
    FaMobileAlt,
    FaRobot,
    FaWifi,
    FaTv,
} from 'react-icons/fa';


export const statsData = [
    {
        id: 1,
        label: 'Phones Listed',
        value: '12,000+',
        icon: FaMobileAlt,
        description: 'Devices available for comparison'
    },
    {
        id: 2,
        label: 'Brands Deals',
        value: '55+',
        icon: FaTags,
        description: 'Leading mobile manufacturers'
    },
    {
        id: 3,
        label: 'Monthly Visitors',
        value: '150K+',
        icon: FaUsers,
        description: 'Unique visitors per month'
    },

    {
        id: 5,
        label: 'User Satisfaction',
        value: '95%',
        icon: FaStar,
        description: 'Positive feedback from users'
    },
    {
        id: 4,
        label: 'Comparisons Made',
        value: '50K+',
        icon: FaBalanceScale,
        description: 'Total comparisons performed'
    },
];


export const phoneCategories = [
    {
        title: "Camera Phones",
        icon: FaCamera,
    },
    {
        title: "Gaming Phones",
        icon: FaGamepad,
    },
    {
        title: "Battery Phones",
        icon: FaBatteryFull,
    },
    {
        title: "Budget Phones",
        icon: FaMoneyBillWave,
    },
    {
        title: "Business Phones",
        icon: FaBriefcase,
    },
    {
        title: "Compact Phones",
        icon: FaMobileAlt,
    },
    {
        title: "Display Phones",
        icon: FaTv,
    },
    {
        title: "AI Phones",
        icon: FaRobot,
    },
    {
        title: "5G Phones",
        icon: FaWifi,
    },
];