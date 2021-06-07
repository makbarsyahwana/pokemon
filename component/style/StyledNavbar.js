import styled from "@emotion/styled";

export const StyledNavbar = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 20;
  background: #fff;
  box-shadow: rgba(108, 114, 124, 0.16) 0px -2px 4px 0px;
  @media (min-width: 768px) {
    background: transparent;
    box-shadow: none;
    top: 0;
    right: 0;
    bottom: unset;
    left: unset;
    width: 100%;
  }
  ul {
    list-style: none;
    display: flex;
    justify-content: center;
    margin-right: auto;
    margin-left: auto;
  }
  li {
    display: flex;
    margin-right: auto;
    margin-left: auto;
    justify-content: center
    @media (min-width: 768px) {
      max-width: 180px;
    }
  }
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    padding: 0.375rem 0.5rem;
    width: 100%;
    height: 100%;
    color: #171923;
    text-decoration: none;
    &.active {
      background: #dadada;
    }
    @media (min-width: 768px) {
      padding: 0.5rem;
      color: #fff;
      font-size: 1.5rem;
      &.active {
        background: #820d0d;
      }
      &:hover {
        text-decoration: underline;
      }
    }
    
    .link-menu {
      margin-top: 0.25rem;
      display: flex;
      line-height: 1.2;
      @media (min-width: 768px) {
        display: inline-flex;
      }
    }
  }
`;


export const StyledContainerWrapperNavbar = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 768px) {
    padding: 0 16px;
  }
  @media (min-width: 992px) {
    padding: 0 20px;
  }
  @media (min-width: 1200px) {
    padding: 0 24px;
    max-width: 1200px;
  }
`;