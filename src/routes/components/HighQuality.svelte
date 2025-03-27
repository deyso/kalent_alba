<script>
	import handshake from '$lib/handshake.jpg'
	import measuring from '$lib/measuring.jpg'
</script>

<div class="py-10 xl:py-30 px-4 xl:px-20 flex flex-col xl:flex-row gap-10 items-start justify-evenly mx-auto">
	<!-- Left text block -->
	<div class="flex flex-col w-full xl:w-1/3">
		<h2 class="text-green-800 font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight">
			Magas színvonal <span class="italic text-red-500">és</span> minőség
		</h2>
		<p class="text-green-800 text-sm sm:text-base xl:text-lg mt-6 leading-relaxed">
			A Kalent-Alba Kft. büszke arra, hogy termékei nem csupán tárgyak, hanem a szakértelem, az innováció és a magyar kézművesség egyedi megtestesítői.
		</p>
	</div>

	<!-- Image + text 1 -->
	<div class="flex flex-col items-center text-center w-full xl:w-1/3">
		<img src={handshake} alt="Handshake" class="w-full rounded-tl-[3.5rem] rounded-br-[3.5rem] object-cover" />
		<p class="text-green-800 text-sm sm:text-base xl:text-lg mt-4 leading-relaxed">Hiszünk abban, hogy az üzleti siker alapja az elégedett ügyfél és a tartós, megbízható minőség.</p>
	</div>

	<!-- Image + text 2 -->
	<div class="flex flex-col items-center text-center w-full xl:w-1/3">
		<img src={measuring} alt="Measuring" class="w-full rounded-tl-[3.5rem] rounded-br-[3.5rem] object-cover" />
		<p class="text-green-800 text-sm sm:text-base xl:text-lg mt-4 leading-relaxed">
			Ezért minden projektünket a legapróbb részletekig átgondoljuk, és olyan megoldásokat kínálunk, amelyek hosszú távon is bizonyítanak.
		</p>
	</div>
</div>
