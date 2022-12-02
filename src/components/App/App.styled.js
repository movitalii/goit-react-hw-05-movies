import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 0 16px;
  background-color: rgb(2, 148, 246);
  height: 100vh;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  position: fixed;
  background-color: rgb(2, 148, 246);
  width: 100%;
  z-index: 999;
  > nav {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
  margin-right: 5px;
  padding: 8px 16px;
  border-radius: 5px;
  text-decoration: none;
  color: rgb(2, 148, 246);
  background-color: white;
  font-weight: 500;
  transform: scale(1);
  &.active {
    color: white;
    background-color: rgb(3, 88, 145);
  }
  &:hover,
  &:focus{    
    transform: scale(1.05);
    transition: transform 0.2s ease-in-out;
  }
`;
