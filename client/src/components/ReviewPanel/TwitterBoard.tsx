import DraftsContainer from "./DraftsContainer"
import { Outlet, useMatch } from "react-router-dom"

import { Draft } from "../EditPanel/TypeDraft"


type TwitterBoardProps = {

  drafts: Draft[]
}

const TwitterBoard = ({drafts}: TwitterBoardProps) => {

  const isEditing = useMatch("/reviewpanel/xtwitter/editing/:draftId")

  const wrapperClass = "fixed inset-0 bg-surface-container-lowest/80 z-[60] flex items-center justify-center p-8 backdrop-blur-sm";

  return (
    <>
      <p>twitter-borrar</p>

      <DraftsContainer drafts={drafts} />

      {isEditing && <div className={wrapperClass}> <dialog open className="bg-black/80 absolute z-10"> <Outlet /> </dialog> </div>}
    </>

  )
}

export default TwitterBoard