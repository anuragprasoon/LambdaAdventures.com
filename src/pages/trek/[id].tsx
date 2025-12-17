import Head from "next/head";
import TrekAbout from "@/components/About";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import TrekSection from "@/components/TrekSection";
import CustomTrip from "@/components/CustomForm";
import CheckCircle from "@mui/icons-material/CheckCircle";
import Block from "@mui/icons-material/Block";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DateRangeIcon from '@mui/icons-material/DateRange';
import MapIcon from '@mui/icons-material/Map';
import SpeedIcon from '@mui/icons-material/Speed';
import Link from "next/link";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import FAQ from '@/components/Faq'
import ItineraryComponent from "@/components/Itinerary";

export default function DynamicTrek() {

  const [showAnimation, setShowAnimation] = useState(false);
  const [popup, setPopup] = useState(false);

  const popOpen = () => {
    setPopup(true);
  };

  const [formData, setFormData] = useState({
          name: "",
          phone: "",
          email: "",
          startDate:"",
          coupon: "",
        });
  
  const handleChange = (
          e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        ) => {
          const { name, value } = e.target;
          setFormData((prev) => ({
            ...prev,
            [name]: value,
          }));
        };
      
        const handleSubmit = async (e: React.FormEvent) => {
          e.preventDefault();

          setShowAnimation(true);
          
          const res = await fetch("/api/query", { 
            method: "POST", headers: {
            "Content-Type": "application/json"},
            body: JSON.stringify({
              name: formData.name,
              phone: formData.phone,
              email: formData.email,
              startDate: formData.startDate,
              tripid: trip.id,
              coupon: formData.coupon,
            })
        });
        
        
        setTimeout(() => setShowAnimation(false), 2500);
        setPopup(false);
        console.log("Form submitted:", formData);
        alert("Thank You! Your Message has been sent");
      
          setFormData({
            name: "",
            phone: "",
            email: "",
            startDate:"",
            coupon: "",
          });
          
  
        };

        


  const popularTreks = [{
  "id":79,
  "imageSrc": "https://res.cloudinary.com/dibrmj6nh/image/upload/v1745905052/Everest-Base-Camp_exwewg.webp",
  "title": "Everest Base Camp Trek",
  "location": "Nepal",
  "dates": "10 May - 16 May",
  "duration": "16 Days",
  "distance": "130 km",
  "difficulty": "Difficult",
},
{
  "id":80,
  "imageSrc": "https://res.cloudinary.com/dibrmj6nh/image/upload/v1745905140/bali-pass_c7wakm.webp",
  "title": "Bali Pass",
  "location": "Uttarakhand",
  "dates": "10 May - 18 May",
  "duration": "8 Days",
  "distance": "66 km",
  "difficulty": "Difficult",
},
{
  "id":81,
  "imageSrc": "https://res.cloudinary.com/dibrmj6nh/image/upload/v1745905148/beas-kund_bbmw24.webp",
  "title": "Beas Kund",
  "location": "Himachal Pradesh",
  "dates": "10 May - 14 May",
  "duration": "4 Days",
  "distance": "15 km",
  "difficulty": "Easy to Moderate",
},
{
  "id":82,
  "imageSrc": "https://res.cloudinary.com/dibrmj6nh/image/upload/v1745905887/bhrigu-lake_lc3o4l.webp",
  "title": "Bhrigu Lake Trek",
  "location": "Himachal Pradesh",
  "dates": "10 May - 14 May",
  "duration": "4 Days",
  "distance": "10 km",
  "difficulty": "Moderate",
},
{
  "id":83,
  "imageSrc": "https://res.cloudinary.com/dibrmj6nh/image/upload/v1745909314/buran-ghati_laaalk.webp",
  "title": "Buran Ghati Trek",
  "location": "Himachal Pradesh",
  "dates": "10 May - 18 May",
  "duration": "8 Days",
  "distance": "65 Kms",
  "difficulty": "Moderate to Difficult",
}];
  const router = useRouter();
  const { id } = router.query;

  const [trip, setTrip] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    // Load Razorpay script
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => console.log("Razorpay script loaded!");
    document.body.appendChild(script);

    // Fetch trip data
    const fetchTrip = async () => {
      const res = await fetch(`/api/trips/${id}`);
      if (res.ok) {
        const data = await res.json();
        setTrip(data);
      }
      setLoading(false);
    };

    fetchTrip();
  }, [id]);
  

  const handlePayment = async () => {
    const price = trip?.price || 1000;

    const response = await fetch("/api/payment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: price, currency: "INR", receipt: `trip-${id}` }),
    });

    const data = await response.json();
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEYID,
      amount: price * 100,
      currency: "INR",
      order_id: data.id,
      handler: (response: any) => {
        alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
      },
    };

    const pay = new (window as any).Razorpay(options);
    pay.open();
  };

  if (loading) return <div className="p-8 text-center">Loading trip...</div>;
  if (!trip) return <div className="p-8 text-center text-red-500">Trip not found.</div>;

  return (
    <>
      <Head>
        <title>{trip.title} | Lambda Adventures</title>
        <meta
          name="description"
          content={trip.description || "Join the adventure with Lambda Adventures!"}
        />
        <meta property="og:image" content={trip.imageSrc} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {showAnimation ? (
        <div className="flex h-[250px] items-center justify-center">
          <DotLottieReact
            src="/Scene-1.json"
            width="200px"
            height="200px"
            autoplay
            loop
          />
        </div>
      ) : (
        <div className="min-h-screen bg-slate-50">
          {/* Enquiry overlay */}
          {popup && (
            <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40 backdrop-blur-sm">
              <div className="relative w-full max-w-lg rounded-3xl bg-white p-6 shadow-2xl sm:p-8">
                <button
                  className="absolute right-4 top-4 rounded-full border border-slate-200 px-2 py-1 text-xs font-medium text-slate-500 hover:bg-slate-50"
                  onClick={() => setPopup(false)}
                >
                  Close
                </button>
                <h3
                  className="mb-4 text-xl font-semibold text-slate-900 sm:text-2xl"
                  id="plan-trip"
                >
                  Plan your trip with Lambda
                </h3>
                <div className="mb-4 flex items-center gap-4">
                  <img
                    src={trip.imageSrc}
                    alt={trip.title}
                    className="h-16 w-16 rounded-xl object-cover sm:h-20 sm:w-20"
                  />
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 sm:text-base">
                      {trip.title}
                    </h4>
                    <p className="text-lg font-bold text-[#017C6D] sm:text-xl">
                      {trip.price}
                    </p>
                  </div>
                </div>
                <form onSubmit={handleSubmit} className="space-y-3 pt-2">
                  <input
                    className="w-full text-black rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none ring-0 focus:border-[#017C6D] focus:ring-2 focus:ring-[#017C6D]/10"
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <input
                    className="w-full text-black rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none ring-0 focus:border-[#017C6D] focus:ring-2 focus:ring-[#017C6D]/10"
                    type="tel"
                    placeholder="Phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  <input
                    className="w-full text-black rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none ring-0 focus:border-[#017C6D] focus:ring-2 focus:ring-[#017C6D]/10"
                    type="email"
                    placeholder="E-mail"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <div className="space-y-1 text-xs text-slate-500">
                    <span>Preferred trip start date</span>
                    <input
                      className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none ring-0 focus:border-[#017C6D] focus:ring-2 focus:ring-[#017C6D]/10"
                      type="date"
                      placeholder="Start Date"
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleChange}
                    />
                  </div>
                  <input
                    className="w-full text-black rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none ring-0 focus:border-slate-200 focus:ring-0"
                    type="text"
                    placeholder="Referral code (optional)"
                    name="coupon"
                    value={formData.coupon}
                    onChange={handleChange}
                  />

                  <button
                    className="mt-1 w-full rounded-xl bg-[#017C6D] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#015c4f]"
                    type="submit"
                  >
                    Enquire &amp; Reserve Spot
                  </button>
                </form>
              </div>
            </div>
          )}

          <div className="mx-auto max-w-6xl px-4 pb-16 pt-6 sm:px-6 lg:px-8">
            {/* Hero */}
            <section className="space-y-4">
              <div className="relative h-[320px] overflow-hidden rounded-3xl bg-slate-900/10 sm:h-[420px]">
                <img
                  src={trip.imageSrc}
                  alt={trip.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 flex flex-col gap-4 p-6 sm:flex-row sm:items-end sm:justify-between sm:p-8">
                  <div>
                    <div className="mb-2 flex flex-wrap items-center gap-2 text-xs font-medium">
                      {trip.type && (
                        <span className="rounded-full bg-white/15 px-3 py-1 text-white backdrop-blur">
                          {trip.type}
                        </span>
                      )}
                      {trip.status && (
                        <span className="rounded-full bg-emerald-500/90 px-3 py-1 text-white backdrop-blur">
                          {trip.status}
                        </span>
                      )}
                    </div>
                    <h1 className="max-w-2xl text-2xl font-semibold text-white sm:text-3xl md:text-4xl">
                      {trip.title}
                    </h1>
                    {trip.location && (
                      <p className="mt-2 flex items-center gap-2 text-sm text-slate-200">
                        <LocationOnIcon className="h-4 w-4 text-emerald-300" />
                        <span>{trip.location}</span>
                      </p>
                    )}
                  </div>

                  <div className="flex flex-wrap items-end gap-2 sm:justify-end">
                    {trip.duration && (
                      <div className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium text-slate-800 shadow-sm">
                        <DateRangeIcon className="mr-1 inline-block h-4 w-4 align-middle text-emerald-600" />
                        <span>{trip.duration}</span>
                      </div>
                    )}
                    {trip.distance && (
                      <div className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium text-slate-800 shadow-sm">
                        <MapIcon className="mr-1 inline-block h-4 w-4 align-middle text-emerald-600" />
                        <span>{trip.distance}</span>
                      </div>
                    )}
                    {trip.altitude && (
                      <div className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium text-slate-800 shadow-sm">
                        <SpeedIcon className="mr-1 inline-block h-4 w-4 align-middle text-emerald-600" />
                        <span>{trip.altitude}</span>
                      </div>
                    )}
                    {trip.difficulty && (
                      <div className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium text-slate-800 shadow-sm">
                        {trip.difficulty}
                      </div>
                    )}
                    <div className="ml-0 flex flex-col rounded-2xl bg-white/95 px-4 py-2.5 text-right text-sm font-semibold text-slate-900 shadow-sm sm:ml-2">
                      <span className="text-xs font-medium text-slate-500">
                        Starting from
                      </span>
                      <span className="text-lg text-[#017C6D]">{trip.price}</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Mobile booking card (below hero image) */}
            <div className="mt-6 lg:hidden">
              <div className="rounded-3xl bg-white p-5 shadow-md ring-1 ring-slate-100">
                <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-slate-500">
                  Private &amp; fixed departures
                </p>
                <div className="mt-3 flex items-baseline justify-between gap-4">
                  <div>
                    <div className="text-[11px] text-slate-500">Starting from</div>
                    <div className="text-xl font-semibold text-slate-900">
                      {trip.price}
                    </div>
                  </div>
                  {trip.duration && (
                    <div className="rounded-2xl bg-slate-50 px-3 py-1.5 text-[11px] font-medium text-slate-700">
                      {trip.duration}
                    </div>
                  )}
                </div>

                <div className="mt-4 space-y-2 text-[11px] text-slate-600">
                  {trip.altitude && (
                    <div className="flex items-center gap-2">
                      <SpeedIcon className="h-4 w-4 text-emerald-600" />
                      <span>Max altitude: {trip.altitude}</span>
                    </div>
                  )}
                  {trip.difficulty && (
                    <div className="flex items-center gap-2">
                      <span className="inline-block h-2 w-2 rounded-full bg-amber-500" />
                      <span>Difficulty: {trip.difficulty}</span>
                    </div>
                  )}
                </div>

                <button
                  onClick={popOpen}
                  className="mt-4 w-full rounded-xl bg-[#017C6D] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#015c4f]"
                >
                  Enquire &amp; book this trip
                </button>

                <Link
                  href="/customtrek"
                  className="mt-3 block text-center text-[11px] font-semibold text-black underline-offset-4 hover:underline"
                >
                  Design a custom version of this trek
                </Link>
              </div>
            </div>

            {/* Main content */}
            <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.1fr)]">
              {/* Left column */}
              <main className="space-y-10">
                {/* About */}
                <section>
                  <h2
                    id="description"
                    className="text-lg font-semibold text-slate-900 sm:text-xl"
                  >
                    Trip overview
                  </h2>
                  {trip.description && (
                    <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">
                      {trip.description}
                    </p>
                  )}
                </section>

                {/* Inclusions / Exclusions */}
                {(trip.inclusions || trip.exclusions) && (
                  <section>
                    <h2 className="text-lg font-semibold text-slate-900 sm:text-xl">
                      What&apos;s included
                    </h2>
                    <div className="mt-4 grid gap-6 md:grid-cols-2">
                      {trip.inclusions && (
                        <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
                          <h3
                            id="inclusions"
                            className="mb-3 text-sm font-semibold text-slate-900 sm:text-base"
                          >
                            Inclusions
                          </h3>
                          <div className="space-y-2">
                            {trip.inclusions.map(
                              (inclusion: string, index: number) => (
                                <div
                                  className="flex items-start gap-2 text-sm text-slate-700"
                                  key={index}
                                >
                                  <CheckCircle className="mt-0.5 h-4 w-4 text-emerald-600" />
                                  <span>{inclusion}</span>
                                </div>
                              ),
                            )}
                          </div>
                        </div>
                      )}

                      {trip.exclusions && (
                        <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
                          <h3
                            id="exclusions"
                            className="mb-3 text-sm font-semibold text-slate-900 sm:text-base"
                          >
                            Exclusions
                          </h3>
                          <div className="space-y-2">
                            {trip.exclusions.map(
                              (exclusion: string, index: number) => (
                                <div
                                  className="flex items-start gap-2 text-sm text-slate-700"
                                  key={index}
                                >
                                  <Block className="mt-0.5 h-4 w-4 text-rose-500" />
                                  <span>{exclusion}</span>
                                </div>
                              ),
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </section>
                )}

                {/* Gallery */}
                {trip.images && Array.isArray(trip.images) && trip.images.length > 0 && (
                  <section>
                    <h2 className="text-lg font-semibold text-slate-900 sm:text-xl">
                      Trip gallery
                    </h2>
                    <div className="mt-4 grid gap-3 sm:grid-cols-3">
                      {trip.images.slice(0, 6).map((img: string, idx: number) => (
                        <div
                          key={idx}
                          className="overflow-hidden rounded-2xl bg-slate-100"
                        >
                          <img
                            src={img}
                            alt={`${trip.title} - ${idx + 1}`}
                            className="h-32 w-full object-cover transition duration-500 hover:scale-105 sm:h-40"
                          />
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* Video */}
                {trip.youtube && (
                  <section>
                    <h2 className="text-lg font-semibold text-slate-900 sm:text-xl">
                      Watch the experience
                    </h2>
                    <div className="mt-4 overflow-hidden rounded-2xl bg-black">
                      <iframe
                        className="h-56 w-full sm:h-72 md:h-80"
                        src={trip.youtube}
                        title={`${trip.title} - YouTube preview`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </section>
                )}

                {/* Know before you go - keep concise list */}
                <section>
                  <h2
                    id="faqs"
                    className="text-lg font-semibold text-slate-900 sm:text-xl"
                  >
                    Know before you go
                  </h2>
                  <div className="mt-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
                    <FAQ />
                  </div>
                </section>
              </main>

              {/* Right column – booking card (desktop) */}
              <aside className="hidden space-y-6 lg:sticky lg:top-24 lg:block">
                <div className="rounded-3xl bg-white p-6 shadow-md ring-1 ring-slate-100">
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
                    Private &amp; fixed departures
                  </p>
                  <div className="mt-3 flex items-baseline justify-between gap-4">
                    <div>
                      <div className="text-xs text-slate-500">Starting from</div>
                      <div className="text-2xl font-semibold text-slate-900">
                        {trip.price}
                      </div>
                    </div>
                    {trip.duration && (
                      <div className="rounded-2xl bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700">
                        {trip.duration}
                      </div>
                    )}
                  </div>

                  <div className="mt-4 space-y-2 text-xs text-slate-600">
                    {trip.altitude && (
                      <div className="flex items-center gap-2">
                        <SpeedIcon className="h-4 w-4 text-emerald-600" />
                        <span>Max altitude: {trip.altitude}</span>
                      </div>
                    )}
                    {trip.difficulty && (
                      <div className="flex items-center gap-2">
                        <span className="inline-block h-2 w-2 rounded-full bg-amber-500" />
                        <span>Difficulty: {trip.difficulty}</span>
                      </div>
                    )}
                  </div>

                  <button
                    onClick={popOpen}
                    className="mt-5 w-full rounded-xl bg-[#017C6D] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#015c4f]"
                  >
                    Enquire &amp; book this trip
                  </button>

                  <Link
                    href="/customtrek"
                    className="mt-3 block text-center text-xs font-semibold text-black underline-offset-4 hover:underline"
                  >
                    Design a custom version of this trek
                  </Link>

                  <div className="mt-4 flex items-center justify-between rounded-2xl bg-slate-50 px-3 py-2">
                    <div className="text-[11px] text-black">
                      Prefer speaking to a human?
                    </div>
                    <Link
                      href="tel:+919065550642"
                      className="text-xs font-semibold text-black hover:text-[#017C6D]"
                    >
                      Call travel expert
                    </Link>
                  </div>
                </div>
              </aside>
            </div>

            {/* Recommended trips */}
            <section className="mt-14">
              <TrekSection title="Trips you may also like" treks={popularTreks} />
            </section>
          </div>

          <div className="fixed bottom-2 right-2 ">
        <a href="https://api.whatsapp.com/send/?phone=919065550642&text=Hi%20Lambda%20Adventures,%20I%20want%20to%20plan%20a%20trip">
          <img src="/Whatsapp.webp" className="w-[50px] hover:w-[90px]"/>
        </a>
      </div>
        </div>
      )}
    </>
  );
}
