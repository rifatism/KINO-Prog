document.addEventListener('DOMContentLoaded', () => {
  const topBtn = document.getElementById('toTop');
  if (topBtn) {
    const onScroll = () => topBtn.classList.toggle('show', window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    topBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  const modal = document.getElementById('modal');
  const modalText = document.getElementById('modalText');
  const closeModal = document.getElementById('closeModal');
  const openModal = (html) => {
    if (!modal || !modalText) return;
    modalText.innerHTML = html;
    modal.classList.add('open');
  };
  const hideModal = () => modal && modal.classList.remove('open');
  closeModal && closeModal.addEventListener('click', hideModal);
  modal && modal.addEventListener('click', (e) => { if (e.target === modal) hideModal(); });

  document.querySelectorAll('[data-expand]').forEach(btn => {
    btn.addEventListener('click', () => {
      const box = document.getElementById(btn.dataset.expand);
      if (!box) return;
      box.classList.toggle('open');
      btn.classList.toggle('active', box.classList.contains('open'));
    });
  });

  document.querySelectorAll('[data-open-detail]').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.team-card');
      if (card) card.classList.add('sheet-open');
    });
  });
  document.querySelectorAll('[data-close-detail]').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.team-card');
      if (card) card.classList.remove('sheet-open');
    });
  });

  document.querySelectorAll('[data-open-album]').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.albumcard');
      if (card) card.classList.add('sheet-open');
    });
  });
  document.querySelectorAll('[data-close-album]').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.albumcard');
      if (card) card.classList.remove('sheet-open');
    });
  });

  document.querySelectorAll('.track-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const el = document.getElementById(btn.dataset.track);
      if (!el) return;
      el.classList.toggle('open');
      btn.classList.toggle('open', el.classList.contains('open'));
    });
  });
});
  const track=document.getElementById('galleryTrack');
  const prev=document.querySelector('.gallery-prev');
  const next=document.querySelector('.gallery-next');
  if(track&&prev&&next){
    const slides=[...track.children];
    let i=0;
    const show=()=>{track.style.transform=`translateX(${-i*100}%)`;};
    prev.addEventListener('click',()=>{i=(i-1+slides.length)%slides.length;show();});
    next.addEventListener('click',()=>{i=(i+1)%slides.length;show();});
    show();
  }
});
