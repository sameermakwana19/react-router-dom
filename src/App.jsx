import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import RootLayout from "./layouts/RootLayout";
import Faq from "./pages/Faq";
import Contact, { contactFormAction } from "./pages/Contact";
import HelpLayout from "./layouts/HelpLayout";
import NotFound from "./pages/NotFound";
import CareersLayout from "./layouts/CareersLayout";
import Careers, { careersLoader } from "./pages/Careers";
import CareerDetails, { careerDetails } from "./pages/CareerDetails";
import CareersError from "./pages/CareersError";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />

      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        {/* url => /help/faq */}
        <Route
          path="contact"
          element={<Contact />}
          action={contactFormAction}
        />
        {/* url => /help/contact */}
      </Route>

      <Route
        path="careers"
        element={<CareersLayout />}
        errorElement={<CareersError />}
      >
        <Route index element={<Careers />} loader={careersLoader} />
        <Route path=":id" element={<CareerDetails />} loader={careerDetails} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

// Older Way

// import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";

// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <header>
//           <nav>
//             <h2>NAVBAR</h2>
//             <div className="main-nav">
//               <NavLink to="/">HOME</NavLink>
//               <NavLink to="about">About</NavLink>
//             </div>
//           </nav>
//         </header>
//         <main>
//           <Routes>
//             <Route index element={<Home />} />
//             <Route path="about" element={<About />} />
//           </Routes>
//         </main>
//       </BrowserRouter>
//     </>
//   );
// }

export default App;
