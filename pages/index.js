"use strict"
import React from 'react'
import BaseLayout from '../components/layouts/BaseLayout';
import {Button,Container} from 'reactstrap'

import 'bootstrap/dist/css/bootstrap.min.css';

class Index extends React.Component{    
    render(){
        return(
        <BaseLayout>
           
                <Container>
                    <Button color="dark">
                        Dark
                    </Button>
                </Container>
           
        </BaseLayout>
        )
    }
}
export default Index;