import { MessageCircle } from "lucide-react";

const message = encodeURIComponent(
  "Hi Tech Tradie Media, I have a quick question about getting more trade enquiries."
);

export default function LiveChatButton() {
  return (
    <a
      href={`https://wa.me/447432754561?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Live chat with Tech Tradie Media on WhatsApp"
      className="fixed right-4 bottom-20 md:bottom-6 z-50 flex items-center gap-3 rounded-full px-4 py-3 text-white shadow-2xl transition hover:opacity-95 focus:outline-none focus:ring-4 focus:ring-green-300"
      style={{ background: "#25D366" }}
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
        <MessageCircle size={22} aria-hidden="true" />
      </span>
      <span className="hidden sm:block text-left leading-tight">
        <span className="block text-sm font-black">Live Chat</span>
        <span className="block text-xs text-white/85">Message on WhatsApp</span>
      </span>
    </a>
  );
}
