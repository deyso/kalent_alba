<script>
	import logo from '$lib/logo.png'
	import { goto } from '$app/navigation'
	import { page } from '$app/stores'
	import { clickOutside } from '$lib/clickOutside.js'
	import api from '../store/api'

	const navbarItems = [
		{ name: 'RÓLUNK', href: `${api}/about` },
		{ name: 'MIVEL FOGLALKOZUNK', href: `${api}/work` },
		{ name: 'BÜSZKESÉGFAL', href: `${api}/our-pride` },
		{ name: 'BLOG', href: `${api}/blog` },
		{ name: 'KAPCSOLAT', href: `${api}/connections` }
	]

	let currentPath
	$: currentPath = `/${$page.url.pathname.split('/')[1]}`

	let isMobileMenuOpen = false
	let navbarRef
	let toggleButtonRef
</script>

<!-- NAVBAR -->
<div
	class="navbar bg-white shadow-sm px-2 md:px-2 lg:px-10 xl:px-14 2xl:px-24 relative z-50"
	bind:this={navbarRef}
	use:clickOutside={{ callback: () => (isMobileMenuOpen = false), exclude: [toggleButtonRef] }}
>
	<div class="flex-1">
		<a href={`${api}/main`} class="flex items-center gap-2">
			<img src={logo} alt="Logo" class="h-18 md:h-18 lg:h-28 xl:h-38 2xl:h-42 w-auto" />
		</a>
	</div>

	<!-- Hamburger (mobile only) -->
	<div class="flex-none md:hidden">
		<button bind:this={toggleButtonRef} on:click={() => (isMobileMenuOpen = !isMobileMenuOpen)} class="p-2 focus:outline-none focus:ring-0 active:bg-transparent hover:bg-transparent">
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
					<button
						on:click={() => {
							goto(item.href)
							isMobileMenuOpen = false
						}}
						class={`m-0 p-0 md:text-xs lg:text-base xl:text-xl 2xl:text-2xl font-semibold text-green-800 py-4 px-6 border-b border-white w-full text-left transition-all duration-200`}
					>
						{item.name}
					</button>
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
