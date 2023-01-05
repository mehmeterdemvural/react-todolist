import { React, useState, useEffect } from "react";
import { editInputs } from "./Functions";

function Footer({ toDoList, setToDoList }) {
  const [show, setShow] = useState("");

  return (
    <form className="row mt-2 justify-content-center ">
      <input
        className="col-8"
        type="text"
        value={show}
        placeholder="Eklenecek İşinizi Yazınız"
        onChange={(e) => {
          setShow(e.target.value);
        }}
      />
      <div className="row justify-content-center">
        <button
          className="col-4 m-2"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            setToDoList([...toDoList, { value: editInputs(show), checked: false }]);
            setShow("");
          }}
        >
          Ekle
        </button>
        <button
          className="col-4 m-2"
          type="reset"
          onClick={() => {
            setShow("");
          }}
        >
          Temizle
        </button>
      </div>
    </form>
  );
}

export default Footer;
