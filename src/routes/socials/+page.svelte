<script lang="ts">
    import Title from "$lib/components/Title.svelte";
    import SocialList from "$lib/components/SocialList.svelte";

    const start = new Date('2012-08-14');
    const today = new Date();
    let age = today.getFullYear() - start.getFullYear();
    if (today.getMonth() < start.getMonth() || (today.getMonth() === start.getMonth() && today.getDate() < start.getDate())) {
        age -= 1
    }
</script>

<Title text="my socials." />
<SocialList items={[
    { img: "https://static.tryh4rd.dev/socials/osu.png", link: "https://osu.ppy.sh/users/30204396", text: "osu!", paragraph: "yes i click circles for fun" },
    { img: "https://static.tryh4rd.dev/socials/github.png", link: "https://github.com/shinmorisawa", text: "github", paragraph: "yes i code at 3 am" },
    { img: "https://static.tryh4rd.dev/socials/roblox.avif", link: "https://www.roblox.com/users/851130807/profile", text: "roblox", age: age },
    { img: "https://static.tryh4rd.dev/socials/envelope.avif", link: "mailto:me@tryh4rd.dev", text: "email", paragraph: "email me or just don't because i never check email and i have like 50,000 unread emails" }
]} />
