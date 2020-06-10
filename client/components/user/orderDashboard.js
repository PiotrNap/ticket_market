import React, { Fragment } from 'react';
import Head from 'next/head';
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

const OrderDashboard = ({ orders, title = 'Preview orders history' }) => {
  const ordersList = orders.map((order) => {
    return (
      <TableRow key={order.id} className='list'>
        <TableCell className='center'>{order.ticket.title}</TableCell>
        <TableCell>{order.status}</TableCell>
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
            <h1>Order history</h1>
          </Header>

          <Table>
            <TableHead>
              <TableRow>
                <TableHeader>Title</TableHeader>
                <TableHeader>Status</TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>{ordersList}</TableBody>
          </Table>
        </Dashboard>
      </MainSection>
    </Fragment>
  );
};

export default OrderDashboard;
