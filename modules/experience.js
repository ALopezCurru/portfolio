'use strict';
export const experience =[
    {
        id: 1,
        title: "Call Center Customer Service Representative",
        startTime: "Apr 2019",
        endTime:"May 2022",
        description:"Provided efficient customer support while helping train new team members, share best practices, and improve overall service quality." 
    },
    {
        id: 2,
        title:"Information Technology Service Desk",
        startTime:"May 2022",
        endTime:"Sep 2023",
        description:"Managed user accounts, access permissions, and security groups through Google Workspace and Active Directory to keep systems secure and organized"
    },
    {
        id:3,
        title:"Subject Matter Expert",
        startTime:"Mar 2024",
        endTime:"Apr 2025",
        description:"Supported agents through guidance, feedback, and training. Also handled Jira follow-ups, reviewed issues in chats and emails, and created reports and automations to improve team performance"
    },
    {
        id:4,
        title:"Real Time Analyst",
        startTime:"May 2025",
        endTime:"Present",
        description:"Track real-time KPIs, create performance reports, and support operations through adherence alerts and workforce insights. Also assisted with scheduling adjustments, staffing recommendations, and vacation approvals."
    }
]

experience.forEach(function(e){
   if(Number(e.id) % 2 === 0){
    e.animation= "hidden-left";
   }else{
    e.animation = "hidden-right"
   }
});


/*
TEMPLATE
 {
        id:"",
        title:"",
        startTime:"",
        endTime:"",
        description:""
    }


*/