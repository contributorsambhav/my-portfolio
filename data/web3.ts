// data/web3.ts
import { Web3Project } from '@/types';

export const web3Projects: Web3Project[] = [
  {
    id: "web3-1",
    title: "OnBoard - Payman AI Integration",
    type: "project",
    status: "completed",
    description: "Cryptocurrency payment enhancement platform that won 100 USDC in Payman AI Dev Challenge. Integrated Payman Wallet API for automated crypto transactions with 60% fee reduction.",
    technologies: [
      "Next.js",
      "Solidity",
      "Web3.js",
      "Payman API",
      "MongoDB",
      "TypeScript"
    ],
    blockchain: "Ethereum",
    github: "https://github.com/contributorsambhav/onboard",
    live: "https://onboard-iota-seven.vercel.app/",
    date: "2025-01"
  },
  {
    id: "web3-2",
    title: "Ethereum Foundation Grant - Phase 1",
    type: "grant",
    status: "applied",
    description: "Applied for Ethereum Foundation grant to build a decentralized identity verification system for educational institutions. Proposal focuses on creating a privacy-preserving credential verification protocol.",
    technologies: [
      "Solidity",
      "Ethereum",
      "Zero-Knowledge Proofs",
      "IPFS",
      "React.js"
    ],
    blockchain: "Ethereum",
    grant: {
      name: "Ethereum Foundation Grant",
      round: "Q1 2025"
    },
    date: "2025-02"
  },
  {
    id: "web3-3",
    title: "Gitcoin Grants Round 21",
    type: "grant",
    status: "applied",
    description: "Submitted proposal for building open-source developer tooling for Web3 education. Focus on creating interactive tutorials and smart contract templates for beginners.",
    technologies: [
      "Solidity",
      "Hardhat",
      "Next.js",
      "Documentation Tools"
    ],
    blockchain: "Ethereum",
    grant: {
      name: "Gitcoin Grants",
      round: "GG21"
    },
    date: "2025-01"
  },
  {
    id: "web3-4",
    title: "HealthChain - Medical Records on Blockchain",
    type: "project",
    status: "completed",
    description: "Blockchain-based medical records system ensuring data privacy and interoperability. Built during HackNITR 2024. Uses Ethereum smart contracts and IPFS for decentralized storage.",
    technologies: [
      "Solidity",
      "Ethereum",
      "IPFS",
      "Web3.js",
      "Hardhat",
      "React.js"
    ],
    blockchain: "Ethereum",
    github: "https://github.com/contributorsambhav/healthchain",
    date: "2024-09"
  },
  {
    id: "web3-5",
    title: "Optimism RetroPGF Round 5",
    type: "grant",
    status: "in-progress",
    description: "Building public goods project for Web3 education in India. Creating free resources and workshops for students to learn blockchain development.",
    technologies: [
      "Solidity",
      "Optimism",
      "Educational Content",
      "Community Building"
    ],
    blockchain: "Optimism",
    grant: {
      name: "Optimism RetroPGF",
      round: "Round 5"
    },
    date: "2025-03"
  },
  {
    id: "web3-6",
    title: "Polygon Village Grant",
    type: "grant",
    status: "rejected",
    description: "Attempted grant application for building a decentralized marketplace for digital art. Gained valuable experience in grant writing and proposal preparation.",
    technologies: [
      "Solidity",
      "Polygon",
      "IPFS",
      "NFT Standards"
    ],
    blockchain: "Polygon",
    grant: {
      name: "Polygon Village",
      round: "Q4 2024"
    },
    date: "2024-11"
  },
  {
    id: "web3-7",
    title: "DeFi Lending Protocol",
    type: "project",
    status: "in-progress",
    description: "Building a decentralized lending protocol with dynamic interest rates. Learning advanced DeFi concepts and Solidity security best practices.",
    technologies: [
      "Solidity",
      "Hardhat",
      "Chainlink Oracles",
      "OpenZeppelin",
      "React.js"
    ],
    blockchain: "Ethereum",
    github: "https://github.com/contributorsambhav/defi-lending",
    date: "2025-02"
  },
  {
    id: "web3-8",
    title: "Base Grant Program",
    type: "grant",
    status: "applied",
    description: "Applied for Base grant to build onboarding tools for Web2 developers transitioning to Web3. Focus on creating easy-to-use templates and tutorials.",
    technologies: [
      "Solidity",
      "Base",
      "Next.js",
      "Educational Tools"
    ],
    blockchain: "Base",
    grant: {
      name: "Base Grant Program",
      round: "Q1 2025"
    },
    date: "2025-02"
  }
];

export const getCompletedWeb3Projects = () => 
  web3Projects.filter(p => p.type === 'project' && p.status === 'completed');

export const getActiveGrants = () =>
  web3Projects.filter(p => p.type === 'grant' && (p.status === 'applied' || p.status === 'in-progress'));

export const getGrantAttempts = () =>
  web3Projects.filter(p => p.type === 'grant');