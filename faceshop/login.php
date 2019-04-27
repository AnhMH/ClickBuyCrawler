<?php
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
								<li class="first on"><a href="login.php">Đăng nhập</a></li>
								<li><a href="register.php">Đăng ký</a></li>
							</ul>
						</div>
					</div>
					<!--/left_column-->
					<!--right_column-->
					<div class="center_column col-xs-12 col-sm-9" id="customer-login">
						<!--Login area-->
						<div class="loginArea" id="login2" style="display: block;">
							<p class="text">Nếu bạn đăng nhập, có nhiều các dịch vụ và lợi ích cho bạn.</p>
							<form accept-charset="UTF-8" action="/account/login" id="customer_login1" method="post">
								<input name="form_type" type="hidden" value="customer_login">
								<input name="utf8" type="hidden" value="✓">
								<div class="login">
									<div class="fieldset clearfix">
										<div class="fl">
											<p>
												<span>Email</span>
												<input required="" type="email" name="customer[email]" id="mem_id" class="txt">
											</p>
											<p>
												<span>Mật khẩu</span>
												<input required="" type="password" name="customer[password]" id="pwd" class="txt">
											</p>
										</div>
										<input type="submit" class="btn-login" value="Đăng nhập">
									</div>
								</div>
							</form>
							<div class="btnArea ar">
								<a href="javascript:;" onclick="showRecoverPasswordForm2();return false;">Quên mật khẩu</a>
							</div>
						</div>
						<!--/Login area-->
						<!--reset password area-->
						<div class="loginArea" id="recover-password2" style="display: none;">
							<p class="text">Nếu bạn đăng nhập, có nhiều các dịch vụ và lợi ích cho bạn.</p>
							<form accept-charset="UTF-8" action="/account/recover" method="post">
								<input name="form_type" type="hidden" value="recover_customer_password">
								<input name="utf8" type="hidden" value="✓">
								<div class="login">
									<div class="fieldset clearfix">
										<div class="fl">
											<p>
												<span>Email</span>
												<input type="email" value="" size="30" name="email" placeholder="Email" id="recover-email" class="txt">
											</p>
											<div class="recover">
												<input class="btn-login" type="submit" value="Gửi">
												Hoặc <a href="javascript:;" onclick="hideRecoverPasswordForm2();return false;">Hủy</a>
											</div>
										</div>
									</div>
								</div>
							</form>
						</div>
						<!--/reset password area-->
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
