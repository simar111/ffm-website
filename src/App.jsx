import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Login from "./pages/Login";
import Pricing from "./pages/Pricing";
import Industries from "./pages/Industries";
import QuickQueryStrip from "./components/QueryStrip";
import WorkforceManagement from "./components/WorkForceManagement";
import AttendanceTracking from "./components/AttendenceTracking";
export default function App() {
  return (
    <>
    <Navbar />
    <QuickQueryStrip />
      <main >
        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/Contact" element={<Contact />} />
           <Route path="/about" element={<About />} />
           <Route path="/login" element={<Login />} />
           <Route path="/pricing" element={<Pricing />} />
             <Route path="/industries" element={<Industries />} />
              <Route path="/features/workforce-management" element={<WorkforceManagement />} />
               <Route path="/features/attendence-tracking" element={<AttendanceTracking />} />
          <Route path="*" element={<NotFound />} /> 
        </Routes>
      </main>
      <Footer />
    </>
  )
}
