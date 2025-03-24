<script>
	export let contentText
</script>

<div class="background-div">
	<div class="content-div">
		<div class="content">{contentText}</div>
	</div>
</div>

<style>
	.background-div {
		position: relative;
		background-image: url('$lib/working_man.jpg');
		background-size: cover;
		background-position: 100% 60%;
		height: 300px;
		width: 100%;
		color: black;
		overflow: hidden;
	}

	.background-div::before {
		content: '';
		position: absolute;
		inset: 0;
		background-color: #3d7140e8; /* green with light opacity */
		z-index: 1;
	}
	.content-div {
		display: flex;
		align-items: center;
		height: 100%;
		padding: 0 100px;
		font-weight: bold;
	}
	.content {
		position: relative;
		z-index: 2;
		color: white;
		font-size: 3rem;
		padding: 20px;
	}
</style>
