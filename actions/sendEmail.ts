"use server";

import { getErrorMessage } from "@/lib/utils";

const serverEndpoint = process.env.EMAIL_ENDPOINT;

export const sendEmail = async (formData: FormData) => {
  let data;

  try {
    await fetch(serverEndpoint as string, {
      method: "POST",
      body: formData,
    });
  } catch (error: unknown) {
    return { error: getErrorMessage(error) };
  }

  return {
    data,
  };
};
