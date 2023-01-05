import { React, useState, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Filter from "./Filter";

function ToDoList() {
  const [filter, setFilter] = useState("");

  if (!localStorage.getItem("List")) {
    console.log("Stroge Oluşturuldu");
    localStorage.setItem("List", "");
  }
  const [toDoList, setToDoList] = useState(() => {
    if (localStorage.getItem("List") !== "") {
      return JSON.parse(localStorage.getItem("List"));
    } else {
      return [];
    }
  });

  const filtred = toDoList.filter((item) => {
    return item.value
      .toString()
      .toLocaleLowerCase("TR")
      .includes(filter.toLocaleLowerCase("TR"));
  });

  useEffect(() => {
    localStorage.setItem("List", JSON.stringify(toDoList));
  }, [toDoList, setToDoList]);

  return (
    <>
      <Header />
      <Filter
        toDoList={toDoList}
        filter={filter}
        setFilter={setFilter}
        filtred={filtred}
      />
      <Main toDoList={toDoList} setToDoList={setToDoList} filtred={filtred} />
      <Footer toDoList={toDoList} setToDoList={setToDoList} />
    </>
  );
}

export default ToDoList;
