
var exp = 0;
var lvl = 1;
var height = 3;
var money = 200;
var i = 0;

var expspan = document.getElementById('exp');
var lvlspan = document.getElementById('lvl');
var heightspan = document.getElementById('height');
var moneyspan = document.getElementById('money');

raiseEXP();

expspan.innerText = exp;
lvlspan.innerText = lvl;
heightspan.innerText = height;
moneyspan.innerText = money;

/*function raiseEXP() {
    setTimeout(function(){
        while (i < 100) {
        exp++;
        expspan.innerText  = exp;
        if (exp >= 100) {
            lvl++;
            lvlspan.innerText = lvl;
            exp = 0;
        }
    }
    }, 5000)
}

*/