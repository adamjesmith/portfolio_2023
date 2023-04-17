import cn from 'clsx';
import { Asset } from 'contentful';
import Image from 'next/image';
import { useState } from 'react';

import s from './ProjectIntro.module.css';

import newLineFromString from '@/lib/utils/new-line-from-string';

import { ChevronDown } from '@/components/icons';
import { Container } from '@/components/ui';

interface ProjectIntroProps {
  image: Asset;
  primary: string;
  secondary: string;
  title: string;
  name: string;
}

export default function ProjectIntro({
  image,
  title,
  primary,
  secondary,
  name,
}: ProjectIntroProps) {
  const outlineTitleClass = cn(s.title, s.outlineTitle);
  const blockTitleClass = cn(s.title, s.blockTitle);
  const [contract, setContract] = useState(true);

  return (
    <div
      className={cn(s.root, { [s.contract]: contract })}
      style={{
        backgroundColor: primary,
        color: secondary,
      }}
    >
      <Container className={s.container} text={true}>
        <div className={s.contain}>
          <h2 className={blockTitleClass}>{newLineFromString(title)}</h2>

          <div className={s.spacer}></div>

          <div className={s.imageContain}>
            <h2 className={outlineTitleClass}>{newLineFromString(title)}</h2>

            <Image
              // onClick={() => setContract(!contract)}
              className={s.image}
              width={image.fields.file.details.image?.width || 640}
              height={image.fields.file.details.image?.height || 467}
              src={`http:${image.fields.file.url}`}
              alt={name}
            />
          </div>
        </div>
      </Container>

      <ChevronDown className={s.icon} />
    </div>
  );
}
