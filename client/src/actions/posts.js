import * as api from '../api'


export const getPost = () => async (dispatch)=>{

    try {
        const {data } = await api.fectchPost();

        dispatch({type : 'FETCH_POSTS' , payload : data })
    } catch (error) {
        console.log(error.message);
    }

}

export const sendPost = (postData) => async (dispatch)=>{
        try {
            const { data } = await api.sendPost(postData)

            dispatch({type : "CREATE" , payload : data})
        } catch (error) {
            console.log(error.message);
        }
}