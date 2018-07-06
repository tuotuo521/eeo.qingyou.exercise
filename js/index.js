/*刷新页面返回顶部*/
window.onload = () => {
	// 执行一次
	setTimeout(()=>{
		$(window).scrollTop(0)
	},10)

	// 时刻检测滚动条移动距离
	setInterval(() =>{
		/* 滚动条滚到指定位置，触发动画 */
		if($(window).scrollTop() >= 261){
			$('.teachtools_text').addClass('animate_cartoon')
		}
		if($(window).scrollTop() >= 825){
			$('.audio_and_video').addClass('animate_cartoon')
		}
		if($(window).scrollTop() >= 1377){
			$('.traning_field').addClass('animate_cartoon')
		}
	},10)
}


/* ClassIn用户协议按钮 */
var $protocolIcon = $('.check_user_protocol_icon')

$protocolIcon.on('click',() =>{
	if(!$protocolIcon.hasClass('choose_protocol')){
		$protocolIcon.addClass('choose_protocol')
	}else{
		$protocolIcon.removeClass('choose_protocol')
	}
})



/* 品牌与行业标题隐藏显示动画 */
var $brandIndustry = $('.eeo_brand_and_industry')
var op_count=1;//定义透明度数值变量

var ReduceopacityChangeAutoRunInterval;
function ReduceopacityChangeAutoRun(){
	ReduceopacityChangeAutoRunInterval=setInterval(function(){
		op_count=op_count-0.2;
		opacityChangeRun();
	},130)
}

var AddopacityChangeAutoRunInterval;
function AddopacityChangeAutoRun(){
	AddopacityChangeAutoRunInterval=setInterval(function(){
		op_count=op_count+0.2;
		opacityChangeRun();
	},130)
}

function opacityChangeRun(){
	op_count=Math.round(op_count*10)/10;
	if(op_count<=0){
		AddopacityChangeAutoRun();
		clearInterval(ReduceopacityChangeAutoRunInterval);
	}
	if(op_count>=1){
		ReduceopacityChangeAutoRun();
		clearInterval(AddopacityChangeAutoRunInterval);
	}
	$brandIndustry.css('opacity',op_count);
}

$brandIndustry.css('opacity',op_count);
// 开始执行方法
ReduceopacityChangeAutoRun();



/* 生成图片验证码js */
// 生成一个随机数
function randomNum(min,max){
    return Math.floor( Math.random()*(max-min)+min);
}
// 生成一个随机色
function randomColor(min,max){
    var r = randomNum(min,max);
    var g = randomNum(min,max);
    var b = randomNum(min,max);
    return "rgb("+r+","+g+","+b+")";
}

// 执行方法，开始绘制图片
drawPic();

document.getElementById("changeImg").onclick = function(e){
    e.preventDefault();
    drawPic();
}

// 绘制验证码图片
function drawPic(){
    var canvas=document.getElementById("canvas");
    var width=canvas.width;
    var height=canvas.height;
    var ctx = canvas.getContext('2d');
    ctx.textBaseline = 'bottom';

    // 绘制背景色
    ctx.fillStyle = randomColor(180,240); // 颜色若太深可能导致看不清
    ctx.fillRect(0,0,width,height);
    // 绘制文字
    var str = 'ABCEFGHJKLMNPQRSTWXY123456789';
    for(var i=0; i<4; i++){
      	var txt = str[randomNum(0,str.length)];
      	ctx.fillStyle = randomColor(50,160);  // 随机生成字体颜色
      	ctx.font = randomNum(15,40)+'px SimHei'; // 随机生成字体大小
      	var x = 10+i*25;
      	var y = randomNum(25,45);
      	var deg = randomNum(-45, 45);
      	// 修改坐标原点和旋转角度
      	ctx.translate(x,y);
      	ctx.rotate(deg*Math.PI/180);
      	ctx.fillText(txt, 0,0);
      	// 恢复坐标原点和旋转角度
      	ctx.rotate(-deg*Math.PI/180);
      	ctx.translate(-x,-y);
    }
    // 绘制干扰线
    for(var i=0; i<8; i++){
      	ctx.strokeStyle = randomColor(40,180);
      	ctx.beginPath();
      	ctx.moveTo( randomNum(0,width), randomNum(0,height) );
      	ctx.lineTo( randomNum(0,width), randomNum(0,height) );
      	ctx.stroke();
    }
    // 绘制干扰点
    for(var i=0; i<100; i++){
      	ctx.fillStyle = randomColor(0,255);
      	ctx.beginPath();
      	ctx.arc(randomNum(0,width),randomNum(0,height), 1, 0, 2*Math.PI);
      	ctx.fill();
    }
}


/* 负责人电话选择按钮js */
var $sameInstitution = $('.same_institution_wrap');

$sameInstitution.on('click',() =>{
	if(!$('.same_institution_icon').hasClass('same_institution_selected')){
		$('.same_institution_icon').addClass('same_institution_selected')
	}else{
		$('.same_institution_icon').removeClass('same_institution_selected')
	}
})


/* 提交按钮 */
var $submitInstitution = $('.btn_institution_submit');
var $registerInstitutionForm = $('.eeo_free_register_for_institution_form');

$submitInstitution.on('click',() =>{
	checkContents()
})

function checkContents(){
	if($('.input_institution_account_number').find('input').val()==''){
		$('.institution_account_number_wrap').find('.empty_telephone').addClass('show_warning_word')
	}
	if($('.input_picture_code').find('input').val()==''){
		$('.picture_code_wrap').find('.warning_word_wrap').addClass('show_warning_word')
	}
	if($('.input_message_code').find('input').val()==''){
		$('.message_code_wrap').find('.warning_word_wrap').addClass('show_warning_word')
	}
	if($('.input_set_password').find('input').val()==''){
		$('.set_password_wrap').find('.warning_word_wrap').addClass('show_warning_word')
	}
	if($('.input_username').find('input').val()==''){
		$('.username_wrap').find('.warning_word_wrap').addClass('show_warning_word')
	}
	if($('.input_telephone').find('input').val()==''){
		$('.telephone_wrap').find('.empty_telephone').addClass('show_warning_word')
	}
	if($('.input_brand').find('input').val()==''){
		$('.brand_name_wrap').find('.warning_word_wrap').addClass('show_warning_word')
	}
	if($('.input_province').find('input').val()==''){
		$('.locate_province_wrap').find('.warning_word_wrap').addClass('show_warning_word')
	}
	if($('.input_category').find('input').val()==''){
		$('.main_category_wrap').find('.warning_word_wrap').addClass('show_warning_word')
	}
	if(!$('.check_user_protocol_icon').hasClass('choose_protocol')){
		$('.user_protocol_wrap').find('.warning_word_wrap').addClass('show_warning_word')
	}
}