import React from 'react'
import Header from '../shared/Header';

const BaseLayout = (props) =>{
    return(
        <div>
        <Header></Header> 
        {props.children}
        </div>
           
    )
}
export default BaseLayout