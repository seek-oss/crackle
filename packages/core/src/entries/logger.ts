import { createConsola } from 'consola';

export { colors } from 'consola/utils';

export const logger = createConsola({
  formatOptions: { date: false },
});
