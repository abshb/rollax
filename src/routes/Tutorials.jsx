import { Card, Flex, List } from "antd";
import React from "react";
import { Input } from "antd";
import { Space } from "antd";
import { Link } from "react-router-dom";
const { Search } = Input;
const data = [
  {
    title: "Using API Axios",
    content: "Content",
    slug: "FetchingData",
  },
  {
    title: "useState",
    content: "Content",
    slug: "useState",
  },
  {
    title: "useContext",
    content: "Content",
    slug: "useContext",
  },
  {
    title: "useRef",
    content: "Content",
    slug: "useRef",
  },
  {
    title: "useReducer",
    content: "Content",
    slug: "useReducer",
  },
  {
    title: "useCallback",
    content: "Content",
    slug: "useCallback",
  },
  {
    title: "useMemo",
    content: "Content",
    slug: "useMemo",
  },
  {
    title: "useImperativeHandle",
    content: "Content",
    slug: "useImperativeHandle",
  },
  {
    title: "useLayoutEffect",
    content: "Content",
    slug: "useLayoutEffect",
  },
  {
    title: "React Router",
    content: "Content",
    slug: "ReactRouter",
  },
  {
    title: "Creating a new React App",
    content: "Content",
    slug: "NewApp",
  },
  {
    title: "Folder Structure",
    content: "Content",
    slug: "FolderStructure",
  },
  {
    title: "Styling using CSS in JS (JSX)",
    content: "Content",
    slug: "Styling",
  },
  {
    title: "Private Route",
    content: "Content",
    slug: "PrivateRoute",
  },
  {
    title: "JWT Authentication",
    content: "Content",
    slug: "JWTAuthentication",
  },
  {
    title: "Common Libraries",
    content: "Content",
    slug: "CommonLibraries",
  },
  {
    title: "UI Component Libraries",
    content: "Content",
    slug: "UILibraries",
  },
  {
    title: "Animation Libraries",
    content: "Content",
    slug: "AnimationLibraries",
  },
  {
    title: "Login in ReactJS",
    content: "Content",
    slug: "LoginReactJS",
  },
  {
    title: "Signup in ReactJS",
    content: "Content",
    slug: "SignupReactJS",
  },
  {
    title: "Props",
    content: "Content",
    slug: "Props",
  },
  {
    title: "Server-Side Rendering (SSR)",
    content: "Content",
    slug: "SSR",
  },
];

const Tutorials = () => {
  return (
    <div>
      <Space size={"large"} direction="vertical" style={{ width: "100%" }}>
        <Card
          direction="horizontal"
          style={{
            border: "1px solid #5D5D5E",
          }}
        >
          <Flex vertical>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "60px 0px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "20px",
                }}
              >
                <span
                  style={{
                    fontSize: "120px",
                    fontWeight: "700",
                    margin: 0,
                    lineHeight: 1,
                  }}
                >
                  Rollax
                </span>
                <p>
                  I made this website to learn ReactJS myself, so i'm sharing it
                  to everyone
                </p>
              </div>
              <Search
                style={{ maxWidth: "400px" }}
                placeholder="Components, Hook, Events, Tools, etc"
                enterButton="Search"
                size="large"
                onSearch={(value) => console.log(value)}
              />
            </div>
          </Flex>
        </Card>
        <List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 4,
            lg: 4,
            xl: 4,
            xxl: 4,
          }}
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <Link to={item.slug}>
                <Card
                  title={item.title}
                  loading={true}
                  style={{
                    border: "1px solid #5D5D5E",
                  }}
                  hoverable
                >
                  {item.content}
                </Card>
              </Link>
            </List.Item>
          )}
        />
      </Space>
    </div>
  );
};

export default Tutorials;
