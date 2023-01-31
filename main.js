function gen_nature_main_essence(){
    return Math.floor(Math.random() * 6) + 1;
}

function gen_nature_specific_essence(){
    return Math.floor(Math.random() * 6) + 1;
}

function gen_alchemical_main_essence(){
    return Math.floor(Math.random() * 6) + 1;
}

function gen_alchemical_specific_essence(){
    return Math.floor(Math.random() * 6) + 1;
}


function gen_essences() {
    //main essences
    document.getElementById("air").innerHTML = gen_nature_main_essence();
    document.getElementById("Water").innerHTML = gen_nature_main_essence();  
    document.getElementById("Earth").innerHTML = gen_nature_main_essence(); 
    document.getElementById("Fire").innerHTML = gen_nature_main_essence();

    //Air
    document.getElementById("Electricity").innerHTML = gen_nature_specific_essence();
    document.getElementById("Illusion").innerHTML = gen_nature_specific_essence();
    document.getElementById("Flight").innerHTML = gen_nature_specific_essence();
    document.getElementById("Speed").innerHTML = gen_nature_specific_essence();
    document.getElementById("Stealth").innerHTML = gen_nature_specific_essence();

    //Water
    document.getElementById("Cold").innerHTML = gen_nature_specific_essence();
    document.getElementById("Emotion").innerHTML = gen_nature_specific_essence();
    document.getElementById("Fear").innerHTML = gen_nature_specific_essence();
    document.getElementById("Memory").innerHTML = gen_nature_specific_essence();
    document.getElementById("Toxin").innerHTML = gen_nature_specific_essence();

    //Earth
    document.getElementById("Acid").innerHTML = gen_nature_specific_essence();
    document.getElementById("Armor").innerHTML = gen_nature_specific_essence();
    document.getElementById("Disease").innerHTML = gen_nature_specific_essence();
    document.getElementById("Plant").innerHTML = gen_nature_specific_essence();
    document.getElementById("Strenght").innerHTML = gen_nature_specific_essence();

    //Fire
    document.getElementById("Agility").innerHTML = gen_nature_specific_essence();
    document.getElementById("Decay").innerHTML = gen_nature_specific_essence();
    document.getElementById("Light").innerHTML = gen_nature_specific_essence();
    document.getElementById("Pain").innerHTML = gen_nature_specific_essence();
    document.getElementById("Purity").innerHTML = gen_nature_specific_essence();
    
}