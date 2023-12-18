import styled from 'styled-components';

const SectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 15px;

  button {
    background-color: #e1ecf4;
    border-radius: 3px;
    border: 1px solid #7aa7c7;
    box-shadow: rgba(255, 255, 255, 0.7) 0 1px 0 0 inset;
    box-sizing: border-box;
    color: #39739d;
    cursor: pointer;

    font-weight: 400;
    line-height: 1.15385;

    button:hover,
    button:focus {
      background-color: #b3d3ea;
      color: #2c5777;
    }
  }
  form {
    padding: 10px;
    width: 400px;
    border-radius: 3px;
    border: 1px solid #7aa7c7;
  }

  label {
    display: block;
    margin-top: 10px;
  }
  input {
    display: block;
    padding: 10px;
    margin-top: 10px;
    width: 300px;
    background-color: #e1ecf4;
    border-radius: 3px;
    border: 1px solid #7aa7c7;
    box-shadow: rgba(255, 255, 255, 0.7) 0 1px 0 0 inset;
  }
`;

export const Section = ({ title, children }) => (
  <SectionStyled>
    <h2>{title}</h2>
    {children}
  </SectionStyled>
);
