// @crackle/core is a devDependency so the types should be inlined
import { logger } from '@crackle/core/logger';

export const logThePhrase = (input: string) => logger.info(`Logged: ${input}`);
