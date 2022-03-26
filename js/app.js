function _createModule(options) {
  const modal = document.createElement("div");
  modal.className = "modal";
  modal.insertAdjacentHTML(
    "afterbegin",
    `
    <div id="openModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <span data-close="true" class="close">&#10006;</span>
          </div>
          
          <div class="modal-body">
              
          </div>

          <div class="anime "></div>
        </div>
      </div>
      </div>
    `
  );
  document.body.appendChild(modal);
  const modalBody = document.querySelector(".modal-body");
  //создание контента
  const content = document.createElement("div");
  content.className = "modal-content";
  content.insertAdjacentHTML(
    "afterbegin",
    `
            <div class="modal-info">
                  <div class="hole">
                      <img src="./img/Group85.svg">
                  </div>
                  <h3>Форма сайта</h3>
                  <div class="modal-text">
                    Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
                  </div>
              </div>
              <div class="modal-form">
                  <div class="modal-input">
                      <input class="input input-name" placeholder="Имя" minlength="3" type="text">
                      <input class="input input-fone" placeholder="Номер телефона" type="text">
                  </div>
                  <div class="modal-btn">
                      <button class="btn stop-btn">Отменить</button>
                      <button  class="btn push-btn">Отправить</button>
                  </div>
              </div>
    `
  );

  modalBody.appendChild(content);
  return modal;
}

$.modal = function (options) {
  const $modal = _createModule(options);

  const modalMetod = {
    open() {
      $modal.classList.add("open");
      document.body.classList.add("overflow");
    },
    close() {
      $modal.classList.remove("open");
      document.body.classList.remove("overflow");
    },
    delete() {
      const modalBody = document.querySelector(".modal-body");
      while (modalBody.firstChild) {
        modalBody.removeChild(modalBody.firstChild);
      }
    }
  };
  //поис и закрытие
  $modal.addEventListener("click", (event) => {
    if (event.target.dataset.close) {
      modalMetod.close();
    }
  });
  return modalMetod;
};
