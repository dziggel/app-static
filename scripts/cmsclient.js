/*
CMS Client Page Configuration
*/
'use strict'

/*
run a carousel component
*/
register_cmscomp_carousel()
function register_cmscomp_carousel() {
  let carousels = document.getElementsByClassName('cmscomp_carousel');
  if(carousels.length > 0){
      for (let i = 0; i < carousels.length; i++) {
          cmscomp_carousel(carousels[i])
      }
  } else {
    setTimeout(register_cmscomp_carousel, 500); // check again in a second
  }
}
function cmscomp_carousel(e) {

  let ss = e.getElementsByClassName("cmscomp_carousel_slides")
  let cc = e.getElementsByClassName("cmscomp_carousel_captions")
  let pp = e.getElementsByClassName("cmscomp_carousel_paragraphs")
  let dd = e.getElementsByClassName("dot")
  let tt = e.getElementsByClassName("cmscomp_carousel_interval")[0]
  let cycle = e.getElementsByClassName("cmscomp_carousel_cycle")[0]
  let prev = e.getElementsByClassName("cmscomp_carousel_prev")[0]
  let next = e.getElementsByClassName("cmscomp_carousel_next")[0]
  if (tt) {
    tt = tt.innerHTML
  }
  if (cycle) {
    cycle = cycle.innerHTML
  }
  if (prev) {
    prev.addEventListener("click", function(event){
        console.log("Redirecting Stopped");
        event.preventDefault();
        scroll_prev(ss,cc,pp,tt,dd);
    });
  }
  if (next) {
    next.addEventListener("click", function(event){
        console.log("Redirecting Stopped");
        event.preventDefault();
        scroll_next(ss,cc,pp,tt,dd);
    });
  }
  if (ss.length > 0) {
    for (let i = 0; i < ss.length; i++) {
      ss[i].style.display = "none"
      cc[i].style.display = "none"
      pp[i].style.display = "none"
    }
    step_next_car(ss,cc,pp,tt,dd,cycle,0)
  }
}
function scroll_next(ss,cc,pp,tt,dd) {
  let np = 0
  for (let i = 0; i < ss.length; i++) {
    if (ss[i].style.display == 'block') {
      ss[i].style.display = "none"
      cc[i].style.display = "none"
      pp[i].style.display = "none"
      dd[i].classList.remove('cmscomp_carousel_dot_active')
      dd[i].classList.add('cmscomp_carousel_dot_inactive')
      np = i
    }
  }
  if ((np + 1) == ss.length) {
    np = -1
  }
  np = np + 1
  ss[np].style.display = "block"
  cc[np].style.display = "block"
  pp[np].style.display = "block"
  dd[np].classList.remove('cmscomp_carousel_dot_inactive')
  dd[np].classList.add('cmscomp_carousel_dot_active')
}
function scroll_prev(ss,cc,pp,tt,dd) {
    let np = 0
    for (let i = 0; i < ss.length; i++) {
      if (ss[i].style.display == 'block') {
        ss[i].style.display = "none"
        cc[i].style.display = "none"
        pp[i].style.display = "none"
        dd[i].classList.remove('cmscomp_carousel_dot_active')
        dd[i].classList.add('cmscomp_carousel_dot_inactive')
        np = i
      }
    }
    if (np == 0) {
      np = ss.length
    }
    np = np - 1
    ss[np].style.display = "block"
    cc[np].style.display = "block"
    pp[np].style.display = "block"
    dd[np].classList.remove('cmscomp_carousel_dot_inactive')
    dd[np].classList.add('cmscomp_carousel_dot_active')
}
function step_next_car(ss,cc,pp,tt,dd,cycle,pos) {
  for (let i = 0; i < ss.length; i++) {
    ss[i].style.display = "none"
    cc[i].style.display = "none"
    pp[i].style.display = "none"
    dd[i].classList.remove('cmscomp_carousel_dot_active')
    dd[i].classList.add('cmscomp_carousel_dot_inactive')
  }
  ss[pos].style.display = "block"
  cc[pos].style.display = "block"
  pp[pos].style.display = "block"
  dd[pos].classList.remove('cmscomp_carousel_dot_inactive')
  dd[pos].classList.add('cmscomp_carousel_dot_active')

  pos = pos+1
  if (pos == ss.length) {
    pos = 0
  }
  if(cycle == 'true') {
    setTimeout(function() {step_next_car(ss,cc,pp,tt,dd,cycle,pos)}, tt)
  }
}

/*
count up from start to finish over time
*/
register_cmscomp_counter()
function register_cmscomp_counter() {
  let counters = document.getElementsByClassName('cmscomp_counter');
  if(counters.length > 0){
      for (let i = 0; i < counters.length; i++) {
          cmscomp_counter(counters[i])
      }
  } else {
    setTimeout(register_cmscomp_counter, 500); // check again in a second
  }
}
function cmscomp_counter(e) {
  let counter_current = e.getElementsByClassName("cmscomp_counter_current")[0]
  let counter_step = e.getElementsByClassName("cmscomp_counter_step")[0]
  let counter_start = e.getElementsByClassName("cmscomp_counter_start")[0]
  let counter_end = e.getElementsByClassName("cmscomp_counter_end")[0]
  let counter_interval = e.getElementsByClassName("cmscomp_counter_interval")[0]

  let ccurrent = counter_current.innerHTML
  let cstep = counter_step.innerHTML
  let cstart = counter_start.innerHTML
  let cend = counter_end.innerHTML

  if (isNaN(ccurrent) ||isNaN(cstep) ||isNaN(cstart) ||isNaN(cend)) {
	   return;
  }
  setInterval(calculate, parseInt(counter_interval));

  function calculate() {
    let newnum = parseInt(ccurrent) + parseInt(cstep)
    ccurrent = newnum
    if (ccurrent < cend) {
      counter_current.innerHTML = ccurrent
    }
  }
}

/*
count from now to a date in the future - countdown the number of days waiting.
*/
register_cmscomp_countdown()
function register_cmscomp_countdown() {
  let countdowns = document.getElementsByClassName('cmscomp_countdown');
  if(countdowns.length > 0){
    for (let i = 0; i < countdowns.length; i++) {
        cmscomp_countdown(countdowns[i])
    }
  } else {
      setTimeout(register_cmscomp_countdown, 500); // check again in a second
  }
}
function cmscomp_countdown(e) {
  let fd = e.getElementsByClassName("cmscomp_countdown_futuredate")[0]
  let ed = e.getElementsByClassName("cmscomp_countdown_days")[0]
  let eh = e.getElementsByClassName("cmscomp_countdown_hours")[0]
  let em = e.getElementsByClassName("cmscomp_countdown_minutes")[0]
  let es = e.getElementsByClassName("cmscomp_countdown_seconds")[0]

  let days, hours, minutes, seconds

  let futuredate = new Date(fd.innerHTML).getTime()

  if (isNaN(futuredate)) {
	return;
  }

  setInterval(calculate, 1000);

  function calculate() {
    let startDate = new Date();
    startDate = startDate.getTime();

    let timeRemaining = parseInt((futuredate - startDate) / 1000);

    if (timeRemaining >= 0) {
      days = parseInt(timeRemaining / 86400);
      timeRemaining = (timeRemaining % 86400);

      hours = parseInt(timeRemaining / 3600);
      timeRemaining = (timeRemaining % 3600);

      minutes = parseInt(timeRemaining / 60);
      timeRemaining = (timeRemaining % 60);

      seconds = parseInt(timeRemaining);

      ed.innerHTML = parseInt(days, 10);
      eh.innerHTML = ("0" + hours).slice(-2);
      em.innerHTML = ("0" + minutes).slice(-2);
      es.innerHTML = ("0" + seconds).slice(-2);
    } else {
      return;
    }
  }
}

/*
cmscomp_locale_select is used to change the page locale based on a select change on a page
arbitary timeout of 1000 ms before looking for components of class
*/
//setTimeout(register_cmscomp_locale_select, 1000)
register_cmscomp_locale_select()
function register_cmscomp_locale_select() {
  let cmscomp_locale_select_elems = document.getElementsByClassName('cmscomp_locale_select');
  if(cmscomp_locale_select_elems.length > 0){
    for (let i = 0; i < cmscomp_locale_select_elems.length; i++) {
      cmscomp_locale_select_elems[i].addEventListener('change', cmscomp_locale_select, false);
    }
  } else {
    setTimeout(register_cmscomp_locale_select, 500); // check again in a second
  }
}
function cmscomp_locale_select() {
  let loc = this.value
  document.cookie = cms_cookie_locale+"="+loc;
  window.location.reload(true);
}

/*
cmscomp_locale_click is used to change the page locale based on a clicked locale anchor on a page
arbitary timeout of 1000 ms before looking for components of class
*/
//setTimeout(register_cmscomp_locale_click, 1000)
register_cmscomp_locale_click()
function register_cmscomp_locale_click() {
  let cmscomp_locale_click_elems = document.getElementsByClassName('cmscomp_locale_click');
  if(cmscomp_locale_click_elems.length > 0){
    for (let i = 0; i < cmscomp_locale_click_elems.length; i++) {
        cmscomp_locale_click_elems[i].addEventListener('click', cmscomp_locale_click, false);
    }
  } else {
    setTimeout(register_cmscomp_locale_click, 500); // check again in a second
  }
}
function cmscomp_locale_click() {
  let loc = this.getAttribute("cmscomp_locale_value")
  document.cookie = cms_cookie_locale+"="+loc;
  window.location.reload(true);
}

/*
cmscomp_locale_select is used to change the page locale based on a select change on a page
arbitary timeout of 1000 ms before looking for components of class
*/
//setTimeout(register_cmscomp_locale_select, 1000)
register_cms_navbar_items()
function register_cms_navbar_items() {
  let cms_navbar_items_elems = document.getElementsByClassName('cms-navbar-item');
  if(cms_navbar_items_elems.length > 0){
    for (let i = 0; i < cms_navbar_items_elems.length; i++) {
      cms_navbar_items_elems[i].addEventListener('click', cms_navbar_item_click, false);
    }
  } else {
    setTimeout(register_cms_navbar_items, 500); // check again in a second
  }
}
function cms_navbar_item_click() {
  let k = this.href.split('#')
  let h = this.pathname
  if (k.length > 1) {
    h += '#'+k[1]
  }
  console.log('clicked '+h)
  history.pushState(null, null, h);
}

/*
listen for a search form

cmscomp_search_holder = contains a search form and a div for the results

cmscomp_form must have
  ddmodelname = searching this model
  ddcomponentid = this compoent has result details (result template, etc...
cmscomp_form_result = div to display results or message from server.

*/
register_cmscomp_search_holder()
function register_cmscomp_search_holder() {
  let holders = document.getElementsByClassName('cmscomp_search_holder');
  if(holders.length > 0){
      for (let i = 0; i < holders.length; i++) {
          cmscomp_form(holders[i])
      }
  } else {
    setTimeout(register_cmscomp_search_holder, 500); // check again in a second
  }
}
function cmscomp_form(h) {
  let f = h.getElementsByClassName('cmscomp_form')[0];
  let r = h.getElementsByClassName('cmscomp_form_result')[0];
  f.addEventListener("submit", function(event){
        event.preventDefault();
        let jform = toJSON(this)
        submit_cmscomp_search(jform, r);
  });
}
function toJSON(f) {

  let elements = f.querySelectorAll( "input, select, textarea" );
  let jform = {}

  for( var i = 0; i < elements.length; ++i ) {
    let element = elements[i];
    let name = element.name;
    let value = element.value;
    jform[name] = value
  }
  return jform;
}
/* pass page data to AXIOS */
function submit_cmscomp_search(f, r) {
  if (r) {
    AXIOS_component_model_search(f,r)
  }
}

/*
cmscomp_tabs is used to tab on static content and dynamic content organised in a tabbed list
its added as a block template
*/
// register_cmscomp_showgroup()
// function register_cmscomp_showgroup() {
//   let cmscomp_showgroup_e = document.getElementsByClassName('cmscomp_showgroup');
//   if(cmscomp_showgroup_e.length > 0){
//     for (let i = 0; i < cmscomp_showgroup_e.length; i++) {
//       cmscomp_toggle_showgroup(cmscomp_showgroup_e[i])
//     }
//   } else {
//     setTimeout(register_cmscomp_showgroup, 500); // check again in a second
//   }
// }
// function cmscomp_toggle_showgroup(e) {
//
//   let tabs = e.getElementsByClassName("cmscomp_tab")
//   let panels = e.getElementsByClassName("cmscomp_tab_panel")
//   for (let i = 0; i < tabs.length; i++) {
//       tabs[i].classList.remove('is-active')
//       panels[i].classList.add('is-hidden')
//   }
//   tabs[0].classList.add('is-active')
//   panels[0].classList.remove('is-hidden')
//
//   for (let i = 0; i < tabs.length; i++) {
//     tabs[i].addEventListener("click", function(event){
//         console.log("Redirecting Stopped");
//         event.preventDefault();
//         show_panel(i, tabs, panels);
//     });
//   }
// }
//
//
// function showThisGroup(id) {
//
//   let rep = /MG-/gi;
//   let group = id.replace(rep, "CMSHIDEGROUP");
//
//   let x = document.getElementsByClassName("show-menu-group")
//   if (x) {
//     for (let i = 0; i < x.length; i++) {
//         if (x[i].classList.contains("is-hidden")) {
//         } else {
//           x[i].classList.add("is-hidden")
//         }
//       }
//     }
//     let y = document.getElementById(group)
//     if (y) {
//       y.classList.remove("is-hidden")
//     }
//   }

/*
cmscomp_tabs is used to tab on static content and dynamic content organised in a tabbed list
its added as a block template
*/
register_cmscomp_tabs()
function register_cmscomp_tabs() {
  let cmscomp_tab_elems = document.getElementsByClassName('cmscomp_tabs');
  if(cmscomp_tab_elems.length > 0){
    for (let i = 0; i < cmscomp_tab_elems.length; i++) {
      cmscomp_tab_change(cmscomp_tab_elems[i])
    }
  } else {
    setTimeout(register_cmscomp_tabs, 500); // check again in a second
  }
}
function cmscomp_tab_change(e) {

  let tabs = e.getElementsByClassName("cmscomp_tab")
  let panels = e.getElementsByClassName("cmscomp_tab_panel")
  for (let i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove('is-active')
      panels[i].classList.add('is-hidden')
  }
  tabs[0].classList.add('is-active')
  panels[0].classList.remove('is-hidden')

  for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", function(event){
        console.log("Redirecting Stopped");
        event.preventDefault();
        show_panel(i, tabs, panels);
    });
  }
}

function show_panel(c, tabs, panels) {
  for (let i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove('is-active')
      panels[i].classList.add('is-hidden')
  }
  tabs[c].classList.add('is-active')
  panels[c].classList.remove('is-hidden')
}

/*
CMS client pages first start by loading page plans and menus
*/
function zonload_app(p,m) {
  setPageData()
  goto()
  zonload_page(m)
}
function zonload_page(m) {
  setDynamicMenu()
  setMediaInDiv('sessionmedia1id','smallprofileimg')
  var offsetHeight = document.getElementById('navtopid').offsetHeight;
  var target = document.getElementById("navtopoffsetid");
  target.style.height=offsetHeight+'px';
}

/*
the page locale is used to get static and dynamic content in the correct language
*/
function getPageLocale() {
  var cookielocale = document.cookie.match(new RegExp(cms_cookie_locale + '=([^;]+)'))
  if (cookielocale) {
    if (cookielocale.length > 1){
      return cookielocale[1]
    }
  }
  return 'en'
}

function goto() {
  setTimeout(function () {
    let s = location.href
    let ss = s.split('#')
    if (Array.isArray(ss)) {
      if (ss[1]) {
        var target = document.getElementById(ss[1]);
        target.parentNode.scrollTop = target.offsetTop;
      }
    } else {
      location.href
    }
  }, 1000);
}

function setMediaInDiv(idHolder,imgHolder) {
  let idH = document.getElementById(idHolder)
  let imgH = document.getElementById(imgHolder)
  if (idH && imgH) {
    let id = idH.innerHTML
    AXIOSGetMedia(id,imgH)
  }
}
function setMediaInDiv1(idHolder,imgHolder) {
  let idH = document.getElementById(idHolder)
  let imgH = document.getElementById(imgHolder)
  if (idH && imgH) {
    let id = idH.value
    let t1 = JSON.parse(id)
    AXIOSGetMedia(t1.id,imgH)
  }
}

  function setLocalStorageMessage(servermsg) {
    if (servermsg.length > 0) {
      let insertHistory = false
      for(let i=0; i < 5; i++) {
          let put = localStorage.getItem("CMS_MSG"+i)
          if (put == null) {
            localStorage.setItem("CMS_MSG"+i, servermsg)
            insertHistory = true
            break
          }
      }
      if ((insertHistory == false)){
        let put0 = localStorage.getItem("CMS_MSG0")
        let put1 = localStorage.getItem("CMS_MSG1")
        let put2 = localStorage.getItem("CMS_MSG2")
        let put3 = localStorage.getItem("CMS_MSG3")
        localStorage.setItem("CMS_MSG0", servermsg)
        localStorage.setItem("CMS_MSG1", put0)
        localStorage.setItem("CMS_MSG2", put1)
        localStorage.setItem("CMS_MSG3", put2)
        localStorage.setItem("CMS_MSG4", put3)
      }
      //let e = document.getElementById("serverinfohistory")
      let a = document.getElementsByClassName("display-messages")
      if (a) {
        for(let j=0; j < a.length; j++) {
          let inner = ''
          for(let i=0; i < 5; i++) {
            let msg = localStorage.getItem("CMS_MSG"+i)
            if (msg) {
              inner = inner+'<span class="navbar-item">'+msg+'</span>'
            }
          }
          a[j].innerHTML = inner
        }
      }
    }
  }

function toggleGroup(c) {
  let x = document.getElementsByClassName("can-show-group")
  if (x) {
    for (let i = 0; i < x.length; i++) {
      x[i].classList.add("is-hidden")
    }
    let id = "showgroup"+c
    let j = document.getElementById(id)
    if (j) {
      j.classList.remove("is-hidden")
    }
  }
}
function toggleHideThis(id) {
  let x = document.getElementById(id)
  if (x) {
    if (x.classList.contains('is-hidden')) {
        x.classList.remove('is-hidden')
    } else {
      x.classList.add('is-hidden')
    }
  }
}
function toggleCheckThis(classname) {
  let x = document.getElementsByClassName("can-check-this")
  if (classname) {
    x = document.getElementsByClassName(classname)
  }
  if (x) {
    for (let i = 0; i < x.length; i++) {
      if(x[i].checked) {
        x[i].checked = false
      } else {
        x[i].checked = true
      }
    }
  }
}
function toggleTab(id, tablink) {

  localStorage.setItem('toggle_tab_show', id)
  localStorage.setItem('toggle_tab_link', tablink)

  let y11 = document.getElementsByClassName("is-active")
  if (y11) {
    for (let i = 0; i < y11.length; i++) {
      y11[i].classList.remove("is-active")
    }
  }
  let y = document.getElementById(tablink)
  let y1 = document.getElementsByClassName("is-active-tab")
  if (y1) {
    for (let i = 0; i < y1.length; i++) {
      y1[i].classList.add('is-not-active-tab')
      y1[i].classList.remove("is-active-tab")
      let y2 = document.getElementById(tablink+'li')
      if (y2) {
        y2.classList.add('is-active')
      }
    }
  }
  if (y) {
    y.classList.add('is-active-tab')
  }
  let tabs = document.getElementsByClassName("can-show-tab")
  if (tabs) {
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].classList.add("is-hidden")
    }
    if (tabs !== null) {
      let tab = document.getElementById(id)
      if (tab) {
        tab.classList.remove("is-hidden")
      } else {
        tabs[0].classList.remove("is-hidden")
      }
    }
  }
}
function toggleDropdownMenu() {
  let nav = document.getElementById("navtopdropdownmenu")
  if (nav) {
    if (nav.style.display == "block") {
      nav.style.display = "none"
    } else {
      nav.style.display = "block"
    }
  }
}
function toggleClass(id, class1) {
  let e = document.getElementById(id)
  if (e.classList.contains(class1)) {
    e.classList.remove(class1)
  } else {
    e.classList.add(class1)
  }
}
function showThisGroup(id) {

  let rep = /MG-/gi;
  let group = id.replace(rep, "CMSHIDEGROUP");

  let x = document.getElementsByClassName("show-menu-group")
  if (x) {
    for (let i = 0; i < x.length; i++) {
        if (x[i].classList.contains("is-hidden")) {
        } else {
          x[i].classList.add("is-hidden")
        }
      }
    }
    let y = document.getElementById(group)
    if (y) {
      y.classList.remove("is-hidden")
    }
  }
