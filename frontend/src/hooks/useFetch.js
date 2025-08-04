import { useEffect, useState } from "react";

export const useFetch = (fn, def = []) => {
  const [data, setData] = useState(def);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fn();

      setData(response);
      setError(null);
    } catch (error) {
      setData(def);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => fetchData();

  return { data, error, isLoading, refetch };
};

export default useFetch;
