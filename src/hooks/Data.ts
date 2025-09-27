import { useEffect, useState } from "react";
import apiClient from "../Services/api-client";
import { Axios, CanceledError, type AxiosRequestConfig } from "axios";


interface FetchResponses<T> {
  id: number;
  results: T[];
}

const useData = <T>(endpoints:string, requestconfig?: AxiosRequestConfig, deps?: any[]) => {
  const [data, setData] = useState<T[]> ([]);
  const [errors, setErrors] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
  .get<FetchResponses<T>>(endpoints, { signal: controller.signal, ...requestconfig })
  .then((response) => setData(response.data.results))
  .catch((error) => {
    if (error instanceof CanceledError) return;
    setErrors(error.message);
  })
  .finally(() => setLoading(false));

    return () => {
      controller.abort();
    };
  }, deps? [...deps]: []);

  return { data, errors, loading };
};

export default useData;
