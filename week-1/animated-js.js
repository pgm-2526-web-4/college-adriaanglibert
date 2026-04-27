const $pizzaBoxes = document.querySelectorAll('[data-pizza]');

$pizzaBoxes.forEach($pizzaBox => {
    // console.log($pizzaBox);
    // console.log($pizzaBox.getAttribute('data-pizza'));
    const { pizza, crust } = $pizzaBox.dataset;
    // console.log($pizzaBox.dataset.crust);
});


// Selecteer alle elementen met data-animation -> loop hierover.
const $rotationElements = document.querySelectorAll("[data-animation='customRotation']");

const handleControls = (animation) => {
    const $controls = document.querySelectorAll("[data-controls]");

    $controls.forEach($control => {
        $control.addEventListener('click', () => {
            const action = $control.getAttribute('data-controls');

            switch (action) {
                case 'play':
                    animation.play();
                    break;
                case 'pause':
                    animation.pause();
                    break;
                case 'reset':
                    animation.currentTime = 0;
                    break;
                default:
                    break;
            }
        });
    })
}

$rotationElements.forEach($rotationElement => {
    const { rotation = 360 } = $rotationElement.dataset;

    const rotationAnimation = $rotationElement.animate(
        [
            { rotate: '0deg' },
            { rotate: `${rotation}deg` } // Standaard 360! Maar instelbaar via een attribuut.
        ],
        {
            duration: 3000,
            direction: 'alternate',
            fill: 'forwards',
            iterations: Infinity,
        }
    );

    handleControls(rotationAnimation);
});

// Zorg eerst dat de drie knoppen werken en de animatie (voor alle elementen kan controleren.)

const fadeInElements = document.querySelectorAll("[data-animation='fade-in']");

const fadeInAnimation = ($el) => {
    $el.animate([
        { opacity: 0 },
        { opacity: 1 }
    ], {
        duration: 400,
        iterations: 1,
        fill: 'forwards'
    });
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            fadeInAnimation(entry.target);
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: .5,
    rootMargin: "0px 0px"
})
// Je kan geen array of nodelist meegeven aan de observe methode!
fadeInElements.forEach(fadeInElement => {
    observer.observe(fadeInElement);
});