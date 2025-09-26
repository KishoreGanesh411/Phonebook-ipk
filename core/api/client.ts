import { env } from "@/config/env";
import { Result, err, ok } from "@/core/utils/result";

type HttpError = {
  status: number;
  message: string;
};

export async function http<T>(path: string, init: RequestInit = {}): Promise<Result<T, HttpError>> {
  try {
    const response = await fetch(`${env.API_URL}${path}`, {
      ...init,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        ...(init.headers ?? {})
      }
    });

    if (!response.ok) {
      const message = await parseErrorMessage(response);
      return err({ status: response.status, message });
    }

    const data = (await response.json()) as T;
    return ok(data);
  } catch (error) {
    return err({
      status: 0,
      message: error instanceof Error ? error.message : "Unexpected network error"
    });
  }
}

async function parseErrorMessage(response: Response) {
  try {
    const payload = await response.json();
    if (typeof payload?.message === "string") {
      return payload.message;
    }
  } catch {
    // ignore
  }
  return response.statusText || "Request failed";
}