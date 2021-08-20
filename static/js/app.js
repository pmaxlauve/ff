// var newId = 4
// var newTest = {'name':null, 'id':newId, 'result':null}

// $('#add-test').on('click', function(){
//     $('.form-wrapper').removeClass('hidden')
// })


// $('#test-result').on('keyup', function(){
//     newTest.result = $(this).val()
//     console.log(newTest)

// })

// $('#test-name').on('change', function(){
//     newTest.name = $(this).val()
//     console.log(newTest)
// })

// $('#create-test').on('click', function(){
//     if(newTest.name == null){
//         alert('No test selected!')
//     }else{
//         addRow(newTest)
//         $('#test-name').val('')
//         $('#test-result').val('')
//         $('.form-wrapper').addClass('hidden')
//     }
// })


// https://www.google.com/search?q=dalvin+cook+CAR+news


for (var i in data){
    addRow(data[i])
}

function addRow(obj){
    var row = `<tr scope="row" class="test-row-${obj.id} pos-${obj.pos}">
                   <td><a href="https://www.fantasypros.com/nfl/players/${obj.name.toLowerCase().replaceAll(' ', '-')}.php" onClick="return popup(this, 'notes')">${obj.name}</a></td>
                   <td>${obj.pos}</td>
                   <td>${obj.rank}</td>
                   <td>${obj.tier}</td>
                   <td>${obj.ecr}</td>
                   <td>${obj.team}</td>
                   <td>${obj.bye}</td>
                   <td>
                           <button class="btn btn-sm btn-danger" data-testid=${obj.id} id="delete-${obj.id}">Remove</button>
                           <button class="btn btn-sm btn-info" data-testid=${obj.id}  id="save-${obj.id}">Draft</button>
                           
                           <button class="btn btn-sm btn-danger hidden" data-testid="${obj.id}"  id="cancel-${obj.id}">Cancel</button>
                           <button class="btn btn-sm btn-primary hidden" data-testid="${obj.id}"  id="confirm-${obj.id}">Confirm</button>
                           
                   </td>
               </tr>`
    $('#tests-table').append(row)

    
    $(`#delete-${obj.id}`).on('click', deleteTest)
    $(`#cancel-${obj.id}`).on('click', cancelDeletion)
    $(`#confirm-${obj.id}`).on('click', confirmDeletion)
    $(`#save-${obj.id}`).on('click', saveUpdate)

    var all = d3.select(".filterAll")
    var rb = d3.select(".filterRb")
    var wr = d3.select(".filterWr")
    var qb = d3.select(".filterQb")
    var te = d3.select(".filterTe")
    
    
    all.on('click', filterAll)
    rb.on('click', filterRb)
    wr.on('click', filterWr)
    qb.on('click', filterQb)
    te.on('click', filterTe)
    
    


function filterAll(){

    var rbRow = $(`.pos-RB`)
    var wrRow = $(`.pos-WR`)
    var qbRow = $(`.pos-QB`)
    var teRow = $(`.pos-TE`)

    wrRow.removeClass('hidden')
    qbRow.removeClass('hidden')
    teRow.removeClass('hidden')
    rbRow.removeClass('hidden')
        
}

function filterQb(){

    var rbRow = $(`.pos-RB`)
    var wrRow = $(`.pos-WR`)
    var qbRow = $(`.pos-QB`)
    var teRow = $(`.pos-TE`)

    wrRow.addClass('hidden')
    qbRow.removeClass('hidden')
    teRow.addClass('hidden')
    rbRow.addClass('hidden')
        
}

function filterWr(){

    var rbRow = $(`.pos-RB`)
    var wrRow = $(`.pos-WR`)
    var qbRow = $(`.pos-QB`)
    var teRow = $(`.pos-TE`)

    wrRow.removeClass('hidden')
    qbRow.addClass('hidden')
    teRow.addClass('hidden')
    rbRow.addClass('hidden')
     
}

function filterTe(){

    var rbRow = $(`.pos-RB`)
    var wrRow = $(`.pos-WR`)
    var qbRow = $(`.pos-QB`)
    var teRow = $(`.pos-TE`)

    wrRow.addClass('hidden')
    qbRow.addClass('hidden')
    teRow.removeClass('hidden')
    rbRow.addClass('hidden')
     
}

function filterRb(){

    var rbRow = $(`.pos-RB`)
    var wrRow = $(`.pos-WR`)
    var qbRow = $(`.pos-QB`)
    var teRow = $(`.pos-TE`)

    wrRow.addClass('hidden')
    qbRow.addClass('hidden')
    teRow.addClass('hidden')
    rbRow.removeClass('hidden')
    
}

    // $(`#result-${obj.id}`).on('click', editResult)
    
}

// function editResult(){
//     var testid = $(this).data('testid')
//     var value = $(this).html()

//     $(this).unbind()
//     $(this).html(`<input class="result form-control" data-testid="${testid}" type="text" value="${value}">`)

//     $(`.result`).on('keyup', function(){
//         var testid = $(this).data('testid')
//         var saveBtn = $(`#save-${testid}`)
//         saveBtn.prop('disabled', false)

//     })

// }

function saveUpdate(){
    console.log('Saved!')
    var testid = $(this).data('testid')
    var saveBtn = $(`#save-${testid}`)
    var row = $(`.test-row-${testid}`)

    saveBtn.prop('disabled', true)
    
    row.css('opacity', "0.5")
    row.css('background-color', '#111734')

    // setTimeout(function(){
    //     row.css('opacity', '1')
    // }, 2000)


}


// function colorChange(){
//     var testid = $(this).data('testid')
    
//     var row = $(`.test-row-${testid}`)

//     row.css('background-color', '#65291B')

// }


function popup(mylink, windowname) { 
    if (! window.focus)return true; 
    var href; 
    if (typeof(mylink) == 'string') href=mylink; 
    else href=mylink.href; window.open(href, windowname, 'width=1200,height=1200,scrollbars=yes,top=150,left=900'); 
    return false; }



function deleteTest(){
    var testid = $(this).data('testid')

    var deleteBtn = $(`#delete-${testid}`)
    var saveBtn = $(`#save-${testid}`)
    var cancelBtn = $(`#cancel-${testid}`)
    var confirmBtn = $(`#confirm-${testid}`)
    var row = $(`.test-row-${testid}`)

    row.css('background-color', '#65291B')

    deleteBtn.addClass('hidden')
    saveBtn.addClass('hidden')

    cancelBtn.removeClass('hidden')
    confirmBtn.removeClass('hidden')

    

    

    
}

function cancelDeletion(){
    var testid = $(this).data('testid')

    var deleteBtn = $(`#delete-${testid}`)
    var saveBtn = $(`#save-${testid}`)
    var cancelBtn = $(`#cancel-${testid}`)
    var confirmBtn = $(`#confirm-${testid}`)
    var row = $(`.test-row-${testid}`)

    row.css('background-color', 'rgba(255,255,255,0)')

    deleteBtn.removeClass('hidden')
    saveBtn.removeClass('hidden')

    cancelBtn.addClass('hidden')
    confirmBtn.addClass('hidden')

}

function confirmDeletion(){
    var testid = $(this).data('testid')
    var row = $(`.test-row-${testid}`)
    row.remove()

}