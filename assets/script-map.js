document.addEventListener('DOMContentLoaded', () => {
  const mapEl = document.getElementById('kinoMap');
  if (!mapEl || typeof L === 'undefined') return;
  const places = [
    {title:'Бывший роддом',coords:[59.8549,30.3332],address:'ул. Кузнецовская, 25',text:'Место, где родился Виктор Цой.',photo:'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80'},
    {title:'Первый дом Цоя',coords:[59.8705,30.3200],address:'Московский пр., 193',text:'Первый дом, связанный с детством Цоя.',photo:'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80'},
    {title:'Дом у бабушки',coords:[59.8712,30.3208],address:'Московский пр., 190',text:'Дом, где Цой гостил у бабушки.',photo:'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=80'},
    {title:'Художественное училище',coords:[59.9167,30.2996],address:'пл. Пролетарской Диктатуры, 5',text:'Место обучения Виктора Цоя.',photo:'https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=1200&q=80'},
    {title:'Реставрационный лицей №61',coords:[59.8621,30.4595],address:'ул. Стойкости, 32к2',text:'Цой учился здесь на резчика по дереву.',photo:'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80'},
    {title:'Школа рисования',coords:[59.9308,30.3086],address:'наб. Грибоедова, 26',text:'Сюда Цой ходил заниматься рисованием.',photo:'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200&q=80'},
    {title:'ЦДЮТ на Охте',coords:[59.9440,30.4347],address:'Панфилова, 23',text:'Здесь располагалась студия Тропилло, где записывали первые альбомы «Кино».',photo:'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80'},
    {title:'Камчатка',coords:[59.9550,30.3376],address:'ул. Блохина, 15',text:'Бывшая котельная, где Цой работал кочегаром.',photo:'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80'},
    {title:'Сайгон',coords:[59.9344,30.3550],address:'Невский проспект, 49',text:'Кафе, где собирались ленинградские музыканты, в том числе Цой.',photo:'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80'},
    {title:'Последний дом Цоя',coords:[59.8786,30.5009],address:'Поезд Ветеранов, 99',text:'Последний дом, связанный с жизнью Виктора Цоя.',photo:'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80'},
    {title:'Могила Цоя',coords:[59.8809,30.4028],address:'Богословское кладбище',text:'Одно из самых посещаемых мест памяти о Викторе Цое.',photo:'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80'},
    {title:'Квартирник в Москве',coords:[55.7665,37.6124],address:'Каретный Ряд, 5/10 ст2; Садовая-Каретная, 10',text:'Один из первых московских квартирников Цоя.',photo:'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80'},
    {title:'Метла',coords:[55.7520,37.5923],address:'Новый Арбат, 21',text:'На этом сборном концерте «Кино» играли в 1986 году.',photo:'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1200&q=80'},
    {title:'Лужники',coords:[55.7156,37.5544],address:'СК Лужники, улица Лужники, 24 ст1',text:'24 июня 1990 года здесь состоялся последний концерт группы «Кино».',photo:'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80'}
  ];
  const map = L.map('kinoMap', {scrollWheelZoom:true, zoomControl:false, doubleClickZoom:false, dragging:true, tap:false}).setView([59.9405,30.3250], 11);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution:'&copy; OpenStreetMap contributors', maxZoom:19}).addTo(map);
  const popupHTML = p => `<div class="popup-card"><img class="popup-photo" src="${p.photo}" alt="${p.title}"><h3>${p.title}</h3><p><strong>Адрес:</strong> ${p.address}</p><p>${p.text}</p><div class="coord">${p.coords[0].toFixed(4)}, ${p.coords[1].toFixed(4)}</div></div>`;
  places.forEach(p => L.marker(p.coords).addTo(map).bindPopup(popupHTML(p), {maxWidth:340, autoPan:false}));
});
