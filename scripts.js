const form = document.querySelector('.form');
const formGroups = document.querySelectorAll('.form-group');
const navBack = document.querySelector('.nav-btns.back');
const navNext = document.querySelector('.nav-btns.next');
const navSubmit = document.querySelector('.nav-btns.submit');
const nameUrl = document.URL.split('#');
let hasName = false;

if (!nameUrl[1]) {
    hasName = false;
} else {
    hasName = true;
}


function showFirst() {
    formGroups.forEach(function(e, i) {
        if (hasName && e.classList.contains('start')) {
            e.classList.add('active');
            form.setAttribute('data-active', i);
            console.log(e);
        }
    });
}
showFirst();

function showGroup(num, isLast) {
    formGroups.forEach(function(e) {
        e.classList.remove('active');
    });
    formGroups[num].classList.add('active');
    navBack.classList.remove('hidden');
    if (isLast) {
        navNext.classList.add('hidden');
        navSubmit.classList.remove('hidden');
    } else if (formGroups[num].classList.contains('start')) {
        navBack.classList.add('hidden');
    } else {
        navNext.classList.remove('hidden');
        navSubmit.classList.add('hidden');
    }
}

function navBtn(next = true) {
    let current = form.getAttribute('data-active');
    let isLast = false;
    if (next) {
        current++;
        if (!formGroups[current + 1]) {
            isLast = true;
        }
    } else {
        current--;
    }
    form.setAttribute('data-active', current);
    showGroup(current, isLast);
}

navBack.addEventListener('click', function() {navBtn(false)});
navNext.addEventListener('click', function() {navBtn(true)});

// Guest list
const guestList = [
    'Jen',
    'Jack',
    'Liuli & Bethany',
    'Xiao & Hanchi',
    'Sharon & Chris',
    'Michael & Drew',
    'Vanessa & Cal',
    'Jean & David',
    'Abid',
    'Ben',
    'Greg',
    'George & Lydia',
    'Meg',
    'Sam',
    'Tom',
    'Tara',
];


if (hasName) {
    const invName = nameUrl[1];
    const nameInput = document.querySelector('#name');
    if (invName !== '') {
        nameInput.setAttribute('value', invName);
    }
} else {
    window.alert(`It seems the link you've gotten is broken.`);
}