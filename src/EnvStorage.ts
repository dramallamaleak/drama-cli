export abstract class EnvStorage {
  static set(key: string, value: unknown) {
    process.env[key] = String(value);
  }

  static get(key: string, fallback?: unknown) {
    return process.env[key] ? process.env[key] : fallback;
  }
}
