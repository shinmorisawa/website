<script lang="ts">
    let { img, link, text, paragraph, age } = $props<{
        img: string;
        link: string;
        text: string;
        paragraph?: string;
        age?: number;
    }>();
</script>

<div class="flex flex-row">
    <div class="w-[96px] h-[96px] overflow-hidden shrink-0 grow-0 basis-[96px] rounded-[15%]">
        <img src={img} alt={text} class="text-zinc-800 dark:text-zinc-100">
    </div>
    <div class="mr-auto ml-[20px] my-auto">
        <h2 class="link text-4xl font-extrabold">
            <a href={link}>
                {text}
            </a>
        </h2>
        <p class="paragraph">
            {#if paragraph}
                {paragraph}
            {:else if age !== undefined}
                i'm {age} it's unlikely i'm a pedo
            {/if}
        </p>
    </div>
</div>
