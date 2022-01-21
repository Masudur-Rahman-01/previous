//  Age Calculator start here
const sign_up_form = document.getElementById('sign_up_form');
const output = document.getElementById('output');
const name = document.getElementById('name')

sign_up_form.addEventListener('submit', function (e) {
    e.preventDefault()

    let date = this.querySelector('input[type="date"]').value;
    let time = this.querySelector('input[type="time"]').value;
      
    if (name.value == '' || date.value == '' || time.value == '') {
        output.innerHTML = `<p class = 'alert alert-danger'>All fields are required</p>`
    } else{
        let start_time = new Date()
    let end_time = new Date(date + ' ' + time);
        
    let time_diff = Math.floor(Math.abs(end_time.getTime() - start_time.getTime()));

    let total_sec = Math.floor(time_diff / 1000);
    let total_min = Math.floor(total_sec / 60);
    let total_hour = Math.floor(total_min / 60);
    let total_day = Math.floor(total_hour / 24);
        
    let total_month = Math.floor(total_day / 30);
    let total_year = Math.floor(total_month / 12);
        
      
    let month = total_month - (total_year * 12)
    let day = total_day - (total_year * 12 * 30 ) - (month * 30)    

    
        output.innerHTML = ` <p class= 'alert alert-success'>
        Hi, ${name.value}, You are ${zero(total_year)} year, ${zero(month)} month & ${zero(day)} days old.
        
        </p> `
    }
})
//  Age Calculator end here

// - Product with LS start here
const product_list = document.getElementById('product_list');

let products = getData('products');

products.map(data => {
    product_list.innerHTML += `
    <div class="col-md-3">
            <div class="card shadow">
                <img class="card-image" src="${data.photo}" alt="">
            
                <div class="card-body">
                    <h4> ${data.name}</h4>
                    <p> <span class="regular_price text-danger mr-3">$${data.price}</span><span class="sale_price">$${data.sale}</span></p>
                    
                    <hr>
                    <button class="btn btn-success">Add to cart</button>
                </div>
            </div>
        </div>
    `
})
// - Product with LS end here

//- Team member with LS start here
const member_list = document.getElementById('member_list');


// get data from local storage
let members = getData('members');

members.map(data => {
    member_list.innerHTML += `
    <div class="col-md-4 col-lg-3">
            <div class="card shadow">
                <img class="card-image" src="${data.photo}" alt="">
            
                <div class="card-body">
                    <h4> ${data.name}</h4>
                    <p class="bg-info text-white p-1">${data.skill}</p>

                    <p> <span class="regular_price text-danger mr-3">$500</span><span class="sale_price">$350</span></p>
                    
                    <hr>
                    <button class="btn btn-success">Add to cart</button>
                </div>
            </div>
    </div>  
    
    `
})

//- Team member with LS end here


