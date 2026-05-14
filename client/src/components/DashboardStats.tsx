interface DashboardStatsProps {
       totalPosts: number;
       totalVotes: number;
       totalReplies: number;
     }
    
     interface StatCardProps {
      label: string;
      value: number;
      icon: string;
      colorClass: string;
    }
   
    const StatCard = ({ label, value, icon, colorClass }: StatCardProps) => (
      <div className="bg-surface-container-low border border-outline-variant p-card-padding rounded-xl flex items-center
      gap-4 transition-transform hover:scale-[1.02]">
        <div className={`w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center ${colorClass}`}>
          <span className="material-symbols-outlined text-2xl">{icon}</span>
        </div>
        <div>
          <p className="text-on-surface-variant text-xs font-bold uppercase tracking-widest mb-0.5">
            {label}
          </p>
          <p className="text-2xl font-bold text-on-background">
            {value.toLocaleString()}
          </p>
        </div>
      </div>
    );
   
    export const DashboardStats = ({ totalPosts, totalVotes, totalReplies }: DashboardStatsProps) => {
      return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <StatCard
            label="Total Posts"
           value={totalPosts}
            icon="article"
            colorClass="text-primary"
          />
          <StatCard
            label="Total Votos"
            value={totalVotes}
            icon="thumb_up"
            colorClass="text-tertiary"
          />
          <StatCard
            label="Total Respuestas"
            value={totalReplies}
            icon="chat"
            colorClass="text-outline"
          />
        </div>
      );
    };
