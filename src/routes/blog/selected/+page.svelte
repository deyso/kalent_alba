<script>
	import TabDescriber from '../../components/TabDescriber.svelte'
	import blogPosts from '../../store/blogContent'
	import BlogPost from '../../components/BlogPost.svelte'
	import { page } from '$app/stores'

	let id
	let post

	$: id = $page.url.searchParams.get('id')
	$: post = blogPosts[id]
	console.log(post, id)
</script>

<TabDescriber contentText={`Blog / ${post.title}`} />
<BlogPost {id} />
