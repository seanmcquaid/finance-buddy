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

export default Retirement;
