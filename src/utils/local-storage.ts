/* eslint-disable */
import User from "@/interfaces/store/User";


export default {
  set(key: string, value: any): void {
    window.localStorage.setItem(key, typeof value == 'object' ? JSON.stringify(value) : value);
  },
  get(key: string, defaultValue = null): object | null | string {
    let value = window.localStorage.getItem(key);
    if (value) {
      value = JSON.parse(value)
    }
    return value || defaultValue;
  },
  getValue(key: string, field: any, defaultValue = null) {
    const gettedObject: { [key: string]: any } = this.get(key) as User;

    if (gettedObject && gettedObject[field]) {
      return gettedObject[field];
    }

    return defaultValue;
  },
  remove(key: string) {
    window.localStorage.removeItem(key)
  }
}