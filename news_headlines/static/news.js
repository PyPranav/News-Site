fetch('../static/news.json')
.then(data => data.json())
.then(Data => {
    str=''
    console.log(Data.length);
    for (let z=0; z<Data.length; z++)
    {
        data = Data[z];
        str += `
                <div class="card post bg-primary shadow-soft border-light my-3" target="_blank" onclick="window.open('${data.url}')">
                <div class="row no-gutters align-items-center hov">
                    <div class="col-md-4">
                        <img src="${data.urlToImage}">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h3 class="h5 card-title">${data.title}</h3>

                            <p class="card-text mb-4">
                                ${data.description}
                            </p>
                            <div class="d-flex justify-content-between align-items-center">
                                <span class="card-text small">
                                    <span class="far fa-calendar-alt mr-2">

                                    </span>
                                    ${data.source.name}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        `
        // console.log(z);
    }
    document.getElementById("holder").innerHTML = str;
})
