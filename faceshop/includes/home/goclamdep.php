<div class="blog-list">
	<h2 class="page-heading">
		<span class="page-heading-title">Góc làm đẹp</span>
	</h2>
	<div class="blog-list-wapper">
		<ul id="blog_slider" class="owl-carousel all">
			<?php
			for($i=0;$i<12;$i++){
				include $include_path.'/blogitem.php';
			}
			?>
		</ul>
	</div>
</div>
<script>
var blog = $("#blog_slider").owlCarousel({
	dots : false,
	nav : true,
	lazyLoad:false,
	navText : ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
	items : 1,
	responsive : {"0":{"items":1},"600":{"items":2},"768":{"items":3},"992":{"items":4}},
	margin: 30,
	autoplay: true,
	loop: true
});
</script>
