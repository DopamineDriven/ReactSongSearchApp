import React from 'react';

export default function ResultItem(props) {
    return (
        <li className="media">
            <a href={props.item.trackViewUrl} target="_blank"></a>
        </li>
    )
}