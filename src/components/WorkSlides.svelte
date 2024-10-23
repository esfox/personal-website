<script lang="ts">
  import { Splide, SplideSlide } from '@splidejs/svelte-splide';
  import '@splidejs/svelte-splide/css';

  export let images: { link: string; alt: string }[] = [];
  export let intervalMs = 3000;

  let splideInstance: Splide;

  let isPaused = false;
  const togglePlaying = () => {
    const autoplay = splideInstance.splide.Components.Autoplay;
    if (isPaused) {
      autoplay.play();
    } else {
      autoplay.pause();
    }
    isPaused = !isPaused;
  };

  const prev = () => splideInstance.splide.go('-1');
  const next = () => splideInstance.splide.go('+1');
</script>

<Splide
  bind:this={splideInstance}
  class="slides"
  options={{
    pagination: false,
    type: 'loop',
    autoplay: true,
    interval: intervalMs,
    lazyLoad: true,
    arrows: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    gap: 16
  }}
>
  {#each images as image}
    <SplideSlide>
      <img src={image.link} alt={image.alt} />
    </SplideSlide>
  {/each}
</Splide>
<div class="controls">
  <button on:click={prev}>
    <i class="fa fa-arrow-left"></i>
  </button>
  <button on:click={togglePlaying}>
    {#if isPaused}
      <i class="fa fa-play"></i>
    {:else}
      <i class="fa fa-pause"></i>
    {/if}
  </button>
  <button on:click={next}>
    <i class="fa fa-arrow-right"></i>
  </button>
</div>

<style lang="scss">
  .controls {
    margin-top: 12px;

    button {
      width: 28px;
      height: 28px;
      cursor: pointer;
      background: var(--divider);
      color: var(--foreground);
      border: none;
      border-radius: 0;
    }
  }
</style>
