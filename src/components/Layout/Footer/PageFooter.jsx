import React from "react";
import Layout from "antd/es/layout/layout";
const { Footer } = Layout;

const PageFooter = () => {
  return (
    <Footer style={{ textAlign: "center" }}>
      Rallax ©{new Date().getFullYear()} Created by BIR
    </Footer>
  );
};

export default PageFooter;
