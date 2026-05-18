
import Draft from "./Draft"
import { Draft as DraftType } from "../EditPanel/TypeDraft"



type DraftsContainerProps = {

  drafts: DraftType[];
}

const DraftsContainer = ({ drafts }: DraftsContainerProps) => {

  return (

    <section className="w-full overflow-x-auto">

      <div className="bg-surface-container-low border border-outline-variant rounded-xl overflow-hidden grid grid-cols-[1fr_auto] w-full">

        <header className="col-span-2 p-4 border-b border-outline-variant flex items-center justify-between bg-surface-container">
          <div className="flex items-center gap-3">
            <h3 className="font-headline-md text-body-lg text-on-background">
              Borradores Pendientes
            </h3>

            <span className="bg-primary-container text-on-primary-container px-2 py-0.5 rounded-full text-xs font-bold">
              {drafts.length}
            </span>
          </div>
        </header>

        <div className="col-span-2 grid grid-cols-subgrid border-b border-outline-variant bg-surface-container-highest text-on-surface-variant font-label-md text-label-md uppercase tracking-wider">
          <div className="px-6 py-4 font-medium">Nombre del Tema</div>
          <div className="px-6 py-4 font-medium text-right">Acciones</div>
        </div>

        <div className="col-span-2 grid grid-cols-subgrid text-body-md text-on-background divide-y divide-outline-variant">

          {drafts.map((draft) => (

            <Draft key={draft.id} draft={draft} />

          ))}


        </div>
      </div>
    </section>

  )
}

export default DraftsContainer