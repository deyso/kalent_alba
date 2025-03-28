<script>
	import EnsureWithUs from '../components/EnsureWithUs.svelte'
	import workingManImg from '$lib/working_man.jpg'
	import Introductiong from '../components/Introducing.svelte'
	import HighQuality from '../components/HighQuality.svelte'
	import pic1 from '$lib/working_man2.jpg'
	import pic2 from '$lib/working_man3.jpg'
	import OurMission from '../components/OurMission.svelte'
	import shop from '$lib/shop.jpg'
	import entrance from '$lib/pic4.jpg'
	import cupboard from '$lib/cupboard.jpg'	
</script>

<div class="relative w-full h-[150px] sm:h-[200px] md:h-[250px] lg:h-[300px] xl:h-[780px] bg-cover bg-[center_80%] overflow-hidden" style={`background-image: url('${workingManImg}')`}>
	<!-- Overlay -->

	<!-- Content -->
	<div class="relative z-20 flex items-center h-full px-4 sm:px-12 md:px-20">
		<div class="text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[4rem] p-5 flex h-full items-end w-1/2 p-25">Magyar szakértelem, családi elkötelezettség, prémium minőség!</div>
	</div>
</div>
<EnsureWithUs />
<Introductiong />
<div class="flex flex-col lg:flex-row w-full bg-stone-100 pt-12 gap-8 items-center">
	<!-- Left image -->
	<div class="w-full lg:w-1/2 max-h-[470px] overflow-hidden relative">
		<img src={pic2} alt="working_man1" class="w-full h-full object-cover" />
	</div>

	<!-- Right image -->
	<div class="w-full lg:w-1/2 max-h-[470px] overflow-hidden relative">
		<img src={pic1} alt="working_man2" class="w-full h-full object-cover" />
	</div>
</div>
<OurMission bgcolor="bg-stone-100" direction="lg:flex-row-reverse" />
<div class="relative w-full h-[550px] bg-cover bg-[center_80%] overflow-hidden" style={`background-image: url('${workingManImg}')`}>
	<!-- Overlay -->
	<div class="absolute inset-0 bg-[#3d7140]/70 z-10"></div>

	<!-- Content (left aligned block) -->
	<div class="absolute inset-0 z-20 flex flex-col justify-center items-start text-white px-8 py-10 lg:px-30 gap-6 max-w-4xl">
		<!-- Title -->
		<h2 class="text-3xl sm:text-4xl font-bold pb-10">
			Család <span class="italic font-normal">és</span> hagyomány
		</h2>

		<!-- Paragraph -->
		<p class="text-base sm:text-lg leading-relaxed">
			A családi vállalkozás struktúrája biztosítja, hogy minden egyes döntésünkben megjelenjen a felelősségvállalás és az elhivatottság. Nemcsak a szakmai teljesítményben, hanem a mindennapi
			működésben is ez vezérel minket. Mi sem bizonyítja ezt jobban, mint hogy munkavállalóink között akadnak olyanok, akik 25–30 éve velünk együtt dolgoznak a sikerért.
		</p>

		<!-- Highlighted Bottom Line -->
		<div>
			<p class="text-lg sm:text-xl font-bold text-lime-300">Számunkra fontos, hogy ügyfeleink érezzék:</p>
			<p class="text-base sm:text-lg text-white">
				minden egyes projekt mögött személyes <span class="font-bold">odafigyelés</span> és <span class="font-bold">gondoskodás</span> áll.
			</p>
		</div>
	</div>
</div>

<section class="w-full px-6 lg:px-20 py-20 bg-white flex flex-col gap-10">
	<!-- Header row -->
	<div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 p-10">
		<div>
			<h2 class="text-2xl sm:text-3xl font-bold text-green-800">Munkáink</h2>
			<p class="text-gray-600">Tekintse meg elkészült munkáinkat.</p>
		</div>
		<button class="btn btn-success text-white rounded-full px-12 py-6 text-base font-semibold"> Összes megtekintése </button>
	</div>

	<!-- Image grid -->
	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
		<div class="rounded-tl-[3vw] max-h-[420px] rounded-br-[3vw] overflow-hidden shadow-md">
			<img src={shop} alt="munka1" class="w-full h-auto object-cover" />
		</div>
		<div class="rounded-tl-[3vw] max-h-[420px] rounded-br-[3vw] overflow-hidden shadow-md">
			<img src={entrance} alt="munka2" class="w-full h-auto object-cover" />
		</div>
		<div class="rounded-tl-[3vw] max-h-[420px] rounded-br-[3vw] overflow-hidden shadow-md">
			<img src={cupboard} alt="munka3" class="w-full h-auto object-cover" />
		</div>
	</div>
</section>
<HighQuality bgcolor={'bg-stone-100'}/>