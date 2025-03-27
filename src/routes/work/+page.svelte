<script>
	import TabDescriber from '../components/TabDescriber.svelte'
	import kitchen from '$lib/kitchen.jpg'
	import shop from '$lib/shop.jpg'
	import velding from '$lib/velding.jpg'
	import edge_sealing from '$lib/edge_sealing.jpg'
	import entrance from '$lib/entrance.jpg'
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
				<img src={kitchen} alt="Logo" class="h-28 max-[563px]:h-20 md:h-40 lg:h-30 xl:h-35 2xl:h-50 w-auto rounded-tl-[3vw] rounded-br-[3vw]" />
			</div>
			<div class="flex flex-col items-center gap-1">
				<img src={velding} alt="Logo" class="h-28 max-[563px]:h-20 md:h-40 lg:h-30 xl:h-35 2xl:h-50 w-auto rounded-tl-[3vw] rounded-br-[3vw]" />
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
