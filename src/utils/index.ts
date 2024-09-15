export const getDims = ({ width, height }: CSSStyleDeclaration) => {
  return {
    width: Number(width.replace("px", "")),
    height: Number(height.replace("px", "")),
  };
};

export const px = <V extends string | number>(value: V): `${V}px` =>
  `${value}px`;

export const deg = <V extends string | number>(value: V): `${V}deg` =>
  `${value}deg`;

export const sec = <V extends string | number>(value: V): `${V}s` =>
  `${value}s`;

export const percentage = <V extends string | number>(value: V): `${V}%` =>
  `${value}%`;

export const pick = <O extends Record<string, any>, K extends keyof O>(
  obj: O,
  ...keys: K[]
) => {
  const emptyObj = {} as Record<K, any>;
  keys.forEach((k) => (emptyObj[k] = obj[k]));
  return emptyObj;
};

export const noop = () => undefined;

export const blobToBinary = async (blob: Blob) => {
  const buffer = await blob.arrayBuffer();

  return new Uint8Array(buffer);
};

export const toReversed = (arr: any[]) => structuredClone(arr).reverse();

export const wait = (fn: () => void, delay = 500) => setTimeout(fn, delay);

export const debounce = <T extends VoidFunction | Utilities.FunctionWithArgs>(
  fn: T,
  delta = 500
): T => {
  let timer: any;
  return ((...args: any[]) => {
    clearTimeout(timer);
    timer = wait(() => {
      fn(...args);
    }, delta);
  }) as T;
};

/**
 * @notice doesn't support duration than 3600. meaning one hour songs;
 */
export function formatVideoDuration(duration: number) {
  duration = Math.floor(duration);
  let secondsPart = duration % 60,
    minutesPart = (duration - secondsPart) / 60
  // the vars to be returned
  let seconds = `00`, minutes = `00`;
  seconds = (secondsPart).toLocaleString(undefined, {
    minimumIntegerDigits: 2,
  });
  minutes = (minutesPart).toLocaleString(undefined, {
    minimumIntegerDigits: 2,
  });
  return `${minutes}:${seconds}` as `${number}:${number}`
}

/**
 * @notice this function assigns to the target obj
 */
export function spread<T extends Record<string, any>>(target: T, merger: Partial<T>): T {
  return {...target, merger}
}