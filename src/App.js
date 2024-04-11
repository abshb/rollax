import "./App.css";
import { Outlet } from "react-router-dom";
import { App } from "antd";
import TopHeader from "./components/Layout/Header/TopHeader";
import PageFooter from "./components/Layout/Footer/PageFooter";
import { Layout } from "antd";
const { Content } = Layout;

export default function Root() {
  return (
    <App className="app">
      <Layout>
        <TopHeader />
        <Content
          style={{
            padding: "45px 48px",
          }}
        >
          <Outlet />
        </Content>
        <PageFooter />
      </Layout>
    </App>
  );
}
