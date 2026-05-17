

const DraftEditForm = () => {
    return (

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">

            <div className="lg:col-span-8 space-y-6">
                <div
                    className="bg-surface-container-low border border-outline-variant rounded-xl p-card-padding shadow-sm shadow-black/20">
                    <div className="grid grid-cols-2 gap-6 mb-6">
                        <div className="col-span-2">
                            <label
                                className="block font-label-md text-label-md text-on-surface-variant mb-2 uppercase">Asunto
                                del Post</label>
                            <input
                                className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 text-on-surface font-body-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                type="text" value="Nuevas oportunidades para Arquitectos de Software en Madrid" />
                        </div>
                        <div className="col-span-1">
                            <label
                                className="block font-label-md text-label-md text-on-surface-variant mb-2 uppercase">Nombre
                                del Tema</label>
                            <input
                                className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 text-on-surface font-body-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                type="text" value="Tech Hub Expansion" />
                        </div>
                        <div className="col-span-1">
                            <label
                                className="block font-label-md text-label-md text-on-surface-variant mb-2 uppercase">Categoría</label>
                            <div className="relative">
                                <select
                                    className="w-full appearance-none bg-surface border border-outline-variant rounded-lg px-4 py-3 text-on-surface font-body-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all">
                                    <option>Ingeniería y Tech</option>
                                    <option>Data Science</option>
                                    <option>Liderazgo</option>
                                </select>
                                <span
                                    className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">expand_more</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between mb-2">
                            <label
                                className="block font-label-md text-label-md text-on-surface-variant uppercase">Cuerpo
                                del Mensaje</label>
                            <div
                                className="flex gap-2 bg-surface-container p-1 rounded-md border border-outline-variant">
                                <button className="p-1.5 text-on-surface hover:bg-surface-variant rounded"><span
                                    className="material-symbols-outlined text-[18px]">format_bold</span></button>
                                <button className="p-1.5 text-on-surface hover:bg-surface-variant rounded"><span
                                    className="material-symbols-outlined text-[18px]">format_italic</span></button>
                                <button className="p-1.5 text-on-surface hover:bg-surface-variant rounded"><span
                                    className="material-symbols-outlined text-[18px]">link</span></button>
                                <button className="p-1.5 text-on-surface hover:bg-surface-variant rounded"><span
                                    className="material-symbols-outlined text-[18px]">format_list_bulleted</span></button>
                            </div>
                        </div>
                        <textarea
                            className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 text-on-surface font-body-md leading-relaxed focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-y" rows={12}>Estamos ampliando nuestro equipo de ingeniería en el nuevo Tech Hub de Madrid. Buscamos perfiles con experiencia en arquitecturas distribuidas, microservicios y despliegues en cloud (AWS/GCP).

                            Si te apasiona construir sistemas escalables que impacten a millones de usuarios, este es el lugar. Ofrecemos un entorno de trabajo híbrido, presupuesto para formación continua y un paquete de compensación altamente competitivo.

                            Requisitos clave:
                            - 5+ años de experiencia en Backend (Go, Python o Java)
                            - Experiencia demostrable diseñando APIs RESTful y GraphQL
                            - Conocimiento profundo de bases de datos relacionales y NoSQL</textarea>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default DraftEditForm;