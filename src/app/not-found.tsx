import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="pt-32 pb-20 min-h-screen flex flex-col items-center justify-center text-center container mx-auto px-6">
      <h1 className="text-6xl md:text-8xl font-display font-bold text-white mb-6">404</h1>
      <h2 className="text-2xl md:text-4xl font-display font-bold text-gray-200 mb-6">This route did not scale with us.</h2>
      <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10">
        The page you are looking for may have moved. Return to the homepage, explore our services, or start a project with ZCP.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="/" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-accent text-white font-bold text-sm tracking-wide uppercase hover:bg-amber-600 transition-colors">
          Back to Home
        </Link>
        <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white/10 text-white border border-white/20 font-bold text-sm tracking-wide uppercase hover:bg-white/20 transition-colors">
          Start a Project
        </Link>
      </div>
    </div>
  );
}
