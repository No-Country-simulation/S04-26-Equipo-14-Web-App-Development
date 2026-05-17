
import { NavLink } from "react-router-dom"

const EditPanelNav = () => {
    return (
        <>
            <NavLink to="/">

                <div className="mb-6">
                    <a className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md uppercase tracking-wider"
                        href="#">
                        <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                        Volver a Borradores
                    </a>
                </div>
                
            </NavLink>

            <div
                className="sticky top-20 z-30 bg-background/95 backdrop-blur py-4 flex items-center justify-between border-b border-surface-container mb-8">
                <div>
                    <h2 className="font-headline-lg text-headline-lg text-on-surface mb-1">Editando: Campaña Ingenieros
                        Senior</h2>
                    <p className="font-body-md text-body-md text-on-surface-variant flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-tertiary"></span>
                        Borrador Autoguardado hace 2 minutos
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <button
                        className="px-6 py-2.5 border border-outline-variant text-on-surface rounded-lg hover:bg-surface-variant transition-colors font-label-md text-label-md">
                        Guardar Cambios
                    </button>
                    <button
                        className="px-6 py-2.5 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors font-label-md text-label-md flex items-center gap-2"><span
                            className="material-symbols-outlined text-[18px]">check_circle</span>Aprobar</button><button
                                className="px-6 py-2.5 bg-primary-container text-on-primary-container rounded-lg hover:brightness-110 transition-all font-label-md text-label-md shadow-lg shadow-primary-container/20 flex items-center gap-2"><span
                                    className="material-symbols-outlined text-[18px]">send</span>Publicar</button>
                </div>
            </div>
        </>
    )
}

export default EditPanelNav