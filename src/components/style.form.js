import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem;
    label {
      font-size: 2rem;
    }
  }
`;
