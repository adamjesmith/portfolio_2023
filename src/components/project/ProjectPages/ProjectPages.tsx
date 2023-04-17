import { Asset } from 'contentful';
import Image from 'next/image';

import s from './ProjectPages.module.css';

import { Container, Section } from '@/components/ui';
interface ProjectPagesProps {
  image: Asset;
}

export default function ProjectPages({ image }: ProjectPagesProps) {
  return (
    <Section>
      <Container noMaxWidth={true} clean={true}>
        <Image
          className={s.image}
          width={image.fields.file.details.image?.width || 640}
          height={image.fields.file.details.image?.height || 467}
          src={`http:${image.fields.file.url}`}
          alt={image.fields.title}
        />
      </Container>
    </Section>
  );
}
