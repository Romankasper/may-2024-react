import React, {useEffect, useState} from 'react';
import Pagination from "../components/PaginationComponent/Pagination";
import {useSearchParams} from "react-router-dom";
import {apiServise} from "../servies/api.service";
import {IPost} from "../models/IPost";
import Posts from "../components/posts/Posts";

const PostsPage = () => {
    const [query,setQuery] = useSearchParams({page:'1'});
    const [posts, setPosts] = useState<IPost[]>([])
    const [flag, setFlag] = useState(false)
    useEffect(()=>{
        const page = query.get('page')
        if (page){

        apiServise.posts.getAll(+page).then(value => {
            setPosts(value.posts);
            let lastId:number=value.posts[value.posts.length-1].id
            if(lastId>=value.total){
                setFlag(true)
            }else {
                setFlag(false)
            }
        })

        }


    },[query])

    return (
        <div>

                <Posts posts={posts}/>
                <Pagination flag={flag}/>
        </div>
    );
};

export default PostsPage;