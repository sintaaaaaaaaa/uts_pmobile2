import React from "react";
import Image from "next/image";
import "./hobbies.css";

const MyGallery = () => {
  const Hobbies = [
    { name: "Sleeping", image: "/sleeping.jpg" },
    { name: "Photography", image: "/photography.jpg" },
    { name: "Movies", image: "/movie.jpg" },
    { name: "Journaling", image: "/journaling.jpg" },
  ];
  return (
    <section className="gallery-container">
      <h2 className="text-2xl font-bold mb-4">Hobbies</h2>
      <div className="gallery">
        {Hobbies.map((hobby, index) => (
          <div key={index} className="gallery-card">
            <Image
              src={hobby.image}
              alt={hobby.name}
              className="gallery-image"
              layout="responsive"
              width={150}
              height={100}
            />
            <div className="gallery-caption">{hobby.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyGallery;
