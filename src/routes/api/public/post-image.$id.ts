import { createFileRoute } from "@tanstack/react-router";

// Serves post images from the private storage bucket (public buckets are disabled for this backend).
export const Route = createFileRoute("/api/public/post-image/$id")({
  server: { handlers: { GET: async ({ params }) => {
    if (!/^[\w-]{1,80}$/.test(params.id)) return new Response("Not found", { status: 404 });
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data, error } = await supabaseAdmin.storage.from("doctor-posts").download(`planner/${params.id}.png`);
    if (error || !data) return new Response("Not found", { status: 404 });
    return new Response(data, { headers: { "Content-Type": data.type || "image/png", "Cache-Control": "public, max-age=604800" } });
  } } },
});
