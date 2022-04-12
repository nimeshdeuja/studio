import React from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { About } from "./Components/About/About";
import { currentTheme, GlobalStyle } from "./Components/Shared/Theme";
import { ParallaxProvider } from "react-scroll-parallax";
import CommunityRoute from "./Components/Community/Index";
import LocationRoute from "./Components/Location/Index";
import OurMenuRoute from "./Components/OurMenu/Index";

const App = () => {
  let routes = useRoutes([
    {
      path: "/",
      element: <About />,
    },
    {
      path: "/community",
      element: <CommunityRoute />,
    },
    {
      path: "/location",
      element: <LocationRoute />,
    },
    {
      path: "/ourMenu",
      element: <OurMenuRoute />,
    },
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <ParallaxProvider>
      <ThemeProvider theme={currentTheme}>
        <Router>
          <App />
        </Router>
        <GlobalStyle theme={currentTheme} />
      </ThemeProvider>
    </ParallaxProvider>
  );
};

export default AppWrapper;
