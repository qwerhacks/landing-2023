import { error } from '@sveltejs/kit';
import type { RequestEvent } from "./$types";
import * as EmailValidator from 'email-validator';
import { PrismaClient } from '@prisma/client';

export async function POST({url}: RequestEvent): Promise<Response> {
  const email = url.searchParams.get("email");

  if (email === null || !EmailValidator.validate(email)) {
    console.error("Email not provided or failed to validate")
    throw error(400, "Please provide a valid email")
  }

  // if (token === null) {
  //   console.error("No recaptcha token provied")
  //   throw error(400, "Please provide a recatpcha token")
  // } else {
  //   const resp = await validateCaptcha(token);
  //   console.log(resp)
  //   // If we should fail...
  //   if (resp.score < 0.6 || resp.action != "submit") {
  //     console.error("Recaptcha token failed to validate")
  //     throw error(500, "Internal server error")
  //   }
  // }

  console.log("About to write to prisma")

  const prisma = new PrismaClient();
  const res = await prisma.userEntry.create({
    data: {
      email: email
    }
  })

  console.log(res)

  return new Response("Ok");
}