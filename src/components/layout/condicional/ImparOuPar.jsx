import React from 'react'
import If from './if'

export default props => {

    return(
    <div>
        <h1>O numero {props.numero} é</h1>
        <If test={props.numero % 2 == 0}><p>Par</p></If>
        <If test={props.numero % 2 == 1}><p>Ímpar</p></If>
        
    </div>)

}