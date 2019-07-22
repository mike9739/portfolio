import React, { Component } from 'react';

import {withRouter} from 'next/router'
import Axios from "axios";
import BaseLayout from '../components/layouts/BaseLayout';
class Test extends Component {
    static async getInitialProps({query})
    {
        const testId = query.id
        return{testId}
     }

    
    render() {
        const {testId} = this.props
        return (
            <BaseLayout>
            
            <h1>Im test page with id of {testId}</h1>
            </BaseLayout>
                
        )
    }
}

export default withRouter(Test);
