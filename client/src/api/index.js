import axios from 'axios'

const url= "http://localhost:5000/posts"

export const fectchPost = () => axios.get(url)

export const sendPost= (postData) => axios.post(url,postData)