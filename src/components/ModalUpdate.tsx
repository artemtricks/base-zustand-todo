import { Modal } from "antd";
import React from "react";
import FormToAdd from "./FormToAdd";
import { useUpdateTodoMutation } from "../services/TodoServices";
import { CreateTodo, TodoTask } from "../types/types";

type Props = {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  initialValue: TodoTask | undefined;
  setInitialValue: React.Dispatch<React.SetStateAction<TodoTask | undefined>>;
};

const ModalUpdate = (props: Props) => {
  const { isModalOpen, setIsModalOpen, initialValue, setInitialValue } = props;
  const [updateTodo] = useUpdateTodoMutation();
  const handleCloseModal = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setInitialValue(undefined);
    setIsModalOpen(false);
  };

  const onFinish = React.useCallback(
    (values: any) => {
      const todoWithId = {
        id: initialValue?.id,
        ...values.task,
      };

      updateTodo(todoWithId);
      setInitialValue(undefined);
      setIsModalOpen(false);
    },
    [updateTodo, initialValue?.id]
  );

  return (
    <Modal
      title="Basic Modal"
      open={isModalOpen}
      onCancel={handleCloseModal}
      footer={null}
    >
      <FormToAdd isUpdate onFinish={onFinish} initialValue={initialValue} />
    </Modal>
  );
};

export default ModalUpdate;
