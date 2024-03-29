import React from "react";
import Post from './PostComponent/post'
import { Grid , CircularProgress } from "@material-ui/core";

import { useSelector } from "react-redux";

import useStyles from './styles'

const Posts = () =>{
    const classes  = useStyles()

        const posts =useSelector((state)=> state.posts)

        console.log("posts  :" ,  posts);
    return(

         !posts.length ? <CircularProgress/> : (
            <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3} >
                    {
                        posts.map((post)=>(
                            <Grid  item key={post._id} xs={12} sm={6} >
                                <Post post={post} />
                            </Grid>
                        ))}

            </Grid>
         )
          
    )
}

export default Posts;