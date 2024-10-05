<script>
  export let skill = '';
  export let level = 0;
</script>

<div class="skill-with-level">
  <div class="lang">
    <div class="icon">
      <slot name="icon" />
    </div>
    <h4>{skill}</h4>
  </div>
  <div class="level-meter">
    {#each Array(level) as _}
      <div class="bar"></div>
    {/each}
  </div>
</div>

<style lang="scss">
  .skill-with-level {
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 160px 1fr;
    align-items: center;

    .lang {
      display: flex;
      align-items: center;
      gap: 16px;

      .icon {
        width: 36px;
        font-size: 36px;
      }
    }

    .level-meter {
      display: flex;
      gap: 2px;
      margin-bottom: var(--margin-bottom);

      .bar {
        width: 32px;
        height: 18px;
        background: var(--yellow);
      }
    }
  }

  @media (max-width: 480px) {
    .skill-with-level {
      grid-template-columns: 120px 1fr;
      // grid-template-rows: auto auto;
      gap: 8px;

      .lang {
        gap: 10px;
        .icon {
          width: 26px;
          font-size: 26px;
        }
      }

      .level-meter .bar {
        width: 16px;
        height: 12px;
      }
    }
  }
</style>
