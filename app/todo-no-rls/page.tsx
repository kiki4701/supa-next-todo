import { sleep } from "@/lib/utils";
import { error } from "console";
import React from "react";
import TodoContainer from "./components/TodoContainer";

const page = async () => {
  //throw new Error("custom error");
  console.log(">>API call start");
  await sleep(1500);
  console.log(">>API call end");
  return (
    <div>
      <TodoContainer />
    </div>
  );
};

export default page;
