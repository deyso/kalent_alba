<script>
	import darkLogo from '$lib/dark_logo.png'
	import icons from '$lib/icons'
	import { page } from '$app/stores'

	const companyDetails = [
		{ icon: icons.location, text: '8000 Székesfehérvár, Kereszttöltés u. 4358/5.' },
		{ icon: icons.phone, text: 'Számlázás, pénzügy: +36 30 682 8880' },
		{ icon: icons.phone, text: 'Felmérés, árajánlat: +36 30 226 3443' },
		{ icon: icons.email, text: 'info@kalent-alba.hu' }
	]
	import EnsureWithUs from './EnsureWithUs.svelte'
	$: currentPath = `/${$page.url.pathname.split('/')[1]}`
</script>

<footer class="w-full text-white font-sans m-0 p-0">
	<!-- Top Section -->
	{#if !currentPath.includes('main')}
		<EnsureWithUs />
	{/if}
	<!-- Middle Section -->
	<div class="bg-[#1f1f1f] flex flex-col md:flex-row justify-center items-center w-full px-4 py-5 gap-10">
		<!-- Logo container -->
		<a href="/" class="flex items-center gap-2">
			<img src={darkLogo} alt="Logo" class="h-28 md:h-28 lg:h-34 xl:h-38 2xl:h-42 w-auto" />
		</a>

		<!-- Contact Info -->
		<ul class="list-none leading-relaxed text-sm sm:text-base md:text-lg space-y-2">
			{#each companyDetails as item}
				<li class="flex items-start gap-2">
					<img src={item.icon} alt="kalent-logo" class="w-5 h-5 mt-1 [filter:brightness(0)_saturate(100%)_invert(43%)_sepia(17%)_saturate(2757%)_hue-rotate(60deg)_brightness(104%)_contrast(80%)]" />
					<span>{item.text}</span>
				</li>
			{/each}
		</ul>
	</div>

	<!-- Bottom Section -->
	<div class="bg-[#161616] text-center text-xs sm:text-sm md:text-base lg:text-lg text-[#aaa] py-4">
		<small>©2025. Kalent Alba Kft. – Powered by InnoBro kft. – Minden jog fenntartva!</small>
	</div>
</footer>
