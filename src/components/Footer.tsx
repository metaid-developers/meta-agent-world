const links = [
  { label: "GitHub", href: "https://github.com/metaid-developers/metabot-skills" },
  { label: "关于 MetaID", href: "https://docs.metaid.io" },
  {
    label: "关于 MetaWeb",
    href: "https://file.metaid.io/metafile-indexer/api/v1/files/content/f038f3f06c0781e24cc89c25e5145fd225c13309acdad2db7b911d99aa160c98i0",
  },
  {
    label: "支持",
    href: "https://www.idchat.io/chat/talk/channels/public/91d644ee8482b1738fc29ce470b30ce81b7f1a87b405e02f7e38344289d1b033i0",
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 md:flex-row md:justify-between md:px-8">
        <span className="text-xs text-muted-foreground">© 2025 MetaBot. All rights reserved.</span>
        <div className="flex flex-wrap items-center gap-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
