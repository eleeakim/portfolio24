import { GitHub, Instagram, Linkedin } from "react-feather";
import { Biodata, Link } from "./types";

export const biodata: Biodata = {
    name: "Hello, I am Eliakim Nyawinda.",
    tagline: "M365 support specialist.  Website developer. A curious learner.",
    email: "eleeakim@gmail.com"
}

export const links: Link[] = [
    {
        icon: GitHub,
        link: 'https://github.com/eleeakim',
        name: 'Github'
    },
    {
        icon: Linkedin,
        link: 'https://www.linkedin.com/in/eliakim-nyawinda/',
        name: 'Linkedin'
    }
]