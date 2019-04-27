!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
	n.callMethod.apply(n,arguments):n.queue.push(arguments)};
 if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
 n.queue=[];t=b.createElement(e);t.async=!0;
 t.src=v;s=b.getElementsByTagName(e)[0];
 s.parentNode.insertBefore(t,s)}(window, document,'script',
																 'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '527687464072137');
fbq('init', '527687464072137');
fbq('track', 'PageView');
fbq('track', 'InitiateCheckout');
if ($('#purchase-form').find('.show__info').length == 0){
	$('#billing_address_address1').attr('placeholder','số nhà/đường/phường');
	var init_el_info = '<div class="show__info"><h2>Thông tin mua hàng của bạn</h2><ul>';
	init_el_info += '<li id="fullname">Họ và Tên: <span>' + $('#billing_address_full_name').val() + '</span></li>';
	init_el_info += '<li id="phone_number">Số điện thoại: <span>' + $('#billing_address_phone').val() + '</span></li>';
	init_el_info += '<li id="email_address">Email: <span></span>' + $('#order_email').val() + '</li>';
	init_el_info += '<li id="address_number">Số nhà/đường/phường: <span>' + $('#billing_address_address1').val() + '</span></li>';
	init_el_info += '<li id="province">Tỉnh/Thành phố: <span>' + $('#billing_address_province').find('option:selected').text() + '</span></li>';
	init_el_info += '<li id="district">Quận/Huyện: <span>' + $('#shipping_district').find('option:selected').text() + '</span></li>';
	init_el_info += '</ul></div>';
	$(init_el_info).insertAfter('.shiping-ajax');
}
$("#billing_address_full_name").keyup(function(){
	$("#fullname span").text(this.value);
});
$("#billing_address_phone").keyup(function(){
	$("#phone_number span").text(this.value);
});
$("#order_email").keyup(function(){
	$("#email_address span").text(this.value);
});
$("#billing_address_address1").keyup(function(){
	$("#address_number span").text(this.value);
});
$('#billing_address_province').bind('change', function(){
	$('#province span').text($(this).find('option:selected').text());
});
$('#shipping_district').bind('change', function(){
	$('#district span').text($(this).find('option:selected').text());
});

$(document).ajaxSuccess(function( event, xhr, settings ) {
	setTimeout(function(){
		$('p.promotion-shop').html('');
		$("<p class='promotion-shop' style='margin-top:25px;margin-bottom: 0px;'><a style='color:#666666;' target='_blank' href='http://www.depkhoe.thefaceshop.com.vn/?utm_source=banner&utm_medium=reebok_checkout&utm_campaign=tfsreebok-2018'>Tặng ngay Miracle Finish Cushion 599.000đ + voucher 1.000.000đ cho hóa đơn từ 1.500.000đ</a></p>").insertAfter( ".total-checkout" );
	}, 1000);
})
console.log('Load OK');
