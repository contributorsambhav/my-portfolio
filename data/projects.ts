// data/projects.ts
import { Project } from '@/types';

export const featuredProjects: Project[] = [
  {
    id: 'proj-1',
    title: 'OnBoard - Cryptocurrency Payment Enhancement Platform',
    tagline: 'Winner of Payman AI Dev Challenge - 100 USDC Prize',
    description: 'Cryptocurrency payment enhancement platform comparing transaction fees across 5+ payment methods with automated crypto transactions.',
    longDescription: 'Architected software system that compares transaction fees across multiple payment methods and integrates Payman Wallet API for automated crypto transactions, reducing fees by 60% for transfers over 100 USDC. Won 100 USDC prize in Payman AI Dev Challenge.',
    technologies: ['Next.js', 'JavaScript', 'TypeScript', 'Solidity', 'MongoDB', 'Google OAuth', 'BetterAuth', 'Cloudflare'],
    category: 'fullstack',
    featured: true,
    github: 'https://github.com/contributorsambhav/onboard',
    live: 'https://onboard-iota-seven.vercel.app/',
    image: '/projects/onboard.png',
    highlights: ['Fee comparison across 5+ payment methods', '60% fee reduction for crypto transactions', 'Automated Payman Wallet API integration', 'Won 100 USDC in Dev Challenge'],
    metrics: [
      { label: 'Fee Reduction', value: '60%' },
      { label: 'Prize Won', value: '100 USDC' },
      { label: 'Payment Methods', value: '5+' }
    ]
  },
  {
    id: 'proj-2',
    title: 'Hiraya - AI-Powered Campus Assistant',
    tagline: 'Smart campus companion with RAG architecture',
    description: 'AI assistant with 80% response accuracy using NLP techniques, reducing information retrieval time by 90% for 100+ active users.',
    longDescription: 'Engineered AI assistant using advanced programming languages and NLP techniques with Retrieval-Augmented Generation ensuring context-aware responses. Features enhanced database queries and caching for optimal performance.',
    technologies: ['React.js', 'Next.js', 'TypeScript', 'SQL', 'Prisma ORM', 'TailwindCSS', 'RAG Architecture', 'NLP'],
    category: 'ai',
    featured: true,
    github: 'https://github.com/aniketchauhan18/hiraya',
    live: 'https://hiraya-companion.vercel.app/',
    image: '/projects/hiraya.png',
    highlights: ['80% response accuracy with NLP', '90% faster information retrieval', 'RAG architecture implementation', '100% context-aware responses'],
    metrics: [
      { label: 'Accuracy', value: '80%' },
      { label: 'Speed Increase', value: '90%' },
      { label: 'Active Users', value: '100+' }
    ]
  },
  {
    id: 'proj-3',
    title: 'Chess Master - Real-Time Multiplayer Chess Platform',
    tagline: 'Play chess with AI and friends in real-time',
    description: 'Real-time chess platform achieving sub-100ms latency with integrated Stockfish AI engine (2800 ELO rating) and secure JWT authentication.',
    longDescription: 'Constructed real-time chess platform using WebSockets and advanced software systems. Features Stockfish AI engine integration, secure authentication with JWT and bcrypt, ensuring complete data protection and user privacy.',
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'WebSockets', 'Redux', 'JWT', 'Stockfish Engine'],
    category: 'fullstack',
    featured: true,
    github: 'https://github.com/contributorsambhav/ReactChess',
    live: 'https://reactchess.onrender.com/',
    image: '/projects/chess-master.png',
    highlights: ['Sub-100ms latency with WebSockets', 'Stockfish AI (2800 ELO rating)', 'Secure JWT authentication', 'Real-time multiplayer gameplay'],
    metrics: [
      { label: 'Latency', value: '<100ms' },
      { label: 'AI Rating', value: '2800 ELO' },
      { label: 'Security', value: '100%' }
    ]
  }
];

export const allProjects: Project[] = [
  {
    id: '1',
    title: 'TextUtils',
    tagline: 'My first React app and a learning milestone',
    description: 'A simple web app to analyze and transform text using common utilities.',
    longDescription: 'TextUtils was my first Create React App project and a major milestone in my React learning journey. Through this project, I learned core React concepts such as state management, props, event handling, conditional rendering, and deploying applications to production using Vercel.',
    technologies: ['React', 'Create React App', 'JavaScript', 'CSS'],
    category: 'web',
    featured: false,
    live: 'https://my-app-swart-omega.vercel.app/',
    github: 'https://github.com/contributorsambhav/my-app',
    highlights: ['First React (CRA) project - foundational learning milestone', 'Convert text to uppercase, lowercase, and capitalized format', 'Remove extra spaces and copy text to clipboard', 'Light and dark mode UI support', 'Deployed and publicly accessible via Vercel']
  },
  {
    id: '2',
    title: 'CleanUpNow',
    tagline: 'AI-powered trash reporting system for civic cleanliness',
    description: 'CleanUpNow is an AI-based web application that allows users to report trash by uploading images and sharing location data with nearby municipal authorities.',
    longDescription: 'CleanUpNow was built to address waste management challenges, especially in hilly terrains like Himachal Pradesh. Users upload images of garbage, which are analyzed using a Keras-based machine learning model to detect trash. The app captures geolocation data and stores reports in a MongoDB database, enabling municipal bodies to identify and act on problem areas efficiently. This project helped me explore the intersection of AI, web development, and real-world civic use cases.',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Keras', 'Python', 'Multer', 'Geolocation API', 'MERN Stack'],
    category: 'ai',
    featured: false,
    github: 'https://github.com/contributorsambhav/trashtrack',
    video: 'https://www.youtube.com/watch?v=CxozM59488E',
    highlights: ['AI-based trash detection using Keras', 'Image upload handling with Multer', 'Automatic location capture using Geolocation API', 'Designed for hilly terrain use cases like Himachal Pradesh', 'MERN stack architecture with MongoDB for record collection', 'Civic-tech focused solution connecting users with municipal bodies']
  },
  {
    id: '3',
    title: 'SpaceWars',
    tagline: 'Vite + React + Tailwind space survival game',
    description: 'A fast-paced space survival game where the player dodges meteors and races against time to win.',
    longDescription: 'SpaceWars is a Vite + React + TailwindCSS project featuring dynamic meteor generation, smooth player movement, collision detection, and real-time game mechanics. The game incorporates sound effects, a timer, and responsive viewport handling. It demonstrates advanced React state management, useEffect hooks, and interactive gameplay implemented in a single-page application.',
    technologies: ['React', 'Vite', 'TailwindCSS', 'JavaScript', 'React Sound'],
    category: 'web',
    featured: false,
    github: 'https://github.com/contributorsambhav/SpaceWars',
    live: 'https://space-wars-blond.vercel.app/',
    highlights: ['Dynamic meteor generation with random positions and velocities', 'Collision detection and game-over logic', 'Responsive player movement with keyboard input and speed variations', 'Time-based win/lose conditions', 'Sound effects for winning and losing', 'Built with Vite, React, and TailwindCSS']
  },
  {
    id: '#proj-3',
    title: 'Chess Master - Real-Time Multiplayer Chess Platform',
    tagline: 'Play chess with AI and friends in real-time',
    description: 'Real-time chess platform achieving sub-100ms latency with integrated Stockfish AI engine (2800 ELO rating) and secure JWT authentication.',
    longDescription: 'Constructed real-time chess platform using WebSockets and advanced software systems. Features Stockfish AI engine integration, secure authentication with JWT and bcrypt, ensuring complete data protection and user privacy.',
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'WebSockets', 'Redux', 'JWT', 'Stockfish Engine'],
    category: 'fullstack',
    featured: true,
    github: 'https://github.com/contributorsambhav/ReactChess',
    live: 'https://reactchess.onrender.com/',
    image: '/projects/chess-master.png',
    highlights: ['Sub-100ms latency with WebSockets', 'Stockfish AI (2800 ELO rating)', 'Secure JWT authentication', 'Real-time multiplayer gameplay'],
    metrics: [
      { label: 'Latency', value: '<100ms' },
      { label: 'AI Rating', value: '2800 ELO' },
      { label: 'Security', value: '100%' }
    ]
  },
  {
    id: '#proj-2',
    title: 'Hiraya - AI-Powered Campus Assistant',
    tagline: 'Smart campus companion with RAG architecture',
    description: 'AI assistant with 80% response accuracy using NLP techniques, reducing information retrieval time by 90% for 100+ active users.',
    longDescription: 'Engineered AI assistant using advanced programming languages and NLP techniques with Retrieval-Augmented Generation ensuring context-aware responses. Features enhanced database queries and caching for optimal performance.',
    technologies: ['React.js', 'Next.js', 'TypeScript', 'SQL', 'Prisma ORM', 'TailwindCSS', 'RAG Architecture', 'NLP'],
    category: 'ai',
    featured: true,
    github: 'https://github.com/nextgenquanta/rag-test',
    live: 'https://hiraya-companion.vercel.app/',
    image: '/projects/hiraya.png',
    highlights: ['80% response accuracy with NLP', '90% faster information retrieval', 'RAG architecture implementation', '100% context-aware responses'],
    metrics: [
      { label: 'Accuracy', value: '80%' },
      { label: 'Speed Increase', value: '90%' },
      { label: 'Active Users', value: '100+' }
    ]
  },

  {
    id: '4',
    title: 'AI Frame Interpolator - Smart India Hackathon 2024',
    tagline: 'Team Lead for ISRO Problem Statement | Achieved 36.38 PSNR on Xiph-2K Dataset',
    description: 'Developed an AI-based frame interpolation system to generate intermediate video frames, improving video quality and temporal resolution for the ISRO challenge.',
    longDescription: 'Led a team in the Smart India Hackathon 2024 to create a high-performance AI frame interpolator tailored for the ISRO problem statement. The model achieved 36.38 PSNR on the Xiph-2K dataset, demonstrating state-of-the-art interpolation performance. Oversaw architecture design, model training, evaluation, and integration, showcasing both leadership and advanced technical skills in a competitive environment.',
    technologies: ['Python', 'PyTorch', 'OpenCV', 'Deep Learning', 'Neural Networks', 'Xiph-2K Dataset', 'Video Processing'],
    category: 'ai',
    featured: true,
    github: 'https://github.com/contributorsambhav/openlayers-react-vite',
    video: 'https://www.youtube.com/watch?v=3HCgLPRY8RI',
    highlights: ['Led a team in Smart India Hackathon 2024 for ISRO problem statement', 'Developed AI frame interpolator achieving 36.38 PSNR on Xiph-2K dataset', 'Demonstrated advanced technical skills in model design, training, and evaluation', 'Delivered functional demo of high-quality frame interpolation [Demo]'],
    metrics: [
      { label: 'PSNR', value: '36.38' },
      { label: 'Dataset', value: 'Xiph-2K' },
      { label: 'Hackathon', value: 'SIH 2024' }
    ]
  },
  {
    id: '5',
    title: 'DocuSharp',
    tagline: 'Minimal writing and roadmap tool with rich text editing',
    description: 'DocuSharp is a fast, distraction-free web app for writing short documents, notes, and roadmaps using a rich text editor.',
    longDescription: 'DocuSharp is a React + Vite application designed for quick documentation and roadmap writing. It integrates the TinyMCE rich text editor for a smooth writing experience and uses Redux for predictable state management. Appwrite powers authentication and backend services, enabling secure user-specific document handling. The project focuses on simplicity, performance, and clean UI, making it ideal for lightweight documentation workflows.',
    technologies: ['React', 'Vite', 'Redux', 'Appwrite', 'TinyMCE', 'JavaScript', 'TailwindCSS'],
    category: 'fullstack',
    featured: false,
    github: 'https://github.com/contributorsambhav/BLOG-Using-React-Redux-Appwrite-for-Backend',
    live: 'https://docusharp.vercel.app/',
    highlights: ['Rich text editor powered by TinyMCE', 'Short document and roadmap-focused writing workflow', 'Redux-based global state management', 'Secure backend and authentication using Appwrite', 'Built with Vite for fast development and performance', 'Clean and distraction-free UI']
  },
  {
    id: '51',
    title: 'TEDx NITH Landing Page',
    tagline: 'Responsive Landing Page for TEDx NITH Event',
    description: 'A modern and responsive landing page built for the TEDx NITH event, featuring event details, speaker highlights, schedule sections, and smooth scrolling interactions.',
    longDescription: 'Developed a visually engaging and fully responsive landing page for TEDx NITH using React and TailwindCSS. The design focuses on accessibility, mobile-first responsiveness, and intuitive layout flow. The page includes key sections such as event overview, speaker profiles, schedule, sponsors, and call-to-action elements. The project demonstrates clean component architecture, performance optimization, and polished UI design, deployed on Vercel for seamless access.',
    technologies: ['React', 'Vite', 'TailwindCSS', 'JavaScript', 'Responsive Design'],
    category: 'web',
    featured: false,
    github: 'https://github.com/contributorsambhav/tedx-nith',
    live: 'https://tedx-nith.vercel.app/',
    highlights: ['Responsive landing page for TEDx NITH event', 'Built with React + TailwindCSS', 'Clean UI with smooth navigation and scroll', 'Mobile-first design for all screen sizes', 'Deployed on Vercel']
  },
  {
    id: '6',
    title: 'Among Us – DSC Landing Page',
    tagline: 'Sponsor Landing Page for DSC Event',
    description: 'A static landing page built to showcase the Among Us themed event organized by DSC, including sponsor information, event overview, and call-to-action sections.',
    longDescription: 'Developed a responsive and visually engaging landing page for an Among Us themed event hosted by DSC (Developer Students Club). The page highlights event details, sponsor logos, schedule brief, and key calls to action to attract attendees. Built with modern frontend tooling and deployed live for promotional use. Focused on UI clarity, responsiveness across devices, and seamless navigation.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Vite', 'TailwindCSS'],
    category: 'web',
    featured: false,
    github: 'https://github.com/contributorsambhav/among_us',
    live: 'https://real-life-among-us-dsc.vercel.app/',
    highlights: ['Responsive promotional landing page for a DSC event', 'Clean UI with sponsor and event section organization', 'Built with React + Vite and styled with TailwindCSS', 'Optimized for both desktop and mobile screens', 'Deployed on Vercel for fast global access']
  },
  {
    id: '7',
    title: 'Voice-Controlled Web Tetris',
    tagline: 'Interactive Tetris with Web Speech API',
    description: 'A browser-based Tetris game controlled using voice commands via the Web Speech API, combining classic gameplay mechanics with intuitive speech controls.',
    longDescription: 'Built a fully playable Tetris game in the browser using JavaScript, HTML, and CSS, enhanced with voice control using the Web Speech API. Players can control the game using spoken commands (such as move left, rotate, drop), showcasing real-time speech recognition integration with game logic and mathematical geometry handling for piece rotations and collision detection. The project highlights custom game physics, responsive UI, and creative use of modern web APIs for interactive gameplay.',
    technologies: ['JavaScript', 'Web Speech API', 'HTML', 'CSS', 'Web Audio', 'Game Logic'],
    category: 'web',
    featured: false,
    github: 'https://github.com/contributorsambhav/Web-Tetris-main',
    live: 'https://web-tetris-main.vercel.app/',
    highlights: ['Classic Tetris gameplay in the browser', 'Voice control implemented using Web Speech API', 'Mathematical logic for piece rotation and collision', 'Responsive layout using HTML and CSS', 'Fast, interactive and accessible UI', 'Deployed live on Vercel']
  },
  {
    id: '8',
    title: 'Medssist',
    tagline: 'Blockchain-Enabled Medical Sharing Network',
    description: 'A decentralized web app for sharing medicines, logistics, and blood resources across hospitals using blockchain for secure auditability.',
    longDescription: 'Medssist is a full-stack decentralized application focused on improving healthcare logistics by enabling secure sharing of medicines, transport coordination, and blood supplies between hospitals. Built with a modern web frontend and a blockchain-based backend, Medssist ensures transparent tracking, secure transfers, and trustless auditing of medical resource distribution. The platform bridges real-world hospital logistics and blockchain with an intuitive interface and efficient ledger recording.',
    technologies: ['React', 'Vite', 'TailwindCSS', 'Solidity', 'Ethers.js', 'Smart Contracts', 'Node.js', 'Express.js', 'MongoDB', 'Web3', 'Blockchain'],
    category: 'blockchain',
    featured: false,
    github: 'https://github.com/contributorsambhav/medssist',
    live: 'https://medssist-web.vercel.app/',
    highlights: ['Blockchain-based auditing and secure transfer of medical resources', 'Sharing of medicines, blood, and logistics across hospital networks', 'Smart contracts for transparent tracking and accountability', 'Full-stack app with decentralized backend and responsive frontend', 'Real-world healthcare logistics use case with trustless security', 'Live deployment on Vercel'],
    metrics: [
      { label: 'Resource Types', value: 'Medicines • Blood • Logistics' },
      { label: 'Tech Stack', value: 'React • Solidity • Ethers.js' },
      { label: 'Deployment', value: 'Vercel' }
    ]
  },
  {
    id: 'proj-1',
    title: 'OnBoard - Cryptocurrency Payment Enhancement Platform',
    tagline: 'Winner of Payman AI Dev Challenge - 100 USDC Prize',
    description: 'Cryptocurrency payment enhancement platform comparing transaction fees across 5+ payment methods with automated crypto transactions.',
    longDescription: 'Architected software system that compares transaction fees across multiple payment methods and integrates Payman Wallet API for automated crypto transactions, reducing fees by 60% for transfers over 100 USDC. Won 100 USDC prize in Payman AI Dev Challenge.',
    technologies: ['Next.js', 'JavaScript', 'TypeScript', 'Solidity', 'MongoDB', 'Google OAuth', 'BetterAuth', 'Cloudflare'],
    category: 'fullstack',
    featured: true,
    github: 'https://github.com/contributorsambhav/onboard',
    live: 'https://onboard-iota-seven.vercel.app/',
    highlights: ['Fee comparison across 5+ payment methods', '60% fee reduction for crypto transactions', 'Automated Payman Wallet API integration', 'Won 100 USDC in Dev Challenge'],
    metrics: [
      { label: 'Fee Reduction', value: '60%' },
      { label: 'Prize Won', value: '100 USDC' },
      { label: 'Payment Methods', value: '5+' }
    ]
  },
  {
    id: '9',
    title: 'AmongUs Poll',
    tagline: 'Real-Time Voting System with WebSockets',
    description: 'A real-time polling and voting application inspired by Among Us, built using Next.js and WebSockets for live vote synchronization.',
    longDescription: 'AmongUs Poll is a real-time voting platform designed to replicate the discussion and voting mechanics of the Among Us game. Built with Next.js and WebSockets (WSS), the app enables multiple users to vote simultaneously with instant updates across all connected clients. The project demonstrates real-time state synchronization, event-driven architecture, and scalable WebSocket communication in a modern React framework.',
    technologies: ['Next.js', 'React', 'ShadCn', 'WebSockets (WSS)', 'Node.js', 'TypeScript', 'TailwindCSS'],
    category: 'web',
    featured: false,
    github: 'https://github.com/contributorsambhav/amongus_poll',
    live: 'https://amongus-poll-eight.vercel.app/',
    highlights: ['Real-time voting using WebSockets (WSS)', 'Instant vote updates across all connected clients', 'Among Us–inspired polling and UI flow', 'Built with Next.js for performance and scalability', 'Event-driven architecture for live interactions', 'Deployed on Vercel'],
    metrics: [
      { label: 'Realtime Sync', value: 'WebSockets (WSS)' },
      { label: 'Framework', value: 'Next.js' },
      { label: 'Deployment', value: 'Vercel' }
    ]
  },
  {
    id: '10',
    title: 'Admin Panel',
    tagline: 'Role-Based Admin Dashboard with Google Authentication',
    description: 'A secure admin dashboard built with Next.js featuring Google authentication, restricted access control, and team-based point management.',
    longDescription: 'Developed a full-featured admin panel using Next.js with Google OAuth authentication and role-based access control. The platform restricts entry to authorized users only and allows admins to manage and monitor points for multiple teams in real time. This project demonstrates secure authentication flows, protected routes, and structured state handling in a production-ready admin interface.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Google OAuth', 'NextAuth', 'TailwindCSS', 'Role-Based Access Control'],
    category: 'web',
    featured: false,
    github: 'https://github.com/contributorsambhav/admin-panel',
    live: 'https://admin-amongus.vercel.app/',
    highlights: ['Google OAuth authentication with restricted access', 'Role-based authorization for admin users', 'Team-wise points management system', 'Protected routes and secure dashboard views', 'Built with Next.js for scalability and performance', 'Deployed on Vercel'],
    metrics: [
      { label: 'Auth Provider', value: 'Google OAuth' },
      { label: 'Access Control', value: 'Restricted / Admin Only' },
      { label: 'Framework', value: 'Next.js' }
    ]
  },
  {
    id: 'Proj-0',
    title: 'Saarthi',
    tagline: 'Collision-Free Train Path Optimization System',
    category: 'ai',
    description: 'An optimization-driven railway path prediction system ensuring collision-free train movement using Operations Research techniques.',
    longDescription: 'Saarthi is a decision-support system developed during Smart India Hackathon 2025 for the Ministry of Railways. The project focuses on optimal and collision-free train path prediction using Operations Research models implemented with IBM ILOG CPLEX and OPL. The backend optimization engine computes feasible schedules and paths under real-world constraints, while a React-based frontend visualizes simulations and system responses, enabling stakeholders to analyze and validate routing decisions interactively.',
    technologies: ['IBM ILOG CPLEX', 'OPL (Optimization Programming Language)', 'Operations Research', 'React', 'Vite', 'JavaScript', 'Data Visualization', 'Simulation Modeling'],
    featured: true,
    github: 'https://github.com/contributorsambhav/saarthi',
    live: 'https://saarthi-web.vercel.app/',
    video: 'https://www.youtube.com/watch?v=V8kZM2U_b14',
    highlights: ['Collision-free train path and schedule optimization', 'Operations Research–based modeling using IBM ILOG CPLEX', 'Constraint-based optimization with OPL', 'Frontend simulation and visualization of routing decisions', 'Designed for real-world railway traffic constraints', 'Built for Smart India Hackathon 2025 – Ministry of Railways problem statement'],
    metrics: [
      { label: 'Optimization Engine', value: 'IBM ILOG CPLEX' },
      { label: 'Domain', value: 'Railway Scheduling & Routing' },
      { label: 'Hackathon', value: 'SIH 2025' }
    ]
  },
  {
    id: 'proj-00',
    title: 'RemitPay',
    tagline: 'Government-Controlled Blockchain Remittance System',
    description: 'A blockchain-based remittance platform with on-chain KYC, tier-based limits, and centralized regulatory control.',
    longDescription: 'RemitPay is a regulated blockchain remittance system designed to simulate government-controlled financial infrastructure. The platform enforces on-chain KYC approval, user whitelisting/blacklisting, tier-based daily transaction limits, and fee collection. Smart contracts are built using Solidity with OpenZeppelin security standards, enabling transparent remittance while retaining centralized administrative oversight for compliance, fraud prevention, and emergency control.',
    technologies: ['Solidity', 'Ethereum', 'OpenZeppelin', 'Next.js', 'React', 'Vite', 'TypeScript', 'Web3', 'Smart Contracts', 'Blockchain Security'],
    category: 'blockchain',
    featured: true,
    github: 'https://github.com/contributorsambhav/RemitPay',
    live: 'https://remit-pay.vercel.app/',
    highlights: ['On-chain KYC workflow with approval and rejection logic', 'Tier-based daily remittance limits (TIER1 → VIP)', 'Government-style central admin control using Ownable', 'User whitelisting, blacklisting, and account freezing', 'Secure remittance with reentrancy protection and pausing', 'Transparent transaction logging and fee collection', 'Emergency recovery and withdrawal mechanisms'],
    metrics: [
      { label: 'KYC Model', value: 'On-chain Approval System' },
      { label: 'Security', value: 'ReentrancyGuard + Pausable' },
      { label: 'User Tiers', value: '5 (NONE → VIP)' }
    ]
  },
  {
    id: 'microlending',
    title: 'MicroLending (Stellar)',
    tagline: 'Decentralized Micro-Lending App on Stellar',
    description: 'A Stellar-based micro-lending platform designed for financial inclusion, enabling peer-to-peer lending with transparent ledger tracking and low fees.',
    longDescription: 'MicroLending is a decentralized lending application built on the Stellar network as part of the Stellar LATAM Ideathon. The platform enables users to participate in peer-to-peer micro-loans with trustless ledger tracking and minimal transaction costs. Leveraging Stellar’s consensus protocol and asset issuance features, the app supports secure loan requests, funding flows, repayment tracking, and real-time balance updates. The project demonstrates blockchain integration, distributed ledger mechanics, and financial product design for unbanked and underserved communities.',
    technologies: ['Stellar', 'JavaScript', 'React', 'Vite', 'TailwindCSS', 'Horizon API', 'Web3 / Blockchain'],
    category: 'blockchain',
    featured: false,
    github: 'https://github.com/contributorsambhav/microlending',
    live: 'https://microlending.vercel.app/',
    video: 'https://www.youtube.com/watch?v=LLl13GQVm-0&t=13s',
    highlights: ['Decentralized peer-to-peer micro-lending on the Stellar network', 'Transparent loan tracking via distributed ledger', 'Low-fee transactions using Stellar consensus', 'Real-time repayment and balance updates', 'Built for Stellar LATAM Ideathon with a financial inclusion focus', 'Responsive UI built with React + Vite'],
    metrics: [
      { label: 'Blockchain', value: 'Stellar' },
      { label: 'Use Case', value: 'Micro-Lending & Inclusion' },
      { label: 'Deployment', value: 'Vercel' }
    ]
  },
  {
  id: "flute-nft-ai",
  title: "Flute (ArtiFusion)",
  tagline: "AI-Powered NFT Generator & Ethereum Marketplace",
  description:
    "An AI-driven NFT creation platform with a full Ethereum-based marketplace for minting, listing, and trading digital art.",
  longDescription:
    "Flute (also branded as ArtiFusion) is a complete AI + blockchain application that enables users to generate artwork using AI, mint it as NFTs, and trade them on an Ethereum-based marketplace. The platform integrates AI-generated art pipelines with smart contract interactions for minting, listing, buying, and liking NFTs. Users can view their personal NFT collections, manage listings, and interact with on-chain assets through a modern, dark-themed UI. This project demonstrates end-to-end Web3 development, AI integration, and production-grade frontend design.",
  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "Ethereum",
    "Solidity",
    "Wagmi",
    "Ethers.js",
    "AI Image Generation",
    "NFT.Storage / IPFS",
    "TailwindCSS"
  ],
  category: "blockchain",
  featured: true,
  github: "https://github.com/contributorsambhav/flute",
  highlights: [
    "AI-based automatic artwork generation",
    "One-click NFT minting on Ethereum",
    "Full NFT marketplace (list, buy, like, view)",
    "User-specific NFT collections dashboard",
    "On-chain ownership and pricing logic",
    "Modern dark UI with smooth UX for Web3 users"
  ],
  metrics: [
    { label: "Blockchain", value: "Ethereum" },
    { label: "NFT Type", value: "AI-Generated Art" },
    { label: "Marketplace", value: "Fully On-Chain" }
  ]
}

];
