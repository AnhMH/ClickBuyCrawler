<?php
	$ischeckoutpage=true;
	include "includes/head.php";

	?>
	<div id="collection">
		<div class="columns-container">
			<div class="container login-shop" id="columns">

				<div class="row">
					<!-- Left colunm -->
					<div class="column col-xs-12 col-sm-3" id="layout-page">
						<div id="snb">
							<ul>
								<li class="first"><a href="login.php">Đăng nhập</a></li>
								<li class="on"><a href="register.php">Đăng ký</a></li>
							</ul>
						</div>
					</div>
					<!--/left_column-->
					<!--right_column-->
					<div class="center_column col-xs-12 col-sm-9" id="customer-login">
						<!--Register area-->
						<div class="loginArea">
							<p class="text">Hãy đăng ký để có thể sử dụng các dịch vụ và lợi ích dành cho bạn.</p>
							<form accept-charset="UTF-8" action="#" id="create_customer" method="post">
								<div class="login">
									<div class="fieldset clearfix">
										<div class="fl">
											<p>
												<span>Họ</span>
												<input type="text" name="customer[last_name]" class="txt">
											</p>
											<p>
												<span>Tên</span>
												<input type="text" name="customer[first_name]" class="txt">
											</p>
											<p>
												<span>Email</span>
												<input required="" type="email" name="customer[email]" class="txt">
											</p>
											<p>
												<span>Mật khẩu</span>
												<input required="" type="password" name="customer[password]" id="pwd" class="txt">
											</p>
											<p>
												<span>Số điện thoại</span>
												<input required="" type="text" name="customer[note][Phone]" class="txt" pattern="^0\d{9,10}$">
											</p>
											<p>
												<span>Ngày sinh</span>
												<input required="" type="text" id="birthdate" class="txt" value="" placeholder="dd/mm/yyyy" name="customer[note][Birthdate]" title="Định dạng dd/mm/yyyy" pattern="(((0[1-9]|[12][0-9]|3[01])([/])(0[13578]|10|12)([/])(\d{4}))|(([0][1-9]|[12][0-9]|30)([/])(0[469]|11)([/])(\d{4}))|((0[1-9]|1[0-9]|2[0-8])([/])(02)([/])(\d{4}))|((29)(\.|-|\/)(02)([/])([02468][048]00))|((29)([/])(02)([/])([13579][26]00))|((29)([/])(02)([/])([0-9][0-9][0][48]))|((29)([/])(02)([/])([0-9][0-9][2468][048]))|((29)([/])(02)([/])([0-9][0-9][13579][26])))">
											</p>
											<p>
												<span>Giới tính</span>
												<select name="customer[note][Gender]" id="gender">
													<option value="Nam">Nam</option>
													<option value="Nữ">Nữ</option>
												</select>
											</p>
										</div>
										<input type="submit" class="btn-login" value="Đăng ký">
									</div>
								</div>
							</form>
						</div>
						<!--/Register area-->
					</div>
					<!--/right_column-->
				</div>
			</div>
		</div>
	</div>
	<script type="text/javascript">
		function showRecoverPasswordForm2() {
		document.getElementById('recover-password2').style.display = 'block';
		document.getElementById('login2').style.display='none';
		}

		function hideRecoverPasswordForm2() {
		document.getElementById('recover-password2').style.display = 'none';
		document.getElementById('login2').style.display = 'block';
		}

		if (window.location.hash == '#recover') { showRecoverPasswordForm() }
	</script>
	<?php
	include "includes/footer.php";
?>
