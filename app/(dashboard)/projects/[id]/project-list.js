const projects = [
    {
        projectId: 'SnakeGame',
        projectTitle: 'Rust Based Snake Game',
        imgSrc: '/SnakeGameScreenshot.png',
        linkSrc: 'https://snakegame.jonathanlyashko.com/',
        tools: [
            'Rust',
            'Typescript',
            'Web Assembly',
            'Webpack'
        ],
        features: [
            'Collision Detection',
            'Score Keeping',
            'Compile to WASM',
            'Memory Safe'
        ],
        description: "Blazing fast, memory safe snake game. Taking a modern approach to a beloved classic, this project demonstrates the versatility of the Rust programming language."
    },
    {
        projectId: 'JobTrk',
        projectTitle: 'JobTrk',
        imgSrc: '/JobTrkScreenshot.png',
        linkSrc: 'https://jobtrk.jonathanlyashko.com/',
        tools: [
            'NextJS',
            'React',
            'Typescript',
            'PostgreSQL'
        ],
        features: [
            'NextJS Routing',
            'Sign in with Google',
            'Cloud Storage',
            'Application Statistics'
        ],
        description: "Full stack web app built for efficient job application tracking. Add, update, and delete your active applications. Gain insights about the applications you've sent out over the last six months and stay on top of upcoming interviews."
    },
    {
        projectId: 'MedicationDispenser',
        projectTitle: 'Automated Medication Dispenser',
        imgSrc: '/DispenserScreenshot.png',
        linkSrc: '/Medicine Dispenser Design Document.pdf',
        tools: [
            'C',
            'CubeIDE',
            'STM32',
            'TinkerCAD'
        ],
        features: [
            'Dose Management',
            'Timing',
            'Efficient Refill',
            '3D Printed'
        ],
        description: "Medication management for patients with memory loss related health conditions. Scheduled release of medication aims to prevent accidental overdose or missing a dose."
    },
    {
        projectId: 'RockPaperScissors',
        projectTitle: 'Gesture Controlled Rock Paper Scissors',
        imgSrc: '/RPSScreenshot.png',
        linkSrc: 'https://github.com/JonathanLyashko/RockPaperScissors',
        tools: [
            'Machine Learning',
            'Scikit Learn',
            'OpenCV',
            'MediaPipe',
            'Numpy'
        ],
        features: [
            'Landmark Detection',
            'Gesture Classification',
            'Custom Model training',
        ],
        description: "This game uses MediaPipe landmark detection to gather information about the player's hand's position. These landmarks are fed into a custom model which I trained using Scikit Learn. The game is played with the computer as an opponent, generating random actions to compete with."
    },
];

export default projects;