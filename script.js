// conditionals oppgave

const userName = "Tom";
const userAge = 18;

let userIsAdmin = false;
let userIsLoggedIn = false;
let userIsBlocked = false;

let goToPage = "";

/*
Anbefaler å kopiere hele oppgaveteksten inn i VSCode


Lag en conditional som sjekker om userName eksisterer (har innhold), at brukeren er over 18, og at user ikke er blocked.
Hvis en eller flere av disse ikke oppfylles, skal du console.log() en feilmelding.
Hvis alle kriterier er oppfylt, sett variabelen goToPage til "/home", og endre userIsLoggedIn til true.
Hvis brukeren er admin, endre variabelen goToPage til "/admin" istedenfor "/home".
 
 
console.log(goToPage) til slutt for å se at bruker har blitt sendt til rett side.
 
endre på verdiene i variablene for å se at din conditional kan håndtere alle cases


Husk å levere inn med link til github repo!


Lykke til, og spør meg gjerne på Discord hvis dere står fast eller lurer på noe :) 

sends admins to admin page
*/

/*
 !I also chose to try to make the website actually function in the way that the assignment explained instead of
 !just console logging the outcomes
 *if you want to run this just uncomment this and make the other code into a comment
 */
/*
//redirect to admin side

function adminSiteRedirect() {
    window.location = `admin.html`;
}
//redirect to home site
function homeSiteRedirect() {
    window.location = `home.html`;
}
//make user go away
function goAway() {
    window.location = `somethingWrong.html`;
}
//logic to determine where to send user/admin
if (userIsAdmin == true) {
    adminSiteRedirect();
} else if (userName.length > 0 && userAge >= 18 && userIsBlocked === false) {
    homeSiteRedirect();
    let userIsLoggedIn = true;
} else {
    goAway();
}
*/

if (userIsAdmin == true) {
    let goToPage = "admin";
    console.log(goToPage);
} else if (userName.length > 0 && userAge >= 18 && userIsBlocked === false) {
    let goToPage = "home";
    let userIsLoggedIn = true;
    console.log(goToPage, userIsLoggedIn);
} else {
    console.log("something went wrong");
}
