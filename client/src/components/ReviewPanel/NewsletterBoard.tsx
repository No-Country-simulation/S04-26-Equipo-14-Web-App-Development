import { Outlet, useMatch } from "react-router-dom"
import DraftsContainer from "./DraftsContainer"


import { Draft } from "../EditPanel/TypeDraft"


  type NewsLetterBoardProps = {
    drafts: Draft[];
  }

const NewsletterBoard = ({drafts}: NewsLetterBoardProps) => {

  // const { pathname } = useLocation();

  const isEditing = useMatch("reviewpanel/newsletter/editing/:draftId")

  const wrapperClass = "fixed inset-0 bg-surface-container-lowest/80 z-[60] flex items-center justify-center p-8 backdrop-blur-sm";


  return (
    <>

      <p>newsletter</p>

      <DraftsContainer drafts = {drafts}/>

      {isEditing && <div className={wrapperClass}> <dialog open className="bg-black/80 absolute z-10"> <Outlet /> </dialog> </div>}

    </>
  )
}

export default NewsletterBoard