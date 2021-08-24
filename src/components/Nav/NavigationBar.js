import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import i18n from "i18next";
import {useTranslation, initReactI18next} from "react-i18next";
import en from '../../i18n/en';
import sw from '../../i18n/sw';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: en,
      },
      sw: {
        translation: sw,
      },
    },
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  });

export const NavigationBar = () => {
  const {t} = useTranslation();
  return (


    <Navbar expand="lg" className="nav-bar">
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav.Item><Nav.Link href="../Pages/ValjTag">{t("SELECT TRAINS")}</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link href="../Pages/SokTag">{t("SEARCH TRAIN")}</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link href="../Pages/PlatsTid">{t("LOCATION AND TIME")}</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link href="../Pages/Handel">{t("EVENT LIST")}</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link href="../Pages/Varningar">{t("WARNINGS")}</Nav.Link></Nav.Item>
      </Navbar.Collapse>
    </Navbar>
  );

};
