import AsyncStorage from "@react-native-async-storage/async-storage";

export async function storageGet<T>(key: string): Promise<T | undefined> {
  const value = await AsyncStorage.getItem(key);
  if (!value) return undefined;
  try {
    return JSON.parse(value) as T;
  } catch {
    return undefined;
  }
}

export async function storageSet<T>(key: string, value: T): Promise<void> {
  await AsyncStorage.setItem(key, JSON.stringify(value));
}

export async function storageDelete(key: string): Promise<void> {
  await AsyncStorage.removeItem(key);
}

export async function storageClear(): Promise<void> {
  await AsyncStorage.clear();
}