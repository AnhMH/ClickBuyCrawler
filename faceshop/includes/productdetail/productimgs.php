<div id="slider-thumb" class="hidden-xs">
	<ul>
		<li class="product-thumb" data-index="0" data-image="https://product.hstatic.net/1000036599/product/bo_tinh_chat_duong_sang_min_da_yehwadam_revitalizing_serum_special_gift_set_2ea_new_2019_3_3d52cdd825a4454bb14f02403176b1a7_master.png" >
				<a href="javascript:;" data-image="https://product.hstatic.net/1000036599/product/bo_tinh_chat_duong_sang_min_da_yehwadam_revitalizing_serum_special_gift_set_2ea_new_2019_3_3d52cdd825a4454bb14f02403176b1a7_master.png" >
					<img alt="Bộ Tinh Chất Dưỡng Sáng Mịn Da YEHWADAM REVITALIZING SERUM SPECIAL GIFT SET (Heart Edition)" src="https://product.hstatic.net/1000036599/product/bo_tinh_chat_duong_sang_min_da_yehwadam_revitalizing_serum_special_gift_set_2ea_new_2019_3_3d52cdd825a4454bb14f02403176b1a7_small.png" >
				</a>
			</li>
			<li class="product-thumb" data-index="1" data-image="https://product.hstatic.net/1000036599/product/a7fd_e24deb37b1744ef69905026148afad1b_87f37de502f14b5abad88eea4ffba70b_c9c30c9a102d4f7081e1c131966cb0aa_master.jpg" >
				<a href="javascript:;" data-image="https://product.hstatic.net/1000036599/product/a7fd_e24deb37b1744ef69905026148afad1b_87f37de502f14b5abad88eea4ffba70b_c9c30c9a102d4f7081e1c131966cb0aa_master.jpg" >
					<img alt="Bộ Tinh Chất Dưỡng Sáng Mịn Da YEHWADAM REVITALIZING SERUM SPECIAL GIFT SET (Heart Edition)" src="https://product.hstatic.net/1000036599/product/a7fd_e24deb37b1744ef69905026148afad1b_87f37de502f14b5abad88eea4ffba70b_c9c30c9a102d4f7081e1c131966cb0aa_small.jpg" >
				</a>
			</li>
			<li class="product-thumb" data-index="2" data-image="https://product.hstatic.net/1000036599/product/99cd_e85cf00f4a174e8cb1cc707ab97802d5_574e86ee1bcf473697238dbc5f5e36ca_aebc7e1ea36e47b8b56b5dae0b950110_master.jpg" >
				<a href="javascript:;" data-image="https://product.hstatic.net/1000036599/product/99cd_e85cf00f4a174e8cb1cc707ab97802d5_574e86ee1bcf473697238dbc5f5e36ca_aebc7e1ea36e47b8b56b5dae0b950110_master.jpg" >
					<img alt="Bộ Tinh Chất Dưỡng Sáng Mịn Da YEHWADAM REVITALIZING SERUM SPECIAL GIFT SET (Heart Edition)" src="https://product.hstatic.net/1000036599/product/99cd_e85cf00f4a174e8cb1cc707ab97802d5_574e86ee1bcf473697238dbc5f5e36ca_aebc7e1ea36e47b8b56b5dae0b950110_small.jpg" >
				</a>
			</li>
	</ul>
</div>
<div id="slider-feature" class="flexslider">
	<ul class="slides" >
		<li >
				<a href="javascript:;" >
					<img alt="Bộ Tinh Chất Dưỡng Sáng Mịn Da YEHWADAM REVITALIZING SERUM SPECIAL GIFT SET (Heart Edition)" data-image="https://product.hstatic.net/1000036599/product/bo_tinh_chat_duong_sang_min_da_yehwadam_revitalizing_serum_special_gift_set_2ea_new_2019_3_3d52cdd825a4454bb14f02403176b1a7_master.png" src="https://product.hstatic.net/1000036599/product/bo_tinh_chat_duong_sang_min_da_yehwadam_revitalizing_serum_special_gift_set_2ea_new_2019_3_3d52cdd825a4454bb14f02403176b1a7_master.png" >
				</a>
			</li>

			<li >
				<a href="javascript:;" >
					<img alt="Bộ Tinh Chất Dưỡng Sáng Mịn Da YEHWADAM REVITALIZING SERUM SPECIAL GIFT SET (Heart Edition)" data-image="https://product.hstatic.net/1000036599/product/a7fd_e24deb37b1744ef69905026148afad1b_87f37de502f14b5abad88eea4ffba70b_c9c30c9a102d4f7081e1c131966cb0aa_master.jpg" src="https://product.hstatic.net/1000036599/product/a7fd_e24deb37b1744ef69905026148afad1b_87f37de502f14b5abad88eea4ffba70b_c9c30c9a102d4f7081e1c131966cb0aa_master.jpg" >
				</a>
			</li>

			<li >
				<a href="javascript:;" >
					<img alt="Bộ Tinh Chất Dưỡng Sáng Mịn Da YEHWADAM REVITALIZING SERUM SPECIAL GIFT SET (Heart Edition)" data-image="https://product.hstatic.net/1000036599/product/99cd_e85cf00f4a174e8cb1cc707ab97802d5_574e86ee1bcf473697238dbc5f5e36ca_aebc7e1ea36e47b8b56b5dae0b950110_master.jpg" src="https://product.hstatic.net/1000036599/product/99cd_e85cf00f4a174e8cb1cc707ab97802d5_574e86ee1bcf473697238dbc5f5e36ca_aebc7e1ea36e47b8b56b5dae0b950110_master.jpg" >
				</a>
			</li>
	</ul>
</div>
<script>
$(window).load(function() {
	// The slider being synced must be initialized first
	$('#slider-feature').flexslider({
		animation: "slide",
		controlNav: false,
		animationLoop: false,
		slideshow: false,
		touch : true
	});
	$('#slider-thumb ul li').click(function(){
		var index = $(this).data('index');
		var w = $('#slider-feature ul.slides li').outerWidth();
		var w2 = parseInt(-(w*index));
		$('#slider-feature ul.slides li').removeClass('flex-active-slide');
		$('#slider-feature ul.slides li').eq(index).addClass('flex-active-slide');
		$('#slider-feature ul.slides').css({"transition-duration":"0.6s","transform": "translate3d(" + w2 + "px , 0px, 0px)"});
	})
});
</script>
