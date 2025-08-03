import { useRef, Suspense } from "react";
import Spline from '@splinetool/react-spline';

interface SimplifiedHeroProps {
  scrollToSection: (section: string) => void;
}

export function SimplifiedHero({ scrollToSection }: SimplifiedHeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Spline 3D Scene */}
      <div className="absolute inset-0 z-10 pointer-events-auto">
        <Suspense fallback={
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
          </div>
        }>
          <div className="w-full h-full relative spline-container">
            <Spline
              scene="https://prod.spline.design/diTNwA7MDXjmBX6n/scene.splinecode"
              style={{
                width: "100%",
                height: "100%",
                pointerEvents: "auto",
                cursor: "auto"
              }}
              onLoad={() => {
                console.log("Spline scene loaded successfully");
                // Hide Spline watermark after load
                setTimeout(() => {
                  const watermarks = document.querySelectorAll('[data-spline="watermark"], .spline-watermark');
                  watermarks.forEach((el) => {
                    (el as HTMLElement).style.display = 'none';
                  });
                  
                  // Hide any element that looks like a watermark (bottom-right positioned)
                  const allDivs = document.querySelectorAll('div');
                  allDivs.forEach((div) => {
                    const style = window.getComputedStyle(div);
                    if (style.position === 'absolute' && 
                        style.bottom === '16px' && 
                        style.right === '16px' &&
                        div.textContent?.toLowerCase().includes('spline')) {
                      (div as HTMLElement).style.display = 'none';
                    }
                  });
                }, 1000);
              }}
              onError={(error) => {
                console.error("Spline scene error:", error);
              }}
            />
          </div>
        </Suspense>
      </div>
      
      {/* Fallback gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-30 pointer-events-none" />
    </section>
  );
}
