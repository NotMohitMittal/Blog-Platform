import SpotlightCard from "../Container/SpotlightCard";
import { MdDelete } from "react-icons/md";

import styles from "./Post.module.css";
import { useContext, useRef } from "react";
import { PostContextProvider } from "@/Store/PostListProvider";

const Post = ({ post }) => {

    const {deletePost} = useContext(PostContextProvider);
    
    return (
        <>
            <SpotlightCard
                className={`custom-spotlight-card ${styles.customPostCard}`}
                spotlightColor="rgba(0, 229, 255, 0.15)"
            >
                {/* Added transparentCard className to override Bootstrap */}
                <div className={`card h-100 ${styles.transparentCard}`}>
                    <div className={`card-body ${styles.cardBody}`}>
                        <h5 className={`card-title ${styles.cardTitle}`}>
                            {post.title}
                        </h5>

                        <h6
                            className={`card-subtitle mb-2 ${styles.cardSubtitle}`}
                        >
                            USER ID: {post.user_id}
                        </h6>

                        <p className={`card-text ${styles.cardText}`}>
                            {post.body}
                        </p>

                        {/* --- NEW TAGS SECTION --- */}
                    <div className={styles.tagsContainer}>
                        {post.tags.map((tag, index) => (
                            <span 
                                key={index} 
                                className={styles.tagBadge}
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>

                        <div className={styles.cardFooter}>
                            <a href="#" className={styles.reactionLink}>
                                Likes: {post.reactions.likes}
                            </a>
                            <a href="#" className={styles.reactionLink}>
                                Dislikes: {post.reactions.dislikes}
                            </a>
                            <span className={styles.viewsText}>
                                {post.views} Views
                            </span>
                        </div>

                    </div>
                    <span
                        className={`position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger ${styles.customDeleteButton}`}
                        onClick={() => {deletePost(post.id)}}
                    >
                        <MdDelete />
                        <span className="visually-hidden">unread messages</span>
                    </span>
                </div>
            </SpotlightCard>
        </>
    );
};

export default Post;
