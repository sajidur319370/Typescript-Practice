const date: readonly [d: number, m: number, y: number] = [1, 2, 3];
console.log(date);
enum ServerResponseStatus {
  error = 500,
  success = 200,
}
console.log(ServerResponseStatus);

interface ServerResponses {
  result: ServerResponseStatus;
  data: string[];
}

function getServerResponse(): ServerResponses {
  return {
    result: ServerResponseStatus.error,
    data: ["First Item", "Second Item"],
  };
}

const response: ServerResponses = getServerResponse();
console.log(response);

enum UserRole {
  Employee,
  Admin,
  Manager,
}

type User = {
  name: string;
  role: UserRole;
};

function createUser(user: User): User {
  return user;
}
const user: User = createUser({
  name: "sajid",
  role: 1,
});

console.log(user);
type Student = {
  name: string;
  roll: number;
};
let sajidString: string = '{"name": "sajid", "roll": 1}';
let mofizString: string = '{"name": "mofiz", "roll": 2}';

let sajidObj = JSON.parse(sajidString);
let mofizObj = JSON.parse(mofizString);

let sajid = sajidObj as Student;
let mofiz = mofizObj as Student;

console.log(sajid);
console.log(mofiz);
enum Occupation {
  student = "student",
  teacher = "teacher",
}

type People = {
  name: string;
  occupation: Occupation;
};
const occupationVal = "student";
const mySelf: People = {
  name: "Sajid",
  occupation: occupationVal as Occupation,
};

console.log(mySelf);
