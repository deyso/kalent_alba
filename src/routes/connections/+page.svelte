<script>
	import TabDescriber from '../components/TabDescriber.svelte'

	let name = '',
		email = '',
		phone = '',
		message = ''
	let contactName = '',
		contactEmail = '',
		subject = '',
		contactMsg = ''

	const handleOfferRequest = () => {
		const body = `Név / cégnév: ${name}%0D%0AEmail: ${email}%0D%0ATelefon: ${phone}%0D%0AÜzenet:%0D%0A${message}`
		window.location.href = `mailto:info@ceged.hu?subject=Árajánlat kérés&body=${body}`
	}

	const handleContactSend = () => {
		const body = `Név / cégnév: ${contactName}%0D%0AEmail: ${contactEmail}%0D%0AÜzenet:%0D%0A${contactMsg}`
		window.location.href = `mailto:info@ceged.hu?subject=${encodeURIComponent(subject)}&body=${body}`
	}
</script>

<TabDescriber contentText="Kapcsolat" />
<div class="grid grid-cols-1 lg:grid-cols-2">
	<!-- Left Side -->
	<div class="bg-white px-6 py-12 space-y-6">
	  <!-- BLUE: Title -->
	  <div>
		<h2 class="text-2xl font-bold text-green-800">Árajánlatkérés</h2>
	  </div>
  
	  <!-- RED: Subtitle & Description -->
	  <div class="space-y-2">
		<h3 class="text-2xl font-bold text-red-500">Mit készíthetünk Önnek?</h3>
		<p class="text-green-700 max-w-md">
		  Bízunk benne, hogy hamarosan Önt is ügyfeleink között üdvözölhetjük, és közösen valósíthatjuk meg elképzeléseit!
		</p>
	  </div>
  
	  <!-- GREEN: Form -->
	  <div>
		<form class="space-y-4">
		  <input type="text" placeholder="Név / cégnév" class="input input-bordered w-full" />
		  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
			<input type="email" placeholder="Email cím" class="input input-bordered w-full" />
			<input type="tel" placeholder="Telefon" class="input input-bordered w-full" />
		  </div>
		  <textarea placeholder="Üzenet" class="textarea textarea-bordered w-full h-32"></textarea>
		  <button class="btn bg-green-800 text-white hover:bg-green-700">Árajánlat kérése</button>
		</form>
	  </div>
	</div>
  
	<!-- Right Side -->
	<div class="bg-gray-100 px-6 py-12 space-y-6">
	  <!-- BLUE: Title -->
	  <div>
		<h2 class="text-2xl font-bold text-green-800">Írjon nekünk!</h2>
	  </div>
  
	  <!-- RED: Subtitle & Description -->
	  <div class="space-y-2">
		<h3 class="text-2xl font-bold text-green-700">Kérdéseivel, elképzeléseivel forduljon hozzánk bizalommal!</h3>
		<p class="text-gray-700 max-w-md">
		  Lépjen kapcsolatba velünk, és kezdjük el együtt az egyedi bútor tervezését! Munkatársaink készséggel állnak rendelkezésére, és segítenek a legmegfelelőbb megoldások megtalálásában.
		</p>
	  </div>
  
	  <!-- GREEN: Form -->
	  <div>
		<form class="space-y-4">
		  <input type="text" placeholder="Név / cégnév" class="input input-bordered w-full" />
		  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
			<input type="email" placeholder="Email cím" class="input input-bordered w-full" />
			<input type="text" placeholder="Tárgy" class="input input-bordered w-full" />
		  </div>
		  <textarea placeholder="Üzenet" class="textarea textarea-bordered w-full h-32"></textarea>
		  <button class="btn bg-green-800 text-white hover:bg-green-700">Üzenet küldése</button>
		</form>
	  </div>
	</div>
  </div>
  