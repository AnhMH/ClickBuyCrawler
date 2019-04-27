<!-- left silide -->
<div class="col-left-slide left-module">
	<ul class="owl-carousel owl-style2" data-loop="true" data-nav = "false" data-margin = "0" data-autoplayTimeout="1000" data-autoplayHoverPause = "true" data-items="1" data-autoplay="true">
	</ul>
</div>
<!--./left silde-->
<div class="block left-module">
	<p class="title_block">Sản phẩm mới</p>
	<div class="block_content product-onsale">
		<ul class="product-list owl-carousel-3" data-loop="true" data-nav = "false" data-margin = "0" data-autoplayTimeout="1000" data-autoplayHoverPause = "true" data-items="1" data-autoplay="true">
			<?php for($i=0;$i<4;$i++){?>
			<li>
				<div class="product-container">
					<?php include $include_path.'/productitem.php';?>
				</div>
			</li>
		<?php } ?>
		</ul>
	</div>
</div>
<script>
$(document).ready(function(){
	$(".owl-carousel-3").owlCarousel({
		dots : true,
		nav : false,
		items : 1,
		margin: 30,
		loop: true
	});
})
</script>
