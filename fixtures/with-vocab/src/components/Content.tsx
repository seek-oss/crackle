import { useTranslations } from '@vocab/react';

import commonTranslations from '../.vocab';

export function Content() {
  const common = useTranslations(commonTranslations);
  const message = `${common.t('hello')} ${common.t('world')}`;

  return (
    <>
      <div id="message">{message}</div>
    </>
  );
}
