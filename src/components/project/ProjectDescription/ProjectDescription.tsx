import s from './ProjectDescription.module.css';

import { Container, Section } from '@/components/ui';
import { Link } from '@/components/ui';
interface ProjectDescriptionProps {
  categories: string[];
  description: string;
  keyRoles: string[];
  tagline: string;
  url?: string;
}

export default function ProjectDescription({
  categories,
  description,
  keyRoles,
  tagline,
  url = undefined,
}: ProjectDescriptionProps) {
  function generateList(title: string, list: string[]) {
    return (
      <div className={s.list}>
        <h6 className={s.listTitle}>{title}</h6>
        <ul className={s.list}>
          {list.map((item: string, i: number) => (
            <li className={s.listItem} key={i}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className={s.root}>
      <Section>
        <Container text={true}>
          <h6 className={s.preTitle}>About the project</h6>
          <h1 className={s.title}>{tagline}</h1>

          <div className={s.contain}>
            <div className={s.textContain}>
              <p className={s.text}>{description}</p>
              {url && (
                <Link className={s.link} href={url}>
                  <span>view website</span>
                </Link>
              )}
            </div>

            <div className={s.aside}>
              {keyRoles && generateList('Key Roles', keyRoles)}
              {categories && generateList('Categories', categories)}
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
