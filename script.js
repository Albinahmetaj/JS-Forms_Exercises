(function() {
    const form = document.querySelector('#sectionForm');
    const checkboxes = form.querySelectorAll('input[type=checkbox]');
    const checkboxLength = checkboxes.length;
    const firstCheckbox = checkboxLength > 0 ? checkboxes[0] : null;

    function init() {
        if (firstCheckbox) {
            for (let i = 0; i < checkboxLength; i++) {
                checkboxes[i].addEventListener('change', checkValidity);
            }

            checkValidity();
        }
    }

    function isChecked() {
        for (let i = 0; i < checkboxLength; i++) {
            if (checkboxes[i].checked) return true;
        }

        return false;
    }

    function checkValidity() {
        const errorMessage = !isChecked() ? 'At least one checkbox must be selected.' : '';
        firstCheckbox.setCustomValidity(errorMessage);
    }

    init();
})();

function submitBday() {
    var Q4A = "Your birthdate is: ";
    var Bdate = document.getElementById('bday').value;
    var Bday = +new Date(Bdate);
    Q4A += Bdate + ". You are " + ~~ ((Date.now() - Bday) / (31557600000)) + " years old";
    var theBday = document.getElementById('resultBday');
    theBday.innerHTML = Q4A;
}

/*const button = document.querySelector(".btn");
var firstName = document.getElementById("fname");
var lastName = document.getElementById("lname");
//var button = document.getElementById("btn");

button.addEventListener("click", function(){
    localStorage.name = fname.value;
    localStorage.name = lname.value;
});
*/