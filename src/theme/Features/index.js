import React from "react";
import clsx from "clsx";
import useBaseUrl from '@docusaurus/useBaseUrl';
import useThemeContext from '@theme/hooks/useThemeContext';

import styles from "./styles.module.scss";

const size = 64;
const data = [
  {
    title: <>Easy</>,
    icon: 'img/features/simple.svg',
    iconDark: 'img/features/simple.svg',
    description: (
      <>
        Easy to use, comes with tokenization and auto completion
      </>
    ),
  },
  {
    title: <>Real time</>,
    icon: 'img/features/states-w.svg',
    iconDark: 'img/features/states-w.svg',
    description: (
      <>
        Monitor file system changes in real time and retrieve quickly
      </>
    ),
  },
  {
    title: <>Efficient</>,
    icon: 'img/features/cities-b.svg',
    iconDark: 'img/features/cities-b.svg',
    description: (
      <>
        Millisecond-level search with low memory and cpu resource usage
      </>
    ),
  },
];

function Feature({ icon, iconDark, title, description }) {
  const {isDarkTheme} = useThemeContext();
  return (
    <div className={clsx("col col--4", styles.feature)}>
      <div className="item">
        {icon && <div className={styles.icon}>
          <img
            src={(isDarkTheme) ? useBaseUrl(iconDark) : useBaseUrl(icon)}
            alt={title}
            width={size}
          />
        </div>}
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
}

function Features() {
  return (
    <>
      {data && data.length && (
        <section id="features" className={styles.features}>
          <div className="container">
            <div className="row">
              <div className="col col--11 col--offset-1">
                <div className="row">
                  {data.map((props, idx) => (
                    <Feature key={idx} {...props} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Features;
