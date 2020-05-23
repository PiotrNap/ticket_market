import {
  Publisher,
  ExpirationCompleteEvent,
  Subjects,
} from '@pntickets/common';

export class ExpirationCompletePublisher extends Publisher<
  ExpirationCompleteEvent
> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
