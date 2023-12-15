import React from 'react'
import { Link } from 'react-router-dom'

export const landingInformationCards = [
    {
        cardTitle: 'About',
        cardContent:
            'Our web application simplifies the entire process, allowing managers to effortlessly create, enroll, assign groups, and set schedules.',
        panelKey: 'About',
    },
    {
        cardTitle: 'How',
        cardContent:
            'With the ability to generate QR codes, managers can streamline check-in procedures.',
        panelKey: 'How',
    },
    {
        cardTitle: 'Breakdown',
        cardContent:
            'When users scan the QR code, it not only validates their presence but also records their punch-in and out times, ensuring precise attendance tracking.',
        panelKey: 'Breakdown',
    },
    {
        cardTitle: 'More Info',
        cardContent:
            "Additionally, users can conveniently access their schedules and view assigned tasks, along with the responsible manager's details. Experience the future of workforce management with Speedy Check-In today!",
        panelKey: 'More Info',
    },
]

interface MyObject {
    [key: string]: any
}

export const navigationOptions: MyObject = {
    public: [
        ['/signup', 'Sign Up'],
        ['/login', 'Login'],
        ['/', 'About'],
    ],
    user: [['/test', 'User'], ['/logout', 'Log Out']],
    groupAdmin: [['/test', 'Group Admin'], ['/logout', 'Log Out']],
    scheduleAdmin: [['/test', 'Schedule Admin'], ['/logout', 'Log Out']],
    siteAdmin: [['/test', 'Site Admin'], ['/logout', 'Log Out']],
}

export const homeScreenButtons = {
    groupAdmin: [
        { link: '/mygroups', text: 'Groups' },
        { link: '/myschedules', text: 'Schedules' },
        { link: '/myattendance', text: 'Attendance' },
    ],
    scheduleAdmin: [
        { link: '/mygroups', text: 'Groups' },
        { link: '/myschedules', text: 'Schedules' },
        { link: '/myattendance', text: 'Attendance' },
    ],
    siteAdmin: [
        { link: '/mygroups', text: 'Groups' },
        { link: '/myschedules', text: 'Schedules' },
        { link: '/myattendance', text: 'Attendance' },
    ],
    user: [
        { link: '/mygroups', text: 'Groups' },
        { link: '/myschedules', text: 'Schedules' },
        { link: '/myattendance', text: 'Attendance' },
    ],
}
