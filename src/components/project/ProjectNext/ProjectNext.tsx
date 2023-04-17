import Image from 'next/image';

import s from './ProjectNext.module.css';

import { NextProject } from '@/lib/types/next-project';
import newLineFromString from '@/lib/utils/new-line-from-string';

import { Link } from '@/components/ui';
import { Container, Section } from '@/components/ui';

interface ProjectNextProps {
  project: NextProject;
}

export default function ProjectNext({ project }: ProjectNextProps) {
  const { image, primary, secondary, slug, title } = project;

  return (
    <Section>
      <Container className={s.container}>
        <div
          className={s.root}
          style={{
            backgroundColor: primary,
            color: secondary,
          }}
        >
          <Container className={s.textContainer} text={true}>
            <div className={s.text}>
              <h5 className={s.title}>{newLineFromString(title)}</h5>

              <Link className={s.link} href={`/projects/${slug}`}>
                <span>view project</span>
              </Link>
            </div>

            <div className={s.image}>
              <Image
                width={image.fields.file.details.image?.width || 640}
                height={image.fields.file.details.image?.height || 467}
                src={`http:${image.fields.file.url}`}
                alt={image.fields.title}
              />
            </div>
          </Container>
        </div>
      </Container>
    </Section>
  );
}
