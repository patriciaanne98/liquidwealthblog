// Simple search functionality
document.querySelector('.search-btn').addEventListener('click', function() {
    const searchTerm = document.querySelector('.search-box').value;
    if (searchTerm.trim()) {
        alert('Search functionality would look for: ' + searchTerm);
        // You can replace this with actual search logic
        // For example: window.location.href = '/search?q=' + encodeURIComponent(searchTerm);
    }
});

// Search on Enter key
document.querySelector('.search-box').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const searchTerm = this.value;
        if (searchTerm.trim()) {
            alert('Search functionality would look for: ' + searchTerm);
            // You can replace this with actual search logic
        }
    }
});

// Navigation active state management
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove active class from all links
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        
        // Add active class to clicked link
        this.classList.add('active');
        
        // You can add actual navigation logic here
        // For example: window.location.href = this.getAttribute('href');
    });
});

// Optional: Add smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Optional: Add loading animation for external links
document.querySelectorAll('a[href^="http"]').forEach(link => {
    link.addEventListener('click', function() {
        // You can add a loading indicator here
        console.log('Navigating to external link:', this.href);
    });
});

// Optional: Simple form validation (if you add forms later)
function validateForm(formElement) {
    const inputs = formElement.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = '#e74c3c';
            isValid = false;
        } else {
            input.style.borderColor = '#ddd';
        }
    });
    
    return isValid;
}

// Optional: Add reading progress indicator
function addReadingProgress() {
    const article = document.querySelector('.article-content');
    if (!article) return;
    
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: #9b59b6;
        z-index: 9999;
        transition: width 0.3s ease;
        width: 0%;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const articleTop = article.offsetTop;
        const articleHeight = article.offsetHeight;
        const windowTop = window.pageYOffset;
        const windowHeight = window.innerHeight;
        
        const progress = Math.min(
            100,
            Math.max(0, ((windowTop + windowHeight - articleTop) / articleHeight) * 100)
        );
        
        progressBar.style.width = progress + '%';
    });
}

// Initialize reading progress (uncomment if you want this feature)
// addReadingProgress();