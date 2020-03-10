import React from 'react';

export default class SearchForm extends React.Component {
    constructor(props) {
        super(props)

        // When search button clicked, send info from form to state to be stored
        // to achieve, create local state (see onChange handler in render)
        this.state = {
            text: ''
        }
        //--------------------------------BINDING----------------------------------------
        this.updateText = this.updateText.bind(this)
    }

    //--------------------------------METHODS----------------------------------------
    
    // when text entered, onChange runs and event is passed to this method
    // updates text of input field to state
    updateText = (e) => {
        this.setState({
            text: e.target.value
        })
    }


    //--------------------------------RENDER----------------------------------------
    render() {
        return (
            <form className="input-group input-group-lg">
                <input 
                    type="text" 
                    className="form-control"
                    onChange={this.updateText}
                    value={this.state.text}
                />
                <span className="input-group-btn">
                    <input
                        value="Search" 
                        type="submit" 
                        className="btn btn-default"
                        onClick={(e)=> {
                            // prevent default to keep page from auto-refreshing
                            e.preventDefault()
                            this.props.onSearch(this.state.text)
                        }}
                    />
                </span>
            </form>
        )
    }
}