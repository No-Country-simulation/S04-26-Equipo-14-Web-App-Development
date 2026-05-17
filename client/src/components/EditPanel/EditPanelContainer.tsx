import EditPanelTopbar from "./EditPanelTopbar"
import EditPanelNav from "./EditPanelNav"
import DraftEditForm from "./DraftEditForm"

const EditPanelContainer = () => {
    return (
        <>

            <div className="ml-64 w-[calc(100%-16rem)] flex flex-col min-h-screen">

                <EditPanelTopbar />

                <main className="flex-1 p-margin flex flex-col">

                    <EditPanelNav />

                    <DraftEditForm />

                </main>

            </div>

        </>
    )
}

export default EditPanelContainer