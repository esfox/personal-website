<script lang="ts">
  import WorkSlides from './WorkSlides.svelte';
</script>

<section class="indent-after-prompt" style="margin-top: -16px;">
  <h1>Works I've Done</h1>

  <ul class="works">
    <li>
      <h3>This Website</h3>
      <a href="https://github.com/esfox/esfox.github.io" target="_blank"> See code on GitHub </a>
    </li>
    <li>
      <h3>Orders Management System</h3>
      <h4>For a custom apparel store for seafarers</h4>
      <div class="slides-container">
        <WorkSlides
          images={[
            {
              link: 'azimuth_admin.png',
              alt: 'Azimuth Admin Screenshot'
            },
            {
              link: 'azimuth_orders.png',
              alt: 'Azimuth Orders Screenshot'
            },
            {
              link: 'azimuth_order_form.png',
              alt: 'Azimuth Order Form Screenshot'
            }
          ]}
        />
      </div>
    </li>

    <li>
      <h3>Personal Tax Calculation Web App</h3>
      <a href="https://github.com/esfox/taxculator" target="_blank"> See code on GitHub </a>
      <div class="taxculator slides-container">
        <WorkSlides
          images={[
            {
              link: 'taxculator_main.png',
              alt: 'Taxculator Main Page Screenshot'
            },
            {
              link: 'taxculator_salaries.png',
              alt: 'Taxculator Salaries Page Screenshot'
            }
          ]}
        />
      </div>
    </li>
  </ul>
</section>

<style lang="scss">
  .works {
    display: grid;
    gap: 24px;
    margin-top: 16px;
    padding-bottom: 24px;
    padding-inline-start: 0;
    padding-inline-end: 28px;
  }

  .slides-container {
    margin-top: 12px;
    display: grid;
    place-items: center;
  }

  .taxculator {
    width: 300px;
    margin: auto;
  }
</style>
