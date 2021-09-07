import { RouteMap } from './types';

function mapValues<Input extends Record<string, any>, OutputValue>(
  input: Input,
  fn: (value: Input[keyof Input]) => OutputValue,
): Record<keyof Input, OutputValue> {
  const result: any = {};

  for (const key in input) {
    if (Object.prototype.hasOwnProperty.call(input, key)) {
      result[key] = fn(input[key]);
    }
  }

  return result;
}

export const extractRouteMetadata = (routeMap: RouteMap) =>
  mapValues(routeMap, ({ globalMetadata }) => globalMetadata);
