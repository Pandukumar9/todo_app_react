import { useEffect, useState } from "react";

function useGetApiData(url) {
  const [data, setData] = useState(null); // Initialize as null for loading state

  useEffect(() => {
    if (!url) return; // Avoid unnecessary fetch calls for invalid URLs
    // setLoading(true);
    async function getData() {
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const jsonData = await res.json();
        setData(jsonData);
        // setError(null); // Reset error state on success
      } catch (error) {
        console.error("Error fetching data:", error);
        // setError(error.message);
        setData(null); // Reset data state on error
      } finally {
        // setLoading(false); // Set loading to false after fetch
      }
    }
    getData();
  }, [url]); // Dependency for dynamic URLs

//   return { data, error, loading }; // Return all states
return data
}

export default useGetApiData;
