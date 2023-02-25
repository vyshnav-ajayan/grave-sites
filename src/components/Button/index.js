import styled from "styled-components";

export const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.5em 1.5em;
  border-radius: 20px;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
`;