import styled from 'styled-components';

export const Container = styled.main`
  background: #FAFAFA;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  padding: 20px;

  border-radius: 10px;
  box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.3);

  background-color: white;

  h3 {
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 32px;

    padding: 0;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  gap: 8px;

  padding: 0;

  label {
    font-weight: 400;
    font-size: 14px;

    color: #333333;
  }

  input {
    border: 1px solid #CCCCCC;
    border-radius: 8px;

    padding: 0 16px;

    width: 384px;
    height: 56px;

    color: #666666;

    outline: none;

    transition: 0.5s;

    &::placeholder {
      font-weight: 400;
      font-size: 14px;

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
`;

export const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  color: #D73035;

  span {
    margin-left: 10.5px;
    font-weight: 400;
    font-size: 14px;
  }
`;

export const Button = styled.button`
  font-weight: 600;
  font-size: 16px;

  padding: 14px 28px;

  color: #FFFFFF;
  background: #47b5f5;

  border-radius: 10px;
  border: 0;

  transition: 0.4s;

  &:not(.active) {
    background: #CCCCCC;
    cursor: not-allowed;
  }

  &:hover {
    opacity: 0.8;
  }
`;
