import { useState, useEffect } from "react";

const apiURL = '/api/indicador/'

export function useFetchIndicadores() {
    const [indicadores, setIndicadores] = useState(null);
    const [loading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(apiURL);
                
                if (!response.ok) {
                    throw new Error('Falha ao carregar dados: ${response.statusText}');
                }

                const data = await response.json();

                setIndicadores(data);
                setIsLoading(false);
            } catch (err) {
                setError(err.message);
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);
    return { indicadores, loading, error };
}