// Role selection
const roleCards = document.querySelectorAll('.role-card');
let selectedRole = 'mahasiswa';

roleCards.forEach(card => {
    card.addEventListener('click', () => {
        roleCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        selectedRole = card.dataset.role;
    });
});

// Set default role
roleCards[0].classList.add('active');

// Toggle password visibility
const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');

togglePassword.addEventListener('click', () => {
    const type = passwordInput.type === 'password' ? 'text' : 'password';
    passwordInput.type = type;
});

// Login form submission
const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation
    if (password !== '123456') {
        alert('Password salah. Gunakan password: 123456');
        return;
    }

    // Mock user data
    const users = {
        mahasiswa: {
            id: 1,
            username: username,
            name: 'Budi Santoso',
            role: 'mahasiswa',
            nim: '220101001'
        },
        dosen: {
            id: 2,
            username: username,
            name: 'Dr. Ahmad Fauzi',
            role: 'dosen',
            nip: '0123456789'
        },
        prodi: {
            id: 3,
            username: username,
            name: 'Kaprodi TI',
            role: 'prodi'
        },
        orang_tua: {
            id: 4,
            username: username,
            name: 'Orang Tua Budi',
            role: 'orang_tua'
        }
    };

    const user = users[selectedRole];

    // Save to localStorage
    localStorage.setItem('currentUser', JSON.stringify(user));

    // Redirect to appropriate dashboard
    const dashboardPages = {
        mahasiswa: 'dashboard-mahasiswa.html',
        dosen: 'dashboard-dosen.html',
        prodi: 'dashboard-prodi.html',
        orang_tua: 'dashboard-orangtua.html'
    };

    window.location.href = dashboardPages[selectedRole];
});
