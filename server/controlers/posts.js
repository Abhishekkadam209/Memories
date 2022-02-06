import PostModel from "../models/postModel.js"


 export const getPost =  async  (req ,res)=>{


    // res.status(200).send("post router getpost ")

    try {
        const postMessages =  await  PostModel.find();

        res.status(200).send(postMessages)

    } catch (error) {
        res.status(404).send("error occured")
    }

}

export const createPost = async (req ,res)=>{

    const body = req.body

    const newPost = new PostModel(body);
    // res.status(200).send("post router createpost")

    try {
                await newPost.save();
                res.status(201).json(newPost)
    } catch (error) {
            res.status(409).json({message : error.message})
    }


}