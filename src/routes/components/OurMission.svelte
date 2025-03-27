<script>
	import kitchen from '$lib/kitchen.jpg'
	import shop from '$lib/shop.jpg'
	import velding from '$lib/velding.jpg'

	export let bgcolor
	export let direction
	// for main page im gonna need lg:flex-row-reverse
</script>

<div class={`py-3 md:py-5 lg:py-10 xl:py-15 flex justify-center gap-[50px] ${bgcolor}`}>
	<div class={`flex flex-col-reverse ${direction} justify-center items-center`}>
		<div class="flex w-full lg:w-1/2 h-full justify-evenly items-center mt-6 lg:mt-0">
			<!-- <img src={velding} alt="Logo" class="h-10 md:h-10 lg:h-10 xl:h-10 2xl:h-10 w-auto" /> -->
			<div class="flex flex-col items-center gap-1">
				<img src={shop} alt="Logo" class="h-20 md:h-25 lg:h-30 xl:h-35 2xl:h-50 m w-auto rounded-tl-[3vw] rounded-br-[3vw]" />
				<p class="text-xs md:text-xs lg:text-base xl:text-base 2xl:text-xl text-green-800 text-lg">Üzletberendezés</p>
			</div>
			<div class="flex flex-col items-center gap-1">
				<img src={kitchen} alt="Logo" class="h-20 md:h-25 lg:h-30 xl:h-35 2xl:h-50 w-auto rounded-tl-[3vw] rounded-br-[3vw]" />
				<p class="text-xs md:text-xs lg:text-base xl:text-base 2xl:text-xl text-green-800 text-lg">Lakossági megrendelés</p>
			</div>
			<div class="flex flex-col items-center gap-1">
				<img src={velding} alt="Logo" class="h-20 md:h-25 lg:h-30 xl:h-35 2xl:h-50 w-auto rounded-tl-[3vw] rounded-br-[3vw]" />
				<p class="text-xs md:text-xs lg:text-base xl:text-base 2xl:text-xl text-green-800 text-lg">Lakatos szerkezetek</p>
			</div>
		</div>
		<div class="flex px-6 lg:px-20 flex-col gap-0.5 sm:gap-1 md:gap-2 xl:gap-3 2xl:gap-5 w-full lg:w-1/2">
			<div class="text-green-800 pt-2 sm:pt-4 md:pt-5 lg:pt-7 xl:pt-9 font-bold sm:tex-sm md:text-base lg:text-xl xl:text-2xl 2xl:text-3xl text-center lg:text-left">
				Küldetésünk <span class="text-red-500">és </span>szakterületünk
			</div>
			<div class="text-black pt-4 text-xs md:text-xs lg:text-base xl:text-base 2xl:text-xl leading-[2.3] lg:leading-[1.9]">
				Cégünk fő profilja a bútorgyártás, jellemzően üzletberendezések készítését és összeszerelését végezzük nagy élelmiszer kereskedelmi vállalkozások részére. Emellett lakossági és közületi
				megrendelésekre többféle, egyedi asztalosipari terméket állítunk elő, melyek között a konyhabútortól az iskolai szekrényeken át, az irodabútorokon keresztül különféle kültéri és utcai
				berendezések, valamint lakatos szerkezetek is megtalálhatók.
			</div>
			<div class="text-black pt-4 text-xs md:text-xs lg:text-base xl:text-base 2xl:text-xl leading-[2.3] lg:leading-[1.9]">
				Az ügyfeleinkkel való együttműködés során mindig arra törekszünk, hogy a legmodernebb technológiákat és a több generáción átívelő szakmai tudásunkat egyesítsük, így garantálva a kimagasló
				minőséget és megbízhatóságot.
			</div>
		</div>
	</div>
</div>
