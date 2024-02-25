//hello admin

const usernames:string[]=['guju','anu','rimi','admin','mibi','ayshu','leeju']

for(const username of usernames){
    if (username=== 'admin'){
        console.log('hello admin, would you like to see a status report ?')
    }else{
        console.log(`hello${username},thank you for logging in again.`)
    }
}