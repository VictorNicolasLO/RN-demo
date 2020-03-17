import {makeProvider} from '../../_lib';
import {useState} from 'react';
import * as rawContent from '../../content';

function useContent() {
  const [content, setContent] = useState(rawContent);
  return {content, setContent};
}

export const {
  Provider: ContentProvider,
  useProvider: useContentProvider,
} = makeProvider(useContent);
