<script>
	import workingManImg from '$lib/working_man.jpg'
	export let contentText
</script>

<div class="relative w-full h-[150px] sm:h-[200px] md:h-[250px] lg:h-[300px] xl:h-[350px] bg-cover bg-[center_60%] overflow-hidden" style={`background-image: url('${workingManImg}')`}>
	<!-- Overlay -->
	<div class="absolute inset-0 bg-[#3d7140]/90 z-10"></div>

	<!-- Content -->
	<div class="relative z-20 flex items-center h-full px-4 sm:px-12 md:px-20">
		<div class="text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl p-5">
			{contentText}
		</div>
	</div>
</div>
