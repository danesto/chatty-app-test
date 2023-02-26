import { getOneHourBefore } from "../helpers/date";
import { api } from "./api.config";

interface MessagesParameters {
  limit?: number;
  timestamp?: number;
}

export const getMessages = async ({
  timestamp = getOneHourBefore(),
  limit = 100,
}: MessagesParameters) => {
  const { data } = await api.get(`?since=${timestamp}&limit=${limit}`);

  return data as any;
};

export interface CreateMessageParameters {
  message: string;
  author: string;
  timestamp?: number;
}

export const createMessage = async ({
  message,
  author,
}: CreateMessageParameters) => {
  const { data } = await api.post(``, {
    message,
    author,
  });

  return data;
};
