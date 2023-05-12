import styled from 'styled-components';

export const Container = styled.header`
  height: 6rem;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  background: #e6e6e6;

  box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.29);

  font-size: 18px;

  .navbar {
    padding: 10px 20px;

    display: flex;
    align-items: center;

    a {
      text-decoration: none;

      border: 0;

      border-radius: 8px;

      padding: 8px 16px;

      background-color: #bfd4f5;
      background-color: #8b42ff;
      background-color: #ae83f2;
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
`;
