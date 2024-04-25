import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Room from "./pages/Room";
import Layout from "./components/Layout";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ServicesPage from "./pages/ServicesPage";
import FeaturesPage from "./pages/FeaturesPage";
import TermsPrivacyPage from "./pages/TermsPrivacyPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="features" element={<FeaturesPage />} /> 
          <Route path="privacy" element={<TermsPrivacyPage />} /> 
          <Route path=":id" element={<Room />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
