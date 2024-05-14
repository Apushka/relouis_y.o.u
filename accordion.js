const accordionsContainers = document.querySelectorAll("[data-accordion]");

function initAccordions(container, index) {
  const accordion = container.querySelector(".accordion");
  const accordionId = "accordion" + (index + 1);
  accordion.id = accordionId;

  const items = accordion.querySelectorAll(".accordion-item");

  items.forEach((item, index) => {
    const header = item.querySelector(".accordion-header");
    const button = item.querySelector(".accordion-button");
    const collapse = item.querySelector(".accordion-collapse");

    const headerId = "header" + (index + 1);
    const collapseId = accordionId + "-collapse" + (index + 1);

    header.id = headerId;
    button.setAttribute("data-bs-target", "#" + collapseId);
    collapse.id = collapseId;
    collapse.setAttribute("data-bs-parent", "#" + accordionId);
    index === 0 && collapse.classList.add("show");
  });
}

accordionsContainers.forEach((container, index) =>
  initAccordions(container, index)
);
