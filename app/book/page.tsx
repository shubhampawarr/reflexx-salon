'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

const services = [
  {
    id: 'haircut-styling',
    name: 'Haircut',
    price: 299,
  },
  {
    id: 'beard-grooming',
    name: 'Beard',
    price: 199,
  },
  {
    id: 'hair-spa-treatment',
    name: 'Hair Spa',
    price: 799,
  },
  {
    id: 'facial-cleanup',
    name: 'Facial',
    price: 699,
  },
];

const timeSlots = [
  '10:00 AM',
  '10:30 AM',
  '11:00 AM',
  '11:30 AM',
  '12:00 PM',
  '12:30 PM',
  '01:00 PM',
  '01:30 PM',
  '02:00 PM',
  '02:30 PM',
  '03:00 PM',
  '03:30 PM',
  '04:00 PM',
  '04:30 PM',
  '05:00 PM',
  '05:30 PM',
  '06:00 PM',
  '06:30 PM',
  '07:00 PM',
  '07:30 PM',
  '08:00 PM',
];

function getTodayDate() {
  return new Date().toISOString().split('T')[0];
}

export default function BookPage() {
  const [selectedServiceId, setSelectedServiceId] = useState(services[0].id);
  const [selectedDate, setSelectedDate] = useState(getTodayDate());
  const [selectedTime, setSelectedTime] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [success, setSuccess] = useState(false);

  const selectedService = useMemo(() => {
    return services.find((service) => service.id === selectedServiceId);
  }, [selectedServiceId]);

  const isFormReady =
    selectedService &&
    selectedDate &&
    selectedTime &&
    customerName.trim() &&
    /^[6-9]\d{9}$/.test(customerPhone.trim());

  function handleSubmit(event?: React.FormEvent<HTMLFormElement>) {
    event?.preventDefault();

    if (!customerName.trim()) {
      alert('Please enter your name.');
      return;
    }

    if (!/^[6-9]\d{9}$/.test(customerPhone.trim())) {
      alert('Please enter a valid 10-digit mobile number.');
      return;
    }

    if (!selectedTime) {
      alert('Please select a time.');
      return;
    }

    setSuccess(true);
  }

  if (success && selectedService) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#0b0b0b] px-4 text-white">
        <div className="w-full max-w-md rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 text-center">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-400/10 text-emerald-300">
            <CheckCircle2 size={30} />
          </div>

          <h1 className="text-3xl font-semibold">Booking received</h1>

          <p className="mt-4 text-sm leading-6 text-white/60">
            Thank you, {customerName}. Your Reflexx appointment request has been
            created.
          </p>

          <div className="mt-6 rounded-2xl bg-black/30 p-4 text-left text-sm">
            <div className="flex justify-between gap-4 py-2">
              <span className="text-white/45">Service</span>
              <span className="font-semibold">{selectedService.name}</span>
            </div>

            <div className="flex justify-between gap-4 py-2">
              <span className="text-white/45">Date</span>
              <span className="font-semibold">{selectedDate}</span>
            </div>

            <div className="flex justify-between gap-4 py-2">
              <span className="text-white/45">Time</span>
              <span className="font-semibold">{selectedTime}</span>
            </div>
          </div>

          <div className="mt-6 grid gap-3">
            <button
              type="button"
              onClick={() => {
                setSuccess(false);
                setSelectedTime('');
                setCustomerName('');
                setCustomerPhone('');
              }}
              className="rounded-full bg-white px-6 py-4 text-sm font-semibold text-black"
            >
              Book Again
            </button>

            <Link
              href="/"
              className="rounded-full border border-white/15 px-6 py-4 text-sm font-semibold text-white"
            >
              Back Home
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0b0b0b] px-4 pb-28 pt-6 text-white">
      <div className="mx-auto max-w-2xl">
        <Link
          href="/"
          className="mb-7 inline-flex items-center gap-2 text-sm text-white/60"
        >
          <ArrowLeft size={17} />
          Back
        </Link>

        <h1 className="text-4xl font-semibold tracking-tight">
          Book appointment
        </h1>

        <form onSubmit={handleSubmit} className="mt-8 space-y-7">
          <section>
            <h2 className="mb-3 text-sm font-semibold text-white/60">
              Select service
            </h2>

            <div className="grid grid-cols-2 gap-3">
              {services.map((service) => {
                const isSelected = selectedServiceId === service.id;

                return (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => setSelectedServiceId(service.id)}
                    className={`rounded-2xl border p-4 text-left transition active:scale-[0.98] ${
                      isSelected
                        ? 'border-white bg-white text-black'
                        : 'border-white/10 bg-white/[0.04] text-white'
                    }`}
                  >
                    <p className="font-semibold">{service.name}</p>
                    <p
                      className={`mt-2 text-sm ${
                        isSelected ? 'text-black/55' : 'text-white/45'
                      }`}
                    >
                      ₹{service.price}
                    </p>
                  </button>
                );
              })}
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-sm font-semibold text-white/60">
              Select date
            </h2>

            <input
              type="date"
              min={getTodayDate()}
              value={selectedDate}
              onChange={(event) => setSelectedDate(event.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white outline-none focus:border-white/40"
            />
          </section>

          <section>
            <h2 className="mb-3 text-sm font-semibold text-white/60">
              Select time
            </h2>

            <select
              value={selectedTime}
              onChange={(event) => setSelectedTime(event.target.value)}
              className="w-full appearance-none rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white outline-none focus:border-white/40"
            >
              <option value="" className="bg-[#0b0b0b] text-white">
                Choose time slot
              </option>

              {timeSlots.map((slot) => (
                <option
                  key={slot}
                  value={slot}
                  className="bg-[#0b0b0b] text-white"
                >
                  {slot}
                </option>
              ))}
            </select>
          </section>

          <section>
            <h2 className="mb-3 text-sm font-semibold text-white/60">
              Your details
            </h2>

            <div className="space-y-3">
              <input
                type="text"
                value={customerName}
                onChange={(event) => setCustomerName(event.target.value)}
                placeholder="Name"
                className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white outline-none placeholder:text-white/35 focus:border-white/40"
              />

              <input
                type="tel"
                value={customerPhone}
                onChange={(event) =>
                  setCustomerPhone(
                    event.target.value.replace(/\D/g, '').slice(0, 10)
                  )
                }
                placeholder="Phone number"
                inputMode="numeric"
                maxLength={10}
                className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white outline-none placeholder:text-white/35 focus:border-white/40"
              />
            </div>
          </section>

          <button
            type="submit"
            className="hidden w-full rounded-full bg-white px-6 py-4 text-sm font-semibold text-black md:block"
          >
            Confirm Booking
          </button>
        </form>
      </div>

      <div className="fixed bottom-0 left-0 z-50 w-full border-t border-white/10 bg-[#0b0b0b]/95 p-4 backdrop-blur-xl md:hidden">
        <div className="mx-auto max-w-2xl">
          <div className="mb-3 flex items-center justify-between gap-4 text-xs">
            <div>
              <p className="font-semibold">{selectedService?.name}</p>
              <p className="mt-1 text-white/45">
                {selectedTime || 'Select time'}
              </p>
            </div>

            <p className="font-semibold">₹{selectedService?.price}</p>
          </div>

          <button
            type="button"
            onClick={() => handleSubmit()}
            disabled={!isFormReady}
            className={`w-full rounded-full px-6 py-4 text-sm font-semibold transition active:scale-[0.98] ${
              isFormReady
                ? 'bg-white text-black'
                : 'cursor-not-allowed bg-white/25 text-white/50'
            }`}
          >
            Confirm Booking
          </button>
        </div>
      </div>
    </main>
  );
}