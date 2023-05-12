import styled from 'styled-components';

export const Container = styled.header`
  padding: 10px 20px;

  height: 6rem;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: #e6e6e6;

  box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.29);

  font-size: 18px;

  .navbar {
    display: flex;
    align-items: center;

    a {
      text-decoration: none;

      border: 0;

      border-radius: 8px;

      padding: 8px 16px;

      background-color: #f2c283;
      color: #fff;

      & + a {
        margin-left: 10px;
      }

      transition: all 0.6;

      &.active {
        opacity: 0.7;
      }

      &:hover {
        opacity: 0.7;
      }
    }
  }

  button {
    font-weight: 600;
    font-size: 16px;

    padding: 8px 16px;

    color: #FFFFFF;
    background: #ad9f9e;

    border-radius: 10px;
    border: 0;

    transition: 0.4s;

    &:hover {
      opacity: 0.9;
    }
  }
`;
