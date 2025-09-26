import { useCallback, useEffect } from "react";

import { useContactsStore } from "@/features/contacts/store/contacts.store";
import { getDeviceContacts } from "@/features/contacts/services/contacts.service";

export const useContacts = () => {
  const { list, loading, error, setContacts, setError, setLoading } = useContactsStore();

  const fetchContacts = useCallback(async () => {
    setLoading(true);
    const result = await getDeviceContacts();
    if (result.ok) {
      setContacts(result.value);
      setError(undefined);
    } else {
      setError(result.error);
    }
    setLoading(false);
  }, [setContacts, setError, setLoading]);

  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  return { contacts: list, loading, error, refetch: fetchContacts };
};