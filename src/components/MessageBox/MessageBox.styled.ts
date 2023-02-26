import styled from "styled-components";

interface MessageBoxContainerProps {
  isSent: boolean;
}

export const MessageBoxContainer = styled.div<MessageBoxContainerProps>`
  padding: 16px;
  background-color: ${(props) => (props.isSent ? "#fcf6c5" : "#fff")};
  width: max-content;
  max-width: 66%;
  display: flex;
  flex-direction: column;
  border: 1px solid #b5bdc4;
  border-radius: 8px;
  margin-left: ${(props) => props.isSent && "auto"};
`;

export const Sender = styled.span`
  color: #b5bdc4;
  margin-bottom: 5px;
  font-size: 14px;
`;

export const Message = styled.div`
  color: #434b54;
  font-weight: 500;
  margin-bottom: 8px;
`;

export const Date = styled.div`
  color: #b5bdc4;
  font-size: 14px;
`;
