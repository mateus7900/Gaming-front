import { useEffect, useState } from "react";
import './styles.scss';
import PostItem from "../Post";
import { Skeleton } from "@mui/material";
import useUser from "../../context/UserContext";
import { Post } from "../../types/Post";
import { getTimeline } from "../../services/PostServices";


export default function Timeline() {

    const [posts, setPosts] = useState<Post[]>()
    const [loading, setLoading] = useState<boolean>(true);

    const { user } = useUser();
    const username: string = user?.username as string

    useEffect(() => {
        getTimeline(username)
            .then(data => {
                setPosts(data);
                setLoading(false);
            })
            .catch(error => console.error(error))
    }, [username])


    return (
        <>
            {loading ? <Skeleton animation="wave" /> : <div className="timeline">
                {posts && posts.map(post => (
                    <PostItem post={post} key={post.postId} authorName={post.authorName} username={post?.authorName.toUpperCase()} />
                ))}
            </div>}
        </>
    )
}
