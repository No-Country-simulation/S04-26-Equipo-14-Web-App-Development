export interface Post {
   id: number;
   title: string;
   votes: number;
   replies: number;
   relevanceScore: number;
   author?: string;
}



export interface PostScrapped {

   id: string
   title: string
   content: string
   authorName: string
   img: string
   relevanceScore: number
   likes: number
   comments: []
   source: string
   tags: string

   post_date: string
   createdAt: string
}


export interface PostsDashboard {

   id: string
   title: string
   author?: string
   likes: number
   replies: []
   relevanceScore: number
   
}


// Evaular esto \\\

// CREATE TABLE post_images (
//   id SERIAL PRIMARY KEY,
//   post_id INTEGER NOT NULL REFERENCES posts(id) ON DELETE CASCADE,
//   image_url TEXT NOT NULL
// );