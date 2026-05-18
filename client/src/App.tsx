import { Dashboard } from './pages/Dashboard';
import Layout from './pages/Layout';
import { Routes, Route } from "react-router-dom"
import Review from './pages/Review';


function App() {

  

  return (
    <div className="App">

      <div className="flex min-h-screen bg-background">


        <Routes>
          <Route path="/" element=<Layout />>

            <Route path="/datacollection/*" element={<Dashboard />} />
            <Route path="/reviewpanel/*" element={<Review />} />
            <Route path="/publications/*" element={<Review />} />
            <Route path="/configuration/*" element={<Review />} />
            
          </Route>

        </Routes>


      </div>

    </div>
  );
}

export default App;
