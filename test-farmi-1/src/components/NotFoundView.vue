<template>
	<!-- Start Breadcrumb 
    ============================================= -->
	<div class="breadcrumb-area text-center shadow dark bg-fixed text-light"
		style="background-image: url(/img/2440x1578.png);">
		<div class="container">
			<div class="row">
				<div class="col-lg-8 offset-lg-2">
					<h1>Error Page</h1>
					<ul class="breadcrumb">
						<li><a href="#"><i class="fas fa-home"></i> Home</a></li>
						<li class="active">404</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	<!-- End Breadcrumb -->

	<!-- Start 404 
    ============================================= -->
	<div class="error-page-area default-padding">
		<div class="container">
			<div class="row align-center">
				<div class="col-lg-5 thumb">
					<img src="/img/illustration/1.png" alt="illustration">
				</div>
				<div class="col-lg-6 offset-lg-1">
					<div class="error-box">
						<h1>404</h1>
						<h2>Sorry Page Was Not Found!</h2>
						<p>
							Household shameless incommode at no objection behaviour. Especially do at he possession
							insensible sympathize boisterous it. Songs he on an widen me event truth. Certain law age
							brother sending amongst why covered.
						</p>
						<div class="search">
							<div class="input-group">
								<form action="#">
									<input type="text" placeholder="Search" class="form-control" name="text">
									<button type="submit">
										<i class="fas fa-search"></i>
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- End 404 -->
</template>

<script>
export default {
	name: "NotFoundView"
}
</script>