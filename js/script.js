document.addEventListener('mousemove', function (e) {
    const ripple = document.createElement('div');
    ripple.classList.add('mouse-effect');
    ripple.style.left = `${e.pageX}px`;
    ripple.style.top = `${e.pageY}px`;
    document.body.appendChild(ripple);

    setTimeout(() => {
        ripple.remove();
    }, 900);
});