import styles from './PostCard.module.css';


interface PostCardProps {
  title: string;
  votes: number;
  replies: number;
  relevanceScore: number;
  author?: string;
}

export const PostCard = ({ title, votes, replies, relevanceScore, author = "Anónimo" }: PostCardProps) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>

      <div className={styles.footer}>
        <span className={styles.metricItem}>Por: <strong>{author}</strong></span>

        <div className={styles.metrics}>
          <div className={styles.metricItem}>
            <span className={`${styles.badge} ${styles.relevanceBadge}`}>
              🎯 {relevanceScore}% Relevancia
            </span>
          </div>

          <div className={styles.metricItem}>
            <span className={`${styles.badge} ${styles.votesBadge}`}>
              👍 {votes} Votos
            </span>
          </div>

          <div className={styles.metricItem}>
            <span className={`${styles.badge} ${styles.repliesBadge}`}>
              💬 {replies} Respuestas
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
