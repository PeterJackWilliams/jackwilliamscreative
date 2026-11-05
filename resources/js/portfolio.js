(() => {
    const filterButtons = document.querySelectorAll(".portfolio-filter");
    const projectCards = document.querySelectorAll(".project-card");
    const projectCount = document.getElementById("project-count");
    const emptyMessage = document.getElementById("portfolio-empty");

    if (!filterButtons.length || !projectCards.length) return;

    function applyFilter(filter) {
        let visibleCount = 0;

        projectCards.forEach((card) => {
            const matches = filter === "all" || card.dataset.category === filter;
            card.hidden = !matches;

            if (matches) visibleCount += 1;
        });

        filterButtons.forEach((button) => {
            const isActive = button.dataset.filter === filter;
            button.classList.toggle("is-active", isActive);
            button.setAttribute("aria-pressed", String(isActive));
        });

        if (projectCount) projectCount.textContent = String(visibleCount);
        if (emptyMessage) emptyMessage.hidden = visibleCount !== 0;
    }

    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            applyFilter(button.dataset.filter);
        });
    });

    // If a thumbnail hasn't been added yet, retain the designed background placeholder.
    document.querySelectorAll(".project-image img").forEach((image) => {
        image.addEventListener("error", () => {
            image.hidden = true;
        });
    });

    applyFilter("all");
})();
