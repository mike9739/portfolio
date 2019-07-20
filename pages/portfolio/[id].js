import React, { Component } from 'react';
import BaseLayout from '../../components/layouts/BaseLayout';
import {withRouter} from 'next/router'
class portfolio extends Component {
    render() {
        return (
            <BaseLayout>
            <h1>Im a portfolio </h1>
            <h2>{this.props.router.query.id}</h2>
            </BaseLayout>
                
       
        );
    }
}

export default withRouter(portfolio);
