export function howToPlayContent(): string {
  return `<div class="guide-intro">
    <p>Ride Mavericks to the end of the wave. Then choose any of the six breaks in Freeplay.</p>
    <span>DESKTOP KEYBOARD</span>
  </div>
  <div class="guide-grid">
    <article class="guide-card"><div class="guide-card__top"><span>01 / CARVE</span><kbd>A</kbd><kbd>D</kbd><kbd>W</kbd><kbd>S</kbd></div><h2>Find the line</h2><p>Hold A or D to lean into a turn. Tuck with W to build speed, or brake with S for a tighter turn.</p></article>
    <article class="guide-card"><div class="guide-card__top"><span>02 / LAUNCH</span><kbd>SPACE</kbd></div><h2>Charge the jump</h2><p>Hold Space, then release to take off — launch near the lip for more height</p></article>
    <article class="guide-card"><div class="guide-card__top"><span>03 / AIR TRICKS</span><kbd>E</kbd><kbd>←</kbd><kbd>→</kbd></div><h2>Grab a rail</h2><p>Hold E in the air. Start with A for the left rail or D for the right. Release E to let go. A/D also spin, W/S flip after takeoff, and ←/→ roll the board.</p></article>
    <article class="guide-card"><div class="guide-card__top"><span>04 / BARREL</span><kbd>A</kbd><kbd>D</kbd><kbd>S</kbd></div><h2>Loop the barrel</h2><p>At Mavericks, hold A into the curl and keep holding to loop. D reverses you on the wall. Hold S to park there, or release the keys to settle. From the floor, D carves out.</p></article>
  </div>
  <div class="guide-bottom"><div><span>RUNNING SCORE</span><p>Speed, time in the barrel, and airborne grabs raise your points per second. Land in line with the wave to bank your tricks into the counter.</p></div><div><span>KEEP THE RUN MOVING</span><p>Escape pauses or resumes. After a run, press R to surf the same break again.</p></div></div>`;
}

export function creditsContent(): string {
  return `<div class="credits-lead"><p>Built together, from the first wave to the final landing</p><span>AN ORIGINAL ARCADE SURF ADVENTURE</span></div>
    <div class="credits-grid">
      <div class="credit-card"><span>01 / GAMEPLAY &amp; SYSTEMS</span><h2>Teddy Kindler</h2><p>Surfing engine, wave and barrel systems, penguin and ice board, Mavericks environment, scoring and progression</p></div>
      <div class="credit-card"><span>02 / WORLD &amp; INTERFACE</span><h2>Anika Kumar</h2><p>Interface, location previews, Pipeline environment and upcoming trick and landing controls</p></div>
    </div>
    <p class="credits-note">The current interface illustrations and 3D scenery are original project assets<br>BarrelRoll takes inspiration from the spirit of arcade sports games while building its own world</p>`;
}
