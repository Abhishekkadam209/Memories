
export default  (posts = [] , action)=>{

    switch (action.type) {
        case 'FETCH_POSTS':
            return action.payload;
            
        case 'CREATE':
            return [...posts,action.payload];
                
 
        default:
            return posts;
            
    }




}