import { useCookies } from 'vue3-cookies';
const { cookies } = useCookies();

/**
 * 通过key获取value
 * @param key
 * @returns
 */
export function getCookie(key: string): string {
   return cookies.get(key);
}

/**
 * 设置cookie
 * @param key
 * @param value
 * @returns true成功，false失败
 */
export function setCookie(key: string, value: string): boolean {
   cookies.set(key, value);
   return cookies.isKey(key);
}

/**
 * 删除 cookie
 * @param key
 */
export function removeCookie(key: string): boolean {
   cookies.remove(key);
   return !cookies.isKey(key);
}
