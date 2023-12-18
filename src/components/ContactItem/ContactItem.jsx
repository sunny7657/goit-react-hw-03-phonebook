import styled from 'styled-components';

const BtnStyled = styled.button`
  display: inline-block;
  margin-left: 10px;
  font-size: 10px;
  padding: 4px;
`;

export const ContactItem = ({ contactName, contactNumber, onDelete }) => {
  return (
    <li name="contact">
      {contactName}: {contactNumber}
      <BtnStyled onClick={onDelete}>Delete</BtnStyled>
    </li>
  );
};
