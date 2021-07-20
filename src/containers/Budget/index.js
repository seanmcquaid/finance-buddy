import styled from 'styled-components';
import { H1 } from '../../components';
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
    </Main>
  </PageContainer>
);

const PageContainer = styled.div``;

const Header = styled.header``;

const Main = styled.main``;

export default Budget;
