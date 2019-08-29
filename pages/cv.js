"use strict"
import React from "react"
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";
class Index extends React.Component{
    render(){
        return(
            <BaseLayout>

            <BasePage  {...this.props.auth}>
            <h1> Welcome to my cv</h1>
            </BasePage>
                
            </BaseLayout>
            

        )
    }
}
export default Index;