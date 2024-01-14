document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth < 768) {
    for (let i = 1; i <= 6; i++) {
      let limit = 20;
      let textElement = document.getElementById("limitedText" + i);

      if (textElement) {
        let text = textElement.textContent.trim();
        let words = text.split(" ");
        let limitedText = words.slice(0, limit).join(" ");

        if (words.length > limit) {
          textElement.textContent = limitedText + "...";
        }
      }
    }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  for (let i = 7; i <= 10000; i++) {
    let limit = 25;
    let textElement = document.getElementById("limitedText" + i);

    if (textElement) {
      let text = textElement.textContent.trim();
      let words = text.split(" ");
      let limitedText = words.slice(0, limit).join(" ");

      if (words.length > limit) {
        textElement.textContent = limitedText + "...";
      }
    }
  }
});