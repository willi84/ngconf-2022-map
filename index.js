console.log('hier')

var svgholder = document.getElementById("svg");
console.log(svgholder)

// svgholder.addEventListener('load', function(){ 
//     console.log('loaded')
//     console.log('cibtebt kkiiad')
//     const svg = document.querySelector('svg');

//     console.log(svg)
//     const btnFood = document.querySelector('#LEGEND_11');
//     console.log(btnFood)
//     btnFood.addEventListener('click', () => {
//         let labels = document.querySelectorAll('[id=~"FOOD_"');
//         console.log(labels)
//     })
// });
const changeElements = (button, selector, css) => {
    const btnFood = document.querySelector(button);
    btnFood.addEventListener('click', () => {
        let labels = document.querySelectorAll(`[id^="${selector}"]`);
        labels.forEach(label => {
             if(label.classList.contains(css)){
                label.classList.remove(css)
                btnFood.classList.remove('not-active');
            } else {
                label.classList.add(css)
                btnFood.classList.add('not-active');

             }
        });
    })
}
const showElements = (button, selector) => {
    changeElements(button, selector, 'hidden');
}
const focusElements = (button, selector) => {
    changeElements(button, selector, 'not-active');
}

window.addEventListener('DOMContentLoaded', (event) => {
    showElements('#LEGEND_25', 'FOOD_');
    focusElements('#LEGEND_1', 'MEETING_');
    focusElements('#LEGEND_2', 'RESTAURANT_');
});
