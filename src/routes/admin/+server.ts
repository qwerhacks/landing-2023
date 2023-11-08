
import { ADMIN_LOGIN } from "$env/static/private";

import { PrismaClient } from '@prisma/client';

import { error, type RequestEvent } from '@sveltejs/kit';

export async function GET({url}: RequestEvent): Promise<Response> {
  // Pull of an auth param
  const auth = url.searchParams.get("auth");

  // If the auth param is not ADMIN_LOGIN...
  if (auth !== ADMIN_LOGIN) throw error(404);

	const prisma = new PrismaClient();

	const users = await prisma.userEntry.findMany();

  // Construct a CSV from users
  const csv = "email,createdAt\n" + users.map(user => `${user.email},${user.createdAt}`).join("\n");

  return new Response(csv);
}