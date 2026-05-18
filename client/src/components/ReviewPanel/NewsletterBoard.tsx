import { Outlet, useMatch } from "react-router-dom"
import DraftsContainer from "./DraftsContainer"
// import { useLocation } from "react-router-dom"


const NewsletterBoard = () => {

  // const { pathname } = useLocation();

  const isEditing = useMatch("reviewpanel/newsletter/editing/:draftId")


  return (
    <>

      <p>newsletter</p>

      <DraftsContainer />

      {isEditing && <dialog open className="bg-black/50 absolute z-10"> <Outlet /> </dialog>}

    </>
  )
}

export default NewsletterBoard