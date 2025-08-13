export default function MenuTable({ items = [] }){
  return (
    <div className="card rounded-2xl overflow-hidden">
      <table className="table">
        <thead>
          <tr>
            <th>Gün</th><th>Çorba</th><th>Ana Yemek</th><th>Yancı</th><th>Kalori ~</th>
          </tr>
        </thead>
        <tbody>
          {items.map((row, i) => (
            <tr key={i}>
              <td>{row.day}</td>
              <td>{row.soup}</td>
              <td>{row.main}</td>
              <td>{row.side}</td>
              <td>{row.kcal}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
