import { ExperienceItem } from '~/library/types';

const educations: ExperienceItem[] = [
    {
        title: 'IT High school degree',
        company: 'ITT G. Marconi',
        description: 'Web development both with HTML/CSS/JS and through platforms like WordPress. Programming and development of applications (C#). database creation and data analysis'
    },
    {
        title: 'Digital Academy',
        company: 'Academy Umana “Forma.Temp”',
        description: 'Introduction to Linux SQL and Oracle and PostgreSQL platforms Basic and advanced Java (Java application design/development)Testing techniques and software quality Web development and HTML5 Project management rules and best practices'
    },
    {
        title: 'Frontend Bachelor',
        company: 'Harbour.space University',
        description: 'Programming Interactivity Foundations of Programming: JAVA Introduction to Vue.js Design Systems for Interactive Applications The Vue Ecosystem'
    }
]

export default defineEventHandler((event) => {
    return {
        educations: educations
    }
})