import styled from 'styled-components';
import { H1 } from '../../components';
import FixedCosts from './FixedCosts';
import FlexibleSpending from './FlexibleSpending';
import Savings from './Savings';
import TotalBudgetForm from './TotalBudgetForm';
import TotalBudgetInfo from './TotalBudgetInfo';

const Budget = () => (
  <PageContainer>
    <Header>
      <H1>Budget Calculator</H1>
    </Header>
    <Main>
      <TotalBudgetInfo />
      <TotalBudgetForm />
      <CategoriesContainer>
        <FixedCosts />
        <FlexibleSpending />
        <Savings />
      </CategoriesContainer>
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

const CategoriesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  @media only screen and (max-width: 650px) {
    flex-direction: column;
  }
`;

export default Budget;
