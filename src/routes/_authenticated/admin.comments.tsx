import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Eye, EyeOff, Loader2, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/_authenticated/admin/comments")({
  head: () => ({
    meta: [
      { title: "إدارة تعليقات المرضى | د. تامر الألفي" },
      { name: "description", content: "إخفاء تعليقات المرضى أو حذفها." },
      { property: "og:title", content: "إدارة تعليقات المرضى | د. تامر الألفي" },
      { property: "og:description", content: "إخفاء تعليقات المرضى أو حذفها." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminCommentsPage,
});

type Row = { id: string; nickname: string; body: string; source: string; hidden: boolean; created_at: string };

function AdminCommentsPage() {
  const qc = useQueryClient();
  const { data, isLoading, error } = useQuery({
    queryKey: ["admin-comments"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("patient_comments")
        .select("id,nickname,body,source,hidden,created_at")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data as Row[];
    },
  });
  const refresh = () => qc.invalidateQueries({ queryKey: ["admin-comments"] });

  const toggle = async (r: Row) => {
    await supabase.from("patient_comments").update({ hidden: !r.hidden }).eq("id", r.id);
    refresh();
  };
  const remove = async (r: Row) => {
    if (!window.confirm("حذف هذا التعليق نهائيًا؟")) return;
    await supabase.from("patient_comments").delete().eq("id", r.id);
    refresh();
  };

  return (
    <main dir="rtl" className="mx-auto max-w-3xl px-4 py-10">
      <div className="mb-6 flex items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-foreground">تعليقات المرضى</h1>
        <Link to="/admin/articles" className="text-sm text-primary underline">
          إدارة المقالات
        </Link>
      </div>
      {isLoading && <Loader2 className="animate-spin" />}
      {error && <p className="text-destructive">تعذر التحميل.</p>}
      {data && data.length === 0 && <p className="text-muted-foreground">لا توجد تعليقات.</p>}
      <ul className="space-y-3">
        {data?.map((r) => (
          <li
            key={r.id}
            className={`rounded-lg border border-border bg-card p-4 ${r.hidden ? "opacity-60" : ""}`}
          >
            <div className="mb-1 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              <strong className="text-foreground">{r.nickname}</strong>
              <span>· {r.source}</span>
              <span>· {new Date(r.created_at).toLocaleDateString("ar")}</span>
              {r.hidden && <span className="text-destructive">· مخفي</span>}
            </div>
            <p className="whitespace-pre-wrap text-foreground">{r.body}</p>
            <div className="mt-3 flex gap-2">
              <Button size="sm" variant="outline" onClick={() => toggle(r)}>
                {r.hidden ? <Eye className="size-4" /> : <EyeOff className="size-4" />}
                {r.hidden ? "إظهار" : "إخفاء"}
              </Button>
              <Button size="sm" variant="destructive" onClick={() => remove(r)}>
                <Trash2 className="size-4" /> حذف
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
