const users = [
{ name: "John", active: true },
{ name: "Jane", active: false },
{ name: "Mike", active: true },
];
const userNameHaveJ = users.filter(users=> users.name.includes("J"));
console.log(userNameHaveJ);