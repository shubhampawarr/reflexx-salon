'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import {
  ArrowLeft,
  CalendarCheck,
  CheckCircle2,
  Clock,
  Phone,
  Scissors,
  User,
} from 'lucide-react';

const services = [
  {
    id: 'haircut-styling',
    name: 'Haircut & Styling',
    price: 299,
    duration: 30,
  },
  {
    id: 'beard-grooming',
    name: 'Beard Grooming',
    price: 199,
    duration: 20,
  },
  {
    id: 'hair-spa-treatment',
    name: 'Hair Spa & Treatment',
    price: 799,
    duration: 60,
  },
  {
    id: 'facial-cleanup',
    name: 'Facial & Cleanup',
    price: 699,
    duration: 45,
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
  const [notes, setNotes] = useState('');
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const selectedService = useMemo(() => {
    return services.find((service) => service.id === selectedServiceId);
  }, [selectedServiceId]);

  const formattedPrice = selectedService
    ? new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0,
      }).format(selectedService.price)
    : '';

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!customerName.trim() || !customerPhone.trim() || !selectedTime) {
      alert('Please fill name, phone number, and time slot.');
      return;
    }

    if (!/^[6-9]\d{9}$/.test(customerPhone.trim())) {
      alert('Please enter a valid 10-digit Indian mobile number.');
      return;
    }

    setBookingSuccess(true);
  }

  if (bookingSuccess && selectedService) {
    return (
      <main className="min-h-screen bg-[#0b0b0b] px-5 py-8 text-white md:px-8">
        <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-3xl items-center justify-center">
          <div className="w-full rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 text-center md:p-10">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-400/10 text-emerald-300">
              <CheckCircle2 size={34} />
            </div>

            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-white/40">
              Booking Received
            </p>

            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Your Reflexx slot is ready.
            </h1>

            <p className="mx-auto mt-5 max-w-xl leading-7 text-white/60">
              Thank you, {customerName}. Your appointment request has been
              created successfully.
            </p>

            <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-black/30 p-5 text-left">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-sm text-white/40">Service</p>
                  <p className="mt-1 font-semibold">{selectedService.name}</p>
                </div>

                <div>
                  <p className="text-sm text-white/40">Price</p>
                  <p className="mt-1 font-semibold">{formattedPrice}</p>
                </div>

                <div>
                  <p className="text-sm text-white/40">Date</p>
                  <p className="mt-1 font-semibold">{selectedDate}</p>
                </div>

                <div>
                  <p className="text-sm text-white/40">Time</p>
                  <p className="mt-1 font-semibold">{selectedTime}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => {
                  setBookingSuccess(false);
                  setSelectedTime('');
                  setCustomerName('');
                  setCustomerPhone('');
                  setNotes('');
                }}
                className="flex w-full items-center justify-center rounded-full border border-white/15 px-6 py-4 text-sm font-semibold transition hover:bg-white/10"
              >
                Make Another Booking
              </button>

              <Link
                href="/"
                className="flex w-full items-center justify-center rounded-full bg-white px-6 py-4 text-sm font-semibold text-black transition hover:bg-white/85"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0b0b0b] px-5 py-8 text-white md:px-8">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-white/60 transition hover:text-white"
        >
          <ArrowLeft size={17} />
          Back to Reflexx
        </Link>

        <div className="mb-10">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-white/40">
            Book Appointment
          </p>
          <h1 className="max-w-3xl text-5xl font-semibold tracking-tight md:text-7xl">
            Choose your service and slot.
          </h1>
          <p className="mt-5 max-w-2xl leading-7 text-white/60">
            Select a grooming service, choose your preferred date and time, and
            confirm your Reflexx appointment.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
          <div className="space-y-6">
            {/* Services */}
            <section className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 md:p-7">
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-2xl bg-white p-3 text-black">
                  <Scissors size={20} />
                </div>
                <div>
                  <h2 className="text-xl font-semibold">Select Service</h2>
                  <p className="text-sm text-white/45">Choose what you want to book.</p>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {services.map((service) => {
                  const isSelected = selectedServiceId === service.id;

                  return (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => setSelectedServiceId(service.id)}
                      className={`rounded-2xl border p-5 text-left transition ${
                        isSelected
                          ? 'border-white bg-white text-black'
                          : 'border-white/10 bg-black/20 hover:bg-white/[0.06]'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="font-semibold">{service.name}</h3>
                        {isSelected && <CheckCircle2 size={19} />}
                      </div>
                      <p className={isSelected ? 'mt-3 text-sm text-black/60' : 'mt-3 text-sm text-white/45'}>
                        {service.duration} minutes
                      </p>
                      <p className="mt-4 text-lg font-semibold">
                        ₹{service.price}
                      </p>
                    </button>
                  );
                })}
              </div>
            </section>

            {/* Date */}
            <section className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 md:p-7">
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-2xl bg-white p-3 text-black">
                  <CalendarCheck size={20} />
                </div>
                <div>
                  <h2 className="text-xl font-semibold">Select Date</h2>
                  <p className="text-sm text-white/45">Pick your appointment date.</p>
                </div>
              </div>

              <input
                type="date"
                min={getTodayDate()}
                value={selectedDate}
                onChange={(event) => setSelectedDate(event.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none transition focus:border-white/40"
              />
            </section>

            {/* Time */}
            <section className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 md:p-7">
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-2xl bg-white p-3 text-black">
                  <Clock size={20} />
                </div>
                <div>
                  <h2 className="text-xl font-semibold">Select Time</h2>
                  <p className="text-sm text-white/45">Available salon slots.</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                {timeSlots.map((slot) => {
                  const isSelected = selectedTime === slot;

                  return (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedTime(slot)}
                      className={`rounded-2xl border px-4 py-3 text-sm font-semibold transition ${
                        isSelected
                          ? 'border-white bg-white text-black'
                          : 'border-white/10 bg-black/20 text-white hover:bg-white/[0.06]'
                      }`}
                    >
                      {slot}
                    </button>
                  );
                })}
              </div>
            </section>
          </div>

          {/* Customer Details + Summary */}
          <aside className="h-fit rounded-[2rem] border border-white/10 bg-white p-5 text-black md:p-7 lg:sticky lg:top-8">
            <h2 className="text-2xl font-semibold">Your Details</h2>
            <p className="mt-2 text-sm leading-6 text-black/55">
              Enter customer details to create the appointment request.
            </p>

            <div className="mt-6 space-y-4">
              <label className="block">
                <span className="mb-2 flex items-center gap-2 text-sm font-semibold">
                  <User size={16} />
                  Name
                </span>
                <input
                  type="text"
                  value={customerName}
                  onChange={(event) => setCustomerName(event.target.value)}
                  placeholder="Enter your name"
                  className="w-full rounded-2xl border border-black/10 bg-black/[0.03] px-5 py-4 text-black outline-none transition placeholder:text-black/35 focus:border-black/40"
                />
              </label>

              <label className="block">
                <span className="mb-2 flex items-center gap-2 text-sm font-semibold">
                  <Phone size={16} />
                  Phone Number
                </span>
                <input
                  type="tel"
                  value={customerPhone}
                  onChange={(event) => setCustomerPhone(event.target.value)}
                  placeholder="10-digit mobile number"
                  maxLength={10}
                  className="w-full rounded-2xl border border-black/10 bg-black/[0.03] px-5 py-4 text-black outline-none transition placeholder:text-black/35 focus:border-black/40"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold">
                  Notes
                </span>
                <textarea
                  value={notes}
                  onChange={(event) => setNotes(event.target.value)}
                  placeholder="Any preference? Optional."
                  rows={4}
                  className="w-full resize-none rounded-2xl border border-black/10 bg-black/[0.03] px-5 py-4 text-black outline-none transition placeholder:text-black/35 focus:border-black/40"
                />
              </label>
            </div>

            <div className="mt-7 rounded-2xl bg-black/[0.04] p-5">
              <h3 className="mb-4 font-semibold">Booking Summary</h3>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between gap-4">
                  <span className="text-black/50">Service</span>
                  <span className="text-right font-semibold">
                    {selectedService?.name}
                  </span>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="text-black/50">Duration</span>
                  <span className="font-semibold">
                    {selectedService?.duration} min
                  </span>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="text-black/50">Date</span>
                  <span className="font-semibold">{selectedDate}</span>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="text-black/50">Time</span>
                  <span className="font-semibold">
                    {selectedTime || 'Not selected'}
                  </span>
                </div>

                <div className="border-t border-black/10 pt-3">
                  <div className="flex justify-between gap-4">
                    <span className="text-black/50">Estimated Price</span>
                    <span className="text-lg font-semibold">{formattedPrice}</span>
                  </div>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-black px-6 py-4 text-sm font-semibold text-white transition hover:bg-black/85"
            >
              Confirm Appointment
              <CheckCircle2 size={18} />
            </button>

            <p className="mt-4 text-center text-xs leading-5 text-black/45">
              This creates an appointment request. Admin confirmation and database
              saving will be added in the next step.
            </p>
          </aside>
        </form>
      </div>
    </main>
  );
}