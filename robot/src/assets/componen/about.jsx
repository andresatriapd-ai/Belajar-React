import { useEffect, useRef, useState } from "react";
import "./about.css";

const experiences = [
  {
    role: "Internship Interior Designer",
    organization: "Nusa Multi Dimensi",
    period: "[Oktober 2021] - [Januari 2022]",
    description: [
      "Mendesain interior residensial dan ruang kantor.",
      "Melakukan survei lokasi dan pengukuran.",
      "Membuat konsep desain, moodboard, dan layout.",
      "Membuat model 3D menggunakan SketchUp, V-Ray, Enscape, dan Adobe Photoshop.",
      "Membuat file presentasi hasil desain menggunakan Microsoft PowerPoint.",
      "Mempelajari pembuatan BOQ.",
    ],
  },
  {
    role: "Freelance Interior Deisgner",
    organization: "SF Interior",
    period: "[Februari 2022] - [Juni 2024]",
    description: [
        "Mendesain interior residensial",
        "Melakukan survei Lokasi, pengukuran, dan meeting dengan klien",
        "Membuat konsep desain, memilih material dan layout sesuai dengan kebutuhan klien",
        "Membuat 3D menggunakan SketchUp, Render dengan Vray, Enscape dan Adobe Photoshop",
        "Membuat gambar kerja 2D dangan SketchUp Layout",
        
    ],
  },
  {
    role: "Interior Deisgner",
    organization: "PT. Cipta Arsitektur Desain",
    period: "[Agustus 2024] - [Juni 2025]",
    description: [
        "Mendesain interior office, gymnasium sekolah, dan karaoke",
        "Melakukan survei lokasi dan pengukuran",
        "Berkolaborasi dengan tim membuat konsep desain, space planning, memilih material, serta membuat material board",
        "Membuat 3D dengan SketchUp, render dengan Vray dan Adobe Photoshop",
        "Membuat gambar kerja 2D dengan AutoCAD",
        "Berkoordinasi dengan tim estimator, purchasing dan vendor untuk pengadaan kebutuhan barang/material proyek",
    ],
  },
  {
    role: "Interior Deisgner",
    organization: "Cukizu Furniture",
    period: "[Juni 2025] - [Oktober 2025]",
    description: [
        "Mendesain interior dan furniture residensial (rumah dan apartemen)",
        "Menangani/handle klien dan project dari awal hingga akhir, serta menangani beberapa project sekaligus dalam waktu bersamaan",
        "Melakukan survei lokasi, pengukuran dan meeting dengan klien",
        "Memecahahkan masalah pada ruang untuk memenuhi keinginan dan kebutuhan klien",
        "Membuat konsep desain, memilih dan menyiapkan material dan warna, serta membuat dan mempresentasikan proposal desain dengan klien",
        "Membuat 3D dengan SketchUp, render Enscape dan adobe photoshop",
        "Membuat gambar kerja 2D dengan AutoCAD",
        "Koordinasi rancangan dan gambar project dengan tim produksi dan purchasing untuk pengadaan material"
    ],
  },
  {
    role: "Interior Designer",
    organization: "PT. Estetika Nindya Desain",
    period: "[Februari 2026] - [Sekarang]",
    description: [
        "Mendesain interior rumah, kantor dan komersial (salon, cake shop dan office)",
        "Melakukan survei lokasi, pengukuran dan meeting dengan klien",
        "Memecahahkan masalah setiap project desain untuk memenuhi keinginan dan kebutuhan klien",
        "Membuat konsep desain, memilih dan menyiapkan material dan warna, serta membuat dan mempresentasikan proposal desain dengan klien",
        "Membuat 3D dengan SketchUp, render Enscape dan adobe photoshop",
        "Membuat gambar kerja 2D dengan AutoCAD",
        "Koordinasi rancangan dan gambar project dengan tim produksi dan purchasing untuk pengadaan material",
        "Melalukan pengecekan dan pengawasan pada proses produksi di workshop, untuk memastikan kesesuaian dengan gambar perencanaan",
    ],
  },
];

const education = [
  {
    degree: "Strata 1(S1) - Desain Interior",
    institution: "Universitas Esa Unggul",
    period: "[Agustus 2018] - [Februari 2023]",
    IPK: "3.30 Dari 4.00",
  },
];

const skills = [
  "Sketsa manual/tangan",
  "AutoCAD 2D",
  "SketchUp 3D dan SkethcUp Layout (Tersertifikasi)",
  "Render dengan Vray dan Enscape (gambar dan animasi)",
  "Adobe Photoshop",
  "Microsoft Office",
];

export default function About() {
  const cvRef = useRef(null);
  const [isVisible, setIsVisible] = useState(
    () => typeof window !== "undefined" && !("IntersectionObserver" in window)
  );

  useEffect(() => {
    const cvElement = cvRef.current;
    if (!cvElement) return undefined;

    if (!("IntersectionObserver" in window)) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(cvElement);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(cvElement);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`about-cv${isVisible ? " about-cv--visible" : ""}`}
      ref={cvRef}
    >
      <header className="about-cv__header">
        {/* <p className="about-cv__eyebrow">PROFIL PROFESIONAL</p> */}
        <h2>Febiola Marlentina</h2>
        <p className="about-cv__role">Interior Designer</p>
        <p className="about-cv__summary">
          Sebagai interior designer berpengalaman, saya telah menangani berbagai proyek residensial, kantor, dan
area publik bersama beberapa perusahaan. Saya berkontribusi dalam pengembangan konsep desain, space
planning, pemilihan material, serta visualisasi melalui gambar 2D dan 3D. Selain itu, saya berkomunikasi
secara aktif dengan tim dan klien untuk memahami kebutuhan mereka dan menerjemahkannya menjadi
Solusi desain yang tepat.
        </p>

        <address className="about-cv__contact">
          <span>febiolalentina@gmail.com</span>
          <span>089611571286</span>
          <span>Depok, Jawa Barat</span>
          <a
            href="https://www.linkedin.com/in/febiola-marlentina-272499251/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </address>
      </header>

      <div className="about-cv__grid">
        <div className="about-cv__main">
          <section className="about-cv__section">
            <h3>Pendidikan</h3>
            {education.map((item) => (
              <article
                className="about-cv__entry"
                key={`${item.degree}-${item.institution}`}
              >
                <div className="about-cv__entry-heading">
                  <div>
                    <h4>{item.degree}</h4>
                    <p className="about-cv__organization">
                      {item.institution}
                    </p>
                  </div>
                  <span className="about-cv__period">{item.period}</span>
                </div>
                <p>{item.details}</p>
              </article>
            ))}
          </section>

          <section className="about-cv__section">
            <h3>Pengalaman</h3>
            {experiences.map((experience) => (
              <article
                className="about-cv__entry"
                key={`${experience.role}-${experience.organization}`}
              >
                <div className="about-cv__entry-heading">
                  <div>
                    <h4>{experience.role}</h4>
                    <p className="about-cv__organization">
                      {experience.organization}
                    </p>
                  </div>
                  <span className="about-cv__period">
                    {experience.period}
                  </span>
                </div>
                <ul className="about-cv__description">
                  {experience.description.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </section>
        </div>

        <aside className="about-cv__sidebar">
          <section className="about-cv__section">
            <h3>Keahlian</h3>
            <ul className="about-cv__skills">
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </section>

          <section className="about-cv__section">
            <h3>Sertifikasi</h3>
            <p>Pelatihan SketchUp oleh ACA Pacific Indonesia - 2021</p>
          </section>

        </aside>
      </div>
    </div>
  );
}