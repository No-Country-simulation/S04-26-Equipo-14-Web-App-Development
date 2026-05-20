
import { PostScrapped } from "../types/Post.types";


const API_URL = import.meta.env.VITE_API_URL;

// console.log("esto es apiurl", API_URL);



export async function getPosts(): Promise<PostScrapped[]> {

    const response = await fetch(`${API_URL}/scrapped`);

    if (!response.ok) {
        throw new Error("Error al buscar los posteos")
    }

    return response.json()

}


