import { useEffect, useState } from "react"

export default function useJsonFetch(url, opt = {}) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetchJson()
    }, [])

    const fetchJson = async () => {
        setLoading(true);
        try {
          const response = await fetch(url, opt);
          const json = await response.json();
          setData(json);
          setError(null);
        } catch (e) {
          setError(e.message);
        } finally {
          setLoading(false);
        }
      }

    return [data, loading, error]
}