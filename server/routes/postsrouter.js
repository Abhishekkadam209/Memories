import express from 'express'

import { getPost ,createPost} from '../controlers/posts.js';

const  postsRouter = express.Router()

postsRouter.get('/',getPost)
postsRouter.post('/',createPost)




export default postsRouter;