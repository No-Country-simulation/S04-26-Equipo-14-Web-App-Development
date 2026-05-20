import { getPosts } from "../api/post.api";

import { toPostsDashboard } from "../mappers/posts.mapper";


export async function getPostsToDashboard() {

    const posts = await getPosts();
    
    if (!posts) return new Error("No posts detected");

    return posts.map(post => toPostsDashboard(post));
}


