document.addEventListener('DOMContentLoaded', () => {
  const mapEl = document.getElementById('kinoMap');
  if (!mapEl || typeof L === 'undefined') return;
  const places = [
    {title:'Бывший роддом',coords:[59.8549,30.3332],address:'ул. Кузнецовская, 25',text:'Место, где родился Виктор Цой.',photo:'https://avatars.dzeninfra.ru/get-zen_doc/40274/pub_5a283b96ad0f22c7fb9a64fb_5a283c22780019428155b20b/scale_1200'},
    {title:'Первый дом Цоя',coords:[59.8705,30.3200],address:'Московский пр., 193',text:'Первый дом, связанный с детством Цоя.',photo:'https://forpost-sz.ru/sites/default/files/styles/wide169/public/doc/2019/07/27/b46a5224.jpg?h=06ac0d8c&itok=hZLUJCdb'},
    {title:'Дом у бабушки',coords:[59.8712,30.3208],address:'Московский пр., 190',text:'Дом, где Цой гостил у бабушки.',photo:'https://forpost-sz.ru/sites/default/files/styles/wide169/public/doc/2019/07/27/b46a5224.jpg?h=06ac0d8c&itok=hZLUJCdb'},
    {title:'Художественное училище',coords:[59.9167,30.2996],address:'пл. Пролетарской Диктатуры, 5',text:'Место обучения Виктора Цоя.',photo:'https://upload.wikimedia.org/wikipedia/ru/a/ae/%D0%92%D0%B8%D0%B4_%D0%9B%D0%A5%D0%A3_%D0%B8%D0%BC._%D0%92.%D0%90._%D0%A1%D0%B5%D1%80%D0%BE%D0%B2%D0%B0_1983.jpg'},
    {title:'Реставрационный лицей №61',coords:[59.8621,30.4595],address:'ул. Стойкости, 32к2',text:'Цой учился здесь на резчика по дереву.',photo:'https://avatars.mds.yandex.net/get-altay/1363278/2a00000165de78b78231ecfc33d4bdb2e960/L'},
    {title:'Школа рисования',coords:[59.9308,30.3086],address:'наб. Грибоедова, 26',text:'Сюда Цой ходил заниматься рисованием.',photo:'https://avatars.mds.yandex.net/get-altay/14295867/2a00000195ec6fc2e1b686426c7c26c876a2/orig'},
    {title:'ЦДЮТ на Охте',coords:[59.9440,30.4347],address:'Панфилова, 23',text:'Здесь располагалась студия Тропилло, где записывали первые альбомы «Кино».',photo:'https://dopobr.petersburgedu.ru/media/2021/06/21/6e87b73a-0f10-4fba-80b5-4ae1f08c7473.jpg'},
    {title:'Камчатка',coords:[59.9519, 30.3011],address:'ул. Блохина, 15',text:'Бывшая котельная, где Цой работал кочегаром.',photo:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/01/40/04/caption.jpg?w=900&h=500&s=1'},
    {title:'Сайгон',coords:[59.9344,30.3550],address:'Невский проспект, 49',text:'Кафе, где собирались ленинградские музыканты, в том числе Цой.',photo:'https://static.sobaka.ru/images/image/00/63/58/98/_normal.jpg?v=1441276715'},
    {title:'Последний дом Цоя',coords:[59.8786,30.5009],address:'Поезд Ветеранов, 99',text:'Последний дом, связанный с жизнью Виктора Цоя.',photo:'https://s00.yaplakal.com/pics/pics_original/2/7/5/15113572.jpg'},
    {title:'Могила Цоя',coords:[59.8809,30.4028],address:'Богословское кладбище',text:'Одно из самых посещаемых мест памяти о Викторе Цое.',photo:'https://i2022.otzovik.com/2022/06/12/13475211/img/1402651_61014210.jpeg'},
    {title:'Квартирник в Москве',coords:[55.7665,37.6124],address:'Каретный Ряд, 5/10 ст2; Садовая-Каретная, 10',text:'Один из первых московских квартирников Цоя.',photo:'https://images.mlabspb.ru/uploads/1f/18/1f18f932c6dd813254242a3e7be7ea39.jpg'},
    {title:'Метла',coords:[55.7520,37.5923],address:'Новый Арбат, 21',text:'На этом сборном концерте «Кино» играли в 1986 году.',photo:'https://irecommend.ru/sites/default/files/imagecache/copyright1/user-images/703928/ogRZ2slfJYn6TGQ5gzmXxQ.jpg'},
    {title:'Лужники',coords:[55.7156,37.5544],address:'СК Лужники, улица Лужники, 24 ст1',text:'24 июня 1990 года здесь состоялся последний концерт группы «Кино».',photo:'https://www.luzhniki.ru/media/images/Rabota_v_Luzhnikakh_v.2e16d0ba.fill-1200x630.format-jpeg.jpg'}
  ];
  const map = L.map('kinoMap', {scrollWheelZoom:true, zoomControl:false, doubleClickZoom:false, dragging:true, tap:false}).setView([59.9405,30.3250], 11);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution:'&copy; OpenStreetMap contributors', maxZoom:19}).addTo(map);
  const popupHTML = p => `<div class="popup-card"><img class="popup-photo" src="${p.photo}" alt="${p.title}"><h3>${p.title}</h3><p><strong>Адрес:</strong> ${p.address}</p><p>${p.text}</p><div class="coord">${p.coords[0].toFixed(4)}, ${p.coords[1].toFixed(4)}</div></div>`;
  places.forEach(p => L.marker(p.coords).addTo(map).bindPopup(popupHTML(p), {maxWidth:340, autoPan:false}));
});
