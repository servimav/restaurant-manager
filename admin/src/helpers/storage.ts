export const useStorage = () => ({
  /**
   * get
   * @param key
   * @returns
   */
  get: <T>(key: string) => {
    const s = localStorage.getItem(key);
    return s ? (JSON.parse(s) as T) : null;
  },
  /**
   * set
   * @param key
   * @param value
   * @returns
   */
  set: (key: string, value: unknown) =>
    localStorage.setItem(key, JSON.stringify(value)),
  /**
   * remove
   * @param key
   * @returns
   */
  remove: (key: string) => localStorage.removeItem(key),
  /**
   * clear
   * @returns
   */
  clear: () => localStorage.clear(),
});
