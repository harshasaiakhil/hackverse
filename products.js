let products = document.querySelector(".products");

function createElement(src, name, abtPro) {
  //creating elements
  let div = document.createElement("div");
  let img = document.createElement("img");
  let h5 = document.createElement("h5");
  let p = document.createElement("p");

  //class -assign
  div.setAttribute("class", "imgcard");
  img.setAttribute("id", "proimg");
  h5.setAttribute("class", "name");
  

  //adding contents
  img.setAttribute("src", src);
  h5.innerText = name;
  p.innerHTML= abtPro;


  //appending elements
  div.append(img, h5, p);

  div.addEventListener("click", () => {
    window.open("detailedproduct.html", "_blank");
    localStorage.setItem("src", src);
    localStorage.setItem("name", name);
    localStorage.setItem("abtPro", abtPro);
  });

  products.append(div);
}

let productslist = [
  {
    src: "/img/solar_panel_img.jpg",
    name: "Solar Panels",
    abtPro:"Efficient, durable solar panels to harness clean energy and reduce your electricity bills."
  },
  {
    src: "/img/solar_water_heaters_img.jpg",
    name: "solar water heaters",
    abtPro:"Eco-friendly water heating systems powered by the sun, perfect for sustainable living."
  },
  {
    src:"/img/solar_generator_img.jpg",
    name:"solar generators",
    abtPro:"Portable and reliable solar-powered energy backup for your home or outdoor adventures."
  },
  {
    src:"/img/solar_home_battery_img.jpg",
    name:"home battery systems",
    abtPro:"Store energy for use anytime with advanced, long-lasting home battery systems."
  },
  {
    src:"/img/portable_battery_img.jpg",
    name:"portable battery packs",
    abtPro:"Compact and lightweight power solutions for charging devices on the go."
  },
  {
    src:"/img/biogas_digester_img.jpeg",
    name:"biogas digesters",
    abtPro:"Convert organic waste into renewable energy with these efficient biogas systems."
  },
  {
    src:"/img/biomass_boilers_img.jpg",
    name:"biomass boilers",
    abtPro:"Sustainable heating solutions using natural biomass fuels for eco-conscious homes."
  },
  {
    src:"/img/smart_meters_img.jpg",
    name:"smart meters",
    abtPro:"Track and optimize energy usage with real-time data from advanced smart meters."
  },
  {
    src:"/img/off_grid_kits_img.jpg",
    name:"off grid kits",
    abtPro:"Comprehensive off-grid solutions for remote locations or self-sufficient living."
  },
  {
    src:"/img/solar_powered_ev_chargers_img.jpg",
    name:"solar-powered ev chargers",
    abtPro:"Charge your electric vehicle with clean, solar energy for a greener commute."
  },
  {
    src:"/img/wind_power_turbines_img.jpg",
    name:"wind-powered turbine",
    abtPro:"Eco-friendly water pumping systems powered by wind energy, ideal for rural areas."
  },
  {
    src:"/img/super_capacitors_img.png",
    name:"super capacitors",
    abtPro:"High-capacity energy storage solutions for quick charge and discharge applications."
  }
];

productslist.map((ele, index) => {
  createElement(ele.src, ele.name,ele.abtPro);
});
