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
const hoverElements = (button, data, css) => {
    const btnFood = document.querySelector(button);
    const selector = data.prefix;
    console.log(data);
    btnFood.classList.add('full-sensitive');
    const id = data.id ? ` > :not(#${data.id})` : ''
    let elements = [];
    if(data.id){
        elements = document.querySelectorAll(`svg #map > :not(#LABELS):not([id^="${selector.replace(/_$/, '')}"]) ${id}, svg #map > #LABELS > :not([id^="${selector.replace(/_$/, '')}"]) ${id}`);
    } else {
        elements = document.querySelectorAll(`svg #map > :not(#LABELS):not([id^="${selector.replace(/_$/, '')}"]), svg #map > #LABELS > :not([id^="${selector.replace(/_$/, '')}"])`);
    }
    // const elements = document.querySelectorAll(`svg #map :not([id^="${selector.replace(/_$/, '')}"]) :not([id^="${selector}"])`);
    // btnFood.addEventListener('click', () => {
    btnFood.addEventListener('mouseover', () => {
        elements.forEach(element => {
            element.classList.add('not-highlight')
        });
    })
    btnFood.addEventListener('mouseout', () => {
        elements.forEach(element => {
            element.classList.remove('not-highlight')
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

    fetch('./data.json')
    .then(response => response.json())
    .then(json => {
        const data = json['LEGEND'];
        const keys = Object.keys(json['LEGEND'])
       keys.forEach(key => {
            hoverElements(`#${key}`, data[key], `.highlight`)
        });
    });
    // showElements('#LEGEND_25', 'FOOD_');
    // // hoverElements('#LEGEND_25', 'FOOD_', `.highlight`)
    // focusElements('#LEGEND_1', 'MEETING_');
    // focusElements('#LEGEND_2', 'RESTAURANT_');
});
