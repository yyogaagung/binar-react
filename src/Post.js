import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostAsync } from "./actions";

const Post = () => {
    const dispatch = useDispatch();
    const {list, loading, error} = useSelector((state) => state.post);

    useEffect(()=>{
        // axios.get('https://jsonplaceholder.typicode.com/posts')
        // .then((response) => {
        //     console.log(response);
        //     dispatch(fetchPostAction(response.data))
        // })
        // .catch((error) => {
        //     console.log(error)
        // })
        dispatch(fetchPostAsync());
    },[dispatch])
    return(
        <div>
            <h1>Posts</h1>
            {loading && <div>LOADING.....</div>}
            {(!loading && !error) && ( <ol>
                {list.map((post) => {
                    return(
                        <li key={post.id}>{post.title}</li>
                    )
                    
                })}
            </ol>)}
            {error && <div>UNEXPECTED ERROR</div>}
           
        </div>
    )
}

export default Post;