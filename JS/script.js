const banch = document.getElementById('cardsinbench');

function myFunction() {
  const j = document.getElementById("cardsinbench");
  if (j.style.display === "none") {
    j.style.display = "block";
  } else {
    j.style.display = "none";
  }
}

let players = [];
const addPlayer = (ev)=>{
    ev.preventDefault();
    let player = {
        
          name: document.getElementById('name').value,
          position: document.getElementById('position').value,
          defending: document.getElementById('def').value,
          shooting: document.getElementById('sho').value,
          pace: document.getElementById('pac').value,
          passing: document.getElementById('pas').value,
          dribbling: document.getElementById('dri').value,
          physical: document.getElementById('phy').value,
          rating: document.getElementById('rat').value,
          photo: document.getElementById('pic').value
    }
    players.push(player);
    document.querySelector('form').reset();

    console.warn('added',{players});

    // let pre = document.querySelector('#msg pre');
    // pre.textContent = '\n' +JSON.stringify(players, '\t' , 2);

    localStorage.setItem('PlayersList',JSON.stringify(players))
}
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', addPlayer)
})

fetch('player.json')
.then((Response) => Response.json())
.then((PromiseRes) => {
    players.push(...PromiseRes.players);
    positionPlayers(); // Call after players are loaded
})
.catch((error) => console.error('Error loading players:', error));



 

    function positionPlayers() {
      console.log(players)
      players.forEach((player) => {
        
          let card = document.createElement('div');
          card.innerHTML = `
          <div class="relative flex items-center justify-center ">
              <div class="relative w-[90px] h-[144px] bg-cover bg-center p-[0.8rem_0] bg-[url('https://selimdoyranli.com/cdn/fut-player-card/img/card_bg.png')] transition-all ease-in">
                  <div class="relative flex text-[#e9cc74] px-[0.5rem]">
                      <div class="absolute py-[0.3rem_0] text-xs uppercase font-light">
                          <div class="text-[0.8rem] mt-2">${player.rating}</div>
                          <div class="text-[0.7rem]">${player.position}</div>
                          <div class="block my-[0.1rem_0]">
                              <img src="${player.flag}" alt="Argentina" class="w-[0.6rem] h-[10px] object-contain" />
                          </div>
                          <div class="block">
                              <img src="${player.logo}" alt="Barcelona" class="w-[0.7rem] h-[12px] object-contain" />
                          </div>
                      </div>
                      <div class="w-[52px] h-[52px] mx-auto overflow-hidden">
                          <img src="${player.photo}" alt="Messi" class="w-full h-full object-contain relative right-[-0.5rem] bottom-0" />
                          
                      </div>
                  </div>
                  <div class="relative">
                      <div class="text-[#e9cc74] w-[70%] mx-auto">
                          <div class="text-center text-[0.4rem] uppercase border-b-2 border-[#e9cc74]/[0.1] pb-[0.2rem]">
                              <span class="block text-shadow-lg">${player.name}</span>
                          </div>
                          <div class="flex justify-center mt-[0.2rem]">
                              <div class="pr-[0.6rem] border-r-2 border-[#e9cc74]/[0.1]">
                                  <div class="flex items-center text-[0.5rem] uppercase">
                                      <span class="font-bold mr-[0.2rem]">${player.pace}</span>
                                      <span class="font-light">PAC</span>
                                  </div>
                                  <div class="flex items-center text-[0.5rem] uppercase">
                                      <span class="font-bold mr-[0.2rem]">${player.shooting}</span>
                                      <span class="font-light">SHO</span>
                                  </div>
                                  <div class="flex items-center text-[0.5rem] uppercase">
                                      <span class="font-bold mr-[0.2rem]">${player.passing}</span>
                                      <span class="font-light">PAS</span>
                                  </div>
                              </div>
                              <div>
                                  <div class="flex items-center text-[0.5rem] uppercase">
                                      <span class="font-bold mr-[0.2rem]">${player.dribbling}</span>
                                      <span class="font-light">DRI</span>
                                  </div>
                                  <div class="flex items-center text-[0.5rem] uppercase">
                                      <span class="font-bold mr-[0.2rem]">${player.defending}</span>
                                      <span class="font-light">DEF</span>
                                  </div>
                                  <div class="flex items-center text-[0.5rem] uppercase">
                                      <span class="font-bold mr-[0.2rem]">${player.physical}</span>
                                      <span class="font-light">PHY</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          `;
          
          banch.appendChild(card);
      });
  
      console.log(players);
  }
  
    