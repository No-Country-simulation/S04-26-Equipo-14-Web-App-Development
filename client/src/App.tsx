import { Dashboard } from './pages/Dashboard';
import Layout from './pages/Layout';
import { Routes, Route, Navigate } from "react-router-dom"
import Review from './pages/Review';
import Configuration from './pages/Configuration';
import Publication from './pages/Publication';


function App() {

  return (
    <div className="App">

      <div>


        <Routes>

          <Route path="/" element={<Layout />}>

            <Route index element={<Navigate to="datacollection" replace />} />

            <Route path="/datacollection/*" element={<Dashboard />} />
            <Route path="/reviewpanel/*" element={<Review />} />
            <Route path="/publications/*" element={<Publication />} />
            <Route path="/configuration/*" element={<Configuration/>} />
            
          </Route>

        </Routes>


      </div>

    </div>
  );
}

export default App;
