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
  const requestForm = document.querySelector('.request__form');
  const headerInner = document.querySelector('.header__inner');
  const headerInnerTwo = document.querySelector('.header__inner__two');
  const headerBannerImg = document.querySelector('.header__banner-menu');
  const menuButton = document.querySelector('.mob-menu');
  const headerMob = document.querySelector('.header__wrapper');
  const prevButton = document.getElementById('header__prev-button');
  let swiperReviews = new Swiper(".slider__main", {
    spaceBetween: 180,
    centeredSlides: true,
    loop: true,
    loopFillGroupWithBlank: true,
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".slider__main-next",
      prevEl: ".slider__main-prev",
    },
    breakpoints: {
      900: {
        slidesPerView: 3,
      }
    }
  });

  function autoHeight(heightBlock) {
    if(heightBlock.style.height === "0px") {
      heightBlock.style.height = `${ heightBlock.scrollHeight }px`
    } else {
      heightBlock.style.height = `${ heightBlock.scrollHeight }px`;
      window.getComputedStyle(heightBlock, null).getPropertyValue("height");
      heightBlock.style.height = "0";
    }

    heightBlock.addEventListener("transitionend", () => {
      if (heightBlock.style.height !== "0px") {
        heightBlock.style.height = "auto"
      }
    });
  }

  menuButton.addEventListener('click', function(event) {
    event.currentTarget.classList.toggle('mob-menu_active');
    headerMob.classList.toggle('header__wrapper_active');
    document.querySelector('body').classList.toggle('lock');
  });

  headerInner.addEventListener('click', event => {
    const heightBlock = event.currentTarget.querySelector('.header__inner-list');

    event.currentTarget.classList.toggle('header__inner_active');

    autoHeight(heightBlock);

    if(document.documentElement.clientWidth > 1180) {
      document.querySelector('body').classList.toggle('lock');
      document.querySelector('header').classList.toggle('header_active');
    }
  });

  prevButton.addEventListener('click', function(event) {
    const heightBlock = event.currentTarget.closest('.header__inner-list');

    event.stopPropagation();

    autoHeight(heightBlock);

    if(document.querySelector('.header__inner_active')) {
      document.querySelector('.header__inner_active').classList.remove('header__inner_active');
    }

    if(document.querySelector('.header__inner__two_active')) {
      document.querySelector('.header__inner__two_active').classList.remove('header__inner__two_active');
    }
  });

  headerInnerTwo.addEventListener('click', event => {
    event.stopPropagation();

    headerBannerImg.classList.toggle('header__banner-menu_active');
    event.currentTarget.classList.toggle('header__inner__two_active');
  })

  requestForm.addEventListener('submit', event => {
    event.preventDefault();

    const formInput = {
      company: event.currentTarget.company,
      fio: event.currentTarget.fio,
      email: event.currentTarget.email,
      phone: event.currentTarget.phone,
    }
    const policy = event.currentTarget.policy;

    if(event.currentTarget.querySelector('.request__error-check')) {
      console.log(event.currentTarget.querySelector('.request__error-check'))
      event.currentTarget.querySelector('.request__error-check').classList.remove('request__error-check');
    }

    if(event.currentTarget.querySelector('.request__error')) {
      event.currentTarget.querySelectorAll('.request__error').forEach(item => {
        item.classList.remove('request__error');
      });
    }

    if(formInput.company.value.trim() && formInput.fio.value.trim() && formInput.email.value.trim() && formInput.phone.value.trim() && policy.checked) {
      alert('Форма заполнена')
    } else {
      policy.checked || policy.nextElementSibling.querySelector('.request__error-span').classList.add('request__error-check');
      
      for(let key in formInput) {
        formInput[key].value || formInput[key].closest('.request__form-input').classList.add('request__error');
      }
    }
  });

  exhItem.forEach(item => {
    item.addEventListener('click', function(){
      addElementDOM(this.dataset.set)
    });
  });

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
    let result;
    
    if(document.documentElement.clientWidth > 1180) {
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
    let divWrapp = document.createElement('div');
    let content = '';

    for(let i = 0; i < dataExh[select].length; i++) {
      content += `<ul class="exhibition__list"><li class="exhibition__element"><span>Выставка:</span><span>${dataExh[select][i].name}</span></li><li class="exhibition__element"><span>Место проведения:</span><span>${dataExh[select][i].address}</span></li><li class="exhibition__element"><span>Прием заявок:</span><span>${dataExh[select][i].request}</span></li><li class="exhibition__element"><span>Дата проведения:</span><span>${dataExh[select][i].date}</span></li><li class="exhibition__element"><span>Формат участия:</span><span>${dataExh[select][i].format}</span></li></ul>`;
    }
    
    divWrapp.innerHTML = content;
    
    return divWrapp;
  }

  select();

  addElementDOM();

  document.querySelectorAll('.footer__content-title').forEach(function(item) {
    item.addEventListener('click', function(event) {
      if(document.documentElement.clientWidth < 620) {
        
      }
    });
  })
});