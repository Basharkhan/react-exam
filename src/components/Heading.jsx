import React from 'react'

const Heading = ({text, className}) => {
    let heading = text.replace("#", "<span class='one'>").replace("#", "</span>")
    return (
        <h1 className={`${className}`} dangerouslySetInnerHTML={{__html: heading}}></h1>
    )
}

export default Heading
