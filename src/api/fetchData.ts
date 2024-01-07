import axios from "axios";

export default async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get<T>(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching data: ${error}. URL: ${url}`);
  }
}
