import { useState } from "react";
import styles from "./Publication.module.css";

export default function Publication() {
    const [content] = useState(`# Newsletter semanal

Esta semana se destacaron varios temas técnicos relevantes de la comunidad.

## LinkedIn
Post profesional generado para compartir aprendizajes y tendencias.

## Twitter
🔥 Resumen corto con llamada a la acción.

## Recursos
- Stack Overflow
- Comunidad técnica
`);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(content);
        alert("Contenido copiado al portapapeles");
    };

    const handleExportMarkdown = () => {
        const blob = new Blob([content], { type: "text/markdown" });
        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = url;
        link.download = "publication.md";
        link.click();

        URL.revokeObjectURL(url);
    };

    return (
        <main className={styles.container}>
            <header className={styles.header}>
                <h1>Publication</h1>
                <p>Exportación del contenido final aprobado.</p>
            </header>

            <section className={styles.card}>
                <h2>Contenido aprobado</h2>

                <pre className={styles.preview}>{content}</pre>

                <div className={styles.actions}>
                    <button className={styles.button} onClick={handleCopy}>
                        Copiar
                    </button>

                    <button
                        className={styles.buttonSecondary}
                        onClick={handleExportMarkdown}
                    >
                        Exportar .md
                    </button>
                </div>
            </section>
        </main>
    );
}