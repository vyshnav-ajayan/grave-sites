import styled from "styled-components";

export const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 5px;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
`;