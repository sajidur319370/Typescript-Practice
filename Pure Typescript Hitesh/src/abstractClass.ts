abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}
  abstract getSajid(): void;
  abstract getReel(): number;
}
class Instagram extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter);
  }
  getSajid(): void {
    console.log("Sajid");
  }
  getReel(): number {
    return 5;
  }
}
const myCamera = new Instagram("test", "Test", 4);
