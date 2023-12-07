declare module 'fixturez' {
  interface Opts {
    glob?: string | string[];
    root?: string;
    cleanup?: boolean;
  }

  export default function (
    cwd: string,
    opts?: Opts,
  ): {
    find: (a: string) => string;
    temp: () => string;
    copy: (a: string) => string;
    cleanup: () => any;
  };
}
