<script lang="ts">
    import SocialCard from "$lib/components/SocialCard.svelte";
    let { items } = $props();
</script>

<div class="flex flex-col gap-[1vh] mr-auto">
    {#each items as item}
        <SocialCard img={item.img} link={item.link} text={item.text} paragraph={item.paragraph} age={item.age} />
    {/each}
</div>
