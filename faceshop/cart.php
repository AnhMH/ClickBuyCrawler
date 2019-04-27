<?php
	include "includes/head.php";
	?>
	<style>
	#cart {padding: 30px 0;}
	.image img {max-width: 100%;width: 50px;}
	tr.summary td {width: 23%;}
	th.image {}
	span.variant_title {display: block;}
	div#layout-page table td {
	/* width: 20%; */
	padding: 10px;
	border: 1px solid #ccc;
	text-align: center;
	vertical-align: middle;
	}
	td.item{text-align:left !important;}
	td.image {/* width: 140px; */}

	div#layout-page table {width: 100%;}

	div#layout-page table th {
	padding: 8px 0;
	background: #F8F8F8;
	border: 1px solid #CCC;
	text-align: center;
	font-weight: bold;
	color: #333;
	}
	textarea#note {border: 1px solid #ccc;vertical-align: top;}
	label {}

	.checkout-buttons.clearfix label {
	display: block;
	font-size: 13px;
	margin-bottom: 10px;
	}

	.checkout-buttons.clearfix {margin: 20px 0 5px;}
	a.continue {
	margin-top: 20px;
	display: inline-block;
	padding: 0 10px;
	border: 1px solid #666;
	border-radius: 5px;
	background: #fff;
	height: 34px;
	line-height: 34px;
	}
	a.continue i{margin-right:5px;}
	a.continue:hover{background: #6E9602;color:#fff}
	.buttons.clearfix button, #check {
	background: #6E9602;
	color: #fff;
	border: none;
	padding: 10px 23px;
	margin: 5px 10px 5px 0;
	cursor:pointer;
	display: inline-block;
	}
	#check{margin-right:0;}
	div#layout-page h1 {
	font-size: 15px;
	margin-bottom: 10px;
	text-transform: initial;
	border: 0;
	color: #333;
	line-height: initial;
	}
	.cart-buttons.inner-right{
	float: right;
	margin-top: 20px;
	}
	input[type="number"]{text-align:center;}
	@media screen and (max-width:767px){
	div#layout-page table td{
	padding:5px 0;
	}
	div#layout-page table td.qty input{
	width:50px !important;
	}
	#cart #checkout, #update-cart, .bottom-cart-right {
	width: auto;
	}
	}
	.text-right{text-align:right}
	.price-text {
	color: red;
	font-weight: 600;
	}

	tr .image{width:75px;box-sizing: border-box;position:initial}
	tr .item{width:400px;box-sizing: border-box;}
	tr .qty{width:50px;box-sizing: border-box;}
	.item-quantity {width: 50px;box-sizing: border-box;border: 1px solid #999;height: 24px;}
	tr .promotion{width:85px;box-sizing: border-box;}
	tr .remove{width:25px;box-sizing: border-box;}
</style>
	<div class="styleBreadcrumb">
		<div class="container">
			<div class="tfsBreadcrumb ">
				<ol class="breadcrumb breadcrumb-arrow hidden-sm hidden-xs">
					<li><a href="/" target="_self">Trang chủ</a></li>
					<li class="active">Giỏ hàng: <span id="ajax-breadcrumb-cart-item-count">1</span>
						<span id="ajax-breadcrumb-cart-item-text">sản phẩm</span> -
						<span id="ajax-breadcrumb-cart-total-price">569,000₫</span>
					</li>
				</ol>
			</div>
		</div>
	</div>
	<!--cart-->
	<div class="container">
	<div id="cart">
		<!-- Begin empty cart -->
		<div class="row">
			<div id="layout-page" class="col-md-12">
				<h1 class="fix">Giỏ hàng</h1>
				<form action="/cart" method="post" id="cartformpage">
					<table>
						<thead>
							<tr>
								<th class="image">Hình ảnh</th>
								<th class="item">Tên sản phẩm</th>
								<th class="qty">Số lượng</th>
								<th class="price promotion">Đơn giá</th>
								<th class="price promotion">Thành tiền</th>
								<th class="remove">&nbsp;</th>
							</tr>
						</thead>
						<tbody>
							<tr class="item " data-id="1011547453">
								<td class="image">
									<div class="product_image">
										<a href="#">
											<img src="https://product.hstatic.net/1000036599/product/ultra_201_small.jpg">
										</a>
									</div>
								</td>
								<td class="item">
									<a href="#">
										<strong>Phấn Nước Bổ Sung Ẩm MIRACLE FINISH CC ULTRA MOIST CUSHION SPF50+ PA+++V201</strong>
									</a>
								</td>
								<td class="qty">
									<input type="number" size="4" name="updates[]" min="1" id="updates_1011547453" value="1" onfocus="this.select();" class="tc item-quantity">
								</td>
								<td class="price promotion">569,000₫</td>
								<td class="price promotion">
									569,000₫
								</td>
								<td class="remove">
									<a href="#" class="cart">Xóa</a>
								</td>
							</tr>
							<tr>
								<td colspan="2" style="text-align:right">Tổng cộng</td>
								<td class="totalQty">1</td>
								<td class="price"></td>
								<td><span class="price-text">569,000₫</span></td>
								<td></td>
							</tr>
						</tbody>
					</table>
					<div class="clearfix">
						<div class="pull-left">
							<a href="#" class="continue"><i class="fa fa-angle-left"></i>Tiếp tục mua sắm</a>
						</div>
						<div class="cart-buttons inner-right">
							<div class="buttons clearfix">
								<button type="button" id="update-cart" class="button-default" name="update">Cập nhật số lượng</button>
								<a href="javascript:void(0)" id="check">Thanh toán</a>
							</div>
						</div>
					</div>
				</form>
				<div class="change-point hidden">
					<h3>
						Quy đổi điểm lấy voucher
					</h3>
					<p style="margin-bottom:5px;"><a href="#">Đăng nhập</a>/<a href="#">Đăng ký</a> để tham gia chương trình tích điểm thưởng</p>
				</div>
			</div>
		</div>
		<!-- End cart -->
	</div>
</div>
	<!--/cart-->
	<?php
	include "includes/footer.php";
?>
