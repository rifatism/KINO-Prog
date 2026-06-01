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


document.addEventListener('DOMContentLoaded', () => {
  const mapEl = document.getElementById('kinoMap');
  if (!mapEl || typeof L === 'undefined') return;
  const places = [
    {title:'Камчатка',coords:[59.9550,30.3376],address:'ул. Блохина, 15',text:'Легендарная котельная и одна из главных точек памяти о Викторе Цое.',photo:'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80'},
    {title:'Барельеф на Блохина, 15',coords:[59.9547,30.3382],address:'Двор дома',text:'Небольшая, но важная городская точка памяти.',photo:'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1200&q=80'},
    {title:'Могила Виктора Цоя',coords:[59.8809,30.4028],address:'Богословское кладбище',text:'Одно из самых посещаемых мест, связанных с Цоем.',photo:'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80'},
    {title:'Севкабель Порт',coords:[59.9240,30.2402],address:'Кожевенная линия, 40',text:'Культурная точка, где история Кино может продолжаться в выставках и событиях.',photo:'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80'},
    {title:'Петроградская сторона',coords:[59.9540,30.3037],address:'Санкт-Петербург',text:'Городской контекст ленинградского рока и атмосфера эпохи.',photo:'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80'}
  ];
  const map = L.map('kinoMap', {scrollWheelZoom:true, zoomControl:false, doubleClickZoom:false, dragging:true, tap:false}).setView([59.9405,30.3250], 11);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution:'&copy; OpenStreetMap contributors', maxZoom:19}).addTo(map);
  const popupHTML = p => `<div class="popup-card"><h3>${p.title}</h3><p><strong>Адрес:</strong> ${p.address}</p><p>${p.text}</p><div class="coord">${p.coords[0].toFixed(4)}, ${p.coords[1].toFixed(4)}</div></div>`;
  places.forEach(p => L.marker(p.coords).addTo(map).bindPopup(popupHTML(p), {maxWidth:340, autoPan:false}));
});
