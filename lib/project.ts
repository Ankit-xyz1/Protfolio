interface projectstype {
    name: string;
    active: boolean;
    description: string;
    githubLink: string;
    LiveLink: string;
    techStack: string[]; // referencing SVG filenames from public folder
}

export const projectArray: projectstype[] = [
    {
        name: "GitHub Analyzer",
        active: true,
        description: "An LLM-powered web application that deeply analyzes any public GitHub repository. It helps developers and newcomers understand project structure, tech stack, and code insights using AI-generated summaries.",
        githubLink: "https://github.com/Ankit-xyz1/githubanalyzer",
        LiveLink: "https://githubanalyzer-eight.vercel.app/",
        techStack: ["nextjs.svg", "react_dark.svg", "typescript.svg", "tailwindcss.svg", "shadcn.svg"]
    },
    {
        name: "Solana Wallet",
        active: true,
        description: "A progressive web app (PWA) that allows users to generate Solana blockchain wallets, manage balances, and send transactions. Fully client-side and secure, tailored for fast Solana-based interaction.",
        githubLink: "https://github.com/Ankit-xyz1/crypto/tree/main/webbasedwalletnext",
        LiveLink: "https://crypto-two-roan.vercel.app/",
        techStack: ["nextjs.svg", "react_dark.svg", "typescript.svg", "tailwindcss.svg", "shadcn.svg"]
    },
    {
        name: "Delink",
        active: true,
        description: "A privacy-focused URL shortener that allows users to generate and share short links without any login or account. Built for speed, simplicity, and zero data retention.",
        githubLink: "https://github.com/Ankit-xyz1/delink",
        LiveLink: "https://delink-rho.vercel.app/",
        techStack: ["react_dark.svg", "javascript.svg", "mongodb.svg", "tailwindcss.svg"]
    },
    {
        name: "Real-time Chat App",
        active: false,
        description: "A real-time chat application built using Socket.IO and React. It features a clean interface with DaisyUI themes and dynamic chat rooms for a seamless messaging experience.",
        githubLink: "https://github.com/Ankit-xyz1/ChatApp",
        LiveLink: "https://github.com/Ankit-xyz1/ChatApp",
        techStack: ["react_dark.svg", "javascript.svg", "mongodb.svg", "tailwindcss.svg", "daisyUi.svg"]
    },
    {
        name: "Decoin",
        active: true,
        description: "A lightweight crypto price tracking web app that fetches and displays real-time prices of major cryptocurrencies using public APIs. Built with simplicity and performance in mind.",
        githubLink: "https://github.com/Ankit-xyz1/Decoin",
        LiveLink: "https://ankit-xyz1.github.io/Decoin/",
        techStack: ["javascript.svg", "html5.svg", "tailwindcss.svg"]
    }
];
