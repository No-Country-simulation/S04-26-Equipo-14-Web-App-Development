import { useState, useEffect } from 'react';
import { postService } from '../services/postService';
import { PostList } from '../components/PostList';
import { SearchBar } from '../components/SearchBar';
import { DashboardStats } from '../components/DashboardStats';
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';
import type { Post } from '../types/Post';

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

  // Pantalla de carga con estilo Kinetic
  if (loading) return (
    <div className="flex h-screen items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <span className="material-symbols-outlined animate-spin text-primary text-5xl">sync</span>
        <p className="text-on-surface-variant font-medium animate-pulse">Cargando métricas...</p>
      </div>
    </div>
  );

  return (
    <div className="flex min-h-screen bg-background">
      {/* 1. Barra Lateral */}
     

      <main className="flex-1 flex flex-col">
        {/* 2. Barra Superior */}
        <TopBar />

        <div className="px-margin pb-margin flex flex-col gap-8">
          {/* 3. Componente de Estadísticas (Lo actualizaremos en el siguiente paso) */}
          <DashboardStats
            totalPosts={totalPosts}
            totalVotes={totalVotes}
            totalReplies={totalReplies}
          />

          {/* 4. Área de Contenido Principal */}
          <div className="flex flex-col gap-6">
            <SearchBar onSearch={handleSearch} />

            <div className="bg-surface-container-low border border-outline-variant rounded-xl p-6">
              <header className="flex items-center justify-between mb-6">
                <h3 className="text-on-background font-bold text-lg flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">analytics</span>
                  Explorar Métricas de Posts
                </h3>
                <span className="text-xs text-on-surface-variant font-medium uppercase tracking-widest">
                  Live Data
                </span>
              </header>

              <PostList posts={filteredPosts} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
