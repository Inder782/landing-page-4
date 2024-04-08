import Navbar from "@/components/Navbar/Navbar";
import Section_1 from "@/components/Section_1/Section_1";
import Section_2 from "@/components/Section_2/Section_2";
import Section_3 from "@/components/Section_3/Section_3";
import Section_4 from "@/components/Section_4/Section_4";
import Section_5 from "@/components/Section_5/Section_5";
import Section_6 from "@/components/Section_6/Section_6";
import Section_7 from "@/components/Section_7/Section_7";
import Section_8 from "@/components/Section_8/Section_8";
import Footer from "@/components/footer/Footer";
import Nav_bottom from "@/components/nav_bottom/Nav_bottom";

import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <Section_1 />
      <Section_2 />
      <Section_3 />
      <Section_4 />
      <Section_5 />
      <Section_6 />
      <Section_7 />
      <Section_8 />
      <Nav_bottom />
      <Footer />
    </div>
  );
};

export default page;
