import Link from 'next/link';
import Head from 'next/head';
import { Fragment } from 'react';
import paths from '../../paths';

const DashboardIndex = ({
  currentUser,
  tickets,
  title = 'Welcome to Your Dashboard',
}) => {
  const ticketList = tickets.map((ticket) => {
    return (
      <tr key={ticket.id}>
        <td>{ticket.title}</td>
        <td>{ticket.price}</td>
        <td>
          <Link href='/tickets/[ticketId]' as={`/tickets/${ticket.id}`}>
            <a>View</a>
          </Link>
        </td>
      </tr>
    );
  });

  return (
    <Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      <div>
        <h1>Tickets</h1>
        <table className='table'>
          <thead>
            <tr>
              <th>Title</th>
              <th>Price</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>{ticketList}</tbody>
        </table>
      </div>
    </Fragment>
  );
};

DashboardIndex.getInitialProps = async (context, client, currentUser) => {
  const { data } = await client.get(`${paths.tickets}`);

  return { tickets: data };
};

export default DashboardIndex;
