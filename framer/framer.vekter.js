(function(scope) {var __layer_0__ = new Layer({"name":"ikea","backgroundColor":"hsl(231, 75%, 9%)","width":1366,"height":1024,"constraintValues":{"height":1024,"heightFactor":1,"width":1366,"widthFactor":1,"top":1124},"blending":"normal","clip":true,"borderStyle":"solid","y":1124});var __layer_1__ = new Layer({"name":"Intro","backgroundColor":"#FFCC66","width":1366,"x":1466,"height":1024,"constraintValues":{"left":1466,"height":1024,"heightFactor":1,"width":1366,"widthFactor":1},"blending":"normal","clip":true,"borderStyle":"solid"});var MainTheme = new Layer({"name":"MainTheme","backgroundColor":"#ffffff","width":1366,"height":1024,"constraintValues":{"height":1024,"heightFactor":1,"width":1366,"widthFactor":1},"blending":"normal","clip":true,"borderStyle":"solid"});var __layer_2__ = new SVGLayer({"parent":MainTheme,"backgroundColor":"hsla(185, 73%, 50%, 0.56)","width":628.4054305226298,"strokeWidth":1,"x":387.0000000000002,"html":"<svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"628.405\" height=\"129\"><path d=\"M 0 37.5 C 0 15 38 0 90 0 C 116 0 133.75 13.313 177.5 26 C 221.25 38.688 234 44 290 54 C 346 64 476 52 532 41 C 588 30 639 62 626.5 74.5 C 614 87 577.5 91 588.5 108 C 599.5 125 601 129 555 129 C 509 129 491 113 453 104 C 415 95 278 66 238 91 C 198 116 129 91 90 91 C 51 91 -0 60 0 37.5 Z\"><\/path><\/svg>","htmlIntrinsicSize":{"height":129,"width":628.4054305226298},"height":129,"fill":"hsla(185, 73%, 50%, 0.56)","y":579});var Card = new Layer({"parent":MainTheme,"name":"Card","shadows":[{"spread":2,"x":1,"type":"box","y":12,"blur":29,"color":"rgba(0,0,0,0.25)"}],"backgroundColor":"hsl(343, 100%, 81%)","width":404,"x":481,"height":256,"constraintValues":{"left":null,"height":256,"centerAnchorX":0.5,"width":404,"top":384,"centerAnchorY":0.5},"blending":"normal","borderRadius":20,"clip":false,"borderStyle":"solid","y":384});var bodyText = new Layer({"parent":Card,"name":"bodyText","backgroundColor":null,"width":362,"x":26,"height":106,"constraintValues":{"left":26,"height":106,"centerAnchorX":0.5123762376237624,"width":362,"right":16,"top":65,"centerAnchorY":0.4609375},"blending":"normal","clip":false,"borderStyle":"solid","y":65});var body = new TextLayer({"parent":bodyText,"name":"body","backgroundColor":null,"width":362,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":88,"css":{"fontSize":"16px","WebkitTextFillColor":"#333333","letterSpacing":"0px","lineHeight":"1.5","fontWeight":300,"tabSize":4,"fontFamily":"\"jf-jinxuan-fresh2.2-Book\", \"jf-jinxuan-fresh2.2\", serif"}}],"text":"我知道我不在你身邊，讓你很不高興。所以我花了點心思，做了這一份禮物給你。我知道，這些在物質上都比不上你給我的，但是我花了很多時間。想要用我可以做的，我會做的。讓你知道我的心意。"}]},"height":106,"constraintValues":{"height":106,"centerAnchorX":0.5,"width":362,"bottom":0,"right":0,"centerAnchorY":0.5},"blending":"normal","autoSize":false});var authorName = new Layer({"parent":Card,"name":"authorName","backgroundColor":null,"width":308,"x":80,"height":25,"constraintValues":{"left":80,"height":25,"centerAnchorX":0.5792079207920792,"width":308,"bottom":18,"right":16,"top":null,"centerAnchorY":0.880859375},"blending":"normal","clip":false,"borderStyle":"solid","y":213});var blesserName = new TextLayer({"parent":authorName,"name":"blesserName","backgroundColor":null,"width":308,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":2,"css":{"fontSize":"16px","WebkitTextFillColor":"#333333","letterSpacing":"0px","lineHeight":"1.6","fontWeight":500,"tabSize":4,"fontFamily":"\"jf-jinxuan-fresh2.2-Medium\", \"jf-jinxuan-fresh2.2\", serif"}}],"text":"兔兔"}],"alignment":"right"},"height":25,"constraintValues":{"height":25,"centerAnchorX":0.5,"width":308,"bottom":0,"right":0,"centerAnchorY":0.5},"blending":"normal","autoSize":false});var dearFrame = new Layer({"parent":Card,"name":"dearFrame","backgroundColor":"rgba(255, 255, 255, 0)","width":362,"x":26,"height":32,"constraintValues":{"left":26,"height":32,"centerAnchorX":0.5123762376237624,"width":362,"right":16,"top":18,"centerAnchorY":0.1328125},"blending":"normal","clip":false,"borderStyle":"solid","y":18});var dear = new TextLayer({"parent":dearFrame,"name":"dear","backgroundColor":null,"width":350,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":3,"css":{"fontSize":"16px","WebkitTextFillColor":"#333333","letterSpacing":"0px","lineHeight":"1.6","fontWeight":300,"tabSize":4,"fontFamily":"\"jf-jinxuan-fresh2.2-Book\", \"jf-jinxuan-fresh2.2\", serif"}}],"text":"嘉平平"}],"alignment":"left"},"height":25,"constraintValues":{"height":25,"centerAnchorX":0.4838709677419355,"width":350,"bottom":3.5,"right":12,"top":3.5,"centerAnchorY":0.5},"blending":"normal","autoSize":false,"y":4});var clear = new Layer({"parent":MainTheme,"name":"clear","backgroundColor":null,"width":80,"x":637,"height":48,"constraintValues":{"left":637,"height":48,"centerAnchorX":0.4956076134699854,"width":80,"top":241,"centerAnchorY":0.2587890625},"blending":"normal","clip":false,"borderStyle":"solid","y":241});var __layer_3__ = new SVGLayer({"parent":clear,"backgroundColor":"#CCC","width":80,"strokeWidth":1,"html":"<svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"80\" height=\"48\"><path d=\"M 40 0 C 62.091 0 80 10.745 80 24 C 80 37.255 62.091 48 40 48 C 17.909 48 0 37.255 0 24 C 0 10.745 17.909 0 40 0 Z\"><\/path><\/svg>","htmlIntrinsicSize":{"height":48,"width":80},"height":48,"fill":"#CCC"});var NextBTN = new Layer({"parent":MainTheme,"name":"NextBTN","backgroundColor":null,"width":83,"x":802,"height":33,"constraintValues":{"left":null,"height":33,"centerAnchorX":0.6174963396778916,"width":83,"bottom":283,"right":481,"top":null,"centerAnchorY":0.70751953125},"blending":"normal","clip":false,"borderStyle":"solid","y":708});var __layer_4__ = new TextLayer({"parent":NextBTN,"backgroundColor":null,"width":36,"x":23,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":4,"css":{"fontSize":"16px","WebkitTextFillColor":"rgb(0, 0, 0)","whiteSpace":"pre","letterSpacing":"0px","lineHeight":"1.2","tabSize":4,"fontFamily":"\".SFNSText\", \"SFProText-Regular\", \"SFUIText-Regular\", \".SFUIText\", sans-serif"}}],"text":"Next"}]},"height":19,"constraintValues":{"left":null,"height":19,"centerAnchorX":0.4939759036144578,"width":36,"top":null,"centerAnchorY":0.5},"blending":"normal","opacity":0,"autoSize":true,"y":7});var PrevBTN = new Layer({"parent":MainTheme,"name":"PrevBTN","backgroundColor":null,"width":83,"x":481,"height":33,"constraintValues":{"left":481,"height":33,"centerAnchorX":0.3825036603221084,"width":83,"bottom":283,"top":null,"centerAnchorY":0.70751953125},"blending":"normal","clip":false,"borderStyle":"solid","y":708});var __layer_5__ = new TextLayer({"parent":PrevBTN,"backgroundColor":null,"width":27,"x":27,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":3,"css":{"fontSize":"16px","WebkitTextFillColor":"rgb(0, 0, 0)","whiteSpace":"pre","letterSpacing":"0px","lineHeight":"1.2","tabSize":4,"fontFamily":"\".SFNSText\", \"SFProText-Regular\", \"SFUIText-Regular\", \".SFUIText\", sans-serif"}}],"text":"Pre"}],"alignment":"center"},"height":19,"constraintValues":{"left":null,"height":19,"centerAnchorX":0.4879518072289157,"width":27,"top":null,"centerAnchorY":0.5},"blending":"normal","opacity":0,"autoSize":true,"y":7});var __layer_6__ = new SVGLayer({"parent":MainTheme,"backgroundColor":"#CCC","width":200,"strokeWidth":1,"x":-96,"html":"<svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"200\" height=\"200\"><path d=\"M 100 0 C 155.228 0 200 44.772 200 100 C 200 155.228 155.228 200 100 200 C 44.772 200 0 155.228 0 100 C 0 44.772 44.772 0 100 0 Z\"><\/path><\/svg>","htmlIntrinsicSize":{"height":200,"width":200},"height":200,"fill":"#CCC","y":641});var BtnNo = new Layer({"parent":MainTheme,"name":"BtnNo","backgroundColor":"rgba(171, 171, 171, 0.13)","width":176,"x":589,"height":60,"constraintValues":{"left":null,"height":60,"centerAnchorX":0.4956076134699854,"width":176,"top":696,"centerAnchorY":0.708984375},"blending":"normal","clip":false,"borderStyle":"solid","y":696});var ikea_doll = new Layer({"parent":MainTheme,"name":"ikea_doll","backgroundColor":null,"width":177,"x":313,"height":204,"constraintValues":{"left":313,"height":204,"centerAnchorX":0.2939238653001464,"width":177,"bottom":402,"top":null,"centerAnchorY":0.5078125},"blending":"normal","clip":false,"borderStyle":"solid","y":418});var __layer_7__ = new TextLayer({"parent":MainTheme,"backgroundColor":null,"width":81,"x":575,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":5,"css":{"fontSize":"16px","WebkitTextFillColor":"rgb(0, 0, 0)","whiteSpace":"pre","letterSpacing":"0px","lineHeight":"1.2","tabSize":4,"fontFamily":"\".SFNSText\", \"SFProText-Regular\", \"SFUIText-Regular\", \".SFUIText\", sans-serif"}}],"text":"總共收集到"}]},"height":19,"constraintValues":{"left":575,"height":19,"centerAnchorX":0.4505856515373353,"width":81,"bottom":220,"top":null,"centerAnchorY":0.77587890625},"blending":"normal","autoSize":true,"y":785});var __layer_8__ = new TextLayer({"parent":MainTheme,"backgroundColor":null,"width":49,"x":730,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":3,"css":{"fontSize":"16px","WebkitTextFillColor":"rgb(0, 0, 0)","whiteSpace":"pre","letterSpacing":"0px","lineHeight":"1.2","tabSize":4,"fontFamily":"\".SFNSText\", \"SFProText-Regular\", \"SFUIText-Regular\", \".SFUIText\", sans-serif"}}],"text":"張卡片"}]},"height":19,"constraintValues":{"left":null,"height":19,"centerAnchorX":0.5523426061493412,"width":49,"bottom":220,"right":587,"top":null,"centerAnchorY":0.77587890625},"blending":"normal","autoSize":true,"y":785});var __layer_9__ = new SVGLayer({"parent":MainTheme,"backgroundColor":"#CCC","width":48,"strokeWidth":1,"x":669,"html":"<svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"48\" height=\"31\"><path d=\"M 0 0 L 48 0 L 48 31 L 0 31 Z\"><\/path><\/svg>","htmlIntrinsicSize":{"height":31,"width":48},"height":31,"fill":"#CCC","y":778});var __layer_10__ = new TextLayer({"parent":MainTheme,"backgroundColor":null,"width":305,"x":529,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":19,"css":{"fontSize":"16px","WebkitTextFillColor":"rgb(0, 0, 0)","whiteSpace":"pre","letterSpacing":"0px","lineHeight":"1.2","tabSize":4,"fontFamily":"\".SFNSText\", \"SFProText-Regular\", \"SFUIText-Regular\", \".SFUIText\", sans-serif"}}],"text":"點選箭頭前後瀏覽，或是輸入數字查看唷！"}]},"height":19,"constraintValues":{"left":null,"height":19,"centerAnchorX":0.4989019033674963,"width":305,"bottom":183,"top":null,"centerAnchorY":0.81201171875},"blending":"normal","autoSize":true,"y":822});var __layer_11__ = new Layer({"parent":MainTheme,"backgroundColor":"rgba(0, 170, 255, 0.5)","width":174,"height":174,"constraintValues":{"height":174,"centerAnchorX":0.0636896046852123,"width":174,"centerAnchorY":0.0849609375,"aspectRatioLocked":true},"blending":"normal","clip":false,"borderStyle":"solid"});var __layer_12__ = new SVGLayer({"parent":MainTheme,"backgroundColor":"#CCC","width":154,"strokeWidth":1,"x":1102,"html":"<svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"154\" height=\"154\"><path d=\"M 0 0 L 154 0 L 154 154 L 0 154 Z\"><\/path><\/svg>","htmlIntrinsicSize":{"height":154,"width":154},"height":154,"fill":"#CCC","y":708});var __layer_13__ = new SVGLayer({"parent":MainTheme,"backgroundColor":"#CCC","width":75,"strokeWidth":1,"x":978,"html":"<svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"75\" height=\"75\"><path d=\"M 0 0 L 75 0 L 75 75 L 0 75 Z\"><\/path><\/svg>","htmlIntrinsicSize":{"height":75,"width":75},"height":75,"fill":"#CCC","y":265});__layer_9__.__framerInstanceInfo = {"hash":"#vekter|__layer_9__","vekterClass":"RectangleShapeNode","framerClass":"SVGLayer"};dear.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|dear","targetName":"dear","vekterClass":"TextNode","text":"嘉平平"};body.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|body","targetName":"body","vekterClass":"TextNode","text":"我知道我不在你身邊，讓你很不高興。所以我花了點心思，做了這一份禮物給你。我知道，這些在物質上都比不上你給我的，但是我花了很多時間。想要用我可以做的，我會做的。讓你知道我的心意。"};bodyText.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|bodyText","targetName":"bodyText","vekterClass":"FrameNode"};__layer_10__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_10__","vekterClass":"TextNode","text":"點選箭頭前後瀏覽，或是輸入數字查看唷！"};__layer_0__.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|__layer_0__","vekterClass":"FrameNode","deviceType":"apple-ipad-pro-space-gray","deviceName":"Apple iPad Pro"};__layer_12__.__framerInstanceInfo = {"hash":"#vekter|__layer_12__","vekterClass":"RectangleShapeNode","framerClass":"SVGLayer"};dearFrame.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|dearFrame","targetName":"dearFrame","vekterClass":"FrameNode"};MainTheme.__framerInstanceInfo = {"deviceName":"Apple iPad Pro","framerClass":"Layer","hash":"#vekter|MainTheme","targetName":"MainTheme","vekterClass":"FrameNode","deviceType":"apple-ipad-pro-space-gray"};BtnNo.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|BtnNo","targetName":"BtnNo","vekterClass":"FrameNode"};NextBTN.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|NextBTN","targetName":"NextBTN","vekterClass":"FrameNode"};__layer_4__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_4__","vekterClass":"TextNode","text":"Next"};Card.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|Card","targetName":"Card","vekterClass":"FrameNode"};__layer_7__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_7__","vekterClass":"TextNode","text":"總共收集到"};__layer_2__.__framerInstanceInfo = {"hash":"#vekter|__layer_2__","vekterClass":"PathNode","framerClass":"SVGLayer"};blesserName.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|blesserName","targetName":"blesserName","vekterClass":"TextNode","text":"兔兔"};PrevBTN.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|PrevBTN","targetName":"PrevBTN","vekterClass":"FrameNode"};ikea_doll.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|ikea_doll","targetName":"ikea_doll","vekterClass":"FrameNode"};__layer_8__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_8__","vekterClass":"TextNode","text":"張卡片"};__layer_13__.__framerInstanceInfo = {"hash":"#vekter|__layer_13__","vekterClass":"RectangleShapeNode","framerClass":"SVGLayer"};__layer_11__.__framerInstanceInfo = {"hash":"#vekter|__layer_11__","vekterClass":"FrameNode","framerClass":"Layer"};authorName.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|authorName","targetName":"authorName","vekterClass":"FrameNode"};__layer_1__.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|__layer_1__","vekterClass":"FrameNode","deviceType":"apple-ipad-pro-space-gray","deviceName":"Apple iPad Pro"};__layer_6__.__framerInstanceInfo = {"hash":"#vekter|__layer_6__","vekterClass":"OvalShapeNode","framerClass":"SVGLayer"};clear.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|clear","targetName":"clear","vekterClass":"FrameNode"};__layer_3__.__framerInstanceInfo = {"hash":"#vekter|__layer_3__","vekterClass":"OvalShapeNode","framerClass":"SVGLayer"};__layer_5__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_5__","vekterClass":"TextNode","text":"Pre"};if (scope["__vekterVariables"]) { scope["__vekterVariables"].map(function(variable) { delete scope[variable] } ) };Object.assign(scope, {MainTheme, Card, bodyText, body, authorName, blesserName, dearFrame, dear, clear, NextBTN, PrevBTN, BtnNo, ikea_doll});scope["__vekterVariables"] = ["MainTheme", "Card", "bodyText", "body", "authorName", "blesserName", "dearFrame", "dear", "clear", "NextBTN", "PrevBTN", "BtnNo", "ikea_doll"];if (typeof Framer.CurrentContext.layout === 'function') {Framer.CurrentContext.layout()};})(window);