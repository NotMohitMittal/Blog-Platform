import { useContext, useRef } from "react";
import styles from "./PostForm.module.css";
import { PostContextProvider } from "@/Store/PostListProvider";

const PostForm = () => {
    const { addPost } = useContext(PostContextProvider);

    const post_title = useRef();
    const post_body = useRef();
    const post_reaction_likes = useRef();
    const post_reaction_dislikes = useRef();
    const user_id = useRef();
    const post_views = useRef();
    const post_tags = useRef();

    const clear = (ref) => (ref.current.value = "");

    const handleSubmission = async (event) => {
        event.preventDefault();

        const submit_title = post_title.current.value;
        const submit_body = post_body.current.value;
        const submit_reaction_likes = Number(post_reaction_likes.current.value);
        const submit_reaction_dislikes = Number(
            post_reaction_dislikes.current.value
        );
        const submit_user_id = Number(user_id.current.value);
        const submit_views = Number(post_views.current.value);
        const submit_post_tags = post_tags.current.value.split(" ");

        try {
            const response = await fetch("https://dummyjson.com/posts/add", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    title: submit_title,
                    body: submit_body,
                    tags: submit_post_tags,
                    reactions: {
                        likes: submit_reaction_likes,
                        dislikes: submit_reaction_dislikes,
                    },
                    userId: submit_user_id,
                    views: submit_views,
                }),
            });

            const post = await response.json();

            addPost(post); // ✅ Correct state update

            // Clear inputs AFTER success
            clear(post_title);
            clear(post_body);
            clear(post_reaction_likes);
            clear(post_reaction_dislikes);
            clear(user_id);
            clear(post_views);
            clear(post_tags);
        } catch (error) {
            console.error("Failed to add post:", error);
        }
    };

    return (
        <form className={styles.customPostForm} onSubmit={handleSubmission}>
            <div className={`mb-3`}>
                <label htmlFor="user-id" className="form-label">
                    User-ID
                </label>
                <input
                    type="number"
                    className="form-control"
                    id="user-id"
                    aria-describedby="emailHelp"
                    ref={user_id}
                />
            </div>
            <div className={`mb-3`}>
                <label htmlFor="post-title" className="form-label">
                    Post Title
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="post-title"
                    ref={post_title}
                    aria-describedby="emailHelp"
                />
            </div>
            <div className={`mb-3`}>
                <label htmlFor="post-description" className="form-label">
                    Post Description
                </label>
                <textarea
                    type="text"
                    className="form-control"
                    ref={post_body}
                    id="post-description"
                    aria-describedby="emailHelp"
                    placeholder="Your Story"
                />
            </div>
            <div className={`mb-3`}>
                <label htmlFor="post-tags" className="form-label">
                    Tags
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="post-tags"
                    ref={post_tags}
                    aria-describedby="emailHelp"
                    placeholder="Seperated by space"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="post-reactions" className="form-label">
                    Reactions
                </label>
                <input
                    type="number"
                    className="form-control customInputReaction"
                    id="post-reactions"
                    placeholder="Likes"
                    ref={post_reaction_likes}
                />
                <input
                    type="number"
                    className="form-control customInputReaction"
                    id="post-reactions-dislikes"
                    placeholder="Dislikes"
                    style={{ marginTop: "12px" }}
                    ref={post_reaction_dislikes}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="post-views" className="form-label">
                    Views
                </label>
                <input
                    type="number"
                    className="form-control"
                    id="post-views"
                    ref={post_views}
                />
            </div>

            <button type="submit" className="btn btn-primary">
                Submit
            </button>
        </form>
    );
};

export default PostForm;
