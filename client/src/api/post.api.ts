
import { PostsDashboard } from "../types/Post.types";


const DB_URL = import.meta.env.VITE_DATABASE_URL;

const API_URL = import.meta.env.VITE_API_URL;


export async function getPosts(): Promise<PostsDashboard[]> {

    const response = await fetch(`${API_URL}/posts/scrapped`);


    if(!response.ok) {
        throw new Error("Error al buscas los posteos")
    }

    return response.json();

}