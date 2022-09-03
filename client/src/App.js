import React from "react";
import {Container , AppBar,Typography,Grow,Grid} from '@material-ui/core'
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import memories from './images/memories.png'
import FormComponent from './components/FormComponent/forms'
import PostsComponent from './components/PostsComponent/posts'

import useStyles from './styles'
import { getPost } from "./actions/posts";

const App = ()=>{
        const classes  = useStyles()

        const dispatch =useDispatch();

        useEffect(()=>{
            dispatch(getPost());
        },[])

    return(
        <Container maxWidth="lg" >
            <AppBar className={classes.appBar}  position="static" color="inherit" >
                <Typography className={classes.heading} variant="h2" align="center" >Memories</Typography>
                <img  className={classes.image  } src={memories} alt="memories" height="60" />
            </AppBar>
            <Grow in>
                <Grid  container justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid  item xs={12} sm={7}>
                            <PostsComponent/>
                        </Grid>
                        <Grid  item xs={12} sm={4}>
                            <FormComponent/>
                        </Grid>
                </Grid>
            </Grow>
    
        </Container>
    )
}

export default App;