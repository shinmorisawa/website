<script lang="ts">
	import SocialList from "$lib/components/SocialList.svelte";
	import Title from "$lib/components/Title.svelte";

</script>

<Title text="my projects." />
<SocialList items={[
    { img: "https://static.tryh4rd.dev/projects/tinylytics.png", text: "tinylytics", link: "https://github.com/shinmorisawa/tinylytics", paragraph: "a no-bullshit web analytics c binary using sqlite and libmicrohttpd" }
]} />
