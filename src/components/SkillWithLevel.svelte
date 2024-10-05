<script>
  import LevelMeter from './LevelMeter.svelte';

  export let skill = '';
  export let level = 0;
</script>

<div class="skill-with-level">
  <div class="icon">
    <slot name="icon" />
  </div>
  <h4>{skill}</h4>
  <LevelMeter {level} />
</div>

<style lang="scss">
  .skill-with-level {
    display: grid;
    grid-template-columns: 58px 104px 1fr;
    align-items: center;

    :global(.level-meter) {
      align-self: center;
    }
  }
</style>
