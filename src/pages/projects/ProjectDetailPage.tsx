import { useParams } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import ProjectDetails from '../../components/ProjectsSection/ProjectDetails';


type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  features: string[];
  liveDemoLink: string;
  githubLink: string;
};

const projectData: Record<string, Project> = {
  'caboa-website': {
    title: 'CABOA Official Website',
    description: 'Responsive site for Central Alberta Basketball Officials built with React and Firebase. Features animated routing, clean layout, and fast performance with intuitive navigation.',
    image: '/images/projects/CABOA_preview.png',
    tags: ['React', 'JavaScript', 'Firebase', 'Framer Motion', 'JavaScript', 'React Router', 'HTML/CSS'],
    features: [],
    liveDemoLink: 'https://caboa.ca/',
    githubLink: 'https://github.com/KhymNad/CABOA'
  },
  'resume-matcher': {
    title: 'AI-Powered Resume Matcher',
    description: 'Smart resume matcher using React, ASP.NET Core, and Python. Extracts keywords with Hugging Face NLP and matches to Adzuna jobs. Includes PDF parsing and a clean, responsive UI.',
    image: '/images/projects/resume-matcher-thumb.png',
    tags: ['ASP.NET Core', 'Python', 'HuggingFace', 'Natural Language Processing', 'C#', 'JavaScript', 'React', 'Vite', 'Vercel', 'Render', 'FramerMotion', 'PDF Plumber', 'Adzuna API'],
    features: [
      'Extracts job keywords from resumes',
      'Uses Hugging Face NLP for keyword extraction',
      'Matches keywords with Adzuna job listings',
      'Clean and responsive UI'
    ],
    liveDemoLink: 'https://resume-matcher-client.vercel.app/',
    githubLink: 'https://github.com/your-repo/resume-matcher'
  },
  'neuroscience-hackathon': {
    title: 'Neuroscience Hackathon App',
    description: 'React Native app from natHACKS 2024 that analyzes brainwave data and predicts compatibility in real time, integrating Python backends and live data visualization features.',
    image: '/images/projects/neuromance-thumb.jpg',
    tags: ['React', 'Node.js', 'Python', 'JavaScript', 'Hackathon', 'EEG', 'HTML/CSS'],
    features: [],
    liveDemoLink: 'https://devpost.com/software/neuromance-pbg8iw',
    githubLink: 'https://github.com/orgs/natHACKS-2024-idk/repositories'
  },
  'personal-portfolio': {
    title: 'Personal Portfolio',
    description: 'Responsive portfolio built with TypeScript, React, and Vite. Showcases projects, skills, and education with smooth Framer Motion animations and a sleek, modern design.',
    image: '/images/projects/portfolio-react.png',
    tags: ['TypeScript', 'React', 'Vite', 'Framer Motion', 'HTML', 'CSS', 'GitHub Pages'],
    features: [],
    liveDemoLink: 'https://khymnad.github.io/Portfolio/',
    githubLink: 'https://github.com/KhymNad/portfolio-react'
  },
  'decentralized-social': {
    title: 'Decentralized Social Network',
    description: 'Decentralized platform built with Django and REST APIs, enabling secure cross-node communication with PostgreSQL and custom auth in a scalable, censorship-resistant ecosystem.',
    image: '/images/projects/social-thumb.jpg',
    tags: ['Django', 'PostgreSQL', 'REST API', 'JavaScript', 'Heroku', 'Python', 'HTML/CSS'],
    features: [],
    liveDemoLink: 'https://your-social-demo.com',
    githubLink: 'https://github.com/KhymNad/decentralized_social_network?tab=readme-ov-file'
  },
  'android-event-scheduler': {
    title: 'Android Event Scheduler',
    description: 'Android app developed in Java for organizing events and QR-based check-ins, backed by Firebase Authentication and Firestore for real-time data syncing and secure access.',
    image: '/images/projects/android-scheduler-thumb2.jpg',
    tags: ['Java', 'Firebase', 'XML', 'Firestore', 'Android Studio', 'Gradle'],
    features: [],
    liveDemoLink: '',
    githubLink: 'https://github.com/CMPUT301W24T27/NoStack'
  }
};

export default function ProjectPage() {
  const { slug } = useParams();
  const data = projectData[slug ?? ''];

  if (!data) return <p style={{ color: 'white' }}>Project not found</p>;

  return (
    <>
      <NavBar />
      <div style={{ paddingTop: '6rem' }}>
        <ProjectDetails {...data} />
      </div>
    </>
  );
}
