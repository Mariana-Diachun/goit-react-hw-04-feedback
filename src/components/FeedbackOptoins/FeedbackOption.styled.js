import styled from 'styled-components';

export const List = styled.ul`
  margin-top: 20px;
  padding: 20px;
  display: flex;
`;
export const Item = styled.li`
  list-style: none;
  padding: 0;
  display: flex;
  width: 100%;
`;

export const Button = styled.button`
  cursor: pointer;
  display: inline-block;
  gap: 4px;
  min-width: 50px;
  border: 1px solid ${p => p.theme.colors.black};
  border-radius: 4px;
  color: ${p => p.theme.colors.black};
  transition: color 250ms ease-in-out, background-color 250ms ease-in-out,
    border-color 250ms ease-in-out;
  :hover {
    background-color: ${p => p.theme.colors.accent};
  }
  text-transform: capitalize;
`;
