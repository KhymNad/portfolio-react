import React from 'react';
import styles from './ProjectDetails.module.css';

interface ProjectDetailsProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  features: string[];
  liveDemoLink: string;
  githubLink: string;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({
  title,
  description,
  image,
  tags,
  features,
  liveDemoLink,
  githubLink,
}) => {
  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <p>{description}</p>

      <div className={styles.links}>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">Github</a>
        <a href={liveDemoLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
      </div>

      <h3>&lt;/&gt; Technologies Used</h3>
      <div className={styles.tagList}>
        {tags.map((tag, i) => (
          <span key={i} className={styles.tag}>{tag}</span>
        ))}
      </div>

      <img src={image} alt={`${title} screenshot`} className={styles.image} />

      <div className={styles.features}>
        <h3>Key Features</h3>
        <ul>
          {features.map((feat, i) => (
            <li key={i}>{feat}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectDetails;
