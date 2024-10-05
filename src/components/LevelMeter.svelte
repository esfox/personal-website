<script lang="ts">
  export let level = 0;
</script>

<div class="level-meter">
  {#each Array(level) as _}
    <div class="bar"></div>
  {/each}
</div>

<style lang="scss">
  .level-meter {
    display: flex;
    gap: 2px;
    margin-bottom: var(--margin-bottom);

    .bar {
      width: 36px;
      height: 20px;
      background: var(--yellow);
    }
  }
</style>
