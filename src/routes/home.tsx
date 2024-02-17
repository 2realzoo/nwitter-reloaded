import styled from "styled-components";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export default function Home() {
  const navigate = useNavigate();
  const logOut = () => {
    auth.signOut();
    navigate("/");
  }
  return (
    <Wrapper>
      <h1>Home!</h1>
      <button onClick={logOut}>Logout</button>
    </Wrapper>
  );
}
