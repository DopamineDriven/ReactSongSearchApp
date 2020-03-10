import React from 'react';
import ResultItem from './ResultItem.jsx';
import SearchForm from './SearchForm.jsx';

export default class SearchApp extends React.Component {
    constructor() {
        super();

        //--------------------------------BINDING----------------------------------------
        this.makeSearch = this.makeSearch.bind(this)
    }

    //--------------------------------METHODS----------------------------------------

    // makeSearch method passed as prop on SearchForm component, onSearch
    // gives access to makeSearch method within SearchForm component
    // button click sends form info to makeSearch method
    makeSearch = (text) => {
        fetch('https://itunes.apple.com/search?term=jack+johnson&entity=song')
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
                </div>
                <ul className="media-list">
                    <ResultItem />
                </ul>
            </div>
        )
    }
}