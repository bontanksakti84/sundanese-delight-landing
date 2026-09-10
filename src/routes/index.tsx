import { createFileRoute } from "@tanstack/react-router";
import { Clock, MapPin, Phone, Flame, Leaf, Soup } from "lucide-react";

import heroSunda from "../assets/hero-sunda.jpg";
import gurameBakar from "../assets/gurame-bakar.jpg";
import sateMaranggi from "../assets/sate-maranggi.jpg";
import nasiLiwet from "../assets/nasi-liwet.jpg";
import sayurAsem from "../assets/sayur-asem.jpg";
import esCendol from "../assets/es-cendol.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Saung Rasa — Restoran Masakan Sunda Autentik" },
      {
        name: "description",
        content:
          "Saung Rasa menghadirkan masakan Sunda autentik: nasi liwet, gurame bakar, sate maranggi, dan sambal dadak. Cicipi kehangatan tanah Pasundan.",
      },
      { property: "og:title", content: "Saung Rasa — Restoran Masakan Sunda Autentik" },
      {
        property: "og:description",
        content:
          "Masakan Sunda autentik: nasi liwet, gurame bakar, sate maranggi, dan sambal dadak. Cicipi kehangatan tanah Pasundan.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const menuUtama = [
  {
    nama: "Nasi Liwet Komplit",
    deskripsi:
      "Nasi gurih dimasak dalam kastrol dengan santan dan rempah, disajikan bersama ayam goreng kampung, tahu, tempe, dan lalapan segar.",
    harga: "Rp 45.000",
    gambar: nasiLiwet,
    label: "Paling Dicari",
  },
  {
    nama: "Gurame Bakar Kecap",
    deskripsi:
      "Gurame segar dibakar di atas arang, dilumuri kecap manis dan bumbu rempah pilihan, disajikan dengan sambal dadak dan jeruk limau.",
    harga: "Rp 85.000",
    gambar: gurameBakar,
    label: "Hidangan Andalan",
  },
  {
    nama: "Sate Maranggi",
    deskripsi:
      "Potongan daging sapi has dalam dimarinasi semalaman, dibakar hingga karamelisasi, disajikan dengan acar dan sambal oncom.",
    harga: "Rp 55.000",
    gambar: sateMaranggi,
    label: "Asap Arang",
  },
  {
    nama: "Sayur Asem Kampung",
    deskripsi:
      "Kuah asam segar dari belimbing wuluh dan asem Jawa, berisi melinjo, jagung manis, labu siam, dan kacang tanah rebus.",
    harga: "Rp 25.000",
    gambar: sayurAsem,
    label: "Segar",
  },
];

const menuLainnya = [
  { nama: "Ayam Goreng Kampung", deskripsi: "Diungkep bumbu kuning, digoreng garing", harga: "Rp 35.000" },
  { nama: "Karedok", deskripsi: "Lalapan mentah dengan bumbu kacang kencur", harga: "Rp 20.000" },
  { nama: "Tumis Genjer Oncom", deskripsi: "Genjer segar ditumis dengan oncom bakar", harga: "Rp 22.000" },
  { nama: "Pepes Tahu Jamur", deskripsi: "Dibungkus daun pisang, dikukus hingga harum", harga: "Rp 18.000" },
  { nama: "Empal Gepuk", deskripsi: "Daging empuk manis gurih khas Priangan", harga: "Rp 40.000" },
  { nama: "Sambal Dadak", deskripsi: "Diulek dadakan di atas cobek batu", harga: "Rp 8.000" },
];

const minuman = [
  { nama: "Es Cendol Dawet", deskripsi: "Cendol pandan, santan segar, dan gula aren asli Ciamis", harga: "Rp 15.000" },
  { nama: "Bandrek", deskripsi: "Jahe merah hangat dengan gula aren dan santan", harga: "Rp 12.000" },
  { nama: "Es Goyobod", deskripsi: "Goyobod lembut dengan alpukat dan susu kental manis", harga: "Rp 14.000" },
  { nama: "Teh Tubruk Melati", deskripsi: "Teh melati diseduh kental ala warung lesehan", harga: "Rp 8.000" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Masthead */}
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div>
            <p className="font-display text-2xl font-bold tracking-tight text-primary">
              Saung Rasa
            </p>
            <p className="text-xs tracking-widest text-muted-foreground uppercase">
              Dapur Sunda Sejak 1998
            </p>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a href="#menu" className="transition-colors hover:text-primary">
              Menu
            </a>
            <a href="#cerita" className="transition-colors hover:text-primary">
              Cerita Kami
            </a>
            <a href="#kunjungan" className="transition-colors hover:text-primary">
              Kunjungan
            </a>
            <a
              href="#reservasi"
              className="rounded-full bg-primary px-5 py-2.5 text-primary-foreground transition-colors hover:bg-clay"
            >
              Reservasi Meja
            </a>
          </nav>
        </div>
      </header>

      {/* Hero — editorial magazine */}
      <section className="mx-auto max-w-6xl px-6 pt-14 pb-16">
        <p className="mb-4 text-sm font-semibold tracking-[0.3em] text-accent uppercase">
          Edisi Rasa · Tanah Pasundan
        </p>
        <h1 className="max-w-3xl font-display text-5xl leading-[1.05] font-bold tracking-tight md:text-7xl">
          Cita Rasa Sunda,{" "}
          <span className="text-primary italic">Dihidangkan dengan Hati</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
          Dari nasi liwet yang mengepul di kastrol hingga sambal yang diulek
          dadakan — setiap hidangan kami adalah surat cinta untuk tradisi
          kuliner Jawa Barat.
        </p>
        <figure className="mt-12">
          <img
            src={heroSunda}
            alt="Hidangan lengkap masakan Sunda di atas meja kayu: nasi liwet, gurame bakar, ayam goreng, dan sambal"
            width={1920}
            height={1280}
            className="aspect-[3/2] w-full rounded-2xl object-cover"
          />
          <figcaption className="mt-3 flex items-center justify-between text-sm text-muted-foreground">
            <span>
              Hidangan lengkap Saung Rasa — nasi liwet, gurame bakar, dan lalapan segar.
            </span>
            <span className="hidden font-medium text-primary md:block">
              Foto: Dapur Saung Rasa
            </span>
          </figcaption>
        </figure>
      </section>

      {/* Featured + menu utama, gaya majalah */}
      <section id="menu" className="border-t border-border bg-secondary/50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold tracking-[0.3em] text-accent uppercase">
                Menu Utama
              </p>
              <h2 className="mt-2 font-display text-4xl font-bold tracking-tight md:text-5xl">
                Hidangan yang Bikin Rindu Pulang
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Semua dimasak segar setiap hari dengan bumbu yang diulek tangan —
              tanpa jalan pintas.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2">
            {menuUtama.map((item) => (
              <article key={item.nama} className="group">
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={item.gambar}
                    alt={item.nama}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <span className="mb-2 inline-block rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold text-sage">
                      {item.label}
                    </span>
                    <h3 className="font-display text-2xl font-bold">{item.nama}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.deskripsi}
                    </p>
                  </div>
                  <p className="font-display text-lg font-bold whitespace-nowrap text-primary">
                    {item.harga}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Daftar menu lainnya */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold tracking-[0.3em] text-accent uppercase">
              Pendamping & Pelengkap
            </p>
            <h2 className="mt-2 font-display text-4xl font-bold tracking-tight">
              Lengkapi Santapan Anda
            </h2>
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4 rounded-xl bg-card p-5">
                <Flame className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="font-semibold">Dibakar di Atas Arang Asli</p>
                  <p className="text-sm text-muted-foreground">
                    Aroma asap kayu yang tak bisa ditiru kompor.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-xl bg-card p-5">
                <Leaf className="mt-1 h-5 w-5 shrink-0 text-accent" />
                <div>
                  <p className="font-semibold">Lalapan dari Kebun Sendiri</p>
                  <p className="text-sm text-muted-foreground">
                    Kemangi, mentimun, dan selada dipetik setiap pagi.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-xl bg-card p-5">
                <Soup className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="font-semibold">Bumbu Ulek Tangan</p>
                  <p className="text-sm text-muted-foreground">
                    Cobek batu dan ulekan kayu, seperti di rumah nenek.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <ul className="divide-y divide-border">
              {menuLainnya.map((item) => (
                <li key={item.nama} className="flex items-baseline justify-between gap-4 py-4">
                  <div>
                    <p className="font-display text-lg font-semibold">{item.nama}</p>
                    <p className="text-sm text-muted-foreground">{item.deskripsi}</p>
                  </div>
                  <p className="font-semibold whitespace-nowrap text-primary">{item.harga}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Minuman — band sage */}
      <section className="bg-sage text-sage-foreground">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold tracking-[0.3em] uppercase opacity-70">
              Minuman Tradisional
            </p>
            <h2 className="mt-2 font-display text-4xl font-bold tracking-tight">
              Pelepas Dahaga dari Tanah Parahyangan
            </h2>
            <ul className="mt-10 space-y-6">
              {minuman.map((item) => (
                <li key={item.nama} className="flex items-baseline justify-between gap-4 border-b border-white/15 pb-4">
                  <div>
                    <p className="font-display text-xl font-semibold">{item.nama}</p>
                    <p className="text-sm opacity-75">{item.deskripsi}</p>
                  </div>
                  <p className="font-semibold whitespace-nowrap">{item.harga}</p>
                </li>
              ))}
            </ul>
          </div>
          <figure className="self-center">
            <img
              src={esCendol}
              alt="Es cendol dawet dengan santan dan gula aren"
              width={1024}
              height={768}
              loading="lazy"
              className="aspect-[4/3] w-full rounded-2xl object-cover"
            />
            <figcaption className="mt-3 text-sm opacity-75">
              Es cendol dawet — manisnya gula aren, segarnya santan muda.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Cerita */}
      <section id="cerita" className="mx-auto max-w-3xl px-6 py-20 text-center">
        <p className="text-sm font-semibold tracking-[0.3em] text-accent uppercase">
          Cerita Kami
        </p>
        <blockquote className="mt-6 font-display text-3xl leading-snug font-medium tracking-tight md:text-4xl">
          "Resep kami turun-temurun dari dapur nenek di Garut — tidak ada yang
          berubah, karena rasa yang jujur tidak butuh diubah."
        </blockquote>
        <p className="mt-6 text-sm font-semibold text-muted-foreground">
          — Keluarga Saung Rasa
        </p>
      </section>

      {/* Kunjungan */}
      <section id="kunjungan" className="border-t border-border bg-secondary/50">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-3">
          <div className="flex items-start gap-4">
            <MapPin className="mt-1 h-6 w-6 shrink-0 text-primary" />
            <div>
              <h3 className="font-display text-xl font-bold">Lokasi</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                Jl. Braga No. 88, Bandung
                <br />
                Jawa Barat 40111
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Clock className="mt-1 h-6 w-6 shrink-0 text-primary" />
            <div>
              <h3 className="font-display text-xl font-bold">Jam Buka</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                Senin – Jumat: 10.00 – 21.00
                <br />
                Sabtu – Minggu: 09.00 – 22.00
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4" id="reservasi">
            <Phone className="mt-1 h-6 w-6 shrink-0 text-primary" />
            <div>
              <h3 className="font-display text-xl font-bold">Reservasi</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                (022) 555-0198
                <br />
                halo@saungrasa.id
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 py-10 text-center">
          <p className="font-display text-2xl font-bold text-primary">Saung Rasa</p>
          <p className="text-sm text-muted-foreground">
            Sampurasun — selamat menikmati hidangan tanah Pasundan.
          </p>
          <p className="text-xs text-muted-foreground">
            © 2026 Saung Rasa. Seluruh hak cipta dilindungi.
          </p>
        </div>
      </footer>
    </div>
  );
}
