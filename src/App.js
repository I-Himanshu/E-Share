import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Room from "./pages/Room";
import Layout from "./components/Layout";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<>contact</>} />
          <Route path="services" element={<>services</>} />
          <Route path=":id" element={<Room />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
