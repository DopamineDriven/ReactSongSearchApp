import React from 'react';

export default function ResultItem(props) {
    return (
        <li className="media">
            <a href={props.item.trackViewUrl} target="_blank"></a>
                <div className="media-left" style={{padding: 5}}>
                    <img src={props.item.artworkUrl60} alt="artwork"/>
                </div>
                <div className="media-body">
                    <h5 className="media-heading">
                    {props.item.trackName}
                    </h5>
                    <em>{props.item.artistName}</em>
                    <span className="badge pull-right">
                        {props.item.currency} {props.item.trackPrice}
                    </span>
                </div>
        </li>
    )
}