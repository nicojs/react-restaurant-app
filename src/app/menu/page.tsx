'use client';
import { useContext } from 'react';
import { SubHeader } from '@/app/components/sub-header';
import { LanguageContext } from '@/app/i18n';

export default function MenuPage() {
  const { i18n } = useContext(LanguageContext);
  return (
    <>
        <SubHeader>Choose a menu</SubHeader>
    </>
  );
}
