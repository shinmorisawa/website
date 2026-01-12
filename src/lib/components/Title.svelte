<script lang="ts">
    let { text } = $props();
</script>

<div class="flex md:flex-row sm:flex-col flex-col items-center justify-between my-[1rem]">
    <div>
        <h1 class="xl:text-9xl/1 md:text-6xl/1 sm:text-8xl/1 text-6xl/1 font-thin dark:font-black lg:mr-[4rem] md:mr-[2rem]">{text}<span class="cursor">|</span></h1>
    </div>
</div>
