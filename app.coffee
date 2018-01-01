# Seeting module
{Firebase} = require 'firebase'
{InputLayer} = require 'input'
Flow = new FlowComponent
Flow.showNext(MainTheme)
DBfire = new Firebase
	projectID: "chiaping2018"
	secret: "NKgSHpyhTt29NworJ89BHvcSNIzv8bBPlc1l1Rpf"

dearFrame.style = 
	color: "#002842"
	fontSize: 10

cardArray = null
currentNumber = 0
indexOfCards = 0
cardLength = 0

# Load image
ikeaDoll = new Layer
	image: 'images/ikea_doll.png'
	parent: ikea_doll
	
icnNext = new Layer
	image: 'images/icn-next.png'
	parent: NextBTN
	height: 34
	width: 32
	x: Align.center

imgBapu = new Layer
	image: 'images/papu.png'
	parent: ImgBapu
	width: 150
	height: 90
	y: 30

imgDuko = new Layer
	image: 'images/duko.png'
	parent: Duko
	height: 180
	width: 127
	y: 8
	
imgDaou = new Layer
	image: 'images/dapu.png'
	parent: Dapu
	width: 240
	height: 157

imgBgStars = new Layer
	image: 'images/bgStars.png'
	parent: ikea
	width: 1339
	height: 1035
	x: Align.center

imgChia = new Layer
	image: 'images/chia.png'
	parent: Chia
	x: -17
	y: 29

imgheart = new Layer
	image: 'images/heart.png'
	parent: little
	width: 120
	height: 120

icnPrev = new Layer
	image: 'images/icn-prev.png'
	parent: PrevBTN
	height: 34
	width: 32
	x: Align.center

# Creating dyanamic text layer
dearFont = new TextLayer
	text: ''
	parent: dearFrame
	fontSize: 18
	color: "#002842"
	fontWeight: 300

bodyFont = new TextLayer
	text: ''
	parent: bodyText
	fontSize: 16
	color: "#002842"
	fontWeight: 300
	
nameFont = new TextLayer
	text: ''
	parent: authorName
	width: authorName.width
	textAlign: "right"
	fontSize: 16
	color: "#002842"
	fontWeight: 600

ikeawords = new TextLayer
	text: ''
	parent: WordText
	fontSize: 16
	color: "#002842"
	fontWeight: 300
	textAlign: 'center'
	width: parent.width
	y: Align.center - this.height/2
	x: Align.center - this.width/2
	


	
totalNoOfCard = new TextLayer
	text: ''
	parent: totalNo
	width: totalNo.width
	textAlign: "center"
	fontSize: 16
	color: "#002842"
	#x: (Align.center - this.width/2)
	y: Align.center
DBfire.get "/cards", (cards) ->
	theArray = _.toArray(cards)
	cardLength = theArray.length
	totalNoOfCard.text = cardLength

inputNumber = new InputLayer
	value: indexOfCards
	multiLine: false
	text: "NN"
	parent: BtnNo
	width: BtnNo.width
	x: Align.center
	# 弄不到置中？

inputNumber.onEnterKey ->
	print inputNumber.value
	##  新增判斷式判斷卡片長度
	indexOfCards = parseInt( inputNumber.value, 10 );
	print isNaN(indexOfCards)
	if !isNaN(indexOfCards) && 0 < indexOfCards < parseInt(totalNoOfCard.text, 10)
		index = indexOfCards - 1
		ClearDefault()
		getCardData(index)
	else if !isNaN(indexOfCards) && indexOfCards > parseInt(totalNoOfCard.text, 10)
		nameFont.text = ''
		bodyFont.text = "超過惹，沒那麼多卡片捏"
		dearFont.text = ''
	else if isNaN(indexOfCards)
		nameFont.text = ''
		bodyFont.text = "要輸入數字才可以看到卡片唷！"
		dearFont.text = ''
	else
		nameFont.text = ''
		bodyFont.text = "不要鬧惹～～～～"
		dearFont.text = ''
	

NextBTN.onTap (event, layer) ->
	ClearDefault()
	NextCard()

PrevBTN.onTap (event, layer) ->
	PrevCard()

clear.onTap (event, layer) ->
	BackTOStart()

little.onTap (event, layer) ->
	Flow.showNext(ikea)

imgChia.onTap (event, layer) ->
	Flow.showNext(MainTheme)

	
# Interface element status and animation setting
dear.states.show = 
	opacity: 1
	animationOptions:
		time: 1
		curve: Bezier.easeOut

dear.states.fade = 
	opacity: 0
	animationOptions:
		time: .5
		curve: Bezier.easeOut
		
blesserName.states.show = 
	opacity: 1
	animationOptions:
		time: 1
		curve: Bezier.easeOut

blesserName.states.fade = 
	opacity: 0
	animationOptions:
		time: .5
		curve: Bezier.easeOut
body.states.show = 
	opacity: 1
	animationOptions:
		time: 1
		curve: Bezier.easeOut

body.states.fade = 
	opacity: 0
	animationOptions:
		time: .5
		curve: Bezier.easeOut
	
# function 
ClearDefault = () ->
	dear.animate("fade")
	blesserName.animate("fade")
	body.animate("fade")

NextCard = () ->
	indexOfCards += 1
	inputNumber.value = indexOfCards
	index = indexOfCards - 1
	getCardData(index)

PrevCard = () ->
	if indexOfCards > 1
		indexOfCards -= 1
		inputNumber.value = indexOfCards
		index = indexOfCards - 1
		getCardData(index)	

getCardData = (dataIndex) ->
	DBfire.get "/cards", (cards) ->
		theArray = _.toArray(cards)
		length = theArray.length
		dearFont.text = theArray[dataIndex].dear
		bodyFont.text = theArray[dataIndex].body
		nameFont.text = theArray[dataIndex].title + " " + theArray[dataIndex].name	


BackTOStart = () ->
	# Clear the index number and go back to the top message
	indexOfCards = 0
	inputNumber.value = 0
	dearFont.text = ''
	bodyFont.text = ''
	nameFont.text = ''
	dear.opacity = 1
	body.opacity = 1
	blesserName.opacity = 1
	
	
#### ikea 

ikeaIndex = 0

DBfire.get "/ikea" , (words) ->
	theArray = _.toArray(words)
	ikeawords.text = theArray[0].text

ikeaNext.onTap (event, layer) ->
	ikeaIndex += 1
	print ikeaIndex
	getIkeaWords(ikeaIndex)

ikeaPrev.onTap (event, layer) ->
	ikeaIndex -= 1
	print ikeaIndex
	getIkeaWords(ikeaIndex)

getIkeaWords = (index) ->
	DBfire.get "/ikea" , (words) ->
		theArray = _.toArray(words)
		range = theArray.length
		if (index == -1)
			ikeaIndex = 0
			ikeawords.text = theArray[0].text
		else if (index == range)
			ikeaIndex = range - 1
			ikeawords.text = theArray[range-1].text
		else if (-1 < index < range)
			ikeawords.text = theArray[index].text
		
		
