import styled from 'styled-components';
import { H1 } from '../../components';
import MortgageInfoForm from './MortgageInfoForm';

const Mortgage = () => (
  <PageContainer>
    <Header>
      <H1>Mortgage Calculator</H1>
    </Header>
    <Main>
      <MortgageInfoForm />
    </Main>
  </PageContainer>
);

const PageContainer = styled.div``;

const Header = styled.header``;

const Main = styled.main``;

export default Mortgage;
