import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Loader2, LockKeyhole } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable";

const safePath = (value: unknown) => (typeof value === "string" && value.startsWith("/") && !value.startsWith("//") ? value : undefined);

export const Route = createFileRoute("/auth")({
  validateSearch: (search: Record<string, unknown>): { redirect?: string } => ({ redirect: safePath(search.redirect) }),
  head: () => ({ meta: [
    { title: "دخول الإدارة | د. تامر الألفي" },
    { name: "description", content: "دخول خاص بإدارة مقالات موقع د. تامر الألفي." },
    { property: "og:title", content: "دخول الإدارة | د. تامر الألفي" },
    { property: "og:description", content: "دخول خاص بإدارة مقالات موقع د. تامر الألفي." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" },
    { name: "robots", content: "noindex, nofollow" },
  ] }),
  component: AuthPage,
});

function AuthPage() {
  const { redirect } = Route.useSearch();
  const navigate = useNavigate();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const destination = (redirect ?? "/admin/articles") as "/admin/articles";

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => { if (data.session) navigate({ to: destination, replace: true }); });
  }, [destination, navigate]);

  async function signIn() {
    setBusy(true); setError("");
    const result = await lovable.auth.signInWithOAuth("google", { redirect_uri: window.location.origin + "/auth?redirect=" + encodeURIComponent(destination) });
    if (result.error) { setError("تعذر تسجيل الدخول بحساب Google. حاول مرة أخرى."); setBusy(false); return; }
    if (result.redirected) return;
    navigate({ to: destination, replace: true });
  }

  return <main dir="rtl" lang="ar" className="mx-auto flex min-h-[60vh] max-w-md flex-col justify-center px-5 py-16">
    <div className="rounded-md border border-border bg-card p-6 md:p-8">
      <LockKeyhole className="size-8 text-primary" />
      <h1 className="mt-4 text-2xl font-bold">دخول إدارة المقالات</h1>
      <p className="mt-3 text-sm leading-loose text-muted-foreground">هذه الصفحة خاصة بالدكتور لإضافة المقالات وتعديلها وترجمتها بحساب Gemini الخاص به.</p>
      <Button onClick={signIn} disabled={busy} size="lg" className="mt-6 w-full">{busy ? <Loader2 className="animate-spin" /> : null}الدخول بحساب Google</Button>
      {error && <p role="alert" className="mt-4 text-sm text-destructive">{error}</p>}
    </div>
  </main>;
}
