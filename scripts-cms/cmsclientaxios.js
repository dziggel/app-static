/*
cmsaxios.js
This file is used to load dynamic elements onto a page.
cmsclient_load_page - loads all cms placeholders in a page plan
cmsclient_load_menu - loads all cms placelhoders in primary and secondary menus
*/
'use strict'
let cmsaccname = document.getElementById("cmsaccountname").innerHTML

function setDynamicMenu() {
  let a = document.getElementById("cmsaccountname").innerHTML
  let e = document.getElementsByClassName("cmsmenu")
  if (e) {
    for (let i = 0; i < e.length; i++) {
      let cmsmenu_elem = e[i]
      let account_menupos = a+'_'+cmsmenu_elem.id
      AXIOSSetMenu(account_menupos, cmsmenu_elem, getDynamicMenuData)
    }
  }
}
function getDynamicMenuData(data) {
  let menuparagraphid = data.menuparagraphid
  let menucomponentid = data.menucomponentid
  // console.log('----------------')
  // console.log(data.menuposition)
  // console.log(data.menugroups)
  // console.log(data.menuitems)
  let found = false
  if (menuparagraphid) {
    found = true
    getMenuParagraphIdData(menuparagraphid,data.menuposition)
  }
  if (menucomponentid) {
    found = true
    getMenuComponentIdData(menucomponentid,data.menuposition)
  }
  if (found == false) {
      let x = data.menugroups
      if (Array.isArray(x)) {
          for (let c = 0; c < x.length; c++) {
            getDynamicMenuLabelData(data.menutemplatetag+x[c].groupholder, x[c].contentid)
          }
      }
      let y = data.menuitems
      if (Array.isArray(y)) {
          for (let c = 0; c < y.length; c++) {
            getDynamicMenuItemData(data.menutemplatetag,y[c],data)
          }
      }
  }
  let show = data.menuposition
  if (show.includes('NAVTOP-ROW1-LEFT') || show.includes('NAVTOP-ROW1-CENTER')||show.includes('NAVTOP-ROW1-RIGHT')) {
    let cc = document.getElementsByClassName('navrow1');
    if(cc.length > 0){
      for (let i = 0; i < cc.length; i++) {
        cc[i].classList.remove('is-hidden')
      }
    }
  }
  if (show.includes('NAVTOP-ROW2-LEFT') || show.includes('NAVTOP-ROW2-CENTER')||show.includes('NAVTOP-ROW2-RIGHT')) {
    let cc = document.getElementsByClassName('navrow2');
    if(cc.length > 0){
      for (let i = 0; i < cc.length; i++) {
        cc[i].classList.remove('is-hidden')
      }
    }
  }
  if (show.includes('NAVTOP-ROW3-LEFT') || show.includes('NAVTOP-ROW3-CENTER')||show.includes('NAVTOP-ROW3-RIGHT')) {
    let cc = document.getElementsByClassName('navrow3');
    if(cc.length > 0){
      for (let i = 0; i < cc.length; i++) {
        cc[i].classList.remove('is-hidden')
      }
    }
  }
  if (show.includes('NAVTOP-ROW1-SMALL')) {
    let cc = document.getElementsByClassName('navrow1small');
    if(cc.length > 0){
      for (let i = 0; i < cc.length; i++) {
        cc[i].classList.remove('is-hidden')
      }
    }
  }
  if (show.includes('NAVTOP-ROW2-SMALL')) {
    let cc = document.getElementsByClassName('navrow2small');
    if(cc.length > 0){
      for (let i = 0; i < cc.length; i++) {
        cc[i].classList.remove('is-hidden')
      }
    }
  }
  if (show.includes('NAVTOP-ROW3-SMALL')) {
    let cc = document.getElementsByClassName('navrow3small');
    if(cc.length > 0){
      for (let i = 0; i < cc.length; i++) {
        cc[i].classList.remove('is-hidden')
      }
    }
  }
  if (show.includes('NAVFOOTER-ROW1-LEFT') || show.includes('NAVFOOTER-ROW1-CENTER')||show.includes('NAVFOOTER-ROW1-RIGHT')) {
    let cc = document.getElementsByClassName('navbaserow1');
    if(cc.length > 0){
      for (let i = 0; i < cc.length; i++) {
        cc[i].classList.remove('is-hidden')
      }
    }
  }
  if (show.includes('NAVFOOTER-ROW2-LEFT') || show.includes('NAVFOOTER-ROW2-CENTER')||show.includes('NAVFOOTER-ROW2-RIGHT')) {
    let cc = document.getElementsByClassName('navbaserow2');
    if(cc.length > 0){
      for (let i = 0; i < cc.length; i++) {
        cc[i].classList.remove('is-hidden')
      }
    }
  }
  if (show.includes('NAVFOOTER-ROW3-LEFT') || show.includes('NAVFOOTER-ROW3-CENTER')||show.includes('NAVFOOTER-ROW3-RIGHT')) {
    let cc = document.getElementsByClassName('navbaserow3');
    if(cc.length > 0){
      for (let i = 0; i < cc.length; i++) {
        cc[i].classList.remove('is-hidden')
      }
    }
  }
  if (show.includes('NAVFOOTER-ROW1-SMALL')) {
    let cc = document.getElementsByClassName('navbaserow1small');
    if(cc.length > 0){
      for (let i = 0; i < cc.length; i++) {
        cc[i].classList.remove('is-hidden')
      }
    }
  }
  if (show.includes('NAVFOOTER-ROW2-SMALL')) {
    let cc = document.getElementsByClassName('navbaserow2small');
    if(cc.length > 0){
      for (let i = 0; i < cc.length; i++) {
        cc[i].classList.remove('is-hidden')
      }
    }
  }
  if (show.includes('NAVFOOTER-ROW3-SMALL')) {
    let cc = document.getElementsByClassName('navbaserow3small');
    if(cc.length > 0){
      for (let i = 0; i < cc.length; i++) {
        cc[i].classList.remove('is-hidden')
      }
    }
  }


}
function getDynamicMenuDataOld(data) {
  let menuparagraphid = data.menuparagraphid
  let menucomponentid = data.menucomponentid
  let found = false
  if (menuparagraphid) {
    found = true
    getMenuParagraphIdData(menuparagraphid,data.menuposition)
  }
  if (menucomponentid) {
    found = true
    getMenuComponentIdData(menucomponentid,data.menuposition)
  }
  if (found == false) {
      let x = data.menugroups
      if (Array.isArray(x)) {
          for (let c = 0; c < x.length; c++) {
            getDynamicMenuLabelData(data.menutemplatetag+x[c].groupholder, x[c].contentid)
          }
      }
      let y = data.menuitems
      if (Array.isArray(y)) {
          for (let c = 0; c < y.length; c++) {
            getDynamicMenuItemData(data.menutemplatetag,y[c],data)
          }
      }
  }
}
function getMenuParagraphIdData(menuparagraphid,menuholder) {
  let e = document.getElementById(menuholder)
  if (e) {
    AXIOSGetContent(menuparagraphid, e)
  }
}
function getMenuComponentIdData(menuparagraphid,menuholder) {
  let e = document.getElementById(menuholder)
  if (e) {
    AXIOS_ddcomponent_Get(menuparagraphid, e)
  }
}
function getDynamicMenuLabelData(holder, id) {
  let e = document.getElementById(holder)
  if(e) {
    AXIOSGetContent(id, e)
  }
}
function getDynamicMenuItemData(holder,d,data) {
  let e = document.getElementById(holder+d.itemholder)
  let i = document.getElementById(holder+d.iconholder)
  if(e) {
    // if its an internal CMS link build page and SECTION
    // otherwise just build the page
    if (d.section) {
      let uri = d.page+'#'+d.section
      e.setAttribute('href', cms_protocol+uri)
    } else {
      let uri = d.page
      e.setAttribute('href', cms_protocol+uri)
    }
    AXIOSGetContent(d.contentid, e)
  }
}

function setPageData(p) {
  let a = document.getElementById("cmsaccountname").innerHTML
  if (a) {
    console.log('before encoding %s',p)
    console.log('before encoding %s',p)
    console.log('before encoding %s',p)
    console.log('before encoding %s',p)

    AXIOSSetPage(setPageElements,a,p)
  }
}
let cms_dij = undefined
function setPageElements(data) {

      let cms_di = document.getElementById('cmsdisplayitem').innerHTML
      cms_dij = JSON.parse(cms_di)

      getPageTitleData(data.dpagetitleid)
      getPageDescriptionData(data.dpagedescriptionid)
      /*
      central sections
      */
        getSectionIdData(data.section1id,'1')
        getSectionIdData(data.section2id,'2')
        getSectionIdData(data.section3id,'3')
        getSectionIdData(data.section4id,'4')
        getSectionIdData(data.section5id,'5')
        getSectionIdData(data.section6id,'6')
        getSectionIdData(data.section7id,'7')
        getSectionIdData(data.section8id,'8')
        getSectionIdData(data.section9id,'9')
        getSectionIdData(data.section10id,'10')
        getSectionIdData(data.section11id,'11')
        getSectionIdData(data.section12id,'12')
      /*
      left and right paragraphs
      */
        getPageParagraphIdData(data.asideleft1id,'L1')
        getPageParagraphIdData(data.asideleft2id,'L2')
        getPageParagraphIdData(data.asideleft3id,'L3')
        getPageParagraphIdData(data.asideright1id,'R1')
        getPageParagraphIdData(data.asideright2id,'R2')
        getPageParagraphIdData(data.asideright3id,'R3')
      /*
      left and right components
      */
        getPageComponentIdData(data.componentleft1id,'L1')
        getPageComponentIdData(data.componentleft2id,'L2')
        getPageComponentIdData(data.componentleft3id,'L3')
        getPageComponentIdData(data.componentright1id,'R1')
        getPageComponentIdData(data.componentright2id,'R2')
        getPageComponentIdData(data.componentright3id,'R3')

        AXIOSSetSubMenu(data.secondarymenuid, getDynamicMenuData)
}
function getPageTitleData(dpagetitleid) {
  if (dpagetitleid != 'null') {
    let ename = 'cmspagetitle'
    let e = document.getElementById(ename)
    if (e) {
      AXIOSGetContent(dpagetitleid, e)
    }
  }
}
function getPageDescriptionData(dpagedescriptionid) {
  if (dpagedescriptionid != 'null') {
    let ename = 'cmspagedescription'
    let e = document.getElementById(ename)
    if (e) {
      AXIOSGetMetaContent(dpagedescriptionid, e)
    }
  }
}

function getPageParagraphIdData(columnid,columntag) {
  if (columnid != 'null') {
    let asideholder = 'CMSCOLUMNHOLDER'+columntag
    let e = document.getElementById(asideholder)
    if (e) {
      AXIOSGetContent(columnid, e)
    }
  }
}
function getPageComponentIdData(columnid,columntag) {
  if (columnid != 'null') {
    let asideholder = 'CMSCOLUMNHOLDER'+columntag
    let e = document.getElementById(asideholder)
    if (e) {
        AXIOS_ddcomponent_Get(columnid, e)
    }
  }
}
/* are we showing a section with grids, or a displayite */
function getSectionIdData(sectionid,sectioncount) {

  let cmsdisplay = 'CMS'+cms_dij.sectionid
  let cmssection = 'CMSSECTION'+sectioncount
  //console.log(cmsdisplay, cmssection)
  if (cmsdisplay == cmssection) {
    let c = document.getElementById(cmsdisplay)
    if (c) {
      AXIOSSetDisplayItem(cms_dij,c)
    }
    //
    // let c = document.getElementById(cmssection)
    // if (c) {
    //   let cc = cms_dij.sectionid+"  JKJKJ "+cms_dij.componentid
    //   console.log(cc)
    //   c.innerHTML = cc
    // }
    let cc = document.getElementById(cmssection+'HOLDER')
    if (cc) {
      cc.classList.remove('is-hidden')
    }
  } else {
    if (sectionid != 'null') {
      let e = document.getElementById(cmssection)
      if (e) {
        AXIOSSetSection(sectionid, sectioncount, cmssection, setSectionGrid)
      }
    }
  }
}
function setSectionGrid(sectiondata,sectioncount,sectionholder) {

  if (sectiondata == 'NOSECTION') {
    return
  }
  if (sectiondata.axioserror) {
    return
  }
  let gridsize = sectiondata.sectiongrid
  if (gridsize) {
    let gridrows = gridsize.substring(0,1)
    let gridcols = gridsize.substring(2,3)
    if (gridcols && gridrows) {
      let sectiongrid = ''
      let csize = 'is-12'
      if (gridcols === '2') csize = 'is-6'
      if (gridcols === '3') csize = 'is-4'
      /* paint the section grid */
      for (let r = 1 ; r <= gridrows; r++) {
        sectiongrid = sectiongrid+'<div class="columns">'
        for (let c = 1 ; c <= gridcols; c++) {
          let gridelementid='block'+r+'x'+c+"_"+sectioncount
          sectiongrid = sectiongrid+'<div class="column '+csize+'" id="'+gridelementid+'">'
          sectiongrid = sectiongrid+"this is the grid "+gridelementid+'</div>'
        }
        sectiongrid = sectiongrid+'</div>'
      }
      let e = document.getElementById(sectionholder)
      if(e) {
        e.innerHTML = sectiongrid
      }
      /* Now, for each grid element, retrieve the block */
      for (let r = 1 ; r <= gridrows; r++) {
        for (let c = 1 ; c <= gridcols; c++) {
          let sectionblockid='block'+r+'x'+c+"id"
          let gridelementid='block'+r+'x'+c+"_"+sectioncount
          setBlockTemplateForSection(sectiondata,sectionblockid,gridelementid)
        }
      }
      /* Show the section once grid is painted */
      let f = document.getElementById(sectionholder+"HOLDER")
      if(f) {
        f.classList.remove('is-hidden')
      }
    }
  }
}
/*
Each grid in a section can have a block of data.
The block is contained within a block template
*/
function setBlockTemplateForSection(sectiondata,sectionblockid,gridelementid) {
  let blockid = sectiondata[sectionblockid]
  if(blockid){
      let e = document.getElementById(gridelementid)
      if (e) {
        AXIOSSetBlockTemplate(blockid, e, gridelementid, getBlockDataForSection)
      }
  }
}
function getBlockDataForSection(blockid, gridelementid) {
  AXIOSGetBlockData(blockid, gridelementid, setBlockDataForSection)
}
function setBlockDataForSection(data, gridelementid) {
    for (let c = 1 ; c <= 6; c++) {
      setTitleDataInBlock(data,c,gridelementid)
      setParagraphDataInBlock(data,c,gridelementid)
      setUrlDataInBlock(data,c,gridelementid)
      setMediaDataInBlock(data,c,gridelementid)
      setComponentDataInBlock(data,c,gridelementid)
    }
}
function setComponentDataInBlock(x,c,tokenid) {

  let blockrandom = x.blockrandom
  let stem = tokenid+blockrandom
  let cid
  let cholder
  for (let cc = 1 ; cc <= 6; cc++) {
    if (cc == c) {
      let idfield = "component"+c+"id"
      cid = x[idfield]
      cholder = stem+"CMSCOMP"+c
    }
  }
  if((cid === 'undefined') || (cid === 'null'))  {
    return
  } else {
      let e = document.getElementById(cholder)
      if (e) {

        AXIOS_ddcomponent_Get(cid, e)
      }
    }
}
function setTitleDataInBlock(x,c,tokenid) {
    let blockrandom = x.blockrandom
    let stem = tokenid+blockrandom
    let cid
    let cholder
    for (let cc = 1 ; cc <= 6; cc++) {
      if (cc == c) {
        let idfield = "title"+c+"id"
        cid = x[idfield]
        cholder = stem+"CMSTITLE"+c
      }
    }
    if((cid === 'undefined') || (cid === 'null')  || (cid === null))  {
    } else {
      let e = document.getElementById(cholder)
      if (e) {
        AXIOSGetContent(cid, e)
      }
    }
}
function setParagraphDataInBlock(x,c,tokenid) {

  let blockrandom = x.blockrandom
  let stem = tokenid+blockrandom
  let cid
  let cholder
  for (let cc = 1 ; cc <= 6; cc++) {
    if (cc == c) {
      let idfield = "paragraph"+c+"id"
      cid = x[idfield]
      cholder = stem+"CMSPARA"+c
    }
  }
  if((cid === 'undefined') || (cid === 'null'))  {
  } else {
      let e = document.getElementById(cholder)
      if (e) {
        AXIOSGetContent(cid, e)
      }
    }
}
function setUrlDataInBlock(x,c,tokenid) {
  let blockrandom = x.blockrandom
  let stem = tokenid+blockrandom
  let cid
  let cholder
  for (let cc = 1 ; cc <= 6; cc++) {
    if (cc == c) {
      let idfield = "url"+c+"id"
      cid = x[idfield]
      cholder = stem+"CMSURL"+c
    }
  }
    if((cid === 'undefined') || (cid === 'null'))  {
    } else {
      let e = document.getElementById(cholder)
      if (e) {
        AXIOSGetContentUrl(cid, e)
      }
    }
}
function setMediaDataInBlock(x,c,tokenid) {
  let blockrandom = x.blockrandom
  let stem = tokenid+blockrandom
  let cid
  let cholder
  for (let cc = 1 ; cc <= 6; cc++) {
    if (cc == c) {
      let idfield = "media"+c+"id"
      cid = x[idfield]
      cholder = stem+"CMSMEDIA"+c
    }
  }
    if((cid === 'undefined') || (cid === 'null'))  {
    } else {
      let e = document.getElementById(cholder)
      if (e) {
        AXIOSGetMedia(cid,e)
      }
    }
}

/*
  The post method posts a form from loaded in a dynamic template
  The post method returns a resulttemplate to fill an innerHTML
  Or an axioserror for displaying in the users console

  AXIOS and CORS combined are providing a mis-match in understanding, so
  even though our CORS on the server side is seup correctly, we still need
  to identify that we are sending a content type of application/json

  The data is a name:value set of inputs in the component-form-post template
  At least one hidden name:value pair should be included,
  this is 'ddmodel' and is used to buid our queries

  post a search query to a ddmodel
*/
function AXIOS_component_model_search(f, e) {

  axios({
    method: 'post',
    url: cms_dynamicurl + '/AXIOS_component_model_search',
    data: JSON.stringify(f),
    config: {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  }).then(function(response) {
      if (response.data.axioserror) {
        e.innerHTML = ''
      } else {
        e.innerHTML = response.data.axiosdata
      }
    }
    ).catch(function(error) {
      console.log(error)
    })
  }
/*
post to a ddmodel
*/
function AXIOS_component_model_post(f, e) {

}
/*

  This method always returns an innerHTML subdocument or null
  The innerHTML is built at the server level

  axioserror is printed to the users console.
  loadtemplate is the innerHTML elements that are built at the server

*/
function AXIOS_ddcomponent_Get(id, e) {
  let pagelocale = getPageLocale()
  axios.get(cms_dynamicurl + '/AXIOS_ddcomponent_get/' + id, {
    params: {
      withCredentials: true,
      pagelocale: pagelocale
    }
  }).then(function(response) {
    if (response.data.axioserror) {
      e.innerHTML = ''
    } else {
      e.innerHTML = response.data.axiosdata
    }
  }).catch(function(error) {
    console.log(error)
    if (e) {
      e.innerHTML = ''
    }
  })
}
function AXIOSSetDisplayItem(cms_dij, e) {
  let pagelocale = getPageLocale()
  axios.get(cms_dynamicurl + '/AXIOS_dditemdisplay_get/', {
    params: {
      withCredentials: true,
      pagelocale: pagelocale,
      cmsdisplayitem: cms_dij
    }
  }).then(function(response) {
    if (response.data.axioserror) {
      e.innerHTML = ''
    } else {
      e.innerHTML = response.data.axiosdata
    }
  }).catch(function(error) {
    console.log(error)
    if (e) {
      e.innerHTML = ''
    }
  })
}


function AXIOSGetContent(id, e) {
  let pagelocale = getPageLocale()
  axios.get(cms_baseurl + '/AXIOSGetContent/' + id, {
    params: {
      withCredentials: true,
      pagelocale: pagelocale
    }
  }).then(function(response) {
    if (response.data.axioserror) {
      e.innerHTML = ''
    } else {
      if (response.data.contentext == 'undefined') {
        e.innerHTML = ''
      } else {
        e.innerHTML = response.data.contenttext
      }
    }
  }).catch(function(error) {
    console.log(error)
    if (e) {
      e.innerHTML = ''
    }
  })
}
function AXIOSGetMetaContent(id, e) {
  let pagelocale = getPageLocale()
  axios.get(cms_baseurl + '/AXIOSGetContent/' + id, {
    params: {
      withCredentials: true,
      pagelocale: pagelocale
    }
  }).then(function(response) {
    if (response.data.axioserror) {
      e.innerHTML = ''
    } else {
      if (response.data.contentext == 'undefined') {
        e.innerHTML = ''
      } else {
        e.setAttribute("content", response.data.contenttext);
        //document.querySelector('meta[name="description"]').setAttribute("content", response.data.contenttext);
      }
    }
  }).catch(function(error) {
    console.log(error)
    if (e) {
      e.innerHTML = ''
    }
  })
}



function AXIOSGetContentUrl(id, e) {

  let pagelocale = getPageLocale()
  axios.get(cms_baseurl + '/AXIOSGetContent/' + id, {
    params: {
      withCredentials: true,
      pagelocale: pagelocale
    }
  }).then(function(response) {
    if (response.data.axioserror) {
      e.innerHTML = ''
    } else {
      let urlstring = '<a href="' + response.data.contenturl + '">' + response.data.contenttext + '</a>'
      e.innerHTML = urlstring
    }
  }).catch(function(error) {
    console.log(error)
    if (e) {
      e.innerHTML = ''
    }
  })
}

function AXIOSGetMedia(id, e) {

  let pagelocale = getPageLocale()
  axios.get(cms_baseurl + '/AXIOSGetMedia/' + id, {
    params: {
      withCredentials: true,
      pagelocale: pagelocale
    }
  }).then(function(response) {
    if (response.data.axioserror) {
      e.innerHTML = ''
    } else {
      let mediastring = '<img style="width: 100%;" src="' + cms_assets + response.data.accountname + '/' + response.data.mediafilename + '" alt="' + response.data.mediatext + '"/>'
      e.innerHTML = mediastring
    }
  }).catch(function(error) {
    console.log(error)
    if (e) {
      e.innerHTML = ''
    }
  })
}

function AXIOSGetContentMenuItem(id, e, baseuri, section) {
  let pagelocale = getPageLocale()
  axios.get(cms_baseurl + '/AXIOSGetContent/' + id, {
    params: {
      withCredentials: true,
      pagelocale: pagelocale
    }
  }).then(function(response) {
    if (response.data.axioserror) {
      e.innerHTML = ''
    } else {
      let urlstring = baseuri + '#' + section
      e.setAttribute('href', urlstring)
      e.innerHTML = response.data.contenttext
    }
  }).catch(function(error) {
    console.log(error)
    if (e) {
      e.innerHTML = ''
    }
  })
}

function AXIOSGetBlockData(id, tokenid, setTemplate) {
  axios.get(cms_baseurl + '/AXIOSGetBlockData/' + id, {}).then(function(response) {

    if (response.data.axioserror) {} else {
      setTemplate(response.data, tokenid)
    }
  }).catch(function(error) {
    console.log(error)
  })
}

function AXIOSSetMenu(account_menupos, cmsmenu_elem, setTemplate) {
  axios.get(cms_baseurl + '/AXIOSSetMenu/' + account_menupos, {}).then(function(response) {
    if (response.data.axioserror) {
      cmsmenu_elem.innerHTML = ''
    } else {
      cmsmenu_elem.innerHTML = response.data.menutemplate
      setTemplate(response.data)
    }
  }).catch(function(error) {
    console.log(error)
    if (cmsmenu_elem) {
      cmsmenu_elem.innerHTML = ''
    }
  })
}

function AXIOSSetSubMenu(secondarymenuid, setTemplate) {
  axios.get(cms_baseurl + '/AXIOSSetSubMenu/' + secondarymenuid, {}).then(function(response) {
    if (response.data.axioserror) {
      console.log(response.data.axioserror)
    } else {
      let e = document.getElementById(response.data.menuposition)
      if (e) {
        e.innerHTML = response.data.menutemplate
        setTemplate(response.data)
      }
    }
  }).catch(function(error) {
    console.log(error)
    if (cmsmenu_elem) {
      cmsmenu_elem.innerHTML = ''
    }
  })
}

function AXIOSSetPage(setTemplate, y, p) {
  let u = cms_baseurl
  u += '/AXIOSSetPage/'
  u += y
  if (p) {
    u += '/'
    let p1 = encodeURIComponent(p);
    u += p1
  }
  console.log('after encoding %s',u)
  axios.get(u, {}).then(function(response) {
    if (response.data.axioserror) {} else {
      setTemplate(response.data)
    }
  }).catch(function(error) {
    console.log(error)
  })
}

function AXIOSSetSection(id, count, holder, setTemplate) {
  axios.get(cms_baseurl + '/AXIOSSetSection/' + id, {}).then(function(response) {
    if (response.data.axioserror == 'NOSECTION') {
      response.data = 'NOSECTION'
      setTemplate(response.data, count, holder)
    } else {
      setTemplate(response.data, count, holder)
    }
  }).catch(function(error) {
    console.log(error)
  })
}

function AXIOSSetBlockTemplate(id, e, tokenid, setTemplate) {
  let id1 = id + "TOKENID" + tokenid
  axios.get(cms_baseurl + '/AXIOSSetBlockTemplate/' + id1, {}).then(function(response) {
    if (response.data.axioserror) {
      e.innerHTML = ''
    } else {
      e.innerHTML = response.data
      setTemplate(id, tokenid)
    }
  }).catch(function(error) {
    if (e) {
      e.innerHTML = ''
    }
  })
}

function AXIOSGetMenuTemplateEdit(id, e, v, setTemplate) {
  axios.get(cms_baseurl + '/AXIOSGetMenuTemplateEdit/' + id, {}).then(function(response) {
    if (response.data.axioserror) {
      e.innerHTML = ''
      v.innerHTML = ''
    } else {
      e.innerHTML = response.data.templatetext
      v.innerHTML = response.data.templatetext
      setTemplate()
    }
  }).catch(function(error) {
    console.log(error)
    if (e) {
      e.innerHTML = ''
    }
    if (v) {
      v.innerHTML = ''
    }
  })
}

function AXIOSGetBlockTemplateEdit(id, e, setTemplate) {
  axios.get(cms_baseurl + '/AXIOSGetBlockTemplateEdit/' + id, {}).then(function(response) {
    if (response.data.axioserror) {
      e.innerHTML = ''
    } else {
      e.innerHTML = response.data.templatetext
      setTemplate()
    }
  }).catch(function(error) {
    console.log(error)
    if (e) {
      e.innerHTML = ''
    }
  })
}

function AXIOSGetTranslate(baselocale, basetext, tolocales, stemid) {
  axios.get(cms_baseurl + '/AXIOSGetTranslate/', {
    params: {
      baselocale: baselocale,
      basetext: basetext,
      tolocales: tolocales,
      stemid: stemid
    }
  }).then(function(response) {
    if (response.data == "NOTRANSLATION") {} else {
      for (let i = 0; i < response.data.length; i++) {
        let localeval = response.data[i]
        //alert(JSON.stringify(localeval))
        let e = document.getElementById(localeval[0])
        if (e) {
          e.value = localeval[1]
        }
      }
    }
  }).catch(function(error) {
    console.log(error)
  })
}
