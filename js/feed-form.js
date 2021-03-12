const feedLink = document.querySelector(".feed-link");
const feedPopup = document.querySelector(".modal-feed");
const feedClose = feedPopup.querySelector(".modal-close");
const feedForm = feedPopup.querySelector(".feed-form");
const feedInputName = feedPopup.querySelector(".feed-input-name");
const feedInputEmail = feedPopup.querySelector(".feed-input-email");

let isStorageSupport = true;
let storageName = "";
let storageEmail = "";

try {
  storageName = localStorage.getItem("feed-name");
  storageEmail = localStorage.getItem("feed-email");
} catch (err) {
  isStorageSupport = false;
}

feedLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedPopup.classList.add("modal-show");
  if (storageName && storageEmail) {
    feedInputName.value = storageName;
    feedInputEmail.value = storageEmail;
  } else {
    feedInputName.focus();
  }
});

feedClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedPopup.classList.remove("modal-show");
  feedPopup.classList.remove("modal-error");
});

feedForm.addEventListener("submit", function (evt) {
  if (
    !feedInputName.value ||
    !feedInputEmail.value ||
    !feedInputEmail.checkValidity()
  ) {
    evt.preventDefault();
    feedPopup.classList.remove("modal-error");
    feedPopup.offsetWidth = feedPopup.offsetWidth;
    feedPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("feed-name", feedInputName.value);
      localStorage.setItem("feed-email", feedInputName.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (feedPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      feedPopup.classList.remove("modal-show");
      feedPopup.classList.remove("modal-error");
    }
  }
});
