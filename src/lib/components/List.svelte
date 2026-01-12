<script lang="ts">
    let { items } = $props();
</script>

<ul class="flex flex-col gap-[0.25rem] mb-[1rem]">
    {#each items as item}
        <li>- {item}</li>
    {/each}
</ul>
