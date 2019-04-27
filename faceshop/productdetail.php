<?php
	include "includes/head.php";
	?>
	<div class="columns-container">
		<div class="container" id="columns">
			<!-- breadcrumb -->
			<div class="tfsBreadcrumb ">
				<ol class="breadcrumb breadcrumb-arrow hidden-sm hidden-xs">
					<li><a href="/" target="_self">Trang chủ</a></li>
					<li><a href="/collections/yehwadam-revitalizing" target="_self">Yehwadam Revitalizing</a></li>
					<li class="active"><span> Bộ Tinh Chất Dưỡng Da YEHWADAM REVITALIZING SERUM SPECIAL GIFT SET 5</span></li>
				</ol>
			</div>
			<!-- /breadcrumb -->
			<!-- product -->
			<div id="product">
				<div class="primary-box row">
					<!-- image left -->
					<div class="pb-left-column col-xs-12 col-md-6">
						<div id="product-img" class="clearfix">
							<?php include 'includes/productdetail/productimgs.php';?>
						</div>
					</div>
					<!-- /image left -->
					<!--info right-->
					<div class="pb-right-column col-xs-12 col-md-6">
						<h1 class="product-name">Bộ Tinh Chất Dưỡng Sáng Mịn Da YEHWADAM REVITALIZING SERUM SPECIAL GIFT SET (Heart Edition)</h1>
						<div class="product-price-group">
							<span class="price" data-price="147100000">1,471,000₫</span>
							<span class="old-price">1,549,000₫</span>
						</div>
						<!--product infos-->
						<div class="product-info clearfix">
							<p class="info-item col-xs-12 col-sm-6">
								<label>Điểm TFS</label>
								<span class="point"></span>
							</p>
							<p class="info-item col-xs-12 col-sm-6">
								<label>Dung tích</label>
								<span> SET 5 (75ML+32ML+32ML+10ML+50ML)</span>
							</p>
							<p class="info-item col-xs-12 col-sm-6">
								<label>Dòng sản phẩm</label>
								<span>
									<a href="/collections/yehwadam-revitalizing">Yehwadam Revitalizing</a>
								</span>
							</p>
							<p class="info-item col-xs-12 col-sm-6">
								<label>Thương hiệu</label>
								<span class="vendor">THE<strong>FACE</strong>SHOP</span>
							</p>
							<p class="info-item col-xs-12 col-sm-6">
								<label>Nơi sản xuất</label>
								<span>Hàn Quốc</span>
							</p>
						</div>
						<!--/product infos-->
						<!--actions-->
						<div class="action product-desc">
							<div class="select-wrapper clearfix">
								<label>Số lượng</label>
								<select id="quantity" name="quantity">
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
								</select>
								<span class="quan-check">
									Còn: 4
								</span>
								<div class="info-buynow pull-right">
									<p class="text-center" data-gtm-vis-has-fired-2408055_54="1">
										<strong>Tư vấn bán hàng</strong>
									</p>
									<div class="hotline clearfix">
										<div class="hotline-icon">
											<i class="fa fa-phone" aria-hidden="true"></i>
										</div>
										<div class="hotline-text text-center" data-gtm-vis-has-fired-2408055_54="1">
											<span class="hotline-color">0968 86 33 77</span>
											<span id="sku">Mã SP: 34400204</span>
										</div>
									</div>
								</div>
							</div>
							<div class="clearfix">
								<div class="action-cart pull-left">
									<a href="javascript:;" class="btn-cart add-cart ">Thêm vào giỏ<span>(Mua nhiều, lợi nhiều)</span></a>
								</div>
								<div class="action-cart pull-right" style="margin-right: 0">
									<a href="javascript:;" class="buy-now available ">Mua nhanh<span>(Đặt ngay, gần hết hàng)</span></a>
								</div>
							</div>
							<div class="privacy-bg">
								<div class="clearfix">
									<div class="privacy-left pull-left">
										<p>Thanh toán khi nhận hàng trên toàn quốc</p>
										<span></span>
									</div>
									<div class="privacy-right pull-left">
										<p class="doitra">Giao hàng toàn quốc</p>
										<p class="vanchuyen">Giao hàng đảm bảo</p>
										<p class="thanhtoan">Nhiều cách thanh toán</p>
									</div>
								</div>
							</div>
						</div>
						<!--end actions-->
					</div>
					<!--/info right-->
				</div>
			</div>
			<!-- /product -->
			<!--Product detail bottom row-->
			<div class="row">
				<div class="column col-xs-12 hidden-xs col-sm-3" id="left_column">
					<?php include 'includes/productdetail/productdetailleftwidget.php';?>
				</div>
				<div class="center_column col-xs-12 col-sm-9" id="center_column">
					<!-- tab product -->
					<div class="product-tab">
						<ul class="nav-tab">
							<li class="active">
								<a aria-expanded="false" data-toggle="tab" href="#product-detail">Thông tin sản phẩm</a>
							</li>
						</ul>
						<div class="tab-container">
							<div id="product-detail" class="tab-panel active">
								<div class="des">
									<?php include 'includes/productdetail/pdes.php';?>
								</div>
								<p class="show-more" >
									<a href="javascript:;" class="readmore">Đọc thêm </a>
								</p>
							</div>
						</div>
					</div>
					<!-- /tab product -->
				</div>
			</div>
			<!--/Product detail bottom row-->
		</div>
	</div>
	<?php
	include "includes/footer.php";
?>
