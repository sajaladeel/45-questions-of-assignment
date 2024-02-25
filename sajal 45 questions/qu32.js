"use strict";
//Checking Usernames: 
const current_users = ['tomi', 'gogi', 'foofi', 'chintu', "sheela"];
const new_users = ['didi', "piku", "mani", "jiji", "lili"];
const LC_current_users = current_users.map(username => username.toLocaleLowerCase());
for (const new_username of new_users) {
    const LC_new_users = new_username.toLocaleLowerCase();
    if (LC_current_users.includes(LC_new_users)) {
        console.log(`${new_username} is already taken,please choose a different one.`);
    }
    else {
        console.log(`username${new_username} is available.`);
    }
}
