<script>
	import TabDescriber from '../components/TabDescriber.svelte'
	import logo from '$lib/logo.png'
	import kitchen from '$lib/kitchen.jpg'
	import shop from '$lib/shop.jpg'
	import velding from '$lib/velding.jpg'
	import handshake from '$lib/handshake.jpg'
	import measuring from '$lib/measuring.jpg'
</script>

<TabDescriber contentText="Rólunk" />

<div class="py-3 md:py-5 lg:py-10 xl:py-15 flex justify-center gap-[50px]">
	<div class="flex flex-col lg:flex-row w-full justify-center items-center">
		<div class="flex px-6 lg:px-20 flex-col gap-0.5 sm:gap-1 md:gap-2 xl:gap-3 2xl:gap-5 w-full lg:w-1/2">
			<div class="text-green-800 pt-2 sm:pt-4 md:pt-5 lg:pt-7 xl:pt-9 font-bold sm:tex-sm md:text-base lg:text-xl xl:text-2xl 2xl:text-3xl text-center lg:text-left">
				BEMUTATKOZIK A <span class="text-red-500">KALENT</span>-ALBA KFT.
			</div>
			<div class="text-black pt-4 text-xs md:text-xs lg:text-base xl:text-base 2xl:text-xl leading-[2.3] lg:leading-[1.9]">
				Cégünk egy 100%-ban magyar tulajdonú családi vállalkozás, ami 2010-ben alakult Székesfehérváron. Múltunk és tapasztalatunk azonban ennél sokkal régebbre tekint vissza, hisz jogelődünk a Gulyás
				és Társa Kft. 1993 óta aktív szereplője volt a szektornak, ma azonban már ingatlan bérbeadással-és üzemeltetéssel foglalkozik. Büszkék vagyunk rá, hogy vállalatunk teljes egészében magyar
				kézben van, s a nemzeti hagyományok és értékek határozzák meg mindennapjainkat még ma is. A magyar kreativitás, precizitás és szakmai elhivatottság számunkra nemcsak érték, hanem misszió is.
			</div>
		</div>
		<div class="flex w-full lg:w-1/2 h-full justify-center items-center mt-6 lg:mt-0">
			<img src={logo} alt="Logo" class="h-35 md:h-35 lg:h-45 xl:h-60 2xl:h-74 w-auto" />
		</div>
	</div>
</div>
<div class="py-3 md:py-5 lg:py-10 xl:py-15 flex justify-center gap-[50px] bg-gray-200">
	<div class="flex flex-col-reverse lg:flex-row w-full justify-center items-center">
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
		<img src={handshake} alt="Handshake" class="w-full rounded-tl-[2rem] rounded-br-[2rem] object-cover" />
		<p class="text-green-800 text-sm sm:text-base xl:text-lg mt-4 leading-relaxed">Hiszünk abban, hogy az üzleti siker alapja az elégedett ügyfél és a tartós, megbízható minőség.</p>
	</div>

	<!-- Image + text 2 -->
	<div class="flex flex-col items-center text-center w-full xl:w-1/3">
		<img src={measuring} alt="Measuring" class="w-full rounded-tl-[2rem] rounded-br-[2rem] object-cover" />
		<p class="text-green-800 text-sm sm:text-base xl:text-lg mt-4 leading-relaxed">
			Ezért minden projektünket a legapróbb részletekig átgondoljuk, és olyan megoldásokat kínálunk, amelyek hosszú távon is bizonyítanak.
		</p>
	</div>
</div>
