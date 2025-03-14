interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  startTrial(): string;
  getCoupon(couponName: string, value: number): number;
}

interface User {
  githubToken: string;
}

interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

const sajid: Admin = {
  dbId: 22,
  email: "sa@gmail.com",
  userId: 33432,
  startTrial: () => {
    return "Trial started...";
  },
  getCoupon: (name: "sajid70", off: 70) => {
    return 70;
  },
  githubToken: "wder",
  role: "admin",
};

sajid.email = "a@gmail.com";

export {};
