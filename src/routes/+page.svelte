<script>
	import { onMount } from 'svelte'
	import '../style.css'
	import Menubar from './components/Menubar.svelte'
	import Footer from './components/Footer.svelte'
	import TabDescriber from './components/TabDescriber.svelte'
	import logo from '$lib//logo.png'
	export let contentText = 'Rólunk'

	onMount(() => {})
</script>

<Menubar />
<TabDescriber {contentText} />

<section class="about">
	<div class="text">
		<h2>
			<span class="alba">Bemutatkozik a</span> <span class="brand">KALENT</span><span class="alba">-ALBA Kft.</span>
		</h2>
		<p>
			Cégünk egy 100%-ban magyar tulajdonú családi vállalkozás, ami 2010-ben alakult Székesfehérváron. Múltunk és tapasztalatunk azonban ennél sokkal régebbre tekint vissza, hisz jogelődünk a Gulyás
			és Társa Kft. 1993 óta aktív szereplője volt a szektornak, ma azonban már ingatlan bérbeadással-és üzemeltetéssel foglalkozik. Büszkék vagyunk rá, hogy vállalatunk teljes egészében magyar kézben
			van, s a nemzeti hagyományok és értékek határozzák meg mindennapjainkat még ma is. A magyar kreativitás, precizitás és szakmai elhivatottság számunkra nemcsak érték, hanem misszió is.
		</p>
	</div>

	<div class="logo-div">
		<img src={logo} alt="Logo" class="logo" />
	</div>
</section>

<section class="about">
	<div class="logo-div">
		<img src={logo} alt="Logo" class="logo" />

	</div>
	<div class="text">
		<h2>
			<span class="alba">Küldetésünk </span> <span class="brand">és</span><span class="alba">szakterületünk</span>
		</h2>
		<p>
			Cégünk fő profilja a bútorgyártás, jellemzően üzletberendezések készítését és összeszerelését végezzük nagy élelmiszer kereskedelmi vállalkozások részére. Emellett lakossági és közületi
			megrendelésekre többféle, egyedi asztalosipari terméket állítunk elő, melyek között a konyhabútortól az iskolai szekrényeken át, az irodabútorokon keresztül különféle kültéri és utcai
			berendezések, valamint lakatos szerkezetek is megtalálhatók.
			<br />
			Az ügyfeleinkkel való együttműködés során mindig arra törekszünk, hogy a legmodernebb technológiákat és a több generáción átívelő szakmai tudásunkat egyesítsük, így garantálva a kimagasló minőséget
			és megbízhatóságot.
		</p>
	</div>
</section>
<Footer />

<style>
	.about {
		display: flex;
		flex-direction: column;
		padding: 50px 100px;
		margin: auto;
		align-items: center;
	}

	.text {
		flex: 1;
		max-width: 700px;
		text-align: left;
	}

	.text h2 {
		font-size: 2rem;
		font-weight: 700;
	}

	.text p {
		line-height: 1.8rem !important;
		font-size: 1.25rem !important;
		font-family: 'Montserrat' !important;
		font-weight: 400 !important;
	}

	.brand {
		color: #f44336;
	}

	.alba {
		color: #2e7d32;
	}

	.text p {
		line-height: 1.6;
		color: #222;
	}

	.logo-div {
		width: 50%;
		margin-top: 2rem;
		text-align: center;
		display: flex;
		flex-direction: row;
	}

	.logo {
		width: 700px;
		height: auto;
	}

	@media (min-width: 768px) {
		.about {
			flex-direction: row;
			justify-content: space-between;
		}

		.text {
			text-align: left;
		}

		.logo {
			flex-shrink: 0;
		}
	}
</style>
