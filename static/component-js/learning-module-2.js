const { doc_query, doc_query_all } = require("./query_method");
window.addEventListener("DOMContentLoaded", () => {
  const baybayinIntroImages = doc_query_all(".baybayin__def-image-l2");
  for (let i = 0; i < baybayinIntroImages.length; i++) {
    baybayinIntroImages[i].src = `./assets/learning-module-2/image-${
      i + 1
    }.jpg`;
  }
});
