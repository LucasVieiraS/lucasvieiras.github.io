// Download resume functionality
function downloadResume() {
    // For now, this creates a simple alert. You should replace this with actual PDF file
    // You can either:
    // 1. Host a PDF file on your server and link to it directly
    // 2. Use a PDF generation library to create PDF from HTML
    // 3. Link to a cloud storage service where your PDF is hosted
    
    alert('Please upload your resume.pdf file to your server and update this function to point to the correct URL.\n\nExample:\nwindow.open("resume.pdf", "_blank");');
    
    // Uncomment and modify the line below when you have your PDF ready:
    // window.open('resume.pdf', '_blank');
}

// Add smooth scrolling to any internal links (if added later)
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for any anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add a subtle fade-in animation to sections
    const sections = document.querySelectorAll('.section');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});

// Optional: Add a simple contact form handler if you decide to add a contact section later
function handleContactForm(event) {
    event.preventDefault();
    // Add your contact form handling logic here
    alert('Contact form submitted! (This is a placeholder - implement your preferred method)');
}
