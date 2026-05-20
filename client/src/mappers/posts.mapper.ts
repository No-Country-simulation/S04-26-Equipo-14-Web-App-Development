
import type { PostScrapped, PostsDashboard} from "../types/Post.types";


export function toPostsDashboard(post: PostScrapped): PostsDashboard {

    return {
        id: post.id,
        title: post.title,
        likes: post.likes,
        author: post.author,
        replies: post.comments,
        relevanceScore: post.relevanceScore
    }
}







