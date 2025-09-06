import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Empowers Educators',
    Svg: require('@site/static/img/educators.svg').default,
    description: (
      <>
        Works from professional teachers to homeschooling parents.
      </>
    ),
  },
  {
    title: 'Excites Learners',
    Svg: require('@site/static/img/learners.svg').default,
    description: (
      <>
        Unlike a PC, learners eyes light up the moment they see a circuit coming to life.  
      </>
    ),
  },
  {
    title: 'Impacts Communities',
    Svg: require('@site/static/img/communities.svg').default,
    description: (
      <>
        Inclusive of all backgrounds and age-groups to build  better future. 
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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

