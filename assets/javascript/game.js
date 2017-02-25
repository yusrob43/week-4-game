var crystal = {
	wins:0,
	losses:0,
	totalScore:0,
	crystals: [1,2,3,4],
	
	randomNumber: function(min,max){
		var result = Math.floor(Math.random() * max) + min;
		return result;

	},
	result:0

};

crystal.totalScore = crystal.randomNumber(19, 120);
console.log(crystal.totalScore);

function random(){
	for (i=0; i<crystal.crystals.length; i++){
	crystal.crystals[i] = crystal.randomNumber(1, 12);
};
}
random();



// crystal.crystals.map(function(e,i){
//		crystal.crystals[i] = crystal.randomNumber(1, 12); });
console.log(crystal.crystals);

var crystalVal = $(".rupeePic");

console.log(crystalVal);
function randomCrystal() {
	for (var i=0; i<crystalVal.length; i++){
		$(".rupeePic").html(crystal.crystals[i]);
	}
};

	randomCrystal();

$(".rupeePic").on("click", function(){
	var value = $(this).children(this).text();
	var number = parseInt(value);
	crystal.result += number;
	console.log(crystal.result);

	if(crystal.totalScore === crystal.result){
		crystal.wins++;
		$("#wins").html(crystal.wins);
		random();
		randomCrystal();
		crystal.totalScore = crystal.randomNumber(19, 120);
		crystal.result = 0;
	}

	else if (crystal.result > crystal.totalScore){
		crystal.losses++;
		$("#losses").html(crystal.losses);
		random();
		randomCrystal();
		crystal.totalScore = crystal.randomNumber(19, 120);
		crystal.result = 0;
	}
});