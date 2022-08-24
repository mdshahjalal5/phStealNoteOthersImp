// ** chain chain kore data pawa!

const users = [ {id: 1, name: 'abul', job: {
    morning: 'doc',
    evening: 'Hero'
}} ]

// ** Optional chaining example one
console.log(users[0].job?.morning);

const data = {
    count: 5000,
    data: [
        {id: 1, name: 'babul', job: 'leader'},
        {id: 2, name: 'dabul', job: 'leader'},
    ]
}

// ** chaining

console.log(data.data[1].name)


const user = {
    id: 5001,
    name: 'Thomas alba edison',
    address: {
        street: {
            first: '35/A kochukhet lane',
            second: 'third floor',
            third: 'right side'
        },
        postOffice: 'cantonment',
        city: 'Dhaka'
    }
} 

// optional chaining 

const userFloor = user.address.street?.second;

console.log(userFloor);