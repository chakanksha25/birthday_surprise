// =====================================
// BIRTHDAY MEMORY JOURNEY
// =====================================

const song = document.getElementById("birthdaySong");
const openBtn = document.getElementById("openBtn");

let particlesStarted = false;
let typewriterStarted = false;
let finalEffectDone = false;


// =====================================
// OPEN SURPRISE
// =====================================

if (openBtn) {

    openBtn.addEventListener("click", function () {

        // Start Nadive from exact beginning
        if (song) {

            song.pause();

            song.currentTime = 0;

            song.play().catch(function () {
                console.log("Music requires user interaction.");
            });

        }

        // Open Page 2
        nextPage(2);

        // Start floating particles once
        if (!particlesStarted) {

            startParticles();

            particlesStarted = true;

        }

    });

}


// =====================================
// PAGE CHANGE
// =====================================

function nextPage(pageNumber) {

    const currentPage =
        document.querySelector(".page.active");

    const nextPageElement =
        document.getElementById(
            "page" + pageNumber
        );


    if (!nextPageElement) {
        return;
    }


    // Don't change to same page

    if (currentPage === nextPageElement) {
        return;
    }


    // Cinematic page exit

    if (currentPage) {

        currentPage.classList.add("changing");

    }


    setTimeout(function () {

        // Remove old page

        if (currentPage) {

            currentPage.classList.remove("active");

            currentPage.classList.remove("changing");

        }


        // Show new page

        nextPageElement.classList.add("active");


        // -------------------------------
        // LETTER PAGE
        // -------------------------------

        if (pageNumber === 5) {

            typewriterStarted = false;

            setTimeout(function () {

                startTypewriter();

            }, 400);

        }


        // -------------------------------
        // FINAL PAGE
        // -------------------------------

        if (pageNumber === 6) {

            setTimeout(function () {

                finalEffect();

            }, 300);

        }

    }, 350);

}


// =====================================
// FLOATING PARTICLES
// =====================================

function startParticles() {

    const container =
        document.getElementById("particles");


    if (!container) {
        return;
    }


    setInterval(function () {

        const particle =
            document.createElement("div");


        particle.classList.add("particle");


        const symbols = [
            "❤️",
            "💕",
            "✨",
            "✦",
            "💗",
            "🌸",
            "⭐"
        ];


        particle.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        // Random position

        particle.style.left =
            Math.random() * 100 + "vw";


        // Random size

        const size =
            Math.random() * 18 + 12;


        particle.style.fontSize =
            size + "px";


        // Random speed

        const duration =
            Math.random() * 4 + 4;


        particle.style.animationDuration =
            duration + "s";


        container.appendChild(particle);


        // Remove after animation

        setTimeout(function () {

            particle.remove();

        }, duration * 1000 + 500);


    }, 450);

}


// =====================================
// TYPEWRITER
// =====================================

function startTypewriter() {

    if (typewriterStarted) {
        return;
    }


    const element =
        document.getElementById("typewriter");


    if (!element) {
        return;
    }


    typewriterStarted = true;


    // Preserve spaces and line breaks

    const text =
        element.textContent.trim();


    // Clear old text

    element.textContent = "";


    let index = 0;


    function type() {

        if (index < text.length) {

            element.textContent +=
                text.charAt(index);


            index++;


            setTimeout(
                type,
                22
            );

        }

    }


    type();

}


// =====================================
// PHOTO POPUP
// =====================================

const photoPopup =
    document.getElementById("photoPopup");

const popupImage =
    document.getElementById("popupImage");

const closePopup =
    document.getElementById("closePopup");


const photos =
    document.querySelectorAll(
        ".polaroid img, .memory-strip img"
    );


photos.forEach(function (photo) {

    photo.addEventListener(
        "click",
        function () {

            if (
                !photoPopup ||
                !popupImage
            ) {
                return;
            }


            popupImage.src =
                photo.src;


            photoPopup.classList.add("show");

        }
    );

});


// Close popup with X

if (closePopup) {

    closePopup.addEventListener(
        "click",
        function () {

            photoPopup.classList.remove(
                "show"
            );

        }
    );

}


// Close popup by clicking outside image

if (photoPopup) {

    photoPopup.addEventListener(
        "click",
        function (event) {

            if (
                event.target ===
                photoPopup
            ) {

                photoPopup.classList.remove(
                    "show"
                );

            }

        }
    );

}


// Close popup with Escape key

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            photoPopup
        ) {

            photoPopup.classList.remove(
                "show"
            );

        }

    }
);


// =====================================
// FINAL CELEBRATION
// =====================================

function finalEffect() {

    // Prevent duplicate effects

    if (finalEffectDone) {
        return;
    }


    finalEffectDone = true;


    const container =
        document.getElementById("particles");


    if (!container) {
        return;
    }


    const symbols = [
        "❤️",
        "💕",
        "💗",
        "✨",
        "🌸",
        "⭐",
        "🎉",
        "🎂"
    ];


    // Create final celebration

    for (let i = 0; i < 45; i++) {

        const particle =
            document.createElement("div");


        particle.classList.add(
            "particle"
        );


        particle.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        particle.style.left =
            Math.random() *
            100 +
            "vw";


        particle.style.fontSize =
            Math.random() * 20 +
            14 +
            "px";


        particle.style.animationDuration =
            Math.random() * 3 +
            3 +
            "s";


        particle.style.animationDelay =
            Math.random() * 1.5 +
            "s";


        container.appendChild(
            particle
        );


        setTimeout(function () {

            particle.remove();

        }, 7500);

    }

}