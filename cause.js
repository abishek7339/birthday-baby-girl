// // Glittering Cursor Effects for cause.html
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
    createGlitterTrailCause();
    
    // Create occasional sparkle
    if (Math.random() > 0.7) {
        createSparkleCause(e.clientX, e.clientY);
    }
});

// Smooth cursor animation for cause.html
function animateCursorCause() {
    // Smooth main cursor movement
    cursorX += (mouseX - cursorX) * speed;
    cursorY += (mouseY - cursorY) * speed;
    
    // Smooth trail movement
    trailX += (cursorX - trailX) * trailSpeed;
    trailY += (cursorY - trailY) * trailSpeed;
    
    const cursor = document.querySelector('.cursor-glitter');
    const cursorInner = document.querySelector('.cursor-glitter-inner');
    const cursorTrail = document.querySelector('.cursor-glitter-trail');
    
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
    
    requestAnimationFrame(animateCursorCause);
}

// Create glitter trail particles for cause.html
function createGlitterTrailCause() {
    const glitterContainer = document.querySelector('.glitter-container-cause');
    if (!glitterContainer) return;
    
    // Create multiple glitter particles
    const particleCount = Math.floor(Math.random() * 3) + 1;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'glitter-particle-cause';
        
        // Random position near cursor
        const offsetX = (Math.random() - 0.5) * 30;
        const offsetY = (Math.random() - 0.5) * 30;
        
        particle.style.left = (mouseX + offsetX) + 'px';
        particle.style.top = (mouseY + offsetY) + 'px';
        
        // Random color (pink/white/gold)
        const colors = [
            'rgba(255, 182, 193, 0.9)',
            'rgba(255, 255, 255, 0.9)',
            'rgba(255, 215, 0, 0.8)',
            'rgba(255, 105, 180, 0.9)',
            'rgba(230, 230, 250, 0.9)'
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

// Create sparkle effect for cause.html
function createSparkleCause(x, y) {
    const glitterContainer = document.querySelector('.glitter-container-cause');
    if (!glitterContainer) return;
    
    const sparkleCount = Math.floor(Math.random() * 5) + 3;
    
    for (let i = 0; i < sparkleCount; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'glitter-particle-cause';
        
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

// Enhanced glitter effect on scroll for cause.html
let lastScrollY = window.scrollY;
let scrollTimer;

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    const scrollDelta = Math.abs(currentScrollY - lastScrollY);
    
    // Create more glitter when scrolling fast
    if (scrollDelta > 5) {
        createScrollGlitterCause();
    }
    
    lastScrollY = currentScrollY;
    
    // Clear existing timer
    clearTimeout(scrollTimer);
    
    // Set new timer
    scrollTimer = setTimeout(() => {
        // Reduce glitter after scrolling stops
        const glitterContainer = document.querySelector('.glitter-container-cause');
        if (glitterContainer) {
            const particles = glitterContainer.querySelectorAll('.glitter-particle-cause');
            particles.forEach(particle => {
                particle.style.opacity = '0.5';
            });
        }
    }, 100);
});

// Create glitter during scrolling for cause.html
function createScrollGlitterCause() {
    const glitterContainer = document.querySelector('.glitter-container-cause');
    if (!glitterContainer) return;
    
    // Create glitter along the screen edges
    const particleCount = Math.floor(Math.random() * 4) + 2;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'glitter-particle-cause';
        
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

// Start cursor animation when page loads
window.addEventListener('load', () => {
    animateCursorCause();
    
    // Enhanced glitter on button hover for cause.html
    document.querySelectorAll('button, .reason-card, .shuffle-button, .goodbye-btn').forEach(element => {
        element.addEventListener('mouseenter', (e) => {
            // Create burst of glitter on hover
            for (let i = 0; i < 8; i++) {
                setTimeout(() => {
                    const rect = e.target.getBoundingClientRect();
                    const x = rect.left + Math.random() * rect.width;
                    const y = rect.top + Math.random() * rect.height;
                    createSparkleCause(x, y);
                }, i * 50);
            }
            
            // Add glow effect to cursor
            const cursorInner = document.querySelector('.cursor-glitter-inner');
            if (cursorInner) {
                cursorInner.style.boxShadow = 
                    '0 0 30px rgba(255, 182, 193, 1), ' +
                    '0 0 60px rgba(255, 105, 180, 0.9), ' +
                    '0 0 90px rgba(255, 20, 147, 0.7)';
            }
        });
        
        element.addEventListener('mouseleave', () => {
            // Restore normal cursor glow
            const cursorInner = document.querySelector('.cursor-glitter-inner');
            if (cursorInner) {
                cursorInner.style.boxShadow = 
                    '0 0 20px rgba(255, 182, 193, 0.8), ' +
                    '0 0 40px rgba(255, 105, 180, 0.6), ' +
                    '0 0 60px rgba(255, 20, 147, 0.4), ' +
                    'inset 0 0 20px rgba(255, 255, 255, 0.5)';
            }
        });
    });
});

// Music Player Initialization with localStorage
function initializeMusicPlayer() {
    const audio = document.getElementById('bg-music');
    const toggleBtn = document.getElementById('music-toggle');
    const musicIcon = document.getElementById('music-icon');
    const musicText = document.querySelector('.music-text');
    
    if (audio) {
        // Set volume to 50%
        audio.volume = 0.5;
        
        // Check localStorage for saved music state
        const savedMusicState = localStorage.getItem('musicPlaying');
        const savedCurrentTime = localStorage.getItem('musicCurrentTime');
        
        // If music was playing on previous page, continue from saved time
        if (savedMusicState === 'true' && savedCurrentTime) {
            audio.currentTime = parseFloat(savedCurrentTime);
            const playPromise = audio.play();
            
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    toggleBtn.classList.remove('muted');
                    musicText.textContent = 'Music: ON';
                    musicIcon.textContent = '🎵';
                }).catch(error => {
                    // Autoplay was prevented
                    toggleBtn.classList.add('muted');
                    musicText.textContent = 'Click to Play';
                    musicIcon.textContent = '🔇';
                    toggleBtn.title = "Click to enable music";
                });
            }
        } else if (savedMusicState === 'false') {
            // Music was paused
            toggleBtn.classList.add('muted');
            musicText.textContent = 'Music: OFF';
            musicIcon.textContent = '🔇';
        } else {
            // First time on this page, try to autoplay
            const playPromise = audio.play();
            
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    localStorage.setItem('musicPlaying', 'true');
                    toggleBtn.classList.remove('muted');
                    musicText.textContent = 'Music: ON';
                    musicIcon.textContent = '🎵';
                })
                .catch(error => {
                    toggleBtn.classList.add('muted');
                    musicText.textContent = 'Click to Play';
                    musicIcon.textContent = '🔇';
                    toggleBtn.title = "Click to enable music";
                    localStorage.setItem('musicPlaying', 'false');
                });
            }
        }
        
        // Save current time periodically
        setInterval(() => {
            if (!audio.paused) {
                localStorage.setItem('musicCurrentTime', audio.currentTime);
            }
        }, 2000);
        
        // Toggle music on button click
        toggleBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            
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
        
        // Save state when page is about to unload
        window.addEventListener('beforeunload', () => {
            localStorage.setItem('musicCurrentTime', audio.currentTime);
            localStorage.setItem('musicPlaying', (!audio.paused).toString());
        });
    }
}

// Initialize music player when page loads
window.addEventListener('load', initializeMusicPlayer);

// Reasons database
const reasons = [
    { 
        text: "You're such a kind and wonderful person, and I feel lucky to share such a good bond with you. 💖", 
        emoji: "🌟",
        gif: "gif1.gif"
    },
    { 
        text: "May your day be filled with love, laughter, and endless joy. 🌸", 
        emoji: "💗",
        gif: "gif2.gif"
    },
    { 
        text: "Wishing you success, happiness, and everything your heart desires. ✨", 
        emoji: "💕",
        gif: "gif1.gif"
    },
    { 
        text: "Stay the amazing girl you are—always spreading positivity around. Have the happiest year ahead! 🥳", 
        emoji: "🌟",
        gif: "gif2.gif"
    }
];

// State management
let currentReasonIndex = 0;
const reasonsContainer = document.getElementById('reasons-container');
const shuffleButton = document.querySelector('.shuffle-button');
const reasonCounter = document.querySelector('.reason-counter');
let isTransitioning = false;

// Create reason card with gif
function createReasonCard(reason) {
    const card = document.createElement('div');
    card.className = 'reason-card';
    
    const text = document.createElement('div');
    text.className = 'reason-text';
    text.innerHTML = `${reason.emoji} ${reason.text}`;
    
    const gifOverlay = document.createElement('div');
    gifOverlay.className = 'gif-overlay';
    gifOverlay.innerHTML = `<img src="${reason.gif}" alt="Friendship Memory">`;
    
    card.appendChild(text);
    card.appendChild(gifOverlay);
    
    gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 0.5,
        ease: "back.out"
    });

    return card;
}

// Display new reason
function displayNewReason() {
    if (isTransitioning) return;
    isTransitioning = true;

    if (currentReasonIndex < reasons.length) {
        const card = createReasonCard(reasons[currentReasonIndex]);
        reasonsContainer.appendChild(card);
        
        // Update counter
        reasonCounter.textContent = `Reason ${currentReasonIndex + 1} of ${reasons.length}`;
        
        currentReasonIndex++;

        // Check if we should transform the button
        if (currentReasonIndex === reasons.length) {
            gsap.to(shuffleButton, {
                scale: 1.1,
                duration: 0.5,
                ease: "elastic.out",
                onComplete: () => {
                    shuffleButton.textContent = "Enter Our Storylane 💫";
                    shuffleButton.classList.add('story-mode');
                    shuffleButton.addEventListener('click', () => {
                        // Save music state before navigation
                        const audio = document.getElementById('bg-music');
                        if (audio) {
                            localStorage.setItem('musicCurrentTime', audio.currentTime);
                            localStorage.setItem('musicPlaying', (!audio.paused).toString());
                        }
                        
                        gsap.to('body', {
                            opacity: 0,
                            duration: 1,
                            onComplete: () => {
                                window.location.href = 'last.html';
                            }
                        });
                    });
                }
            });
        }

        // Create floating elements
        createFloatingElement();
        
        setTimeout(() => {
            isTransitioning = false;
        }, 500);
    } else {
        window.location.href = "#storylane";
    }
}

// Initialize button click
shuffleButton.addEventListener('click', () => {
    gsap.to(shuffleButton, {
        scale: 0.9,
        duration: 0.1,
        yoyo: true,
        repeat: 1
    });
    displayNewReason();
});

// Floating elements function
function createFloatingElement() {
    const elements = ['🌸', '✨', '💖', '🦋', '⭐'];
    const element = document.createElement('div');
    element.className = 'floating';
    element.textContent = elements[Math.floor(Math.random() * elements.length)];
    element.style.left = Math.random() * window.innerWidth + 'px';
    element.style.top = Math.random() * window.innerHeight + 'px';
    element.style.fontSize = (Math.random() * 20 + 10) + 'px';
    document.body.appendChild(element);

    gsap.to(element, {
        y: -500,
        duration: Math.random() * 10 + 10,
        opacity: 0,
        onComplete: () => element.remove()
    });
}

// Custom cursor
const cursor = document.querySelector('.custom-cursor');
document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        x: e.clientX - 15,
        y: e.clientY - 15,
        duration: 0.2
    });
});

// Create initial floating elements
setInterval(createFloatingElement, 2000);