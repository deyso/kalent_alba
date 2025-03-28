<script>
	import TabDescriber from '../components/TabDescriber.svelte'
	import { goto } from '$app/navigation'
	import pic1 from '$lib/pic1.jpg'
	import pic7 from '$lib/pic7.jpg'
	import pic3 from '$lib/pic3.jpg'
	import pic4 from '$lib/pic4.jpg'
	import pic5 from '$lib/pic5.jpg'
	import pic8 from '$lib/pic8.jpg'
	import api from '../store/api'

	export const cards = [
		{
			id: '5dfc11c6',
			title: 'Ha egyedi bútorra vágyik, mi megvalósítjuk elképzeléseit.',
			text: `Cégünk az egyedi bútorgyártás terén szerzett több éves tapasztalatával kínál prémium minőségű, személyre szabott bútorokat, melyeket minden részletükben az Ön igényeire alakítunk.`,
			img: pic8
		},
		{
			id: '95e9e2c9',
			title: 'Modern konyhák, ahogy Ön megálmodta.',
			text: `Egyedi konyhabútorokat készítünk a legmagasabb minőségben, a funkcionalitás és esztétikum tökéletes egyensúlyával.`,
			img: pic7
		},
		{
			id: 'ce8cdbf5',
			title: 'Elegáns nappalik személyre szabva.',
			text: `Stílusos nappalibútoraink a modern és klasszikus dizájnt ötvözik, hogy otthona igazán különleges legyen.`,
			img: pic3
		},
		{
			id: '4a2d1190',
			title: 'Irodabútorok egyedi igényekhez.',
			text: `Funkcionális és időtálló irodabútorokat tervezünk és gyártunk, amelyek növelik a munkavégzés hatékonyságát és kényelmét.`,
			img: pic4
		},
		{
			id: '7bf83a1a',
			title: 'Gardróbrendszerek teljesen személyre szabva.',
			text: `Maximális helykihasználás, stílusos megjelenés – egyedi gardróbjaink minden elvárásnak megfelelnek.`,
			img: pic1
		},
		{
			id: 'dc912bfa',
			title: 'Recepciók és üzletberendezések profiktól.',
			text: `Vállaljuk üzlethelyiségek, irodák, recepciók egyedi berendezését, prémium anyagokkal és precíz kivitelezéssel.`,
			img: pic5
		}
	]
</script>

<TabDescriber contentText="Blog" />

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 py-12">
	{#each cards as card}
		<div class="flex flex-col items-center text-center space-y-6">
			<!-- Kép vagy placeholder -->
			<div class="w-full aspect-video bg-gray-200 rounded-xl overflow-hidden">
				<img src={card.img} alt={card.title} class="w-full h-full object-cover" />
			</div>

			<!-- Szövegrész -->
			<div class="space-y-4 text-left">
				<h3 class="text-green-800 text-xl font-bold">{card.title}</h3>
				<p class="text-gray-700 text-sm leading-relaxed">{card.text}</p>
				<button
					class="btn bg-green-700 hover:bg-green-800 text-white"
					on:click={() => {
						goto(`${api}/blog/selected?id=${card.id}`)
					}}>Tovább olvasom</button
				>
			</div>
		</div>
	{/each}
</div>
