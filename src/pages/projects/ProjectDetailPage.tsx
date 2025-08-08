import { useParams } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import ProjectDetails from '../../components/ProjectsSection/ProjectDetails';


type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  features: string[];
  liveDemoLink?: string;
  githubLink?: string;
  githubLinks?: { label: string; url: string }[];
  devpostLink?: string;  
};

const projectData: Record<string, Project> = {
  'caboa-website': {
    title: 'CABOA Official Website',
    description: `The official responsive website for Central Alberta Basketball Officials Association, designed with a focus on speed, clarity, and ease of use. Built with React and Firebase, this site offers seamless navigation with animated routing powered by Framer Motion, making it both visually engaging and highly functional. The layout is clean and minimalistic, ensuring users — whether officials or administrators — can quickly access schedules, updates, and resources. Real-time data sync with Firebase ensures that content is always current without needing page refreshes. Mobile-friendly and optimized for fast loading on all devices.`,
    image: '/images/projects/CABOA_preview.png',
    tags: ['React', 'JavaScript', 'Firebase', 'Framer Motion', 'React Router', 'HTML/CSS'],
    features: [
      'Smooth animated page transitions with Framer Motion',
      'Real-time data synchronization using Firebase Firestore',
      'Intuitive navigation with React Router',
    ],
    liveDemoLink: 'https://caboa.ca/',
    githubLink: 'https://github.com/KhymNad/CABOA'
  },

  'resume-matcher': {
    title: 'AI-Powered Resume Matcher',
    description: `This cutting-edge application streamlines the job search process by intelligently matching user resumes to relevant job listings. Utilizing React for a responsive and interactive front end, and ASP.NET Core with Python powering the backend, it extracts key skills and experience from PDF resumes using Hugging Face NLP models. It then cross-references those skills with live job postings from the Adzuna API, offering users precise and personalized job recommendations.`,
    image: '/images/projects/resume-matcher-thumb.png',
    tags: ['ASP.NET Core', 'Python', 'HuggingFace', 'NLP', 'C#', 'JavaScript', 'React', 'Vite', 'Vercel', 'Render', 'Framer Motion', 'PDF Plumber', 'Adzuna API'],
    features: [
      'Automated keyword extraction from uploaded PDF resumes',
      'Integration with Adzuna job listings for real-time matching',
      'Sophisticated NLP models powered by Hugging Face',
    ],
    liveDemoLink: 'https://resume-matcher-client.vercel.app/',
        githubLinks: [
      { label: 'Frontend Repo', url: 'https://github.com/KhymNad/resume-matcher-client' },
      { label: 'Backend Repo', url: 'https://github.com/KhymNad/resume-matcher-api' },
    ],
  },

  'neuroscience-hackathon': {
    title: 'Neuroscience Hackathon App',
    description: `Developed for natHACKS 2024, this innovative React Native app dives into the fascinating world of brainwave analysis. It captures real-time EEG data, processes it with Python-powered machine learning models, and predicts interpersonal compatibility dynamically. The app’s smooth UI visualizes brainwave patterns and compatibility scores, creating a futuristic experience for users interested in neuroscience and social connection. Designed for mobile platforms, it integrates live data streams and predictive algorithms to deliver immediate, meaningful insights, showcasing the power of combining biology with technology.`,
    image: '/images/projects/neuromance-thumb.jpg',
    tags: ['React Native', 'Node.js', 'Python', 'JavaScript', 'Machine Learning', 'EEG', 'Data Visualization', 'Hackathon'],
    features: [
      'Real-time EEG data acquisition and visualization',
      'Python backend for brainwave data analysis and prediction',
      'Live data streaming and interactive UI components',
    ],
    devpostLink: 'https://devpost.com/software/neuromance-pbg8iw',
    githubLink: 'https://github.com/orgs/natHACKS-2024-idk/repositories'
  },

  'personal-portfolio': {
    title: 'Personal Portfolio',
    description: `A sleek and modern personal portfolio website built with TypeScript, React, and Vite that showcases projects, skills, and education in a clean, engaging format. Leveraging Framer Motion, it delivers smooth animations and transitions that enhance the user experience without sacrificing performance. The portfolio is optimized for SEO and responsiveness, ensuring it looks stunning on any device. It’s designed not just as a showcase, but also as a technical demonstration of best practices in modern frontend development, including component reusability and clean code architecture.`,
    image: '/images/projects/portfolio-react.png',
    tags: ['TypeScript', 'React', 'Vite', 'Framer Motion', 'HTML', 'CSS', 'GitHub Pages'],
    features: [
      'Smooth animations and transitions with Framer Motion',
      'SEO-friendly with semantic HTML structure',
      'Organized sections for projects, education, and certifications',
    ],
    liveDemoLink: 'https://khymnad.github.io/Portfolio/',
    githubLink: 'https://github.com/KhymNad/portfolio-react'
  },

  'decentralized-social': {
    title: 'Decentralized Social Network',
    description: `A privacy-focused decentralized social networking platform designed to empower users with control over their data. Built with Django and REST APIs, it supports secure, encrypted communication between nodes in a federated environment. PostgreSQL ensures robust data storage, while custom authentication mechanisms protect user identity. This scalable ecosystem allows censorship-resistant posting and messaging, pushing the boundaries of social media infrastructure by emphasizing security, privacy, and resilience against central points of failure.`,
    image: '/images/projects/social-thumb.jpg',
    tags: ['Django', 'PostgreSQL', 'REST API', 'JavaScript', 'Heroku', 'Python', 'HTML/CSS'],
    features: [
      'Custom authentication and secure user identity management',
      'Robust data management with PostgreSQL',
      'Scalable deployment on Heroku with RESTful API design',
    ],
    githubLink: 'https://github.com/KhymNad/decentralized_social_network?tab=readme-ov-file'
  },

  'android-event-scheduler': {
    title: 'Android Event Scheduler',
    description: `A feature-rich Android application developed in Java that simplifies event management with QR code-based check-ins and real-time synchronization. Integrated with Firebase Authentication for secure user login and Firestore for live data updates, it enables event organizers to easily schedule, track attendance, and manage participants. The intuitive interface is designed for smooth navigation, making event setup and management accessible even to non-technical users. The app leverages Firebase’s realtime capabilities to ensure data is always current, enhancing event coordination efficiency.`,
    image: '/images/projects/android-scheduler-thumb2.jpg',
    tags: ['Java', 'Firebase', 'XML', 'Firestore', 'Android Studio', 'Gradle'],
    features: [
      'Secure Firebase Authentication for user login',
      'QR code generation and scanning for check-ins',
      'Real-time attendee tracking with Firestore',
    ],
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
