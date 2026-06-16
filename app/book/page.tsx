'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { ArrowLeft, CheckCircle2, Clock, Scissors } from 'lucide-react';

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
  '08:30 PM',
  '09:00 PM',
  '09:30 PM',
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
      <main className="flex min-h-screen items-center justify-center bg-[#f7f1e8] px-4 py-8 text-[#17120d]">
        <div className="w-full max-w-md rounded-[2rem] border border-black/10 bg-white p-6 text-center shadow-xl">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
            <CheckCircle2 size={30} />
          </div>

          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-black/40">
            Reflexx
          </p>

          <h1 className="text-3xl font-semibold">Booking received</h1>

          <p className="mt-4 text-sm leading-6 text-black/60">
            Thank you, {customerName}. Your appointment request has been created.
          </p>

          <div className="mt-6 rounded-2xl border border-black/10 bg-[#f7f1e8] p-4 text-left text-sm">
            <div className="flex justify-between gap-4 py-2">
              <span className="text-black/45">Service</span>
              <span className="font-semibold">{selectedService.name}</span>
            </div>

            <div className="flex justify-between gap-4 py-2">
              <span className="text-black/45">Date</span>
              <span className="font-semibold">{selectedDate}</span>
            </div>

            <div className="flex justify-between gap-4 py-2">
              <span className="text-black/45">Time</span>
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
              className="rounded-full bg-black px-6 py-4 text-sm font-semibold text-white transition active:scale-[0.98]"
            >
              Book Again
            </button>

            <Link
              href="/"
              className="rounded-full border border-black/15 px-6 py-4 text-sm font-semibold text-black transition active:scale-[0.98]"
            >
              Back Home
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f7f1e8] px-4 pb-28 pt-6 text-[#17120d]">
      <div className="mx-auto max-w-xl">
        <Link
          href="/"
          className="mb-5 inline-flex items-center gap-2 text-sm font-medium text-black/60"
        >
          <ArrowLeft size={17} />
          Back
        </Link>

        <div className="mb-5">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-black/40">
            Reflexx
          </p>

          <h1 className="text-[2.35rem] font-semibold leading-tight tracking-tight">
            Book appointment
          </h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-[2rem] border border-black/10 bg-white p-4 shadow-xl shadow-black/5 md:p-6"
        >
          <div className="mb-5 rounded-[1.5rem] bg-[#f7f1e8] p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white">
                <Scissors size={18} />
              </div>

              <div>
                <p className="text-sm font-semibold">Reflexx by Parth</p>
                <p className="mt-1 text-xs text-black/50">
                  Select service, date and time.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <section>
              <h2 className="mb-3 text-sm font-semibold text-black/60">
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
                          ? 'border-black bg-black text-white'
                          : 'border-black/10 bg-[#f7f1e8] text-black hover:bg-[#f0e2d1]'
                      }`}
                    >
                      <p className="text-sm font-semibold md:text-base">
                        {service.name}
                      </p>

                      <p
                        className={`mt-2 text-sm ${
                          isSelected ? 'text-white/60' : 'text-black/45'
                        }`}
                      >
                        ₹{service.price}
                      </p>
                    </button>
                  );
                })}
              </div>
            </section>

            <div className="grid gap-4 md:grid-cols-2">
              <section>
                <h2 className="mb-3 text-sm font-semibold text-black/60">
                  Select date
                </h2>

                <input
                  type="date"
                  min={getTodayDate()}
                  value={selectedDate}
                  onChange={(event) => setSelectedDate(event.target.value)}
                  className="w-full rounded-2xl border border-black/10 bg-[#f7f1e8] px-4 py-4 text-sm text-black outline-none transition focus:border-black/40"
                />
              </section>

              <section>
                <h2 className="mb-3 text-sm font-semibold text-black/60">
                  Select time
                </h2>

                <select
                  value={selectedTime}
                  onChange={(event) => setSelectedTime(event.target.value)}
                  className="w-full appearance-none rounded-2xl border border-black/10 bg-[#f7f1e8] px-4 py-4 text-sm text-black outline-none transition focus:border-black/40"
                >
                  <option value="">Choose time</option>

                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </section>
            </div>

            <section>
              <h2 className="mb-3 text-sm font-semibold text-black/60">
                Your details
              </h2>

              <div className="grid gap-3 md:grid-cols-2">
                <input
                  type="text"
                  value={customerName}
                  onChange={(event) => setCustomerName(event.target.value)}
                  placeholder="Name"
                  className="w-full rounded-2xl border border-black/10 bg-[#f7f1e8] px-4 py-4 text-sm text-black outline-none placeholder:text-black/35 transition focus:border-black/40"
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
                  className="w-full rounded-2xl border border-black/10 bg-[#f7f1e8] px-4 py-4 text-sm text-black outline-none placeholder:text-black/35 transition focus:border-black/40"
                />
              </div>
            </section>

            <div className="hidden rounded-[1.5rem] border border-black/10 bg-[#f7f1e8] p-4 md:block">
              <div className="flex items-center justify-between gap-4 text-sm">
                <div>
                  <p className="font-semibold">{selectedService?.name}</p>
                  <p className="mt-1 text-black/45">
                    {selectedTime || 'Select time'}
                  </p>
                </div>

                <div className="text-right">
                  <p className="font-semibold">₹{selectedService?.price}</p>
                  <p className="mt-1 text-black/45">{selectedDate}</p>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="hidden w-full rounded-full bg-black px-6 py-4 text-sm font-semibold text-white transition active:scale-[0.98] md:block"
            >
              Confirm Booking
            </button>
          </div>
        </form>

        <div className="mt-5 flex items-center justify-center gap-2 text-xs text-black/45">
          <Clock size={14} />
          Monday to Sunday · 10:00 AM - 10:00 PM
        </div>
      </div>

      <div className="fixed bottom-0 left-0 z-50 w-full border-t border-black/10 bg-[#f7f1e8]/95 p-4 backdrop-blur-xl md:hidden">
        <div className="mx-auto max-w-xl">
          <div className="mb-3 flex items-center justify-between gap-4 text-xs">
            <div>
              <p className="font-semibold">{selectedService?.name}</p>
              <p className="mt-1 text-black/45">
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
                ? 'bg-black text-white'
                : 'cursor-not-allowed bg-black/20 text-black/40'
            }`}
          >
            Confirm Booking
          </button>
        </div>
      </div>
    </main>
  );
}