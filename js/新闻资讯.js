var a = document.getElementById('down');
a.addEventListener('click', click_down);
function click_down() 
{
    window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth'
    });
}