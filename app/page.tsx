import Link from 'next/link';
import {
  ArrowRight,
  CalendarCheck,
  Clock,
  MapPin,
  Scissors,
  Sparkles,
  Star,
} from 'lucide-react';

const services = [
  {
    title: 'Haircut & Styling',
    description:
      'Sharp cuts, modern styling, and clean finishing for everyday confidence.',
    price: 'From ₹299',
  },
  {
    title: 'Beard Grooming',
    description:
      'Precise trims, shaping, line-ups, and beard care for a polished look.',
    price: 'From ₹199',
  },
  {
    title: 'Hair Spa & Treatment',
    description:
      'Relaxing care treatments designed to refresh your scalp and hair.',
    price: 'From ₹799',
  },
  {
    title: 'Facial & Cleanup',
    description:
      'Skin-focused grooming sessions for a fresh, clean, and premium finish.',
    price: 'From ₹699',
  },
];

const highlights = [
  {
    icon: CalendarCheck,
    title: 'Easy Booking',
    description:
      'Pick your service, choose your time, and confirm your appointment in seconds.',
  },
  {
    icon: Clock,
    title: 'Quick Slots',
    description:
      'Book available time slots without calling or waiting for confirmation.',
  },
  {
    icon: Sparkles,
    title: 'Premium Experience',
    description:
      'A clean, modern salon experience built around style, comfort, and detail.',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white">
      {/* Navbar */}
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#0b0b0b]/85 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
          <Link href="/" className="text-lg font-semibold tracking-[0.25em] md:text-xl">
            REFLEXX
          </Link>

          <div className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <a href="#services" className="transition hover:text-white">
              Services
            </a>
            <a href="#experience" className="transition hover:text-white">
              Experience
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </div>

          <Link
            href="/book"
            className="hidden rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition hover:bg-white/85 md:inline-flex"
          >
            Book Now
          </Link>

          <Link
            href="/book"
            className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-black transition active:scale-[0.98] md:hidden"
          >
            Book
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative flex min-h-[92vh] items-center overflow-hidden px-4 pb-12 pt-28 md:min-h-screen md:px-8 md:pt-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.16),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(180,140,90,0.18),transparent_35%)]" />

        <div className="absolute left-1/2 top-[45%] h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 md:h-[560px] md:w-[560px]" />
        <div className="absolute left-1/2 top-[45%] h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 md:h-[380px] md:w-[380px]" />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-12">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs text-white/70 md:mb-6 md:text-sm">
              <Scissors size={15} />
              Modern grooming. Effortless bookings.
            </div>

            <h1 className="max-w-4xl text-[3.15rem] font-semibold leading-[0.92] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              Look sharp.
              <span className="block text-white/50">Book smarter.</span>
            </h1>

            <p className="mt-5 max-w-xl text-[15px] leading-7 text-white/65 md:mt-6 md:text-lg">
              Book your Reflexx salon appointment in seconds. Choose your service,
              pick your preferred slot, and walk in ready.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row md:mt-9 md:gap-4">
              <Link
                href="/book"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-black transition hover:bg-white/85 active:scale-[0.98]"
              >
                Book Appointment
                <ArrowRight size={18} />
              </Link>

              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10 active:scale-[0.98]"
              >
                View Services
              </a>
            </div>

            <div className="mt-8 grid max-w-xl grid-cols-3 gap-3 border-t border-white/10 pt-5 md:mt-10 md:gap-4 md:pt-6">
              <div>
                <p className="text-xl font-semibold md:text-2xl">4.8</p>
                <p className="mt-1 text-[11px] leading-4 text-white/50 md:text-xs">
                  Client Rating
                </p>
              </div>

              <div>
                <p className="text-xl font-semibold md:text-2xl">10+</p>
                <p className="mt-1 text-[11px] leading-4 text-white/50 md:text-xs">
                  Services
                </p>
              </div>

              <div>
                <p className="text-xl font-semibold md:text-2xl">7 Days</p>
                <p className="mt-1 text-[11px] leading-4 text-white/50 md:text-xs">
                  Open Weekly
                </p>
              </div>
            </div>
          </div>

          {/* Booking Preview Card */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-3 shadow-2xl backdrop-blur-xl md:rounded-[2rem] md:p-4">
              <div className="rounded-[1.35rem] bg-[#151515] p-5 md:rounded-[1.5rem] md:p-6">
                <div className="mb-5 flex items-center justify-between md:mb-6">
                  <div>
                    <p className="text-xs text-white/45 md:text-sm">
                      Today at Reflexx
                    </p>
                    <h2 className="mt-1 text-xl font-semibold md:text-2xl">
                      Available Slots
                    </h2>
                  </div>

                  <div className="rounded-full bg-white p-3 text-black">
                    <CalendarCheck size={21} />
                  </div>
                </div>

                <div className="space-y-3">
                  {['11:00 AM', '12:30 PM', '03:00 PM', '06:30 PM'].map((slot) => (
                    <div
                      key={slot}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4"
                    >
                      <div>
                        <p className="text-sm font-medium md:text-base">{slot}</p>
                        <p className="mt-1 text-xs text-white/45 md:text-sm">
                          Haircut & Styling
                        </p>
                      </div>

                      <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-[11px] font-medium text-emerald-300 md:text-xs">
                        Open
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/book"
                  className="mt-6 flex w-full items-center justify-center rounded-2xl bg-white px-5 py-4 text-sm font-semibold text-black transition hover:bg-white/85 active:scale-[0.98]"
                >
                  Reserve a Slot
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section
        id="experience"
        className="border-y border-white/10 bg-white/[0.03] px-4 py-14 md:px-8 md:py-20"
      >
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3 md:gap-5">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-[1.5rem] border border-white/10 bg-black/30 p-6 md:rounded-[1.75rem] md:p-7"
              >
                <div className="mb-5 inline-flex rounded-2xl bg-white p-3 text-black md:mb-6">
                  <Icon size={21} />
                </div>

                <h3 className="text-lg font-semibold md:text-xl">{item.title}</h3>

                <p className="mt-3 text-sm leading-6 text-white/55 md:text-base md:leading-7">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-9 flex flex-col justify-between gap-6 md:mb-12 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.3em] text-white/40 md:text-sm">
                Services
              </p>

              <h2 className="max-w-2xl text-4xl font-semibold tracking-tight md:text-6xl">
                Grooming services built around your style.
              </h2>
            </div>

            <Link
              href="/book"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold transition hover:bg-white/10 active:scale-[0.98]"
            >
              Book a Service
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-2 md:gap-5">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6 transition hover:bg-white/[0.06] md:rounded-[1.75rem] md:p-7"
              >
                <div className="mb-6 flex items-start justify-between gap-4 md:mb-8">
                  <h3 className="text-xl font-semibold md:text-2xl">
                    {service.title}
                  </h3>

                  <span className="shrink-0 rounded-full bg-white px-3 py-2 text-xs font-semibold text-black md:px-4 md:text-sm">
                    {service.price}
                  </span>
                </div>

                <p className="max-w-xl text-sm leading-6 text-white/55 md:text-base md:leading-7">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="px-4 pb-10 md:px-8">
        <div className="mx-auto max-w-7xl rounded-[1.75rem] border border-white/10 bg-white p-6 text-black md:rounded-[2rem] md:p-12">
          <div className="grid gap-8 md:grid-cols-[1fr_0.8fr] md:items-center md:gap-10">
            <div>
              <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-black/60">
                <Star size={16} />
                Ready for your next appointment?
              </div>

              <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
                Book your Reflexx slot today.
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-6 text-black/60 md:text-base md:leading-7">
                Choose your service and preferred time. The Reflexx team will keep
                your slot ready.
              </p>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl bg-black/[0.04] p-5">
                <div className="mb-2 flex items-center gap-2 font-semibold">
                  <Clock size={18} />
                  Opening Hours
                </div>

                <p className="text-sm leading-6 text-black/60 md:text-base">
                  Monday to Sunday · 10:00 AM - 9:00 PM
                </p>
              </div>

              <div className="rounded-2xl bg-black/[0.04] p-5">
                <div className="mb-2 flex items-center gap-2 font-semibold">
                  <MapPin size={18} />
                  Location
                </div>

                <p className="text-sm leading-6 text-black/60 md:text-base">
                  Add Reflexx salon address here
                </p>
              </div>

              <Link
                href="/book"
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-black px-6 py-4 text-sm font-semibold text-white transition hover:bg-black/85 active:scale-[0.98]"
              >
                Start Booking
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="px-4 pb-24 pt-8 text-center text-sm text-white/40 md:px-8 md:pb-8">
        © {new Date().getFullYear()} Reflexx. All rights reserved.
      </footer>

      {/* Mobile Sticky Booking Bar */}
      <div className="fixed bottom-0 left-0 z-50 w-full border-t border-white/10 bg-[#0b0b0b]/95 p-4 backdrop-blur-xl md:hidden">
        <Link
          href="/book"
          className="flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-semibold text-black transition active:scale-[0.98]"
        >
          Book Appointment
          <ArrowRight size={18} />
        </Link>
      </div>
    </main>
  );
}