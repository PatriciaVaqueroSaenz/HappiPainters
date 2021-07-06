"use strict";
const collapsableSections = document.querySelectorAll(".js-collapsable"),
  arrows = document.querySelectorAll(".js-arrow"),
  headers = document.querySelectorAll(".js-collapsable-header");
function handleCollapsibles(e) {
  const t = e.currentTarget.nextElementSibling,
    a = e.currentTarget;
  for (const e of collapsableSections)
    if (e === t) {
      e.classNameList.toggle("collapsable-hidden");
      for (const e of arrows)
        e.parentNode === a
          ? e.classNameList.toggle("rotate")
          : e.classNameList.remove("rotate");
    } else e.classNameList.add("collapsable-hidden");
}
for (let e of headers) e.addEventListener("click", handleCollapsibles);
const cardDataPallet = document.querySelector(".preview__card"),
  paletteElement = document.querySelector(".collapsable-design__colors"),
  paletteSelector = document.querySelector(".radio-className"),
  label1 = document.querySelector(".label1 input"),
  label2 = document.querySelector(".label2 input"),
  label3 = document.querySelector(".label3 input"),
  paletteDefault = document.querySelector(".js-paletteDefault");
function changePaletteColor(e) {
  let t = e.target;
  switch (
    (cardDataPallet.classNameList.remove("palcol1", "palcol2", "palcol3"), t.id)
  ) {
    case "palette1":
      cardDataPallet.classNameList.add("palcol1"), (data.palette = 1);
      break;
    case "palette2":
      cardDataPallet.classNameList.add("palcol2"), (data.palette = 2);
      break;
    case "palette3":
      cardDataPallet.classNameList.add("palcol3"), (data.palette = 3);
  }
  setlocalHost();
}
function previewPalette() {
  1 === data.palette
    ? (cardDataPallet.classNameList.remove("palcol2", "palcol3"),
      cardDataPallet.classNameList.add("palcol1", "pal1"),
      label1.setAttribute("checked", ""))
    : 2 === data.palette
    ? (cardDataPallet.classNameList.remove("palcol1", "palcol3"),
      cardDataPallet.classNameList.add("palcol2", "pal2"),
      label2.setAttribute("checked", ""))
    : 3 === data.palette &&
      (cardDataPallet.classNameList.remove("palcol1", "palcol2"),
      cardDataPallet.classNameList.add("palcol3", "pal3"),
      label3.setAttribute("checked", ""));
}
(paletteDefault.checked = !0),
  paletteElement.addEventListener("click", changePaletteColor);
const form = document.querySelector(".js-data"),
  nameInput = document.querySelector(".js-nameInput"),
  previewName = document.querySelector(".js-name"),
  nameDefault = "Nombre y Apellido",
  jobInput = document.querySelector(".js-job"),
  previewJob = document.querySelector(".js-jobTitle"),
  jobDefault = "Front-end developer",
  emailInput = document.querySelector(".js-email"),
  defaultEmail = "mailto:",
  previewEmail = document.querySelector(".js-buttonEm"),
  telephoneInput = document.querySelector(".js-telephone"),
  defaultTelephone = "tel:",
  previewTel = document.querySelector(".js-buttonTel"),
  linkedInInput = document.querySelector(".js-linkedin"),
  defaultUrlLinkedin = "https://www.linkedin.com/in/",
  previewLinkedIn = document.querySelector(".js-buttonLink"),
  githubInput = document.querySelector(".js-github"),
  defaultUrlGitHub = "https://github.com/",
  previewGit = document.querySelector(".js-buttonGit"),
  resetButton = document.querySelector(".js-reset");
let data = {
  palette: "1",
  name: "",
  job: "",
  email: "",
  phone: "",
  linkedin: "",
  github: "",
  photo: "",
};
function dataForm(e) {
  const t = e.target.name,
    a = e.target.value;
  data[t] = a;
}
function previewCard() {
  (previewName.innerHTML = "" === data.name ? nameDefault : data.name),
    (previewJob.innerHTML = "" === data.job ? jobDefault : data.job),
    (previewEmail.href =
      "" === data.email ? "mailto:" : "mailto:" + data.email),
    (previewTel.href = "" === data.phone ? "tel:" : "tel:" + data.phone),
    (previewLinkedIn.href =
      "" === data.linkedin
        ? defaultUrlLinkedin
        : defaultUrlLinkedin + data.linkedin),
    (previewGit.href =
      "" === data.github ? defaultUrlGitHub : defaultUrlGitHub + data.github);
}
function handlerData(e) {
  dataForm(e), previewCard(), setlocalHost(), allowButton();
}
form.addEventListener("keyup", handlerData);
const fr = new FileReader(),
  fileField = document.querySelector(".js__profile-upload-btn"),
  profileImage = document.querySelector(".js__profile-image"),
  profilePreview = document.querySelector(".js__profile-preview"),
  defaultImg = "./assets/images/card-pic.jpg";
function getImage(e) {
  const t = e.currentTarget.files[0];
  fr.addEventListener("load", writeImage), fr.readAsDataURL(t);
}
function writeImage() {
  (data.photo = fr.result), previewImage(), setlocalHost();
}
function previewImage() {
  "" === data.photo
    ? (profileImage.style.backgroundImage = `url(${defaultImg})`)
    : ((profileImage.style.backgroundImage = `url(${data.photo})`),
      (profilePreview.style.backgroundImage = `url(${data.photo})`));
}
function fakeFileClick() {
  fileField.click();
}
function setlocalHost() {
  localStorage.setItem("dataLocal", JSON.stringify(data));
}
fileField.addEventListener("change", getImage);
let getlocalData = JSON.parse(localStorage.getItem("dataLocal"));
function getLocalStorage() {
  null != getlocalData &&
    ((nameInput.value = getlocalData.name),
    (jobInput.value = getlocalData.job),
    (emailInput.value = getlocalData.email),
    (telephoneInput.value = getlocalData.phone),
    (linkedInInput.value = getlocalData.linkedin),
    (githubInput.value = getlocalData.github),
    (data = getlocalData)),
    previewCard(),
    previewImage(),
    previewPalette();
}
getLocalStorage();
const buttonCreate = document.querySelector(".js-button-create"),
  linkCreate = document.querySelector(".js-link-create"),
  sectionCreate = document.querySelector(".js-sectionCreated"),
  errorCreate = document.querySelector(".js-sectionCreatedError"),
  errorMessage = document.querySelector(".js-message-error"),
  buttonTwitter = document.querySelector(".js-twitter-button");
function handlerCreateCard(e) {
  e.preventDefault();
  let t = "";
  for (let e in data) "" === data[e] && (t += ` |${e}| `);
  errorMessage.innerHTML = t;
  fetch("https://awesome-profile-cards.herokuapp.com/card", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  })
    .then((e) => e.json())
    .then((e) => {
      !0 === e.success
        ? ((linkCreate.innerHTML = e.cardURL),
          (linkCreate.href = e.cardURL),
          sectionCreate.classNameList.remove("collapsable-hidden"),
          errorCreate.classNameList.add("collapsable-hidden"),
          buttonCreate.classNameList.remove("button-share-click-error"),
          buttonCreate.classNameList.add("button-share-click"),
          (buttonTwitter.href = `https://twitter.com/intent/tweet?text=${textTweet}&url=${e.cardURL}&hashtags=${hashtagsTweet}`),
          buttonCreate.setAttribute("disabled", "disabled"))
        : (errorCreate.classNameList.remove("collapsable-hidden"),
          sectionCreate.classNameList.add("collapsable-hidden"),
          buttonCreate.classNameList.add("button-share-click-error"));
    });
}
function allowButton() {
  buttonCreate.removeAttribute("disabled", "disabled"),
    errorCreate.classNameList.add("collapsable-hidden"),
    sectionCreate.classNameList.add("collapsable-hidden"),
    buttonCreate.classNameList.remove("button-share-click-error"),
    buttonCreate.classNameList.remove("button-share-click");
}
buttonCreate.addEventListener("click", handlerCreateCard);
const textTweet = "Conoce mi tarjeta de presentación:",
  hashtagsTweet = "openToWork,frontend";
function handlerReset() {
  localStorage.clear("dataLocal"), location.reload();
}
resetButton.addEventListener("click", handlerReset);
