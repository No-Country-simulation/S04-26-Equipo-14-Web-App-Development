import styles from './DashboardStats.module.css';

interface DashboardStatsProps {
  totalPosts: number;
  totalVotes: number;
  totalReplies: number;
}

export const DashboardStats = ({ totalPosts, totalVotes, totalReplies }: DashboardStatsProps) => {
  return (
    <div className={styles.statsContainer}>
      <div className={styles.statCard}>
        <span className={styles.label}>Total Posts</span>
        <span className={`${styles.value} ${styles.postsValue}`}>{totalPosts}</span>
      </div>

      <div className={styles.statCard}>
        <span className={styles.label}>Total Votos</span>
        <span className={`${styles.value} ${styles.votesValue}`}>{totalVotes}</span>
      </div>

      <div className={styles.statCard}>
        <span className={styles.label}>Total Respuestas</span>
        <span className={`${styles.value} ${styles.repliesValue}`}>{totalReplies}</span>
      </div>
    </div>
  );
};
