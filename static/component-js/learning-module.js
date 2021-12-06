const { doc_query, doc_query_all } = require("./query_method");
window.addEventListener("DOMContentLoaded", () => {
  const baybayinIntroImages = doc_query_all(".baybayin__def-image");
  const baybayinCultureAsset = doc_query(".baybayin__culture-asset");
  for (let i = 0; i < baybayinIntroImages.length; i++) {
    baybayinIntroImages[i].src = `./assets/learning-module/baybayin-def-${
      i + 1
    }.jpg`;
  }
  if (baybayinCultureAsset !== null) {
    baybayinCultureAsset.src = "./assets/learning-module/culture_asset.jpg";
  }
});
