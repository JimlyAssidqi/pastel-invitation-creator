
import React from "react";
import { Link } from "react-router-dom";
import ScrollAnimation from "@/components/ScrollAnimation";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// Mock data for the landing page
const stats = {
  invitationsSent: "10,000+",
  happyCustomers: "5,000+",
  themes: "50+",
};

const themes = [
  {
    id: "theme-1",
    title: "Pernikahan Elegan",
    image: "/placeholder.svg",
    category: "Pernikahan",
    description: "Tema elegan dengan sentuhan emas dan putih untuk pernikahan yang mewah",
  },
  {
    id: "theme-2",
    title: "Ulang Tahun Ceria",
    image: "/placeholder.svg",
    category: "Ulang Tahun",
    description: "Tema ceria dan berwarna untuk perayaan ulang tahun yang meriah",
  },
  {
    id: "theme-3",
    title: "Baby Shower",
    image: "/placeholder.svg",
    category: "Keluarga",
    description: "Tema lembut dan manis untuk menyambut si kecil",
  },
];

const steps = [
  {
    number: 1,
    title: "Pilih Tema",
    description: "Pilih tema undangan yang sesuai dengan acara Anda",
    icon: "🎨",
  },
  {
    number: 2,
    title: "Isi Informasi",
    description: "Masukkan detail acara, tanggal, waktu, dan lokasi",
    icon: "✏️",
  },
  {
    number: 3,
    title: "Preview & Selesaikan",
    description: "Tinjau undangan dan selesaikan pembuatan",
    icon: "👁️",
  },
  {
    number: 4,
    title: "Bagikan",
    description: "Bagikan link undangan kepada tamu Anda",
    icon: "🔗",
  },
];

const testimonials = [
  {
    id: "1",
    name: "Budi Santoso",
    image: "/placeholder.svg",
    text: "Undangan digital ini sangat membantu acara pernikahan kami. Tamunya modern dan elegan!",
    rating: 5,
  },
  {
    id: "2",
    name: "Siti Rahma",
    image: "/placeholder.svg",
    text: "Sangat mudah digunakan dan hasilnya cantik sekali. Tamu-tamu kami sangat terkesan.",
    rating: 5,
  },
  {
    id: "3",
    name: "Andi Wijaya",
    image: "/placeholder.svg",
    text: "Layanan yang sangat memuaskan. Desainnya keren dan fiturnya lengkap.",
    rating: 4,
  },
];

const faqs = [
  {
    question: "Bagaimana cara membuat undangan digital?",
    answer: "Cukup pilih tema yang Anda inginkan, isi informasi acara, lalu bagikan link undangan kepada tamu Anda.",
  },
  {
    question: "Berapa lama proses pembuatan undangan digital?",
    answer: "Proses pembuatan undangan digital hanya membutuhkan waktu beberapa menit saja setelah Anda mengisi semua informasi yang diperlukan.",
  },
  {
    question: "Apakah bisa menyesuaikan tema undangan?",
    answer: "Ya, Anda dapat menyesuaikan warna dan gaya tema undangan sesuai preferensi Anda.",
  },
  {
    question: "Bagaimana cara membagikan undangan digital?",
    answer: "Anda akan mendapatkan link undangan yang dapat dibagikan melalui email, pesan teks, atau media sosial.",
  },
];

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center">
        <ScrollAnimation className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Undangan Digital Elegan untuk Momen Spesial Anda
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Buat undangan digital yang indah dan personal untuk acara spesial Anda dengan mudah
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              <Link to="/admin/create">Buat Undangan Sekarang</Link>
            </Button>
            <Button size="lg" variant="outline">
              Lihat Tema
            </Button>
          </div>
        </ScrollAnimation>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <ScrollAnimation delay={100} className="bg-white p-6 rounded-xl shadow-sm">
            <div className="text-3xl font-bold text-purple-600">{stats.invitationsSent}</div>
            <div className="text-gray-500">Undangan Terkirim</div>
          </ScrollAnimation>
          <ScrollAnimation delay={200} className="bg-white p-6 rounded-xl shadow-sm">
            <div className="text-3xl font-bold text-purple-600">{stats.happyCustomers}</div>
            <div className="text-gray-500">Pelanggan Puas</div>
          </ScrollAnimation>
          <ScrollAnimation delay={300} className="bg-white p-6 rounded-xl shadow-sm">
            <div className="text-3xl font-bold text-purple-600">{stats.themes}</div>
            <div className="text-gray-500">Tema Tersedia</div>
          </ScrollAnimation>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Tentang Kami</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kami menyediakan platform untuk membuat undangan digital yang cantik dan modern untuk berbagai acara spesial Anda
            </p>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollAnimation delay={100} className="bg-purple-50 p-6 rounded-xl">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold mb-2">Desain Elegan</h3>
              <p className="text-gray-600">Berbagai pilihan tema dengan desain elegan dan modern</p>
            </ScrollAnimation>
            <ScrollAnimation delay={200} className="bg-pink-50 p-6 rounded-xl">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-2">Mudah & Cepat</h3>
              <p className="text-gray-600">Buat undangan digital dalam hitungan menit</p>
            </ScrollAnimation>
            <ScrollAnimation delay={300} className="bg-blue-50 p-6 rounded-xl">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-2">Terjangkau</h3>
              <p className="text-gray-600">Lebih hemat dibandingkan undangan fisik</p>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Theme Gallery */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Tema Undangan</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pilih dari berbagai tema undangan yang cantik dan elegan
            </p>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {themes.map((theme, index) => (
              <ScrollAnimation key={theme.id} delay={index * 100} className="h-full">
                <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow">
                  <AspectRatio ratio={16 / 9}>
                    <img
                      src={theme.image}
                      alt={theme.title}
                      className="object-cover w-full h-full"
                    />
                  </AspectRatio>
                  <CardContent className="p-6">
                    <Badge className="mb-3 bg-purple-100 text-purple-800 hover:bg-purple-200">{theme.category}</Badge>
                    <h3 className="text-xl font-bold mb-2">{theme.title}</h3>
                    <p className="text-gray-600 mb-4">{theme.description}</p>
                    <Link to={`/preview/${theme.id}`}>
                      <Button variant="outline" className="w-full">Preview</Button>
                    </Link>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button size="lg">Lihat Semua Tema</Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Cara Kerja</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proses pembuatan undangan digital yang mudah dan cepat
            </p>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <ScrollAnimation key={step.number} delay={index * 100} className="text-center">
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                  {step.icon}
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="text-xl font-bold mb-2">
                    {step.number}. {step.title}
                  </div>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Testimonial</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Yang pelanggan kami katakan tentang layanan kami
            </p>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <ScrollAnimation key={testimonial.id} delay={index * 100}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                        <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h3 className="font-bold">{testimonial.name}</h3>
                        <div className="flex text-yellow-500">
                          {[...Array(5)].map((_, i) => (
                            <span key={i}>{i < testimonial.rating ? "★" : "☆"}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600">"{testimonial.text}"</p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <ScrollAnimation className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Pertanyaan Umum</h2>
            <p className="text-xl text-gray-600">
              Berikut adalah beberapa pertanyaan yang sering diajukan
            </p>
          </ScrollAnimation>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <ScrollAnimation key={index} delay={index * 100}>
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </ScrollAnimation>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center">
        <ScrollAnimation className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Siap Untuk Membuat Undangan Digital?</h2>
          <p className="text-xl mb-8 opacity-90">
            Buat undangan digital yang indah untuk acara spesial Anda sekarang
          </p>
          <Button size="lg" variant="secondary">
            <Link to="/admin/create">Buat Undangan Sekarang</Link>
          </Button>
        </ScrollAnimation>
      </section>
    </div>
  );
};

export default LandingPage;
