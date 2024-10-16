import React, {useState} from 'react';
import './App.css';
import Users from "./components/Users/Users";
import {IPostModel} from "./models/IPosts/IPostModel";
import {postService} from "./services/api.services";
import Posts from "./components/Posts/Posts";




function App() {
  const [posts, setPosts] = useState<IPostModel[]>([]);
  const lift = async (id: number) => {
    setPosts(await postService.getPostsOfUser(id));
  

  };
  return (
      <div>

        <Users lift={lift}/>
        <hr/>
<Posts posts={posts}/>
        <hr/>

      </div>
  );
}

export default App;
