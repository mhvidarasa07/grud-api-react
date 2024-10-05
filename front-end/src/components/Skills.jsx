import { useState } from 'react'
import './Skills.css'

import axios from 'axios'


function Cadastrar() {
  const [nome, SetNome, ] = useState('');
  const [numero, SetNumero] = useState('');
  const [aberto, SetAberto] = useState(false);

    async function salvar() {
        const paramCorpo = {
            "nome": nome,
            "numero-canal": numero,
            "aberto": aberto
        }

        const url = 'http://localhost:5000/canal';
        let resp = await axios.post(url, paramCorpo);

        alert('Pessoa adicionada na lista canal. Id: ' + resp.data.novoId);
    }


    return (
        <div className='pagina-cadastrar'>
            <h1> CADASTRAR </h1>


            <div className='form'>
                <div>
                    <label>Nome:</label>
                    <input type='text' value={nome} onChange={e => SetNome(e.target.value)} />
                </div>
                <div>
                    <label>numero-canal:</label>
                    <input type='text' value={numero} onChange={e => SetNumero(e.target.value)}/>
                </div>
             
                <div>
                    <label>aberto?:</label>
                    <input type='checkbox' checked={aberto} onChange={e => SetAberto(e.target.checked)} />
                </div>
            </div>
            <button onClick={salvar}> SALVAR </button>

        </div>
    )
}

export default Cadastrar