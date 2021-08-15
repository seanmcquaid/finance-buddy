import styled from 'styled-components';
import { H1 } from '../../components';
import MonthlyPayment from './MonthlyPayment';
import MortgageInfoForm from './MortgageInfoForm';

const Mortgage = () => (
  <PageContainer>
    <Header>
      <H1>Mortgage Calculator</H1>
    </Header>
    <Main>
      <MortgageInfoForm />
      <MonthlyPayment />
    </Main>
  </PageContainer>
);

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Header = styled.header`
  padding: 1rem;
`;

const Main = styled.main`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default Mortgage;
