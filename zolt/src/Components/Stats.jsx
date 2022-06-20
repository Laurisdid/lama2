function Stats({ zolts }) {
  return (
    <div className="card mt-4">
      <div className="card-header">
        <h2>Statistic</h2>
        <h3>{}</h3>
      </div>
      <h3>Total KM</h3>
      <span>
        {zolts?.reduce((sum, entry) => (sum += entry.totalKm), 0) ?? 0}
      </span>
      <h3>Total colts</h3>
      <span>{zolts?.length ?? 0}</span>
    </div>
  );
}

export default Stats;
