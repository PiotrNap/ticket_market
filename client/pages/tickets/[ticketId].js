import useRequest from '../../hooks/use-request';
import Router from 'next/router';
import paths from '../../paths';
import styled from 'styled-components';
import { device } from '../../components/styles/device';
import theme from '../../components/styles/theme';

const { colors, fontSizes } = theme;

const MainSection = styled.section`
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem auto 0;
`;

const InnerSection = styled.div`
  border: 2px solid ${colors.purple};
  padding: 5rem 10rem;
  border-radius: 5px;
`;

const Header = styled.h1`
  color: ${colors.purple};
  margin-bottom: ${theme.mbSm};
`;

const Title = styled.h3`
  font-size: ${fontSizes.Xlarge};
  color: ${colors.darkText};
`;

const Price = styled.h3`
  font-size: ${fontSizes.Xlarge};
  color: ${colors.darkText};
`;

const ButtonRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledButton = styled.button`
  padding: 0.6rem 4rem;
  color: ${colors.white};
  font-size: ${fontSizes.normal};
  font-weight: 600;
  background-color: ${colors.purple};
  border-radius: 100px;
  transition: all 0.2s;
  margin-top: ${theme.mbSm};
  align-items: center;

  :focus,
  :hover {
    opacity: 0.8;
  }
`;

const TicketShow = ({ ticket }) => {
  const { doRequest, errors } = useRequest({
    url: `${paths.ordersIndex}`,
    method: 'post',
    body: {
      ticketId: ticket.id,
    },
    onSuccess: (order) =>
      Router.push('/orders/[orderId]', `/orders/${order.id}`),
  });

  return (
    <MainSection>
      <InnerSection>
        <Header>You are viewing:</Header>
        <Title>{ticket.title}</Title>
        <Price>Price: {ticket.price}</Price>
        {errors}
        <ButtonRow>
          <StyledButton onClick={() => doRequest()}>Purchase</StyledButton>
        </ButtonRow>
      </InnerSection>
    </MainSection>
  );
};

TicketShow.getInitialProps = async (context, client) => {
  const { ticketId } = context.query;
  const { data } = await client.get(`${paths.tickets}/${ticketId}`);

  return { ticket: data };
};

export default TicketShow;
