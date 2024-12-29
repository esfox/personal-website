<script lang="ts">
  import { Splide, SplideSlide } from '@splidejs/svelte-splide';
  import '@splidejs/svelte-splide/css';
  import panzoom from 'panzoom';
  import { tick } from 'svelte';

  type ImageType = { src: string; alt: string };

  export let images: ImageType[] = [];
  export let intervalMs = 3000;

  let splideInstance: Splide;
  let enlargedImageDialog: HTMLDialogElement;
  let enlargedImageContainer: HTMLElement;

  let isPaused = false;
  let enlargedImage: ImageType | undefined;

  const slidesAutoplay = () => splideInstance.splide.Components.Autoplay;

  const enlargeImage = async (image: ImageType) => {
    enlargedImage = image;

    await tick();

    slidesAutoplay().pause();
    enlargedImageDialog.showModal();

    if (enlargedImageContainer) {
      panzoom(enlargedImageContainer, {
        bounds: true,
        boundsPadding: 0.5,
        minZoom: 1,
        maxZoom: 3,
      });
    }
  };

  const hideEnlargedImage = () => enlargedImageDialog.close();

  const onHideEnlargedImage = () => {
    slidesAutoplay().play();
    enlargedImage = undefined;
  };

  const togglePlaying = () => {
    const autoplay = slidesAutoplay();
    if (isPaused) {
      autoplay.play();
    } else {
      autoplay.pause();
    }
  };

  const prev = () => splideInstance.splide.go('-1');
  const next = () => splideInstance.splide.go('+1');
</script>

<Splide
  bind:this={splideInstance}
  class="slides"
  on:autoplayPlay={() => (isPaused = false)}
  on:autoplayPause={() => (isPaused = true)}
  options={{
    pagination: false,
    type: 'loop',
    autoplay: true,
    interval: intervalMs,
    lazyLoad: true,
    arrows: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    gap: 16,
  }}
>
  {#each images as image}
    <SplideSlide class="slide">
      <button class="slide" on:click={() => enlargeImage(image)}>
        <img src={image.src} alt={image.alt} />
      </button>
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

{#if enlargedImage}
  <dialog bind:this={enlargedImageDialog} on:close={onHideEnlargedImage}>
    <button class="close" on:click={hideEnlargedImage}>
      <i class="fa fa-close"></i>
    </button>

    <div bind:this={enlargedImageContainer} class="enlarged-image-bounds">
      <img src={enlargedImage.src} alt={enlargedImage.alt} />
    </div>
  </dialog>
{/if}

<style lang="scss">
  .slide {
    background: none;
    border: none;
    cursor: pointer;
  }

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

  dialog {
    position: fixed;
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
    display: grid;
    place-items: center;
    padding: 0;
    border: none;
    background: none;
    overflow: hidden;

    &::backdrop {
      background: #000000;
      opacity: 0.6;
    }

    .close {
      position: fixed;
      top: 0;
      right: 0;
      margin: 28px;
      width: 36px;
      height: 36px;
      font-size: 24px;
      display: grid;
      place-items: center;
      background: var(--divider);
      color: var(--foreground);
      border: none;
      border-radius: none;
      z-index: 10;
    }

    .enlarged-image-bounds {
      width: 85%;
      height: 85%;
      cursor: grab;
      display: grid;
      place-items: center;
      z-index: 1;
    }
  }
</style>
