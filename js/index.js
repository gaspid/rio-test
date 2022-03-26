const Modal = $.modal();
//валидация
const reg1 =
  /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
const reg2 = /^[A-Za-zА-Яа-яЁё]+$/;

const inpName = document.querySelector(".input-name");
const inpFone = document.querySelector(".input-fone");

// валидация формы
document.querySelector(".push-btn").onclick = function (e) {
  e.preventDefault;

  if (
    reg2.test(inpName.value) &&
    inpName.value.length >= 3 &&
    reg1.test(inpFone.value)
  ) {
    lestToDo()
  } else {
    alert("validation eror");
  }
};

// сервер api
const todoURL = "https://jsonplaceholder.typicode.com/todos";
const todos = [];

function setRequest(url) {
  return fetch(url)
    .then((response) => response.json())
    .then((json) => {
      return Array.prototype.push.apply(todos, json);
    })
    .catch((err) => {
      alert("err"), console.log(err);
    });
}
setRequest(todoURL);
//====================================================================================
const lestToDo = () => {
  Modal.delete();
  const modalBody = document.querySelector(".modal-body");
  const anime = document.querySelector(".anime");
  //анимация
  anime.classList.add("rot");

  //фильтрация масива
  const toItem = todos
    .filter(function (list) {
      return list.userId == 5;
    })
    .filter(function (list) {
      return list.completed == false;
    });
  // создание постов
  setTimeout(() => {
    toItem.map((item) => {
      let div = document.createElement("div");
      div.className = "alert";
      div.innerHTML = `${item.id}: ${item.title}`;
      modalBody.appendChild(div);
    });
    //удалении анимации

    anime.classList.remove("rot");
  }, 1000);
};
