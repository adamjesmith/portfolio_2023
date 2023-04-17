import { Asset } from 'contentful';
import Image from 'next/image';

import s from './ProjectMobile.module.css';

import { Container, Section } from '@/components/ui';
interface ProjectMobileProps {
  images: Asset[];
}

export default function ProjectMobile({ images }: ProjectMobileProps) {
  return (
    <Section>
      <Container>
        <div className={s.root}>
          {images.map((image, index) => (
            <div className={s.image} key={index}>
              <Image
                width={image.fields.file.details.image?.width || 340}
                height={image.fields.file.details.image?.height || 604}
                src={`http:${image.fields.file.url}`}
                alt={image.fields.title}
              />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
