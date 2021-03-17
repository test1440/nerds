/* var write_us = document.querySelector(".button-write-us");
if (write_us !== null) {
  var modal_write_us = document.querySelector(".modal");
  var button_close = document.querySelector(
    ".modal > .button-close"
  );
  popup(write_us, modal_write_us, button_close);
} 

function popup(open, modal, close) {
  open.addEventListener("click", function (evt) {
    evt.preventDefault();

    modal.classList.add("modal-show");
    var form = modal.getElementsByTagName("form")[0];
    if (form) {
      var firstInput = form.getElementsByTagName("input")[0];
      firstInput.focus();
    }
  });

  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.remove("modal-show");
  });
} */


var write_us = document.querySelector(".button-write-us");
var modal = document.querySelector(".modal");
var button_close = document.querySelector(".modal > .button-close");

write_us.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("modal-show");
});

button_close.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("modal-show");
});
