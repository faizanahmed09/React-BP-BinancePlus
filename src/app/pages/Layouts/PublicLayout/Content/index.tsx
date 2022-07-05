/**
*
* Content
*
*/
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';

interface Props {}

const Content: React.FC = ({children}) => {
  const { t, i18n } = useTranslation();
  return (
    <div id='container'>
      {children}
    </div>
  )
}

export {Content}

