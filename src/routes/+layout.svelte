<script>
	import '../app.css'
	import Footer from './components/Footer.svelte'
	import Navbar from './components/Navbar.svelte'
	import TabDescriber from './components/TabDescriber.svelte'
</script>

<Navbar />
<main class="min-h-[calc(100vh-160px)]">
	<slot />
</main>
<Footer />

<!-- <TabDescriber contentText="Rólunk" />
<Footer /> -->
