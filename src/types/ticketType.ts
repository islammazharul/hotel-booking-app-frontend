export type ITicket = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  status?: "open" | "pending" | "resolved";
  createdAt?: Date;
};
