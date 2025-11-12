// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, SplitText);

// Animate intro text on page load
document.addEventListener('DOMContentLoaded', function() {
  const introText = document.querySelector('.intro-text');
  
  if (introText) {
    // Create a SplitText instance to split the text into characters
    const splitText = new SplitText(introText, { type: 'chars' });
    const chars = splitText.chars;

    // Animate each character with a stagger effect
    gsap.fromTo(
      chars,
      {
        opacity: 0,
        y: 40
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power3.out',
        stagger: 0.1,
        onComplete: () => {
          console.log('All letters have animated!');
        }
      }
    );
  }

  // Optional: Add scroll-based animation for section titles
  const sectionTitles = document.querySelectorAll('.page-section h2');
  sectionTitles.forEach(title => {
    const splitTitle = new SplitText(title, { type: 'chars' });
    
    gsap.fromTo(
      splitTitle.chars,
      {
        opacity: 0,
        y: 20
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power2.out',
        stagger: 0.05,
        scrollTrigger: {
          trigger: title,
          start: 'top 80%',
          once: true
        }
      }
    );
  });
});
