import React from "react";

function Button(props) {

    return (
        <>
            <button href="/cart.html" className="button button--cart">{props.text}</button>
        </>

    )
}
export default Button;
