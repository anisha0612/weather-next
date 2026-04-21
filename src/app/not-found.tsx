import Link from "next/link";
import type React from "react";
import Header from "@shared/Header/Header";

const NotFound: React.FC = () => {
    return (
        <div className="min-h-screen bg-[#0b0f17] text-white">
            <Header />
            <div className="relative overflow-hidden px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(90,102,255,0.14),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(244,216,107,0.08),transparent_22%)]" />
                <div className="pointer-events-none absolute -left-20 top-16 h-56 w-56 rounded-full bg-sky-400/10 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-amber-300/10 blur-3xl" />

                <main className="relative mx-auto flex min-h-[calc(100vh-7rem)] w-full max-w-5xl items-center justify-center">
                    <section className="w-full rounded-4xl border border-white/5 bg-[radial-gradient(circle_at_top,rgba(90,102,255,0.08),transparent_35%),linear-gradient(180deg,rgba(11,15,23,0.98),rgba(9,12,18,0.98))] px-6 py-14 text-center shadow-[0_40px_120px_rgba(0,0,0,0.45)] backdrop-blur-sm sm:px-10 lg:px-16">
                        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-white/5 text-3xl shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                            ☁
                        </div>

                        <div className="mt-8 text-xs font-semibold uppercase tracking-[0.35em] text-sky-300/70">
                            Weather Route
                        </div>
                        <div className="mt-4 text-7xl font-semibold tracking-tight text-white sm:text-8xl">
                            404
                        </div>

                        <h1 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                            This page drifted off the forecast.
                        </h1>
                        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
                            The route you were looking for does not exist, but the current
                            weather still does. Use the search above or head back home to
                            continue.
                        </p>

                        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                            <Link
                                href="/"
                                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#f4d86b] px-6 py-3 text-sm font-semibold text-[#332b0d] shadow-[0_10px_30px_rgba(244,216,107,0.15)] transition-transform hover:-translate-y-0.5"
                            >
                                Return Home
                            </Link>
                            <span className="text-sm text-white/40">

                            </span>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default NotFound;
