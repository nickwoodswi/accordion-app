import React from 'react'

function Article() {
    return(
        <li><button onClick={displayContent}>{props.headline}</button></li>
    )
}

export default Article