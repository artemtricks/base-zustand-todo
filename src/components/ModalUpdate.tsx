import { Modal } from "antd";
import React from "react";
import FormToAdd from "./FormToAdd";
import { TodoTask } from "../types/types";
import { useTodoStore } from "../services/store";

type Props = {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  initialValue: TodoTask | undefined;
  setInitialValue: React.Dispatch<React.SetStateAction<TodoTask | undefined>>;
};

const ModalUpdate = (props: Props) => {
  const { isModalOpen, setIsModalOpen, initialValue, setInitialValue } = props;

  const handleCloseModal = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setInitialValue(undefined);
    setIsModalOpen(false);
  };

  const updateTodo = useTodoStore((state) => state.updateTodos);

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
    [initialValue?.id]
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
