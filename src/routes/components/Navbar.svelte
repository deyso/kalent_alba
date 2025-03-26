<script>
	import logo from '$lib/logo.png'

	let isMobileMenuOpen = false

	const navbarItems = [
		{ name: 'RÓLUNK', href: '/' },
		{ name: 'MIVEL FOGLALKOZUNK', href: '/about' },
		{ name: 'BÜSZKESÉGFAL', href: '/buszkesegfal' },
		{ name: 'BLOG', href: '/blog' },
		{ name: 'KAPCSOLAT', href: '/kapcsolat' }
	]

	const currentPath = '/about' // You can get this dynamically from a router too
</script>

<!-- NAVBAR -->
<div class="navbar bg-white shadow-sm px-2 md:px-4 lg:px-12 xl:px-16 2xl:px-24 relative z-50">
	<div class="flex-1">
		<a href="/" class="flex items-center gap-2">
			<img src={logo} alt="Logo" class="h-18 md:h-24 lg:h-34 xl:h-38 2xl:h-42 w-auto" />
		</a>
	</div>

	<!-- Hamburger (mobile only) -->
	<div class="flex-none md:hidden">
		<button on:click={() => (isMobileMenuOpen = !isMobileMenuOpen)} class="p-2 focus:outline-none focus:ring-0 active:bg-transparent hover:bg-transparent">
			{#if isMobileMenuOpen}
				<!-- X icon -->
				<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
				</svg>
			{:else}
				<!-- Hamburger icon -->
				<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
				</svg>
			{/if}
		</button>
	</div>

	<!-- Desktop Menu -->
	<div class="hidden md:flex">
		<ul class="menu menu-horizontal px-1">
			{#each navbarItems as item}
				<li>
					<a href={item.href} class="md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl font-semibold text-black hover:font-bold transition-all duration-200">
						{item.name}
					</a>
				</li>
			{/each}
		</ul>
	</div>
</div>

<!-- FULLSCREEN MOBILE MENU -->
{#if isMobileMenuOpen}
	<div class="md:hidden bg-green-700 text-white w-full shadow-md">
		{#each navbarItems as item}
			<a
				href={item.href}
				on:click={() => (isMobileMenuOpen = false)}
				class={`block px-6 py-4 text-base font-bold border-b border-white ${item.href === currentPath ? 'bg-red-600' : 'hover:bg-green-800'}`}
			>
				{item.name}
			</a>
		{/each}
	</div>
{/if}
