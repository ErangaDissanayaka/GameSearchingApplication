import { useEffect, useState } from "react";
import apiClient from "../Services/api-client";
import { CanceledError } from "axios";


interface FetchResponses <T>{
    id: number;
    results: T[];
}
const useData = <T>(endpoints:string) => {
  const [data, setData] = useState<T[]> ([]);
  const [errors, setErrors] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<FetchResponses<T>>(endpoints, { signal: controller.signal })
      .then((response) => setData(response.data.results))
      .finally(() => setLoading(false))
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setErrors(error.message);
        setLoading(false);
      });
    return () => {
      controller.abort();
    };
  }, []);

  return { data, errors, loading };
};

export default useData;
