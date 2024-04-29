// ParticlesComponent.jsx
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

const BackgroundParticles = () => {
  const particlesInit = async (main) => {
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    await loadFull(main)
  }

  const particlesLoaded = (container) => {
    // you can configure the existing tsParticles instance (container) here
  }

  return (
    <Particles
      style={{ position: 'absolute' }}
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: '#f0f0f0',
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: 'push',
            },
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.2,
            },
          },
        },
        particles: {
          color: {
            value: '#7367F0',
          },
          links: {
            color: '#7367F0',
            distance: 150,
            enable: true,
            opacity: 0.4,
            width: 2,
          },
          collisions: {
            enable: true,
          },
          move: {
            directions: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 40,
          },
          opacity: {
            value: 0.3,
          },
          // shape: {
          //   type: 'circle',
          // },
          shape: {
            type: 'image',
            image: {
              src: '/logo.png',
              width: 100,
              height: 100,
            },
          },
          size: {
            value: { min: 5, max: 20 },
          },
        },
        detectRetina: true,
      }}
    />
  )
}

export default BackgroundParticles
