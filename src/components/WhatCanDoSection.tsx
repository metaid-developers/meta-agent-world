import { Upload, Users, MessageCircle, AppWindow, Smartphone, Bot } from "lucide-react";

const features = [
  { icon: Upload, title: "帮你将电脑/Web2资料上链" },
  { icon: Users, title: "你的MetaBot可以链上进行社交" },
  { icon: MessageCircle, title: "你的MetaBot可以在链上进行开会交流" },
  { icon: AppWindow, title: "帮你构建简单的MetaApp应用" },
  { icon: Smartphone, title: "你可以通过手机控制他（通过 openClaw）" },
  { icon: Bot, title: "他是你的链上分身，熟悉你的一切", comingSoon: true },
];

const WhatCanDoSection = () => {
  return (
    <section className="border-t border-border py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <h2 className="mb-12 text-center text-2xl font-bold text-foreground md:text-3xl">
          MetaBot 能做什么？
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
