# Seeting module
{Firebase} = require 'firebase'
{InputLayer} = require 'input'
DBfire = new Firebase
	projectID: "chiaping2018"
	secret: "NKgSHpyhTt29NworJ89BHvcSNIzv8bBPlc1l1Rpf"

dearFrame.style = 
	color: "#002842"
	fontSize: 10

cardArray = null
currentNumber = 0
indexOfCards = 0

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

	
# currentNumberText = new TextLayer
# 	text: indexOfCards
# 	fontFamily: "-apple-system"
# 	fontSize: 24
# 	color: "#0E2137"
# 	fontWeight: 600
# 	textAlign: "center"
# 	width: BtnNo.width
# 	parent: BtnNo
# 	point: Align.center
	

inputNumber = new InputLayer
	value: indexOfCards
	multiLine: false
	text: "NN"
	parent: BtnNo

inputNumber.onEnterKey ->
	print inputNumber.value
	indexOfCards = parseInt( inputNumber.value, 10 );
	index = indexOfCards - 1
	ClearDefault()
	getCardData(index)
	

NextBTN.onTap (event, layer) ->
	ClearDefault()
	NextCard()

PrevBTN.onTap (event, layer) ->
	PrevCard()

clear.onTap (event, layer) ->
	BackTOStart()
	
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
# 	currentNumberText.text = indexOfCards
	inputNumber.value = indexOfCards
	index = indexOfCards - 1
	getCardData(index)

PrevCard = () ->
	if indexOfCards > 1
		indexOfCards -= 1
# 		currentNumberText.text = indexOfCards
		inputNumber.value = indexOfCards
		index = indexOfCards - 1
		getCardData(index)	
	

getCardData = (dataIndex) ->
	DBfire.get "/cards", (cards) ->
		theArray = _.toArray(cards)
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


