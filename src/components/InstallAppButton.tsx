import { useEffect, useState } from "react";
import { Download, Smartphone, WifiOff } from "lucide-react";
import { Button } from "@/components/ui/button";

type InstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

export function InstallAppButton({ ar }: { ar: boolean }) {
  const [promptEvent, setPromptEvent] = useState<InstallPromptEvent | null>(null);
  const [offline, setOffline] = useState(false);

  useEffect(() => {
    const onPrompt = (event: Event) => {
      event.preventDefault();
      setPromptEvent(event as InstallPromptEvent);
    };
    const syncStatus = () => setOffline(!navigator.onLine);

    syncStatus();
    window.addEventListener("beforeinstallprompt", onPrompt);
    window.addEventListener("appinstalled", () => setPromptEvent(null));
    window.addEventListener("online", syncStatus);
    window.addEventListener("offline", syncStatus);
    return () => {
      window.removeEventListener("beforeinstallprompt", onPrompt);
      window.removeEventListener("online", syncStatus);
      window.removeEventListener("offline", syncStatus);
    };
  }, []);

  if (offline) {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full border border-patient-mist bg-card px-3 py-1.5 text-xs font-semibold text-patient-deep">
        <WifiOff className="size-3.5" />
        {ar ? "وضع بدون إنترنت" : "Offline mode"}
      </span>
    );
  }

  if (!promptEvent) {
    return (
      <span className="hidden items-center gap-1.5 rounded-full border border-patient-mist bg-card px-3 py-1.5 text-xs font-semibold text-patient-deep sm:inline-flex">
        <Smartphone className="size-3.5" />
        {ar ? "يعمل بدون إنترنت" : "Works offline"}
      </span>
    );
  }

  return (
    <Button
      size="sm"
      className="rounded-full bg-patient-apricot text-patient-deep hover:bg-patient-apricot/90"
      onClick={async () => {
        await promptEvent.prompt();
        await promptEvent.userChoice;
        setPromptEvent(null);
      }}
    >
      <Download className="size-4" />
      {ar ? "ثبّت التطبيق" : "Install app"}
    </Button>
  );
}
