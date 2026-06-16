import Link from 'next/link';
import {
  ArrowRight,
  Clock,
  MapPin,
  Scissors,
  Sparkles,
  Star,
} from 'lucide-react';

const services = [
  {
    title: 'Haircut',
    price: 'From ₹299',
    image: '/images/reflexx/haircut.jpg',
  },
  {
    title: 'Beard',
    price: 'From ₹199',
    image: '/images/reflexx/beard.jpg',
  },
  {
    title: 'Hair Spa',
    price: 'From ₹799',
    image: '/images/reflexx/hair-spa.jpg',
  },
  {
    title: 'Facial',
    price: 'From ₹699',
    image: '/images/reflexx/facial.jpg',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f7f1e8] text-[#17120d]">
      {/* Navbar */}
      <header className="fixed left-0 top-0 z-50 w-full border-b border-black/10 bg-[#f7f1e8]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
          <Link
            href="/"
            className="text-lg font-bold tracking-[0.22em] md:text-xl"
          >
            REFLEXX
          </Link>

          <div className="hidden items-center gap-8 text-sm font-medium text-black/60 md:flex">
            <a href="#services" className="transition hover:text-black">
              Services
            </a>
            <a href="#experience" className="transition hover:text-black">
              Experience
            </a>
            <a href="#contact" className="transition hover:text-black">
              Contact
            </a>
          </div>

          <Link
            href="/book"
            className="rounded-full bg-black px-4 py-2 text-xs font-semibold text-white transition hover:bg-black/85 active:scale-[0.98] md:px-5 md:text-sm"
          >
            Book Now
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden px-5 pb-12 pt-24 md:px-8 md:pb-14 md:pt-28">
        <div className="pointer-events-none absolute bottom-8 left-1/2 h-px w-[88%] -translate-x-1/2 bg-gradient-to-r from-transparent via-black/10 to-transparent" />

        <div className="mx-auto grid max-w-7xl gap-9 md:grid-cols-[0.95fr_1.05fr] md:items-center">
          {/* Hero Content */}
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs font-medium text-black/60 shadow-sm">
              <Scissors size={15} />
              Salon & grooming studio
            </div>

            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-black/45 md:text-sm">
              Reflexx by Parth
            </p>

            <h1 className="max-w-3xl text-[2.45rem] font-semibold leading-[0.96] tracking-tight text-black sm:text-5xl md:text-6xl lg:text-[4.65rem]">
              Style that
              <span className="block text-[#9b6b43]">reflects you.</span>
            </h1>

            <p className="mt-4 max-w-xl text-[15px] leading-7 text-black/60 md:text-base">
              Haircuts, beard grooming, hair care, and salon services in
              Kandivali West.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/book"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-black/10 transition hover:bg-black/85 active:scale-[0.98]"
              >
                Book Appointment
                <ArrowRight size={18} />
              </Link>

              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-black/15 bg-white/70 px-7 py-4 text-sm font-semibold text-black transition hover:bg-white active:scale-[0.98]"
              >
                View Services
              </a>
            </div>

            <div className="mt-7 grid max-w-md grid-cols-3 gap-0 rounded-[1.5rem] border border-black/10 bg-white/55 p-4 text-center shadow-sm backdrop-blur">
              <div className="border-r border-black/10 px-2">
                <p className="text-lg font-semibold md:text-xl">4.7</p>
                <p className="mt-1 text-[11px] font-medium text-black/45">
                  Rating
                </p>
              </div>

              <div className="border-r border-black/10 px-2">
                <p className="text-lg font-semibold md:text-xl">55+</p>
                <p className="mt-1 text-[11px] font-medium text-black/45">
                  Reviews
                </p>
              </div>

              <div className="px-2">
                <p className="text-lg font-semibold md:text-xl">7 Days</p>
                <p className="mt-1 text-[11px] font-medium text-black/45">
                  Open
                </p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div>
            <div className="relative mx-auto w-full max-w-[340px] overflow-hidden rounded-[1.5rem] border border-black/10 bg-white p-2 shadow-xl md:max-w-lg md:rounded-[1.75rem] md:shadow-2xl">
              <div className="pointer-events-none absolute -right-5 -top-5 z-10 h-24 w-24 rounded-full border border-white/60" />
              <div className="pointer-events-none absolute -bottom-8 -left-8 z-10 h-32 w-32 rounded-full border border-white/40" />

              <div className="aspect-[4/3.75] overflow-hidden rounded-[1.15rem] md:aspect-[4/4.45] md:rounded-[1.35rem]">
                <img
                  src="/images/reflexx/hero.jpg"
                  alt="Reflexx salon interior"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/70 bg-white/90 p-4 shadow-xl backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black text-white">
                    <Sparkles size={18} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold">Premium grooming</p>
                    <p className="mt-1 text-xs text-black/55">
                      Clean cuts. Sharp finish. Easy booking.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mx-auto mt-3 grid max-w-[340px] grid-cols-2 gap-3 text-center text-xs font-medium text-black/55 md:hidden">
              <div className="rounded-2xl border border-black/10 bg-white/70 px-4 py-3">
                Walk in ready
              </div>
              <div className="rounded-2xl border border-black/10 bg-white/70 px-4 py-3">
                Book in seconds
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="px-5 py-12 md:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col justify-between gap-5 md:mb-10 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-black/40">
                Services
              </p>

              <h2 className="max-w-2xl text-4xl font-semibold tracking-tight md:text-6xl">
                Choose your look.
              </h2>
            </div>

            <Link
              href="/book"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-black/15 bg-white/70 px-6 py-3 text-sm font-semibold transition hover:bg-white active:scale-[0.98]"
            >
              Book Now
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-4">
            {services.map((service) => (
              <Link
                href="/book"
                key={service.title}
                className="group overflow-hidden rounded-[1.25rem] border border-black/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl md:rounded-[1.75rem]"
              >
                <div className="aspect-[4/3] overflow-hidden bg-black/5">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-3 md:p-5">
                  <h3 className="text-base font-semibold md:text-xl">
                    {service.title}
                  </h3>

                  <span className="mt-2 inline-flex rounded-full bg-[#f0e2d1] px-3 py-1.5 text-[11px] font-semibold text-black md:text-xs">
                    {service.price}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Experience / Vibe */}
      <section id="experience" className="px-5 py-10 md:px-8 md:py-14">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-black/10 bg-white p-4 shadow-sm md:p-5">
          <div className="grid gap-5 md:grid-cols-[0.85fr_1fr] md:items-center">
            <div className="relative overflow-hidden rounded-[1.5rem]">
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              <img
                src="/images/reflexx/hero.jpg"
                alt="Reflexx salon setup"
                className="h-full max-h-[260px] min-h-[200px] w-full object-cover md:max-h-[390px]"
              />
              <div className="absolute bottom-4 left-4 z-20 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-black shadow-lg">
                Reflexx studio
              </div>
            </div>

            <div className="px-1 py-3 text-center md:px-8 md:py-6">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-black/40">
                Experience
              </p>

              <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl">
                Clean space. Sharp service.
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-black/60 md:text-base md:leading-7">
                Reflexx brings together a comfortable salon setup, skilled
                grooming, and simple online booking.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3">
                <div className="rounded-2xl border border-black/10 bg-[#f7f1e8] p-4">
                  <Star className="mx-auto mb-3" size={20} />
                  <h3 className="text-sm font-semibold">Trusted locally</h3>
                  <p className="mt-2 text-xs leading-5 text-black/55">
                    4.7 rating with 55+ reviews.
                  </p>
                </div>

                <div className="rounded-2xl border border-black/10 bg-[#f7f1e8] p-4">
                  <Clock className="mx-auto mb-3" size={20} />
                  <h3 className="text-sm font-semibold">Open daily</h3>
                  <p className="mt-2 text-xs leading-5 text-black/55">
                    Visit any day of the week.
                  </p>
                </div>

                <div className="col-span-2 rounded-2xl border border-black/10 bg-[#f7f1e8] p-4 md:col-span-1">
                  <Scissors className="mx-auto mb-3" size={20} />
                  <h3 className="text-sm font-semibold">Easy booking</h3>
                  <p className="mt-2 text-xs leading-5 text-black/55">
                    Select service, date, and time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact */}
      <section id="contact" className="px-5 py-12 md:px-8 md:py-20">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm md:p-12">
          <div className="grid gap-8 md:grid-cols-[1fr_0.8fr] md:items-center">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-black/40">
                Visit Reflexx
              </p>

              <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
                Book your slot today.
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-6 text-black/60 md:text-base md:leading-7">
                Find us in Kandivali West and book your next grooming appointment
                online.
              </p>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-black/10 bg-[#f7f1e8] p-5">
                <div className="mb-2 flex items-center gap-2 font-semibold">
                  <Clock size={18} />
                  Hours
                </div>

                <p className="text-sm leading-6 text-black/60">
                  Monday to Sunday · 10:00 AM - 10:00 PM
                </p>
              </div>

              <div className="rounded-2xl border border-black/10 bg-[#f7f1e8] p-5">
                <div className="mb-2 flex items-center gap-2 font-semibold">
                  <MapPin size={18} />
                  Location
                </div>

                <p className="text-sm leading-6 text-black/60">
                  Shop no. 4, A-Wing, CHS LTD, Mahatma Gandhi Rd, Kandivali,
                  Mahanagar Nagar, Kandivali West, Mumbai, Maharashtra 400067
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

      <footer className="px-4 pb-24 pt-2 text-center text-sm text-black/45 md:px-8 md:pb-8">
        © {new Date().getFullYear()} Reflexx. All rights reserved.
      </footer>

      {/* Mobile Sticky Booking Bar */}
      <div className="fixed bottom-0 left-0 z-50 w-full border-t border-black/10 bg-[#f7f1e8]/95 p-4 backdrop-blur-xl md:hidden">
        <Link
          href="/book"
          className="flex w-full items-center justify-center gap-2 rounded-full bg-black px-6 py-4 text-sm font-semibold text-white transition active:scale-[0.98]"
        >
          Book Appointment
          <ArrowRight size={18} />
        </Link>
      </div>
    </main>
  );
}