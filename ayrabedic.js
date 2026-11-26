//navigantion Bar//

const searchBtn = document.getElementById("searchBtn");
const searchArea = document.getElementById("searchArea");
const searchInput = document.getElementById("searchInput");

// Open and close search box
searchBtn.addEventListener("click", function () {
    searchArea.classList.toggle("show");

    if (searchArea.classList.contains("show")) {
        searchInput.focus();
    }
});

// Search form
const searchForm = document.getElementById("searchForm");

searchForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const searchValue = searchInput.value.trim();

    if (searchValue !== "") {
        alert("You searched for: " + searchValue);
        searchInput.value = "";
    }
});

// Active navigation link
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.forEach(function (item) {
            item.classList.remove("active");
        });

        this.classList.add("active");
    });
});

//Hero Seaction Bar//
// Treatment search
const searchButton = document.getElementById("searchButton");

const treatmentSearch = document.getElementById("treatmentSearch");

const searchMessage = document.getElementById("searchMessage");

searchButton.addEventListener("click", function () {

    const searchValue = treatmentSearch.value.trim();

    if (searchValue === "") {

        searchMessage.textContent =
            "Please enter a treatment name.";

    } else {

        searchMessage.textContent =
            "You searched for: " + searchValue;

    }

});

// Enter key search
treatmentSearch.addEventListener("keypress", function (event) {

    if (event.key === "Enter") {
        searchButton.click();
    }

});


//About Us  Bar//

/* Read More Button */

const readMoreBtn = document.getElementById("readMoreBtn");
const moreContent = document.getElementById("moreContent");

readMoreBtn.addEventListener("click", function () {

    moreContent.classList.toggle("show");

    if (moreContent.classList.contains("show")) {

        readMoreBtn.innerHTML =
            'Read Less <i class="bi bi-arrow-up"></i>';

    } else {

        readMoreBtn.innerHTML =
            'Read More <i class="bi bi-arrow-right"></i>';

    }

});


/* Animated Counter */

const counters = document.querySelectorAll(".counter");

let counterStarted = false;

function startCounters() {

    if (counterStarted) return;

    const section = document.querySelector(".achievement-section");

    const sectionPosition = section.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (sectionPosition < screenHeight - 50) {

        counterStarted = true;

        counters.forEach(function (counter) {

            const target = Number(counter.dataset.target);
            const duration = 1500;
            const startTime = performance.now();

            function updateCounter(currentTime) {

                const progress = Math.min(
                    (currentTime - startTime) / duration,
                    1
                );

                const currentValue = Math.floor(
                    target * progress
                );

                counter.textContent = currentValue;

                if (progress < 1) {
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }

            }

            requestAnimationFrame(updateCounter);

        });

    }

}

window.addEventListener("scroll", startCounters);

window.addEventListener("load", startCounters);


//Service Seaction Bar//

const dropdownItems = document.querySelectorAll(".dropdown-item");

const serviceCards = document.querySelectorAll(".service-item");

const selectedCategory = document.getElementById("selectedCategory");

const noResults = document.getElementById("noResults");

// Dropdown filter functionality
dropdownItems.forEach(function (item) {

    item.addEventListener("click", function () {

        // Get selected category
        const selectedFilter = this.dataset.filter;

        // Change dropdown heading
        selectedCategory.textContent = this.textContent.trim();

        // Remove previous active class
        dropdownItems.forEach(function (dropdownItem) {
            dropdownItem.classList.remove("active-filter");
        });

        // Add active class
        this.classList.add("active-filter");

        let visibleCount = 0;

        // Filter service cards
        serviceCards.forEach(function (card) {

            const cardCategory = card.dataset.category;

            if (
                selectedFilter === "all" ||
                selectedFilter === cardCategory
            ) {

                card.classList.remove("hide");
                visibleCount++;

            } else {

                card.classList.add("hide");

            }

        });

        // Show no results message
        if (visibleCount === 0) {
            noResults.style.display = "block";
        } else {
            noResults.style.display = "none";
        }

    });

});

