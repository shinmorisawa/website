<script lang="ts">
	import './layout.css';
    import { track } from '$lib/track.client';
	import favicon from '$lib/assets/favicon.ico';
	import Navbar from '$lib/components/Navbar.svelte';
    import { afterNavigate } from '$app/navigation';
    import { config } from "@fortawesome/fontawesome-svg-core";

	let { children } = $props();

    afterNavigate(() => {
        track();
    });

    export const prerendered = true;

    import '@fortawesome/fontawesome-svg-core/styles.css';
	import Clock from '$lib/components/Clock.svelte';
    config.autoAddCss = false
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
    <title>tryh4rd's site</title>
</svelte:head>

<Navbar />
<div class="flex-1 mx-[2rem] lg:mx-[12rem] sm:mx-[4rem] my-0 items-center justify-center">
    {@render children()}
</div>
<Clock />
