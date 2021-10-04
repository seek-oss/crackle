export const partition = <T>(
  items: T[],
  predicate: (item: T) => boolean,
): [T[], T[]] => {
  const matching: T[] = [];
  const notMatching: T[] = [];

  for (const item of items) {
    if (predicate(item)) {
      matching.push(item);
    } else {
      notMatching.push(item);
    }
  }

  return [matching, notMatching];
};
