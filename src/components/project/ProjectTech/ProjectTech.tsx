import s from './ProjectTech.module.css';

import * as icons from '@/components/icons';
import { Container, Section } from '@/components/ui';

interface ProjectTechProps {
  description: string;
  tech: string[];
  title: string;
}

type iconComponent = {
  name: string;
  component: React.FC;
};

export default function ProjectTech({
  description,
  tech,
  title,
}: ProjectTechProps) {
  const iconComponents: iconComponent[] = [
    { name: 'Contentful', component: icons['Contentful'] },
    { name: 'Figma', component: icons['Figma'] },
    { name: 'Github', component: icons['Github'] },
    { name: 'Heroku', component: icons['Heroku'] },
    { name: 'Invision', component: icons['Invision'] },
    { name: 'Javascript', component: icons['Javascript'] },
    { name: 'Klaviyo', component: icons['Klaviyo'] },
    { name: 'Next', component: icons['Next'] },
    { name: 'Nosto', component: icons['Nosto'] },
    { name: 'Photoshop', component: icons['Photoshop'] },
    { name: 'React', component: icons['React'] },
    { name: 'Recharge', component: icons['Recharge'] },
    { name: 'Sass', component: icons['Sass'] },
    { name: 'Shopify', component: icons['Shopify'] },
    { name: 'Sketch', component: icons['Sketch'] },
    { name: 'Tailwind', component: icons['Tailwind'] },
    { name: 'Typescript', component: icons['Typescript'] },
    { name: 'Vercel', component: icons['Vercel'] },
    { name: 'Vue', component: icons['Vue'] },
    { name: 'Webpack', component: icons['Webpack'] },
  ];

  const techIcons = tech.map((t) => {
    return iconComponents.filter(
      (icon) => icon.name.toLocaleLowerCase() === t.toLocaleLowerCase()
    )[0];
  });

  return (
    <Section>
      <Container text={true}>
        <div className={s.textContain}>
          <h6 className={s.title}>{title}</h6>
          <p className={s.text}>{description}</p>
        </div>
      </Container>
      <Container>
        <ul className={s.tech}>
          {techIcons.map((t, i) => {
            const Component = t.component;

            return (
              <li className={s.techItem} key={i}>
                <div className={s.techContain}>
                  <div className={s.icon}>
                    <Component />
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
