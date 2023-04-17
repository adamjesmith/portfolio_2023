import Image from 'next/image';
import { A11y, EffectFade, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

import s from './Carousel.module.css';

import { IProjectFields } from '@/lib/types/contentful';
import newLineFromString from '@/lib/utils/new-line-from-string';

import { Link } from '@/components/ui';
import { Container } from '@/components/ui';

type Props = {
  projects: IProjectFields[];
};

export default function Carousel({ projects }: Props) {
  return (
    <Container className={s.container} text={true}>
      <Swiper
        modules={[Pagination, A11y, EffectFade]}
        className={s.root}
        spaceBetween={50}
        slidesPerView={1}
        effect='fade'
        pagination={{
          clickable: true,
          type: 'bullets',
          bulletElement: 'span',
          bulletClass: `${s.bullet}`,
          bulletActiveClass: `${s.bulletActive}`,
        }}
      >
        {projects.map((project: IProjectFields, index: number) => {
          const { titleDisplay: title, mainImage: image } = project;

          return (
            <SwiperSlide className={s.slide} key={index}>
              <div className={s.contain}>
                <div className={s.image}>
                  <Image
                    width={image.fields.file.details.image?.width || 640}
                    height={image.fields.file.details.image?.height || 467}
                    src={`http:${image.fields.file.url}`}
                    alt={image.fields.title}
                  />
                </div>
                <div className={s.text}>
                  <h2 className={s.title}>{newLineFromString(title)}</h2>
                  <Link className={s.link} href={`/projects/${project.slug}`}>
                    view project
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Container>
  );
}
