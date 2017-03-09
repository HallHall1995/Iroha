// JavaScript Document

var nowPage;
var center;
var left_goal;
var right_start;
var suiti;//アニメーション終了を伝える(終了時１)

$(function(){//準備
	start();
	topPage();
	
	$("#menu1").click(function(){
		if(nowPage!="#top"){
			husuma("#top");
		}
	});
	
	$("#menu2").click(function(){
		if(nowPage != "#storyWrap"){
			husuma("#storyWrap");
		}
	});
	
	$("#menu3").click(function(){
		if(nowPage != "#chara"){
			husuma("#chara");
		}
	});
	
	$("#menu4").click(function(){
		if(nowPage != "#game"){
			husuma("#game");
		}
	});
	
	$('a[rel*=leanModal]').leanModal({//モーダルウインドウ用
		top:50
	});
});


$(function(){//キャラ紹介用
	$("#iroha").click(function(){
		chara_change(0);
	});
	$("#komainu").click(function(){
		chara_change(1);
	});
	$("#rokurokubi").click(function(){
		chara_change(2);
	});
	$("#tengu").click(function(){
		chara_change(3);
	});
	$("#hitotume").click(function(){
		chara_change(4);
	});
	$("#kappa").click(function(){
		chara_change(5);
	});
});

function chara_change(charaNum){
	var img = $("#charaImg");
	var midasi = $("#chara_midasi");
	var index = $("#charaIndex p");
	var charaImg = ["img/iroha.jpg","img/komainu.jpg","img/rokuro.jpg","img/tengu.jpg","img/hitotume.jpg","img/kappa.jpg"];
	var charaName = ["いろは","狛犬","ろくろ首","天狗","一つ目","河童"]
	var charaIndex = [
		"人の身でありがら陰陽を学び、妖に負けない力を持っている。そのため、妖のお目付け役として妖旅館の管理を任されている。幼いころから妖と触れ合って育ったため、妖に対する偏見がない。",
		"何百年も主人の帰りを待つうちに、自らも気づかぬまま妖となった犬。その体は常に炎を纏っているが、その温度は狛犬自らの意志で変えることができる。冬の寒い日は狛犬にエサを与えると幸せな体験ができるかも…",
		"元々人であったが恋人への強い思いから、妖として生まれ変わった。彼女曰くその長い首は周りの情報を得ることに貢献しているらしい。妖旅館においては皆の姉御として、旅館の仕事を指示している。",
		"天狗…それは日本の神々の中の一人…だったのだが、淋しさに負け人里に下りてきたらしい。他の妖に比べイタズラ好きであり、おっさんの様な顔をしながらトラブルメーカーでもある。",
		"妖旅館において、最年長の妖である。妖旅館に来る前から多くの人と関わってきたらしく、人間の良い点も悪い点も誰よりも理解している。人間…というより子供好きで、必ず飴を持参している。",
		"水辺が大好きであり、雨の日以外は外に出かけることも仕事もしない。（やる気になればできる）まだまだ、妖の中でも子供であり後先考えずに動くことも多い。きゅうりが大好物だが最近大根にはまっている。"
	]
	
	$("#charaBox").css("display","none");
	img.css("background-image","url("+charaImg[charaNum]+")");
	midasi.html(charaName[charaNum]);
	index.replaceWith("<p>"+charaIndex[charaNum]+"</p>");
	$("#charaBox").fadeIn("slow");
}


function start(){//スタート
	nowPage = "#top";
	center = parseInt($("#back").css("width"))/2 +10;
	left_goal = center-parseInt($("#left_husuma").css("width"));
	right_start = window.parent.screen.width-parseInt($("#left_husuma").css("width"));
	
	$("#left_husuma").css({
		"top":"0",
		"left":"-200px",
		"display":"none"	
	});
	
	$("#right_husuma").css({
		"display":"none",
		"top":"0px"
	});
	$("#right_husuma").css("left",right_start+200+"px");	
};


function topPage(){//トップページ
	$("#top").show();
	var img_num = 0;
	var top_ad = ["#word1","#word2","#word3","#rogo","#top_image"];
	
	for(var i=0; i<5; i++){
		$(top_ad[img_num]).fadeIn(1000*(img_num+2));
		img_num += 1;
	};
	nowPage = "#top";
};


function storyPage(){//ストーリーページ
	$("#main").fadeIn(2000);
	$("#storyWrap").fadeIn(1500);	
	$("#storyBox").fadeIn("slow");
	nowPage = "#storyWrap";
}


function charaPage(){//キャラページ
	$("#chara").fadeIn(1000);
	nowPage = "#chara";
};

function gamePage(){
	$("#game").fadeIn(1000);
	nowPage = "#game";	
}

function husuma(page){//ふすまのアニメーション
	var left = $("#left_husuma");
	var right = $("#right_husuma");
	$(nowPage).fadeOut();
	
	left.fadeIn("normal");
	right.fadeIn("normal");
	setTimeout(function(){
		husuma_in(left,right);
	},300);	
	setTimeout(function(){
		husuma_out(left,right);
	},1200);
	setTimeout(function(){
		left.fadeOut("slow");
		right.fadeOut("slow");
		pageIdo(page);
	},1500);
};

function husuma_in(_left,_right){
	_left.animate({left:left_goal+"px"},{duration:600, queue:false});
	_right.animate({left:center+"px"},{duration:600, queue:false});	
};

function husuma_out(_left,_right){
	_left.animate({left:-200+"px"},{duration:600, queue:false});
	_right.animate({left:right_start+200+"px"},{duration:600, queue:false});	
};

function pageIdo(page){
	switch(page){
		case "#top":
			topPage();
			break;
		case "#storyWrap":
			storyPage();
			break;
		case "#chara":
			charaPage();
			break;
		case "#game":
			gamePage();
			break;
	}
}