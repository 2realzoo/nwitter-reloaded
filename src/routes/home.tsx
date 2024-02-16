import styled from "styled-components";
import { auth } from "../firebase";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const logOut = () => {
  auth.signOut();
}
export default function Home() {
  return (
    <Wrapper>
      <h1>Home!</h1>
      <button onClick={logOut}>Logout</button>
    </Wrapper>
  );
}
