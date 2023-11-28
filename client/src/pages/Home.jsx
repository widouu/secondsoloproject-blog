import React, { useState } from "react";
import { Link } from "react-router-dom"
import posts from "../data/data.js";
const Home = () => {

    const [data, setData] = useState(posts)
    console.log(data)

    return (
        <div className="home">
            <div className="postes">
                {data.map((post) => {
                    return (<div className="post" key={post.id}>
                        <div className="img">
                            <img src={post.img} alt="" />
                        </div>
                        <div className="content">
                            <Link to={`/post/${post.id}`}>
                                <h1>{post.title}</h1>
                            </Link>
                            <p>{post.desc}</p>
                            <button>Read more</button>
                        </div>
                    </div>)
                })}
            </div>
        </div>
    )
}
export default Home;