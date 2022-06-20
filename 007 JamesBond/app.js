// const tagH1 = document.querySelector('h1');
// const tagHK = document.querySelector('h1 + h1');

// const tagAll = document.querySelectorAll('h1');

// console.log(tagH1);
// console.log(tagHK);
// console.log(tagAll);

// tagAll.forEach(h1 => {
//     console.log(h1)
//     h1.style.color = 'pink';
//     h1.style.backgroundColor = 'black';
//     h1.innerText = 'Valio';
//     h1.innerHTML ='<i>Valio Valio</i>';
// });


// const but = document.querySelector('button');

// but.addEventListener('click', () => {
//     console.log('atliktas paspaudimas');
//     but.style.color = but.style.color == 'red' ? 'black' : 'red';
// });

// tagAll.forEach(h1 => {

//     h1.addEventListener('click', e => {
//         h1.style.color = h1.style.color == 'red' ? 'black' : 'red';
//         console.log(e);
//     });

// });



// document.querySelector('a').addEventListener('click', e => {
//     e.preventDefault();
//     e.target.style.color = 'red';
// });


document.querySelector('#vaikas').addEventListener('click', e => {
    e.stopPropagation();
    console.log('vaikas');
    e.target.style.backgroundColor = 'red';
});

document.querySelector('#tevas').addEventListener('click', e => {
    console.log('tevas', e.target);
    document.querySelector('#tevas').style.backgroundColor = 'red';
});

