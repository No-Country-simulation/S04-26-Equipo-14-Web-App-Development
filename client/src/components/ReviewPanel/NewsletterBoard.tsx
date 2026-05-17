import DraftsContainer from "./DraftsContainer"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import EditPanelContainer from "../EditPanel/EditPanelContainer"

const NewsletterBoard = () => {
  return (
    <>

      <p>newsletter</p>
      <DraftsContainer />


      <Routes>
        <Route path="*/editing" element={<EditPanelContainer />} />

      </Routes>

    </>
  )
}

export default NewsletterBoard