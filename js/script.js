// Main application functionality
class SimRacingApp {
    constructor() {
        this.drivers = [];
        this.leagues = [];
        this.init();
    }

    init() {
        this.loadData();
        this.setupEventListeners();
        this.initializeComponents();
    }

    loadData() {
        // Mock data - in real app, this would come from an API
        this.drivers = [
            { id: 1, name: "Alex Turner", team: "Velocity Racing", points: 245, avatar: "driver1.jpg" },
            { id: 2, name: "Maria Rodriguez", team: "Apex Competitors", points: 232, avatar: "driver2.jpg" },
            { id: 3, name: "James Wilson", team: "Gridline Motorsport", points: 218, avatar: "driver3.jpg" },
            { id: 4, name: "Sarah Chen", team: "Precision Racing", points: 205, avatar: "driver4.jpg" },
            { id: 5, name: "Mike Johnson", team: "Velocity Racing", points: 198, avatar: "driver5.jpg" }
        ];

        this.leagues = [
            { id: 1, name: "Pro Championship", skill: "Expert", cars: "GT3", participants: 48 },
            { id: 2, name: "Rookie Series", skill: "Beginner", cars: "GT4", participants: 125 },
            { id: 3, name: "Endurance Cup", skill: "Advanced", cars: "LMP2/GTE", participants: 32 },
            { id: 4, name: "Formula League", skill: "Expert", cars: "F1", participants: 40 }
        ];
    }

    setupEventListeners() {
        // Form validation
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => this.handleContactSubmit(e));
        }

        // League registration
        const registerButtons = document.querySelectorAll('.register-league');
        registerButtons.forEach(button => {
            button.addEventListener('click', (e) => this.handleLeagueRegistration(e));
        });

        // Mobile menu toggle
        const mobileMenuButton = document.querySelector('.navbar-toggler');
        if (mobileMenuButton) {
            mobileMenuButton.addEventListener('click', () => this.toggleMobileMenu());
        }
    }

    initializeComponents() {
        // Initialize counters
        this.animateCounters();
        
        // Initialize carousel if exists
        this.initCarousel();
        
        // Load driver standings
        this.loadDriverStandings();
        
        // Load league data
        this.loadLeagues();
    }

    animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const increment = target / 100;
        let current = 0;

        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current);
                setTimeout(updateCounter, 20);
            } else {
                counter.textContent = target;
            }
        };

        // Start animation when element is in viewport
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCounter();
                    observer.unobserve(entry.target);
                }
            });
        });

        observer.observe(counter);
    });
}

    loadDriverStandings() {
        const standingsBody = document.getElementById('standingsBody');
        if (!standingsBody) return;

        standingsBody.innerHTML = this.drivers.map((driver, index) => `
            <tr class="position-${index + 1}">
                <td>${index + 1}</td>
                <td>
                    <img src="img/${driver.avatar}" alt="${driver.name}" class="driver-avatar" onerror="this.src='img/default-avatar.jpg'">
                    ${driver.name}
                </td>
                <td>${driver.team}</td>
                <td><strong>${driver.points}</strong></td>
            </tr>
        `).join('');
    }

    loadLeagues() {
        const leaguesContainer = document.getElementById('leaguesContainer');
        if (!leaguesContainer) return;

        leaguesContainer.innerHTML = this.leagues.map(league => `
            <div class="col-md-6 col-lg-3 mb-4">
                <div class="league-card">
                    <div class="league-icon">🏎️</div>
                    <h3>${league.name}</h3>
                    <p><strong>Skill:</strong> ${league.skill}</p>
                    <p><strong>Cars:</strong> ${league.cars}</p>
                    <p><strong>Drivers:</strong> ${league.participants}</p>
                    <button class="btn btn-primary register-league" data-league="${league.id}">
                        Register Now
                    </button>
                </div>
            </div>
        `).join('');

        // Re-attach event listeners to new buttons
        document.querySelectorAll('.register-league').forEach(button => {
            button.addEventListener('click', (e) => this.handleLeagueRegistration(e));
        });
    }

    handleContactSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const submitButton = form.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;

        // Show loading state
        submitButton.innerHTML = '<span class="loading"></span> Sending...';
        submitButton.disabled = true;

        // Simulate API call
        setTimeout(() => {
            alert('Thank you for your message! We will get back to you soon.');
            form.reset();
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }, 2000);
    }

    handleLeagueRegistration(e) {
        const leagueId = e.target.getAttribute('data-league');
        const league = this.leagues.find(l => l.id == leagueId);
        
        if (league) {
            if (confirm(`Register for ${league.name}?`)) {
                // Simulate registration process
                e.target.innerHTML = '<span class="loading"></span> Processing...';
                e.target.disabled = true;

                setTimeout(() => {
                    alert(`Successfully registered for ${league.name}!`);
                    e.target.textContent = 'Registered';
                    e.target.classList.remove('btn-primary');
                    e.target.classList.add('btn-success');
                }, 1500);
            }
        }
    }

    toggleMobileMenu() {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        navbarCollapse.classList.toggle('show');
    }

    initCarousel() {
        // Simple carousel implementation
        const carousels = document.querySelectorAll('.carousel');
        carousels.forEach(carousel => {
            let currentIndex = 0;
            const items = carousel.querySelectorAll('.carousel-item');
            const totalItems = items.length;

            setInterval(() => {
                items[currentIndex].classList.remove('active');
                currentIndex = (currentIndex + 1) % totalItems;
                items[currentIndex].classList.add('active');
            }, 5000);
        });
    }
}

// Utility functions
const Utils = {
    formatDate(date) {
        return new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    },

    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
};

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.simRacingApp = new SimRacingApp();
});

// Lazy loading for images
document.addEventListener('DOMContentLoaded', function() {
    const lazyImages = [].slice.call(document.querySelectorAll('img.lazy'));
    
    if ('IntersectionObserver' in window) {
        const lazyImageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    const lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.classList.remove('lazy');
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });

        lazyImages.forEach(function(lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
    }
});