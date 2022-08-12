
const myFriends = ['Abdullah','Hasan','Jon','AbulKabul','doe'];


const tineyFriend = (myFriends)=>{
    let tineyFriend = myFriends[0];
    let myFriend = [];
    for (const friend of myFriends) {
        
        if (friend.length < tineyFriend.length) {
            tineyFriend = friend;
            
        }
        
    }
   
    return tineyFriend;
}

const tFriend = tineyFriend(myFriends);

console.log(tFriend);

