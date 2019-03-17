deaf -> sign language -> text -> voice -> non-deaf person

deaf person:
	1	uses sign language via leap motion/leap js frontend
	1.1	feed leap motion data into sk-learn
	2	sign language is converted to text through sk-learn framework
	3	text-to-speech via the API
	4	speech is made via a phone call

functionality
	translate sign language to natural language via convolutional neural network and opencv
	send the freshly-translated text via the nexmo SMS API
	translate text-to-speech using voice API for communicating with blind people
