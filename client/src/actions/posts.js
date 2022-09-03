import * as api from '../api/index'


export const getPost = () => async (dispatch)=>{

    try {
        const {data } = await api.fectchPost();

        // console.log(" inside fetchpost action  and data : " ,  data);

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