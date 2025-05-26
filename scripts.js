// Guest list
const guestList = [
    'Jen',
    'Jack',
    'Liuli%20&%20Bethany',
    'Xiao%20&%20Hanchi',
    'Sharon%20&%20Chris',
    'Michael%20&%20Drew',
    'Vanessa%20&%20Cal',
    'Jean%20&%20David',
    'Abid',
    'Ben',
    'Greg',
    'George%20&%20Lydia',
    'Meg',
    'Sam',
    'Tom',
    'Tara',
];

const friendsList = [
    'Abid',
    'Ben',
    'Greg',
    'George%20&%20Lydia',
    'Meg',
    'Sam',
    'Tom',
    'Tara',
]

const form = document.querySelector('.form');
const formGroups = document.querySelectorAll('.form-group');
const navBack = document.querySelector('.nav-btns.back');
const navNext = document.querySelector('.nav-btns.next');
const navSubmit = document.querySelector('.nav-btns.submit');
const nameUrl = document.URL.split('#')[1];
let hasName = false;

if (!(nameUrl && guestList.includes(nameUrl))) {
    hasName = false;
} else {
    hasName = true;
    if (friendsList.includes(nameUrl)) {
        document.querySelector('.accomodation-text').innerHTML = 'Monday 8th - Friday 12th';
    }
}

function showFirst() {
    formGroups.forEach(function(e, i) {
        if (hasName && e.classList.contains('start')) {
            e.classList.add('active');
            form.setAttribute('data-active', i);
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

if (hasName) {
    const nameInput = document.querySelector('#name');
    if (nameUrl !== '') {
        nameInput.setAttribute('value', nameUrl);
    }
} else {
    window.alert(`It seems the link you've gotten is broken.`);
}

// More info btn
const moreInfo = document.querySelector('.more-info');
const moreInfoBtn = document.querySelector('.more-info-btn');
const navBtnWrapper = document.querySelector('.nav-btn-wrapper');
const moreInfoBack = document.querySelector('.more-info-back');

moreInfoBtn.addEventListener('click', function() {
    moreInfo.classList.add('active');
    navBtnWrapper.classList.add('hidden');
    formGroups.forEach(function(e) {
        e.classList.remove('active');
    });
});

moreInfoBack.addEventListener('click', function() {
    moreInfo.classList.remove('active');
    navBtnWrapper.classList.remove('hidden');
    formGroups.forEach(function(e) {
        e.classList.remove('active');
        if (e.classList.contains('start')) {
            e.classList.add('active');
        }
    });
});