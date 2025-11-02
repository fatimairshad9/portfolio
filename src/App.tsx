import React from "react";
import { Layout } from "antd";
import { Route, Routes, useLocation } from "react-router-dom";
import HeaderSection from "./components/Header";
import About from "./components/About";
import Blogs from "./components/Blogs";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Hero from "./components/hero";
import Services from "./components/Services";
import CaseStudy from "./pages/CaseStudies/[id]";
import BlogPage from "./pages/Blogs/[id]";

const { Content, Footer } = Layout;

const App: React.FC = () => {
  const location = useLocation();
  const isCaseStudy = location.pathname.startsWith("/case-studies");
  const isBlog = location.pathname.startsWith("/blogs");

  return (
    <>
      <Layout style={{ margin: "0" }}>
        {/* Only show Hero/Header on home page */}
        {!isCaseStudy && !isBlog && (
          <div
            style={{
              minHeight: "100vh",
              background:
                "linear-gradient(90deg,rgba(33,33,36,1) 0%, rgba(55,55,84,1) 33%, rgba(81,153,166,1) 98%, rgba(76,110,115,1) 100%)",
              color: "white",
            }}
          >
            <HeaderSection />
            <Hero />
          </div>
        )}

        {/* Main Routes */}
        <Content style={{ minHeight: "100vh" }}>
          <Routes>
            <Route
              path="/"
              element={
                <div style={{ padding: "10px 50px" }}>
                  <About />
                  <Services />
                  <Projects />
                  <Blogs />
                  <Contact />
                </div>
              }
            />
            <Route path="/case-studies/:id" element={<CaseStudy />} />
            <Route path="/blogs/:id" element={<BlogPage />} /> {/* ✅ Fix */}
          </Routes>
        </Content>

        {/* Footer */}
        <Footer style={{ textAlign: "center" }}>
          © {new Date().getFullYear()} My Portfolio | Built with React + Ant Design
        </Footer>
      </Layout>
    </>
  );
};

export default App;


// import React from "react";
// import { Layout } from "antd";
// import HeaderSection from "./components/Header";
// import About from "./components/About";
// import Blogs from "./components/Blogs";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";
// import Hero from "./components/hero";
// import Services from "./components/Services";
// import { Route, Routes } from "react-router-dom";
// import CaseStudy from "./pages/CaseStudies/[id]";

// const { Content, Footer } = Layout;

// const App: React.FC = () => {
//   return (
//     <Layout>
//       {/* Header + Hero */}
//       <div
//         style={{
//           minHeight: "100vh",
//           background:
//             "linear-gradient(90deg,rgba(33,33,36,1) 0%, rgba(55,55,84,1) 33%, rgba(81,153,166,1) 98%, rgba(76,110,115,1) 100%)",
//           color: "white",
//         }}
//       >
//         <HeaderSection />
//         <Hero />
//       </div>

//       {/* Routes */}
//       <Content style={{ padding: "10px 50px", minHeight: "100vh" }}>
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <>
//                 <About />
//                 <Services />
//                 <Projects />
//                 <Blogs />
//                 <Contact />
//               </>
//             }
//           />
//           <Route path="/case-studies/:id" element={<CaseStudy />} />
//         </Routes>
//       </Content>

//       {/* Footer */}
//       <Footer style={{ textAlign: "center" }}>
//         © {new Date().getFullYear()} My Portfolio | Built with React + Ant Design
//       </Footer>
//     </Layout>
//   );
// };

// export default App;
