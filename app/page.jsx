import { Suspense } from "react";
import content from "./content";
import LegacyScripts from "./LegacyScripts";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const logo = content.site.logo;

async function StreamSection({ children }) {
  await new Promise((resolve) => setTimeout(resolve, 0));
  return children;
}

function SectionFallback({ label }) {
  return (
    <section className="section-modern py-20 sm:py-24" aria-label={`Loading ${label}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="glass-panel neon-border rounded-lg p-8">
          <div className="h-4 w-36 animate-pulse rounded-full bg-cyan-300/30" />
          <div className="mt-5 h-10 w-72 max-w-full animate-pulse rounded-md bg-white/10" />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <div className="h-40 animate-pulse rounded-lg bg-white/5" />
            <div className="h-40 animate-pulse rounded-lg bg-white/5" />
            <div className="h-40 animate-pulse rounded-lg bg-white/5" />
          </div>
        </div>
      </div>
    </section>
  );
}

function StreamingBoundary({ label, children }) {
  return (
    <Suspense fallback={<SectionFallback label={label} />}>
      <StreamSection>{children}</StreamSection>
    </Suspense>
  );
}

function hasThaiText(value) {
  return /[\u0E00-\u0E7F]/.test(value || "");
}

function Heading({ eyebrow, title, description, left = false }) {
  const titleFont = hasThaiText(title) ? "font-bold" : "font-orbitron font-black uppercase";

  return (
    <div className={left ? "max-w-3xl" : "text-center"}>
      <p className="font-rajdhani text-lg font-bold uppercase tracking-[0.3em] text-cyan-300">{eyebrow}</p>
      <h2 className={`mt-3 text-3xl text-white sm:text-5xl ${titleFont}`}>{title}</h2>
      {description ? <p className="mt-5 text-slate-300 leading-8">{description}</p> : null}
    </div>
  );
}

function LoadingScreen() {
  return (
    <div id="loadingScreen" className="fixed inset-0 z-[9999] grid place-items-center overflow-hidden bg-gray-950">
      <div className="absolute inset-0 cyber-grid opacity-70" />
      <div className="relative w-full max-w-md px-6 text-center">
        <div className="relative mx-auto grid h-56 w-56 place-items-center">
          <div className="loader-ring absolute inset-0 rounded-full border border-cyan-300/15 border-t-cyan-300/80 border-r-violet-300/70 shadow-neon" />
          <div className="absolute inset-5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-xl" />
          <img className="loader-pulse logo-glow relative h-36 w-36 object-contain" src={logo} alt="PSU Staff Esports Club logo" />
        </div>
        <p className="mt-7 font-orbitron text-2xl font-black uppercase tracking-wide text-white text-glow">{content.loading.title}</p>
        <p className="mt-2 font-rajdhani text-lg font-bold uppercase tracking-[0.32em] text-cyan-200">{content.loading.subtitle}</p>
        <div className="mt-7 overflow-hidden rounded-full border border-cyan-300/30 bg-white/[0.05] p-1 shadow-neon"><div className="loader-progress h-2 rounded-full bg-gradient-to-r from-cyan-300 via-sky-500 to-violet-500" /></div>
        <div className="mt-5 flex items-center justify-center gap-3 font-rajdhani text-sm font-bold uppercase tracking-[0.28em] text-slate-400"><span className="h-2 w-2 rounded-full bg-lime-300 shadow-[0_0_18px_rgba(190,242,100,0.9)]" />{content.loading.status}</div>
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <header id="navbar" className="fixed inset-x-0 top-0 z-50 border-b border-cyan-400/10 bg-gray-950/55 backdrop-blur-2xl transition-all duration-300">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8" aria-label="Main navigation">
        <a href="#home" className="flex items-center gap-3"><span className="grid h-12 w-12 place-items-center rounded-md border border-cyan-300/40 bg-gradient-to-br from-cyan-300/20 to-violet-500/20 p-1 shadow-neon"><img className="h-full w-full object-contain logo-glow" src={logo} alt="PSU Staff Esports Club logo" /></span><span><span className="block font-orbitron text-lg font-black leading-none tracking-wide text-white">{content.site.shortName}</span><span className="block text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300">{content.site.subtitle}</span></span></a>
        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1 lg:flex">{content.navigation.map((item) => <a key={item.href} className="rounded-full px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-cyan-300/10 hover:text-cyan-200" href={item.href}>{item.label}</a>)}</div>
        <button id="menuBtn" type="button" className="grid h-11 w-11 place-items-center rounded-md border border-cyan-300/30 bg-white/[0.03] text-cyan-200 transition hover:bg-cyan-400/10 lg:hidden" aria-label="Open mobile menu"><i id="menuIcon" className="fa-solid fa-bars text-xl" /></button>
      </nav>
      <div id="mobileMenu" className="hidden border-t border-cyan-400/10 bg-gray-950/95 px-4 pb-5 shadow-neon lg:hidden"><div className="mx-auto grid max-w-7xl gap-1 pt-3">{content.navigation.map((item) => <a key={item.href} className="rounded-md px-3 py-3 text-slate-300 transition hover:bg-cyan-400/10 hover:text-cyan-300" href={item.href}>{item.label}</a>)}</div></div>
    </header>
  );
}

function Hero() {
  const hero = content.hero;
  return (
    <section id="home" className="scanline relative min-h-screen overflow-hidden pt-24">
      <div className="absolute inset-0"><img className="h-full w-full object-cover" src={hero.backgroundImage} alt="Gaming arena background" /><div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-950/86 to-violet-950/75" /><div className="absolute inset-0 cyber-grid opacity-70" /></div>
      <div className="relative mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_420px] lg:px-8">
        <div className="max-w-3xl"><img className="logo-glow mb-6 h-28 w-28 object-contain sm:h-36 sm:w-36 lg:hidden" src={logo} alt="PSU Staff Esports Club logo" /><div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-200"><span className="h-2 w-2 rounded-full bg-lime-300 shadow-[0_0_18px_rgba(190,242,100,0.9)]" />{hero.eyebrow}</div><h1 className="font-orbitron text-5xl font-black uppercase leading-tight text-white text-glow sm:text-6xl lg:text-8xl">{hero.title}</h1><p className="mt-4 font-rajdhani text-2xl font-bold text-cyan-100 sm:text-3xl">{hero.subtitle}</p><p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">{hero.description}</p><div className="mt-10 flex flex-col gap-4 sm:flex-row"><a href={hero.primaryCta.href} className="clip-cyber bg-gradient-to-r from-cyan-300 via-sky-500 to-violet-500 px-8 py-4 text-center font-bold text-white shadow-neon transition hover:scale-105">{hero.primaryCta.label}</a><a href={hero.secondaryCta.href} className="clip-cyber border border-cyan-300/40 bg-gray-950/60 px-8 py-4 text-center font-bold text-cyan-200 transition hover:bg-cyan-400/10 hover:shadow-neon">{hero.secondaryCta.label}</a></div><div className="mt-12 grid max-w-2xl grid-cols-3 gap-3">{hero.stats.map((stat) => <div key={stat.label} className="glass-panel rounded-lg px-4 py-3"><p className={`font-orbitron text-2xl font-black ${stat.color}`}>{stat.value}</p><p className="text-xs text-slate-400">{stat.label}</p></div>)}</div></div>
        <aside className="glass-panel hidden rounded-lg p-5 lg:block"><div className="relative overflow-hidden rounded-md border border-cyan-300/20 bg-gradient-to-br from-slate-950 via-blue-950/50 to-gray-950 p-8"><div className="absolute inset-0 cyber-grid opacity-40" /><img className="relative mx-auto h-72 w-full object-contain logo-glow" src={logo} alt="PSU Staff Esports Club logo" /><div className="relative mt-5 text-center"><p className="font-orbitron text-xl font-black text-white">{content.site.name}</p><p className="mt-1 text-sm text-cyan-200">Official Staff Gaming Community</p></div></div><div className="mt-5 grid grid-cols-3 gap-3 text-center"><div className="rounded-md border border-white/10 bg-white/[0.04] p-3"><p className="font-orbitron text-xl font-bold text-white">13</p><p className="text-xs text-cyan-300">ALPHA</p></div><div className="grid place-items-center rounded-md border border-cyan-300/20 bg-cyan-300/10 p-3 font-orbitron text-cyan-200">VS</div><div className="rounded-md border border-white/10 bg-white/[0.04] p-3"><p className="font-orbitron text-xl font-bold text-white">9</p><p className="text-xs text-violet-300">OMEGA</p></div></div></aside>
      </div>
    </section>
  );
}

function CardGrid({ section, children, id }) {
  return <section id={id} className="section-modern py-20 sm:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><Heading {...section} />{children}</div></section>;
}

function About() {
  return <section id="about" className="section-modern py-20 sm:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><Heading {...content.about} left /><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{content.about.cards.map((card) => <article key={card.title} className="modern-card neon-border rounded-lg p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-300/70"><i className={`fa-solid ${card.icon} text-3xl ${card.color}`} /><h3 className="mt-5 text-xl font-bold text-white">{card.title}</h3><p className="mt-3 text-sm leading-7 text-slate-400">{card.description}</p></article>)}</div><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{content.about.stats.map((stat) => <div key={stat.label} className="glass-panel rounded-lg p-6 text-center"><p className={`font-orbitron text-4xl font-black ${stat.color}`}>{stat.value}</p><p className="mt-2 text-slate-300">{stat.label}</p></div>)}</div></div></section>;
}

function Teams() {
  return <CardGrid id="teams" section={content.teams}><div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{content.teams.items.map((team) => <article key={team.title} className="modern-card group overflow-hidden rounded-lg border border-cyan-300/20 transition duration-300 hover:-translate-y-2 hover:border-cyan-300/70 hover:shadow-neon"><img className="h-48 w-full object-cover opacity-80 transition duration-500 group-hover:scale-110" src={team.image} alt={team.title} /><div className="p-6"><h3 className="font-orbitron text-2xl font-bold text-white">{team.title}</h3><p className="mt-2 text-cyan-300">{team.summary}</p></div></article>)}</div></CardGrid>;
}

function Players() {
  return <CardGrid id="players" section={content.players}><div className="players-scroll mt-12 flex snap-x gap-6 overflow-x-auto pb-6">{content.players.items.map((player) => <article key={player.nickname} className="modern-card min-w-[260px] snap-start rounded-lg border border-white/10 p-5 text-center transition duration-300 hover:-translate-y-2 hover:border-cyan-300/60 hover:shadow-neon sm:min-w-[300px]"><div className="mx-auto grid h-24 w-24 place-items-center rounded-full border border-cyan-300/30 bg-cyan-300/10 font-orbitron text-4xl font-black text-white">{player.avatar}</div><h3 className="mt-5 font-orbitron text-xl font-bold text-white">{player.nickname}</h3><p className="text-sm text-slate-400">{player.name}</p><p className={`mt-3 ${player.color}`}>{player.role}</p></article>)}</div></CardGrid>;
}

function Activities() {
  return <><CardGrid id="activities" section={content.activities}><div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{content.activities.items.map((activity) => <article key={activity.id} className="modern-card group overflow-hidden rounded-lg ring-1 ring-white/10 transition duration-300 hover:-translate-y-2 hover:ring-cyan-300/60"><img className="h-48 w-full object-cover transition duration-500 group-hover:scale-110" src={activity.image} alt={activity.title} /><div className="p-6"><p className="text-sm font-semibold text-cyan-300">{activity.shortDate}</p><h3 className="mt-2 text-xl font-bold text-white">{activity.title}</h3><p className="mt-3 text-sm leading-7 text-slate-400">{activity.summary}</p><button type="button" data-activity={activity.id} className="activity-more mt-5 font-bold text-cyan-300 transition hover:text-white">อ่านเพิ่มเติม <i className="fa-solid fa-arrow-right ml-1" /></button></div></article>)}</div></CardGrid><section id="activity-detail" className="section-modern hidden py-20 sm:py-24"><div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"><article className="glass-panel neon-border overflow-hidden rounded-lg"><img id="activityDetailImage" className="h-80 w-full object-cover" src={content.activities.items[0].image} alt={content.activities.items[0].title} /><div className="p-6 sm:p-8"><button id="activityBack" type="button" className="mb-6 font-bold text-cyan-300 transition hover:text-white"><i className="fa-solid fa-arrow-left mr-2" />กลับไปยังกิจกรรม</button><p className="font-rajdhani text-lg font-bold uppercase tracking-[0.3em] text-cyan-300">Activity Detail</p><h2 id="activityDetailTitle" className="mt-3 text-3xl font-bold text-white sm:text-4xl">กิจกรรมของชมรม</h2><p className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/[0.04] px-4 py-2 text-sm font-semibold text-slate-300"><i className="fa-solid fa-calendar text-cyan-300" /><span id="activityDetailDate" /><span id="activityDetailBadge" className="text-cyan-300" /></p><p id="activityDetailDescription" className="mt-6 text-base leading-8 text-slate-300" /><div className="mt-8 grid gap-4 md:grid-cols-2"><div className="rounded-md border border-cyan-300/20 bg-cyan-300/10 p-5"><h3 className="font-bold text-white"><i className="fa-solid fa-bullseye mr-2 text-cyan-300" />เหมาะสำหรับ</h3><p id="activityDetailAudience" className="mt-3 text-sm leading-7 text-slate-400" /></div><div className="rounded-md border border-violet-300/20 bg-violet-300/10 p-5"><h3 className="font-bold text-white"><i className="fa-solid fa-gem mr-2 text-violet-300" />สิ่งที่จะได้</h3><p id="activityDetailBenefit" className="mt-3 text-sm leading-7 text-slate-400" /></div></div></div></article></div></section></>;
}

function Tournaments() {
  return <CardGrid id="tournament" section={content.tournaments}><div className="mt-12 grid gap-6 lg:grid-cols-3">{content.tournaments.items.map((item) => <article key={item.title} className="modern-card rounded-lg border border-cyan-300/30 p-6 transition hover:-translate-y-2 hover:shadow-neon"><span className="rounded-full bg-lime-300/15 px-3 py-1 text-sm font-bold text-lime-300">{item.status}</span><h3 className="mt-5 text-2xl font-bold text-white">{item.title}</h3><div className="mt-5 space-y-3 text-slate-300"><p><i className="fa-solid fa-gamepad mr-2 text-cyan-300" />{item.game}</p><p><i className="fa-solid fa-calendar mr-2 text-cyan-300" />{item.date}</p><p><i className="fa-solid fa-users mr-2 text-cyan-300" />{item.teams}</p></div></article>)}</div><div className="glass-panel mt-10 rounded-lg border border-cyan-300/30 p-6 shadow-neon"><div className="grid items-center gap-6 text-center md:grid-cols-[1fr_auto_1fr]"><div><p className="font-orbitron text-2xl font-bold text-white">{content.tournaments.match.home}</p><p className="mt-2 text-sm text-cyan-300">{content.tournaments.match.game}</p></div><div className="mx-auto"><p className="font-orbitron text-4xl font-black text-cyan-300">{content.tournaments.match.score}</p><p className="mt-1 text-sm font-bold uppercase tracking-[0.25em] text-slate-400">VS</p></div><div><p className="font-orbitron text-2xl font-bold text-white">{content.tournaments.match.away}</p><p className="mt-2 text-sm text-violet-300">{content.tournaments.match.game}</p></div></div></div></CardGrid>;
}

function Achievements() { return <CardGrid id="achievements" section={content.achievements}><div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{content.achievements.items.map((title) => <article key={title} className="modern-card rounded-lg border border-cyan-300/25 p-6 text-center transition hover:-translate-y-2 hover:border-cyan-300/70 hover:shadow-neon"><i className="fa-solid fa-trophy text-5xl text-cyan-300" /><h3 className="mt-5 text-xl font-bold text-white">{title}</h3></article>)}</div></CardGrid>; }

function Gallery() { return <CardGrid id="gallery" section={content.gallery}><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{content.gallery.items.map((item) => <figure key={item.image} className={`group relative overflow-hidden rounded-lg border border-white/10 shadow-2xl ${item.wide ? "sm:col-span-2" : ""}`}><img className="h-72 w-full object-cover transition duration-500 group-hover:scale-110" src={item.image} alt={item.alt} /><figcaption className="absolute inset-0 grid place-items-center bg-gradient-to-t from-gray-950 via-gray-950/70 to-cyan-400/20 text-xl font-bold text-white opacity-0 transition duration-300 group-hover:opacity-100">{item.caption}</figcaption></figure>)}</div></CardGrid>; }

function Contact() { return <CardGrid id="contact" section={content.contact}><div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-center"><div className="space-y-4 text-slate-300">{content.contact.items.map((item) => <p key={item.text}><i className={`${item.icon} mr-3 text-cyan-300`} />{item.text}</p>)}</div><div className="glass-panel neon-border rounded-lg p-8"><h3 className="font-orbitron text-2xl font-bold text-white">{content.contact.socialTitle}</h3><div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">{content.contact.socials.map((social) => <a key={social.label} className="grid h-16 place-items-center rounded-md border border-cyan-300/30 bg-cyan-300/10 text-2xl text-cyan-300 transition hover:-translate-y-1 hover:bg-cyan-300 hover:text-gray-950" href={social.href} aria-label={social.label}><i className={social.icon} /></a>)}</div></div></div></CardGrid>; }

function Footer() { return <footer className="border-t border-cyan-300/10 bg-gray-950/95 py-10"><div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-3 lg:px-8"><div className="flex items-center gap-3"><span className="grid h-12 w-12 place-items-center rounded-lg border border-cyan-300/40 bg-cyan-400/10 p-1 shadow-neon"><img className="h-full w-full object-contain logo-glow" src={logo} alt="PSU Staff Esports Club logo" /></span><div><p className="font-orbitron text-lg font-black text-white">{content.site.name}</p><p className="text-sm text-cyan-300">{content.site.tagline}</p></div></div><div><h3 className="font-bold text-white">{content.footer.quickLinksTitle}</h3><div className="mt-4 grid grid-cols-2 gap-2 text-sm text-slate-400">{content.navigation.slice(0, 6).map((item) => <a key={item.href} className="transition hover:text-cyan-300" href={item.href}>{item.label}</a>)}</div></div><div><h3 className="font-bold text-white">{content.footer.socialTitle}</h3><div className="mt-4 flex gap-3">{content.contact.socials.map((social) => <a key={social.label} className="grid h-10 w-10 place-items-center rounded-md bg-white/5 text-cyan-300 transition hover:bg-cyan-300 hover:text-gray-950" href={social.href} aria-label={social.label}><i className={social.icon} /></a>)}</div><p className="mt-5 text-sm text-slate-500">{content.footer.copyright}</p></div></div></footer>; }

export default function Home() {
  return <><LoadingScreen /><Navbar /><main><Hero /><StreamingBoundary label="About"><About /></StreamingBoundary><StreamingBoundary label="Teams"><Teams /></StreamingBoundary><StreamingBoundary label="Players"><Players /></StreamingBoundary><StreamingBoundary label="Activities"><Activities /></StreamingBoundary><StreamingBoundary label="Tournament"><Tournaments /></StreamingBoundary><StreamingBoundary label="Achievements"><Achievements /></StreamingBoundary><StreamingBoundary label="Gallery"><Gallery /></StreamingBoundary><StreamingBoundary label="Contact"><Contact /></StreamingBoundary></main><Footer /><LegacyScripts activities={content.activities.items} /></>;
}
