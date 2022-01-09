export interface User {
name: string;
picture: string;
professionalHeadline: string;
skills: Skill[];
username: string;
}

export interface Skill {
    name: string
    weight: number
}

