import React, { useState } from "react";
import Image from "next/image";

const MediaCoverage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const newsLinks = [
    {
      title: "Times of India Coverage",
      url: "https://timesofindia.indiatimes.com/city/lucknow/lu-students-alumconn-toredefine-campus-connect/articleshow/124099131.cms",
      publication: "Times of India"
    },
    {
      title: "Hindustan Live Coverage", 
      url: "https://www.livehindustan.com/uttar-pradesh/lucknow/story-engineering-student-creates-game-changing-online-platform-for-internships-and-job-opportunities-201758557574653.html",
      publication: "Hindustan Live"
    }
  ];

  const mediaPhotos = [
    "/media/news0.jpeg",
    "/media/news1.jpeg",
    "/media/news2.jpeg",
    "/media/news3.jpeg",
    "/media/news4.jpeg",
    "/media/news6.jpeg"
  ];

  const openImageModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <>
      <section id="media-coverage" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Media Coverage
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Recent coverage of my innovative work across various media outlets
            </p>
          </div>

          {/* News Links */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Online Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {newsLinks.map((link, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="text-lg font-medium text-gray-900 mb-2">
                    {link.title}
                  </h4>
                  <p className="text-gray-600 mb-4">{link.publication}</p>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Read Article →
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Media Photos */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Press Coverage</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {mediaPhotos.map((photo, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
                  onClick={() => openImageModal(photo)}
                >
                  <Image
                    src={photo}
                    alt={`Media coverage ${index + 1}`}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeImageModal}
        >
          <div className="relative max-w-4xl max-h-full" onClick={handleModalClick}>
            <Image
              src={selectedImage}
              alt="Full size media coverage"
              width={1000}
              height={700}
              className="max-w-full max-h-full object-contain"
            />
            <button
              onClick={closeImageModal}
              className="absolute top-4 right-4 text-white text-2xl font-bold bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default MediaCoverage;