import Image from 'next/image';
import {
  ArrowRight,
  FileCheck,
  Handshake,
  Mail,
  MapPin,
  Phone,
  Search,
} from 'lucide-react';
import { Nav } from '@/components/nav';
import { Reveal } from '@/components/reveal';

const CONTACT_PHONE = '+1 (212) 555-0140';
const CONTACT_PHONE_HREF = 'tel:+12125550140';
const CONTACT_EMAIL = 'inquiries@highdown.com';

export default function Home() {
  return (
    <div id="top" className="relative overflow-hidden bg-[#0E112B]">
      <Nav />

      {/* ————— Hero ————— */}
      <section className="relative flex min-h-[100svh] items-center">
        <div className="absolute inset-0 bg-[#0E112B]" />

        <div className="pointer-events-none absolute inset-0 z-[1]">
          <Image
            src="/images/decorator-vector.svg"
            alt=""
            fill
            className="object-cover object-left opacity-60"
            aria-hidden="true"
          />
        </div>

        <div className="absolute inset-0">
          <Image
            src="/images/hero-cover.png"
            alt="Collectible car in dramatic studio light"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(270deg, rgba(14, 17, 43, 0.30) 0%, #0E112B 100%)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E112B] via-transparent to-[#0E112B]/40" />
        </div>

        <div className="relative z-20 mx-auto w-full max-w-7xl px-6 py-32 lg:px-8">
          <div className="max-w-3xl">
            <div className="animate-fade-in animate-fade-in-delay-1">
              <span className="section-label">
                <span className="pill-text-gradient">Collector Car Specialists</span>
              </span>
            </div>

            <h1 className="animate-fade-in-up animate-fade-in-delay-2 mt-6 font-display text-[40px] font-bold leading-[1.05] text-white sm:text-[57px]">
              Exceptional Automobiles.
              <span className="block text-gradient-hero">Curated with Conviction.</span>
            </h1>

            <p className="animate-fade-in animate-fade-in-delay-3 mt-8 max-w-2xl text-lg font-light leading-relaxed text-[#C1CEE1] sm:text-xl">
              Highdown Automotive is a specialized dealership for
              investment-grade collector cars — sourcing, documenting, and
              placing significant automobiles with the people who understand
              them.
            </p>

            <p className="animate-fade-in animate-fade-in-delay-3 mt-6 max-w-2xl text-lg font-normal italic leading-relaxed text-[#8FC0FF] sm:text-xl">
              &ldquo;Bridging passion, preservation, and performance.&rdquo;
            </p>

            <div className="animate-fade-in animate-fade-in-delay-4 mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#collection"
                className="group inline-flex h-14 items-center justify-center gap-3 rounded-lg bg-[#368EFF] px-8 text-base font-semibold text-white transition-all duration-300 hover:bg-[#5BA3FF]"
              >
                Explore the Collection
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex h-14 items-center justify-center rounded-lg border border-[#64748b] px-8 text-base font-medium text-white transition-all hover:border-[#368EFF]/60 hover:bg-white/5"
              >
                Speak with Us
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0E112B] to-transparent" />
      </section>

      {/* ————— The Dealership ————— */}
      <section id="dealership" className="relative scroll-mt-20 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="section-label">
              <span className="pill-text-gradient">The Dealership</span>
            </span>
            <h2 className="mt-8 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
              A Dealership Built on{' '}
              <span className="text-gradient-blue-cyan">Provenance</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[#cbd5e1]">
              Every car we handle is selected the way a serious collection is
              built — slowly, on evidence, and with a long view.
            </p>
          </Reveal>

          <Reveal className="mt-14" delay={100}>
            <div className="relative h-[42vh] min-h-[300px] overflow-hidden rounded-2xl border border-white/10 sm:h-[56vh]">
              <Image
                src="/images/showroom-lineup.jpg"
                alt="A lineup of vintage sports cars in a showroom"
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 1216px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E112B]/80 via-transparent to-transparent" />
            </div>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-3">
            <Reveal delay={0}>
              <div className="feature-card flex h-full flex-col gap-3 p-8 transition-all duration-500 hover:border-[#368EFF]/50">
                <Search className="h-10 w-10 text-[#368EFF]" />
                <h3 className="mt-3 text-base font-bold uppercase tracking-[1.6px] text-white">
                  Curated Sourcing
                </h3>
                <p className="text-sm leading-relaxed text-[#cbd5e1]">
                  We seek out significant examples — the right specification,
                  the right history, the right story — through a private
                  network of collectors and marque specialists.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="feature-card flex h-full flex-col gap-3 p-8 transition-all duration-500 hover:border-[#368EFF]/50">
                <FileCheck className="h-10 w-10 text-[#368EFF]" />
                <h3 className="mt-3 text-base font-bold uppercase tracking-[1.6px] text-white">
                  Documented Provenance
                </h3>
                <p className="text-sm leading-relaxed text-[#cbd5e1]">
                  Ownership history, matching numbers, service records, and
                  independent inspection — assembled into a dossier that
                  travels with every car we sell.
                </p>
              </div>
            </Reveal>
            <Reveal delay={240}>
              <div className="feature-card flex h-full flex-col gap-3 p-8 transition-all duration-500 hover:border-[#368EFF]/50">
                <Handshake className="h-10 w-10 text-[#368EFF]" />
                <h3 className="mt-3 text-base font-bold uppercase tracking-[1.6px] text-white">
                  Discreet Sales &amp; Advisory
                </h3>
                <p className="text-sm leading-relaxed text-[#cbd5e1]">
                  Acquisitions, private sales, and collection strategy handled
                  quietly and professionally — on your terms, at your pace.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="divider-blue mx-auto max-w-4xl" />

      {/* ————— The Collection ————— */}
      <section id="collection" className="relative scroll-mt-20 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="section-label">
              <span className="pill-text-gradient">The Collection</span>
            </span>
            <h2 className="mt-8 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
              The Marques That <span className="text-gradient-hero">Matter</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[#cbd5e1]">
              We concentrate on the eras and marques with enduring collector
              demand — cars with racing pedigree, design significance, and
              genuine scarcity.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {[
              {
                src: '/images/italian-dino.jpg',
                alt: 'A red Ferrari Dino photographed head-on',
                kicker: 'Maranello & Sant’Agata',
                title: 'Italian Thoroughbreds',
                copy: 'Coachbuilt beauty and racing bloodlines — the cars that defined an era of speed.',
                position: 'object-[50%_60%]',
              },
              {
                src: '/images/british-triumph.jpg',
                alt: 'A white Triumph race car in the Silverstone pit lane',
                kicker: 'Goodwood to Le Mans',
                title: 'British Racing Heritage',
                copy: 'Motorsport provenance and period-correct restorations from the golden age of endurance racing.',
                position: 'object-[50%_65%]',
              },
              {
                src: '/images/japanese-icons.jpg',
                alt: 'A Toyota Supra and Nissan Skyline GT-R in a private garage',
                kicker: 'The Rising Market',
                title: 'Japanese Icons',
                copy: 'Low-production halo cars from the 1990s — the fastest-appreciating corner of the collector market.',
                position: 'object-center',
              },
              {
                src: '/images/american-belair.jpg',
                alt: 'A red 1957 Chevrolet Bel Air with chrome detailing',
                kicker: 'Chrome & Character',
                title: 'Post-War Classics',
                copy: 'Design landmarks in steel and chrome, preserved and documented to concours standards.',
                position: 'object-center',
              },
            ].map((card, i) => (
              <Reveal key={card.title} delay={(i % 2) * 120}>
                <article className="group relative h-[420px] overflow-hidden rounded-2xl border border-white/10 sm:h-[480px]">
                  <Image
                    src={card.src}
                    alt={card.alt}
                    fill
                    className={`object-cover ${card.position} transition-transform duration-700 ease-out group-hover:scale-105`}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E112B] via-[#0E112B]/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-8">
                    <p className="text-xs font-bold uppercase tracking-[2.6px] text-[#8FC0FF]">
                      {card.kicker}
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-semibold text-white sm:text-3xl">
                      {card.title}
                    </h3>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-[#C1CEE1]">
                      {card.copy}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 text-center" delay={100}>
            <p className="text-base text-[#94a3b8]">
              Current inventory is shared privately.{' '}
              <a
                href="#contact"
                className="font-semibold text-[#8FC0FF] underline-offset-4 transition-colors hover:text-white hover:underline"
              >
                Enquire for availability
              </a>
              .
            </p>
          </Reveal>
        </div>
      </section>

      <div className="divider-blue mx-auto max-w-4xl" />

      {/* ————— The Road Ahead ————— */}
      <section id="road-ahead" className="relative scroll-mt-20 py-20 lg:py-28">
        <div className="absolute inset-0">
          <Image
            src="/images/road-ahead-190sl.jpg"
            alt=""
            fill
            aria-hidden="true"
            className="object-cover opacity-25"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0E112B] via-[#0E112B]/60 to-[#0E112B]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <span className="section-label">
                <span className="pill-text-gradient">The Road Ahead…</span>
              </span>
              <h2 className="mt-8 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
                Where Passion Meets{' '}
                <span className="text-gradient-blue-cyan">Capital</span>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-8 text-lg font-light leading-relaxed text-[#C1CEE1] sm:text-xl">
                Over the past two decades, the collector car has quietly become
                one of the most compelling alternative assets in the world —
                tangible, scarce, and driven by a passion that outlasts market
                cycles.
              </p>
              <p className="mt-6 text-lg font-light leading-relaxed text-[#C1CEE1] sm:text-xl">
                Highdown is building toward a future where collectors and
                investors can participate in that story together. The
                dealership is where it begins.
              </p>
              <div className="accent-bar mx-auto mt-10" />
              <p className="mt-10 text-base font-medium uppercase tracking-[2.6px] text-[#8FC0FF]">
                More to come — stay close
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="divider-blue mx-auto max-w-4xl" />

      {/* ————— Contact ————— */}
      <section id="contact" className="relative scroll-mt-20 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="glass-panel relative overflow-hidden p-10 sm:p-14 lg:p-20">
              <div
                className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full"
                style={{ backgroundColor: 'rgba(14, 165, 233, 0.1)' }}
              />
              <div className="relative mx-auto max-w-2xl text-center">
                <span className="section-label">
                  <span className="pill-text-gradient">Contact</span>
                </span>
                <h2 className="mt-8 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
                  Start the <span className="text-gradient-hero">Conversation</span>
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-[#cbd5e1]">
                  Whether you are buying your first significant car, placing
                  one from your collection, or simply curious about what comes
                  next — we would be glad to talk.
                </p>

                <div className="mt-12 grid gap-4 sm:grid-cols-2">
                  <a
                    href={CONTACT_PHONE_HREF}
                    className="feature-card group flex flex-col items-center gap-3 p-8 transition-all duration-500 hover:border-[#368EFF]/60"
                  >
                    <Phone className="h-8 w-8 text-[#368EFF]" />
                    <span className="text-xs font-bold uppercase tracking-[2.6px] text-[#94a3b8]">
                      By Phone
                    </span>
                    <span className="text-lg font-semibold text-white transition-colors group-hover:text-[#8FC0FF]">
                      {CONTACT_PHONE}
                    </span>
                  </a>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="feature-card group flex flex-col items-center gap-3 p-8 transition-all duration-500 hover:border-[#368EFF]/60"
                  >
                    <Mail className="h-8 w-8 text-[#368EFF]" />
                    <span className="text-xs font-bold uppercase tracking-[2.6px] text-[#94a3b8]">
                      By Email
                    </span>
                    <span className="text-lg font-semibold text-white transition-colors group-hover:text-[#8FC0FF]">
                      {CONTACT_EMAIL}
                    </span>
                  </a>
                </div>

                <p className="mt-8 inline-flex items-center gap-2 text-sm text-[#94a3b8]">
                  <MapPin className="h-4 w-4 text-[#368EFF]" />
                  Viewings by appointment only
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ————— Footer ————— */}
      <footer className="border-t border-white/10 py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
            <Image
              src="/images/highdown-logo.svg"
              alt="Highdown Automotive"
              width={160}
              height={35}
              className="h-7 w-auto"
            />
            <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3" aria-label="Footer">
              <a href="#dealership" className="text-sm text-[#94a3b8] transition-colors hover:text-white">
                The Dealership
              </a>
              <a href="#collection" className="text-sm text-[#94a3b8] transition-colors hover:text-white">
                The Collection
              </a>
              <a href="#road-ahead" className="text-sm text-[#94a3b8] transition-colors hover:text-white">
                The Road Ahead
              </a>
              <a href="#contact" className="text-sm text-[#94a3b8] transition-colors hover:text-white">
                Contact
              </a>
            </nav>
          </div>
          <div className="divider-blue mt-10" />
          <div className="mt-8 flex flex-col items-center gap-4 text-center">
            <p className="text-sm text-[#64748b]">
              © {new Date().getFullYear()} Highdown Automotive. All rights reserved.
            </p>
            <p className="max-w-2xl text-xs leading-relaxed text-[#64748b]">
              This website is for informational purposes only and does not
              constitute an offer to sell, or a solicitation of an offer to
              buy, any security or investment product.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
