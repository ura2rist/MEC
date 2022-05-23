window.addEventListener('DOMContentLoaded', () => {
  const dataExh = [
    [{
      name: 'Anuga Asia 2022',
      address: 'Бангкок, Таиланд',
      request: '24-28 мая 2022',
      date: '16-18 сентября 2022 года',
      format: 'стенд Made in Moscow'
    },
    {
      name: 'Anuga Asia 2022',
      address: 'Бангкок, Таиланд',
      request: '24-28 мая 2022',
      date: '16-18 сентября 2022 года',
      format: 'стенд Made in Moscow'
    }],
    [{
      name: 'Anuga Asia 2022 2',
      address: 'Бангкок, Таиланд 2',
      request: '24-28 мая 2022 2',
      date: '16-18 сентября 2022 года 2',
      format: 'стенд Made in Moscow 2'
    },
    {
      name: 'Anuga Asia 2022 2',
      address: 'Бангкок, Таиланд 2',
      request: '24-28 мая 2022 2',
      date: '16-18 сентября 2022 года 2',
      format: 'стенд Made in Moscow 2'
    }]
  ];
  const exhContent = document.querySelector('.exhibition__content');
  const exhItem = document.querySelectorAll('.exhibition__item');

  exhItem.forEach(item => {
    item.addEventListener('click', function(){
      addElementDOM(this.dataset.set)
    });
  })

  function select() {
    const selectHeader = document.querySelectorAll('.select__header');
    const selectItem = document.querySelectorAll('.select__item');

    selectHeader.forEach(item => {
      item.addEventListener('click', selectToggle);
    });
    
    selectItem.forEach(item => {
      item.addEventListener('click', selectChoose);
    });
    
    function selectToggle() {
      this.parentElement.classList.toggle('select_active');
    }
    
    function selectChoose() {
      let text = this.innerText;
      let select = this.closest('.select');
      let currentText = this.closest('.select').querySelector('.select__enter');

      currentText.innerText = text;
      select.classList.remove('select_active');
    }
  }

  function addElementDOM(select = 0) {
    let widthWindow = 1200;
    let result;
    
    if(document.documentElement.clientWidth > widthWindow) {
      result = createTable(select);
    } else {
      result = createList(select);
    }

    exhContent.innerHTML = '';
    exhContent.append(result);
  }
  
  function createTable(select) {
    let table = document.createElement('table');
    let tableHeader = '<tr class="exhibition__table__header"><td>Выставка</td><td>Место проведения</td><td>Прием заявок</td><td>Дата проведения</td><td>Формат участия</td></tr>';
    
    table.classList.add('exhibition__table');
    dataExh[select].forEach(function(item) {
      tableHeader += `<tr><td>${item.name}</td><td>${item.address}</td><td>${item.request}</td><td>${item.date}</td><td>${item.format}</td></tr>`
    });
    
    table.innerHTML = tableHeader;
    
    return table;
  }
  
  function createList(select) {
    let ul = document.createElement('ul');
    let ulHeader = '';
    
    dataExh[select].forEach(function(item) {
      ulHeader += `<li>Выставка: ${item.name}</li><li>Место проведения: ${item.address}</li><li>Прием заявок: ${item.request}</li><li>Дата проведения: ${item.date}</li><li>Формат участия: ${item.format}</li>`
    });
    
     ul.innerHTML = ulHeader;
    
    return ul;
  }

  select();

  addElementDOM();

  let swiperReviews = new Swiper(".slider__main", {
    spaceBetween: 180,
    centeredSlides: true,
    loop: true,
    loopFillGroupWithBlank: true,
    slidesPerView: 3,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".slider__main-next",
      prevEl: ".slider__main-prev",
    }
  })
});