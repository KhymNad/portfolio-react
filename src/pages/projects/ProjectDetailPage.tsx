import { useParams } from 'react-router-dom';
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
  'resume-matcher': {
    title: 'AI - Powered Resume Matcher',
    description: 'Sed ut perspiciatis unde omnis iste...',
    image: '/images/projects/resume-matcher-thumb.png',
    tags: ['React', 'Python', 'OpenAI', 'Django', 'Tailwind', 'TypeScript'],
    features: [
      'Extracts job keywords from resumes',
      'Uses OpenAI embeddings for ranking',
      'Real-time feedback for applicants',
      'Deployable with Render or Vercel'
    ],
    liveDemoLink: 'https://resume-matcher-demo.com',
    githubLink: 'https://github.com/yourusername/resume-matcher'
  }
};

export default function ProjectPage() {
  const { slug } = useParams();

  const data = projectData[slug ?? ''];

  if (!data) return <p style={{ color: 'white' }}>Project not found</p>;

  return <ProjectDetails {...data} />;
}
