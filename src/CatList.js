import React, { Component } from "react"


export default class CatList extends Component {
    
    render() {
        const catPicUrl = () => this.props.catPics.map(catPic => <img src={catPic.url} alt={catPic.id}></img>)
        return (
            <div>
                {catPicUrl()}
            </div>
        )
    }
}