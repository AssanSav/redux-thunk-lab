import React, { Component } from "react"
import RenderPic from "./RenderPic"

export default class CatList extends Component {
    
    render() {
        const catPicUrl = () => this.props.catPics.map(catPic => <RenderPic key={catPic.id} picUrl={catPic.url}/>)
        return (
            <div>
                {catPicUrl()}
            </div>
        )
    }
}