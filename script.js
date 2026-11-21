(() => {
  'use strict';

  const header = document.getElementById('site-header');
  const menuButton = document.getElementById('menu-toggle');
  const headerPanel = document.getElementById('header-panel');
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');
  const year = document.getElementById('current-year');
  const contactEmail = 'raresnita777@gmail.com';

  if (year) year.textContent = String(new Date().getFullYear());

  const closeMenu = () => {
    if (!menuButton || !headerPanel) return;
    headerPanel.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation menu');
  };

  if (menuButton && headerPanel) {
    menuButton.addEventListener('click', () => {
      const isOpen = headerPanel.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
      menuButton.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
    });

    headerPanel.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && headerPanel.classList.contains('open')) {
        closeMenu();
        menuButton.focus();
      }
    });

    document.addEventListener('click', (event) => {
      if (headerPanel.classList.contains('open') && !header.contains(event.target)) {
        closeMenu();
      }
    });
  }

  if (header) {
    let previousScroll = window.scrollY;
    window.addEventListener('scroll', () => {
      const currentScroll = window.scrollY;
      const movingDown = currentScroll > previousScroll + 4;
      const movingUp = currentScroll < previousScroll - 4;
      const headerHasFocus = header.contains(document.activeElement);
      const menuIsOpen = headerPanel && headerPanel.classList.contains('open');

      if (currentScroll < 80 || movingUp || headerHasFocus || menuIsOpen) {
        header.classList.remove('is-hidden');
      } else if (movingDown) {
        header.classList.add('is-hidden');
      }
      previousScroll = currentScroll;
    }, { passive: true });
  }

  if (contactForm && formStatus) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!contactForm.reportValidity()) return;

      const data = new FormData(contactForm);
      const name = String(data.get('name') || '').trim();
      const email = String(data.get('email') || '').trim();
      const enquiry = String(data.get('enquiry') || 'Question');
      const message = String(data.get('message') || '').trim();
      const subject = `${enquiry} — ${name}`;
      const body = [
        `Name: ${name}`,
        `Email: ${email}`,
        `Type of enquiry: ${enquiry}`,
        '',
        message
      ].join('\n');
      const mailto = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      formStatus.textContent = 'Your email app should open with your message ready to send. If it does not, use the email link below.';
      window.location.href = mailto;
    });
  }
})();
