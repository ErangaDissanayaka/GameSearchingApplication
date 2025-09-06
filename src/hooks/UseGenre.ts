import { useEffect, useState } from "react";
import apiClient from "../Services/api-client";
import { CanceledError } from "axios";

interface Genre{
    id:number;
    name:string;
}

interface FetchGenresResponse {
    count: number;
    results: Genre[];
}

const useGenres = () => {
  const [genre, setGenre] = useState<Genre[]>([]);
  const [errors, setErrors] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<FetchGenresResponse>("/genres", { signal: controller.signal })
      .then((response) => setGenre(response.data.results))
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

  return { genre, errors, loading };
};

export default useGenres;
