import { DependencyList, useEffect } from 'react';

function makeFetch<T, R>(url: string, onfulfilled: (value: T) => R) {
  return fetch(url)
    .then((response) => response.json())
    .then(onfulfilled);
}

export default function useMountFetch<T = any, R = any>(
  createUrl: string | ((deps: DependencyList) => string | null | undefined),
  onfulfilled: (value: T) => R,
  deps: DependencyList = []
) {
  useEffect(() => {
    if (typeof createUrl === 'string') {
      makeFetch(createUrl, onfulfilled);
    } else {
      const url = createUrl(deps);
      if (url) {
        makeFetch(url, onfulfilled);
      }
    }
  }, deps);
}
