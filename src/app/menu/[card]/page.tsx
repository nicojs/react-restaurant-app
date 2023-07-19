'use client';
import { SubHeader } from '@/app/components/sub-header';
import { LanguageContext } from '@/app/i18n';
import { useContext } from 'react';

interface MenuCardPageProps {
  params: {
    card: string;
  };
}
export default function MenuCardPage({ params: { card } }: MenuCardPageProps) {
  const { i18n } = useContext(LanguageContext);
  return (
    <>
      <SubHeader>{card}</SubHeader>
    </>
  );
}
