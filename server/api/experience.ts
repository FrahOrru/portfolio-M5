import { ExperienceItem } from '~/library/types';

const experiences: ExperienceItem[] = [
    {
        title: 'IT Technician',
        company: 'Aldebra S.P.A.',
        description: ' Testing and implementation of new technologies Tele-assistance to customers. IT Technician'
    },
    {
        title: 'Frontend developer',
        company: 'Siav S.P.A.',
        description: 'Build complex components in a large dimensions project using the latest version of Angular Development with Ngrx state manager Unit test with Karma/Jasmine Write technical analysis on Confluence • Agile working Jira'
    },
    {
        title: 'Frontend Developer',
        company: 'Somewhere',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived '
    }
]

export default defineEventHandler((event) => {
    return {
        experiences: experiences
    }
})