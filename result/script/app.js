"use strict";window.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".request__form"),t=document.querySelector(".header__inner"),r=document.querySelector(".header__inner__two"),c=document.querySelector(".header__banner-menu"),n=document.querySelector(".mob-menu"),o=document.querySelector(".header__wrapper"),i=document.getElementById("header__prev-button");function a(e){"0px"===e.style.height?e.style.height="".concat(e.scrollHeight,"px"):(e.style.height="".concat(e.scrollHeight,"px"),window.getComputedStyle(e,null).getPropertyValue("height"),e.style.height="0"),e.addEventListener("transitionend",(function(){"0px"!==e.style.height&&(e.style.height="auto")}))}n.addEventListener("click",(function(e){(e.currentTarget.classList.toggle("mob-menu_active"),o.classList.toggle("header__wrapper_active"),document.querySelector("body").classList.toggle("lock"),document.querySelector(".header__inner_active"))&&(a(document.querySelector(".header__inner-list")),document.querySelector(".header__inner_active").classList.remove("header__inner_active"));document.querySelector(".header__inner__two_active")&&document.querySelector(".header__inner__two_active").classList.remove("header__inner__two_active")})),t.addEventListener("click",(function(e){var t=e.currentTarget.querySelector(".header__inner-list");document.addEventListener("click",(function(e){document.querySelector(".header_active")&&(e.composedPath().includes(document.querySelector(".header__wrapper"))||(a(t),document.querySelector("body").classList.toggle("lock"),document.querySelector("header").classList.toggle("header_active"),document.querySelector(".header__inner_active").classList.toggle("header__inner_active"),document.querySelector(".header__inner__two_active")&&(document.querySelector(".header__inner__two_active").classList.toggle("header__inner__two_active"),document.querySelector(".header__banner-menu_active").classList.toggle("header__banner-menu_active"))))})),e.currentTarget.classList.toggle("header__inner_active"),a(t),document.documentElement.clientWidth>1180&&(document.querySelector("body").classList.toggle("lock"),document.querySelector("header").classList.toggle("header_active"))})),i.addEventListener("click",(function(e){var t=e.currentTarget.closest(".header__inner-list");e.stopPropagation(),a(t),document.querySelector(".header__inner_active")&&document.querySelector(".header__inner_active").classList.remove("header__inner_active"),document.querySelector(".header__inner__two_active")&&document.querySelector(".header__inner__two_active").classList.remove("header__inner__two_active")})),r.addEventListener("click",(function(e){e.stopPropagation(),c.classList.toggle("header__banner-menu_active"),e.currentTarget.classList.toggle("header__inner__two_active")})),e.addEventListener("submit",(function(e){e.preventDefault();var t={company:e.currentTarget.company,fio:e.currentTarget.fio,email:e.currentTarget.email,phone:e.currentTarget.phone},r=e.currentTarget.policy;if(e.currentTarget.querySelector(".request__error-check")&&(console.log(e.currentTarget.querySelector(".request__error-check")),e.currentTarget.querySelector(".request__error-check").classList.remove("request__error-check")),e.currentTarget.querySelector(".request__error")&&e.currentTarget.querySelectorAll(".request__error").forEach((function(e){e.classList.remove("request__error")})),t.company.value.trim()&&t.fio.value.trim()&&t.email.value.trim()&&t.phone.value.trim()&&r.checked)alert("Форма заполнена");else for(var c in r.checked||r.nextElementSibling.querySelector(".request__error-span").classList.add("request__error-check"),t)t[c].value||t[c].closest(".request__form-input").classList.add("request__error")})),function(){var e=document.querySelectorAll(".select__header"),t=document.querySelectorAll(".select__item");function r(){this.parentElement.classList.toggle("select_active");var e=this.nextElementSibling;e.style.height?e.style.height="":e.style.height=e.scrollHeight+"px"}function c(){var e=this.innerText,t=this.closest(".select"),r=this.closest(".select").querySelector(".select__enter");this.closest(".select__body").style.height="",r.innerText=e,t.classList.remove("select_active")}e.forEach((function(e){e.addEventListener("click",r)})),t.forEach((function(e){e.addEventListener("click",c)}))}(),document.querySelectorAll(".footer__content-title").forEach((function(e){e.addEventListener("click",(function(e){if(document.documentElement.clientWidth<620){var t=e.currentTarget.nextElementSibling;e.currentTarget.classList.toggle("footer__content-title_active"),t.style.height?(t.style.height="",t.style.paddingBottom=""):(t.style.height=t.scrollHeight+"px",t.style.paddingBottom="20px")}}))}))}));
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlcXVlc3RGb3JtIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaGVhZGVySW5uZXIiLCJoZWFkZXJJbm5lclR3byIsImhlYWRlckJhbm5lckltZyIsIm1lbnVCdXR0b24iLCJoZWFkZXJNb2IiLCJwcmV2QnV0dG9uIiwiZ2V0RWxlbWVudEJ5SWQiLCJhdXRvSGVpZ2h0IiwiaGVpZ2h0QmxvY2siLCJzdHlsZSIsImhlaWdodCIsImNvbmNhdCIsInNjcm9sbEhlaWdodCIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwicmVtb3ZlIiwiY29tcG9zZWRQYXRoIiwiaW5jbHVkZXMiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRXaWR0aCIsImNsb3Nlc3QiLCJzdG9wUHJvcGFnYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsImZvcm1JbnB1dCIsImNvbXBhbnkiLCJmaW8iLCJlbWFpbCIsInBob25lIiwicG9saWN5IiwiY29uc29sZSIsImxvZyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiaXRlbSIsInZhbHVlIiwidHJpbSIsImNoZWNrZWQiLCJhbGVydCIsImtleSIsIm5leHRFbGVtZW50U2libGluZyIsImFkZCIsInNlbGVjdEhlYWRlciIsInNlbGVjdEl0ZW0iLCJzZWxlY3RUb2dnbGUiLCJ0aGlzIiwicGFyZW50RWxlbWVudCIsImJsb2NrIiwic2VsZWN0Q2hvb3NlIiwidGV4dCIsImlubmVyVGV4dCIsInNlbGVjdCIsImN1cnJlbnRUZXh0IiwiZSIsInBhZGRpbmdCb3R0b20iXSwibWFwcGluZ3MiOiJhQUFBQSxPQUFPQyxpQkFBaUIsb0JBQW9CLFdBQzFDLElBQU1DLEVBQWNDLFNBQVNDLGNBQWMsa0JBQ3JDQyxFQUFjRixTQUFTQyxjQUFjLGtCQUNy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QVN1RCxNQXlCbkNHLEdBRUF4RCxTQUFTcUMsaUJBQWlCLDBCQUEwQkMsU0FBUSxTQUFTQyxHQUNuRUEsRUFBS3pDLGlCQUFpQixTQUFTLFNBQUE0RCxHQUM3QixHQUFHMUQsU0FBU3dCLGdCQUFnQkMsWUFBYyxJQUFLLENBQzdDLElBQU0yQixFQUFRTSxFQUFFeEMsY0FBYzJCLG1CQUU5QmEsRUFBRXhDLGNBQWNDLFVBQVVDLE9BQU8sZ0NBRTdCZ0MsRUFBTXpDLE1BQU1DLFFBSWR3QyxFQUFNekMsTUFBTUMsT0FBUyxHQUNyQndDLEVBQU16QyxNQUFNZ0QsY0FBZ0IsS0FKNUJQLEVBQU16QyxNQUFNQyxPQUFTd0MsRUFBTXRDLGFBQWUsS0FDMUNzQyxFQUFNekMsTUFBTWdELGNBQWdCIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gIGNvbnN0IHJlcXVlc3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlcXVlc3RfX2Zvcm0nKTtcclxuICBjb25zdCBoZWFkZXJJbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2lubmVyJyk7XHJcbiAgY29uc3QgaGVhZGVySW5uZXJUd28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19pbm5lcl9fdHdvJyk7XHJcbiAgY29uc3QgaGVhZGVyQmFubmVySW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fYmFubmVyLW1lbnUnKTtcclxuICBjb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vYi1tZW51Jyk7XHJcbiAgY29uc3QgaGVhZGVyTW9iID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fd3JhcHBlcicpO1xyXG4gIGNvbnN0IHByZXZCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyX19wcmV2LWJ1dHRvbicpO1xyXG5cclxuICBmdW5jdGlvbiBhdXRvSGVpZ2h0KGhlaWdodEJsb2NrKSB7XHJcbiAgICBpZihoZWlnaHRCbG9jay5zdHlsZS5oZWlnaHQgPT09IFwiMHB4XCIpIHtcclxuICAgICAgaGVpZ2h0QmxvY2suc3R5bGUuaGVpZ2h0ID0gYCR7IGhlaWdodEJsb2NrLnNjcm9sbEhlaWdodCB9cHhgXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBoZWlnaHRCbG9jay5zdHlsZS5oZWlnaHQgPSBgJHsgaGVpZ2h0QmxvY2suc2Nyb2xsSGVpZ2h0IH1weGA7XHJcbiAgICAgIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGhlaWdodEJsb2NrLCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKFwiaGVpZ2h0XCIpO1xyXG4gICAgICBoZWlnaHRCbG9jay5zdHlsZS5oZWlnaHQgPSBcIjBcIjtcclxuICAgIH1cclxuXHJcbiAgICBoZWlnaHRCbG9jay5hZGRFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLCAoKSA9PiB7XHJcbiAgICAgIGlmIChoZWlnaHRCbG9jay5zdHlsZS5oZWlnaHQgIT09IFwiMHB4XCIpIHtcclxuICAgICAgICBoZWlnaHRCbG9jay5zdHlsZS5oZWlnaHQgPSBcImF1dG9cIlxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgZXZlbnQuY3VycmVudFRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdtb2ItbWVudV9hY3RpdmUnKTtcclxuICAgIGhlYWRlck1vYi5jbGFzc0xpc3QudG9nZ2xlKCdoZWFkZXJfX3dyYXBwZXJfYWN0aXZlJyk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LnRvZ2dsZSgnbG9jaycpO1xyXG5cclxuICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2lubmVyX2FjdGl2ZScpKSB7XHJcbiAgICAgIGNvbnN0IGhlaWdodEJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9faW5uZXItbGlzdCcpO1xyXG5cclxuICAgICAgYXV0b0hlaWdodChoZWlnaHRCbG9jayk7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2lubmVyX2FjdGl2ZScpLmNsYXNzTGlzdC5yZW1vdmUoJ2hlYWRlcl9faW5uZXJfYWN0aXZlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9faW5uZXJfX3R3b19hY3RpdmUnKSkge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19pbm5lcl9fdHdvX2FjdGl2ZScpLmNsYXNzTGlzdC5yZW1vdmUoJ2hlYWRlcl9faW5uZXJfX3R3b19hY3RpdmUnKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgaGVhZGVySW5uZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICBjb25zdCBoZWlnaHRCbG9jayA9IGV2ZW50LmN1cnJlbnRUYXJnZXQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9faW5uZXItbGlzdCcpO1xyXG4gXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuICAgICAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9hY3RpdmUnKSkge1xyXG4gICAgICAgIGNvbnN0IHdpdGhpbkJvdW5kYXJpZXMgPSBldmVudC5jb21wb3NlZFBhdGgoKS5pbmNsdWRlcyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX193cmFwcGVyJykpO1xyXG4gIFxyXG4gICAgICAgIGlmKCF3aXRoaW5Cb3VuZGFyaWVzKSB7XHJcbiAgICAgICAgICBhdXRvSGVpZ2h0KGhlaWdodEJsb2NrKTtcclxuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QudG9nZ2xlKCdsb2NrJyk7XHJcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKS5jbGFzc0xpc3QudG9nZ2xlKCdoZWFkZXJfYWN0aXZlJyk7XHJcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19pbm5lcl9hY3RpdmUnKS5jbGFzc0xpc3QudG9nZ2xlKCdoZWFkZXJfX2lubmVyX2FjdGl2ZScpO1xyXG5cclxuICAgICAgICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2lubmVyX190d29fYWN0aXZlJykpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9faW5uZXJfX3R3b19hY3RpdmUnKS5jbGFzc0xpc3QudG9nZ2xlKCdoZWFkZXJfX2lubmVyX190d29fYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2Jhbm5lci1tZW51X2FjdGl2ZScpLmNsYXNzTGlzdC50b2dnbGUoJ2hlYWRlcl9fYmFubmVyLW1lbnVfYWN0aXZlJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgZXZlbnQuY3VycmVudFRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdoZWFkZXJfX2lubmVyX2FjdGl2ZScpO1xyXG5cclxuICAgIGF1dG9IZWlnaHQoaGVpZ2h0QmxvY2spO1xyXG5cclxuICAgIGlmKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCA+IDExODApIHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC50b2dnbGUoJ2xvY2snKTtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJykuY2xhc3NMaXN0LnRvZ2dsZSgnaGVhZGVyX2FjdGl2ZScpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBwcmV2QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIGNvbnN0IGhlaWdodEJsb2NrID0gZXZlbnQuY3VycmVudFRhcmdldC5jbG9zZXN0KCcuaGVhZGVyX19pbm5lci1saXN0Jyk7XHJcblxyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgYXV0b0hlaWdodChoZWlnaHRCbG9jayk7XHJcblxyXG4gICAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9faW5uZXJfYWN0aXZlJykpIHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9faW5uZXJfYWN0aXZlJykuY2xhc3NMaXN0LnJlbW92ZSgnaGVhZGVyX19pbm5lcl9hY3RpdmUnKTtcclxuICAgIH1cclxuXHJcbiAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19pbm5lcl9fdHdvX2FjdGl2ZScpKSB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2lubmVyX190d29fYWN0aXZlJykuY2xhc3NMaXN0LnJlbW92ZSgnaGVhZGVyX19pbm5lcl9fdHdvX2FjdGl2ZScpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBoZWFkZXJJbm5lclR3by5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgIGhlYWRlckJhbm5lckltZy5jbGFzc0xpc3QudG9nZ2xlKCdoZWFkZXJfX2Jhbm5lci1tZW51X2FjdGl2ZScpO1xyXG4gICAgZXZlbnQuY3VycmVudFRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdoZWFkZXJfX2lubmVyX190d29fYWN0aXZlJyk7XHJcbiAgfSlcclxuXHJcbiAgcmVxdWVzdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZXZlbnQgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCBmb3JtSW5wdXQgPSB7XHJcbiAgICAgIGNvbXBhbnk6IGV2ZW50LmN1cnJlbnRUYXJnZXQuY29tcGFueSxcclxuICAgICAgZmlvOiBldmVudC5jdXJyZW50VGFyZ2V0LmZpbyxcclxuICAgICAgZW1haWw6IGV2ZW50LmN1cnJlbnRUYXJnZXQuZW1haWwsXHJcbiAgICAgIHBob25lOiBldmVudC5jdXJyZW50VGFyZ2V0LnBob25lLFxyXG4gICAgfVxyXG4gICAgY29uc3QgcG9saWN5ID0gZXZlbnQuY3VycmVudFRhcmdldC5wb2xpY3k7XHJcblxyXG4gICAgaWYoZXZlbnQuY3VycmVudFRhcmdldC5xdWVyeVNlbGVjdG9yKCcucmVxdWVzdF9fZXJyb3ItY2hlY2snKSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhldmVudC5jdXJyZW50VGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJy5yZXF1ZXN0X19lcnJvci1jaGVjaycpKVxyXG4gICAgICBldmVudC5jdXJyZW50VGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJy5yZXF1ZXN0X19lcnJvci1jaGVjaycpLmNsYXNzTGlzdC5yZW1vdmUoJ3JlcXVlc3RfX2Vycm9yLWNoZWNrJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYoZXZlbnQuY3VycmVudFRhcmdldC5xdWVyeVNlbGVjdG9yKCcucmVxdWVzdF9fZXJyb3InKSkge1xyXG4gICAgICBldmVudC5jdXJyZW50VGFyZ2V0LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZXF1ZXN0X19lcnJvcicpLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdyZXF1ZXN0X19lcnJvcicpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZihmb3JtSW5wdXQuY29tcGFueS52YWx1ZS50cmltKCkgJiYgZm9ybUlucHV0LmZpby52YWx1ZS50cmltKCkgJiYgZm9ybUlucHV0LmVtYWlsLnZhbHVlLnRyaW0oKSAmJiBmb3JtSW5wdXQucGhvbmUudmFsdWUudHJpbSgpICYmIHBvbGljeS5jaGVja2VkKSB7XHJcbiAgICAgIGFsZXJ0KCfQpNC+0YDQvNCwINC30LDQv9C+0LvQvdC10L3QsCcpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBwb2xpY3kuY2hlY2tlZCB8fCBwb2xpY3kubmV4dEVsZW1lbnRTaWJsaW5nLnF1ZXJ5U2VsZWN0b3IoJy5yZXF1ZXN0X19lcnJvci1zcGFuJykuY2xhc3NMaXN0LmFkZCgncmVxdWVzdF9fZXJyb3ItY2hlY2snKTtcclxuICAgICAgXHJcbiAgICAgIGZvcihsZXQga2V5IGluIGZvcm1JbnB1dCkge1xyXG4gICAgICAgIGZvcm1JbnB1dFtrZXldLnZhbHVlIHx8IGZvcm1JbnB1dFtrZXldLmNsb3Nlc3QoJy5yZXF1ZXN0X19mb3JtLWlucHV0JykuY2xhc3NMaXN0LmFkZCgncmVxdWVzdF9fZXJyb3InKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBmdW5jdGlvbiBzZWxlY3QoKSB7XHJcbiAgICBjb25zdCBzZWxlY3RIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VsZWN0X19oZWFkZXInKTtcclxuICAgIGNvbnN0IHNlbGVjdEl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VsZWN0X19pdGVtJyk7XHJcblxyXG4gICAgc2VsZWN0SGVhZGVyLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWxlY3RUb2dnbGUpO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIHNlbGVjdEl0ZW0uZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNlbGVjdENob29zZSk7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgZnVuY3Rpb24gc2VsZWN0VG9nZ2xlKCkge1xyXG4gICAgICB0aGlzLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnc2VsZWN0X2FjdGl2ZScpO1xyXG4gICAgICBjb25zdCBibG9jayA9IHRoaXMubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG4gICAgICBcclxuICAgICAgaWYoIWJsb2NrLnN0eWxlLmhlaWdodCkge1xyXG4gICAgICAgIGJsb2NrLnN0eWxlLmhlaWdodCA9IGJsb2NrLnNjcm9sbEhlaWdodCArICdweCc7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYmxvY2suc3R5bGUuaGVpZ2h0ID0gJyc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgZnVuY3Rpb24gc2VsZWN0Q2hvb3NlKCkge1xyXG4gICAgICBjb25zdCB0ZXh0ID0gdGhpcy5pbm5lclRleHQ7XHJcbiAgICAgIGNvbnN0IHNlbGVjdCA9IHRoaXMuY2xvc2VzdCgnLnNlbGVjdCcpO1xyXG4gICAgICBjb25zdCBjdXJyZW50VGV4dCA9IHRoaXMuY2xvc2VzdCgnLnNlbGVjdCcpLnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RfX2VudGVyJyk7XHJcblxyXG4gICAgICB0aGlzLmNsb3Nlc3QoJy5zZWxlY3RfX2JvZHknKS5zdHlsZS5oZWlnaHQgPSAnJztcclxuICAgICAgY3VycmVudFRleHQuaW5uZXJUZXh0ID0gdGV4dDtcclxuICAgICAgc2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdF9hY3RpdmUnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNlbGVjdCgpO1xyXG5cclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9vdGVyX19jb250ZW50LXRpdGxlJykuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XHJcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgIGlmKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCA8IDYyMCkge1xyXG4gICAgICAgIGNvbnN0IGJsb2NrID0gZS5jdXJyZW50VGFyZ2V0Lm5leHRFbGVtZW50U2libGluZztcclxuXHJcbiAgICAgICAgZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2Zvb3Rlcl9fY29udGVudC10aXRsZV9hY3RpdmUnKTtcclxuICAgICAgICBcclxuICAgICAgICBpZighYmxvY2suc3R5bGUuaGVpZ2h0KSB7XHJcbiAgICAgICAgICBibG9jay5zdHlsZS5oZWlnaHQgPSBibG9jay5zY3JvbGxIZWlnaHQgKyAncHgnO1xyXG4gICAgICAgICAgYmxvY2suc3R5bGUucGFkZGluZ0JvdHRvbSA9ICcyMHB4JztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYmxvY2suc3R5bGUuaGVpZ2h0ID0gJyc7XHJcbiAgICAgICAgICBibG9jay5zdHlsZS5wYWRkaW5nQm90dG9tID0gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KVxyXG59KTsiXX0=
