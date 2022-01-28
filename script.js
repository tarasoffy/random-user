let users = ['John', 'Valentin', 'Bob', 'Keny', 'Bill']
let usersSub = ['Vinny', 'Antuan', 'Jimm', 'Dick', 'Mark']
const PERCENT = 65 

function random() {
    let randomUser = Math.round(Math.random() * users.length);
    let randomUsersSub = Math.round(Math.random() * usersSub.length);
    let randomNum = Math.round(Math.random() * 100)
    if(randomNum <= PERCENT) {
        console.log(usersSub[randomUsersSub])
    } else {
        console.log(users[randomUser])
    }
}

random()




