type ReporterEvent = { type: 'BUILD_PACKAGE'; packageName: string };

type ReporterHandler = (event: ReporterEvent) => void;

export interface Reporter {
  send(event: ReporterEvent): void;
  on(cb: ReporterHandler): void;
}

export const createReporter = (): Reporter => {
  const handlers: Array<ReporterHandler> = [];

  return {
    on: (cb) => {
      handlers.push(cb);
    },
    send: (event: ReporterEvent) => {
      for (const handler of handlers) {
        handler(event);
      }
    },
  };
};
