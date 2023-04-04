import { useEffect, useState } from "react"

export default function useJsonFetch(url, opt = null) {
    const [data, setData] = useState(`${url}data`)
    const [loading, setLoading] = useState(`${url}loading`)
    const [error, setError] = useState(`${url}error`)

    useEffect(() => {
        if (data) {
            getFetchData()
        } 

        if (loading) {
            getFetchLoading()
        } 
        
        if (error) {
            getFetchError()
        }
    }, [])

    const getFetchData = () => {
        fetch(data).then(response => response.json()).then(response => setData(response))
    }

    const getFetchLoading = () => {
        fetch(loading).then(response => response.json()).then(response => setLoading(response))
    }

    const getFetchError = () => {
        fetch(error).then(response => response.json()).then(response => setError(response))
    }

    return [data, loading, error]
}