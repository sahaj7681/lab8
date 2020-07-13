// XMLHttpRequest
let request = new XMLHttpRequest();
request.open('GET','https://sahaj7681.github.io/lab8/products.json');
request.responseType = 'json';
request.send();


request.onload = function(){
		let res = request.response
		let dealsList = res.topDeals;
		document.getElementById('title').textContent=res.companyName;
		document.getElementById('address').textContent=res.headOffice;
		document.getElementById('est').textContent=res.established;
		let list = document.getElementById('weirdDeals');
		for (let i = 0; i < dealsList.length; i++) {
        let article = document.createElement('article');
        let title = document.createElement('h3');
        let image = document.createElement('img');
        let price = document.createElement('p');
        let features = document.createElement('p');
        image.setAttribute('src', 'https://sahaj7681.github.io/lab8/images/' + dealsList[i].image);
        title.textContent = dealsList[i].name;
        price.textContent = '$'+dealsList[i].price;
        features.textContent = dealsList[i].features;
        article.appendChild(image);
        article.appendChild(title);
        article.appendChild(price);
        article.appendChild(features);
        list.appendChild(article);
		}
};
