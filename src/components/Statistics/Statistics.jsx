import PropTypes from 'prop-types'
import styles from '../Statistics/Statistics.module.css';

const Statistics = props => {
  return (
    <section className="statistics">
      {props.title ? <h2 className={styles['title']}>{props.title}</h2> : ''}
      <ul className={styles['stat-list']}>
        {props.stats.map(el => (
          <li
            className={styles['item']}
            key={el.id}
            style={{
              backgroundColor:
                '#' + Math.floor(Math.random() * 16777215).toString(16),
            }}
          >
            <span>{el.label}</span>
            <span>{el.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.array.isRequired
}

export default Statistics;
