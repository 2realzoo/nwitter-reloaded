import {signInWithEmailAndPassword} from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase";
import {Link, useNavigate } from "react-router-dom";
import { FirebaseError } from "firebase/app";
import { Error, Input, Title, Wrapper, Switcher, Form } from "../components/auth-components";
import GithubBtn from "../components/github-btn";

export default function Login() {
  const [isLoading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    if (email === "" || password === "") return;
    try {
      setLoading(true);
      const credentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(credentials.user);
      navigate("/");
    } catch (e) {
      if (e instanceof FirebaseError) {
        setError(e.message);
      }
    } finally {
      setLoading(false);
    }
    console.log(email, password);
  };

  return (
    <Wrapper>
      <Title>Log into </Title>
      <Form onSubmit={onSubmit}>
        <Input
          onChange={onChange}
          name="email"
          value={email}
          placeholder="Email"
          type="email"
        />
        <Input
          onChange={onChange}
          name="password"
          value={password}
          placeholder="Password"
          type="password"
          required
        />
        <Input
          type="submit"
          value={isLoading ? "loading..." : "Log in"}
        />
      </Form>
      {error != "" ? <Error>{error}</Error> : null}
      <Switcher>
        Don't have an account?
          <Link to="/create-account">Create one &rarr;</Link>
      </Switcher>
      <GithubBtn/>
    </Wrapper>
  );
}

