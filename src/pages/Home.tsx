import { Layout } from "antd";
import React from "react";
import Tasks from "../components/Tasks";

const Home = () => {
  return (
    <Layout style={{ height: "100vh", padding: 20, marginTop: 20 }}>
      <Tasks />
    </Layout>
  );
};

export default Home;
