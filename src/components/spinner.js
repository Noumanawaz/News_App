import React, { Component } from 'react'
import Loading from './Walk.gif';
export class spinner extends Component {
    render() {
        return (
            <div class="d-flex justify-content-center">
                <img src={Loading} alt='loading' />
            </div>
        )
    }
}

export default spinner
