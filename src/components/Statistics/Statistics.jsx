const Statistics = props => {
  return (
    <section className="statistics">
      <h2 className="title">{props.title}</h2>
      <ul className="stat-list">
        {props.stats.map(el => (
          <li className="item" key={el.id}>
            <span className="label">{el.label}</span>
            <span className="percentage"> {el.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Statistics;
