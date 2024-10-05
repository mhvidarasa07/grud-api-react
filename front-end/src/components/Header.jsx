import { useState } from 'react'
import './Header.css'

import axios from 'axios'



export default function Consultar() {
    const [listaCanal, setListaCanal] = useState([]);


    async function buscar() {
        const url = 'http://localhost:5000/canalP';
    

        let resp = await axios.get(url);
        setListaCanal(resp.data);
    }

    

    return (
        <div className='pagina-consultar'>
            <h1> CONSULTAR </h1>

            <button onClick={buscar}>Buscar</button>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>aberto?</th>
                    </tr>
                </thead>

                <tbody>
                    {listaCanal.map(item => 
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.nomecanal}</td>
                            <td>{item.aberto ? 'Sim' : 'Não'}</td>
                        </tr>
                    )}
                </tbody>

            </table>

           
        </div>
    )  
   
}
