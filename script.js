const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

toggle.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
});

document.querySelectorAll('.menu a').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, {threshold: 0.12});

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('contactForm');
const toast = document.getElementById('toast');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nome = form.nome.value.trim();
  const telefone = form.telefone.value.trim();
  const servico = form.servico.value.trim();
  const mensagem = form.mensagem.value.trim();

  const subject = encodeURIComponent('Contato pelo site - Pentágono Engenharia');
  const body = encodeURIComponent(
`Nome: ${nome}
Telefone: ${telefone}
Tipo de projeto: ${servico}

Mensagem:
${mensagem}`
  );

  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2200);

  setTimeout(() => {
    window.location.href = `mailto:pentagonoengcivil@gmail.com?subject=${subject}&body=${body}`;
  }, 300);
});
