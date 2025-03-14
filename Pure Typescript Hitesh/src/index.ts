/* class User {
  private name: string;
  public email: string;
  readonly city: string = "Khulna";
  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
} */
class User {
  readonly city: string = "Khulna";
  protected _courseCount = 1;
  constructor(
    public name: string,
    public email: string // private userId: string
  ) {}

  private DeleteToken(): void {
    console.log("Token is Deleted");
  }
  get appleEmail(): string {
    return `Email:${this.email}`;
  }
  get courseCount(): number {
    return this._courseCount;
  }

  set courseCount(courserNum) {
    if (courserNum <= 1) {
      throw new Error("Course count should be more than 1");
    }
    this._courseCount = courserNum;
  }
}

class SubUser extends User {
  isFamily: boolean = true;
  changeCourseContent() {
    this._courseCount = 4;
  }
}
const sajid = new User("Sajid", "sa@gmail.com");
sajid.name;
// sajid.DeleteToken();
console.log(sajid);
