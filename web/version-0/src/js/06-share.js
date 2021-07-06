const buttonCreate = document.querySelector(".js-button-create");
const linkCreate = document.querySelector(".js-link-create");
const sectionCreate = document.querySelector(".js-sectionCreated");
const errorCreate = document.querySelector(".js-sectionCreatedError");
const errorMessage = document.querySelector(".js-message-error");
const buttonTwitter = document.querySelector(".js-twitter-button");

function handlerCreateCard(ev) {
  ev.preventDefault();

  // Mensaje que indica el campo no relleno respecto del data
  let errorHtml = "";
  for (let info in data) {
    if (data[info] === "") {
      errorHtml += ` |${info}| `;
    }
  }
  errorMessage.innerHTML = errorHtml;

  const url = "https://awesome-profile-cards.herokuapp.com/card";
  fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success === true) {
        linkCreate.innerHTML = data.cardURL;
        linkCreate.href = data.cardURL;
        sectionCreate.classNameList.remove("collapsable-hidden");
        errorCreate.classNameList.add("collapsable-hidden");
        buttonCreate.classNameList.remove("button-share-click-error");
        buttonCreate.classNameList.add("button-share-click");

        buttonTwitter.href = `https://twitter.com/intent/tweet?text=${textTweet}&url=${data.cardURL}&hashtags=${hashtagsTweet}`;

        buttonCreate.setAttribute("disabled", "disabled");
      } else {
        errorCreate.classNameList.remove("collapsable-hidden");

        sectionCreate.classNameList.add("collapsable-hidden");
        buttonCreate.classNameList.add("button-share-click-error");
      }
    });
}

function allowButton() {
  buttonCreate.removeAttribute("disabled", "disabled");
  errorCreate.classNameList.add("collapsable-hidden");
  sectionCreate.classNameList.add("collapsable-hidden");
  buttonCreate.classNameList.remove("button-share-click-error");
  buttonCreate.classNameList.remove("button-share-click");
}

buttonCreate.addEventListener("click", handlerCreateCard);

// Link para compartir en twitter
const textTweet = "Conoce mi tarjeta de presentación:";
const hashtagsTweet = "openToWork,frontend";
