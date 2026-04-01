import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticleTrail = () => {
  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "trail",
            },
            resize: true,
          },
          modes: {
            trail: {
              delay: 0.005,
              quantity: 15, // Reduced from 50 \u2014 was GPU-heavy
              particles: {
                color: {
                  value: ["#FFEB3B", "#F44336", "#2196F3", "#4CAF50"]
                },
                move: {
                  direction: "none",
                  enable: true,
                  outModes: {
                    default: "destroy"
                  },
                  random: true,
                  speed: { min: 40, max: 60 }, // High initial burst speed "Sheryians Style"
                  straight: false,
                },
                size: {
                  value: { min: 1, max: 4 },
                  animation: {
                    enable: true,
                    speed: 10, // Faster shrinking
                    minimumValue: 0,
                    sync: false,
                    startValue: "max",
                    destroy: "min"
                  }
                },
                opacity: {
                  value: { min: 0.2, max: 0.8 },
                  animation: {
                    enable: true,
                    speed: 4,
                    minimumValue: 0,
                    sync: false,
                    startValue: "max",
                    destroy: "min"
                  }
                },
                shape: {
                  type: "polygon", // Sharp fragments only
                  options: {
                    polygon: [
                      { sides: 3 },
                      { sides: 4 },
                      { sides: 5 }
                    ]
                  }
                },
                life: {
                  duration: {
                    sync: false,
                    value: { min: 0.5, max: 1 } // Short life as requested
                  },
                  count: 1
                }
              }
            }
          },
        },
        particles: {
          number: {
            value: 0, // Emission only on move
          },
          move: {
            enable: true,
          }
        },
        background: {
          color: "transparent"
        },
        detectRetina: true,
      }}
      className="absolute top-0 left-0 w-full h-full z-[1] pointer-events-none"
    />
  );
};

export default ParticleTrail;
