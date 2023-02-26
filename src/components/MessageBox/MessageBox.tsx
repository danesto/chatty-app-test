import { formatTimestamp } from "../../helpers/date";
import { NewMessageType } from "../../types/messages";
import {
  Date as SendAt,
  Message,
  MessageBoxContainer,
  Sender,
} from "./MessageBox.styled";

interface MessageBoxProps {
  message: NewMessageType;
  isSent?: boolean;
}

const MessageBox: React.FC<MessageBoxProps> = ({ message, isSent = false }) => {
  const { author, message: msg, timestamp } = message;

  const sendAt = formatTimestamp(timestamp);

  return (
    <MessageBoxContainer isSent={isSent}>
      <Sender>{author}</Sender>
      <Message>{msg}</Message>
      <SendAt>{sendAt}</SendAt>
    </MessageBoxContainer>
  );
};

export default MessageBox;
