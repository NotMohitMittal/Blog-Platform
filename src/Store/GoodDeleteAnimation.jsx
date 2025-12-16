import SpotlightCard from "../Container/SpotlightCard";
import { MdDelete } from "react-icons/md";
import { motion } from "motion/react";
import { useState } from "react";

import styles from "./Post.module.css";

const Post = ({ post }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = () => {
        setIsDeleting(true);
        // Add your delete logic here
        setTimeout(() => {
            console.log("Deleting post:", post.id);
            // Call your actual delete function
        }, 600);
    };

    return (
        <motion.div
            initial={{ opacity: 1, scale: 1 }}
            animate={
                isDeleting
                    ? {
                          opacity: 0,
                          scale: 0.8,
                          rotateX: 90,
                      }
                    : { opacity: 1, scale: 1, rotateX: 0 }
            }
            transition={{ duration: 0.5, ease: "easeInOut" }}
            style={{ perspective: 1000 }}
        >
            <SpotlightCard
                className={`custom-spotlight-card ${styles.customPostCard}`}
                spotlightColor="rgba(0, 229, 255, 0.15)"
            >
                <div 
                    className={`card h-100 ${styles.transparentCard}`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
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

                    {/* Animated Delete Button */}
                    <motion.span
                        className={`position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger ${styles.customDeleteButton}`}
                        onClick={handleDelete}
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{
                            scale: isHovered ? 1.2 : 1,
                            rotate: isHovered ? 360 : 0,
                        }}
                        whileHover={{
                            scale: 1.3,
                            rotate: 360,
                            boxShadow: "0 0 20px rgba(220, 38, 38, 0.8)",
                        }}
                        whileTap={{
                            scale: 0.9,
                            rotate: -90,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20,
                        }}
                        style={{
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "35px",
                            height: "35px",
                        }}
                    >
                        <motion.div
                            animate={
                                isHovered
                                    ? {
                                          rotate: [0, -10, 10, -10, 10, 0],
                                          scale: [1, 1.1, 1.1, 1.1, 1.1, 1],
                                      }
                                    : {}
                            }
                            transition={{
                                duration: 0.5,
                                repeat: isHovered ? Infinity : 0,
                                repeatDelay: 0.2,
                            }}
                        >
                            <MdDelete size={20} />
                        </motion.div>
                        <span className="visually-hidden">Delete post</span>
                    </motion.span>
                </div>
            </SpotlightCard>
        </motion.div>
    );
};

export default Post;