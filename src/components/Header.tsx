import React, { useState, useEffect } from "react";
import { Menu } from "antd";

const HeaderSection: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeKey, setActiveKey] = useState("home"); // ✅ define activeKey state

  const handleClick = (key: string) => {
    setActiveKey(key); // ✅ update active menu item
    const section = document.getElementById(key);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Reusable style function for menu items
  const menuItemStyle = (key: string): React.CSSProperties => ({
    color: scrolled ? "black" : "white",
    borderRadius: "6px",
    transition: "all 0.3s ease",
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000,
        padding: "0 20px",
        transition: "all 0.3s ease",
        background: scrolled ? "rgba(255, 255, 255, 0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(6px)" : "none",
      }}
    >
      <h2
        style={{
          color: scrolled ? "black" : "white",
          margin: 0,
          transition: "color 0.3s ease",
        }}
      >
        My Portfolio
      </h2>

      <Menu
        mode="horizontal"
        selectedKeys={[activeKey]}
        onClick={(e) => handleClick(e.key)}
        style={{
          borderBottom: "none",
          background: "transparent",
        }}
      >
          <Menu.Item key="home" style={menuItemStyle("home")}>
          Home
        </Menu.Item>
        <Menu.Item key="about" style={menuItemStyle("about")}>
          About
        </Menu.Item>
        <Menu.Item key="services" style={menuItemStyle("services")}>
          Services
        </Menu.Item>
           <Menu.Item key="blogs" style={menuItemStyle("blogs")}>
          Blogs
        </Menu.Item>
        <Menu.Item key="projects" style={menuItemStyle("projects")}>
          Projects
        </Menu.Item>
        <Menu.Item key="contact" style={menuItemStyle("contact")}>
          Contact
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default HeaderSection;

// import React, { useState, useEffect } from "react";
// import { Menu } from "antd";
// import { useNavigate, useLocation } from "react-router-dom";

// const HeaderSection: React.FC = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();

//   const handleClick = (key: string) => {
//     navigate(key === "home" ? "/" : `/${key}`);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const currentKey =
//     location.pathname === "/" ? "home" : location.pathname.replace("/", "");

//   const menuItemStyle = (): React.CSSProperties => ({
//     color: scrolled ? "black" : "white",
//     borderRadius: "6px",
//     transition: "all 0.3s ease",
//   });

//   return (
//     <div
//       id= 'header'
//       style={{
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         position: "fixed",
//         top: 0,
//         width: "100%",
//         zIndex: 1000,
//         padding: "0 20px",
//         transition: "all 0.3s ease",
//         background: scrolled ? "rgba(255, 255, 255, 0.95)" : "transparent",
//         backdropFilter: scrolled ? "blur(6px)" : "none",
//       }}
//     >
//       <h2
//         style={{
//           color: scrolled ? "black" : "white",
//           margin: 0,
//           cursor: "pointer",
//         }}
//         onClick={() => navigate("/")}
//       >
//         My Portfolio
//       </h2>

//       <Menu
//         mode="horizontal"
//         selectedKeys={[currentKey]}
//         onClick={(e) => handleClick(e.key)}
//         style={{
//           borderBottom: "none",
//           background: "transparent",
//         }}
//       >
//         <Menu.Item key="/" style={menuItemStyle()}>
//           Home
//         </Menu.Item>
//         <Menu.Item key="about" style={menuItemStyle()}>
//           About
//         </Menu.Item>
//         <Menu.Item key="services" style={menuItemStyle()}>
//           Services
//         </Menu.Item>
//         <Menu.Item key="blogs" style={menuItemStyle()}>
//           Blogs
//         </Menu.Item>
//         <Menu.Item key="projects" style={menuItemStyle()}>
//           Projects
//         </Menu.Item>
//         <Menu.Item key="contact" style={menuItemStyle()}>
//           Contact
//         </Menu.Item>
//       </Menu>
//     </div>
//   );
// };

// export default HeaderSection;
