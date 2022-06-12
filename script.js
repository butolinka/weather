
const api={
    endpoint:"https://api.openweathermap.org/data/2.5/",
    key: '7ba2286f82fd4c7e7222af27097a4888'
}
const input = document.querySelector('#input');
input.addEventListener('keydown',enter);
function enter(e){
  if(e.keyCode===13){
    getInfo(input.value)
  }
}
async function getInfo(data) {
    const res = await fetch (`${api.endpoint}weather?q=${data}&units=metric&appID=${api.key}`);
    const result = await res.json();
    displayResult(result);
}

function displayResult(result){
    let city = document.querySelector("#city");
    city.textContent = `${result.name}, ${result.sys.country}`;
    getOurDate();
    let temperature=document.querySelector('#temperature');
    temperature.innerHTML=`${Math.round(result.main.temp)}<span>°</span>`;
    let feelslike=document.querySelector('#feelslike');
    feelslike.innerHTML='Feels like: '+`${Math.round(result.main.feels_like)}<span>°</span>`;
    let condition=document.querySelector('#condition');
    condition.textContent=`${result.weather[0].description}`;
    if(condition.textContent=='clouds'){
                document.body.style.backgroundImage='https://images.unsplash.com/photo-1609789887552-fa440754d322?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2xvdWQlMjBza3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
            }
            else if(condition.textContent=='scattered clouds'){
                document.body.style.backgroundImage='url(https://images.unsplash.com/photo-1601992664212-8f591f72733b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2NhdHRlcmVkJTIwY2xvdWRzfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60)'
            }
            else if(condition.textContent=='overcast clouds'){
                document.body.style.backgroundImage='url(https://images.unsplash.com/photo-1534088568595-a066f410bcda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG92ZXJjYXN0JTIwY2xvdWRzfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60)'
            }
            else if(condition.textContent=='broken clouds'){
                document.body.style.backgroundImage='url(https://images.unsplash.com/photo-1502210600188-51a3adffa4aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fGJyb2tlbiUyMGNsb3Vkc3xlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60)'
            }
            else if(condition.textContent=='clear sky'){
                document.body.style.backgroundImage='url(https://images.unsplash.com/photo-1603883055407-968560f7522e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2xlYXIlMjBza3l8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60)'
            }
            else if(condition.textContent=='moderate rain'){
                document.body.style.backgroundImage='url(https://images.unsplash.com/photo-1525087740718-9e0f2c58c7ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJhdGUlMjByYWlufGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60)'
            }
            else if(condition.textContent=='light rain'){
                document.body.style.backgroundImage='url(https://images.unsplash.com/photo-1520410411446-44c453233260?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bGlnaHQlMjByYWlufGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60)'
            }
            else if(condition.textContent=='mist'){
                document.body.style.backgroundImage='url(https://images.unsplash.com/photo-1530569673472-307dc017a82d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWlzdHxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60)'
            }
            else if(condition.textContent=='foggy'){
                document.body.style.backgroundImage='url(https://images.unsplash.com/photo-1484402628941-0bb40fc029e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZvZ2d5fGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60)'
            }
            else if(condition.textContent=='thunderstorm'){
                document.body.style.backgroundImage='url(https://images.unsplash.com/photo-1580193813605-a5c78b4ee01a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fHRodW5kZXJzdG9ybXxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60)'
            }
            else if(condition.textContent=='frost'){
                document.body.style.backgroundImage='url(https://images.unsplash.com/photo-1611144139800-f98f81df49dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGZyb3N0fGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60)'
            }
            else if(condition.textContent=='blizzard'){
                document.body.style.backgroundImage='url(https://images.unsplash.com/photo-1547576962-9f4ee7e7a7c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmxpenphcmR8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60)'
            }
            else if(condition.textContent=='snow'){
                document.body.style.backgroundImage='url(https://images.unsplash.com/photo-1610607469437-14cdee392347?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGJsaXp6YXJkfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60)'
            }
    let variation=document.querySelector('#variation');
    variation.innerHTML='Min: '+`${Math.round(result.main.temp_min)}<span>°</span>`+", " + "Max: "+ `${Math.round(result.main.temp_max)}<span>°</span>`;
}
function getOurDate(){
    const myDate= new Date ();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let day = days[myDate.getDay()];
    let todayDate=myDate.getDate();
    let month=months[myDate.getMonth()];
    let year=myDate.getFullYear();
    let showDate=document.querySelector('#date');
    showDate.textContent=`${day}`+', '+`${month}`+' '+`${todayDate}`+', '+`${year}`;
}

