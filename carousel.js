const carouselsContainers = document.querySelectorAll("[data-carousel]");

const isEditMode = window.location.pathname.includes("textolite");

if (isEditMode) {
  document.body.classList.add("p-3");

  const navbar = document.querySelector(".navbar");
  navbar.classList.replace("position-sticky", "position-static");
}

function initializeCarousel(carouselContainer, index) {
  const carousel = carouselContainer.querySelector(".carousel");
  const carouselId = "carousel" + (index + 1);

  const navButtons = carousel.querySelectorAll(
    ".carousel-control-next, .carousel-control-prev"
  );

  carousel.id = carouselId;

  const indicatorsContainer = carousel.querySelector(".carousel-indicators");
  const carouselItems = carousel.querySelectorAll(".carousel-item");

  if (isEditMode) {
    const carouselLabel = carousel.querySelector(".carousel-label");
    const carouselTitle = carouselContainer.querySelector(".carousel-title");
    const carouselInner = carousel.querySelector(".carousel-inner");

    carouselContainer.classList.remove("d-none", "d-md-none");
    carouselContainer.classList.add("border-dashed", "p-3");
    indicatorsContainer.className = "d-none";
    navButtons.forEach((nb) => (nb.className = "d-none"));
    carouselTitle?.classList.remove("d-md-none");
    carouselLabel?.classList.remove("d-none");
    carouselInner.classList.add("overflow-visible");

    carouselItems.forEach((image, index) => {
      image.className = "d-inline-block me-3";
      image.style.width = "150px";
    });
  } else {
    carouselItems.forEach((item, index) => {
      const indicator = document.createElement("button");
      indicator.type = "button";
      index === 0
        ? item.classList.add("active")
        : item.classList.remove("active");
      indicator.className = index === 0 ? "active" : "";
      indicator.setAttribute("data-bs-target", "#" + carouselId);
      indicator.setAttribute("data-bs-slide-to", index);
      indicatorsContainer.append(indicator);
    });
    navButtons.forEach((b) =>
      b.setAttribute("data-bs-target", "#" + carouselId)
    );
  }
}

carouselsContainers.forEach((c, index) => {
  initializeCarousel(c, index);
});
