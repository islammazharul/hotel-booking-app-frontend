import { useQuery } from "react-query";
import * as apiClient from "@/api/hotelApi";
import TicketCard from "@/components/TicketCard";
import { ITicket } from "@/types/ticketType";

const AdminPage = () => {
  const { data: tickets, isLoading } = useQuery(
    "fetchTickets",
    apiClient.fetchSupportTickets,
    { onError: () => {} }
  );
  console.log(tickets);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {tickets?.map((ticket: ITicket) => (
        <TicketCard key={ticket._id} ticket={ticket} isLoading={isLoading} />
      ))}
    </div>
  );
};

export default AdminPage;
