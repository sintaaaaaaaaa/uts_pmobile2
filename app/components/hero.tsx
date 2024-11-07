import Image from "next/image"; // Menggunakan Image dari Next.js
import foto from "../sinta.jpg";

export default function Hero() {
  return (
    <div className="text-center p-8">
      <h1 className="text-gray-800 text-4xl font-bold mb-2">CV Online</h1>
      <h2 className="text-3xl font-semibold mb-4">Sinta Sopyanti</h2>
      <Profile />
      <p className="text-gray-600 text-lg mt-4">
        Saya adalah mahasiswa semester 5, jurusan Sistem Informasi dari
        Universitas Ma'soem. Saya bercita-cita jadi orang yang luar biasa sih
        sebenernya. Tapi yang penting bahagia, kaya dan beriman aja deh.
      </p>
    </div>
  );
}

function Profile() {
  return (
    <Image
      src={foto} // Menggunakan gambar yang diimpor
      alt="Sinta Sopyanti"
      width={150}
      height={150}
      className="fotoku mb-4 rounded-full border-2 border-gray-400 shadow-md"
    />
  );
}
