import React, { useState } from "react";
import posts from "../data/data.js";


const Menu = () => {
    const [data, setData] = useState(posts)

    return (
        <div className="menu">
            <h1> Other posts you may like </h1>
            {data.map(post => {
                return (<div className="post" key={post.id}>
                    <img src={post.img} alt="" />
                    <h2>{post.title}</h2>
                    <button>Read More</button>
                </div>

                )
            })}
        </div>
    )
}

export default Menu;