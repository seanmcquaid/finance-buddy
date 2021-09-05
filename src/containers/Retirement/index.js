import styled from 'styled-components';
import { H1 } from '../../components';
import RetirementCalculations from './RetirementCalculations';
import RetirementInfoForm from './RetirementInfoForm';

const Retirement = () => (
  <PageContainer>
    <Header>
      <H1>Retirement Calculator</H1>
    </Header>
    <Main>
      <RetirementInfoForm />
      <RetirementCalculations />
    </Main>
  </PageContainer>
);

const PageContainer = styled.div``;

const Header = styled.header``;

const Main = styled.main``;

export default Retirement;
