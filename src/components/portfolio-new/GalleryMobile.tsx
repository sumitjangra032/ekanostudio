"use client";

interface MediaItem {
  src: string;
  href: string;
}

interface Project {
  id: number;
  name: string;
  media: MediaItem[];
}

export default function GalleryMobile() {
  const projects: Project[] = [
    {
      id: 1,
      name: 'Web Development',
      media: [
        { src: '/portfolio-new/assets/video2.mp4', href: 'https://quechua-lookbook.com/ss25/' },
        { src: '/portfolio-new/assets/img1.webp', href: 'https://www.orage.com/' },
        { src: '/portfolio-new/assets/video1.mp4', href: 'https://www.orage.com/' },
        { src: '/portfolio-new/assets/img3.webp', href: 'https://quechua-lookbook.com/ss25/' },
        { src: '/portfolio-new/assets/video4.mp4', href: 'https://hempelfoundation.com/' },
        { src: '/portfolio-new/assets/video5.mp4', href: 'https://norr11.com/' },
      ]
    },
    {
      id: 2,
      name: 'Content Creation',
      media: [
        { src: '/portfolio-new/assets/video6.mp4', href: '' },
        { src: '/portfolio-new/assets/video7.mp4', href: 'https://thibaud.film/' },
        { src: '/portfolio-new/assets/img5.webp', href: 'https://thibaud.film/' },
        { src: '/portfolio-new/assets/img6.webp', href: 'https://google.com' },
        { src: '/portfolio-new/assets/video8.mp4', href: 'https://thibaud.film/#works' },
        { src: '/portfolio-new/assets/img7.webp', href: 'https://pebblelife.com/' },
      ]
    },
    {
      id: 3,
      name: 'SEO Optimization',
      media: [
        { src: '/portfolio-new/assets/img8.webp', href: '' },
        { src: '/portfolio-new/assets/img9.webp', href: 'https://amici.com.cy/en/' },
        { src: '/portfolio-new/assets/img10.webp', href: 'https://www.gkaratzias.com/en/' },
        { src: '/portfolio-new/assets/video11.mp4', href: '' },
        { src: '/portfolio-new/assets/img11.webp', href: 'https://www.bmadb.fr/' },
        { src: '/portfolio-new/assets/img12.webp', href: '' },
      ]
    },
    {
      id: 4,
      name: 'Branding',
      media: [
        { src: '/portfolio-new/assets/img13.webp', href: 'https://pebblelife.com/' },
        { src: '/portfolio-new/assets/video12.mp4', href: 'https://sport-fleiss.at/en/ski-rent/' },
        { src: '/portfolio-new/assets/img14.avif', href: '' },
        { src: '/portfolio-new/assets/video13.mp4', href: '' },
        { src: '/portfolio-new/assets/img15.png', href: '' },
        { src: '/portfolio-new/assets/img16.jpg', href: '' },
      ]
    },
    {
      id: 5,
      name: 'Digital Marketing',
      media: [
        { src: '/portfolio-new/assets/img17.webp', href: '' },
        { src: '/portfolio-new/assets/video26.mp4', href: '' },
        { src: '/portfolio-new/assets/img19.webp', href: '' },
        { src: '/portfolio-new/assets/img20.webp', href: '' },
        { src: '/portfolio-new/assets/video25.mp4', href: '' },
        { src: '/portfolio-new/assets/img22.jpg', href: '' },
      ]
    },
    {
      id: 6,
      name: 'E-mail Automation',
      media: [
        { src: '/portfolio-new/assets/img23.webp', href: '' },
        { src: '/portfolio-new/assets/img24.webp', href: '' },
        { src: '/portfolio-new/assets/img25.webp', href: '' },
        { src: '/portfolio-new/assets/img26.webp', href: '' },
        { src: '/portfolio-new/assets/img27.webp', href: '' },
        { src: '/portfolio-new/assets/img28.webp', href: '' },
      ]
    },
    {
      id: 7,
      name: 'Consulting',
      media: [
        { src: '/portfolio-new/assets/img29.jpg', href: '' },
        { src: '/portfolio-new/assets/img30.webp', href: '' },
        { src: '/portfolio-new/assets/video14.mp4', href: '' },
        { src: '/portfolio-new/assets/img31.jpg', href: '' },
        { src: '/portfolio-new/assets/img32.avif', href: '' },
        { src: '/portfolio-new/assets/img33.avif', href: '' },
      ]
    },
    {
      id: 8,
      name: 'Technology & Cloud',
      media: [
        { src: '/portfolio-new/assets/img34.avif', href: '' },
        { src: '/portfolio-new/assets/img35.avif', href: '' },
        { src: '/portfolio-new/assets/img36.avif', href: '' },
        { src: '/portfolio-new/assets/img37.avif', href: '' },
        { src: '/portfolio-new/assets/img38.avif', href: '' },
        { src: '/portfolio-new/assets/img39.avif', href: '' },
      ]
    },
    {
      id: 9,
      name: 'SMM',
      media: [
        { src: '/portfolio-new/assets/video15.mp4', href: '' },
        { src: '/portfolio-new/assets/img40.png', href: '' },
        { src: '/portfolio-new/assets/video16.mp4', href: '' },
        { src: '/portfolio-new/assets/img41.webp', href: '' },
        { src: '/portfolio-new/assets/video17.mp4', href: '' },
        { src: '/portfolio-new/assets/img42.webp', href: '' },
      ]
    },
    {
      id: 10,
      name: 'App Development',
      media: [
        { src: '/portfolio-new/assets/video21.mp4', href: '' },
        { src: '/portfolio-new/assets/img43.webp', href: '' },
        { src: '/portfolio-new/assets/img44.avif', href: '' },
        { src: '/portfolio-new/assets/video18.mp4', href: '' },
        { src: '/portfolio-new/assets/video19.mp4', href: '' },
        { src: '/portfolio-new/assets/video20.mp4', href: '' },
      ]
    },
    {
      id: 11,
      name: 'AI Automation',
      media: [
        { src: '/portfolio-new/assets/video22.mp4', href: '' },
        { src: '/portfolio-new/assets/img45.png', href: '' },
        { src: '/portfolio-new/assets/img46.png', href: '' },
        { src: '/portfolio-new/assets/video23.mp4', href: '' },
        { src: '/portfolio-new/assets/video24.mp4', href: '' },
        { src: '/portfolio-new/assets/img47.jpg', href: 'https://klingai.com/global/' },
      ]
    }
  ];

  const formatNumber = (num: number): string => String(num).padStart(2, '0');

  const isVideo = (filename: string): boolean => {
    const videoExtensions = ['.mp4', '.webm', '.mov', '.avi', '.m4v'];
    return videoExtensions.some((ext) => filename.toLowerCase().endsWith(ext));
  };

  return (
    <div className="gallery-mobile">
      {projects.map((project, idx) => (
        <div key={project.id} className="project-mobile" data-index={idx}>
          
          {/* Fixed Index Number */}
          <div className="index-mobile">
            <div className="mask-mobile">
              <h1 className="digit-wrapper-mobile">
                <span className="digit-first">{formatNumber(project.id)[0]}</span>
                <span className="digit-second">{formatNumber(project.id)[1]}</span>
              </h1>
            </div>
          </div>

          {/* Media Grid */}
          <div className="images-mobile">
            {project.media.map((item, i) => (
              <div 
                key={i} 
                className="img-mobile" 
                data-img-index={i}
                onClick={() => {
                  if (item.href) {
                    window.open(item.href, '_blank', 'noopener,noreferrer');
                  }
                }}
              >
                {isVideo(item.src) ? (
                  <video 
                    className="video-mobile"
                    src={item.src} 
                    muted 
                    loop 
                    playsInline
                    preload="metadata"
                    autoPlay
                  />
                ) : (
                  <img 
                    className="img-element-mobile"
                    src={item.src} 
                    alt={`${project.name} ${i + 1}`}
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
