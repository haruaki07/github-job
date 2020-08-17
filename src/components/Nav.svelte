<style lang="scss">
	@import "../styles/theme.scss";
	.navbar {
		padding: 20px 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		@media (min-width: $screen-md) {
			padding: 32px 0;
		}
		&__brand {
			font-size: 24px;
		}
	}
</style>

<nav class="navbar">
	<a href="." class="navbar__brand">
		<b>GitHub</b>
		Jobs
	</a>
</nav>