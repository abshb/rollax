import { Link, useRouteError } from "react-router-dom";
import { App, Button, Layout, Result } from "antd";
import { Content } from "antd/es/layout/layout";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" style={{ height: "100vh" }}>
      <App className="app">
        <Layout>
          <Content>
            <Result
              status="404"
              title="404"
              subTitle="Sorry, the page you visited does not exist."
              extra={
                <Link to={"./"}>
                  <Button type="primary">Back Home</Button>
                </Link>
              }
            />
          </Content>
        </Layout>
      </App>
    </div>
  );
}
