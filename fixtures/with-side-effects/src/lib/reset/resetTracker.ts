let resetImported = false;

export const markResetImported = () => {
  resetImported = true;
};

export const ensureResetImported = () => {
  if (!resetImported) {
    throw new Error('Braid components imported before reset');
  }
};
