const classes = [
    ["history", "History", ["int", "wis"], ["History", "Investigation"]],
    ["pe", "Phys Ed", ["str", "dex"], ["Acrobatics", "Stealth"]],
    ["art", "Art", ["cha", "dex"], ["Perception", "Sleight of hand"]],
    ["geography", "Geography", ["wis", "int"], ["Nature", "Survival"]],
    ["maths", "Adv. Mathematics", ["int"], ["Arcana", "Investigation", "Insight"]],
    ["english", "Adv. English", ["cha"], ["Arcana", "Persuasion", "Deception"]],
    ["science", "Adv. Science", ["wis"], ["Animal handling", "Medicine", "Nature"]],
    ["rs", "Religious Studies", ["wis", "cha"], ["Religion", "Insight"]],
    ["ict", "I.C.T", ["int", "dex", "wis"], ["Investigation"]],
    ["home_eco", "Home Economics", ["dex"], ["Survival", "Performance", "Chef"]],
    ["drama", "Drama", ["cha", "str"], ["Athletics", "Deception"]],
    ["music", "Music", ["str", "dex"], ["Performance", "Sleight of hand"]],
    ["foreign", "Foreign Languages", ["wis", "cha"], ["Intimidation", "Can speak Common"]],
    ["business", "Business Studies", ["int", "cha"], ["Deception", "10 Gold"]],
    ["psychology", "Psychology", ["cha", "wis"], ["Insight", "Persuasion"]],
    ["re", "Resistant Materials", ["str", "int"], ["Sleight of hand", "A set of tools"]],
];

const abilityScores = [
    "Acrobatics",
    "Animal Handling",
    "Arcana",
    "Athletics",
    "Charisma",
    "Deception",
    "Dexterity",
    "History",
    "Insight",
    "Intelligence",
    "Intimidation",
    "Investigation",
    "Medicine",
    "Nature",
    "Perception",
    "Performance",
    "Persuasion",
    "Religion",
    "Sleight of Hand",
    "Stealth",
    "Survival",
    "Wisdom",
] 

let notifCounter = 0;
const wait = ms => new Promise(res => setTimeout(res, ms));

async function notif(message, level = null) {
    let notif = document.querySelector(".notification"), messageOut = '';
    switch(level) {
        case 'r':
            messageOut += "Error: ";
            break;
        case 'a':
            messageOut += "Warning: ";
            break;
        case 'g':
            messageOut += "Info: ";
            break;
        case 'default':
            break;
    }
    notif.classList.remove("hidden");
    document.querySelector(".notification .message").textContent  = messageOut + message;
    await wait(3000);
    notif.classList.add("hidden");

}

let outputClass = '';
const htmlClass = document.querySelector("main .classes");
classes.forEach(function(e) {
    if (htmlClass) {
        let input = document.createElement("input");
        input.setAttribute("type", "checkbox");
        input.setAttribute("name", e[0]);
        input.setAttribute("id", e[0]);
        input.setAttribute("value", e[0]);
        input.setAttribute("class", 'visually-hidden');
        htmlClass.appendChild(input);
        let label = document.createElement("label");
        label.setAttribute("for", e[0]);
        label.innerText = e[1];
        htmlClass.appendChild(label);
    }
});

let classesInput = document.querySelectorAll("main .classes input");
let classesCounter = 0;
classesInput.forEach(function(e) {
    e.addEventListener("click", function() {
        if (e.checked) {
            if (classesCounter < 5) {
                classesCounter++;
            } else {
                e.checked = false;
                if (notifCounter < 2) {
                    notifCounter++;
                } else {
                    notif('You are only allowed to select 5 classes', 'a');
                    notifCounter = 0;
                }
            }
        } else {
            classesCounter--;
        }
    });
});