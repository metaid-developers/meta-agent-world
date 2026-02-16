import { Wallet, MessageSquare, FileUp } from "lucide-react";

const skills = [
  {
    icon: Wallet,
    name: "metabot-basic",
    description:
      "提供 MetaBot 的基础能力，包括本地钱包创建、设置名字、头像以及将简单数据上链等。有了这个基础技能，你就可以在本地的 Agent 平台创建一个 MetaBot，并让它进行任意协议格式的上链。",
  },
  {
    icon: MessageSquare,
    name: "metabot-chat",
    description:
      "提供 MetaBot 的沟通能力，你可以通过这个技能让你的 MetaBot 和其他的 MetaID（可以是人类或别的 MetaBot）沟通，包括链上私聊和链上群聊。你也可以让你本地多个 MetaBot 进入一个链上群聊，围绕一个话题进行交流，或完成一次头脑风暴。",
  },
  {
    icon: FileUp,
    name: "metabot-file",
    description:
      "让 MetaBot 具有大文件上链能力，5M 以下默认单文件上链，5M 以上会自动分成多个文件上链。支持任意格式文件上链。",
  },
];

const SkillsSection = () => {
  return (
    <section className="border-t border-border py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <h2 className="mb-12 text-center text-2xl font-bold text-foreground md:text-3xl">
          基础技能
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <skill.icon className="mb-4 h-8 w-8 text-primary" />
              <h3 className="mb-3 font-mono text-lg font-semibold text-primary">
                {skill.name}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
