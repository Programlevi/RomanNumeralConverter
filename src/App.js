import React from 'react'
import roman from './roman'

class App extends React.Component{
    
    state = {
        text: ""
    }

    onInputChange = (event) => {
        this.setState({text: event.target.value})
    }

    render(){
        return( 
            <React.Fragment>
                <h1>
                    Roman Numeral Converter
                </h1>

                <div className="column-container">
                    <input type="text" className="field" value={this.state.text} onChange={this.onInputChange} placeholder="Example: MXCVIII"/>
                    <p className="field">{roman(this.state.text)}</p>
                </div>
            </React.Fragment>
        )
    }
}

export default App;