import { Subjects } from './Subjects';

export interface TicketUpdatedEvent {
  subject: Subjects.TICKET_UPDATED;
  data: {
    id: string;
    title: string;
    price: number;
    userId: string;
  };
}
