<script>
	import TabDescriber from '../components/TabDescriber.svelte'
	import kitchen from '$lib/kitchen.jpg'
	import shop from '$lib/shop.jpg'
	import velding from '$lib/velding.jpg'
	import edge_sealing from '$lib/edge_sealing.jpg'
	import entrance from '$lib/entrance.jpg'
	import office from '$lib/office.jpg'
	import cupboard from '$lib/cupboard.jpg'
	import working_man2 from '$lib/working_man2.jpg'
</script>

<TabDescriber contentText="Mivel foglalkozunk" />

<div class="py-8 md:py-5 lg:py-10 xl:py-15 flex justify-center gap-[50px]">
	<div class="flex flex-col lg:flex-row w-full justify-center items-center">
		<div class="flex px-5 md:px-20 lg:px-20 xl:px-20 flex-col gap-0.5 sm:gap-1 md:gap-2 xl:gap-3 2xl:gap-5 w-full lg:w-1/2">
			<div class="text-green-800 pt-2 sm:pt-4 md:pt-5 lg:pt-7 xl:pt-9 font-bold sm:tex-sm md:text-base lg:text-xl xl:text-2xl 2xl:text-3xl text-center text-left">Egyedi bútorgyártás</div>
			<div class="text-black pt-4 text-xs md:text-xs lg:text-base xl:text-base 2xl:text-xl leading-[1.8] lg:leading-[1.9]">
				<span class="text-green-800 font-bold">Ha egyedi bútorra vágyik, mi megvalósítjuk elképzeléseit. </span> <br />Cégünk az egyedi bútorgyártás terén szerzett több éves tapasztalatával kínál
				prémium minőségű, személyre szabott bútorokat, melyeket minden részletükben az Ön igényeire alakítunk.
			</div>
			<div class="text-black pt-4 text-xs md:text-xs lg:text-base xl:text-base 2xl:text-xl leading-[1.8] lg:leading-[1.9]">
				Az Ön elképzelései és a mi szakértelmünk találkozásából születnek meg azok a bútordarabok, amelyek nemcsak hogy illeszkednek stílusához, hanem hosszú távon is tökéletesen funkcionálnak.
			</div>
		</div>
		<div class="flex w-full lg:w-1/2 h-full justify-evenly items-center mt-6 lg:mt-0">
			<div class="flex flex-col items-center gap-1">
				<img src={entrance} alt="Logo" class="h-28 max-[563px]:h-20 md:h-40 lg:h-30 xl:h-35 2xl:h-50 w-auto rounded-tl-[3vw] rounded-br-[3vw]" />
			</div>
			<div class="flex flex-col items-center gap-1">
				<img src={cupboard} alt="Logo" class="h-28 max-[563px]:h-20 md:h-40 lg:h-30 xl:h-35 2xl:h-50 w-auto rounded-tl-[3vw] rounded-br-[3vw]" />
			</div>
			<div class="flex flex-col items-center gap-1">
				<img src={office} alt="Logo" class="h-28 max-[563px]:h-20 md:h-40 lg:h-30 xl:h-35 2xl:h-50 w-auto rounded-tl-[3vw] rounded-br-[3vw]" />
			</div>
		</div>
	</div>
</div>

<div class="flex flex-col lg:flex-row w-full bg-stone-100">
	<div class="w-full lg:w-1/2 max-h-[200px] lg:max-h-[470px] md:h-auto overflow-hidden relative sm:z-30">
		<img src={shop} alt="Üzletberendezés" class="w-full h-full object-cover rounded-br-[4rem]" />
	</div>
	<div class="w-full lg:w-1/2 flex flex-col justify-center gap-6 px-6 py-18 lg:px-16">
		<h2 class="text-green-800 font-bold text-2xl sm:text-3xl xl:text-4xl">Üzletberendezés gyártás</h2>
		<p class="text-black text-sm sm:text-base xl:text-lg leading-relaxed pt-10">
			Cégünk szakértői csapata az üzletberendezés gyártásában is kiemelkedő tapasztalattal rendelkezik, amelyek kényelmes és hatékony vásárlói élményt biztosítanak.
		</p>
		<p class="text-black text-sm sm:text-base xl:text-lg leading-relaxed">
			A funkcionalitás, a dizájn és az innováció egyesítésével célunk, hogy minden üzlet egyedi arculatot kapjon, miközben biztosítjuk a legmagasabb minőségű kivitelezést.
		</p>
	</div>
</div>

<div class="w-full bg-white text-black py-12 px-6 lg:px-24 flex flex-col gap-12">
	<div>
		<h2 class="text-green-800 font-bold text-3xl lg:text-4xl">Lapszabászat</h2>
	</div>

	<div class="flex flex-col lg:flex-row gap-12">
		<div class="lg:w-1/2 space-y-6">
			<p class="text-base sm:text-lg md:text-xl leading-relaxed">
				A profi és precíz lapszabászat a minőségi bútorgyártás alapja, hisz a pontos méretek és tökéletes élzárások garantálják a hosszú élettartamot, valamint a kiváló megjelenést.
			</p>
			<p class="text-base sm:text-lg md:text-xl leading-relaxed">
				A Kalent-Alba Kft. az általa gyártott berendezések mellett lapszabászati, és éllezécési szolgáltatásokat kínál minden meglévő és új partnere számára.
			</p>
		</div>

		<div class="lg:w-1/2 space-y-4">
			<h3 class="text-green-800 font-semibold text-lg sm:text-xl md:text-2xl">A szolgáltatások díja az alábbiak szerint alakul:</h3>
			<div class="flex flex-col md:flex-row text-base sm:text-base md:text-sm lg:text-lg gap-12">
				<div>
					<h4 class="text-red-600 font-semibold mb-2">Lapmegmunkálás:</h4>
					<ul class="space-y-1">
						<li>Bútorlap szabás fm: 1500 Ft/m²</li>
						<li>Ferde vágás: 700 Ft/db</li>
						<li>Hátlap nútolás/facolás: 315 Ft/fm</li>
						<li>Pánthelymarás: 100 Ft/db</li>
						<li>CNC megmunkálás: 21.500 Ft/óra</li>
					</ul>
				</div>

				<div>
					<h4 class="text-red-600 font-semibold mb-2">Élzárás:</h4>
					<ul class="space-y-1">
						<li>ABS 22/0,4-0,8-2 mm: 300 Ft/fm</li>
						<li>ABS 28/2 mm: 450 Ft/fm</li>
						<li>ABS 42/2 mm: 600 Ft/fm</li>
						<li>Íves élzárás: 1400 Ft/fm</li>
					</ul>
				</div>
			</div>
		</div>
	</div>

	<div>
		<p class="text-center text-base sm:text-lg md:text-xl leading-relaxed pt-8">
			A fentieken túlmenően az alapanyagok tekintetében is igen nagyfokú rugalmassággal rendelkezünk, ugyanis akár hozott-, akár<br />
			nálunk vagy partnereinknél vásárolt anyagokból is megvalósítjuk Önnek elképzelését.
		</p>
	</div>
</div>

<div class="flex flex-col lg:flex-row w-full bg-stone-100">
	<div class="w-full lg:w-1/2 flex flex-col justify-center gap-6 px-6 py-18 lg:px-16">
		<h2 class="text-green-800 font-bold text-2xl sm:text-3xl xl:text-4xl">Éllécezés</h2>
		<p class="text-black text-sm sm:text-base xl:text-lg leading-relaxed pt-10">
			Az éllécezés a bútorok gyártásának egyik legfontosabb részlete, amely nemcsak vizuális szerepet játszik, hanem tartósságot és védelmet is biztosít.
		</p>
		<p class="text-black text-sm sm:text-base xl:text-lg leading-relaxed">
			A modern technológia lehetővé teszi, hogy a bútorok élei simák és esztétikailag tökéletesek legyenek. Az éllécezés alkalmazásával elkerülhetjük a sérüléseket, a szélek kopását, valamint
			biztosítjuk hosszú élettartamot.
		</p>
		<p class="text-black text-sm sm:text-base xl:text-lg leading-relaxed">
			Cégünknél különös figyelmet fordítunk arra, hogy termékeink élei gondosan legyenek megmunkálva, hogy a legjobb minőséget és esztétikai megjelenést biztosítsuk.
		</p>
	</div>
	<div class="w-full lg:w-1/2 max-h-[200px] lg:max-h-[470px] md:h-auto overflow-hidden relative sm:z-30">
		<img src={edge_sealing} alt="Üzletberendezés" class="w-full h-full object-cover rounded-br-[4rem]" />
	</div>
</div>

<div class="flex flex-col lg:flex-row w-full bg-stone-100 py-12 px-6 lg:px-20 gap-8">
	<!-- Kép -->
	<div class="w-full lg:w-1/2 max-h-[200px] lg:max-h-[470px] overflow-hidden relative rounded-tl-[4rem] rounded-br-[4rem]">
		<img src={working_man2} alt="working_man" class="w-full h-full object-cover" />
	</div>

	<!-- Szöveg -->
	<div class="w-full lg:w-1/2 flex flex-col justify-center gap-4 lg:gap-6 text-black">
		<h2 class="text-green-800 font-bold text-2xl sm:text-3xl xl:text-4xl">CNC megmunkálás</h2>
		<p class="text-base text-sm sm:text-base xl:text-lg leading-relaxed">
			A bútoriparban a minőség és a precizitás kulcsfontosságú, és a CNC megmunkálás révén cégünk a legmodernebb technológiákat alkalmazza a tökéletes végeredmény eléréséhez.
		</p>
		<p class="text-base text-sm sm:text-base xl:text-lg leading-relaxed">
			Ez a módszer lehetővé teszi számunkra, hogy minden egyes bútor alkatrészt a legapróbb részletekig pontosan alakítsunk ki, biztosítva a kiváló minőséget és a tartósságot.
		</p>
		<p class="text-base text-sm sm:text-base xl:text-lg leading-relaxed">
			Az automatikus vezérlés segítségével minimalizálhatók az emberi hibák, így minden egyes darab tökéletesen illeszkedik, és a kívánt dizájn kifogástalanul megvalósul.
		</p>
		<p class="text-base text-sm sm:text-base xl:text-lg leading-relaxed">Lépjen velünk kapcsolatba, és hozzuk létre együtt az Ön elképzeléseit, a legújabb CNC megmunkálás segítségével!</p>
	</div>
</div>
