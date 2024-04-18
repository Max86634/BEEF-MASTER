const tl = gsap.timeline({ defaults: { duration: .45}});
const tl2 = gsap.timeline({ defaults: {duration: 1}});

tl2.from('.billboard-text', { opacity:0, y: -30})
tl2.from('.billboard-icon', { opacity: 0 , x: 300})
  tl.from('.t1', { opacity: 0 , y: 30})
  .from('.t2', { opacity: 0 , y: 30})
  // .from('.t3', { opacity: 0 , y: 30})
  // .from('.t4', { opacity: 0 , y: 30})
  .from('.t5', { opacity: 0 , y: 30})
  .from('.t6', { opacity: 0 , y: 30})
// tl.from('.showcase__header', {opacity: 0, y: 30});

let container = () =>{
  const contAnimate = gsap.timeline({ defaults: {duration: 1}, repeat: -1, repeatDelay: 1});

  tl2.from('.n1', { opacity: 0, y: -30});
  tl2.from('.n1', { opacity: 1, y: 30});
  tl2.from('.n2', { opacity: 0, y: -30});
  tl2.from('.n2',  { opacity: 1, y: 30});
  return contAnimate;
}

tl2.from('head-text', { opacity: 0, y: -30});
tl2.from('.main-text', { opacity: 0, y: 30});
tl2.add(container);













