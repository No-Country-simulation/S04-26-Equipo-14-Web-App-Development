// import styles from "./ReviewPanel.module.css"
import { Link } from "react-router-dom";

type Draft = {
    id: string;
    category: string;
    title: string;
    meta: string;
};

type DraftItemProps = {
    draft: Draft;
};



const Draft = ({ draft }: DraftItemProps) => {


    // const aproved = "";
    // const pendinToAprove= "";

    return (
        <article className="col-span-2 grid grid-cols-subgrid hover:bg-surface-container transition-colors">
            <div className="px-6 py-4">
                <div className="flex flex-col">
                    <span className="text-label-md font-label-md text-primary uppercase tracking-wider mb-1">
                        {draft.category}
                    </span>

                    <span className="font-bold text-body-lg text-on-background">
                        {draft.title}
                    </span>

                    <span className="text-sm text-on-surface-variant mt-1">
                        {draft.meta}
                    </span>
                </div>
            </div>

            <div className="px-6 py-4 flex items-center justify-end gap-3">


                <Link to={`editing/${draft.id}`} className="px-3 py-1.5 rounded-lg text-on-background border border-outline-variant hover:bg-surface-container-high transition-colors font-label-md text-label-md flex items-center gap-1">

                    <span className="material-symbols-outlined text-[16px]">visibility</span>
                    Ver
                </Link>

                <button className="px-3 py-1.5 rounded-lg text-tertiary border border-outline-variant hover:bg-surface-container-high transition-colors font-label-md text-label-md flex items-center gap-1">

                    <span className="material-symbols-outlined text-[16px]">
                        check_circle
                    </span>
                    Aprobar
                </button>

                <button className="px-3 py-1.5 rounded-lg text-error border border-outline-variant hover:bg-surface-container-high transition-colors font-label-md text-label-md flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">delete</span>
                    Eliminar
                </button>
            </div>
        </article>
    );
};

export default Draft