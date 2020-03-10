import React from 'react';
import ResultItem from './ResultItem.jsx';
import SearchForm from './SearchForm.jsx';

export default class SearchApp extends React.Component {
    constructor() {
        super()
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
                    <SearchForm />
                </div>
                <ul className="media-list">
                    <ResultItem />
                </ul>
            </div>
        )
    }
}