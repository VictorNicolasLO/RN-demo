import {makeProvider} from '../../_lib';
import {useState} from 'react';
import {Api} from '../../api';

function useApi() {
  const [api, setApi] = useState(new Api({}));
  return {api, setApi};
}

export const {
  Provider: ApiProvider,
  useProvider: useApiProvider,
} = makeProvider(useApi);
