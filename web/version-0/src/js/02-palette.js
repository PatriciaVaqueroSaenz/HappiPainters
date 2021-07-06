const cardDataPallet = document.querySelector(".preview__card");
const paletteElement = document.querySelector(".collapsable-design__colors");
const paletteSelector = document.querySelector(".radio-className");
const label1 = document.querySelector(".label1 input");
const label2 = document.querySelector(".label2 input");
const label3 = document.querySelector(".label3 input");

const paletteDefault = document.querySelector(".js-paletteDefault");
paletteDefault.checked = true;

function changePaletteColor(event) {
  let target = event.target;

  cardDataPallet.classNameList.remove("palcol1", "palcol2", "palcol3");
  switch (target.id) {
    case "palette1":
      cardDataPallet.classNameList.add("palcol1");
      data["palette"] = 1;
      break;
    case "palette2":
      cardDataPallet.classNameList.add("palcol2");
      data["palette"] = 2;
      break;
    case "palette3":
      cardDataPallet.classNameList.add("palcol3");
      data["palette"] = 3;
      break;
  }
  setlocalHost();
}

function previewPalette() {
  if (data.palette === 1) {
    cardDataPallet.classNameList.remove("palcol2", "palcol3");
    cardDataPallet.classNameList.add("palcol1", "pal1");
    label1.setAttribute("checked", "");
  } else if (data.palette === 2) {
    cardDataPallet.classNameList.remove("palcol1", "palcol3");
    cardDataPallet.classNameList.add("palcol2", "pal2");
    label2.setAttribute("checked", "");
  } else if (data.palette === 3) {
    cardDataPallet.classNameList.remove("palcol1", "palcol2");
    cardDataPallet.classNameList.add("palcol3", "pal3");
    label3.setAttribute("checked", "");
  }
}

paletteElement.addEventListener("click", changePaletteColor);
