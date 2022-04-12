import React from "react";
import Community from "../Community/Community";
import { Location } from "../Location/Location";
import OurMenu from "../OurMenu/OurMenu";
import Banner from "../Shared/Banner";
import Layout from "../Shared/Layout";

export const About = () => {
  return (
    <Layout>
      <Banner />
      <Community />
      <Location />
      <OurMenu />
    </Layout>
  );
};
