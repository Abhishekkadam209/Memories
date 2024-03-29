import React , {useState}  from "react";
import { TextField , Paper , Button , Typography } from "@material-ui/core";
import FileBase from 'react-file-base64'
import { useDispatch } from "react-redux";
import { sendPost } from "../../actions/posts";
import useStyles from './styles'

const FormComponent = () =>{
    const classes  = useStyles()
    const dispatch = useDispatch()
    const  [postData, setPostData] = useState({creator :'',title :'',message : '',tags :'',selectedFile : ''});
    const handleSubmit = (e)=>{
        e.preventDefault();

            dispatch(sendPost(postData))
    }

    const clear = () =>{
                    setPostData({creator :'',title :'',message : '',tags :'',selectedFile : ''});
    }

    return(
         <Paper className={classes.paper}>
             <form autoComplete="off " noValidate className={`${classes.form} ${classes.root} `} onSubmit={handleSubmit}>
                <Typography variant="h6" >Creating a new post</Typography>
                <TextField 
                    name="creator"
                    variant="outlined" 
                    label="Creator" 
                    fullWidth
                    value={postData.creator}
                    onChange={(e)=>setPostData({...postData,creator:e.target.value})}  />
                <TextField 
                    name="title"
                    variant="outlined" 
                    label="Title" 
                    fullWidth
                    value={postData.title}
                    onChange={(e)=>setPostData({...postData,title:e.target.value})}  />
                <TextField 
                    name="message"
                    variant="outlined" 
                    label="Message" 
                    fullWidth
                    value={postData.message}
                    onChange={(e)=>setPostData({...postData,message:e.target.value})}  />
                <TextField 
                    name="tags"
                    variant="outlined" 
                    label="Tags" 
                    fullWidth
                    value={postData.tags}
                    onChange={(e)=>setPostData({...postData,tags:e.target.value})}  />
                 <div className={classes.fileInput}>
                    <FileBase type="file" multiple={false} onDone={({base64})=>setPostData({...postData,selectedFile: base64})} />

                </div>
                <Button className={classes.buttonSubbmit} variant="contained" color="primary" size="large" type="submit" fullWidth >Submit</Button>
                <Button  variant="contained" color="secondary" size="small" onClick={clear} fullWidth >clear</Button>
             </form>
         </Paper>
    )
}

export default FormComponent;