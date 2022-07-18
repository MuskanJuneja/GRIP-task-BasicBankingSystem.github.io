
if (localStorage.length > 0) {
    var users = JSON.parse(localStorage.getItem('users'));
    var transhist = JSON.parse(localStorage.getItem('history'));
}
else {
    var users = [{ name: "Kartik", money: 10000 },
    { name: "Muskan", money: 10000 },
    { name: "Renu", money: 10000 },
    { name: "Raghav", money: 10000 },
    { name: "Gagan", money: 10000 },
    { name: "Disha", money: 10000 },
    { name: "Ishika", money: 10000 },
    { name: "Manish", money: 10000 },
    { name: "Lam", money: 10000 },
    { name: "Gap", money: 10000 }];
    var transhist = [];
}
const display2 = () => {
    var write2 = document.getElementById('write2');
    var s = "";
    if (localStorage.length > 0) {
        users = JSON.parse(localStorage.getItem('users'));
    }
    for (i of users) {
        s = s + `<tr> <td class="p-2 bg-slate-300"> ${i.name} </td> <td class="p-2 bg-slate-300"> ${i.money} </td> </tr>`;
    }
    write2.innerHTML = s;
}
const display = () => {
    var write = document.getElementById('Write');
    var s = "";
    transhist = transhist = JSON.parse(localStorage.getItem('history'));
    for (let i of transhist) {
        s = s + `<p class="my-3 font-semibold text-lg"> ${i} </p>`;
    }
    write.innerHTML = `<p> ${s} </p>`;
}
const imp = () => {
    if (localStorage.length > 0) {
        display();
    }
}
const Transfer = () => {
    var to = document.getElementById("to").value;
    var from = document.getElementById("from").value;
    var amt = document.getElementById("amt").value;
    if (to != "" && from != "" && amt != "") {
        var a=validation();
        if (a) {
            for (let i of users) {
                if (i.name == to) {
                    i.money = parseInt(i.money) + parseInt(amt);
                }
                if (i.name == from) {
                    i.money = parseInt(i.money) - parseInt(amt);
                }
            }
            var s = "💸 Transfer from " + from + " to " + to + " of Rs  " + amt;
            transhist.push(s);
            localStorage.setItem('history', JSON.stringify(transhist));
            localStorage.setItem('users', JSON.stringify(users));
            document.getElementById('to').value = "";
            document.getElementById('from').value = "";
            document.getElementById('amt').value = "";
            display();
        }
    } else {
        window.alert("Enter details");
    }
}
function validation() {
    var to = document.getElementById("to").value;
    var from = document.getElementById("from").value;
    var amt = document.getElementById("amt").value;
    var flag = 0;
   if (localStorage.length > 0) {
        users = JSON.parse(localStorage.getItem('users'));
    }
    var balfro = 0;
    for (let i of users) {
        if (i.name==to) {
            flag = flag + 1;
            break;
        }
    }
    for(let i of users){
        if (i.name==from) {
            flag = flag + 1;
            balfro = parseInt(i.money);
            break;
        }
    }
    if (flag != 2) {
        window.alert("Enter correct sender/receiver");
        document.getElementById('to').value = "";
        document.getElementById('from').value = "";
        document.getElementById('amt').value = "";
        return false;
    }
    else if (balfro < amt) {
        window.alert("Insufficient balance");
        document.getElementById('to').value = "";
        document.getElementById('from').value = "";
        document.getElementById('amt').value = "";
        return false;
    }
    else {
        return true;
    }
}
