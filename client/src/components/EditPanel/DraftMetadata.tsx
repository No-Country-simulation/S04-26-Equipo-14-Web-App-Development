
type Draft = {
    id: string;
    category: string;
    title: string;
    meta: string;
    content: string;
};

type DraftsMetadataProps = {
    draft: Draft;
}
const DraftMetadata = ({ draft }: DraftsMetadataProps) => {
    return (
        <>

            <div className="bg-surface-container-low border border-outline-variant rounded-xl p-card-padding lg:col-span-4 h-80">

                <h3 className="font-headline-md text-headline-md text-on-surface mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-on-surface-variant">info</span>
                    Metadatos del Borrador
                </h3>
                <ul className="space-y-4 font-body-md text-body-md text-on-surface">
                    <li className="flex justify-between items-center pb-2 border-b border-surface-container-high">
                        <span className="text-on-surface-variant">Recuento de palabras</span>
                        <span className="font-code text-code text-on-surface">{draft.content.length}</span>
                    </li>
                    <li className="flex justify-between items-center pb-2 border-b border-surface-container-high">
                        <span className="text-on-surface-variant">Tiempo de lectura</span>

                        {/* Calcular promedio segun cantidad de palabras */}
                        <span className="font-code text-code text-on-surface">~ 1 min</span>
                    </li>
                    <li className="flex flex-col gap-2 pt-2">
                        <span className="text-on-surface-variant">Fuentes de Datos (Ingesta)</span>
                        <div className="flex gap-2">
                            <span
                                className="flex items-center gap-1 px-2 py-1 bg-surface-container border border-outline-variant rounded text-xs text-on-surface">
                                <span className="material-symbols-outlined text-[14px]">link</span> LinkedIn API
                            </span>
                            <span
                                className="flex items-center gap-1 px-2 py-1 bg-surface-container border border-outline-variant rounded text-xs text-on-surface">
                                <span className="material-symbols-outlined text-[14px]">database</span> CRM Interno
                            </span>
                        </div>
                    </li>
                </ul>
            </div>

        </>
    )
}

export default DraftMetadata;