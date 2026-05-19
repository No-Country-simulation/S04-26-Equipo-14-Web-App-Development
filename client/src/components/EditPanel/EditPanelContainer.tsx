import EditPanelTopbar from "./EditPanelTopbar"
import DraftEditForm from "./DraftEditForm"
import DraftMetadata from "./DraftMetadata"
import { useParams } from "react-router-dom";

type Draft = {
    id: string;
    category: string;
    title: string;
    meta: string;
    content: string;
};

type EditPanelProps = {
    drafts: Draft[];
}

const EditPanelContainer = ({ drafts }: EditPanelProps) => {

    const { draftId } = useParams();

    const selectedDraft = drafts.find(draft => draft.id === draftId)

    if (!selectedDraft) {
        return <p>Draft no encontrado</p>
    }



    return (
        <>

            <div className="fixed inset-0 flex items-center justify-center p-8">

                <div className="bg-background w-full max-w-6xl max-h-full overflow-y-auto rounded-xl shadow-2xl border border-outline-variant flex flex-col">

                    <EditPanelTopbar />

                    <div className="p-8 grid grid-cols-1 lg:grid-cols-12 gap-gutter">

                        <DraftEditForm key={selectedDraft.id} draft={selectedDraft} />

                        <DraftMetadata draft={selectedDraft} />

                    </div>
                </div>
            </div>
        </>
    )
}

export default EditPanelContainer