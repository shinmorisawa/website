<script lang="ts">
    import { onMount, onDestroy } from "svelte";
    let angle = 0;
    let minangle = 0;
    let hrangle = 0;

    let now = new Date();
    let timer: number;

    onMount(() => {
        timer = setInterval(() => {
            now = new Date();
            let seconds = now.getSeconds() + now.getMilliseconds() / 1000;
            let minutes = now.getMinutes() + seconds / 60;
            let hours = (now.getHours() % 12) + minutes / 60;
            angle = seconds * 6;
            minangle = minutes * 6;
            hrangle = hours * 30;
        }, 10);
    });

    onDestroy(() => {
        clearInterval(timer);
    });
</script>

<div class="w-25 h-25 fixed bottom-25 left-25 origin-bottom-left">
    <div class="z-30 w-30 h-[0.1rem] bg-orange-500 dark:bg-orange-300 absolute top-[50%] left-[50%] origin-left rounded-full" style="transform: rotate(calc({angle}deg - 90deg));" />
    <div class="z-20 w-25 h-[0.2rem] bg-zinc-800 dark:bg-zinc-100 absolute top-[50%] left-[50%] origin-left rounded-full" style="transform: rotate(calc({minangle}deg - 90deg));" />
    <div class="z-10 w-20 h-[0.2rem] bg-zinc-800 dark:bg-zinc-100 absolute top-[50%] left-[50%] origin-left rounded-full" style="transform: rotate(calc({hrangle}deg - 90deg));" />
    <div class="z-50 w-5 h-5 bg-zinc-100 dark:bg-zinc-900 absolute top-[50%] left-[50%] rounded-full" style="transform: translate(-50%, -50%);"/>
    <div class="z-60 w-2.5 h-2.5 bg-zinc-800 dark:bg-zinc-100 absolute top-[50%] left-[50%] rounded-full" style="transform: translate(-50%, -50%);"/>
</div>
