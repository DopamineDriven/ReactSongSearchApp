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
                <SearchForm />
                <ResultItem />
            </div>
        )
    }
}