import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Stars, Float, MeshDistortMaterial, Environment, useProgress } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { useRef, useEffect, useState } from 'react'
import * as THREE from 'three'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`
        cursorRef.current.style.top = `${e.clientY}px`
      }
    }
    
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName.toLowerCase() === 'a' || target.tagName.toLowerCase() === 'button' || target.closest('.btn') || target.closest('.card')) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [])

  return <div ref={cursorRef} className={`custom-cursor ${isHovering ? 'hovering' : ''}`}></div>
}

function LoadingScreen() {
  const { progress } = useProgress()
  const [visible, setVisible] = useState(true)
  const loaderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (progress === 100) {
      gsap.to(loaderRef.current, {
        opacity: 0,
        duration: 0.8,
        delay: 0.5,
        onComplete: () => setVisible(false)
      })
    }
  }, [progress])

  if (!visible) return null

  return (
    <div ref={loaderRef} className="loading-screen">
      <div className="loading-content">
        <div className="loading-logo">S<span>Z</span>A</div>
        <div className="loading-bar-wrapper">
          <div className="loading-bar" style={{ width: `${progress}%` }}></div>
        </div>
        <div className="loading-text">LOADING PORTFOLIO... {Math.round(progress)}%</div>
      </div>
    </div>
  )
}

function LiquidBlob() {
  const mesh = useRef<THREE.Mesh>(null!)
  const { viewport } = useThree()
  
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.elapsedTime * 0.1
      mesh.current.rotation.y = state.clock.elapsedTime * 0.15
      
      // Subtle Mouse Parallax Effect
      const x = (state.pointer.x * viewport.width) / 15
      const y = (state.pointer.y * viewport.height) / 15
      // Push the blob further to the right (x + 4) so it doesn't block text
      mesh.current.position.x = THREE.MathUtils.lerp(mesh.current.position.x, x + 4, 0.05)
      mesh.current.position.y = THREE.MathUtils.lerp(mesh.current.position.y, y, 0.05)
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      {/* Scale down slightly to give text more room */}
      <mesh ref={mesh} scale={1.4}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial 
          color="#002244"
          emissive="#000000"
          distort={0.4} 
          speed={1.5} 
          roughness={0.1}
          metalness={0.9}
          envMapIntensity={2}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>
    </Float>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.1} />
      <directionalLight position={[10, 10, 5]} intensity={2} color="#00d2ff" />
      <directionalLight position={[-10, -10, -5]} intensity={1} color="#00b4d8" />
      
      <Environment preset="city" />
      <Stars radius={100} depth={50} count={2000} factor={3} saturation={0} fade speed={1} />
      
      <LiquidBlob />
      
      {/* Premium Post-Processing Bloom */}
      <EffectComposer>
        <Bloom luminanceThreshold={1.2} mipmapBlur intensity={1.5} />
      </EffectComposer>
    </>
  )
}

function Marquee() {
  const skills = [
    "IT Support", "Active Directory", "Hardware Troubleshooting", "Networking", 
    "Windows OS", "Salesforce", "Okta MFA", "Ticketing Systems", "Customer Satisfaction"
  ]
  return (
    <div className="marquee-container">
      <div className="marquee-content">
        <span>
          {skills.map((skill, i) => <span key={i}>✦ {skill}</span>)}
        </span>
        <span>
          {skills.map((skill, i) => <span key={i + skills.length}>✦ {skill}</span>)}
        </span>
      </div>
    </div>
  )
}

function Header() {
  return (
    <nav className="premium-header">
      <div className="header-logo">
        S<span>Z</span>A
      </div>
      <div className="header-nav">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#education">Education</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  )
}

function App() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    // Animate cards
    gsap.from('.card', {
      scrollTrigger: {
        trigger: '.card-grid',
        start: 'top 80%',
        scroller: '.scroll-container'
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out'
    })

    // Animate timeline items
    gsap.from('.timeline-item', {
      scrollTrigger: {
        trigger: '.timeline',
        start: 'top 70%',
        scroller: '.scroll-container'
      },
      x: -50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.3,
      ease: 'back.out(1.7)'
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <LoadingScreen />
      <CustomCursor />
      
      <div className="canvas-container">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <Scene />
        </Canvas>
      </div>
      
      <div className="scroll-container">
        <Header />
        
        <header className="hero" id="home">
            <div className="container hero-content">
                <div className="hero-content-text">
                    <h1>Hi, I'm <span className="highlight">Shaik Zaheer Ahemad</span></h1>
                    <h2>Helpdesk Technical Analyst</h2>
                    <p>8+ years of experience delivering exceptional IT support, resolving complex technical issues, and ensuring customer satisfaction.</p>
                    <div>
                        <a href="#experience" className="btn btn-primary">View Experience</a>
                    </div>
                </div>
                
                {/* Premium Profile Image Setup */}
                <div className="profile-image-container">
                    <div className="profile-glow"></div>
                    <img src="/profile.jpg" alt="Shaik Zaheer Ahemad" className="profile-image" />
                </div>
            </div>
        </header>

        <Marquee />

        <section id="about" className="section">
            <div className="container">
                <h2 className="section-title">Professional Summary</h2>
                <div className="glass-panel" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', padding: '3rem', fontSize: '1.25rem' }}>
                    <p>
                        I am an experienced Helpdesk Technical Analyst specializing in receiving service requests, raising tickets, and monitoring alerts. My expertise lies in resolving requests using KEDB and providing end-to-end tracking of tickets from opening to closure.
                    </p>
                </div>
                
                <div className="card-grid" style={{ marginTop: '4rem' }}>
                    <div className="card">
                        <h3>150+ Tickets/Month</h3>
                        <p>Resolved over 150 support tickets per month, maintaining a 95% satisfaction rate.</p>
                    </div>
                    <div className="card">
                        <h3>25% Defect Reduction</h3>
                        <p>Collaborated with engineering to resolve product defects.</p>
                    </div>
                    <div className="card">
                        <h3>Team Training</h3>
                        <p>Developed training materials to improve technical skills of the support team.</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="experience" className="section bg-light">
            <div className="container">
                <h2 className="section-title" style={{ color: 'var(--secondary-color)' }}>Work Experience</h2>
                <div className="timeline">
                    
                    <div className="timeline-item">
                        <h3>Global IT Servicedesk Analyst</h3>
                        <h4>Hitachi Vantara Pvt Ltd | Hyderabad, India</h4>
                        <span className="date">Aug 2022 – Current</span>
                        <ul>
                            <li>Installing and configuring Windows OS (XP, 7, 10) and Windows Servers.</li>
                            <li>Configuration of Domain & Workgroup; manage user profiles and GPOs.</li>
                            <li>Configuration & Troubleshooting of ROUTERS & SWITCHES.</li>
                            <li>Remote assistance using Bomgar application.</li>
                            <li>Provisioning/de-provisioning Salesforce users and managing Okta MFA accounts.</li>
                        </ul>
                    </div>

                    <div className="timeline-item">
                        <h3>IT Analyst</h3>
                        <h4>Quest Diagnostics HTAS Ltd | Hyderabad, India</h4>
                        <span className="date">May 2018 – Aug 2022</span>
                        <ul>
                            <li>Creating TNP reports of patients in TEST ENVIRONMENT.</li>
                            <li>Worked on tools: Chantilly, Sjc, Focus, Valencia.</li>
                            <li>Troubleshooting client machines domain.</li>
                            <li>Collaborated with IT, Operations, and laboratory teams.</li>
                        </ul>
                    </div>

                    <div className="timeline-item">
                        <h3>Desktop Support Analyst</h3>
                        <h4>Value Point Systems Pvt Ltd | Hyderabad, India</h4>
                        <span className="date">March 2017 – March 2018</span>
                        <ul>
                            <li>Creating Groups and assigning Security Permissions.</li>
                            <li>Installation of Security packages and network/printer sharing.</li>
                            <li>Resolved hardware, software, LAN cabling, and file-sharing issues.</li>
                        </ul>
                    </div>
                    
                    <div className="timeline-item" style={{ borderLeft: 'none' }}>
                        <h3>Sales/Service Analyst</h3>
                        <h4>Skytech Electronics | Abu Dhabi LLC, UAE</h4>
                        <span className="date">Feb 2013 – March 2015</span>
                        <ul>
                            <li>Customer handling and recommending suitable products.</li>
                            <li>Diagnosed computer/electrical issues, installed OS, upgraded hardware.</li>
                            <li>Handled POS systems, invoiced, and processed payments.</li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>

        <section id="education" className="section">
            <div className="container">
                <h2 className="section-title">Education</h2>
                <div className="card-grid" style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div className="card">
                        <h3>Graduation (B.Com)</h3>
                        <h4>Periyar University</h4>
                        <p>Salem, Tamil Nadu, India (2012)</p>
                    </div>
                    <div className="card">
                        <h3>SSC</h3>
                        <h4>Board of Secondary Education</h4>
                        <p>Andhra Pradesh, India (2002)</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="contact" className="section bg-light">
            <div className="container">
                <h2 className="section-title" style={{ color: 'var(--secondary-color)' }}>Get In Touch</h2>
                <div className="contact-wrapper">
                    <div className="contact-info glass-panel">
                        <h3>Contact Information</h3>
                        <p>Ready to solve your IT challenges. Feel free to reach out for opportunities or technical assistance.</p>
                        
                        <div className="info-item">
                            <i className="icon">📧</i>
                            <div>
                                <h4>Email</h4>
                                <p>zaheer.shaik@example.com</p>
                            </div>
                        </div>
                        
                        <div className="info-item">
                            <i className="icon">📱</i>
                            <div>
                                <h4>Phone</h4>
                                <p>+91 9876543210</p>
                            </div>
                        </div>
                        
                        <div className="info-item">
                            <i className="icon">📍</i>
                            <div>
                                <h4>Location</h4>
                                <p>Hyderabad, India</p>
                            </div>
                        </div>
                    </div>

                    <form className="contact-form glass-panel" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" placeholder="John Doe" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="john@example.com" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" rows={5} placeholder="How can I help you?"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
                    </form>
                </div>
            </div>
        </section>

        <footer className="footer">
            <div className="container">
                <p>&copy; {new Date().getFullYear()} Shaik Zaheer Ahemad. All Rights Reserved.</p>
            </div>
        </footer>

      </div>
    </div>
  )
}

export default App
