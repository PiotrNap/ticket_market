import React, { Fragment } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { device } from '../styles/device';
import theme from '../styles/theme';
import styled from 'styled-components';

const { colors, fontSizes } = theme;

const MainSection = styled.section`
  display: flex;
  margin: 3rem auto;
  align-items: center;
  width: 80%;
`;

const Dashboard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  width: 80%;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  h1 {
    color: ${colors.purple};
    font-weight: 600;
  }
`;

const Table = styled.table`
  width: 80%;
  /* text-align: center; */
`;

const TableHead = styled.thead``;

const TableRow = styled.tr`
  padding: 5rem 5rem;
  .list {
    border-bottom: 2px solid ${colors.lightPurple} !important;
  }
`;

const TableHeader = styled.th`
  font-size: ${fontSizes.Xlarge};
  border-bottom: 2px solid ${colors.purple};
`;

const TableBody = styled.tbody`
  margin-left: 0.2rem;
  margin-right: 0.2rem;
`;

const TableCell = styled.td`
  text-align: center;
  border-bottom: 2px solid ${colors.transPurple};
  padding: 1rem 1rem;
  .center {
    text-align: center;
  }
`;

const StyledButton = styled.button`
  color: ${colors.purple};
  background-color: transparent;
  font-size: ${fontSizes.medium};
  font-weight: 600;

  :hover,
  :focus {
    text-decoration: underline;
    text-decoration-color: ${colors.purple};
  }
`;

const UserDashboard = ({
  currentUser,
  tickets,
  title = 'Preview the tickets list.',
}) => {
  const ticketList = tickets.map((ticket) => {
    return (
      <TableRow key={ticket.id} className='list'>
        <TableCell className='center'>{ticket.title}</TableCell>
        <TableCell>{ticket.price}</TableCell>
        <TableCell>
          <Link href='/tickets/[ticketId]' as={`/tickets/${ticket.id}`}>
            <StyledButton>View</StyledButton>
          </Link>
        </TableCell>
      </TableRow>
    );
  });

  return (
    <Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      <MainSection>
        <Dashboard>
          <Header>
            <h1>Tickets List</h1>
          </Header>

          <Table>
            <TableHead>
              <TableRow>
                <TableHeader>Title</TableHeader>
                <TableHeader>Price</TableHeader>
                <TableHeader>Link</TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>{ticketList}</TableBody>
          </Table>
        </Dashboard>
      </MainSection>
    </Fragment>
  );
};

export default UserDashboard;
