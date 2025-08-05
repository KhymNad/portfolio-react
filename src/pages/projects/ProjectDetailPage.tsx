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
  'resume-matcher': {
    title: 'AI - Powered Resume Matcher',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam,',
    image: '/images/projects/resume-matcher-thumb.png',
    tags: ['React', 'Django', 'OpenAI API', 'PostgreSQL', 'TypeScript', 'Tailwind', 'Auth0', 'extra1', 'easy2'],
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

  return (
    <>
      <NavBar />
      <div style={{ paddingTop: '6rem' }}>
        <ProjectDetails {...data} />
      </div>
    </>
  );
}
