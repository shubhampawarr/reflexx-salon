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
    title: 'Haircut',
    description: 'Clean cuts and sharp styling.',
    price: 'From ₹299',
  },
  {
    title: 'Beard',
    description: 'Trim, shape, and line-up.',
    price: 'From ₹199',
  },
  {
    title: 'Hair Spa',
    description: 'Relaxing hair and scalp care.',
    price: 'From ₹799',
  },
  {
    title: 'Facial',
    description: 'Fresh cleanup and grooming.',
    price: 'From ₹699',
  },
];

const highlights = [
  {
    icon: CalendarCheck,
    title: 'Easy Booking',
    description: 'Book your appointment in a few taps.',
  },
  {
    icon: Clock,
    title: 'Quick Service',
    description: 'Choose a time that works for you.',
  },
  {
    icon: Sparkles,
    title: 'Premium Grooming',
    description: 'Clean, modern, and detail-focused.',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white">
      {/* Navbar */}
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#0b0b0b]/85 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
          <Link
            href="/"
            className="text-lg font-semibold tracking-[0.25em] md:text-xl"
          >
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
            className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-black transition hover:bg-white/85 active:scale-[0.98] md:px-5 md:text-sm"
          >
            Book Now
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden px-4 pb-12 pt-28 md:px-8 md:pt-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(180,140,90,0.16),transparent_35%)]" />

        <div className="absolute left-1/2 top-[45%] h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 md:h-[560px] md:w-[560px]" />
        <div className="absolute left-1/2 top-[45%] h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 md:h-[380px] md:w-[380px]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs text-white/70 md:mb-6 md:text-sm">
              <Scissors size={15} />
              Modern grooming. Easy booking.
            </div>

            <h1 className="text-[3.25rem] font-semibold leading-[0.92] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              Look sharp.
              <span className="block text-white/50">Book fast.</span>
            </h1>

            <p className="mt-5 max-w-xl text-[15px] leading-7 text-white/65 md:mt-6 md:text-lg">
              Book your Reflexx salon appointment in seconds. Choose your
              service, pick a time, and walk in ready.
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
                  Rating
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
                  Open
                </p>
              </div>
            </div>
          </div>
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
                Grooming made simple.
              </h2>
            </div>

            <Link
              href="/book"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold transition hover:bg-white/10 active:scale-[0.98]"
            >
              Book Now
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 transition hover:bg-white/[0.06] md:p-6"
              >
                <div className="mb-6 flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold">{service.title}</h3>

                  <span className="shrink-0 rounded-full bg-white px-3 py-2 text-xs font-semibold text-black">
                    {service.price}
                  </span>
                </div>

                <p className="text-sm leading-6 text-white/55">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section
        id="experience"
        className="border-y border-white/10 bg-white/[0.03] px-4 py-14 md:px-8 md:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-9">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-white/40 md:text-sm">
              Experience
            </p>

            <h2 className="max-w-2xl text-4xl font-semibold tracking-tight md:text-6xl">
              Clean. Quick. Premium.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3 md:gap-5">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[1.5rem] border border-white/10 bg-black/30 p-6 md:rounded-[1.75rem]"
                >
                  <div className="mb-5 inline-flex rounded-2xl bg-white p-3 text-black">
                    <Icon size={21} />
                  </div>

                  <h3 className="text-lg font-semibold md:text-xl">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/55">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl rounded-[1.75rem] border border-white/10 bg-white p-6 text-black md:rounded-[2rem] md:p-12">
          <div className="grid gap-8 md:grid-cols-[1fr_0.8fr] md:items-center md:gap-10">
            <div>
              <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-black/60">
                <Star size={16} />
                Ready for your next appointment?
              </div>

              <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
                Book your Reflexx slot.
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-6 text-black/60 md:text-base md:leading-7">
                Choose your service and preferred time. We’ll keep your slot
                ready.
              </p>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl bg-black/[0.04] p-5">
                <div className="mb-2 flex items-center gap-2 font-semibold">
                  <Clock size={18} />
                  Hours
                </div>

                <p className="text-sm leading-6 text-black/60 md:text-base">
                  Monday to Sunday · 08:00 AM - 10:00 PM
                </p>
              </div>

              <div className="rounded-2xl bg-black/[0.04] p-5">
                <div className="mb-2 flex items-center gap-2 font-semibold">
                  <MapPin size={18} />
                  Location
                </div>

                <p className="text-sm leading-6 text-black/60 md:text-base">
                  Shop no. 4, A-Wing, CHS LTD, Mahatma Gandhi Rd, Kandivali, Mahanagar Nagar, Kandivali West, Mumbai, Maharashtra 400067
                </p>
              </div>

              <Link
                href="/book"
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-black px-6 py-4 text-sm font-semibold text-white transition hover:bg-black/85 active:scale-[0.98]"
              >
                Book Appointment
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="px-4 pb-24 pt-2 text-center text-sm text-white/40 md:px-8 md:pb-8">
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