//no users 

const $usernames:string[]=['guju','anu','rimi','admin','mibi','ayshu','leeju']

if ($usernames.length === 0 ){
    console.log("we need to find some users!")
}
for(const $username of $usernames){
    if ($username==='admin'){
        console.log('hello admin, would you like to see a status report?')
    }else{
        console.log(`hello ${$username}, thank you for loggin in again.`)
    }
}