var zodiac = [
	{
		sign: "aquarius",
		fortune: "Aquarius can be considered as the sign of originality and change because they have that power to make some changes in areas. Aquarius-born people are included in the air element because others won’t be able to predict them. They are too erratic, but their mind will always be filled with some concerns, like the mankind’s future and advancing civilization. When it comes to the advanced thinking, Aquarius is number one in this element.",
		image: "img/aquarius.png"
	},
]

function horoscope() {
		var sign = document.getElementById("sign").value.toLowerCase

		for(i = 0; i < zodiac.length; i++) {
				if(sign === zodiac[i].sign) {
						document.getElementById("yourSign").innerHTML = zodiac[i].sign
						document.getElementById("icon").src = zodiac[i].image
						document("yourHoroscope").innerHTML = "you're best attriutes are: " + zodiac[i].fortune
						
				} else {
						document.getElementById("yourSign").innerHTML = "thats not one of the signs, please try again!"
						document.getElementById("yourHoroscope").innerHTML = ""
						document.getElementById("icon").src = ""		
		}
	}					
}