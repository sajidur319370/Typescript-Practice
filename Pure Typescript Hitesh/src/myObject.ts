type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  creditCardDetails?: number;
};

let myUser: User = {
  _id: "12345",
  name: "Sajid",
  email: "sajid@gmail.com",
  isActive: true,
  creditCardDetails: 1223234234,
};

// myUser._id = 123324324; // Read only
myUser.name = "Saif";
type cardNumber = {
  cardnumber: string;
};
type cardDate = {
  carddate: string;
};
type cardDetails = cardNumber &
  cardDate & {
    CVV: number;
  };
function createUser(user: User) {
  console.log(user);
}
createUser(myUser);

function createCourse(): { name: string; price: number } {
  return { name: "react", price: 34 };
}

export {};
