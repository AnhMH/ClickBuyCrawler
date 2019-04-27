<?php
	include "includes/head.php";
	?>
	<div id="collection">
		<div class="columns-container">
			<div class="container" id="columns">
				<!--breadcrumb-->
				<div class="breadcrumb clearfix">
					<div class="tfsBreadcrumb ">
						<ol class="breadcrumb breadcrumb-arrow hidden-sm hidden-xs">
							<li><a href="/" target="_self">Trang chủ</a></li>
							<li><a href="/collections" target="_self">Danh mục</a></li>
							<li class="active"><span>Tất cả sản phẩm</span></li>
						</ol>
					</div>
				</div>
				<!--/breadcrumb-->
				<div class="row">
					<!-- Left colunm -->
					<div class="column col-xs-12 col-sm-3" id="left_column">
						<div class="block left-module hidden-xs">
							<h1 class="title_block">Danh mục sản phẩm</h1>
							<div class="block_content">
								<!-- layered -->
								<div class="layered layered-category">
									<div class="layered-content show">
										<ul class="tree-menu">
											<li class=" has-child">
												<span></span>
												<a class="dropdown-toggle has-category parent" href="#" title="SALE" target="_self">
													<span class="">SALE</span>
												</a>
												<ul class="sc2" role="menu">
													<li class="clearfix" >
														<span></span>
														<a href="#"title="100 Sản Phẩm Giá 0Đ">100 Sản Phẩm Giá 0Đ</a>
													</li>
													<li class="clearfix" >
														<span></span>
														<a href="#"title="Combo Hot Giảm Đến 50%">Combo Hot Giảm Đến 50%</a>
													</li>
												</ul>
											</li>
										</ul>
									</div>
								</div>
								<!-- /layered -->
							</div>
						</div>
					</div>
					<!--/left_column-->
					<!--right_column-->
					<div class="center_column col-xs-12 col-sm-9 product-col" id="center_column">
						<div id="view-product-list" class="view-product-list">
							<h2 class="page-heading">
								<span class="page-heading-title">Tất cả sản phẩm</span>
							</h2>
							<ul class="display-product-option">
								<li class="view-as-grid selected">
									<span>grid</span>
								</li>
								<li class="view-as-list">
									<span>list</span>
								</li>
							</ul>
							<!--browse-tags-->
							<div class="browse-tags">
								<span class="hidden-xs">Sắp xếp theo:</span>
								<span class="custom-dropdown custom-dropdown--white">
									<select class="sort-by custom-dropdown__select custom-dropdown__select--white">
										<option value="manual">Sản phẩm nổi bật</option>
										<option value="price-ascending">Giá: Tăng dần</option>
										<option value="price-descending">Giá: Giảm dần</option>
										<option value="title-ascending">Tên: A-Z</option>
										<option value="title-descending">Tên: Z-A</option>
										<option value="created-ascending">Cũ nhất</option>
										<option value="created-descending">Mới nhất</option>
										<option value="best-selling">Bán chạy nhất</option>
									</select>
								</span>
							</div>
							<!--/browse-tags-->
							<!--product-list-->
							<ul class="row product-list grid filter">
								<?php for($i=0;$i<30;$i++){
									?>
									<li class="col-md-4 col-sm-6 col-xs-6">
										<div class="product-container">
											<?php include 'includes/productitem.php';?>
										</div>
									</li>
									<?php
								}?>
							</ul>
							<!--/product-list-->
							<!--pagination-->
							<div class="col-md-12 content_sortPagiBar pagi">
								<div id="pagination" class="clearfix">
									<ul class="pagination">
										<li class="pagination_previous disabled">
											<span><i class="fa fa-chevron-left"></i></span>
										</li>
										<li class="active"><span>1</span></li>
										<li>
											<a href="?page=2" title="">2</a>
										</li>
										<li>
											<a href="?page=3" title="">3</a>
										</li>
										<li><span>…</span></li>
										<li>
											<a href="?page=20" title="">20</a>
										</li>
										<li class="pagination_next"><a href="?page=2" title="Next »"><i class="fa fa-chevron-right"></i></a></li>
									</ul>
								</div>
							</div>
							<!--/pagination-->
						</div>
					</div>
					<!--/right_column-->
				</div>
			</div>
		</div>
	</div>
	<?php
	include "includes/footer.php";
?>
