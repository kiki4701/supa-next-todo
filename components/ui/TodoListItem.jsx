"use client";
import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { CiEdit, CiCircleCheck } from "react-icons/ci";

const TodoListItem = ({ todo, onDelete, onUpdate = () => {} }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [userInput, setUserInput] = useState(todo?.content ?? "");

  const onStartEdit = () => {
    setIsEdit(true);
  };

  // 수정이 끝났을 때
  const onFinishEdit = () => {
    onUpdate(todo.id, userInput);
    setIsEdit(false);
  };

  // 삭제 버튼 클릭했을 때
  const onClickDelete = () => {
    onDelete(todo.id);
  };

  return (
    <li className="min-h-[60px] bg-[#b280d9] border border-black rounded-2xl font-bold group">
      <article className="min-h-[60px] p-4 flex flex-col sm:flex-row gap-4">
        <>
          {isEdit ? (
            <input
              className="flex-1 text-[18px]"
              value={userInput}
              onChange={(e) => {
                setUserInput(e.target.value);
              }}
            ></input>
          ) : (
            <div
              onClick={onStartEdit}
              className="flex-1 text-[18px] cursor-pointer"
            >
              {todo?.content}
            </div>
          )}
        </>
        <div className="w-fit hidden group-hover:flex gap-[8px] self-end">
          {isEdit ? (
            <div
              onClick={onFinishEdit}
              className="h-[45px] w-[45px] flex justify-center items-center bg-[#7ebb92] border border-black rounded-2xl cursor-pointer"
            >
              <CiCircleCheck size={30} />
            </div>
          ) : (
            <div
              onClick={onStartEdit}
              className="h-[45px] w-[45px] flex justify-center items-center bg-[#7ebb92] border border-black rounded-2xl cursor-pointer"
            >
              <CiEdit size={30} />
            </div>
          )}
          <div
            onClick={onClickDelete}
            className="h-[45px] w-[45px] flex justify-center items-center bg-[#ed7461] border border-black rounded-2xl cursor-pointer"
          >
            <AiOutlineDelete size={30} />
          </div>
        </div>
      </article>
    </li>
  );
};

export default TodoListItem;
