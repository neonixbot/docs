import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Fácil de Usar",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        ¡NeonixHub fue diseñado con muchos comandos útiles y es realmente fácil
        de usar!
      </>
    ),
  },
  {
    title: "Mantenido Activamente",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        NeonixHub se mantiene activamente en <a href="https://github.com/neonixbot/neonixbot">GitHub</a>. Comúnmente actualizamos sus dependencias y el código.
      </>
    ),
  },
  {
    title: "¿Auto-alojamiento? No hay problema",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        ¡NeonixHub está construido con Node.js y es muy fácil de alojar este
        bot por tu cuenta!
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

