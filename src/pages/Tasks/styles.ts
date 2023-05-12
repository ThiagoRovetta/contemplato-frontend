import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 24px;

  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 700px;
  width: 700px;
`;

export const InputContainer = styled.div`
  width: 100%;

  position: relative;

  input {
    border: 1px solid #CCCCCC;
    border-radius: 8px;

    font-size: 16px;

    padding: 0 16px;

    width: 100%;
    height: 56px;

    color: #666666;

    outline: none;

    transition: 0.5s;

    &::placeholder {
      font-weight: 400;

      color: #999999;

      padding: 16px 0;
    }

    &:focus {
      border: 1px solid #666666;
    }

    &.error {
      border: 1px solid #D73035;
    }
  }

  button {
    position: absolute;
    top: 20px;
    right: 16px;

    border: 0;
    background: transparent;

    font-weight: bold;
    font-size: 16px;
    color: #333;
  }
`;

export const TasksContainer = styled.div`
  width: 100%;

  margin-top: 24px;

  ul {
    li {
      list-style: none;

      border: 1px solid #CCCCCC;
      border-radius: 8px;

      padding: 0 16px;

      height: 56px;

      display: flex;
      align-items: center;
      justify-content: space-between;

      & + li {
        margin-top: 8px;
      }

      div {
        display: flex;

        gap: 8px;
      }

      button {
        font-weight: 600;
        font-size: 16px;

        padding: 8px 16px;

        color: #FFFFFF;
        background: #D73035;

        border-radius: 10px;
        border: 0;

        transition: 0.4s;

        &:hover {
          opacity: 0.9;
        }
      }
    }
  }
`;
