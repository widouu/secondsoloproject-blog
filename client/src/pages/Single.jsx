import React, { useState, useEffect, useContext } from "react";
import Menu from "../components/menu.jsx";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios"
import moment from "moment"
import { AuthContext } from "../context/authContext.jsx";
import edit from "../img/edit.png";
import delme from "../img/delme.jpg"




const Single = () => {

    const [post, setPost] = useState({})
    const location = useLocation()
    const navigate = useNavigate()
    const postId = location.pathname.split("/")[2]
    const { currentUser } = useContext(AuthContext);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`http://localhost:8080/api/posts/${postId}`)
                setPost(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchData()
    }, [postId])



    // const handleDelete = async () => {
    //     try {
    //         await axios.delete(`http://localhost:8080/api/posts/${postId}`)
    //         navigate("/")
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }


    return (
        <div className="single">
            <div className="content">
                <img src={post?.img} alt="" />
                <div className="user">
                    {post.userImg && <img src={post.userImg} alt="" />}
                    <div className="info">
                        <span>{post.username}</span>
                        <p>posted {moment(post.date).fromNow()}</p>
                    </div>
                    {currentUser.username === post.username && <div className="edit">
                        <Link to={`/write?edit=2`}>
                            <img src={edit} alt="" />
                        </Link>
                        <img src={delme} alt="" />
                    </div>
                    }
                </div>
                <h1>{post.title}</h1>
                {post.desc}
            </div>


            <Menu />
        </div>
    )
}
export default Single;