import styles from './Projects.module.css';
import { useState } from 'react';
import Image from 'next/image';
import { projects } from '../data/projects';
import { v4 as uuidv4 } from 'uuid';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  const handleChooseProject = (e) => {
    const projectIndex = e.target.getAttribute('data-index');
    setSelectedProject(projects[projectIndex]);
  };

  return (
    <article className={styles.projects}>
      <figure className={styles.projectImages}>
        <a href={selectedProject.links[0].href} target='_blank' rel='noopener noreferrer'>
          <Image
            priority='true'
            src={selectedProject.ipad}
            width={620}
            height={474}
            alt={selectedProject.ipadAlt}
            className={styles.ipadImage}
          ></Image>
          <Image
            priority='true'
            src={selectedProject.iphone}
            width={620}
            height={474}
            alt={selectedProject.iphoneAlt}
            className={styles.iphoneImage}
          ></Image>
        </a>
        <figcaption>Design &amp; Developement: Brandi Cameron</figcaption>
      </figure>

      <section className={styles.projectData}>
        <h1>{selectedProject.title}</h1>

        <ul className={styles.projectTechStack}>
          {selectedProject.technologies.map((tech) => (
            <li key={uuidv4()}>{tech}</li>
          ))}
        </ul>

        <ul className={styles.projectLinks}>
          {selectedProject.links.map((link) => (
            <li key={uuidv4()}>
              <a href={link.href} target='_blank' rel='noopener noreferrer'>
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        {selectedProject.description.map((paragraph) => (
          <p key={uuidv4()}>{paragraph}</p>
        ))}

        {selectedProject.descriptionList && (
          <ul className={styles.descriptionList}>
            {selectedProject.descriptionList.map((li) => (
              <li key={uuidv4()}>{li}</li>
            ))}
          </ul>
        )}
      </section>

      <ul className={styles.projectThumbnails}>
        {projects.map((project, index) => (
          <li key={uuidv4()}>
            <button>
              <Image
                priority='true'
                src={project.ipad}
                width={620}
                height={474}
                alt={project.title}
                title={project.title}
                data-index={index}
                className={styles.thumbnail}
                onClick={handleChooseProject}
              ></Image>
            </button>
          </li>
        ))}
      </ul>
    </article>
  );
}
