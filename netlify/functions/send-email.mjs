export default async (req) => {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  const serviceId = Netlify.env.get("EMAILJS_SERVICE_ID") || Netlify.env.get("VITE_EMAILJS_SERVICE_ID");
  const templateId = Netlify.env.get("EMAILJS_TEMPLATE_ID") || Netlify.env.get("VITE_EMAILJS_TEMPLATE_ID");
  const publicKey = Netlify.env.get("EMAILJS_PUBLIC_KEY") || Netlify.env.get("VITE_EMAILJS_PUBLIC_KEY");

  if (!serviceId || !templateId || !publicKey) {
    return new Response(
      JSON.stringify({ error: "EmailJS configuration is missing on the server." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return new Response(
      JSON.stringify({ error: "Invalid request body." }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  const { name, email, message } = body;

  if (!name || !email || !message) {
    return new Response(
      JSON.stringify({ error: "Missing required fields: name, email, message." }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  try {
    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: { name, email, message },
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return new Response(
        JSON.stringify({ error: errorText || "Failed to send email." }),
        { status: response.status, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ ok: true }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: "Failed to send email." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

export const config = {
  path: "/api/send-email",
  method: "POST",
};
