import React from "react"

const RenderPic = ({ picUrl }) => {
    return (
        <li>
            <img src={picUrl} alt="Cat"></img>
        </li>
    )
}

export default RenderPic