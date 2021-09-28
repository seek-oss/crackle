export const promiseMap = async <T, K>(
  items: T[],
  fn: (item: T) => Promise<K>,
): Promise<K[]> => Promise.all(items.map(fn));
