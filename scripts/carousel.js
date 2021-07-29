const back = document.querySelector('#back');
const forward = document.querySelector('#forward');
const banners = document.querySelector('#banners');
const banner = document.querySelectorAll('.banner');
let count = 0

forward.addEventListener('click', (event) => {
  count+=300;
  banners.scrollBy(300, 0);
  if (count > 300 * (banner.length -1)) {
    for(var i=0; i<banner.length; i++) {
      banners.scrollBy(-300, 0)
    }
  count = 0;
  }

  console.log(count);
})

back.addEventListener('click', (event) => {
  count-=300;
  banners.scrollBy(-300, 0)
  if (count < 0) {
    count = 300 * (banner.length -1);
    for(var i=0; i<banner.length; i++) {
      banners.scrollBy(300, 0)
    }
  }

  console.log(count);
})
