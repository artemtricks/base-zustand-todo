import { Button, Form, Input, Checkbox } from "antd";
import React from "react";
import { CreateTodo, TodoTask } from "../types/types";

type Props = {
  onFinish: (values: CreateTodo, id?: number) => void;
  isUpdate?: boolean;
  initialValue?: TodoTask;
};

const FormToAdd: React.FC<Props> = (props) => {
  const { onFinish, isUpdate = false, initialValue } = props;

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

  const validateMessages = {
    required: "${label} обязательный параметр!",
  };

  const formatValue = { task: initialValue };

  console.log(formatValue, "dedeedede");
  return (
    <Form
      key={initialValue?.id}
      initialValues={formatValue}
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      style={{
        maxWidth: 600,
      }}
      validateMessages={validateMessages}
    >
      <Form.Item
        name={["task", "title"]}
        label="Заголовок"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name={["task", "description"]}
        label="Описание"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input.TextArea />
      </Form.Item>

      {isUpdate && (
        <Form.Item
          name={["task", "complited"]}
          label="Выполнена"
          valuePropName="checked"
        >
          <Checkbox />
        </Form.Item>
      )}

      <Form.Item
        wrapperCol={{
          ...layout.wrapperCol,
          offset: 8,
        }}
      >
        <Button htmlType="submit" type="primary">
          Добавить задачу
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormToAdd;
