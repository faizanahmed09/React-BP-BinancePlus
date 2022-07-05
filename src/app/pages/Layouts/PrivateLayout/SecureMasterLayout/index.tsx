/**
*
* SecureMasterLayout
*
*/
import React, {useEffect} from 'react'
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import {Header} from "../Header";
import {SideBar} from "../SideBar";
import {Content} from "../Content";
import {Footer} from "../Footer";

interface Props {}


const SecureMasterLayout: React.FC = ({children}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
  <div>
    <Header/>
    {/*<SideBar/>*/}
    <Content>{children}</Content>
    <Footer/>
  </div>
  );

};

export {SecureMasterLayout}
