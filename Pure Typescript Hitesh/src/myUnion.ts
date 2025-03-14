type User = {
  name: string;
  id: number;
};
type Admin = {
  userName: string;
  id: number;
};

let sajid: User | Admin = { name: "Sajid", id: 261 };
sajid = { userName: "sajid@70", id: 261 };

function getDbId(id: number | string) {
  console.log(`Db id: ${id}`);
}

getDbId("2");
getDbId(7);

const data: (string | number | boolean)[] = [1, "2", false, 3, "4"];

export {};
