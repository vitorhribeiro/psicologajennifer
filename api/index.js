export const config = {
  runtime: "edge",
};

import server from "../dist/server/server.js";

export default async function handler(request) {
  try {
    return await server.fetch(request);
  } catch (error) {
    return new Response(error.message || error.toString(), { status: 500 });
  }
}
