// initial 宣告
var class_info = document.getElementById("class_info") // 整個班級列表
var student_info = document.getElementById("student_info") // 整個學生列表
var select = document.getElementById("select") // 選擇要班級列表或是學生列表
var student_info_list = [] // 存取所有學生的資訊
var class_info_list = []
var student_info_table = document.getElementById("student_info_table") // 顯示學生資訊的table
var class_info_table = document.getElementById("class_info_table") // 顯示班級資訊的table
var student_add_control = document.getElementById("student_add_control") // 新增學生的按鈕
var student_table_primary_or_secondary = 0 // table的樣式 0是primary 1 是secondary
var class_table_primary_or_secondary = 0
var class_add_control = document.getElementById("class_add_control") // 新增課程的按鈕

student_info.style.display = "none" // 先將學生列表葉面隱藏


select.addEventListener('change', changeSelector) // 監聽 選擇班級列表或是學生列表
student_add_control.addEventListener('click', student_add) //監聽 是否按了新增學生的按鈕
class_add_control.addEventListener('click', class_add) // 監聽 是否按了新增課程的按鈕

// 如果select = 0 顯示班級資訊 如果 = 1 顯示學生資訊 暫時寫死，等拿到後端資料再把它改好
function changeSelector() {
    var selected = select.options[select.selectedIndex].value
    if (selected == 0) {
        student_info.style.display = "none"
        class_info.style.display = "block"
    } else if (selected == 1) {
        class_info.style.display = "none"
        student_info.style.display = "block"
    }
}
// 新增學生的按鈕
function student_add() {
    // 學生的資訊
    var student_name = document.getElementById("student_name")
    var student_account = document.getElementById("student_account")
    var student_password = document.getElementById("student_password")
    var student_number = document.getElementById("student_number")
        // 學生資訊不能為空
    if (student_name.value == "" || student_password.value == "" || student_account.value == "" || student_number.value == "") {
        console.log("有空白")
    } else {
        // 新增學生資訊
        var obj = {}
        obj['student_name'] = student_name.value
        obj['student_account'] = student_account.value
        obj['student_password'] = student_password.value
        obj['student_number'] = student_number.value
        student_info_list.push(obj)

        // 製作新增的學生資訊並回傳到html
        var th_name = document.createElement('th')
        var td_school = document.createElement('td')
        var td_number = document.createElement('td')
        var td_grade = document.createElement('td')
        var td_btn = document.createElement('td')
        var btn = document.createElement('button')
        var tr = document.createElement('tr')
        var text = document.createTextNode(student_name.value)
        if (student_table_primary_or_secondary == 0) {
            tr.setAttribute('class', 'table-primary')
            student_table_primary_or_secondary = 1
        } else {
            tr.setAttribute('class', 'table-secondary')
            student_table_primary_or_secondary = 0
        }
        th_name.setAttribute('scope', 'row')
        th_name.appendChild(text)
        text = document.createTextNode(student_account.value)
        td_school.appendChild(text)
        text = document.createTextNode(student_password.value)
        td_number.appendChild(text)
        text = document.createTextNode(student_number.value)
        td_grade.appendChild(text)
        btn.setAttribute('class', 'btn btn-outline-danger btn-sm')
        text = document.createTextNode("刪除")
        btn.appendChild(text)
        td_btn.appendChild(btn)
        tr.appendChild(th_name)
        tr.appendChild(td_school)
        tr.appendChild(td_number)
        tr.appendChild(td_grade)
        tr.appendChild(td_btn)
        student_info_table.appendChild(tr)
    }
}

function class_add() {
    var class_id = document.getElementById("class_id")
    var class_name = document.getElementById("class_name")
    var class_member_count = document.getElementById("class_member_count")
    var class_eqipment_count = document.getElementById("class_eqipment_count")
        // 班級資訊不能為空
    if (class_name.value == "") {
        console.log("有空白")
    } else {
        // 新增班級資訊
        var obj = {}
            // obj['class_id'] = class_id.value
        obj['class_name'] = class_name.value
            // obj['class_member_count'] = class_member_count.value
            // obj['class_eqipment_count'] = class_eqipment_count.value
        class_info_list.push(obj)

        // 製作新增的學生資訊並回傳到html
        // var th_id = document.createElement('th')
        var td_name = document.createElement('td')
            // var td_member_count = document.createElement('td')
            // var td_equipment_count = document.createElement('td')
        var td_btn = document.createElement('td')
        var btn = document.createElement('button')
        var tr = document.createElement('tr')
            // var text = document.createTextNode(class_id.value)
        if (class_table_primary_or_secondary == 0) {
            tr.setAttribute('class', 'table-primary')
            class_table_primary_or_secondary = 1
        } else {
            tr.setAttribute('class', 'table-secondary')
            class_table_primary_or_secondary = 0
        }
        // th_id.setAttribute('scope', 'row')
        // th_id.appendChild(text)
        text = document.createTextNode(class_name.value)
        td_name.appendChild(text)
            // text = document.createTextNode(class_member_count.value)
            // td_member_count.appendChild(text)
            // text = document.createTextNode(class_eqipment_count.value)
            // td_equipment_count.appendChild(text)
        btn.setAttribute('class', 'btn btn-outline-danger btn-sm')
        text = document.createTextNode("刪除")
        btn.appendChild(text)
        td_btn.appendChild(btn)
            // tr.appendChild(th_id)
        tr.appendChild(td_name)
            // tr.appendChild(td_member_count)
            // tr.appendChild(td_equipment_count)
        tr.appendChild(td_btn)
        class_info_table.appendChild(tr)
    }
}