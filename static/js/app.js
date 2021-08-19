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





for (var i in data){
    addRow(data[i])
}

function addRow(obj){
    var row = `<tr scope="row" class="test-row-${obj.id}">
                   <td>${obj.name}</td>
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


function deleteTest(){
    var testid = $(this).data('testid')

    var deleteBtn = $(`#delete-${testid}`)
    var saveBtn = $(`#save-${testid}`)
    var cancelBtn = $(`#cancel-${testid}`)
    var confirmBtn = $(`#confirm-${testid}`)

    deleteBtn.addClass('hidden')
    saveBtn.addClass('hidden')

    cancelBtn.removeClass('hidden')
    confirmBtn.removeClass('hidden')

    var row = $(`.test-row-${testid}`)
    row.css('background-color', '#111734')

    
}

function cancelDeletion(){
    var testid = $(this).data('testid')

    var deleteBtn = $(`#delete-${testid}`)
    var saveBtn = $(`#save-${testid}`)
    var cancelBtn = $(`#cancel-${testid}`)
    var confirmBtn = $(`#confirm-${testid}`)

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