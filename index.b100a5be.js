window.battleAnimation={async spin(t,a){const e=t.caster.pizzaElement,i="player"===t.caster.team?"spin-move-attack-right":"spin-move-attack-left";e.classList.add(i),e.addEventListener("animationend",(()=>{e.classList.remove(i)}),{once:!0}),await utils.wait(100),a()}};
//# sourceMappingURL=index.b100a5be.js.map
