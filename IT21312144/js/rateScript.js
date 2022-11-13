function chengtable(data) {
    if (data == "b1") {
        document.getElementById("SavingAcc").style.backgroundColor = "white";
        document.getElementById("timedep").style.backgroundColor = "black";
        document.getElementById("debcard").style.backgroundColor = "black";
        document.getElementById("timedep").style.color = "white";
        document.getElementById("SavingAcc").style.color = "black";
        document.getElementById("debcard").style.color = "white";
        Tables("saving");
    } else if (data == "b2") {
        document.getElementById("timedep").style.backgroundColor = "white";
        document.getElementById("SavingAcc").style.backgroundColor = "black";
        document.getElementById("debcard").style.backgroundColor = "black";
        document.getElementById("timedep").style.color = "black";
        document.getElementById("SavingAcc").style.color = "white";
        document.getElementById("debcard").style.color = "white";
        Tables("Time");
    } else if (data == "b3") {
        document.getElementById("debcard").style.backgroundColor = "white";
        document.getElementById("SavingAcc").style.backgroundColor = "black";
        document.getElementById("timedep").style.backgroundColor = "black";
        document.getElementById("timedep").style.color = "white";
        document.getElementById("SavingAcc").style.color = "white";
        document.getElementById("debcard").style.color = "black";
        Tables("deb");
    }
}

var savingAccName = ["Marathon Saver", "Employee Banking", "My Dream Account"];
var timedepName = ["Fixed Deposits"];
var debcardName = ["Personal Banking Debit Card", "Priority Banking Debit Card"];

var SavingAccDetail = ["Get 24/7,No monthly maintenance fee", "Get 24/7,No monthly maintenance fee", "Get 24/7,No monthly maintenance fee"];
var timedepDetail = ["Obtain a facility against your deposit and enjoy automatic renewal on deposits.,We accommodate varied deposit periods and a wide range of currencies for your Fixed Deposits."];
var debcardDetail = ["Secure hassle-free payments,", "Exclusive debit card offers"];

var SavingAccRates = ["1.2%", "2.2%", "5.5%"];
var timedepRates = ["8.8%"];
var debcardRates = ["4.4%", "4.8%"];

function Tables(name) {
    if (name == "saving") {
        var T = '<table border="1" id="rateTable"><tr><th>Name</th><th>Details</th><th>Interest Rate</th></tr>';
        for (let index = 0; index < savingAccName.length; index++) {
            T = T + "<tr><td><b>" + savingAccName[index] + "</b></td><td>" + SavingAccDetail[index] + "</td><td>" + SavingAccRates[index] + "</td></tr>";
        }
        document.getElementById("T1").innerHTML = T;
    } else if (name == "Time") {
        var T = '<table border="1" id="rateTable"><tr><th>Name</th><th>Details</th><th>Interest Rate</th></tr>';
        for (let index = 0; index < timedepName.length; index++) {
            T = T + "<tr><td><b>" + timedepName[index] + "</b></td><td>" + timedepDetail[index] + "</td><td>" + timedepRates[index] + "</td></tr>";
        }
        document.getElementById("T1").innerHTML = T;
    } else if (name == "deb") {
        var T = '<table border="1" id="rateTable"><tr><th>Name</th><th>Details</th><th>Interest Rate</th></tr>';
        for (let index = 0; index < debcardName.length; index++) {
            T = T + "<tr><td><b>" + debcardName[index] + "</b></td><td>" + debcardDetail[index] + "</td><td>" + debcardRates[index] + "</td></tr>";
        }
        document.getElementById("T1").innerHTML = T;
    }
}