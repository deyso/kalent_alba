<script>
	import '../../style.css'
	import logo from '$lib/logo.png'

	let navItems = [
		{ name: 'Rólunk', href: '/' },
		{ name: 'Mivel foglalkozunk', href: '/about' },
		{ name: 'Büszkeségfal', href: '/about' },
		{ name: 'Blog', href: '/about' },
		{ name: 'Kapcsolat', href: '/about' }
	]
</script>

<nav class="menubar">
	<div class="logo">
		<img src={logo} alt="Logo" class="logo" />
	</div>
	<div class="menu">
		{#each navItems as item}
			<a href={item.href} class="menu-item">
				{item.name}
			</a>
		{/each}
	</div>
</nav>

<style>
	.menubar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 100px;
		height: 150px;
		font-size: 1.5rem;
	}

	.menu-item {
		text-decoration: none;
	}
	.logo {
		width: 250px;
		height: auto;
	}
</style>
