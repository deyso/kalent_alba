<script>
	import TabDescriber from '../components/TabDescriber.svelte'
	import pic1 from '$lib/pic1.jpg'
	import pic2 from '$lib/pic2.jpg'
	import pic3 from '$lib/pic3.jpg'
	import pic4 from '$lib/pic4.jpg'
	import pic5 from '$lib/pic5.jpg'
	import pic6 from '$lib/pic6.jpg'
	import pic7 from '$lib/pic7.jpg'
	import pic8 from '$lib/pic8.jpg'
	import pic9 from '$lib/pic9.jpg'
	import workingManImg from '$lib/working_man.jpg'
	import { onMount,onDestroy } from 'svelte'

	const images = [
		{ name: 'pic1', src: pic1 },
		{ name: 'pic2', src: pic2 },
		{ name: 'pic3', src: pic3 },
		{ name: 'pic4', src: pic4 },
		{ name: 'pic5', src: pic5 },
		{ name: 'pic6', src: pic6 },
		{ name: 'pic7', src: pic7 },
		{ name: 'pic8', src: pic8 },
		{ name: 'pic9', src: pic9 }
	]

	let testimonials = [
		{ content: 'Nagyon profi csapat, gyors és precíz munkavégzés!', name: 'Kiss Péter' },
		{ content: 'Kiváló minőség, kedves kiszolgálás, ajánlom őket!', name: 'Nagy Zsófia' },
		{ content: 'Pontosan azt kaptuk, amit megálmodtunk. Csak ajánlani tudom!', name: 'Szabó Gábor' }
	]

	let current = 0
	let interval

	const next = () => (current = (current + 1) % testimonials.length)
	const prev = () => (current = (current - 1 + testimonials.length) % testimonials.length)

	onMount(() => {
		interval = setInterval(next, 5000)
	})

	onDestroy(() => clearInterval(interval))
</script>

<TabDescriber contentText="Büszkeségfal" />
<div class="w-full bg-white text-black py-12 px-6 lg:px-24 flex flex-col gap-12">
	<div>
		<h2 class="text-green-800 font-bold text-3xl lg:text-4xl">Lapszabászat</h2>
	</div>

	<div class="flex flex-col lg:flex-row gap-12">
		<div class="lg:w-1/2 space-y-6">
			<p class="text-base sm:text-lg md:text-xl leading-relaxed">
				Csapatunk precíz munkájának köszönhetően minden egyes beérkezett kérést pontosan és gondosan tudunk teljesíteni. Büszkeséggel tölt el minket, amikor ügyfeleink elégedetten pillantanak az
				elkészült művekre.
			</p>
		</div>
		<div class="lg:w-1/2 space-y-6">
			<p class="text-base sm:text-lg md:text-xl leading-relaxed">
				Nemcsak azért készítünk munkáinkról fényképeket, hogy megörökítsük azokat, hanem azért is, hogy később is gyönyörködhessünk bennük és emlékeztessenek minket az elért sikereinkre.
			</p>
			<p class="text-base text-green-800 sm:text-lg md:text-xl leading-relaxed">
				Ismerje meg néhány referencia munkánkat, amelyek tükrözik elkötelezettségünket a magas minőség és az ügyfelek elégedettsége iránt.
			</p>
		</div>
	</div>
</div>
<div class="w-full bg-white py-12 px-6 lg:px-20">
	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
		{#each images as { name, src }}
			<img {src} alt={name} class="w-full h-auto object-cover rounded-xl shadow-md" />
		{/each}
	</div>
</div>

<!-- Background -->
<div class="relative w-full bg-cover bg-[center_80%] overflow-hidden" style={`background-image: url('${workingManImg}')`}>
	<div class="absolute inset-0 bg-[#3d7140]/90 z-10"></div>

	<!-- Content -->
	<div class="relative z-20 px-6 py-16 lg:px-24 flex flex-col lg:flex-row gap-12 text-white">
		<!-- Left -->
		<div class="lg:w-1/2 space-y-6">
			<h2 class="text-3xl sm:text-4xl font-bold">Rólunk mondták</h2>
			<p class="font-semibold text-lg sm:text-xl">Ügyfeleink elégedettsége a legjobb ajánlás számunkra.</p>
			<p>
				Büszkék vagyunk arra, hogy olyan partnerekkel és ügyfelekkel dolgozhatunk együtt, akik értékelik a magyar szakértelmet, a precizitást és a családi vállalkozásunkban rejlő elkötelezettséget.
			</p>
			<p class="font-semibold">Olvassa el, mit mondanak rólunk azok, akik már minket választottak!</p>
		</div>

		<!-- Right: Carousel -->
		<div class="lg:w-1/2 relative overflow-hidden h-[200px]">
			<!-- Slider Track -->
			<div class="flex transition-transform duration-500 ease-in-out" style={`transform: translateX(-${current * 100}%);`}>
				{#each testimonials as t (t.name)}
					<div class="min-w-full px-4">
						<p class="text-xl sm:text-2xl font-light italic leading-relaxed">
							“{t.content}”
						</p>
						<p class="text-green-300 font-semibold pt-2">— {t.name}</p>
					</div>
				{/each}
			</div>

			<!-- Arrows -->
			<div class="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-6 mt-6">
				<button on:click={prev} class="btn btn-circle btn-sm bg-white text-green-800 hover:bg-green-200">❮</button>
				<button on:click={next} class="btn btn-circle btn-sm bg-white text-green-800 hover:bg-green-200">❯</button>
			</div>
		</div>
	</div>
</div>
