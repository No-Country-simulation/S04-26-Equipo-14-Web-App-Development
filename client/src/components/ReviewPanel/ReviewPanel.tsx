import ReviewHeader from './ReviewHeader';
import ReviewNavBar from './ReviewNavBar';
import NewsletterBoard from './NewsletterBoard';
import LinkedinBoard from './LinkedinBoard';
import TwitterBoard from './TwitterBoard';
import StrucExportBoard from './StrucExportBoard';
import { handleSync } from '../../helpers/HandleSync';
import { Navigate, Route, Routes } from "react-router-dom"
import EditPanelContainer from "../EditPanel/EditPanelContainer"


// interface ReviewPanelProps {

// }


const ReviewPanel = () => {
    return (
        <>
            <div className="ml-64 w-[calc(100%-16rem)] flex flex-col min-h-screen">

                <ReviewHeader handleSync={handleSync} />

                <main className="flex-1 px-margin pb-margin flex flex-col gap-8">

                    <ReviewNavBar />

                    <Routes>

                        <Route index element={<Navigate to="newsletter" replace />} />

                        <Route path="newsletter" element={<NewsletterBoard />}>
                            <Route path="editing/:draftId" element={<EditPanelContainer />} />
                        </Route>

                        <Route path="linkedin" element={<LinkedinBoard />} />
                        <Route path="xtwitter" element={<TwitterBoard />} />
                        <Route path="structured" element={<StrucExportBoard />} />
                    </Routes>
                </main>
            </div>
        </>
    )
};

export default ReviewPanel
