"use strict"
import React from 'react'
import BaseLayout from '../components/layouts/BaseLayout';
import superComponent from '../components/superComponent';
import Axios from 'axios';
// const Index = () => {
//     return (
//         <h1> Welcome!</h1>
//     )
// }
// export default Index;

class Index extends superComponent{


    static async getInitialProps()
    {
        let userData =[]
       try{ 
            
            const response = await Axios.get('https://jsonplaceholder.typicode.com//posts')
            userData = response.data}
        catch(err){
            console.log(err)
        }
        return {initialData:[1,2,3,4],userData}
    }

    constructor(props){
        debugger;
        super(props)
        this.state ={
            title :'index page'
        }
        console.log('constructor')
    }
    
    componentDidMount(){
        console.log('Se monto el componente')
    }
    componentDidUpdate(){
        console.log()
        console.log('componente se actualizo')
    }
    componentWillUnmount(){
        console.log('Componente destruido')
    }
    updateTitle(){
         this.setState({title:'updated'})
    }
    render(){
        const {title} = this.state;

        return(
        <BaseLayout>
            <h1>Welcome</h1>
            <h2>{title}</h2>
            <button onClick={ ()=> this.updateTitle()}>Update</button>
        </BaseLayout>
        )
    }
}
export default Index;