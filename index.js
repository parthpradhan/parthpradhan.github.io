// mobile menu
const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');

burgerIcon.addEventListener('click', () => {
  navbarMenu.classList.toggle('is-active');
});

// tabs
const tabs = document.querySelectorAll('.tabs li');
const tabContentBoxes = document.querySelectorAll('#tab-content > div');
const headColor = document.querySelector('#head');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(item => item.classList.remove('is-active'));
    tab.classList.add('is-active');

    const target = tab.dataset.target;
    tabContentBoxes.forEach(box => {
      if (box.getAttribute('id') === target) {
        if(box.getAttribute('id') === "worldxtime")
        {
          headColor.classList.remove('is-black','is-primary','is-light');
          headColor.classList.add('is-success');
        }
        if(box.getAttribute('id') === "fps")
        {
          headColor.classList.remove('is-success','is-primary','is-light');
          headColor.classList.add('is-black');
        }
        if(box.getAttribute('id') === "spamy")
        {
          headColor.classList.remove('is-black','is-primary','is-success');
          headColor.classList.add('is-light');
        }
        if(box.getAttribute('id') === "autodraw")
        {
          headColor.classList.remove('is-primary','is-success','is-light');
          headColor.classList.add('is-primary');
        }
        
        box.classList.remove('is-hidden');
      } else {
        box.classList.add('is-hidden');
      }
    })
  })
})
