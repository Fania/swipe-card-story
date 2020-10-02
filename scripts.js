const polas = document.querySelectorAll("[id^='polaroid']");

const nextId = (c, d) => {
  let n = 0;
  switch(c) {
    case 1: n=2; break;
    case 2: d=="left" ? n=3 : n=4; break;
    case 3: d=="left" ? n=5 : n=6; break;
    case 4: d=="left" ? n=7 : n=8; break;
    case 5: n=3; break;
    case 6: d=="left" ? n=7 : n=2; break;
    case 7: n=8; break;
    case 8: n=1; break;
    default: n = 1;
  }
  return n;
}


const move = (ev, dir) => {
  let cId = "";
  if(ev.target.id) {
    cId = ev.target.id;
  } else {
    cId = ev.srcEvent.path[1].id;
  }
  const c = parseInt(cId[8]);
  const nId = `polaroid${nextId(c, dir)}`;
  const currentElem = document.getElementById(cId);
  const nextElem = document.getElementById(nId);
  nextElem.classList.value = "";
  currentElem.classList.add("rotate-" + dir);
  nextElem.classList.add("show");
}


for (let i=0; i < polas.length; i++) {
  const mc = new Hammer(polas[i]);
  const cap = document.querySelector(`figure#${polas[i].id} figcaption`);
  mc.get('swipe').set({ enable: true, direction: Hammer.DIRECTION_ALL });

  mc.on("swipeleft",  (ev) => { move(ev, "left");  });
  mc.on("swiperight", (ev) => { move(ev, "right"); });
  mc.on("swipeup",    (ev) => { move(ev, "up");    });
  mc.on("swipedown",  (ev) => { move(ev, "down");  });

  // let pinch = new Hammer.Pinch();
  // mc.add([pinch]);
  // mc.on("pinchin", (ev) => {
  //   next(ev, "in"); console.log("pinchin");
  // });
  // mc.on("pinchout", (ev) => {
  //   next(ev, "out"); console.log("pinchout");
  // });

}