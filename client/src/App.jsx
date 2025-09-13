import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Index";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/about";
import PrivacyPolicy from "./pages/privacy-policy/PrivacyPolicy";

//to generate some limited dynamic pages statically

// export function generateParams() {
//   return [
//     {
//       blodId: "1",
//     },
//     {
//       blodId: "2",
//     },
//   ];
// }
// to stop rendering more pages
// export const dynamicParams = false;

//force fully render static page dynamically
// export const dynamic = "force-dynamic";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
    </Routes>
  );
}

export default App;
