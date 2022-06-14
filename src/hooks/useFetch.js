import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setData(json.data);
      } catch (error) {
        console.error(error);
      }
    }

    if(url) fetchData();
    
  }, [url]);
  return { data };
}
