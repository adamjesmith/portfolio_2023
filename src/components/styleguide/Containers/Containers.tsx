import cn from 'clsx';
import { FC } from 'react';

import s from './Containers.module.css';

import { Container } from '@/components/ui';
interface ContainersProps {
  className?: string;
}

const Containers: FC<ContainersProps> = ({ className }) => {
  const rootClassName = cn(s.root, className);
  return (
    <div className={rootClassName}>
      <Container noMaxWidth={true} clean={true}>
        <div className={s.example}>
          <h5 className={s.title}>Container (No max width & No Padding)</h5>
          <span className={s.size}>Max width: None</span>
          <span className={s.size}>Padding (L & R): 0px</span>
          <span className={s.size}>Max Inner width: Same as window</span>
        </div>
      </Container>
      <Container noMaxWidth={true}>
        <div className={s.example}>
          <h5 className={s.title}>Container (No max width w/padding)</h5>
          <span className={s.size}>Max width: None</span>
          <span className={s.size}>Padding (L & R): 48px</span>
          <span className={s.size}>Max Inner width: Window width - 48px</span>
        </div>
      </Container>
      <Container>
        <div className={s.example}>
          <h5 className={s.title}>Container</h5>
          <span className={s.size}>Max width: 1280px</span>
          <span className={s.size}>Padding (L & R): 48px</span>
          <span className={s.size}>Max Inner width: 1184px</span>
        </div>
      </Container>
      <Container text={true}>
        <div className={s.body}>
          <h5 className={s.title}>Text Container</h5>

          <p className={s.size}>Max width: 1024px</p>
          <p className={s.size}>Padding (L & R): 0px</p>

          <p className={s.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            provident, ipsum culpa sit assumenda molestiae? Quisquam tempore
            illo quae, suscipit velit quas maiores ad laudantium doloremque, sit
            fuga atque ipsam. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Expedita praesentium aliquid culpa! Nostrum
            repudiandae optio labore quibusdam, ab delectus obcaecati adipisci
            minima rem natus ex tempora ipsam eum, maiores aut.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Containers;
