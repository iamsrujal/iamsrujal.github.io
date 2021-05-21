// Immediately invoked function to set the theme on initial load
(() => {
  document.addEventListener("DOMContentLoaded", (event) => {
    const KEY = "theme";
    if (localStorage.getItem(KEY) === "theme-light") {
      setTheme(KEY, "theme-light");
      let sliderEle = document.getElementById("slider");
      sliderEle.checked = true;
      let sliderTooltipEle = document.getElementById("slider-tooltip");
      sliderTooltipEle.setAttribute("title", "Slide To Dark Mode");
    } else {
      setTheme(KEY, "theme-dark");
      let sliderEle = document.getElementById("slider");
      sliderEle.checked = false;
      let sliderTooltipEle = document.getElementById("slider-tooltip");
      sliderTooltipEle.setAttribute("title", "Slide To Light Mode");
    }

    // set predefine data
    var startYearNumber = new Date("01-01-2020").getFullYear();
    var endYearNumber = new Date().getFullYear();
    var yearNumber = (endYearNumber - startYearNumber) + 2;
    document.getElementById("yearNumber").setAttribute('data-value', yearNumber);
    document.getElementById("happyCustomer").setAttribute('data-value', yearNumber);
    document.getElementById("doneProject").setAttribute('data-value', yearNumber + 1);
    document.getElementById("getRewards").setAttribute('data-value', yearNumber);
  });
})();

// function to set a given theme/color-scheme
function setTheme(KEY, themeName) {
  let styleNumber = themeName === "theme-dark" ? 1 : 4;
  $("#styleTheme").attr("href", `css/style${styleNumber}.css`);
  let counter = 1;
  while (counter <= 7) {
    let dynamicDocument = $(`#favicon${counter}`);
    let hrefString = dynamicDocument.attr("href");
    let styleStringIndex = hrefString.search("style") + 5;
    let styleString = styleNumber.toString();
    hrefString =
      hrefString.substr(0, styleStringIndex) +
      styleString +
      hrefString.substr(styleStringIndex + styleString.length);
    dynamicDocument.attr("href", hrefString);
    counter++;
  }
}
