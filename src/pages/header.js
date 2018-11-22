import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from "styled-components";

const StyledLink = styled(NavLink)`
  color: #4a4a4a;
  font-weight: bold;
  font-size:20px;
  padding:10px;
  &.active {
     color:blue;
  }
`;

const Header = styled.header`
display:flex;
`

class HeaderComponent extends Component {
   render() {
      return (
         <Header>
            <StyledLink to="/" exact>Home</StyledLink>
            <StyledLink to="/users">Users</StyledLink>
         </Header>
      )
   }
}

export default HeaderComponent;