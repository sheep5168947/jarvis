var student_add_control = document.getElementById("student_add_control") // 新增學生的按鈕
var student_info_table = document.getElementById("student_info_table") // 顯示學生資訊的table
var student_info_list = [] // 存取所有學生的資訊
var student_table_primary_or_secondary = 0 // table的樣式 0是primary 1 是secondary
student_add_control.addEventListener('click', student_add) //監聽 是否按了新增學生的按鈕

// 新增學生的按鈕
function student_add() {
    // 學生的資訊
    var student_name = document.getElementById("student_name")
    var student_school = document.getElementById("student_school")
    var student_number = document.getElementById("student_number")
    var student_grade = document.getElementById("student_grade")
        // 學生資訊不能為空
    if (student_name.value == "" || student_number.value == "" || student_school.value == "" || student_grade.value == "") {
        console.log("有空白")
    } else {
        // 新增學生資訊
        var obj = {}
        obj['student_name'] = student_name.value
        obj['student_school'] = student_school.value
        obj['student_number'] = student_number.value
        obj['student_grade'] = student_grade.value
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
        text = document.createTextNode(student_school.value)
        td_school.appendChild(text)
        text = document.createTextNode(student_number.value)
        td_number.appendChild(text)
        text = document.createTextNode(student_grade.value)
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