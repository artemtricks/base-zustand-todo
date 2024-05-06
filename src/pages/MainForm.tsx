import React from "react";
import Layout from "antd/es/layout/layout";
import { CreateTodo } from "../types/types";
import { useCreateTodoMutation } from "../services/TodoServices";
import FormToAdd from "../components/FormToAdd";

const MainForm = () => {
  const [createTodo] = useCreateTodoMutation();
  const onFinish = React.useCallback(
    (values: CreateTodo) => {
      //@ts-ignore
      createTodo({ ...values.task, complited: false });
    },
    [createTodo]
  );

  return (
    <Layout style={{ height: "100vh", padding: 20, marginTop: 40 }}>
      <h1
        style={{
          marginTop: 20,
          marginBottom: 40,
          textAlign: "center",
          color: "black",
          fontWeight: "bold",
          fontSize: 30,
        }}
      >
        Добавление новой задачи
      </h1>
      <FormToAdd onFinish={onFinish} />
    </Layout>
  );
};

export default MainForm;
