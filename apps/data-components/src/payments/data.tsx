type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

export const payments: Payment[] = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
  },
  {
    id: "3f9b8c7d",
    amount: 200,
    status: "success",
    email: "user@example.com",
  },
  {
    id: "1a2b3c4d",
    amount: 50,
    status: "failed",
    email: "user2@example.com",
  },
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
  },
  {
    id: "3f9b8c7d",
    amount: 200,
    status: "success",
    email: "user@example.com",
  },
  {
    id: "1a2b3c4d",
    amount: 50,
    status: "failed",
    email: "user2@example.com",
  },
];
