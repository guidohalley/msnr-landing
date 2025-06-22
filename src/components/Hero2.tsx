import Spline from '@splinetool/react-spline/next';

export default function Home() {
  return (
    <main className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-zinc-900 via-zinc-800 to-black">
      <Spline
        scene="https://prod.spline.design/EuppW9s3spBYp0Sd/scene.splinecode" 
      />
    </main>
  );
}

export function Hero2Skeleton() {
  return (
    <main className="w-full h-[70vh] flex items-center justify-center bg-gradient-to-br from-zinc-900 via-zinc-800 to-black animate-pulse md:h-[100vh]">
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center gap-8">
        <div className="w-56 h-56 md:w-80 md:h-80 bg-zinc-700/40 rounded-3xl animate-pulse mb-8" />
        <div className="h-12 w-2/3 md:w-1/2 bg-zinc-700/60 rounded-xl animate-pulse mb-3" />
        <div className="h-8 w-1/2 md:w-1/3 bg-zinc-700/40 rounded-xl animate-pulse mb-3" />
        <div className="h-5 w-1/3 md:w-1/4 bg-zinc-700/30 rounded-xl animate-pulse" />
      </div>
    </main>
  );
}

