export default function Loading() {
  return (
    <main className="min-h-screen bg-gray-950 text-slate-100">
      <section className="grid min-h-screen place-items-center px-4">
        <div className="glass-panel neon-border w-full max-w-lg rounded-lg p-8 text-center">
          <div className="mx-auto h-16 w-16 animate-spin rounded-full border border-cyan-300/20 border-t-cyan-300 shadow-neon" />
          <p className="mt-6 font-orbitron text-xl font-black text-white text-glow">
            PSU STAFF ESPORTS CLUB
          </p>
          <p className="mt-2 font-rajdhani text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">
            Streaming Interface
          </p>
        </div>
      </section>
    </main>
  );
}
