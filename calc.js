function insert(num) {
   document.getElementById('test').value += num;
    
}

    function clean() {
        document.getElementById('test').value = '';
    }

    function back() {
        var exp = document.form.textview.value;
        document.form.textview.value = exp.substring(0,exp.length-1);
    }

    function equal() {
        var exp = document.form.textview.value;
        if(exp) {
            document.form.textview.value = eval(exp);
        }
    }