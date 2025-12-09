import { useState } from "react";
import FixedSearchBar from "../components/FixedSearchBar";
import SearchResults from "../components/SearchResults";
import { searchSales } from "../services/api";
import "../styles/layout.css";

export default function SearchLayout() {
  const [results, setResults] = useState([]);

  async function handleSearch(q) {
    // ---- BLOCK empty search ----
    if (!q || q.trim() === "") {
      setResults([]); 
      return;
    }

    const res = await searchSales(q);
    setResults(res.data);
  }

  return (
    <div className="hero-container">
      <div className="top-header">Retail Sales Management System</div>
      <div className="sub-header">TruEstate</div>

      <FixedSearchBar onSearch={handleSearch} />

      <div className="content-section">
        <div className="left-box">
          {/* <h3 style={{ marginBottom: "15px" }}>Search Results</h3> */}
          <SearchResults list={results} />
        </div>

        <div className="right-box">
          <h2>Welcome to the Retail Sales Management System</h2>
          <p>
            The Retail Sales Management System is a fast and efficient platform designed to help users instantly search customer-wise retail transaction data with high accuracy. It allows users to quickly find any customer’s records by entering their name, mobile number, or customer ID in the search bar, making the lookup process extremely simple and reliable. The system uses a powerful real-time search engine that scans all columns inside the dataset, supporting partial matches, full matches, and multi-field keyword searches without requiring complex filters.

            The interface is clean, intuitive, and fully responsive, offering a seamless experience on both desktop and mobile devices. A fixed search bar remains accessible at all times, allowing users to perform new searches without scrolling. The results are displayed in neat, structured cards that highlight key details such as customer information, gender, region, product purchased, transaction amount, status, and more. Gender-specific icons enhance the visual clarity, making the data easier to understand at a glance.

Built with a high-performance CSV streaming architecture, the system efficiently handles large datasets without needing an external database. It is extremely useful for retail officers, auditors, inspectors, and data operators who need quick access to accurate transaction records. The platform is scalable and flexible, allowing future enhancements like product filtering, date range search, analytics reports, and data export features. Overall, the Retail Sales Management System is a smart, reliable, and time-saving solution that delivers instant access to customer retail data in a clean and professional format.
          </p>
        </div>
      </div>
    </div>
  );
}
