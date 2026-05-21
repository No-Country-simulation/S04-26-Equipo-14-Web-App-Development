import { useEffect, useState } from "react";
import { getPostsToDashboard } from "../services/posts.service";
import type { PostScrapped, PostsDashboard } from "../types/Post.types";


export function usePostScrapped() {
    
    const [posts, setPosts] = useState<PostsDashboard[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null)


    useEffect(() => {

        getPostsToDashboard()
        .then(result => {
            if(result instanceof Error) {
                console.log(result)
                return;
            }
            setPosts(result)
        })
        .catch(() => setError("Cant load posts"))
        .finally(() => setLoading(false))
    }, []);

    return {
        posts,
        loading,
        error
    }
}

