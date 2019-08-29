import React from 'react'
import Header from '../shared/Header';

const BaseLayout = (props) =>{
    const {className,children,isAuthetificated} = props
    return(
        <div className="layout-container">
            <Header isAuthetificated={isAuthetificated}></Header>
            <main className={`cover ${className}`}>
                <div  className="wrapper">
                    {children}
                </div>
            </main>
        </div>
           
    )
}
export default BaseLayout