import { useState, useEffect } from "react";

const apiURL = '/api/indicador/'

export function useFetchIndicadores() {
    //Garante que indicadores seja sempre um array vazio antes que os dados do API sejam carregados
    const [indicadores, setIndicadores] = useState([]);
    const [loading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(apiURL);
                
                if (!response.ok) {
                    throw new Error(`Falha ao carregar dados: ${response.statusText}`);
                }

                const data = await response.json();

                //Extração e validação do array
                let indicadoresArray = [];
                const arrayKey = 'data';

                if (data && Array.isArray(data[arrayKey])) {
                    indicadoresArray = data[arrayKey];
                } else if (data && Array.isArray(data)) {
                    indicadoresArray = data;
                } else {
                    console.error("Dados da API não estão no formato de array esperado:", data);
                }

                setIndicadores(indicadoresArray);
                setIsLoading(false);

            } catch (err) {
                setError(err.message);
                setIsLoading(false);
                //Em caso de falha, garante que indicadores seja um array vazio
                setIndicadores([]);
            }
        };

        fetchData();
    }, []);
    return { indicadores, loading, error };
}