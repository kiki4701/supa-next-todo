"use client";
import React, { useEffect } from "react";
import useTodosController from "../hooks/useTodosController";
import TodoList from "@/components/ui/TodoList";

interface TodoContainerProps {
  owerUserId?: string;
}

const TodoContainer = ({ owerUserId }: TodoContainerProps) => {
  const {
    loading,
    todos,
    onCreateEmptyTodos,
    onDeleteTodos,
    onSearchTodos,
    onUpdateTodos,
  } = useTodosController();

  console.log(">>loading", loading);
  console.log(">>todos", todos);

  return (
    <div>
      <TodoList
        sharedUserFullName="test user"
        owerUserId={owerUserId}
        loading={loading}
        todoListData={todos}
        isReadOnly={false}
        onUpdate={(id, content) => {
          onUpdateTodos(id, content);
        }}
        onCreate={() => onCreateEmptyTodos()}
        onDelete={onDeleteTodos}
        onSearch={onSearchTodos}
      />
    </div>
  );
};

export default TodoContainer;
