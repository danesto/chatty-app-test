import styled from "styled-components";
import chatBackground from "./assets/background.png";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  margin: 0 auto;
  max-width: 1440px;
  background-image: url(${chatBackground});
`;

export const MessagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 84%;
  margin: 0 auto;
  padding: 16px 24px;
  overflow-y: scroll;
`;

export const ActionsContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #3698d4;
  width: 100%;
`;

export const ActionsWrapper = styled.div`
  width: 84%;
  gap: 8px;
  display: flex;
  justify-content: space-between;
  padding: 8px 24px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 8px;
  }
`;

export const MessageInput = styled.input`
  all: unset;
  background-color: #fff;
  border: 1px solid #ddd;
  width: 90%;
  border-radius: 4px;
  padding: 8px;
  color: #323232;
`;

export const SendBtn = styled.button`
  all: unset;
  background-color: #fe866d;
  border-radius: 4px;
  font-size: 16px;
  padding: 16px 24px;
  cursor: pointer;

  :hover {
    opacity: 0.9;
  }
`;

export const Scroller = styled.div`
  height: 0.1px;
`;
