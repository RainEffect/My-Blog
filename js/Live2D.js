var MsgList=["你在看哪里啊...","对我感到很好奇吗?","失去同步...","WDNMD,看帖子别看我.","我不喜欢有人乱摸<br>别看别人,说的就是你!","快住手啊!<br>你想对‘美少男’干什么?","放...放开我!我还能咕!","得了吧...看了你也学不会.","想摸鱼!想吃鸡!想咕咕咕!","什么?你被日了?","修BUG呢!别闹!","O-oooooooooo AAAAE-A-A-I-A-U- JO-oooooooooooo AAE-O-A-A-U-U-A- E-eee-ee-eee AAAAE-A-E-I-E-A- JO-ooo-oo-oo-oo EEEEO-A-AAA-AAAA","让我们一起'自由落体'吧!<br>——暗喻Freedom D↓ve","我觉得你在骗我...","你在这里干嘛?","就这么喜欢看我咩?","emmmm,没毛病老铁.","相比于MineCraft<br>其实我更喜欢音游!","咕~","哦豁?","这位大侠请问你看够了吗?","明明你只是个变态,<br>但为啥却长得这么可爱","是我的帖子不够吸引,<br>还是我看起来更有吸引力?","我去打音游了,<br>敢打扰我就咬死你!","不要!别碰我!好恶心!","啊~进来了~好深好大~<br>不要啊~会坏掉的!","听说,少年你想干我?","烟我只抽黄鹤楼,<br>酒我只喝威士忌,<br>但女人,我全都要.","曾经沧海桑田,如今发际后延.","最爱吃柠檬了...<br>不不不我是真的喜欢吃柠檬,<br>不是CNM...","我选择死亡...","通宵狂人就是我!"];

var l2dlc=true;
var l2dlv=true;
var TipTimer=30;
var Tiplv=true;

$(document).mousemove(function(e){
	var l2d = $('#live2d-widget');
	if(l2d.length!=0){
		if(l2dlc){
			$("body").append('<div id="l2dTipBar" style="position: fixed; right: 50px; bottom: 160px; width: 200px;  z-index: 100000; opacity: 1; background: rgb(245,245,245); border: 2px solid #777; border-radius: 20px;opacity:0;text-align:center;padding:10px 5px 10px 5px"><font id="l2dTip" color="#222" size="2">测试</font></div>');
			l2d.stop().animate({bottom:'-100px',opacity:'0.5'},1000);
			setInterval(checkTip,100);
			l2dlc = false;
		}
		if(e.pageY>l2d.offset().top&&e.pageX>l2d.offset().left){
			if(l2dlv){
				msgTip(MsgList[Math.floor(Math.random()*MsgList.length)]);
				l2dFade(l2d, true);
				l2dlv=false;
			}
		}else{
			if(!l2dlv){
				l2dFade(l2d, false);
				l2dlv=true;
			}
		}
	}
});


function l2dFade(e,mode){
	e.stop().animate({bottom:(mode?-90:-100)+'px', opacity:(mode?1:0.5)},(mode?200:500));
}

function checkTip(){
	var l2dTip = $("#l2dTipBar")
	if(TipTimer<30){
		if(!Tiplv){
			l2dTip.stop().animate({opacity:1},200);
			Tiplv=true;
		}
		TipTimer++;
	}else{
		if(Tiplv)
		l2dTip.stop().animate({opacity:0},300);
		Tiplv=false;
	}
	if(TipTimer>=30&&Tiplv){
	}
}

function msgTip(msg){
	TipTimer=0;
	$("#l2dTip")[0].innerHTML=msg;
}