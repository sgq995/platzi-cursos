import { useEffect } from 'react';

export default function useMountFetch<T = any, R = any>(
  url: string,
  onfulfilled: (value: T) => R
) {
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then(onfulfilled);
  }, []);
}
