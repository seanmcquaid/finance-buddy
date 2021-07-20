import styled from 'styled-components';
import TotalBudgetInfo from './TotalBudgetInfo';

const Budget = () => (
  <PageContainer>
    <Header>Budget Calculator</Header>
    <Main>
      <TotalBudgetInfo />
    </Main>
  </PageContainer>
);

const PageContainer = styled.div``;

const Header = styled.header``;

const Main = styled.main``;

export default Budget;
