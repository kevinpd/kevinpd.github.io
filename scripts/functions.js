// Delay function - Don't forget to use async func and use await to call wait
const wait = ms => new Promise(res => setTimeout(res, ms));

// Wait function
async function notif(message, level = null) {
    let notif = document.querySelector(".notification"), messageOut = '';
    if (notif) {
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
}

// Charmancer create fieldset for all array options
function fieldsetCreator(array, outputTo) {
    array.forEach(function(e) {
        if (outputTo) {
            let input = document.createElement("input");
            input.setAttribute("type", "checkbox");
            input.setAttribute("name", e[0]);
            input.setAttribute("id", e[0]);
            input.setAttribute("value", e[0]);
            input.setAttribute("class", 'visually-hidden');
            outputTo.appendChild(input);
            let label = document.createElement("label");
            label.setAttribute("for", e[0]);
            label.innerText = e[1];
            outputTo.appendChild(label);
        }
    });
}

// Charmancer when options selected
function fieldsetSelect(input, max, notifMessage, notifStatus) {
    let classesCounter = 0;
    let notifCounter = 0;
    input.forEach(function(e) {
        e.addEventListener("click", function() {
            if (e.checked) {
                if (classesCounter < max) {
                    classesCounter++;
                } else {
                    e.checked = false;
                    if (notifCounter < 2) {
                        notifCounter++;
                    } else {
                        notif(notifMessage, notifStatus);
                        notifCounter = 0;
                    }
                }
            } else {
                classesCounter--;
            }
        });
    });
};
