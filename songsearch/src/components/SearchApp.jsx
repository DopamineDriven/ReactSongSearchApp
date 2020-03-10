import React from 'react';
import ResultItem from './ResultItem.jsx';
import SearchForm from './SearchForm.jsx';

export default class SearchApp extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoading: false,
            results: []
        }
        //--------------------------------BINDING----------------------------------------
        this.makeSearch = this.makeSearch.bind(this)
    }

    //--------------------------------METHODS----------------------------------------

    // makeSearch method passed as prop on SearchForm component, onSearch
    // gives access to makeSearch method within SearchForm component
    // button click sends form info to makeSearch method
    // http://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/#searchexamples
    makeSearch = (text) => {
        this.setState({
            isLoading: true
        })
        fetch(`https://itunes.apple.com/search?term=${text}&entity=song`)
            .then((response) => {
                if(response.status >= 200 && response.status < 300) {
                    return response.json()
                } else {
                    throw new Error()
                }
            })
            .then((json) => {
                console.log(json)
                this.setState({
                    results: json.results
                })
            })
            .catch((error) => {
                console.log(error)
            })
            .then(() => {
                this.setState({
                    isLoading: false
                })
            })
    }

    render() {
        return (
            <div>
                <div className="jumbotron">
                    <h1 className="text-center">
                        Song Search App
                    </h1>
                    <p className="lead text-center">
                        Search any song. Powered by iTunes.
                    </p>
                    <SearchForm 
                        onSearch={this.makeSearch}
                    />
                    {
                        // loads how many results found below search form
                        this.state.isLoading?
                        `Loading...`:
                        `${this.state.results.length} results found`
                    }
                </div>
                <ul className="media-list">
                    <ResultItem />
                </ul>
            </div>
        )
    }
}