
import { useNavigate } from "react-router-dom"

const EditPanelTopbar = () => {

    const navigate = useNavigate();

    return (

        <header
            className="sticky top-0 z-10 bg-background/95 backdrop-blur px-8 py-6 border-b border-surface-container flex items-center justify-between">
            <div className="flex items-center gap-4">

                <button
                    type="button"
                    onClick={() => navigate(-1)}

                    className="text-on-surface-variant hover:text-primary hover:cursor-pointer transition-colors">
                    <span className="material-symbols-outlined">arrow_back</span>
                </button>



                <div>
                    <h2 className="text-headline-md font-headline-md text-on-surface">Editando: Campaña Ingenieros
                        Senior</h2>
                    <p
                        className="text-label-md font-label-md text-on-surface-variant flex items-center gap-2 mt-1 uppercase tracking-wider">
                        <span className="w-2 h-2 rounded-full bg-tertiary"></span>
                        Borrador Autoguardado hace 2 minutos
                    </p>
                </div>
            </div>
            <div className="flex items-center gap-3">

                {/* Este boton deberia tener 2 estados. 1 estado para "desbloquear" => button: Editar => "guardar"  button: Guardar*/}
                <button
                    className="px-5 py-2 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors font-label-md text-label-md flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">save</span>
                    Guardar
                </button>
                


                <button
                    className="px-5 py-2 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors font-label-md text-label-md flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">check_circle</span> Aprobar
                </button>
                <button
                    className="px-5 py-2 bg-primary-container text-on-primary-container rounded-lg hover:brightness-110 transition-all font-label-md text-label-md shadow-lg shadow-primary-container/20 flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">send</span> Publicar
                </button>
            </div>
        </header>

    )
}

export default EditPanelTopbar