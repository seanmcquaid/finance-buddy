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
        <LinkButton label="Budget" to="/budget" />
      </LinksContainer>
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
  width: 100%;
  height: 100%;
`;

const LinksContainer = styled.div`
  width: 100%;
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Home;
