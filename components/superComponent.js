import React, { Component } from 'react'

export default class superComponent extends Component {

    constructor(){
        super();
        this.someVariable = 'Soy una variable'

    }
    alertName(title){
        alert(title)
    }

    render() {
        return (
            <div>
                Super 
            </div>
        )
    }
}
