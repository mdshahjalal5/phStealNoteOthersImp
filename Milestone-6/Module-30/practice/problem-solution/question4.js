// ** Write an arrow function where it will do the following: a) It will take an array where the array elements will be thename of your friends b) Check if the length of each element is even, push elementswith even length to a new array and return the result Print the result.

const friends = ['Alim','Fahim','Sabu','Babul','Kabul','Chulbul','tabu','gabu'];

const friendsEven = [];

const myFriends = (friends) => {
    for (const friend of friends) {
        // console.log(friend)
        friend.length % 2 === 0 && friendsEven.push(friend);
    }

}

myFriends(friends);

console.log(friendsEven)