import { useContext, useEffect } from "react";
import styles from "./Post.module.css";

import Post from "./Post";
import { PostContextProvider } from "@/Store/PostListProvider"; // @ -> Sybolises the /src folder

const PostList = () => {
    const { postList } = useContext(PostContextProvider);

    
    



    // This is the loading window
    if(postList.length === 0) {
        return <h1 style={{color: "white", textAlign: "center"}}>Loading Posts...</h1>;
    }


    return (
        <div className={styles["postGridContainer"]}>
            {postList.map((post) => (
                <Post key={post.id} post={post} />
            ))}
        </div>
    );
};

export default PostList;
