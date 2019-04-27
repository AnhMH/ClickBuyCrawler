<?php
$include_path = dirname(__FILE__);
?>
<html lang="en" class="">
	<head>
		<link rel="shortcut icon" href="images/favicon.png" type="image/png">
		<meta charset="utf-8">
		<title>
			THEFACESHOP Việt Nam Official Site |
		</title>
		<meta content="width=device-width, initial-scale=1.0, maximum-scale=2.0, user-scalable=0" name="viewport">
		<script src="js/jquery-1.11.3.min.js"></script>
		<script src="js/owl.min.js"></script>
		<link href="css/style_new.css" rel="stylesheet" type="text/css" media="all">
		<script src="js/jquery.fancybox.js" type="text/javascript"></script>
		<link href="css/jquery.fancybox.css" rel="stylesheet" type="text/css" media="all">
		<script src="js/script_tfs.js" type="text/javascript"></script>
		<style>
			#new-menu .t-menu li.saving_day_css a {
			color: red!important;
			font-weight: bold!important;
			}
		</style>
		<link rel="stylesheet" type="text/css" href="css/widgets-main.css">
		<link rel="stylesheet" type="text/css" href="css/productreviews.css" media="all">
		<link rel="stylesheet" type="text/css" href="css/jquery.raty.css" media="all">
		<link rel="stylesheet" type="text/css" href="css/fonts.css" media="all">
		<link rel="stylesheet" type="text/css" href="css/bootstrap.css" media="all">
		<link rel="stylesheet" type="text/css" href="css/flex.css" media="all">
		<link rel="stylesheet" type="text/css" href="css/main.css" media="all">
	</head>
	<body class="home option2 insCustomer">
		<?php
		include "mobilemenu.php";
		?>
		<div id="mm-0" class="mm-page mm-slideout">
			<div id="header" class="header">
				<!--Desktop Header-->
				<div class="headMain hidden-sm hidden-xs">
					<div class="container main-header">
						<div class="row">
							<!--infoShop-->
							<div class="col-xs-10 col-sm-3 col-md-4 logo">
								<div class="infoShop">
									<ul class="list line clearfix">
										<li><i class="fa fa-phone" aria-hidden="true"></i> 0968863377&nbsp;</li>
										<li><i class="fa fa-envelope" aria-hidden="true"></i> tfsonline@hsvgroup.com.vn</li>
									</ul>
								</div>
							</div>
							<!--/infoShop-->
							<!--search-box-->
							<div class="col-xs-1 col-sm-6 col-md-5 header-search-box hidden-xs">
								<a href="javascript:;" class="visible-xs show-search-mobile"><i class="fa fa-search" aria-hidden="true"></i></a>
								<div class="search-box">
									<form class="search form-inline ultimate-search" action="/search">
										<div class="form-group input-serach">
											<input type="hidden" name="type" value="product">
											<input type="text" name="q" id="search" class="search_box" placeholder="Tìm kiếm..." value="" autocomplete="off">
										</div>
										<button id="submit-button" class="pull-right btn-search">
											<span class="hidden-xs">Tìm kiếm</span>
											<span class="visible-xs">
												<svg class="icon-search_white">
													<use xmlns:xlink="//www.w3.org/1999/xlink" xlink:href="#icon-search_white"></use>
												</svg>
											</span>
										</button>
									</form>
									</div>
							</div>
							<!--/search-box-->
							<!--Top right menus-->
							<div class="col-xs-2 col-sm-3 col-md-3 text-center trackingGroup" data-gtm-vis-recent-on-screen-2408055_54="660" data-gtm-vis-first-on-screen-2408055_54="660" data-gtm-vis-total-visible-time-2408055_54="100" data-gtm-vis-has-fired-2408055_54="1">
								<ul class="list line clearfix">
									<li><a class="store_header" href="javascript:void(0)">Cửa hàng</a></li>
									<li><a href="/pages/kiem-tra-don-hang">Theo dõi đơn hàng</a></li>
									<li class="careUser"><a href="javascript:void(0)">Chăm sóc khách hàng</a>
										<ul class="lisCare tfsDropdow">
											<li><a href="#" style="background: url(images/care_icon_1.png) 5px center no-repeat;">Tài khoản mua hàng</a></li>
											<li><a href="#" style="background: url(images/care_icon_2.png) 5px center no-repeat;">Điều khoản mua bán hàng hóa</a></li>
											<li><a href="#" style="background: url(images/care_icon_3.png) 5px center no-repeat;">Chính sách tích lũy điểm TFS</a></li>
											<li><a href="#" style="background: url(images/care_icon_4.png) 5px center no-repeat;">Chính sách đổi hàng</a></li>
											<li><a href="#" style="background: url(images/care_icon_5.png) 5px center no-repeat;">Giao hàng và thanh toán</a></li>
											<li><a href="#" style="background: url(images/care_icon_6.png) 5px center no-repeat;">Hướng dẫn sử dụng mã giảm giá trên website Reebok</a></li>
											<li><a href="#" style="background: url(images/care_icon_7.png) 5px center no-repeat;">Hướng dẫn thanh toán qua cổng Smartlink</a></li>
											<li><a href="#" style="background: url(images/care_icon_8.png) 5px center no-repeat;">Liên hệ</a></li>
										</ul>
									</li>
								</ul>
							</div>
							<!--/Top right menus-->
						</div>
					</div>
				</div>
				<!--/Desktop Header-->
				<!--navMain-->
				<div class="navMain">
					<div class="container main-header">
						<div class="row">
							<!--mainLogo-->
							<div class="col-xs-12 col-sm-12 col-md-3 logo">
								<div class="mainLogo">
									<a href="#nav-menu" class="mm-icon-menu visible-sm visible-xs"><span></span></a>
									<div>
										<a href="/">
											<img alt="THEFACESHOP" src="//theme.hstatic.net/1000036599/1000401525/14/logo2.png?v=1195">
										</a>
									</div>
								</div>
							</div>
							<!--/mainLogo-->
							<!--mainDesktopMenus-->
							<div class="col-xs-1 col-sm-6 col-md-7 header-search-box hidden-sm hidden-xs">
								<div id="navMaiaMenu" class="navbarNav">
									<ul class="list nav">
										<li class="active">
											<a class=" current " href="/" target="_self">
												Trang chủ
											</a>
										</li>
										<li class="hasChild ">
											<a class=" colorRed" href="#" title="Khuyến mãi" target="_self">
												<span class="">Khuyến mãi</span> <i class="fa fa-angle-down" aria-hidden="true"></i>
											</a>
											<ul class="tfsDropdow level1" role="menu">
												<li class="">
													<a href="/collections/cushion-mua-1-tang-1-1-30" title="Cushion - Mua 1 Tặng 1"><span>Cushion - Mua 1 Tặng 1</span> </a>
												</li>
												<li class="">
													<a href="/collections/cushion-mua-1-tang-1-1-30" title="Cushion - Mua 1 Tặng 1"><span>Cushion - Mua 1 Tặng 1</span> </a>
												</li>
											</ul>
										</li>
										<li class="hasChild megaItem ">
											<a class=" " href="#" title="Dòng sản phẩm" target="_self">
												<span class="">Dòng sản phẩm</span> <i class="fa fa-angle-down" aria-hidden="true"></i>
											</a>
											<div class="tfsDropdow levelMega">
												<div class="row">
													<div class="col-md-2 columnMega">
														<div class="wrap">
															<ul class="list">
																<li class="head"><a href="#">Dưỡng da</a></li>
																<li>
																	<a href="#" title="THEFACESHOP cushion">
																		<span>Demo aa a a a a </span>
																	</a>
																</li>
															</ul>
														</div>
													</div>
													<div class="col-md-2 columnMega">
														<div class="wrap">
															<ul class="list">
																<li class="head"><a href="#">Dưỡng da</a></li>
																<li>
																	<a href="#" title="THEFACESHOP cushion">
																		<span>Demo aa a a a a </span>
																	</a>
																</li>
															</ul>
														</div>
													</div>
													<div class="col-md-2 columnMega">
														<div class="wrap">
															<ul class="list">
																<li class="head"><a href="#">Dưỡng da</a></li>
																<li>
																	<a href="#" title="THEFACESHOP cushion">
																		<span>Demo aa a a a a </span>
																	</a>
																</li>
															</ul>
														</div>
													</div>
													<div class="col-md-2 columnMega">
														<div class="wrap">
															<ul class="list">
																<li class="head"><a href="#">Dưỡng da</a></li>
																<li>
																	<a href="#" title="THEFACESHOP cushion">
																		<span>Demo aa a a a a </span>
																	</a>
																</li>
															</ul>
														</div>
													</div>
													<div class="col-md-2 columnMega">
														<div class="wrap">
															<ul class="list">
																<li class="head"><a href="#">Dưỡng da</a></li>
																<li>
																	<a href="#" title="THEFACESHOP cushion">
																		<span>Demo aa a a a a </span>
																	</a>
																</li>
															</ul>
														</div>
													</div>
													<div class="col-md-2 columnMega">
														<div class="wrap">
															<ul class="list">
																<li class="head"><a href="#">Dưỡng da</a></li>
																<li>
																	<a href="#" title="THEFACESHOP cushion">
																		<span>Demo aa a a a a </span>
																	</a>
																</li>
															</ul>
														</div>
													</div>
												</div>
											</div>
										</li>
									</ul>
								</div>
							</div>
							<!--/mainDesktopMenus-->
							<!--Account + Cart buttons-->
							<div class="col-xs-2 col-sm-2 col-md-2 group-button-header">
									<div class="deskBtn">
										<!--cart-block-->
										<div class="btn-cart" id="cart-block">
											<a title="My cart" href="/cart" class="hidden-sm hidden-xs">Giỏ hàng</a>
											<span class="text-show hidden-sm hidden-xs">Giỏ hàng</span>
											<span class="notify notify-right">0</span>
											<a href="#" class="visible-sm visible-xs cartMB">
												<svg class="shopping-cart">
													<use xmlns:xlink="//www.w3.org/1999/xlink" xlink:href="#icon-add-cart"></use>
												</svg>
											</a>
											<div class="cart-block">
												<div class="cart-empty">
													Giỏ hàng của bạn vẫn chưa có sản phẩm nào.
												</div>
											</div>
										</div>
										<!--/cart-block-->
										<!--login-block-->
										<div class="btn-cart" id="login-block">
											<a title="Đăng nhập" href="#" class="btn-heart hidden-sm hidden-xs">login</a>
											<span class="text-show hidden-xs hidden-sm">Tài khoản</span>
											<a href="javascript:void(0)" class="visible-sm visible-xs userMB">
												<svg class="icon icon-user" viewBox="0 0 32 32">
													<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-user">
													</use>
												</svg>
											</a>
											<div class="cart-block">
												<button type="button" class="btn btn-trigger" data-toggle="modal" data-target="#modal-login">
													Đăng nhập
												</button>
												<div class="subText">
													<span>Chưa có tài khoản? <a href="/account/register">Đăng ký mới</a></span>
												</div>
												<div class="login-separator"> <hr> <div class="text">hoặc</div> </div>
												<div class="loginApp">
													<button type="button" class="btsocialloginfb">
														<div class="img">
															<img src="images/facebook.png" alt="">
														</div>
														<span>Đăng nhập bằng Facebook</span>
													</button>
													<button type="button" class="btsociallogingg">
														<div class="img">
															<img src="images/googleplus.png" alt="">
														</div>
														<span>Đăng nhập bằng Google</span>
													</button>
												</div>
											</div>
										</div>
										<!--/login-block-->
									</div>
							</div>
							<!--/Account + Cart buttons-->

						</div>
					</div>
				</div>
				<!--/navMain-->
			</div>
		</div>
