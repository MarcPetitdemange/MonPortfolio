import React from "react";

export default function Element(props) {
    return (
        <div className="ratio">
            <div className="inner">
                <div className="box">{props.name}</div>
                {props.children}
            </div>
        </div>
    );
}
