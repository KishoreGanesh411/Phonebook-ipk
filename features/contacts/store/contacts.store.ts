import { create } from "zustand";

import { Contact } from "@/features/contacts/types";

type ContactsState = {
  list: Contact[];
  loading: boolean;
  error?: string;
  setContacts: (contacts: Contact[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (message?: string) => void;
  clear: () => void;
};

export const useContactsStore = create<ContactsState>((set) => ({
  list: [],
  loading: false,
  error: undefined,
  setContacts: (list) => set({ list }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
  clear: () => set({ list: [], loading: false, error: undefined })
}));