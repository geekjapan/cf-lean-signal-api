export default {
  async fetch(req, env) {
    if (req.method === "POST") {
      const body = await req.json();
      await env.SIGNALS.put("latest", JSON.stringify(body));
      return new Response("Signal stored", { status: 200 });
    }

    if (req.method === "GET") {
      const signal = await env.SIGNALS.get("latest");
      return new Response(signal || "{}", {
        headers: { "Content-Type": "application/json" },
        status: 200
      });
    }

    return new Response("Method Not Allowed", { status: 405 });
  }
};
