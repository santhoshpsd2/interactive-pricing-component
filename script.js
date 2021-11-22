const switchevent = document.querySelector('.switch');
const toggleswitch = document.querySelector('.checkbox');

const rangeslider = document.querySelector('.pricerange');

const tenure = document.querySelector('.per');
const price = document.querySelector('.price');

const pageviewele = document.querySelector('.pageviews');
const pageviews = ['20K','50k','100k','150k','Unlimited'];
const pricepermonth = [0,8,16,24,30];

let yearsub = false;

toggleswitch.addEventListener('click',()=>{
    if(toggleswitch.checked){
        yearsub = true;
        tenure.textContent = "/year";
        const str = price.innerText;
        let monthly = str.replace(/[$.00 ]/g, "");
        price.innerText = `$${toyear(+monthly)}.00`;
    }else{
        yearsub = false;
        tenure.textContent = "/month"
        const str = price.innerText;
        let yearly = str.replace(/[$.00 ]/g, "");
        price.innerText = `$${tomonth(+yearly)}.00`;
    }
})


function toyear(month){
    let yearly = (month * 12) * 0.75;
    return yearly;
}

function tomonth(year){
    let monthly = ((year/75) * 100)/12;
    return monthly;
}

rangeslider.oninput = function(){
    
    let inputval = this.value;
    let percent = (inputval/4)*100;
    this.style.background = `linear-gradient(
        90deg,
        hsl(174, 86%, 45%) ${percent}%,
        hsl(174, 77%, 80%) ${percent}%
      )`;
      
    pageviewele.innerText = pageviews[inputval];
    if(!yearsub){
        price.innerText =`$${pricepermonth[inputval]}.00`;
    }else{
        price.innerText=`$${toyear(pricepermonth[inputval])}.00`;
    }
}
