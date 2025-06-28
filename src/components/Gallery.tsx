import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Updated gallery images with the provided links
  const galleryImages = [
    'https://i.pinimg.com/736x/2b/e0/01/2be001afe7d8dd2572d50a82a05d58cd.jpg',
    'https://i.pinimg.com/736x/b3/8d/85/b38d85c3a8fe6721fa6aaa3a67ded429.jpg',
    'https://i.pinimg.com/736x/3d/ce/ab/3dceabeaa8f35c10e0cbf3acaf06e0f6.jpg',
    'https://i.pinimg.com/736x/05/f0/d1/05f0d1f32fb0f49280c52f25bf5ab661.jpg',
    'https://i.pinimg.com/736x/d5/34/f3/d534f36a2eb13d95ab393887086e0e21.jpg',
    'https://i.pinimg.com/736x/10/e0/c3/10e0c3a82d2de12528098dcf25006cd3.jpg',
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  // Intersection Observer for fade-in animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount or activeIndex change
  }, [activeIndex]); // Re-run effect when activeIndex changes to reset the timer

  return (
    <section id="gallery" className="section-padding bg-salon-cream relative">
      {/* Decorative lotus element */}
      <div className="lotus-decoration top-20 right-5 -rotate-45 text-8xl">✿</div>
      
      <div ref={sectionRef} className="container mx-auto page-section">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair text-salon-brown mb-4">Our Work</h2>
          <div className="w-20 h-1 bg-salon-dark-pink mx-auto mb-6"></div>
          <p className="text-salon-light-brown">
            Browse through our gallery to see the artistry and precision in every nail design we create.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <div className="relative aspect-[4/3] md:aspect-[16/9]">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                    index === activeIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={image}
                    alt={`Nail design ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-salon-brown rounded-full p-2 shadow-md transition-all"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-salon-brown rounded-full p-2 shadow-md transition-all"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-4 space-x-2">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex ? 'bg-salon-brown scale-125' : 'bg-salon-brown/30'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnails */}
        {/* The 'in-view' class will be added by the IntersectionObserver for animation */}
        <div className="grid grid-cols-4 sm:grid-cols-5 gap-2 mt-8 max-w-4xl mx-auto opacity-0" style={{ 
            animationName: 'fade-in', 
            animationDuration: '0.7s', 
            animationFillMode: 'forwards',
            animationDelay: '0.4s', 
            animationTimingFunction: 'ease-out' 
          }}>
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`rounded-lg overflow-hidden border-2 transition-all ${
                index === activeIndex ? 'border-salon-brown scale-105' : 'border-transparent'
              }`}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="aspect-square object-cover w-full"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
