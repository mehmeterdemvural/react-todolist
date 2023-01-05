import React, { useEffect, useState } from "react";

function Main({ toDoList, setToDoList, filtred }) {
  const removeList = (e) => {
    let arr = toDoList.slice(0);
    setToDoList(() => {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].value === e) {
          arr.splice(i, 1);
          return arr;
        }
      }
    });
  };

  useEffect(() => {
    localStorage.setItem("List", JSON.stringify(toDoList));
  }, [toDoList, setToDoList]);

  return (
    <section className="row justify-content-center mt-2">
      {filtred.map((item, i) => {
        return (
          <div className="row justify-content-center" key={i}>
            <label className="col-8 ">
              <div className="row">
                <input
                  className="col-1"
                  type="checkbox"
                  defaultChecked={item.checked}
                  onClick={() => {
                    setToDoList(() => {
                      let arr = toDoList.slice(0);
                      for (let i = 0; i < arr.length; i++) {
                        if (arr[i].value === item.value) {
                          arr[i].checked = !arr[i].checked;
                        }
                      }
                      toDoList = arr.slice(0);
                      return toDoList;
                    });
                  }}
                />
                <p className="col-10">{item.value}</p>

                <button
                  className="col-1 btn"
                  onClick={() => {
                    removeList(item.value);
                  }}
                >
                  Sil
                </button>
              </div>
            </label>
          </div>
        );
      })}
      {toDoList.length === 0 ? (
        <div className="row justify-content-center">
          <div className="col-8 mt-2">
            <p className="result">Yapılacaklar Listeniz Boş. Lütfen Aşağıda Yer Alan İnput Alanından Yapılacaklar Listenize Bir İş Ekleyiniz.</p>
          </div>
        </div>
      ) : (
        <div className="row justify-content-center">
          <div className="col-8">
            <p className="mt-2 result">
              Yapılacaklar Listesinde <strong>{toDoList.length}</strong> İş
              Bulunmaktadır. Bu İşlerinizin{" "}
              <strong>
                {
                  filtred.filter((item) => {
                    return item.checked === true;
                  }).length
                }
              </strong>{" "}
              Tanesi Yapılmış,{" "}
              <strong>
                {
                  toDoList.filter((item) => {
                    return item.checked === false;
                  }).length
                }
              </strong>{" "}
              Tanesi İse Yapılmamıştır. Hedeflerinizi gerçekleştirme oranınız{" "}
              <strong>
                {Math.floor(
                  (toDoList.filter((item) => {
                    return item.checked === true;
                  }).length /
                    toDoList.length) *
                    100
                )}{" "}
                %
              </strong>{" "}
              dır.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Main;
