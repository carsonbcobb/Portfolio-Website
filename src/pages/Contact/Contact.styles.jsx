import styled from "styled-components";

export const ContactPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 70vh;
`;

export const ContactHeader = styled.div`
  font-size: 3em;
  color: black;
  margin-bottom: auto;
`;

export const ContactInfoContainer = styled.div`
  font-size: 1.5em;
`;

export const ContactInfo = styled.ul`
  display: flex;
  flex-direction: column;
  color: white;
  list-style: none;
  transform: translateY(-0%);
`;

export const ContactItem = styled.li`
  font-size: 1.75em;
  padding: 15px;
`;
