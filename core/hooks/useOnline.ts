import { useEffect, useState } from "react";
import NetInfo from "@react-native-community/netinfo";

export const useOnline = () => {
  const [online, setOnline] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setOnline(Boolean(state.isConnected && state.isInternetReachable));
    });

    return () => unsubscribe();
  }, []);

  return online;
};