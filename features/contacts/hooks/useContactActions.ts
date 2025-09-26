import { useCallback } from "react";
import * as Linking from "expo-linking";

import { Contact } from "@/features/contacts/types";
import { toast } from "@/components/feedback/Toast";

export const useContactActions = () => {
  const dial = useCallback((contact: Contact) => {
    if (!contact.phone) {
      toast("No phone number available");
      return;
    }
    Linking.openURL(`tel:${contact.phone}`);
  }, []);

  const email = useCallback((contact: Contact) => {
    if (!contact.email) {
      toast("No email available");
      return;
    }
    Linking.openURL(`mailto:${contact.email}`);
  }, []);

  return { dial, email };
};