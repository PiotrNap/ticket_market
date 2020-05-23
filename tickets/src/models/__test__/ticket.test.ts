import { Ticket } from '../tickets';

it('implements optimistic concurrency control', async (done) => {
  // Create an instance of a ticket
  const ticket = Ticket.build({
    title: 'concert',
    price: 20,
    userId: '123',
  });

  // Save the ticket to the database
  await ticket.save();

  // fetch the ticket twice
  const firstInstance = await Ticket.findById(ticket.id);
  const secondInstance = await Ticket.findById(ticket.id);

  // make two separate changes to the tickets we fetched
  firstInstance!.set({ price: 30 });
  secondInstance!.set({ price: 40 });

  // save the first fetched ticked
  await firstInstance!.save();

  // save the second fetched ticket adn expect an error
  try {
    await secondInstance!.save();
  } catch (err) {
    return done(); // test completed
  }

  throw new Error('Should not reach this point');
});

it('increments the version number in multiple saves', async () => {
  const ticket = Ticket.build({
    title: 'concert',
    price: 10,
    userId: '123',
  });

  await ticket.save();
  expect(ticket.version).toEqual(0);
  await ticket.save();
  expect(ticket.version).toEqual(1);
  await ticket.save();
  expect(ticket.version).toEqual(2);
});
