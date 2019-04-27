<!-- Home slideder-->
<div id="home-slider">
	<div class="row">
		<div class="col-sm-12 header-top-right clearfix">
			<div class="homeslider">
				<ul class="owl-carousel-banner">
					<li>
						<a href="#">
							<img src="images/banner_silder_1.jpg" alt="" />
						</a>
					</li>
					<li>
						<a href="#">
							<img data-src-slider="images/banner_silder_2.jpg" alt="" />
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</div>
<script>
var slider = $(".owl-carousel-banner").owlCarousel({
	dots : false,
	nav : true,
	lazyLoad:true,
	navText : ['‹' , '›'],
	items : 1,
	responsive : {"0":{"items":1},"600":{"items":1},"768":{"items":1},"992":{"items":1}},
	margin: 0,
	autoplay: true,
	loop: true
});
slider.on('changed.owl.carousel', function(event) {
	$(".owl-carousel-banner").find('img').each(function(){
		$(this).attr('src',$(this).attr('data-src-slider'));
	})
})
if($(window).width() < 767){
	$('.homeslider .owl-item img').css({'max-width': $(window).width(), 'margin-left': '15px'});
}
</script>
<style>
	@media screen and (max-width: 767px){
	.header-top-right{
	margin-left: 0px !important;
	width:100% !important;
	}
	.option2 .header-top-right .homeslider {
	width:100% !important;
	margin:0px !important;
	}
	.homeslider .owl-item{
	max-width:100% !important;
	}
	}
</style>

		<!-- END Home slideder-->
