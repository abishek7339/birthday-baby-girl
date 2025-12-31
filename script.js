// Glittering Cursor Effects
let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;
let trailX = 0;
let trailY = 0;
const speed = 0.1;
const trailSpeed = 0.2;

// Cursor following effect with smooth animation
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Create glitter trail
    createGlitterTrail();
    
    // Create occasional sparkle
    if (Math.random() > 0.7) {
        createSparkle(e.clientX, e.clientY);
    }
});

// Smooth cursor animation
function animateCursor() {
    // Smooth main cursor movement
    cursorX += (mouseX - cursorX) * speed;
    cursorY += (mouseY - cursorY) * speed;
    
    // Smooth trail movement
    trailX += (cursorX - trailX) * trailSpeed;
    trailY += (cursorY - trailY) * trailSpeed;
    
    const cursor = document.querySelector('.cursor');
    const cursorInner = document.querySelector('.cursor-inner');
    const cursorTrail = document.querySelector('.cursor-trail');
    
    if (cursor && cursorInner && cursorTrail) {
        cursor.style.left = cursorX - 20 + 'px';
        cursor.style.top = cursorY - 20 + 'px';
        
        cursorInner.style.left = '50%';
        cursorInner.style.top = '50%';
        cursorInner.style.transform = `translate(-50%, -50%)`;
        
        cursorTrail.style.left = '50%';
        cursorTrail.style.top = '50%';
        cursorTrail.style.transform = `translate(-50%, -50%)`;
    }
    
    requestAnimationFrame(animateCursor);
}

// Create glitter trail particles
function createGlitterTrail() {
    const glitterContainer = document.querySelector('.glitter-container');
    if (!glitterContainer) return;
    
    // Create multiple glitter particles
    const particleCount = Math.floor(Math.random() * 3) + 1;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'glitter-particle';
        
        // Random position near cursor
        const offsetX = (Math.random() - 0.5) * 30;
        const offsetY = (Math.random() - 0.5) * 30;
        
        particle.style.left = (mouseX + offsetX) + 'px';
        particle.style.top = (mouseY + offsetY) + 'px';
        
        // Random color (pink/white/gold)
        const colors = [
            'rgba(255, 182, 193, 0.9)', // Light pink
            'rgba(255, 255, 255, 0.9)', // White
            'rgba(255, 215, 0, 0.8)',   // Gold
            'rgba(255, 105, 180, 0.9)', // Hot pink
            'rgba(230, 230, 250, 0.9)'  // Lavender
        ];
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        // Random size
        const size = Math.random() * 3 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        // Random animation
        const duration = Math.random() * 1 + 0.5;
        particle.style.animation = `glitterFall ${duration}s linear forwards`;
        
        glitterContainer.appendChild(particle);
        
        // Remove particle after animation
        setTimeout(() => {
            if (particle.parentNode === glitterContainer) {
                glitterContainer.removeChild(particle);
            }
        }, duration * 1000);
    }
}

// Create sparkle effect (for clicks and hover)
function createSparkle(x, y) {
    const glitterContainer = document.querySelector('.glitter-container');
    if (!glitterContainer) return;
    
    const sparkleCount = Math.floor(Math.random() * 5) + 3;
    
    for (let i = 0; i < sparkleCount; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'glitter-particle';
        
        // Position around cursor
        const angle = Math.random() * Math.PI * 2;
        const radius = Math.random() * 40 + 10;
        const sparkleX = x + Math.cos(angle) * radius;
        const sparkleY = y + Math.sin(angle) * radius;
        
        sparkle.style.left = sparkleX + 'px';
        sparkle.style.top = sparkleY + 'px';
        
        // Sparkle appearance
        sparkle.style.background = 'radial-gradient(circle, white 30%, rgba(255, 255, 255, 0) 70%)';
        sparkle.style.boxShadow = '0 0 15px 5px rgba(255, 255, 255, 0.9)';
        sparkle.style.width = '8px';
        sparkle.style.height = '8px';
        
        // Twinkle animation
        const duration = Math.random() * 0.5 + 0.3;
        sparkle.style.animation = `glitterTwinkle ${duration}s ease-in-out forwards`;
        
        glitterContainer.appendChild(sparkle);
        
        // Remove sparkle after animation
        setTimeout(() => {
            if (sparkle.parentNode === glitterContainer) {
                glitterContainer.removeChild(sparkle);
            }
        }, duration * 1000);
    }
}

// Enhanced glitter effect on scroll
let lastScrollY = window.scrollY;
let scrollTimer;

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    const scrollDelta = Math.abs(currentScrollY - lastScrollY);
    
    // Create more glitter when scrolling fast
    if (scrollDelta > 5) {
        createScrollGlitter();
    }
    
    lastScrollY = currentScrollY;
    
    // Clear existing timer
    clearTimeout(scrollTimer);
    
    // Set new timer
    scrollTimer = setTimeout(() => {
        // Reduce glitter after scrolling stops
        const glitterContainer = document.querySelector('.glitter-container');
        if (glitterContainer) {
            const particles = glitterContainer.querySelectorAll('.glitter-particle');
            particles.forEach(particle => {
                particle.style.opacity = '0.5';
            });
        }
    }, 100);
});

// Create glitter during scrolling
function createScrollGlitter() {
    const glitterContainer = document.querySelector('.glitter-container');
    if (!glitterContainer) return;
    
    // Create glitter along the screen edges
    const particleCount = Math.floor(Math.random() * 4) + 2;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'glitter-particle';
        
        // Random position along screen width
        const x = Math.random() * window.innerWidth;
        const y = window.scrollY + Math.random() * 100;
        
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        
        // Scroll glitter appearance
        particle.style.background = 'radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(255,182,193,0.7) 100%)';
        particle.style.boxShadow = '0 0 10px 3px rgba(255, 182, 193, 0.7)';
        
        // Random size
        const size = Math.random() * 4 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        // Falling animation
        const duration = Math.random() * 2 + 1;
        const distance = Math.random() * 200 + 100;
        
        particle.style.animation = `none`;
        particle.style.transition = `transform ${duration}s linear, opacity ${duration}s ease-out`;
        particle.style.opacity = '1';
        
        glitterContainer.appendChild(particle);
        
        // Animate falling
        setTimeout(() => {
            particle.style.transform = `translateY(${distance}px)`;
            particle.style.opacity = '0';
        }, 10);
        
        // Remove particle after animation
        setTimeout(() => {
            if (particle.parentNode === glitterContainer) {
                glitterContainer.removeChild(particle);
            }
        }, duration * 1000);
    }
}

// Enhanced glitter on button hover
document.querySelectorAll('button, .cta-button, .shuffle-button, .goodbye-btn, .memory-card').forEach(element => {
    element.addEventListener('mouseenter', (e) => {
        // Create burst of glitter on hover
        for (let i = 0; i < 8; i++) {
            setTimeout(() => {
                const rect = e.target.getBoundingClientRect();
                const x = rect.left + Math.random() * rect.width;
                const y = rect.top + Math.random() * rect.height;
                createSparkle(x, y);
            }, i * 50);
        }
        
        // Add glow effect to cursor
        const cursorInner = document.querySelector('.cursor-inner');
        if (cursorInner) {
            cursorInner.style.boxShadow = 
                '0 0 30px rgba(255, 182, 193, 1), ' +
                '0 0 60px rgba(255, 105, 180, 0.9), ' +
                '0 0 90px rgba(255, 20, 147, 0.7)';
        }
    });
    
    element.addEventListener('mouseleave', () => {
        // Restore normal cursor glow
        const cursorInner = document.querySelector('.cursor-inner');
        if (cursorInner) {
            cursorInner.style.boxShadow = 
                '0 0 20px rgba(255, 182, 193, 0.8), ' +
                '0 0 40px rgba(255, 105, 180, 0.6), ' +
                '0 0 60px rgba(255, 20, 147, 0.4), ' +
                'inset 0 0 20px rgba(255, 255, 255, 0.5)';
        }
    });
});

// New Music Player with Auto-play After Unlock
function initializeMusicPlayer() {
    const audio = document.getElementById('bg-music');
    const unlockBtn = document.getElementById('unlock-music-btn');
    const controlPanel = document.getElementById('music-control-panel');
    const toggleBtn = document.getElementById('music-toggle');
    const musicIcon = document.getElementById('music-icon');
    const musicText = document.querySelector('.music-text');
    
    // Set volume to 50%
    audio.volume = 0.5;
    
    // Check if music was already unlocked (using localStorage)
    const musicUnlocked = localStorage.getItem('musicUnlocked');
    const savedMusicState = localStorage.getItem('musicPlaying');
    const savedCurrentTime = localStorage.getItem('musicCurrentTime');
    
    // If music was previously unlocked on another page
    if (musicUnlocked === 'true') {
        // Hide unlock button, show control panel
        unlockBtn.style.display = 'none';
        controlPanel.style.display = 'block';
        
        // Restore playback state
        if (savedCurrentTime) {
            audio.currentTime = parseFloat(savedCurrentTime);
        }
        
        // If music was playing, start it automatically
        if (savedMusicState === 'true') {
            const playPromise = audio.play();
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    toggleBtn.classList.remove('muted');
                    musicText.textContent = 'Music: ON';
                    musicIcon.textContent = '🎵';
                }).catch(() => {
                    // Autoplay blocked, show muted state
                    toggleBtn.classList.add('muted');
                    musicText.textContent = 'Click to Play';
                    musicIcon.textContent = '🔇';
                });
            }
        } else {
            // Music was paused
            toggleBtn.classList.add('muted');
            musicText.textContent = 'Music: OFF';
            musicIcon.textContent = '🔇';
        }
    } else {
        // First-time visitor - show unlock button
        unlockBtn.style.display = 'block';
        controlPanel.style.display = 'none';
    }
    
    // Unlock Music Button Click
    unlockBtn.addEventListener('click', function() {
        // Start playing music
        audio.play().then(() => {
            // Hide unlock button, show control panel
            unlockBtn.style.display = 'none';
            controlPanel.style.display = 'block';
            
            // Save unlocked state
            localStorage.setItem('musicUnlocked', 'true');
            localStorage.setItem('musicPlaying', 'true');
            
            // Update button state
            toggleBtn.classList.remove('muted');
            musicText.textContent = 'Music: ON';
            musicIcon.textContent = '🎵';
        }).catch(error => {
            console.log("Autoplay failed:", error);
            alert("Please allow autoplay in your browser settings for the best experience!");
        });
    });
    
    // Toggle Music Button
    toggleBtn.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            toggleBtn.classList.remove('muted');
            musicText.textContent = 'Music: ON';
            musicIcon.textContent = '🎵';
            localStorage.setItem('musicPlaying', 'true');
        } else {
            audio.pause();
            toggleBtn.classList.add('muted');
            musicText.textContent = 'Music: OFF';
            musicIcon.textContent = '🔇';
            localStorage.setItem('musicPlaying', 'false');
        }
    });
    
    // Save current time periodically
    setInterval(() => {
        if (!audio.paused) {
            localStorage.setItem('musicCurrentTime', audio.currentTime);
        }
    }, 2000);
    
    // Save state when leaving page
    window.addEventListener('beforeunload', () => {
        localStorage.setItem('musicCurrentTime', audio.currentTime);
        localStorage.setItem('musicPlaying', (!audio.paused).toString());
    });
}

// Typing effect for greeting
const greetingText = "Hey You Know What! You're the most adorable person I ever met! 💖";
const greetingElement = document.querySelector('.greeting');
let charIndex = 0;

function typeGreeting() {
    if (charIndex < greetingText.length) {
        greetingElement.textContent += greetingText.charAt(charIndex);
        charIndex++;
        setTimeout(typeGreeting, 100);
    }
}

// Create floating elements
const floatingElements = ['💖', '✨', '🌸', '💫', '💕','❤️',  '💙', '💜', '🖤', '🤍', '🤎','🌺','🦋','🕊️'];
function createFloating() {
    const element = document.createElement('div');
    element.className = 'floating';
    element.textContent = floatingElements[Math.floor(Math.random() * floatingElements.length)];
    element.style.left = Math.random() * 100 + 'vw';
    element.style.top = Math.random() * 100 + 'vh';
    element.style.fontSize = (Math.random() * 20 + 20) + 'px';
    document.body.appendChild(element);

    gsap.to(element, {
        y: -500,
        x: Math.random() * 100 - 50,
        rotation: Math.random() * 360,
        duration: Math.random() * 5 + 5,
        opacity: 1,
        ease: "none",
        onComplete: () => element.remove()
    });
}

// Initialize everything when page loads
window.addEventListener('load', () => {
    // Start cursor animation
    animateCursor();
    
    // Title animation
    gsap.to('h1', {
        opacity: 1,
        duration: 1,
        y: 20,
        ease: "bounce.out"
    });

    // Button animation
    gsap.to('.cta-button', {
        opacity: 1,
        duration: 1,
        y: -20,
        ease: "back.out"
    });

    // Start typing effect
    typeGreeting();

    // Initialize the NEW music player
    initializeMusicPlayer();

    // Create floating elements periodically
    setInterval(createFloating, 1000);
});

// Button hover effects and navigation
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('mouseenter', () => {
        gsap.to(button, {
            scale: 1.1,
            duration: 0.3
        });
    });

    button.addEventListener('mouseleave', () => {
        gsap.to(button, {
            scale: 1,
            duration: 0.3
        });
    });

    // Smooth page transition on click
    button.addEventListener('click', () => {
        // Create glitter burst on click
        for (let i = 0; i < 15; i++) {
            setTimeout(() => {
                const rect = button.getBoundingClientRect();
                const x = rect.left + rect.width / 2;
                const y = rect.top + rect.height / 2;
                createSparkle(x, y);
            }, i * 30);
        }
        
        gsap.to('body', {
            opacity: 0,
            duration: 1,
            onComplete: () => {
                window.location.href = 'cause.html';
            }
        });
    });
});