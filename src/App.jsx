import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './App.css'
import Primeiro from './components/layout/Primeiro'
import ComParametro from './components/layout/ComParametro'
import ComFilhos from './components/layout/ComFilhos'
import Card from './components/layout/Card'
import Repeat from './components/layout/repeat.jsx'
import ImparOuPar from './components/layout/condicional/ImparOuPar'

export default (props) =>

    <div className='App'>
        <Card titulo="Exercicio 1"><Primeiro></Primeiro>
        </Card>
        <Card titulo="Exercicio 2 - repetição"><Repeat></Repeat>
        </Card>
        <Card titulo="Exercicio 3 - Condicional"><ImparOuPar numero={1}></ImparOuPar>
        </Card>







        {/* <ComFilhos>
    <ul>
        <li>Ana</li>
        <li>Carlos</li>
        <li>Bruna</li>
        <li>Daniel</li>

    </ul>
</ComFilhos> */}
        {/* <Primeiro></Primeiro>
<ComParametro titulo="Esse é o titulo" subtitulo="Esse é o subtitulo"/>
<ComParametro titulo="1" subtitulo="2"/> */}

    </div>


