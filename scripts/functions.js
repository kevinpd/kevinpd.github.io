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
function fieldsetCreator(array, outputTo, isClass = false) {
    array.forEach(function(e) {
        if (outputTo) {
            let input = document.createElement("input");
            input.setAttribute("type", "checkbox");
            input.setAttribute("name", e[0]);
            input.setAttribute("id", e[0]);
            input.setAttribute("value", e[0]);
            input.setAttribute("class", 'visually-hidden');
            // if is class add custom attribute data skill to pass to selector
            if (isClass) {
                input.setAttribute("data-skill", e[2][0]);
            }
            outputTo.appendChild(input);
            let label = document.createElement("label");
            label.setAttribute("for", e[0]);
            label.innerText = e[1];
            outputTo.appendChild(label);
        }
    });
}

// Charmancer when options selected
function fieldsetSelect(input, max, notifMessage, notifStatus, isClass = false) {
    let classesCounter = 0;
    let notifCounter = 0;
    if (isClass) {
        var str = 0, dex = 0, con = 0, int = 0, wis = 0, cha = 0;
    }
    input.forEach(function(e) {
        e.addEventListener("click", function() {
            if (e.checked) {
                if (classesCounter < max) {
                    classesCounter++;
                    if (isClass) {
                        switch (e.getAttribute("data-skill")) {
                            case 'str':
                                str++;
                                if (str >= 2) {
                                    input.forEach(function(b) {
                                        if (b.getAttribute("data-skill") === e.getAttribute("data-skill") && !b.checked) {
                                            b.setAttribute("disabled", true);
                                        }
                                    })
                                }
                                break;
                            case 'dex':
                                dex++;
                                if (dex >= 2) {
                                    input.forEach(function(b) {
                                        if (b.getAttribute("data-skill") === e.getAttribute("data-skill") && !b.checked) {
                                            b.setAttribute("disabled", true);
                                        }
                                    })
                                }
                                break;
                            case 'con':
                                con++;
                                if (con >= 2) {
                                    input.forEach(function(b) {
                                        if (b.getAttribute("data-skill") === e.getAttribute("data-skill") && !b.checked) {
                                            b.setAttribute("disabled", true);
                                        }
                                    })
                                }
                                break;
                            case 'int':
                                int++;
                                if (int >= 2) {
                                    input.forEach(function(b) {
                                        if (b.getAttribute("data-skill") === e.getAttribute("data-skill") && !b.checked) {
                                            b.setAttribute("disabled", true);
                                        }
                                    })
                                }
                                break;
                            case 'wis':
                                wis++;
                                if (wis >= 2) {
                                    input.forEach(function(b) {
                                        if (b.getAttribute("data-skill") === e.getAttribute("data-skill") && !b.checked) {
                                            b.setAttribute("disabled", true);
                                        }
                                    })
                                }
                                break;
                            case 'cha':
                                cha++;
                                if (cha >= 2) {
                                    input.forEach(function(b) {
                                        if (b.getAttribute("data-skill") === e.getAttribute("data-skill") && !b.checked) {
                                            b.setAttribute("disabled", true);
                                        }
                                    })
                                }
                                break;
                        }
                    }
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
                if (isClass) {
                    switch (e.getAttribute("data-skill")) {
                        case 'str':
                            str--;
                            if (str < 2) {
                                input.forEach(function(b) {
                                    if (b.getAttribute("data-skill") === e.getAttribute("data-skill")) {
                                        b.removeAttribute("disabled");
                                    }
                                })
                            }
                            break;
                        case 'dex':
                            dex--;
                            if (dex < 2) {
                                input.forEach(function(b) {
                                    if (b.getAttribute("data-skill") === e.getAttribute("data-skill")) {
                                        b.removeAttribute("disabled");
                                    }
                                })
                            }
                            break;
                        case 'con':
                            con--;
                            if (con < 2) {
                                input.forEach(function(b) {
                                    if (b.getAttribute("data-skill") === e.getAttribute("data-skill")) {
                                        b.removeAttribute("disabled");
                                    }
                                })
                            }
                            break;
                        case 'int':
                            int--;
                            if (int < 2) {
                                console.log(int);
                                input.forEach(function(b) {
                                    if (b.getAttribute("data-skill") === e.getAttribute("data-skill")) {
                                        b.removeAttribute("disabled");
                                    }
                                })
                            }
                            break;
                        case 'wis':
                            wis--;
                            if (wis < 2) {
                                input.forEach(function(b) {
                                    if (b.getAttribute("data-skill") === e.getAttribute("data-skill")) {
                                        b.setAttribute("disabled");
                                    }
                                })
                            }
                            break;
                        case 'cha':
                            cha--;
                            if (cha < 2) {
                                input.forEach(function(b) {
                                    if (b.getAttribute("data-skill") === e.getAttribute("data-skill")) {
                                        b.removeAttribute("disabled");
                                    }
                                })
                            }
                            break;
                    }
                }
            }
        });
    });
};

// Whenever Accordions are used
let accordion = document.querySelectorAll('.accordion');
if (accordion) {
    accordion.forEach(function(e) {
        e.addEventListener("click", function() {
            if (e.classList.contains("open")) {
                e.classList.remove("open");
                e.querySelector(".body").style.maxHeight = null;
            } else {
                e.classList.add("open");
                e.querySelector(".body").style.maxHeight = e.scrollHeight + "px";
            }
        });
    });
}