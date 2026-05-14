interface PostCardProps {
       title: string;
       votes: number;
       replies: number;
       relevanceScore: number;
       author?: string;
     }
    
     export const PostCard = ({ title, votes, replies, relevanceScore, author = "Anónimo" }: PostCardProps) => {
      return (
        <div className="bg-surface-container border border-outline-variant p-5 rounded-xl hover:border-primary/50
      transition-all group">
          <div className="flex justify-between items-start gap-4 mb-3">
            <h3 className="text-on-background font-bold text-lg leading-tight group-hover:text-primary
      transition-colors">
              {title}
            </h3>
            <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-1 rounded-full uppercase
      tracking-widest whitespace-nowrap">
              🎯 {relevanceScore}% Rel.
            </span>
          </div>
   
          <div className="flex items-center justify-between mt-auto">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-primary-container flex items-center justify-center text-[10px]
      font-bold text-on-primary-container">
                {author.charAt(0)}
              </div>
              <span className="text-sm text-on-surface-variant">
                Por <strong className="text-on-surface font-semibold">{author}</strong>
              </span>
            </div>
   
            <div className="flex items-center gap-4 text-on-surface-variant text-sm font-medium">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-base">thumb_up</span>
               {votes}
              </div>
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-base">chat</span>
                {replies}
              </div>
            </div>
          </div>
        </div>
      );
    };
