
export const navLinks = [
    {
      title: "About",
      path: "#about"
    },
    {
      title: "Project",
      path: "#projects"
    },
    {
      title: "Let`s Connect",
      path: "#contact"
    },
  ]

  export const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>Javascript</li>
                <li>ReactJs</li>
                <li>Tailwind</li>
                <li>NextJs</li>
                <li>Typescript</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>Telkom University, S1 Teknik Informatika</li>
            </ul>
        )
    },
    {
        title: "certifications",
        id: "certifications",
        content: (
            <ul className="list-disc pl-2">
                <li>Coming Soon</li>
            </ul>
        )
    }
  ]

  
export const projectsData = [
    {
      "id": 1,
      "title": "Portfolio Website",
      "description": "A personal portfolio website to showcase my skills, projects, and experience as a frontend developer. Built with React, Tailwind CSS, and TypeScript.",
      "image": "/images/projects/porto-thumbnail.png",
      "tag": ["All", "Web"],
      "gitUrl": "https://github.com/dhianharyono/dhian-app",
      "previewUrl": "/"
    },
    {
      "id": 2,
      "title": "Soto List",
      "description": "A simple and functional to-do list application for managing tasks. Implemented with React, Tailwind CSS, and TypeScript, featuring task addition, deletion, and completion.",
      "image": "/images/projects/todo-thumbnail.png",
      "tag": ["All", "Web"],
      "gitUrl": "https://github.com/dhianharyono/todo-list",
      "previewUrl": "https://todo-list-blush-mu.vercel.app/"
    }
  ];