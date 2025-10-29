<script>
  const box = document.querySelector('.box');

  window.addEventListener('mousemove', (e) => {
    const px = (e.clientX / window.innerWidth)  * 40 - 20; // range: -20..+20
    const py = (e.clientY / window.innerHeight) * 40 - 20; // range: -20..+20
    box.style.setProperty('--posX', px + 'px');
    box.style.setProperty('--posY', py + 'px');
  }, { passive:true });
</script>
