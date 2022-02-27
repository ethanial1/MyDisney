import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

const Header = () => {
  return (
    <Nav>
      <Logo>
        <img src="/images/logo.svg" alt="disney+" />
      </Logo>
      <NavMenu>
        <NavLink to='/home'>
          <img src="/images/home-icon.svg" alt="home"/>
          <span>Home</span>
        </NavLink>
        <NavLink to='/search'>
          <img src="/images/search-icon.svg" alt="search"/>
          <span>Search</span>
        </NavLink>
        <NavLink to='/watchlist'>
          <img src="/images/watchlist-icon.svg" alt="watchlist"/>
          <span>WatchList</span>
        </NavLink>
        <NavLink to='/originals'>
          <img src="/images/original-icon.svg" alt="original"/>
          <span>Original</span>
        </NavLink>
        <NavLink to='/movies'>
          <img src="/images/movie-icon.svg" alt="movie"/>
          <span>Movies</span>
        </NavLink>
        <NavLink to='/series'>
          <img src="/images/series-icon.svg" alt="series"/>
          <span>Series</span>
        </NavLink>
      </NavMenu>
      <Login>
        Login
      </Login>
    </Nav>
  )
}

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 1rem;
  z-index: 3;
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;

  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
  position: relative;
  margin-left: 25px;
  margin-right: auto;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      padding: 2px 0px;
      white-space: nowrap;
      line-height: 1.08;
      position: relative;
      color: rgb(249, 249, 249);
      
      &:before {
        content: "";
        background-color: rgb(249, 249, 249);
        border-radius: 0 0 4px 4px;
        bottom: -6px;
        height: 2px;
        left: 0;
        opacity: 0;
        position: absolute;
        right: 0;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.46);
        visibility: hidden;
        width: auto;
      }
    }
    &:hover {
      span::before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }

  }


  /* @media (max-width: 768px) {
    display: none;
  } */
`;

const Login = styled.a`
  padding: 8px 16px;
  text-transform: uppercase;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  letter-spacing: 1.5px;
  background-color: rgba(0, 0, 0, 0.6);
  transition: all 0.2ms ease 0s;

  &:hover {
    color: #000;
    background-color: #f9f9f9;
    border-color: transparent;
  }
`;


export default Header