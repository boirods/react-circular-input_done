import React, { useState } from 'react'

import {
  CircularInput,
  CircularTrack,
  CircularProgress,
  CircularThumb
} from 'react-circular-input'
import './App.css';

const tipoOpt = [
  {label: 'Veicular', value: "veicular"},
  {label: 'Pedestre', value: "pedestre"},
]
const faseVermelhaOpt = [
  {label: 'Colocar em amarelo intermitente', value: "comAmarelo"},
  {label: 'Não colocar em amarelo intermitente', value: "semAmarelo"}
]

function App() {
  const [value, setValue] = useState(0)

  const valorEntreMinEMax = Math.round((value*20)+10)
  const stepValue = v => Math.round(v * 20) / 20

  const stepByN = (n,num) => num + n
  return (
    <div className="main">
      <div className="pageTitle">
        <h1 className="myTitle">Bem vindo á pagina de grupo semafórico.</h1>
      </div>
      <div className="tabelaGrupoSemaforico">
        <table className='tabelaGrupoSemaforico'>
          <tr className="headCell">
            <th/>
            <th>Tipo</th>
            <th>Verde segurança</th>
            <th>Vermelho Apagado</th>
            <th>Observacoes</th>
          </tr>
          <tr>
            <td className='headCell tdCentralizado'>G1</td>
            <td className='tdCentralizado'>
              <select>
                <option value={"veicular"} selected>
                  Veicular
                </option>
                <option value="pedestre">
                  Pedestre
                </option>
              </select>
            </td>
            <td className='tdCentralizado'>
              <CircularInput
                  className="ci"
                  value={ value }
                  onChange={ v => setValue(stepValue(v)) } >
                <CircularTrack className='ciTrack'/>
                <CircularProgress className='ciProgress'/>
                <CircularThumb className="ciThum"/>
                <text x={100} y={100}>{valorEntreMinEMax}</text>
              </CircularInput>
            </td>
            <td>
              <select>
                <option value={"semAmarelo"} selected>
                  Não colocar em amarelo intermitente
                </option>
                <option value={"comAmarelo"}>
                  Colocar em amarelo intermitente
                </option>
              </select>
            </td>
            <td>
              <textarea
                  value={"Insira uma observação interessante"}
                  className="ta"/>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default App;
