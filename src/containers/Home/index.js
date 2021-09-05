import styled from 'styled-components';
import { H1, LinkButton, P } from '../../components';

const Home = () => (
  <PageContainer>
    <Header>
      <H1>Welcome to Finance Buddy!</H1>
    </Header>
    <Main>
      <P>Select your needed area of assistance down below!</P>
      <LinksContainer>
        <LinkButton label="Mortgage" to="/mortgage" />
        <LinkButton label="Retirement" to="/retirement" />
        <LinkButton label="Budge" to="/budget" />
      </LinksContainer>
    </Main>
  </PageContainer>
);

const PageContainer = styled.div`
  width: 100%;
`;

const Header = styled.header``;

const Main = styled.main`
  width: 100%;
`;

const LinksContainer = styled.div`
  width: 100%;
`;

export default Home;
