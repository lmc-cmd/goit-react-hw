const Statistics = props => {
  return (
    <section className="statistics">
      <h2 className="title" style={{display: 'flex', justifyContent: 'center'}}>{props.title}</h2>
      <ul className="stat-list" style={{ display: 'flex', listStyle: 'none' }} >
        {props.stats.map(el => (
          <li className="item" key={el.id} style={{
            display: 'flex', flexDirection: 'column', width: '100px', alignItems: 'center', backgroundColor: 'aqua' }}>
            <span className="label">{el.label}</span>
            <span className="percentage"> {el.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Statistics;
