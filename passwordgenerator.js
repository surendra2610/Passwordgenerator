const passwordbox=document.getElementById("password");
const length=12;
const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase="abcdefghijklmnopqrstuvwxyz";
const numbers="0123456789";
const symbols="!@#$%^&*()?/,.|\}{][<>`~";
const characters=uppercase+lowercase+numbers+symbols;

function createpassword(){
    let password="";
    password=password+uppercase[Math.floor(Math.random()*uppercase.length)];
    password=password+lowercase[Math.floor(Math.random()*lowercase.length)];
    password=password+numbers[Math.floor(Math.random()*numbers.length)];
    password=password+symbols[Math.floor(Math.random()*symbols.length)];
    while(length>password.length)
        {
            password=password+characters[Math.floor(Math.random()*characters.length)];
        }
        passwordbox.value=password;
}
function copypassword(){
    password.select()
    document.execCommand("copy");
}
