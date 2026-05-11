import styles from './ReviewPanel.module.css';


interface ReviewPanelProps {

}

const ReviewPanel = () => {

    return (
        <>
            <div className={styles['main-wrapper']}>
                {/* Main Content Area */}
                <header className={styles['top-bar']}>
                    <div>
                        <h2 className={styles['top-bar-title']}>Talent Ingestion</h2>
                        <p className={styles['top-bar-subtitle']}>Revisa y aprueba el contenido generado para cada canal.</p>
                    </div>
                    <div className={styles['top-bar-actions']}>
                        <button className={styles['icon-btn']}>
                            <span className={styles['material-symbols-outlined']}>sync</span>
                        </button>
                        <button className={styles['icon-btn']}>
                            <span className={styles['material-symbols-outlined']}>notifications</span>
                            <span className={styles['notification-dot']}></span>
                        </button>
                    </div>
                </header>

                <main className={styles['main-content']}>
                    {/* Main Canvas */}
                    <div className={styles['tabs-bar']}>
                        <nav aria-label="Tabs" className={styles['tabs-nav']}>
                            <a className={`${styles['tab-link']} ${styles['active']}`} href="#">
                                <span
                                    className={styles['material-symbols-outlined']}
                                    style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}
                                >
                                    mail
                                </span>
                                Newsletter
                            </a>
                            <a className={styles['tab-link']} href="#">
                                <span className={styles['material-symbols-outlined']}>work</span>
                                LinkedIn
                            </a>
                            <a className={styles['tab-link']} href="#">
                                <span className={styles['material-symbols-outlined']}>chat</span>
                                Twitter
                            </a>
                            <a className={styles['tab-link']} href="#">
                                <span className={styles['material-symbols-outlined']}>code</span>
                                Structured Export
                            </a>
                        </nav>
                    </div>

                    <div>
                        <div className={styles['card']}>
                            <div className={styles['card-header']}>
                                <div className={styles['card-header-left']}>
                                    <h3 className={styles['card-header-title']}>Borradores Pendientes</h3>
                                    <span className={styles['badge']}>3</span>
                                </div>
                            </div>
                            <div className={styles['table-wrapper']}>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Nombre del Tema</th>
                                            <th className={styles['text-right']}>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className={styles['post-info']}>
                                                    <span className={styles['post-edition']}>Edición Semanal #42</span>
                                                    <span className={styles['post-title']}>Novedades en React 19 y mejores prácticas para concurrencia</span>
                                                    <span className={styles['post-meta']}>Hace 2h • Basado en 5 fuentes</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className={styles['row-actions']}>
                                                    <button className={`${styles['btn']} ${styles['btn-view']}`}>
                                                        <span className={styles['material-symbols-outlined']}>edit</span>Ver
                                                    </button>
                                                    <button className={`${styles['btn']} ${styles['btn-approve']}`}>
                                                        <span className={styles['material-symbols-outlined']}>check_circle</span>Aprobar
                                                    </button>
                                                    <button className={`${styles['btn']} ${styles['btn-delete']}`}>
                                                        <span className={styles['material-symbols-outlined']}>delete</span>Eliminar
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className={styles['post-info']}>
                                                    <span className={`${styles['post-edition']} ${styles['secondary']}`}>Backend Focus</span>
                                                    <span className={styles['post-title']}>Escalando Node.js en microservicios: Patrones comunes</span>
                                                    <span className={styles['post-meta']}>Hace 5h</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className={styles['row-actions']}>
                                                    <button className={`${styles['btn']} ${styles['btn-view']}`}>
                                                        <span className={styles['material-symbols-outlined']}>edit</span>Editar
                                                    </button>
                                                    <button className={`${styles['btn']} ${styles['btn-approve']}`}>
                                                        <span className={styles['material-symbols-outlined']}>check_circle</span>Aprobar
                                                    </button>
                                                    <button className={`${styles['btn']} ${styles['btn-delete']}`}>
                                                        <span className={styles['material-symbols-outlined']}>delete</span>Eliminar
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className={styles['post-info']}>
                                                    <span className={`${styles['post-edition']} ${styles['secondary']}`}>CSS &amp; UI</span>
                                                    <span className={styles['post-title']}>Dominando Grid y Flexbox en layouts complejos</span>
                                                    <span className={styles['post-meta']}>Ayer</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className={styles['row-actions']}>
                                                    <button className={`${styles['btn']} ${styles['btn-view']}`}>
                                                        <span className={styles['material-symbols-outlined']}>edit</span>Editar
                                                    </button>
                                                    <button className={`${styles['btn']} ${styles['btn-approve']}`}>
                                                        <span className={styles['material-symbols-outlined']}>check_circle</span>Aprobar
                                                    </button>
                                                    <button className={`${styles['btn']} ${styles['btn-delete']}`}>
                                                        <span className={styles['material-symbols-outlined']}>delete</span>Eliminar
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
};

export default ReviewPanel
