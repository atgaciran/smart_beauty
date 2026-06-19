export default function SkeletonGrid() {
  return (
    <div className="w-full max-w-5xl mx-auto mt-8 text-center animate-in fade-in duration-500">
      <div className="mb-8 flex flex-col items-center justify-center space-y-4">
        <div className="w-8 h-8 border-4 border-brand-50 border-t-brand rounded-full animate-spin"></div>
        <p className="text-slate-500 font-medium animate-pulse">AI is analyzing your profile...</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white rounded-3xl p-6 border border-slate-100 animate-pulse">
            <div className="w-full h-48 bg-slate-100 rounded-2xl mb-4"></div>
            <div className="w-2/3 h-5 bg-slate-100 rounded mt-4 w-3/4"></div>
            <div className="w-1/3 h-4 bg-slate-100 rounded mt-2 w-1/2"></div>
            <div className="flex justify-between items-center mt-6">
              <div className="w-16 h-6 bg-slate-100 rounded"></div>
              <div className="w-24 h-10 bg-slate-100 rounded-xl"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}