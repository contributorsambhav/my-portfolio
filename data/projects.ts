// data/projects.ts
import { Project } from '@/types';

export const allProjects: Project[] = [
  {
    id: 'lms',
    title: 'Multi-Tenant LMS - Enterprise Educational Platform',
    tagline: 'Zero-Egress HLS Streaming & Microservice LMS Architecture',
    description: 'Enterprise multi-tenant Learning Management System featuring custom zero-egress HLS video streaming, automated anti-cheating assessments, and real-time doubt resolution.',
    longDescription: 'A multi-tenant Learning Management System engineered end-to-end to simplify educational workflows. Features centralized hierarchical role-based onboarding (Superadmins, Institutes, Faculty, Students), adaptive video course delivery using a custom FFmpeg HLS pipeline with Cloudflare R2/CDN, automated quiz grading with anti-cheating heuristics, and real-time WebSocket doubt channels. Built with a decoupled microservice layout behind a Next.js reverse proxy.',
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Cloudflare R2', 'FFmpeg', 'HLS', 'WebSockets', 'Socket.IO', 'Google OAuth', 'JWT', 'Docker'],
    category: 'fullstack',
    featured: true,
    github: 'https://github.com/contributorsambhav/LMS',
    live: 'https://lms-sepia-tau.vercel.app/',
    image: '/projects/lms.jpg',
    architectureUrl: 'https://github.com/contributorsambhav/LMS#architecture',
    architectureDiagram: '/projects/lms-architecture.png',
    highlights: [
      'Multi-tenant MongoDB schema with strict tenant isolation and role matrices',
      'Zero-Egress custom HLS streaming pipeline via FFmpeg, Cloudflare R2, and Cloudflare CDN',
      'Next.js reverse proxy routing microservices to bypass CORS and mixed-content issues',
      'Google OAuth onboarding with dynamic state-based multi-tenant role assignment',
      'Decoupled Stream Service with 8GB swap memory and thread limits preventing OOM crashes',
      'Real-time WebSocket doubt resolution and anti-cheating quiz grading engine'
    ],
    architectureDetails: {
      diagramImage: '/projects/lms-architecture.png',
      problemStatement: 'Educational institutes face high operational overhead and prohibitive SaaS costs when managing multi-role onboarding, video delivery, and student assessment. This LMS provides a unified, low-cost multi-tenant platform with role-based access control, zero-egress video streaming, and real-time classroom interaction.',
      highLevelArchitecture: 'Next.js + TypeScript frontend serves as both the responsive client interface and a secure API reverse proxy. The backend is a microservice cluster in Node.js/Express composed of a Main API Service, a real-time WebSocket Doubt Service, and an asynchronous FFmpeg Stream Transcoding Service. Media assets are uploaded directly to Cloudflare R2 via pre-signed URLs and distributed via Cloudflare CDN with zero egress costs.',
      contributions: [
        { title: 'Database Design', desc: 'Designed a hierarchical multi-tenant MongoDB schema with strict ObjectId referencing and middleware-enforced tenant boundaries between Superadmins, Institutes, Faculty, Students, and Courses.' },
        { title: 'Streaming Infrastructure', desc: 'Implemented a custom zero-egress HLS video pipeline with FFmpeg transcoding, chunking videos into .m3u8 playlists stored in Cloudflare R2.' },
        { title: 'Network & Security Proxy', desc: 'Configured Next.js rewrites to proxy backend microservices through a unified origin, resolving CORS and browser mixed-content restrictions.' },
        { title: 'Authentication Matrix', desc: 'Engineered Google OAuth with state-based redirect parameters to securely assign multi-tenant roles on the fly and generate signed JWTs.' },
        { title: 'APIs & Real-Time Engine', desc: 'Built REST endpoints for anti-cheat quiz evaluations and real-time Socket.IO channels for institute doubt resolution.' }
      ],
      technicalDecisions: [
        { question: 'Why MongoDB instead of PostgreSQL?', answer: 'Educational content (courses, modules, chapters, varied quiz types) is deeply nested and dynamic. MongoDB document storage prevents expensive multi-table SQL joins while maintaining rapid query flexibility.' },
        { question: 'Why Cloudflare R2 instead of AWS S3?', answer: 'Traditional cloud providers levy steep video egress fees. R2 coupled with Cloudflare CDN eliminates bandwidth egress charges completely, cutting media delivery costs by nearly 100%.' },
        { question: 'Why decouple Stream Service into a separate microservice?', answer: 'FFmpeg video transcoding is heavily CPU and memory intensive. Isolating it prevents transcoding jobs from starving the event loop of the primary transactional REST API.' }
      ],
      challengesFaced: [
        { challenge: 'Server Out-of-Memory (OOM) Crashes during Transcoding', solution: 'Concurrent 1080p transcoding was exhausting RAM on small compute instances. Decoupled transcoding into an independent worker, provisioned 8GB swap memory, and constrained FFmpeg thread concurrency.' },
        { challenge: 'Browser Mixed-Content and CORS Blocking', solution: 'Deploying microservices across multiple ports created browser origin friction. Leveraged Next.js rewrite proxies to route all client requests through a single unified domain.' }
      ],
      scalability: [
        'Scale to 100k users by introducing Redis caching for hot course metadata and deploying MongoDB read replicas for query distribution.',
        'Adopt RabbitMQ or Apache Kafka message queues for reliable asynchronous video ingestion pipelines.',
        'Deploy microservice containers to AWS EKS with Horizontal Pod Autoscaling (HPA).'
      ],
      metrics: [
        { label: 'Egress Cost', value: 'Zero ($0)' },
        { label: 'Transcoding Stability', value: '100% Uptime' },
        { label: 'Tenant Isolation', value: 'Strict RBAC' }
      ],
      elevatorPitch: 'This LMS is an enterprise multi-tenant platform I built end-to-end to streamline academic workflows - from hierarchical onboarding to zero-egress HLS video delivery and live doubt clearing. Using Next.js, Node.js, MongoDB, and Cloudflare R2, I eliminated recurring video bandwidth costs and prevented server memory crashes through isolated microservice architecture.'
    },
    metrics: [
      { label: 'Bandwidth Egress', value: '$0 (Zero Egress)' },
      { label: 'Architecture', value: 'Microservices + R2' },
      { label: 'Tenancy', value: 'Multi-Tenant RBAC' }
    ]
  },
  {
    id: '1',
    title: 'RemitPay',
    tagline: 'Government-Controlled Blockchain Remittance System',
    description: 'A blockchain-based remittance platform with on-chain KYC, tier-based limits, and centralized regulatory control.',
    longDescription: 'RemitPay is a regulated blockchain remittance system designed to simulate government-controlled financial infrastructure. The platform enforces on-chain KYC approval, user whitelisting/blacklisting, tier-based daily transaction limits, and fee collection. Smart contracts are built using Solidity with OpenZeppelin security standards, enabling transparent remittance while retaining centralized administrative oversight for compliance, fraud prevention, and emergency control.',
    technologies: ['Solidity', 'Ethereum', 'OpenZeppelin', 'Next.js', 'React', 'Vite', 'TypeScript', 'Web3', 'Smart Contracts', 'Blockchain Security'],
    category: 'blockchain',
    featured: true,
    github: 'https://github.com/contributorsambhav/RemitPay',
    live: 'https://remit-pay.vercel.app/',
    architectureUrl: 'https://github.com/contributorsambhav/RemitPay#architecture',
    image: '/projects/remitpay.png',
    highlights: ['On-chain KYC workflow with approval and rejection logic', 'Tier-based daily remittance limits (TIER1 → VIP)', 'Government-style central admin control using Ownable', 'User whitelisting, blacklisting, and account freezing', 'Secure remittance with reentrancy protection and pausing', 'Transparent transaction logging and fee collection', 'Emergency recovery and withdrawal mechanisms'],
    architectureDetails: {
      problemStatement: 'Cross-border remittances are plagued by high friction, delayed settlement times, and opaque intermediary fees. RemitPay models a sovereign-regulated decentralized remittance system where anti-money laundering (AML) compliance and tier limits are codified directly on-chain while enabling instant peer-to-peer settlement.',
      highLevelArchitecture: 'A Solidity smart contract suite deployed on Ethereum/EVM testnets, interacting with a Next.js / TypeScript Web3 frontend via Wagmi and Ethers.js. Central regulators and compliance officers manage KYC whitelisting and daily quota checks directly through on-chain multi-sig administration.',
      contributions: [
        { title: 'Smart Contract Architecture', desc: 'Authored modular Solidity contracts implementing OpenZeppelin ReentrancyGuard, Pausable, and Ownable patterns for institutional security.' },
        { title: 'On-Chain KYC Matrix', desc: 'Implemented a 5-tier dynamic quota engine enforcing daily remittance caps based on verified identity levels.' },
        { title: 'Web3 Transaction State Management', desc: 'Built resilient frontend transaction lifecycle listeners with optimistic UI state updates and automatic gas estimation.' }
      ],
      technicalDecisions: [
        { question: 'Why on-chain KYC verification tracking?', answer: 'Ensures regulatory compliance cannot be bypassed at the frontend or API layer, providing cryptographic proof of compliance.' },
        { question: 'Why tier-based daily velocity limits?', answer: 'Mitigates fraud velocity and complies with standard international capital flow restrictions.' }
      ],
      challengesFaced: [
        { challenge: 'Handling Reentrancy and State Mutation Risks', solution: 'Applied checks-effects-interactions patterns alongside OpenZeppelin ReentrancyGuard across all payment withdrawal functions.' }
      ],
      scalability: [
        'Deploy on Ethereum Layer-2 rollups (Arbitrum/Optimism) to slash transaction gas costs by 95% while inheriting mainnet security.',
        'Implement Chainlink Proof of Reserve (PoR) and real-time oracle exchange rates.'
      ],
      metrics: [
        { label: 'Settlement Time', value: '<15s (L2 Instant)' },
        { label: 'Security Model', value: 'Formal Reentrancy Guard' },
        { label: 'Compliance', value: '100% On-Chain' }
      ],
      elevatorPitch: 'RemitPay is a compliant, blockchain-powered cross-border remittance architecture. By codifying institutional KYC verification and tiered velocity limits on-chain, it delivers instant sovereign-grade cross-border settlement with complete regulatory auditability.'
    },
    metrics: [
      { label: 'KYC Model', value: 'On-chain Approval System' },
      { label: 'Security', value: 'ReentrancyGuard + Pausable' },
      { label: 'User Tiers', value: '5 (NONE → VIP)' }
    ]
  },
  {
    id: '2',
    title: 'Flute (ArtiFusion)',
    tagline: 'AI-Powered NFT Generator & Ethereum Marketplace',
    description: 'An AI-driven NFT creation platform with a full Ethereum-based marketplace for minting, listing, and trading digital art.',
    image: '/projects/flute.jpeg',
    longDescription: 'Flute (also branded as ArtiFusion) is a complete AI + blockchain application that enables users to generate artwork using AI, mint it as NFTs, and trade them on an Ethereum-based marketplace. The platform integrates AI-generated art pipelines with smart contract interactions for minting, listing, buying, and liking NFTs. Users can view their personal NFT collections, manage listings, and interact with on-chain assets through a modern, dark-themed UI. This project demonstrates end-to-end Web3 development, AI integration, and production-grade frontend design.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Ethereum', 'Solidity', 'Wagmi', 'Ethers.js', 'AI Image Generation', 'NFT.Storage / IPFS', 'TailwindCSS'],
    category: 'blockchain',
    featured: true,
    github: 'https://github.com/contributorsambhav/flute',
    live: 'https://flute-pi.vercel.app/',
    architectureUrl: 'https://github.com/contributorsambhav/flute#architecture',
    highlights: ['AI-based automatic artwork generation', 'One-click NFT minting on Ethereum', 'Full NFT marketplace (list, buy, like, view)', 'User-specific NFT collections dashboard', 'On-chain ownership and pricing logic', 'Modern dark UI with smooth UX for Web3 users'],
    architectureDetails: {
      problemStatement: 'Creators without technical Web3 knowledge encounter significant barriers when transforming generative AI art into tradeable cryptographic assets with decentralized storage guarantees.',
      highLevelArchitecture: 'Next.js frontend connects to an AI generation pipeline, pushes generated media to IPFS via NFT.Storage pinning services, and triggers ERC-721 smart contract minting and trading on Ethereum.',
      contributions: [
        { title: 'Generative AI Pipeline', desc: 'Integrated diffusion image generation pipelines with automatic metadata formatting conforming to OpenSea ERC-721 standards.' },
        { title: 'IPFS Pinning Integration', desc: 'Implemented decentralized decentralized media persistence ensuring art permanence independent of centralized storage servers.' },
        { title: 'NFT Marketplace Logic', desc: 'Authored smart contracts for listing, escrowing, and trading digital art on Ethereum.' }
      ],
      technicalDecisions: [
        { question: 'Why IPFS instead of cloud storage for NFT assets?', answer: 'NFT metadata must remain immutable and verifiable by token holders forever; IPFS content identifiers (CIDs) prevent rug pulls.' }
      ],
      challengesFaced: [
        { challenge: 'Network Latency in IPFS Gateways', solution: 'Implemented multi-gateway fallback fetching (Cloudflare, IPFS.io, Pinata) to ensure instant preview loads.' }
      ],
      scalability: [
        'Implement ERC-721A batch minting to minimize gas consumption during high demand periods.',
        'Support cross-chain bridge deployments across Ethereum and Polygon.'
      ],
      metrics: [
        { label: 'Minting', value: 'One-Click ERC-721' },
        { label: 'Storage', value: 'Decentralized IPFS' },
        { label: 'Marketplace', value: 'Zero Escrow Risk' }
      ],
      elevatorPitch: 'Flute combines generative AI creation pipelines with decentralized NFT minting and marketplace trading on Ethereum, enabling artists to create, pin to IPFS, and trade assets seamlessly in one modern application.'
    },
    metrics: [
      { label: 'Blockchain', value: 'Ethereum' },
      { label: 'NFT Type', value: 'AI-Generated Art' },
      { label: 'Marketplace', value: 'Fully On-Chain' }
    ]
  },
  {
    id: '3',
    title: 'Chess Master - Real-Time Multiplayer Chess Platform',
    tagline: 'Play chess with AI and friends in real-time',
    description: 'Real-time chess platform achieving sub-100ms latency with integrated Stockfish AI engine (2800 ELO rating) and secure JWT authentication.',
    longDescription: 'Constructed real-time chess platform using WebSockets and advanced software systems. Features Stockfish AI engine integration, secure authentication with JWT and bcrypt, ensuring complete data protection and user privacy.',
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'WebSockets', 'Redux', 'JWT', 'Stockfish Engine'],
    category: 'fullstack',
    featured: true,
    github: 'https://github.com/contributorsambhav/ReactChess',
    live: 'https://react-chess-e451.vercel.app/',
    architectureUrl: 'https://github.com/contributorsambhav/ReactChess#architecture',
    architectureDiagram: '/projects/chess-architecture.png',
    image: '/projects/chess-master.png',
    highlights: ['Sub-100ms latency with WebSockets', 'Stockfish AI (2800 ELO rating)', 'Secure JWT authentication', 'Real-time multiplayer gameplay'],
    architectureDetails: {
      diagramImage: '/projects/chess-architecture.png',
      problemStatement: 'Real-time multiplayer chess platforms often suffer from high cloud compute bills and backend freezes when running CPU-intensive chess engine evaluations. React Chess solves this by combining global Socket.IO multiplayer with zero-cost, client-side Stockfish Web Workers and instant FEN game analysis.',
      highLevelArchitecture: 'React + Vite frontend manages user interactions and game board rendering via chessboardjs, while chess.js acts as the single source of truth for move validation. The Node.js/Express backend handles JWT authentication, Google OAuth, and match records in MongoDB. Socket.IO manages matchmaking queues and bidirectional move broadcasting, while Stockfish runs in isolated client Web Workers.',
      contributions: [
        { title: 'Real-Time Matchmaking', desc: 'Engineered a Socket.IO queue mechanism that pairs pending players, assigns colors, and synchronizes algebraic moves across global clients.' },
        { title: 'Stockfish Web Worker Pipeline', desc: 'Implemented an asynchronous client-side engine pipeline utilizing Stockfish Web Workers to analyze FEN strings up to Depth 25 without blocking the main UI thread.' },
        { title: 'Decoupled State Architecture', desc: 'Separated game logic and rule enforcement (chess.js) from presentation (chessboardjs) and synchronized moves via Redux.' },
        { title: 'Database & Match Records', desc: 'Designed MongoDB schemas for player profiles, rating records, and PGN match histories.' }
      ],
      technicalDecisions: [
        { question: 'Why Web Workers for Stockfish?', answer: 'Running chess engine calculations on a central Node.js server for thousands of concurrent players would crash server CPU. Web Workers offload 100% of compute to client browser threads with zero cloud cost.' },
        { question: 'Why Socket.IO over HTTP Polling?', answer: 'Chess requires sub-100ms responsiveness. WebSockets maintain persistent TCP sockets eliminating round-trip HTTP overhead.' },
        { question: 'Why decouple chess.js and chessboardjs?', answer: 'Direct DOM manipulation is brittle. chess.js acts as authoritative validator while chessboardjs purely reflects FEN state.' }
      ],
      challengesFaced: [
        { challenge: 'Main Thread UI Freezes at High Evaluation Depths', solution: 'Offloaded Stockfish computations to dedicated Web Workers via postMessage, streaming back evaluation scores, principal variations (PV), and depth without dropping UI frames.' },
        { challenge: 'Multiplayer Board State Desynchronization', solution: 'Enforced strict local chess.js validation before updating UI and handled Socket.IO disconnect events gracefully to notify opponents.' }
      ],
      scalability: [
        'Introduce Redis Pub/Sub (Socket.IO Redis Adapter) to scale WebSocket gateways horizontally across multiple Node.js instances.',
        'Persist live match states in Redis memory to allow instant match resumption upon browser refresh.',
        'Implement an Elo / Glicko-2 matchmaking ranking system.'
      ],
      metrics: [
        { label: 'Compute Cost', value: '$0 Cloud CPU' },
        { label: 'Move Latency', value: '<100ms Global' },
        { label: 'Stockfish Rating', value: '2800 ELO' }
      ],
      elevatorPitch: 'React Chess is a full-stack real-time multiplayer chess platform featuring automated matchmaking and deep engine analysis. By compiling Stockfish into client-side Web Workers, I eliminated cloud computation costs entirely, delivering depth-25 engine evaluations with zero latency and no server overhead.'
    },
    metrics: [
      { label: 'Latency', value: '<100ms' },
      { label: 'AI Rating', value: '2800 ELO' },
      { label: 'Security', value: '100%' }
    ]
  },
  {
    id: '4',
    title: 'Hiraya - AI-Powered Campus Assistant',
    tagline: 'Smart campus companion with RAG architecture',
    description: 'AI assistant with 80% response accuracy using NLP techniques, reducing information retrieval time by 90% for 100+ active users.',
    longDescription: 'Engineered AI assistant using advanced programming languages and NLP techniques with Retrieval-Augmented Generation ensuring context-aware responses. Features enhanced database queries and caching for optimal performance.',
    technologies: ['React.js', 'Next.js', 'TypeScript', 'SQL', 'Prisma ORM', 'TailwindCSS', 'RAG Architecture', 'NLP'],
    category: 'ai',
    featured: true,
    github: 'https://github.com/nextgenquanta/rag-test',
    live: 'https://hiraya-companion.vercel.app/',
    architectureUrl: 'https://github.com/nextgenquanta/rag-test#architecture',
    architectureDiagram: '/projects/hiraya-architecture.png',
    image: '/projects/hiraya.jpg',
    highlights: ['80% response accuracy with NLP', '90% faster information retrieval', 'RAG architecture implementation', '100% context-aware responses'],
    architectureDetails: {
      diagramImage: '/projects/hiraya-architecture.png',
      problemStatement: 'University students frequently struggle to find accurate, up-to-date information regarding campus rules, placements, and exam notices scattered across PDFs. Hiraya is an AI Campus Assistant for NIT Hamirpur using strict Retrieval-Augmented Generation (RAG) to provide verified, hallucination-free streamed answers from a maintainer knowledge base.',
      highLevelArchitecture: 'Full-stack Next.js (React 19) architecture. Frontend consumes server-sent token streams from LangChain and Groq LLM (Llama 3.1). The backend generates 384-dimensional text embeddings in-process using local Hugging Face ONNX models, stores vectors in PostgreSQL via pgvector and Prisma ORM, and executes fast cosine similarity retrieval.',
      contributions: [
        { title: 'Zero-Cost RAG Pipeline', desc: 'Engineered a local in-process embedding pipeline using @huggingface/transformers (all-MiniLM-L6-v2), eliminating external embedding API costs completely.' },
        { title: 'Vector Database Integration', desc: 'Integrated pgvector with PostgreSQL and Prisma to execute real-time cosine distance similarity queries on chunked campus data.' },
        { title: 'Streaming UI/UX', desc: 'Built a responsive chat interface that decodes and renders text streams token-by-token directly from Groq and LangChain.' },
        { title: 'Secure Ingestion System', desc: 'Developed a protected API route allowing maintainers to chunk and inject raw notices and PDF text directly into the knowledge base.' }
      ],
      technicalDecisions: [
        { question: 'Why Local Embeddings (transformers.js)?', answer: 'External APIs like OpenAI introduce recurring costs and network round trips. Running all-MiniLM-L6-v2 locally in WebAssembly/ONNX reduced embedding costs to $0 and cut retrieval latency.' },
        { question: 'Why pgvector over Pinecone/Milvus?', answer: 'For a campus system, a specialized vector DB adds unnecessary operational complexity. PostgreSQL with pgvector allowed relational and vector data to live together in a single Prisma schema.' },
        { question: 'Why Groq + Llama 3.1?', answer: 'Groq LPU hardware generates tokens at extraordinary speeds. Combined with Next.js Edge streaming, it provides instantaneous response times.' }
      ],
      challengesFaced: [
        { challenge: 'Serverless 250MB Bundle Limit on Vercel', solution: 'The onnxruntime-node library ships with ~513MB of multi-OS binaries. Added Webpack outputFileTracingExcludes in next.config.ts to aggressively strip CUDA, macOS, and Windows binaries down to ~130MB.' },
        { challenge: 'Serverless Cold Starts on Read-Only Filesystems', solution: 'Vercel serverless filesystems are read-only. Configured the 90MB Hugging Face model cache to download into /tmp/ and maintained an in-process singleton for warm execution.' }
      ],
      scalability: [
        'Migrate from serverless to persistent Docker containers (AWS ECS/Railway) to keep the 90MB embedding model permanently warm in memory.',
        'Integrate Upstash Redis caching for frequently asked student questions (e.g., library timings, fee deadlines).',
        'Incorporate multi-modal document parsing for scanned campus circulars.'
      ],
      metrics: [
        { label: 'Embedding Cost', value: '$0 (Local ONNX)' },
        { label: 'Hallucinations', value: '0% (Strict Filter)' },
        { label: 'Token Speed', value: 'Blazing (Groq LPU)' }
      ],
      elevatorPitch: 'Hiraya is an AI Campus Assistant for NIT Hamirpur that eliminates hallucinations using Retrieval-Augmented Generation. By compiling Hugging Face transformers locally in Node.js with PostgreSQL pgvector, I achieved a zero-cost embedding architecture and overcame Vercel serverless bundle limits through custom Webpack binary pruning.'
    },
    metrics: [
      { label: 'Accuracy', value: '80%' },
      { label: 'Speed Increase', value: '90%' },
      { label: 'Active Users', value: '100+' }
    ]
  },
  {
    id: '5',
    title: 'OnBoard - Cryptocurrency Payment Enhancement Platform',
    tagline: 'Winner of Payman AI Dev Challenge - 100 USDC Prize',
    description: 'Cryptocurrency payment enhancement platform comparing transaction fees across 5+ payment methods with automated crypto transactions.',
    longDescription: 'Architected software system that compares transaction fees across multiple payment methods and integrates Payman Wallet API for automated crypto transactions, reducing fees by 60% for transfers over 100 USDC. Won 100 USDC prize in Payman AI Dev Challenge.',
    technologies: ['Next.js', 'JavaScript', 'TypeScript', 'Solidity', 'MongoDB', 'Google OAuth', 'BetterAuth', 'Cloudflare'],
    category: 'fullstack',
    featured: false,
    github: 'https://github.com/contributorsambhav/onboard',
    image: '/projects/onboard.png',
    live: 'https://onboard-iota-seven.vercel.app/',
    highlights: ['Fee comparison across 5+ payment methods', '60% fee reduction for crypto transactions', 'Automated Payman Wallet API integration', 'Won 100 USDC in Dev Challenge'],
    metrics: [
      { label: 'Fee Reduction', value: '60%' },
      { label: 'Prize Won', value: '100 USDC' },
      { label: 'Payment Methods', value: '5+' }
    ]
  },
  {
    id: '6',
    title: 'AI Frame Interpolator - Smart India Hackathon 2024',
    tagline: 'Team Lead for ISRO Problem Statement | Achieved 36.38 PSNR on Xiph-2K Dataset',
    description: 'Developed an AI-based frame interpolation system to generate intermediate video frames, improving video quality and temporal resolution for the ISRO challenge.',
    longDescription: 'Led a team in the Smart India Hackathon 2024 to create a high-performance AI frame interpolator tailored for the ISRO problem statement. The model achieved 36.38 PSNR on the Xiph-2K dataset, demonstrating state-of-the-art interpolation performance. Oversaw architecture design, model training, evaluation, and integration, showcasing both leadership and advanced technical skills in a competitive environment.',
    technologies: ['Python', 'PyTorch', 'OpenCV', 'Deep Learning', 'Neural Networks', 'Xiph-2K Dataset', 'Video Processing'],
    category: 'ai',
    featured: false,
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
    id: '7',
    title: 'Saarthi',
    tagline: 'Collision-Free Train Path Optimization System',
    category: 'ai',
    description: 'An optimization-driven railway path prediction system ensuring collision-free train movement using Operations Research techniques.',
    longDescription: 'Saarthi is a decision-support system developed during Smart India Hackathon 2025 for the Ministry of Railways. The project focuses on optimal and collision-free train path prediction using Operations Research models implemented with IBM ILOG CPLEX and OPL. The backend optimization engine computes feasible schedules and paths under real-world constraints, while a React-based frontend visualizes simulations and system responses, enabling stakeholders to analyze and validate routing decisions interactively.',
    technologies: ['IBM ILOG CPLEX', 'OPL (Optimization Programming Language)', 'Operations Research', 'React', 'Vite', 'JavaScript', 'Data Visualization', 'Simulation Modeling'],
    featured: false,
    github: 'https://github.com/contributorsambhav/saarthi',
    live: 'https://saarthi-web.vercel.app/',
    architectureUrl: 'https://github.com/contributorsambhav/saarthi#system-architecture',
    video: 'https://www.youtube.com/watch?v=V8kZM2U_b14',
    highlights: ['Collision-free train path and schedule optimization', 'Operations Research-based modeling using IBM ILOG CPLEX', 'Constraint-based optimization with OPL', 'Frontend simulation and visualization of routing decisions', 'Designed for real-world railway traffic constraints', 'Built for Smart India Hackathon 2025 - Ministry of Railways problem statement'],
    metrics: [
      { label: 'Optimization Engine', value: 'IBM ILOG CPLEX' },
      { label: 'Domain', value: 'Railway Scheduling & Routing' },
      { label: 'Hackathon', value: 'SIH 2025' }
    ]
  },
  {
    id: '8',
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
    id: '9',
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
    id: '10',
    title: 'MicroLending (Stellar)',
    tagline: 'Decentralized Micro-Lending App on Stellar',
    description: 'A Stellar-based micro-lending platform designed for financial inclusion, enabling peer-to-peer lending with transparent ledger tracking and low fees.',
    longDescription: `MicroLending is a decentralized lending application built on the Stellar network as part of the Stellar LATAM Ideathon. The platform enables users to participate in peer-to-peer micro-loans with trustless ledger tracking and minimal transaction costs. Leveraging Stellar's consensus protocol and asset issuance features, the app supports secure loan requests, funding flows, repayment tracking, and real-time balance updates. The project demonstrates blockchain integration, distributed ledger mechanics, and financial product design for unbanked and underserved communities.`,

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
    id: '11',
    title: 'Among Us - DSC Landing Page',
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
    id: '12',
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
    id: '13',
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
    id: '14',
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
    id: '15',
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
    id: '16',
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
  }
];
