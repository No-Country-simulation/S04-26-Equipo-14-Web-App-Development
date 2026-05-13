// src/pages/Dashboard.tsx
import { useState, useEffect } from 'react';
import { postService } from '../services/postService';
import { PostList } from '../components/PostList';
import { SearchBar } from '../components/SearchBar';
import { DashboardStats } from '../components/DashboardStats';
import type { Post } from '../types/Post';
import Sidebar from '../components/layout/Sidebar';

export const Dashboard = () => {

  const [allPosts, setAllPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await postService.getPosts();
        setAllPosts(data);
        setFilteredPosts(data);
      } catch (error) {
        console.error("Error cargando posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);


  const handleSearch = (query: string) => {
    const results = allPosts.filter(post =>
      post.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPosts(results);
  };


  const totalPosts = filteredPosts.length;
  const totalVotes = filteredPosts.reduce((acc, post) => acc + post.votes, 0);
  const totalReplies = filteredPosts.reduce((acc, post) => acc + post.replies, 0);

  if (loading) return <div style={{ textAlign: 'center', marginTop: '50px' }}>Cargando Dashboard...</div>;

  return (
  <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f5f7f9' }}>
    <Sidebar />

    <main style={{ flex: 1, padding: '20px' }}>
      <header style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1>📊 Dashboard de Métricas</h1>
        <p>Visualización en tiempo real de la ingesta de datos</p>
      </header>

      <DashboardStats
        totalPosts={totalPosts}
        totalVotes={totalVotes}
        totalReplies={totalReplies}
      />

      <SearchBar onSearch={handleSearch} />

      <PostList posts={filteredPosts} />
    </main>
  </div>
);


};