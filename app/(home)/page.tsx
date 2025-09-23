import Link from 'next/link';
import { ArrowRight, Code2, Zap, Shield, BookOpen, Rocket } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-between min-h-full bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-950 dark:via-gray-950/20 dark:to-gray-950/20">
      {/* Hero Section */}
      <section className="relative h-full overflow-hidden ">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />
        <div className="relative mx-auto max-w-5xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <div className="mb-8 flex justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm font-semibold leading-6 text-gray-600 ring-1 ring-gray-950/10 hover:ring-gray-950/20 dark:text-gray-300 dark:ring-gray-100/10 dark:hover:ring-gray-100/20">
                <Link href="https://t.me/ritualchain" className="font-medium text-indigo-600 dark:text-indigo-100">
                Join our new Developer Telegram Community ✨
                </Link>
              </div>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
              Build on Ritual Chain
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Build on Ritual Chain, the most powerful blockchain infrastructure for developers looking to build on the blockchain with AI-native infrastructure. Build, deploy, and scale decentralized applications with enterprise-grade security and lightning-fast performance.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/docs"
                className="group rounded-md bg-indigo-600 px-6 py-2 w-2/5 text-center text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-200"
              >
                Get Started
                {/* <ArrowRight className="ml-2 inline h-4 w-4 transition-transform group-hover:translate-x-1" /> */}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}