import React from 'react'

const Scroll = (props) => {
    return(
        //w  ()  jest JS w (()) obiekt ktry mozna przkeazac do CSS
        <div style={{overflowY: 'scroll', border: '1px solid black', height: '500px'}} > 
            {props.children}
        </div>
    )
}

export default Scroll