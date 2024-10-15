import { useCallback, useEffect, useState } from "react";

export const useFetch = <T>(fetchMethod: () => Promise<T>) => {
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [data, setData] = useState<T | null>(null);

  const callback = useCallback(fetchMethod, []);

  useEffect(() => {
    const fetchData = async () => {
      setState("loading");
      try {
        const result = await callback();
        setData(result);
        setState("success");
      } catch (error) {
        setState("error");
      }
    };

    fetchData();
  }, [callback]);

  if (state === "error") {
    return { state };
  } else {
    return { data: data!, state, setData };
  }
};
