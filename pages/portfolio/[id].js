import React, { Component } from 'react';
import BaseLayout from '../../components/layouts/BaseLayout';
import {withRouter} from 'next/router'
import Axios from "axios";
class portfolio extends Component {
    static async getInitialProps(context)
    {
        let post ={}
        const postId = context.query.id

        try{ 
          
            const response = await Axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            post = response.data
        }
        catch(err){
            console.log(err)
        }
        return {post}
    }

    
    render() {
        const {post} = this.props
        return (
            <BaseLayout>
            <h1>{post.title} </h1>
            <h2>{post.body}</h2>
            <p>{post.id}</p>
            </BaseLayout>
        )
    }
}

export default withRouter(portfolio);
