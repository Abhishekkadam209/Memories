import React from "react";
import Post from './PostComponent/post'

import { useSelector } from "react-redux";

import useStyles from './styles'

const Posts = () =>{
    const classes  = useStyles()

        const posts =useSelector((state)=> state.posts)

        console.log("posts  :" ,  posts);
    return(
        <>
            <h1>Posts</h1>
            <Post/>
            <Post/>
            
        </>
        
    )
}

export default Posts;