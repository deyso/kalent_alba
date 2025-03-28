<script>
	export let id
	import blogPosts from '../store/blogContent'

	$: post = blogPosts[id]
</script>

{#if post}
	<div class="max-w-4xl mx-auto px-6 py-12 space-y-6">
		<h1 class="text-3xl font-bold text-green-800">{post.title}</h1>

		<p class="text-base text-gray-800 leading-relaxed">{post.content[0]}</p>

		<img src={post.img} alt={post.title} class="w-full rounded-lg my-6" />

		{#each post.content.slice(1) as paragraph}
			<p class="text-base text-gray-700 leading-relaxed">{paragraph}</p>
		{/each}
	</div>
{:else}
	<p class="text-center py-12 text-red-600">A keresett bejegyzés nem található.</p>
{/if}
