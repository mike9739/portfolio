import React from "react"
import Header from "../components/shared/Header";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";

class Blogs extends React.Component{
    render(){
        return(
            <BaseLayout {...this.props.auth}>
                <BasePage>
                <h1>Blogs</h1>
                </BasePage>
                
            </BaseLayout>
                
        
        )
    }
}
export default Blogs;