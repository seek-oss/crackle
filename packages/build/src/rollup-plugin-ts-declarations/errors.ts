export class FatalError extends Error {
  scope: string;
  constructor(message: string, scope: string) {
    super(message);
    this.scope = scope;
  }
}
