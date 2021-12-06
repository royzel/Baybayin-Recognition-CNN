window.addEventListener("DOMContentLoaded", () => {
  const carouselInner = document.querySelector(".carousel-inner");
  fetch("/carousel", { method: "GET" })
    .then((data) => data.json())
    .then((data) => {
      data.images.forEach((item, index) => {
        const getImageID = item.match(
          /(?=[^https://drive.google.com/file/d/$])(?=[^/view?usp=sharing$])\w+/g
        );
        const carouselItem = document.createElement("div");
        carouselItem.setAttribute(
          "class",
          `carousel-item ${index === 0 ? "active" : ""}`
        );
        carouselItem.style.width = "100%";
        const carouselImgSrc = document.createElement("img");
        carouselImgSrc.src = `https://drive.google.com/uc?export=view&id=${getImageID.join(
          "-"
        )}`;
        carouselImgSrc.setAttribute("class", "d-block w-100");
        carouselImgSrc.setAttribute("alt", `Slide ${index}`);
        carouselImgSrc.setAttribute("loading", "lazy");
        carouselItem.appendChild(carouselImgSrc);
        carouselInner.appendChild(carouselItem);
      });
    });
});
