import { useState } from "react";
import "../src/globals.css";


export default function App() {
const [nome, setNome] = useState("Fanta uva");
const [numero, setNumero] = useState(10);
const [cpf, setCpf] = useState("09234325150");

    const mudarNome = () => {
        setNome("Julia")
    }

    const mudarNumero = () => {
        setNumero(894)
    }

    const mudarCPF = () => {
        setCpf(781981255)
    }
    

    return (
       <div>
       {nome}
       <button onClick = {mudarNome}>Mudar</button>

       {numero}
       <button onClick = {mudarNumero}>Mudar</button>

       {Cpf}
       <button onClick = {mudarCPF}>Mudar</button>
    
       </div>
    );
}