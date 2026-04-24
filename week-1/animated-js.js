const $pizzaBoxes = document.querySelectorAll('[data-pizza]');

$pizzaBoxes.forEach($pizzaBox => {
    // console.log($pizzaBox);
    // console.log($pizzaBox.getAttribute('data-pizza'));
    const { pizza, crust } = $pizzaBox.dataset;
    // console.log($pizzaBox.dataset.crust);
});


// Selecteer alle elementen met data-animation -> loop hierover.
const $rotationElements = document.querySelectorAll("[data-animation='customRotation']");

$rotationElements.forEach($rotationElement => {
    console.log($rotationElement);
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

    rotationAnimation.currentTime = 500;
    rotationAnimation.pause();
});

// Zorg eerst dat de drie knoppen werken en de animatie (voor alle elementen kan controleren.)

// Uitbreiding: Zorg dat in de knop een attribuut is zodat je controle hebt welk element je pauzeert.