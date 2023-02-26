import {
  ChangeEventHandler,
  KeyboardEvent,
  MouseEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  ActionsContainer,
  ActionsWrapper,
  AppContainer,
  MessageInput,
  MessagesContainer,
  Scroller,
  SendBtn,
} from "./App.styled";
import { createMessage, getMessages } from "./api/messages";
import MessageBox from "./components/MessageBox";
import useFetch from "./hooks/useFetch";
import { getCurrentTimestamp } from "./helpers/date";
import { NewMessageType } from "./types/messages";
import { MESSAGES_INITIAL } from "./constants";

function App() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const [message, setMessage] = useState<NewMessageType>({
    ...MESSAGES_INITIAL,
  });

  const [sentMessages, setSentMessages] = useState<Partial<NewMessageType[]>>(
    []
  );

  const { data: receivedMessages } = useFetch({
    apiFn: () => getMessages({ limit: 10 }),
  });

  const handleSetMessageValue: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const { value } = event.target;

    setMessage({
      message: value,
      author: "Danilo",
      timestamp: getCurrentTimestamp(),
    });
  };

  const handleCreateMessage = async (
    e: KeyboardEvent<HTMLInputElement> | MouseEvent<HTMLButtonElement>
  ) => {
    if (
      e.type === "click" ||
      e.type === "keyup" ||
      (e as KeyboardEvent<HTMLInputElement>).key === "Enter"
    ) {
      await createMessage({ message: message.message, author: message.author });
      setMessage({ ...MESSAGES_INITIAL });
      setSentMessages([...sentMessages, message]);
    }
  };

  useEffect(() => {
    scrollerRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [scrollerRef, sentMessages, receivedMessages]);

  return (
    <AppContainer>
      <MessagesContainer>
        {receivedMessages?.map((msg: NewMessageType) => {
          return <MessageBox key={msg.timestamp} message={msg} />;
        })}
        {sentMessages?.map((msg) => {
          return (
            <MessageBox
              key={msg?.timestamp}
              message={msg || ({} as NewMessageType)}
              isSent
            />
          );
        })}
        <Scroller ref={scrollerRef} />
      </MessagesContainer>
      <ActionsContainer>
        <ActionsWrapper>
          <MessageInput
            value={message.message}
            onChange={handleSetMessageValue}
            placeholder="Message"
            onKeyDown={handleCreateMessage}
          />
          <SendBtn onClick={handleCreateMessage}>Send</SendBtn>
        </ActionsWrapper>
      </ActionsContainer>
    </AppContainer>
  );
}

export default App;
