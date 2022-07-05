/**
*
* SecureMasterLayout
*
*/
import React, {useEffect} from 'react'
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import {Header} from "../Header";
import {Content} from "../Content";
import {Footer} from "../Footer";
import {SideBar} from "../SideBar";

interface Props {}


const MasterLayout: React.FC = ({children}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
  <div>
    <Header />
    <Content>{children}</Content>
    <Footer/>
  </div>
  );

};

export {MasterLayout}
