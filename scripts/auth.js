document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const role = document.getElementById('role').value;
    if (role === 'admin') {
        window.location.href = 'admin.html';
    } else if (role === 'visitor') {
        window.location.href = 'visitor.html';
    } else if (role === 'hr') {
        window.location.href = 'hr.html';
    }
});
