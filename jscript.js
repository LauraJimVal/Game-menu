
// home (work)
function enlaceWork() {
    var x = window.matchMedia("(min-width: 800px)");
    if (x.matches) {
        // If media query matches
        location.href = "work.html";
    }
}

enlaceWork(x); // Call listener function at run time
x.addListener(enlaceWork); // Attach listener function on state changes

function enlaceWork2() {
    var a = window.matchMedia("(max-width: 800px)");
    if (a.matches) {
        // If media query matches
        location.href = "work.html";
    }
}

enlaceWork2(a); // Call listener function at run time
x.addListener(enlaceWork2); // Attach listener function on state changes

// home (About)

function enlaceAbout() {
    var ab = window.matchMedia("(min-width: 800px)");
    if (ab.matches) {
        // If media query matches
        location.href = "about.html";
    }
}

enlaceAbout(ab); // Call listener function at run time
ab.addListener(enlaceAbout); // Attach listener function on state changes

function enlaceAbout() {
    location.href = "about.html";
}

function enlaceAbout2() {
    var ab2 = window.matchMedia("(max-width: 800px)");
    if (ab2.matches) {
        // If media query matches
        location.href = "about.html";
    }
}

enlaceAbout2(ab2); // Call listener function at run time
ab2.addListener(enlaceAbout2); // Attach listener function on state changes

function enlaceInicio() {
    location.href = "index.html";
}

// work

function enlaceWork_work1() {
    location.href = "work_piano/index.html";
}

function enlaceWork_work2() {
    location.href = "work_menu_juego/index.html";
}

function enlaceWork_work3() {
    location.href = "work_scape/index.html";
}