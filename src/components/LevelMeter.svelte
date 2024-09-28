<script lang="ts">
  export let level = 0;

  const colors = [
    '#0000FF',
    '#0055FF',
    '#00AAFF',
    '#00FFFF',
    '#55FF55',
    '#FFFF00',
    '#FFAA00',
    '#FF5500',
    '#FF0000',
    '#AA0000'
  ];
</script>

<div class="level-meter">
  {#each Array(level) as _, i}
    <div class="bar" style="background: {colors[i]};"></div>
  {/each}
</div>

<style lang="scss">
  .level-meter {
    display: flex;
    flex-direction: column-reverse;
    gap: 4px;
    margin-bottom: var(--margin-bottom);

    .bar {
      width: 36px;
      height: 12px;
      background: white;
    }
  }
</style>
