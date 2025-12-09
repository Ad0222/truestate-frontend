import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

export async function searchSales(query) {
  const res = await axios.get(`${API_BASE_URL}/api/sales`, {
    params: { search: query }
  });
  return res.data;
}
