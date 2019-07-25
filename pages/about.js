import  React  from "react";
import Header from "../components/shared/Header";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";
class About extends React.Component{
    render(){
        return(
            <BaseLayout>
            <BasePage>
            <h1>My bio here</h1>
            </BasePage>
           </BaseLayout>
        )

    }
}
export default About;