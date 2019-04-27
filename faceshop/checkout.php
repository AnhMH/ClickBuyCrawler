<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
	<link rel="shortcut icon" href="//theme.hstatic.net/1000036599/1000401525/14/favicon.png?v=1200" type="image/png" />
	<title>
		THEFACESHOP - Thanh toán đơn hàng
	</title>
	<meta name="description" content="THEFACESHOP - Thanh to&#225;n đơn h&#224;ng" />
	<link href='css/check_out_global.css' rel='stylesheet' type='text/css'  media='all'  />
	<link href='css/check_out.css?' rel='stylesheet' type='text/css'  media='all'  />
</head>
<body class="step1" style="">
	<span class="fbtracker-checkout"></span>
	<a href="/cart"><h1><span class="btn-back">Quay về giỏ hàng</span>  THEFACESHOP</h1></a>
	<link href="css/check_out.css" rel="stylesheet" type="text/css" media="all">
	<div class="container clearfix">
		<!--Step 1-->
		<div class="col-4 step1">
			<h2>Thông tin giao hàng</h2>
			<div class="user-login"><a href="#">Đăng ký tài khoản mua hàng</a> | <a href="#">Đăng nhập</a></div>
			<div class="line"></div>
			<div class="form-info">
				<label class="color-blue">Mua không cần tài khoản</label>
				<form accept-charset="UTF-8" action="/checkout/create_order" class="new_order" id="forminfo" method="post" novalidate="novalidate">
					<div class="form-group">
					</div>
					<div class="form-group">
						<input placeholder="Họ và tên" class="formcontrol" id="billing_address_full_name" name="billing_address[full_name]" size="30" type="text">
						<p>Họ và tên</p>
					</div>
					<div class="form-group">
						<input placeholder="Số điện thoại" maxlength="11" id="billing_address_phone" class="formcontrol" name="billing_address[phone]" size="30" title="Nhập số điện thoại" pattern="^\d{8,11}" type="tel" value="" required="" aria-required="true">
						<p>Số điện thoại</p>
					</div>
					<div class="form-group">
						<input placeholder="Email" id="order_email" name="checkout_user[email]" class="formcontrol" size="30" type="email" value="" required="" aria-required="true">
						<p>Email</p>
					</div>
					<div class="form-group">
						<input placeholder="số nhà/đường/phường" id="billing_address_address1" class="formcontrol" name="billing_address[address1]" size="30" type="text" value="" required="" aria-required="true">
						<p>Địa chỉ</p>
					</div>
					<input type="checkbox" style="display:none" name="billing_address[billing_is_shipping]" value="true" checked="checked" id="shipping-toggle" tabindex="12">
					<div class="form-group ctrl-city">
            <div class="custom-dropdown">
							<select id="billing_address_province" name="billing_address[province_id]" class="formcontrol" required="" aria-required="true">
								<option value="null" selected="">Vui lòng chọn tỉnh/thành phố.</option>
							</select>
						</div>
					</div>
					<div class="form-group ctrl-district hidden" id="shipping_district_container">
            <div class="custom-dropdown">
							<select id="shipping_district" name="shipping_district" class="formcontrol" required="" aria-required="true"></select>
						</div>
					</div>
					<div class="form-group">
						<textarea id="billing_note" placeholder="Ghi chú đơn hàng" name="billing_address[note]" rows="3" class="formcontrol ordernote"></textarea>
						<p>Ghi chú đơn hàng</p>
					</div>
					<div class="error summary">
						(<span class="color-red ">*</span>)Vui lòng nhập đủ thông tin
					</div>
					</form>
				</div>
				<div class="listerror">
				</div>
		</div>
		<!--/Step 1-->
		<!--Step 2-->
		<div class="col-4">
			<!-- Vận chuyển & Thanh Toán -->
			<div class="ctrl-shipping">
				<h3 class="h-shipping ">Vận chuyển</h3>
				<div class="form-group ">
					<div class="custom-dropdown"><select class="drop_shipping" name="shipping_rate"></select></div>
				</div>
			</div>
			<h3>Thanh toán</h3>
			<div class="shiping-ajax">
				<label class="lb-method">
					<input class="input-method" type="radio" checked="checked" name="gateway" value="90035">
					<span class="label-radio"> Thanh toán khi giao hàng (COD)</span>
				</label>
				<span class="desc" style="display: block;"></span>
				<label class="lb-method">
					<input class="input-method" type="radio" name="gateway" value="90036">
					<span class="label-radio"> Chuyển khoản qua ngân hàng</span>
				</label>
				<span class="desc">CHUYỂN KHOẢN VÀO TÀI KHOẢN
				Ngân hàng: TM CP Ngoại Thương Việt Nam (Vietcombank)
				Chi nhánh: TP HCM
				Số tài khoản: 007.100.1058263 (TK VND)
				Tên tài khoản: CT TNHH HOA SEN VIET
				NỘI DUNG CHUYỂN KHOẢN: Họ và Tên + Mã đơn hàng
				</span>
				<label class="lb-method">
						<input class="input-method" type="radio" name="gateway" value="156443">
						<span class="label-radio"> Thanh toán bằng thẻ ATM nội địa</span>
				</label>
				<span class="desc"></span>
				<label class="lb-method">
						<input class="input-method" type="radio" name="gateway" value="160895">
						<span class="label-radio"> Thanh toán bằng Visa/Master/Amex/JCB Card</span>
					</label>
					<span class="desc"></span>
				</div>
				<div class="show__info">
					<h2>Thông tin mua hàng của bạn</h2>
					<ul><li id="fullname">Họ và Tên: <span></span></li>
						<li id="phone_number">Số điện thoại: <span></span></li>
						<li id="email_address">Email: <span></span></li>
						<li id="address_number">Số nhà/đường/phường: <span></span></li>
						<li id="province">Tỉnh/Thành phố: <span>Vui lòng chọn tỉnh/thành phố.</span></li>
						<li id="district">Quận/Huyện: <span></span></li>
					</ul>
				</div>
			</div>
		<!--/Step 2-->
		<!--Step 3-->
		<div class="col-4">
			<div class="box-cart">
				<h2>Đơn hàng</h2>
				(<span>1</span> sản phẩm)
				<div class="cart-items">
					<div class="list_item cart-item">
						<span>1 x</span>
						<span> Phấn Nước Bổ Sung Ẩm MIRACLE FINISH CC ULTRA MOIST CUSHION SPF50+ PA+++V201</span>
						<span class="price">569,000₫</span>
						<p class="variant-title">V201</p>
					</div>
				</div>
				<div class="total-price">
					Tạm tính   <label> 569,000₫</label>
				</div>
				<div class="shiping-price">
					Phí vận chuyển   <label>0</label>
				</div>
				<a class="btn-coupon btn-arrow" href="javascript:void(0);"><span></span>Sử dụng mã giảm giá </a>
				<div class="coupon"><a class="remove-coupon">Xóa</a> <span></span> <label></label></div>
				<div class="use-coupon">
					<div class="form-group">
						<input type="hidden" id="discount-apply" name="discount-apply">
						<input name="discount.code" class="couponcode" placeholder="Nhập mã giảm giá">
						<a class="btn-submit-coupon">Sử dụng</a>
						<a class="continue-coupon ">Tiếp tục sử dụng</a>
						<a class="cancel-coupon">Hủy</a>
					</div>
				</div>
				<div class="total-checkout">
					Tổng cộng <span> 569,000₫</span>
				</div>
				<p class="promotion-shop" style="margin-top:25px;margin-bottom: 0px;">
					<a style="color:#666666;" target="_blank" href="#">Tặng ngay Miracle Finish Cushion 599.000đ + voucher 1.000.000đ cho hóa đơn từ 1.500.000đ</a>
				</p>
				<p class="promotion-shop" style="margin-top:25px;margin-bottom: 0px;"></p>
			</div>
			<button type="submit" class="btn-checkout">Đặt hàng</button>
		</div>
		<!--/Step 3-->
	</div>
</body>
</html>
