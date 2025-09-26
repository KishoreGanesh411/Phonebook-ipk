import * as ExpoContacts from "expo-contacts";

import { Result, err, ok } from "@/core/utils/result";
import { Contact } from "@/features/contacts/types";

export async function getDeviceContacts(): Promise<Result<Contact[], string>> {
  try {
    const { status } = await ExpoContacts.requestPermissionsAsync();
    if (status !== "granted") {
      return err("Permission denied");
    }

    const { data } = await ExpoContacts.getContactsAsync({
      fields: [ExpoContacts.Fields.PhoneNumbers, ExpoContacts.Fields.Emails, ExpoContacts.Fields.Image]
    });

    const contacts: Contact[] = data?.map((item) => ({
      id: item.id,
      displayName: item.name ?? "Unnamed",
      phone: item.phoneNumbers?.[0]?.number,
      email: item.emails?.[0]?.email,
      avatarUri: item.imageAvailable ? item.image?.uri : undefined
    })) ?? [];

    return ok(contacts);
  } catch (error) {
    return err(error instanceof Error ? error.message : "Failed to load contacts");
  }
}