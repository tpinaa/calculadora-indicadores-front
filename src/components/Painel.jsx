import { useEffect, useState } from "react";
import CardHistorico from "./CardHistorico"
function Painel() {
    const [listaIndicadores, setlistaIndicadores] = useState([])
    useEffect(() => {
        async function getIndicadores() {
            const indicadores = await fetch("/api/indicador/")
            return indicadores
        }
        const indicadores = getIndicadores()
        setlistaIndicadores(indicadores)
    }, []);
    console.log(listaIndicadores)

    return (
        <>
            <CardHistorico title={"IGPUB"} />
        </>
    )
}
export default Painel