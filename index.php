<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">

    <title>Rice Animation</title>
</head>
<body>
    <div class="rice-container">
        <div class="rice"></div>
    </div>
    <div id="riceImageContainer">
        <img id="riceImage" src="img/happy_rice.gif" rel:animated_src="img/happy_rice.gif"
        width="360" height="360" rel:auto_play="1" rel:rubbable="1" />
        <div id="riceCounter">Set Rice: 100</div>
        <div id="powerUpsUI">
            <h2>POWER UPS</h2>
            <p id="currentPower">Current Power: </p>
            <p id="farmerPower">Farmer: </p>
            <p id="truckunPower">Truckun: </p>
            <p id="marcosPower">Bong-Bong: </p>
        </div>
    </div>
    <div id="pointsCount">
        Points: 0
    </div>
    <div id="powerUp">
            <div class="powerUpItem">
                <img id="farmerImage" src="img/farmer.gif" rel:animated_src="img/farmer.gif"
                width="200" height="200" rel:auto_play="1" rel:rubbable="1" />
                <p>Farmer</p>
                <p>10 points</p>
            </div>
            <div class="powerUpItem">
                <img id="trucktorImage" src="img/trucktor.gif" rel:animated_src="img/trucktor.gif"
                width="200" height="200" rel:auto_play="1" rel:rubbable="1" />
                <p>Truckun</p>
                <p>20 points</p>
            </div>
            <div class="powerUpItem">
                <img id="marcosImage" src="img/marcos.png" rel:animated_src="img/marcos.png"
                width="200" height="200" rel:auto_play="1" rel:rubbable="1" />
                <p>Bong-Bong</p>
                <p>30 points</p>
            </div>
        </div>
    <script src="js/script.js"></script>
    <script type="text/javascript" src="js/libgif.js"></script>
    <script type="text/javascript" src="js/rubbable.js"></script>
</body>
</html>
