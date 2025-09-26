export const endpoints = {
  contacts: "/contacts",
  auth: "/auth",
  settings: "/settings"
} as const;

export type EndpointKey = keyof typeof endpoints;