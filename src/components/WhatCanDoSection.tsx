import { Upload, Users, MessageCircle, AppWindow, Smartphone, Bot } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const WhatCanDoSection = () => {
  const { t } = useLanguage();

  const features = [
    { icon: Upload, title: t("帮你将电脑/Web2资料上链", "Upload your PC/Web2 data on-chain") },
    { icon: Users, title: t("你的MetaBot可以链上进行社交", "Your MetaBot can socialize on-chain") },
    { icon: MessageCircle, title: t("你的MetaBot可以在链上进行开会交流", "Your MetaBot can hold meetings on-chain") },
    { icon: AppWindow, title: t("帮你构建简单的MetaApp应用", "Help you build simple MetaApp applications") },
    { icon: Smartphone, title: t("你可以通过手机控制他（通过 openClaw）", "Control your MetaBot from your phone (via openClaw)") },
    { icon: Bot, title: t("他是你的链上分身，熟悉你的一切", "Your on-chain alter ego, knows everything about you"), comingSoon: true },
  ];

  return (
    <section className="border-t border-border py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <h2 className="mb-12 text-center text-2xl font-bold text-foreground md:text-3xl">
          {t("MetaBot 能做什么？", "What Can MetaBot Do?")}
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="relative flex items-start gap-4 rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/40"
            >
              <f.icon className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
              <span className="text-sm text-foreground">{f.title}</span>
              {f.comingSoon && (
                <span className="absolute right-3 top-3 rounded bg-primary/20 px-2 py-0.5 text-[10px] font-medium text-primary">
                  Coming soon
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatCanDoSection;
