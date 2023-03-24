const weatherApi = {
    key: "d3a22377b3ea8e505f4fa0afb6644224",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather", 
}

const Search = document.getElementById('Search');

Search.addEventListener('keypress', (event) => {
    
    if(event.keyCode == 13) {
        // console.log(Search.value);
        getData(Search.value);
    }

});

function getData(city) {
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
	.then((res)=>{
		return res.json()
	})
	.then((data)=>{
		showData(data)
		// console.log(data);
		
	})
	.catch((err)=>{
		// console.log(err)
	})
}
// getData()


function showData(data){
	console.log(data)
	let aa = document.getElementById("card")
	aa.innerHTML = ""


	let waether_det = document.getElementById("cloud")
	waether_det.innerHTML = ""

	let hum = document.getElementById("hum")
	hum.innerHTML = ""

	let wid = document.getElementById("wid")
	wid.innerHTML = ""

	let mub_c = document.getElementById("mub_c")
	mub_c.innerHTML = ""

	let mub_n = document.getElementById("mub_n")
	mub_n.innerHTML = ""
	
	let mub_d = document.getElementById("mub_d")
	mub_d.innerHTML = ""
	
	
	let div = document.createElement("div")

	let container2 = document.createElement("div")
	container2.setAttribute("id","container2")
	
	let append_pra = document.createElement("div")
	append_pra.setAttribute("id","append_pra")

	let city = document.createElement("h3")
    city.innerText = data.name;

	let city_n = document.createElement("h3")
    city_n.innerText = data.name;

	let temperature = document.createElement('h1');
    temperature.innerHTML = `${Math.round(data.main.temp)}&deg;`;
	

	let navbar_c = document.createElement('h1');
    navbar_c.innerHTML = `${Math.round(data.main.temp)}&deg;`;
	
	
	let date = document.createElement('p');
    let date_data = new Date();
    date.innerText = dateM(date_data);
	
	let clou_detal = document.createElement('span');
	clou_detal.innerHTML = `${Math.round(data.clouds.all)}%`;

	let humi = document.createElement('span');
	humi.innerHTML = `${Math.round(data.main.humidity)}%`;


	let wind_ap = document.createElement('span');
	wind_ap.innerHTML = `${Math.round(data.wind.speed)}Km/h`;

	let img = document.createElement('img');
	
	if(data.weather[0].main == "Clear"){
		 img.src = './image/sky.jpg';
		 
	}
	else if(data.weather[0].main == "Clouds"){
		img.src = './image/cloud.jpg';
		
	}
	else if(data.weather[0].main == "Haze"){
		img.src = './image/Haze.jpg';
		
	}
	
	else if(data.weather[0].main == "Rain"){
		img.src = './image/Rain.jpg';
		
}

else if(data.weather[0].main == "Snow"){
	img.src = './image/snow.jpg';
	
}

else if(data.weather[0].main == "Thunderstorm"){
	img.src = './image/thunder.jpg';
	
}
else if(data.weather[0].main == "Smoke"){
	img.src = './image/Smoke.jpg';
	
}


// console.log(img)

div.append(city,date)

append_pra.append(temperature,div)
	container2.append(img,append_pra)

	aa.append(container2) 


	waether_det.append(clou_detal)
	wid.append(wind_ap)
	hum.append(humi)

	mub_c.append(navbar_c)
	mub_n.append(city_n)
	mub_n.append(date)
	
}

// showData()

function dateM(date_m){

	console.log(date_m)

	let year = date_m.getFullYear();
    let month = date_m.getMonth();
    let date = date_m.getDay();
    

	return `${date}/${month}/${year}`;

}