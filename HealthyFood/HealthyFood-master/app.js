const menu = document.getElementById('menu');
const scrollTop = 500;
window.addEventListener('scroll', function (event)
{
    let scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled > scrollTop) {
        menu.classList.add('menu_fixed');
        menu.style.top = Math.min(-scrollTop + scrolled - 150, 0) + 'px';
    } else {
        menu.classList.remove('menu_fixed');
        menu.style.top = 0 + 'px';
    }
});

// menu
const menuBtn = document.querySelector('.bur-image')
const crestic = document.querySelector('.crestic')
const mobile = document.querySelector('.mobile')
const links = document.querySelectorAll('.links')
menuBtn.onclick = () =>
{
    menuBtn.style.display = 'none'
    crestic.style.display = 'block'
    mobile.style.display = 'flex'
    document.body.style.overflow = 'hidden'
}
crestic.onclick = () =>
{
    menuBtn.style.display = 'block'
    crestic.style.display = 'none'
    mobile.style.display = 'none'
    document.body.style.overflow = ''
}
for (let i = 0; i < links.length; i++) {
    links[i].onclick = () =>
    {
        menuBtn.style.display = 'block'
        crestic.style.display = 'none'
        mobile.style.display = 'none'
        document.body.style.overflow = ''
    }
}
// music
const musicBtn = document.querySelector('.musicBtn')
const audio = document.querySelector('#music')
let a = false
musicBtn.onclick = (e) =>
{
    e.preventDefault();
    a = !a
    a ? audio.play() : audio.pause()
}