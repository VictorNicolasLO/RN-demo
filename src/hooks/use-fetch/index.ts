/* eslint-disable react-hooks/exhaustive-deps */
import {useState, useEffect} from 'react';

function useFetch(apiFn: Function, params: any[]) {
  const [data, setData] = useState<any>(undefined);
  const [error, setError] = useState(undefined);
  const [loading, setLoading] = useState(true);

  function load() {
    setLoading(true);
    return new Promise((resolve, reject) => {
      apiFn(...params)
        .then((comingData: any) => {
          resolve();
          setData(comingData);
          setLoading(false);
        })
        .catch((e: any) => {
          reject();
          setError(e);
          setLoading(false);
        });
    });
  }

  useEffect(() => {
    apiFn(...params)
      .then((comingData: any) => {
        setData(comingData);
        setLoading(false);
      })
      .catch((e: any) => {
        setError(e);
        setLoading(false);
      });
  }, []);

  return {data, error, loading, load};
}

export default useFetch;
