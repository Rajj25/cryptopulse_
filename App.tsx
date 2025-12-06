import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/dashboard";
import { LivePrices } from "./pages/LivePrices";
import { News } from "./pages/News";
import { Signals } from "./pages/Signals";
import { Analysis } from "./pages/Analysis";
import { Portfolio } from "./pages/Portfolio";
import { Education } from "./pages/Education";
import { Layout } from "./components/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/prices" element={<LivePrices />} />
        <Route path="/news" element={<News />} />
        <Route path="/signals" element={<Signals />} />
        <Route path="/analysis" element={<Analysis />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/education" element={<Education />} />
      </Routes>
    </Layout>
  );
}

export default App;
