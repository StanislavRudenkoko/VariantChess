const navLinks = [
  { label: "Play", href: "#" },
  { label: "Variants", href: "#" },
  { label: "Updates", href: "#" },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/", aria: "GitHub placeholder" },
  {
    label: "Discord",
    href: "https://discord.com/invite/",
    aria: "Discord placeholder",
  },
  { label: "Contact", href: "mailto:hello@example.com", aria: "Email placeholder" },
];

function App() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-gradient-to-b from-thistle-100 via-wisteria-200 to-deep_lilac-200 text-thistle-900">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-bright_lavender-400/20 blur-3xl" />
        <div className="absolute left-[10%] bottom-20 h-56 w-56 rounded-full bg-lavender_purple-400/15 blur-3xl" />
        <div className="absolute right-[8%] top-32 h-64 w-64 rounded-full bg-deep_lilac-400/20 blur-3xl" />
      </div>

      <header className="relative border-b border-thistle-300/20 bg-thistle-100/60 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-bright_lavender-400 text-sm font-semibold text-thistle-100 shadow-lg shadow-deep_lilac-200/40">
              VC
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold text-thistle-900">VariantChess</span>
              <span className="text-xs text-thistle-600">Play bold. Mix variants.</span>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm font-medium text-thistle-800 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition hover:text-bright_lavender-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button className="rounded-full border border-thistle-300/30 bg-white/10 px-4 py-2 text-sm font-semibold text-thistle-900 shadow-sm shadow-deep_lilac-200/20 transition hover:-translate-y-0.5 hover:border-bright_lavender-300 hover:bg-white/20">
              Get updates
            </button>
          </div>
        </div>
      </header>

      <main className="relative mx-auto flex max-w-5xl flex-1 flex-col items-center justify-center px-6 py-16 text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-bright_lavender-200">
          Welcome to
        </p>
        <h1 className="mt-3 text-4xl font-semibold sm:text-5xl md:text-6xl">VariantChess</h1>
        <p className="mt-4 max-w-2xl text-lg text-thistle-800 sm:text-xl">
          A modern home for remixing your favorite chess variants, from fog of war to duck chess.
          Play, experiment, and challenge friends with bold ideas.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button className="rounded-full bg-bright_lavender-400 px-6 py-3 text-sm font-semibold text-thistle-100 shadow-lg shadow-deep_lilac-200/40 transition hover:-translate-y-0.5 hover:bg-bright_lavender-300">
            Enter the lobby
          </button>
          <button className="rounded-full border border-thistle-300/40 px-6 py-3 text-sm font-semibold text-thistle-900 transition hover:-translate-y-0.5 hover:border-bright_lavender-300 hover:text-bright_lavender-100">
            Learn more
          </button>
        </div>

        <div className="mt-12 grid w-full gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-thistle-300/25 bg-white/10 p-4 text-left shadow-sm shadow-deep_lilac-200/20">
            <p className="text-sm font-semibold text-thistle-900">Variant-first</p>
            <p className="mt-2 text-sm text-thistle-700">
              Built to mix fog of war, duck chess, crazyhouse, and more.
            </p>
          </div>
          <div className="rounded-2xl border border-thistle-300/25 bg-white/10 p-4 text-left shadow-sm shadow-deep_lilac-200/20">
            <p className="text-sm font-semibold text-thistle-900">Play with friends</p>
            <p className="mt-2 text-sm text-thistle-700">
              A clean lobby, fast pairing, and smooth games whether live or async.
            </p>
          </div>
          <div className="rounded-2xl border border-thistle-300/25 bg-white/10 p-4 text-left shadow-sm shadow-deep_lilac-200/20">
            <p className="text-sm font-semibold text-thistle-900">Community ready</p>
            <p className="mt-2 text-sm text-thistle-700">
              Built with React and Tailwind—easy to extend, tweak, and share with the community.
            </p>
          </div>
        </div>
      </main>

      <footer className="relative border-t border-thistle-300/25 bg-thistle-100/60 backdrop-blur">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm font-medium text-thistle-800">
            Community links (placeholders)
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.aria}
                className="rounded-full border border-thistle-300/30 px-4 py-2 text-sm font-semibold text-thistle-900 transition hover:-translate-y-0.5 hover:border-bright_lavender-300 hover:text-bright_lavender-100"
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
