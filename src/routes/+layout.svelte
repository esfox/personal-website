<script lang="ts">
  import '../styles/reset.css';
  import '@fortawesome/fontawesome-free/css/all.min.css';
  import '../styles/main.css';
</script>

<img src="kubuntu-wallpaper.jpg" class="wallpaper" alt="background wallpaper" />
<div class="main-wrapper">
  <main class="main">
    <div class="titlebar">
      <img src="alacritty.svg" alt="Alacritty" />
      <p>Alacritty</p>
      <div class="icons">
        <img src="minimize.svg" alt="minimize" />
        <img src="maximize.svg" alt="maximize" />
        <img src="close.svg" alt="close" />
      </div>
    </div>
    <div class="content">
      <slot />
    </div>
  </main>
</div>

<style lang="scss">
  :global(body) {
    background: #0d0d0d;
  }

  .main-wrapper {
    display: grid;
    height: 100%;
    overflow: hidden;
  }

  .titlebar {
    display: none;
  }

  .main {
    background: var(--background);
    overflow-y: auto;
    z-index: 1;
  }

  .wallpaper {
    display: none;
  }

  @media (min-width: 961px) {
    .main-wrapper {
      padding-block: 16px;
    }

    .main {
      width: 960px;
      position: relative;
      background: var(--background);
      margin-inline: auto;
      box-shadow: 0px 2px 30px #202020;
      border-radius: 6px;
      overflow: hidden;

      .titlebar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #31363a;
        height: 28px;
        padding-inline: 5px;

        p {
          font-family: sans-serif;
          font-size: 13px;
          letter-spacing: 0.5px;
        }

        .icons {
          display: flex;
          gap: 4px;
        }
        img {
          width: 20px;
        }
      }

      .content {
        height: 100%;
        overflow-y: auto;

        &::-webkit-scrollbar {
          display: none;
          scrollbar-width: none;
        }
      }
    }

    .wallpaper {
      display: block;
      position: fixed;
      z-index: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
</style>
