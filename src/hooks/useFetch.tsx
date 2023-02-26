import { useEffect, useState } from "react";

interface UseFetchParameters {
  apiFn: () => Promise<any>;
}

const useFetch = ({ apiFn }: UseFetchParameters) => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const getData = async () => {
      let apiData;

      try {
        apiData = await apiFn();
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setData(apiData);
        setIsLoading(false);
      }
    };

    getData();
  }, [setIsLoading, setData, setError]);

  return {
    data,
    error,
    isLoading,
  };
};

export default useFetch;
