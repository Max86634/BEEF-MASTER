const tl = gsap.timeline({ defaults: { duration: 1.35}});
const tl2 = gsap.timeline({ defaults: {duration: .25}});

tl.from('.billboard-icon', { opacity: 0 , x: 300})
  tl2.from('.t1', { opacity: 0 , y: 30})
  .from('.t2', { opacity: 0 , y: 30})
  .from('.t3', { opacity: 0 , y: 30})
  .from('.t4', { opacity: 0 , y: 30})
  .from('.t5', { opacity: 0 , y: 30})
  .from('.t6', { opacity: 0 , y: 30})
tl.from('.billboard-text', { opacity:0, y: -30})
tl.from('.showcase__header', {opacity: 0, y: 30});

