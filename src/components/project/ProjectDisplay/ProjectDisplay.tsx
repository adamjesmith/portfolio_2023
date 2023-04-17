import { Asset } from 'contentful';
import Image from 'next/image';

import s from './ProjectDisplay.module.css';

import { Container, Section } from '@/components/ui';

interface ProjectDisplayProps {
  image: Asset;
}

export default function ProjectDisplay({ image }: ProjectDisplayProps) {
  return (
    <Section>
      <Container>
        <div className={s.root}>
          <Image
            className={s.image}
            width={image.fields.file.details.image?.width || 640}
            height={image.fields.file.details.image?.height || 467}
            src={`http:${image.fields.file.url}`}
            alt={image.fields.title}
          />
        </div>
      </Container>
    </Section>
  );
}
