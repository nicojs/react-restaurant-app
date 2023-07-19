'use client';
import { PropsWithChildren, useContext } from 'react';
import { SubHeader } from '@/app/components/sub-header';
import { LanguageContext } from '@/app/i18n';
import { NavBar, NavItem } from '../components/nav';

export default function MenuLayout({ children }: PropsWithChildren) {
  const { i18n } = useContext(LanguageContext);
  return (
    <>
      <SubHeader>{i18n.menuTitle}</SubHeader>
      <NavBar>
        <NavItem href="/menu/ontbijt">Ontbijt</NavItem>
        <NavItem href="/menu/lunch">Lunch</NavItem>
        <NavItem href="/menu/diner">Diner</NavItem>
      </NavBar>
      {children}
    </>
  );
}
