import { createContext, useEffect, useReducer } from "react";

export const PostContextProvider = createContext({
    postList: [],
    addInitialPosts: () => {},
    addPost: () => {},
    deletePost: () => {},
});

// Example of all the dateTypes of the Post
const PostSample = {
    id: 11,
    title: "Sample_Title",
    body: "Sample_Body",
    tags: ["tag_1", "tag_2", "tag_3", "tag_4", "tag_5"],
    reactions: {
        likes: 30,
        dislikes: 12,
    },
    user_id: 232,
    views: 33323,
};

/**
 *
 * @param {*} currentState This is the current PostList array
 * @param {*} action This is the action to be performed
 * @returns
 */
const PostListReducer = (currentState, action) => {
    switch (action.type) {
        case "ADD_POST": {
            console.log("Added post sucessfully");
            return [action.payload.post, ...currentState];
        }

        case "DELETE_POST":
            return currentState.filter((post) => {
                return post.id !== action.payload.Post_Id;
            });

        case "ADD_INITIAL_POSTS":
            return action.payload.posts; // directly returning the data from the fetchAPI rather than assigning it to the currentState

        default:
            return currentState;
    }
};

const PostListProvider = ({ children }) => {
    
    // This will run only during the initial render of the page due to empty dependency in the second argument
    useEffect(() => {
        fetch("https://dummyjson.com/posts/")
            .then((res) => res.json())
            .then((data) => {
                addInitialPosts(data.posts);
            });
    }, []);

    const [PostList, dispatchPostList] = useReducer(PostListReducer, []);

    const addInitialPosts = (postsArray) => {
        dispatchPostList({
            type: "ADD_INITIAL_POSTS",
            payload: {
                posts: postsArray,
            },
        });
    };

    const addPost = (postFromServer) => {
        dispatchPostList({
            type: "ADD_POST",
            payload: {
                post: postFromServer,
            },
        });
    };

    const deletePost = (postId) => {
        dispatchPostList({
            type: "DELETE_POST",
            payload: {
                Post_Id: postId,
            },
        });
    };

    return (
        <PostContextProvider.Provider
            value={{
                postList: PostList,
                addInitialPosts: addInitialPosts,
                addPost: addPost,
                deletePost: deletePost,
            }}
        >
            {children}
        </PostContextProvider.Provider>
    );
};

export default PostListProvider;
