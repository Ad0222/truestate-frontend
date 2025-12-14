import "../styles/results.css";

export default function SearchResults({ list }) {

  // ❌ No data case
  if (!list || list.length === 0) {
    return (
      <div className="results-box no-results">
        ❌ No matching customer found
      </div>
    );
  }

  // ✅ Data Found
  return (
    <div className="results-box">
      {list.map((item, i) => {
        
        // 💥 Gender Icons
        const genderIcon =
          item["Gender"]?.toLowerCase() === "female" ? "👩" :
          item["Gender"]?.toLowerCase() === "male" ? "👨" :
          "🧑";

        return (
          <div key={i} className="result-card">
            <h3>{item["Customer Name"]}</h3>
            <p>{genderIcon} {item["Gender"]}</p>
            <p>📞 {item["Phone Number"]}</p>
            <p>📍 {item["Customer Region"]}</p>
            <p>🛒 {item["Product Name"]}</p>
          </div>
        );
      })}
    </div>
  );
}
