import styles from './style.module.scss';
import { translate } from '../../anim';
import { motion } from 'motion/react';

const items: { label: string; value: string }[] = [
  { label: 'Plantilla base:', value: '3d-portfolio · Naresh Khatri (MIT)' },
  { label: 'Tipografía:', value: 'Space Grotesk · Unbounded' },
  { label: '3D:', value: 'Spline' },
];

export default function Footer() {
  return (
    <div className={styles.footer}>
      {items.map((item) => (
        <ul key={item.label}>
          <motion.li
            custom={[0.3, 0]}
            variants={translate}
            initial="initial"
            animate="enter"
            exit="exit"
          >
            <span>{item.label}</span> {item.value}
          </motion.li>
        </ul>
      ))}
    </div>
  );
}
