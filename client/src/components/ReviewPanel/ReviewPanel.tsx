import ReviewHeader from './ReviewHeader';
import ReviewNavBar from './ReviewNavBar';
import NewsletterBoard from './NewsletterBoard';
import LinkedinBoard from './LinkedinBoard';
import TwitterBoard from './TwitterBoard';
import StrucExportBoard from './StrucExportBoard';
import { handleSync } from '../../helpers/HandleSync';
import { Navigate, Route, Routes } from "react-router-dom"
import EditPanelContainer from "../EditPanel/EditPanelContainer"

// interface ReviewPanelProps {

// }

type Draft = {
    id: string;
    category: string;
    title: string;
    meta: string;
    content: string;
};


const drafts: Draft[] = [
    {
        id: "1",
        category: "Edición Semanal #46",
        title: "Novedades en React 19 y mejores prácticas para concurrencia",
        meta: "Hace 2h • Basado en 5 fuentes",
        content: "React 19 mejora la concurrencia con acciones, transiciones y renderizado optimizado. Usa Suspense, evita estados innecesarios, prioriza actualizaciones críticas y diseña componentes predecibles para experiencias fluidas."
    },
    {
        id: "2",
        category: "Backend Focus",
        title: "Escalando Node.js en microservicios: Patrones comunes",
        meta: "Hace 5h",
        content: "Escalar Node.js en microservicios requiere comunicación eficiente, balanceo de carga, colas, caché y observabilidad. Aplica patrones como API Gateway, circuit breaker y desacoplamiento por eventos."
    },
    {
        id: "3",
        category: "CSS & UI",
        title: "Dominando Grid y Flexbox en layouts complejos",
        meta: "Ayer",
        content: "Grid y Flexbox permiten crear layouts complejos, responsivos y mantenibles. Usa Grid para estructuras bidimensionales, Flexbox para alineación flexible, y combina ambos con buenas prácticas semánticas."
    },
];


const ReviewPanel = () => {

    return (
        <>
            <div className="ml-64 w-[calc(100%-16rem)] flex flex-col min-h-screen">

                <ReviewHeader handleSync={handleSync} />

                <main className="flex-1 px-margin pb-margin flex flex-col gap-8">

                    <ReviewNavBar />

                    <Routes>

                        <Route index element={<Navigate to="newsletter" replace />} />

                        {/* Esto esta ok? Recibo los drafts todos en ambos componentes */}

                        <Route path="newsletter" element={<NewsletterBoard drafts={drafts} />} >
                            <Route path="editing/:draftId" element={<EditPanelContainer drafts={drafts} />} />
                        </Route>

                        <Route path="linkedin" element={<LinkedinBoard drafts={drafts} />} >
                            <Route path="editing/:draftId" element={<EditPanelContainer drafts={drafts} />} />
                        </Route>
                        <Route path="xtwitter" element={<TwitterBoard drafts={drafts} />}>
                            <Route path="editing/:draftId" element={<EditPanelContainer drafts={drafts} />} />
                        </Route>
                        <Route path="structured" element={<StrucExportBoard drafts={drafts} />}>
                            <Route path="editing/:draftId" element={<EditPanelContainer drafts={drafts} />} />
                        </Route>
                        
                    </Routes>

                </main>
            </div>
        </>
    )
};

export default ReviewPanel
