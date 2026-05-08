export function BlogSkeleton() {
  return (
    <div className="min-h-screen animate-pulse bg-stone-950 px-4 py-28 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="h-8 w-48 rounded-full bg-white/10" />
        <div className="mt-8 h-16 max-w-3xl rounded-2xl bg-white/10" />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div key={item} className="h-96 rounded-[1.5rem] bg-white/10" />
          ))}
        </div>
      </div>
    </div>
  );
}
