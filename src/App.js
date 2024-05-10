import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Accueil from "./pages/Accueil";
import APropos from "./pages/APropos";
import Footer from "./components/Footer";
import Error from "./components/Error";
import Logement from "./pages/Logement";



function App() 
{
  return (
    <Router>

      <Header />

      <Routes>
        <Route path="/" element={<Accueil />}></Route> {/* :logements */}

        <Route path="/a-propos" element={<APropos />}></Route>

        <Route path="/logement/:logementId" element={<Logement />}></Route>

        <Route path="*" element={<Error />}></Route>
      </Routes>

      <Footer />

    </Router>
  )
}

export default App;