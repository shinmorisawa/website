<script lang="ts">
	import Link from "$lib/components/Link.svelte";
	import List from "$lib/components/List.svelte";
	import Subtitle from "$lib/components/Subtitle.svelte";
	import Title from "$lib/components/Title.svelte";
	import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
    import { faHandPeace } from "@fortawesome/free-solid-svg-icons";

    const hours = new Date().getHours();
    let greeting = hours < 11 ? "good morning." : hours < 18 ? "good afternoon." : "good evening.";


</script>

<Title text={greeting} />
<Subtitle text="what i like" />
<List items={[
    "games",
    "programming",
    "making terrible projects that i will forever abandon into ~/projects"
]} />
<Link link="/linux" text="i <3 linux" />
<Link link="/rants" text="where i rant" />

