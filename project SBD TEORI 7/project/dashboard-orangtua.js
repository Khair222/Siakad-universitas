// 1. CEK USER & DATA DIRI (Sama seperti sebelumnya)
const currentUser = JSON.parse(localStorage.getItem('currentUser')) || { 
    name: 'Bapak Santoso', 
    role: 'orang_tua', 
    email: 'santoso@mail.com', 
    phone: '0812-3456-7890' 
};

// Update info user di Sidebar
if(document.getElementById('userName')) document.getElementById('userName').textContent = currentUser.name;
if(document.getElementById('userAvatar')) document.getElementById('userAvatar').textContent = currentUser.name.charAt(0);

// Logout functionality
const logoutBtn = document.getElementById('logoutBtn');
if(logoutBtn) {
    logoutBtn.addEventListener('click', () => {
        localStorage.removeItem('currentUser');
        window.location.href = 'index.html';
    });
}

// ---------------------------------------------------------
// 2. LOGIKA BARU: NOTIFIKASI DROPDOWN
// ---------------------------------------------------------
const notifBtn = document.getElementById('notifBtn');
const notifDropdown = document.getElementById('notifDropdown');
const notifBadge = document.getElementById('notifBadge');

if (notifBtn && notifDropdown) {
    // Toggle menu saat tombol lonceng diklik
    notifBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Mencegah event bubbling
        notifDropdown.classList.toggle('show');
    });

    // Tutup menu jika klik di luar area notifikasi
    document.addEventListener('click', (e) => {
        if (!notifDropdown.contains(e.target) && !notifBtn.contains(e.target)) {
            notifDropdown.classList.remove('show');
        }
    });
}

// Fungsi dummy untuk "Tandai baca semua"
window.markAllRead = function() {
    const items = document.querySelectorAll('.notif-item.unread');
    items.forEach(item => {
        item.classList.remove('unread');
        item.style.opacity = '0.6';
    });
    if(notifBadge) notifBadge.style.display = 'none';
    alert('Semua notifikasi ditandai sudah dibaca.');
};

// ---------------------------------------------------------
// 3. LOGIKA NAVIGASI (DIPERBARUI)
// ---------------------------------------------------------
const navItems = document.querySelectorAll('.nav-item[data-page]');
const mainContent = document.getElementById('mainContent');
const settingsBtn = document.getElementById('settingsBtn');

// Listener untuk menu sidebar utama (Dashboard, Jadwal, dll)
navItems.forEach(item => {
    item.addEventListener('click', () => {
        // Reset semua tombol active
        navItems.forEach(nav => nav.classList.remove('active'));
        if(settingsBtn) settingsBtn.classList.remove('active');
        
        // Set tombol ini jadi active
        item.classList.add('active');
        
        // Load halaman sesuai data-page
        const page = item.dataset.page;
        loadPage(page);
    });
});

// Listener KHUSUS untuk tombol Pengaturan
if (settingsBtn) {
    settingsBtn.addEventListener('click', () => {
        // Reset tombol sidebar lain
        navItems.forEach(nav => nav.classList.remove('active'));
        
        // Set tombol pengaturan jadi active
        settingsBtn.classList.add('active');
        
        // Load halaman pengaturan
        loadPage('pengaturan');
    });
}

// Router Sederhana
function loadPage(page) {
    // Tutup notifikasi jika sedang terbuka saat pindah halaman
    if(notifDropdown) notifDropdown.classList.remove('show');

    switch(page) {
        case 'dashboard':
            loadDashboard();
            break;
        case 'jadwal':
            loadJadwal();
            break;
        case 'nilai':
            loadNilai();
            break;
        case 'kehadiran':
            loadKehadiran();
            break;
        case 'khs':
            loadKHS();
            break;
        case 'kontak':
            loadKontak();
            break;
        case 'pengaturan': // CASE BARU
            loadPengaturan();
            break;
        default:
            loadDashboard();
    }
}

// ---------------------------------------------------------
// 4. KONTEN HALAMAN (SEMUA FITUR LAMA + BARU)
// ---------------------------------------------------------

// A. DASHBOARD (Original Code)
function loadDashboard() {
    mainContent.innerHTML = `
        <div class="stats-grid">
            <div class="stat-card-dashboard">
                <div class="stat-header">
                    <div class="stat-info">
                        <p>IPK Anak Saat Ini</p>
                        <h3>3.75</h3>
                        <div class="stat-detail" style="color: #059669;">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display: inline;">
                                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
                                <polyline points="17 6 23 6 23 12"/>
                            </svg>
                            Sangat Memuaskan
                        </div>
                    </div>
                    <div class="stat-icon emerald">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                        </svg>
                    </div>
                </div>
            </div>

            <div class="stat-card-dashboard">
                <div class="stat-header">
                    <div class="stat-info">
                        <p>Kehadiran Anak</p>
                        <h3>92%</h3>
                        <div class="stat-detail">Aman (Min. 75%)</div>
                    </div>
                    <div class="stat-icon green">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="9 11 12 14 22 4"/>
                            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
                        </svg>
                    </div>
                </div>
            </div>

            <div class="stat-card-dashboard">
                <div class="stat-header">
                    <div class="stat-info">
                        <p>Status Pembayaran</p>
                        <h3 style="color: #059669; font-size: 24px;">Lunas</h3>
                        <div class="stat-detail">Semester 5</div>
                    </div>
                    <div class="stat-icon blue">
                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="2" y="4" width="20" height="16" rx="2"/>
                            <line x1="12" y1="11" x2="12" y2="17"/>
                            <line x1="8" y1="11" x2="8" y2="17"/>
                            <line x1="16" y1="11" x2="16" y2="17"/>
                        </svg>
                    </div>
                </div>
            </div>

             <div class="stat-card-dashboard">
                <div class="stat-header">
                    <div class="stat-info">
                        <p>Peringatan Akademik</p>
                        <h3>0</h3>
                        <div class="stat-detail" style="color: #6b7280;">Tidak ada masalah</div>
                    </div>
                    <div class="stat-icon" style="background: #e5e7eb; color: #374151;">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                            <line x1="12" y1="9" x2="12" y2="13"/>
                            <line x1="12" y1="17" x2="12.01" y2="17"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header">
                <h3 class="card-title">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display: inline; vertical-align: middle; margin-right: 8px;">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                        <line x1="16" y1="2" x2="16" y2="6"/>
                        <line x1="8" y1="2" x2="8" y2="6"/>
                        <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                    Jadwal Kuliah Anak Hari Ini
                </h3>
            </div>
            <div class="schedule-list">
                <div class="schedule-item" style="padding: 16px; border-left: 4px solid #059669; background: #ecfdf5; border-radius: 8px; margin-bottom: 16px;">
                    <div style="display: flex; justify-content: between; align-items: start;">
                        <div style="flex: 1;">
                            <span class="badge badge-success" style="margin-bottom: 8px;">Sedang Berlangsung</span>
                            <h4 style="font-weight: 700; margin-bottom: 8px;">Pemrograman Web</h4>
                            <div style="display: grid; gap: 4px; font-size: 14px; color: #6b7280;">
                                <div>武 08:00 - 10:30</div>
                                <div>桃 Lab 3.1 (Anak anda seharusnya berada disini)</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="schedule-item" style="padding: 16px; border-left: 4px solid #d1d5db; background: #f9fafb; border-radius: 8px;">
                     <h4 style="font-weight: 700; margin-bottom: 8px;">Basis Data Lanjut</h4>
                    <div style="display: grid; gap: 4px; font-size: 14px; color: #6b7280;">
                        <div>武 10:45 - 12:15</div>
                        <div>桃 Ruang 301</div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// B. JADWAL (Original Code)
function loadJadwal() {
    mainContent.innerHTML = `
        <div class="card-header" style="margin-bottom: 24px;">
            <div>
                <h2 style="font-size: 24px; font-weight: 700; margin-bottom: 4px;">Jadwal Kuliah Anak</h2>
                <p style="color: #6b7280;">Memastikan jadwal perkuliahan anak Anda</p>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">Jadwal Mingguan</h3>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Hari</th>
                        <th>Mata Kuliah</th>
                        <th>Waktu</th>
                        <th>Ruangan</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="font-weight: 600;">Senin</td>
                        <td>Pemrograman Web</td>
                        <td>08:00 - 10:30</td>
                        <td>Lab 3.1</td>
                    </tr>
                    <tr>
                        <td style="font-weight: 600;">Senin</td>
                        <td>Basis Data Lanjut</td>
                        <td>10:45 - 12:15</td>
                        <td>Ruang 301</td>
                    </tr>
                    <tr>
                        <td style="font-weight: 600;">Rabu</td>
                        <td>Sistem Operasi</td>
                        <td>08:00 - 10:30</td>
                        <td>Lab 3.3</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;
}

// C. NILAI (Original Code)
function loadNilai() {
    mainContent.innerHTML = `
        <div class="card-header" style="margin-bottom: 24px;">
            <div>
                <h2 style="font-size: 24px; font-weight: 700; margin-bottom: 4px;">Monitoring Nilai</h2>
                <p style="color: #6b7280;">Hasil penilaian studi anak per mata kuliah</p>
            </div>
             <button class="btn btn-primary" onclick="alert('Mengunduh laporan...')">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Unduh Laporan Nilai
            </button>
        </div>

        <div class="card">
             <div class="card-header">
                <h3 class="card-title">Daftar Nilai Semester 5</h3>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Mata Kuliah</th>
                        <th style="text-align: center;">Tugas</th>
                        <th style="text-align: center;">UTS</th>
                        <th style="text-align: center;">UAS</th>
                        <th style="text-align: center;">Nilai Akhir</th>
                        <th style="text-align: center;">Grade</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="font-weight: 600;">Pemrograman Web</td>
                        <td style="text-align: center;">85</td>
                        <td style="text-align: center;">82</td>
                        <td style="text-align: center;">86</td>
                        <td style="text-align: center; font-weight: 700;">85</td>
                        <td style="text-align: center;"><span class="badge badge-success">A</span></td>
                    </tr>
                    <tr>
                        <td style="font-weight: 600;">Basis Data Lanjut</td>
                        <td style="text-align: center;">90</td>
                        <td style="text-align: center;">88</td>
                        <td style="text-align: center;">87</td>
                        <td style="text-align: center; font-weight: 700;">87</td>
                        <td style="text-align: center;"><span class="badge badge-success">A</span></td>
                    </tr>
                    <tr>
                        <td style="font-weight: 600;">Jaringan Komputer</td>
                        <td style="text-align: center;">78</td>
                        <td style="text-align: center;">75</td>
                        <td style="text-align: center;">80</td>
                        <td style="text-align: center; font-weight: 700;">78</td>
                        <td style="text-align: center;"><span class="badge badge-info">B+</span></td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;
}

// D. KEHADIRAN (Original Code)
function loadKehadiran() {
    mainContent.innerHTML = `
        <div class="card-header" style="margin-bottom: 24px;">
            <div>
                <h2 style="font-size: 24px; font-weight: 700; margin-bottom: 4px;">Monitoring Kehadiran</h2>
                <p style="color: #6b7280;">Rekapitulasi absensi anak</p>
            </div>
        </div>

        <div class="stats-grid">
             <div class="stat-card-dashboard">
                <div class="stat-header">
                    <div class="stat-info">
                        <p>Total Hadir</p>
                        <h3>65</h3>
                        <div class="stat-detail">dari 70 pertemuan</div>
                    </div>
                    <div class="stat-icon green">
                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="20 6 9 17 4 12"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="stat-card-dashboard">
                <div class="stat-header">
                    <div class="stat-info">
                        <p>Total Alpha (Tanpa Keterangan)</p>
                        <h3 style="color: #dc2626;">2</h3>
                        <div class="stat-detail">Perlu diperhatikan</div>
                    </div>
                    <div class="stat-icon" style="background: #fee2e2; color: #dc2626;">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                             <circle cx="12" cy="12" r="10"/>
                            <line x1="15" y1="9" x2="9" y2="15"/>
                            <line x1="9" y1="9" x2="15" y2="15"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header">
                <h3 class="card-title">Detail Kehadiran per Mata Kuliah</h3>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Mata Kuliah</th>
                        <th style="text-align: center;">Hadir</th>
                        <th style="text-align: center;">Ijin</th>
                        <th style="text-align: center;">Sakit</th>
                        <th style="text-align: center;">Alpha</th>
                        <th style="text-align: center;">Persentase</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="font-weight: 600;">Pemrograman Web</td>
                        <td style="text-align: center; color: #16a34a;">13</td>
                        <td style="text-align: center;">0</td>
                        <td style="text-align: center;">1</td>
                        <td style="text-align: center; color: #dc2626; font-weight: 700;">0</td>
                        <td style="text-align: center;"><span class="badge badge-success">93%</span></td>
                    </tr>
                    <tr>
                        <td style="font-weight: 600;">Jaringan Komputer</td>
                        <td style="text-align: center; color: #16a34a;">12</td>
                        <td style="text-align: center;">1</td>
                        <td style="text-align: center;">0</td>
                        <td style="text-align: center; color: #dc2626; font-weight: 700;">1</td>
                        <td style="text-align: center;"><span class="badge badge-success">86%</span></td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;
}

// E. KHS (Original Code)
function loadKHS() {
     mainContent.innerHTML = `
        <div class="card-header" style="margin-bottom: 24px;">
            <div>
                <h2 style="font-size: 24px; font-weight: 700; margin-bottom: 4px;">Kartu Hasil Studi (KHS)</h2>
                <p style="color: #6b7280;">Rekap hasil studi anak per semester</p>
            </div>
        </div>
        
        <div class="card">
            <table>
                <thead>
                    <tr>
                        <th>Semester</th>
                        <th style="text-align: center;">SKS Diambil</th>
                        <th style="text-align: center;">IPK Semester (IPS)</th>
                        <th style="text-align: center;">IPK Kumulatif</th>
                        <th style="text-align: center;">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="font-weight: 600;">Semester 1</td>
                        <td style="text-align: center;">20</td>
                        <td style="text-align: center;">3.65</td>
                        <td style="text-align: center;">3.65</td>
                         <td style="text-align: center;"><button class="btn btn-sm btn-secondary">Lihat Detail</button></td>
                    </tr>
                    <tr>
                        <td style="font-weight: 600;">Semester 4</td>
                        <td style="text-align: center;">21</td>
                        <td style="text-align: center;">3.80</td>
                        <td style="text-align: center;">3.73</td>
                         <td style="text-align: center;"><button class="btn btn-sm btn-secondary">Lihat Detail</button></td>
                    </tr>
                     <tr>
                        <td style="font-weight: 600;">Semester 5 (Berjalan)</td>
                        <td style="text-align: center;">21</td>
                        <td style="text-align: center;">-</td>
                        <td style="text-align: center;">3.75</td>
                         <td style="text-align: center;"><button class="btn btn-sm btn-secondary">Lihat Detail</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
     `;
}

// F. KONTAK DOSEN (Original Code)
function loadKontak() {
    mainContent.innerHTML = `
        <div class="card-header" style="margin-bottom: 24px;">
            <div>
                <h2 style="font-size: 24px; font-weight: 700; margin-bottom: 4px;">Kontak Dosen Wali</h2>
                <p style="color: #6b7280;">Hubungi dosen wali jika ada kendala akademik pada anak</p>
            </div>
        </div>

        <div class="card" style="max-width: 600px;">
            <div style="display: flex; gap: 24px; padding: 24px; align-items: center;">
                <div style="width: 80px; height: 80px; background: #e5e7eb; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 32px; color: #6b7280; font-weight: 700;">
                    AF
                </div>
                <div>
                    <h3 style="font-size: 20px; font-weight: 700; margin-bottom: 4px;">Dr. Ahmad Fauzi</h3>
                    <p style="color: #059669; font-weight: 600; margin-bottom: 12px;">Dosen Wali Kelas TI-5A</p>
                    
                    <div style="display: grid; gap: 12px;">
                        <div style="display: flex; align-items: center; gap: 12px; color: #4b5563;">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                            </svg>
                            <span>0812-3456-7890</span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 12px; color: #4b5563;">
                             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                                <polyline points="22,6 12,13 2,6"/>
                            </svg>
                            <span>ahmad.fauzi@usu.ac.id</span>
                        </div>
                         <div style="display: flex; align-items: center; gap: 12px; color: #4b5563;">
                             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                                <circle cx="12" cy="10" r="3"/>
                            </svg>
                            <span>Ruang Dosen 2, Gedung A Lantai 2</span>
                        </div>
                    </div>
                    
                    <div style="margin-top: 24px;">
                        <button class="btn btn-primary" onclick="window.location.href='mailto:ahmad.fauzi@usu.ac.id'">Kirim Email</button>
                        <button class="btn btn-secondary">Jadwalkan Temu Janji</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// G. PENGATURAN (FITUR BARU)
function loadPengaturan() {
    mainContent.innerHTML = `
        <div class="card-header" style="margin-bottom: 24px;">
            <div>
                <h2 style="font-size: 24px; font-weight: 700; margin-bottom: 4px;">Pengaturan Akun</h2>
                <p style="color: #6b7280;">Kelola profil, keamanan, dan preferensi notifikasi Anda.</p>
            </div>
        </div>

        <div class="card settings-section">
            <div class="card-header">
                <h3 class="card-title">Profil Pengguna</h3>
            </div>
            <form onsubmit="event.preventDefault(); alert('Profil berhasil disimpan!');">
                <div class="settings-grid">
                    <div class="form-group">
                        <label>Nama Lengkap</label>
                        <input type="text" value="${currentUser.name}" style="background-color: #f3f4f6;">
                    </div>
                    <div class="form-group">
                        <label>Email Terdaftar</label>
                        <input type="text" value="${currentUser.email}" readonly style="background-color: #e5e7eb; cursor: not-allowed;">
                    </div>
                    <div class="form-group">
                        <label>Nomor HP</label>
                        <input type="text" value="${currentUser.phone}">
                    </div>
                    <div class="form-group">
                        <label>Alamat</label>
                        <input type="text" value="Jl. Dr. Mansyur No. 9, Medan">
                    </div>
                </div>
                <div style="text-align: right; margin-top: 16px;">
                    <button class="btn btn-primary">Simpan Perubahan Profil</button>
                </div>
            </form>
        </div>

        <div class="card settings-section">
            <div class="card-header">
                <h3 class="card-title">Keamanan (Ganti Password)</h3>
            </div>
            <form onsubmit="event.preventDefault(); handlePasswordChange();">
                <div class="form-group password-input-group">
                    <label>Password Lama</label>
                    <input type="password" id="oldPass" placeholder="Masukkan password lama">
                    <button type="button" class="password-toggle-btn" onclick="togglePassword('oldPass', this)">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                    </button>
                </div>
                <div class="settings-grid">
                    <div class="form-group password-input-group">
                        <label>Password Baru</label>
                        <input type="password" id="newPass" placeholder="Minimal 8 karakter">
                        <button type="button" class="password-toggle-btn" onclick="togglePassword('newPass', this)">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                        </button>
                    </div>
                    <div class="form-group password-input-group">
                        <label>Konfirmasi Password Baru</label>
                        <input type="password" id="confirmPass" placeholder="Ulangi password baru">
                        <button type="button" class="password-toggle-btn" onclick="togglePassword('confirmPass', this)">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                        </button>
                    </div>
                </div>
                <div style="text-align: right; margin-top: 16px;">
                    <button class="btn btn-primary">Update Password</button>
                </div>
            </form>
        </div>

        <div class="card settings-section">
            <div class="card-header">
                <h3 class="card-title">Preferensi Notifikasi</h3>
            </div>
            <div style="display: flex; flex-direction: column; gap: 8px;">
                <div class="toggle-switch">
                    <span class="switch-label">Notifikasi via Email</span>
                    <input type="checkbox" checked style="transform: scale(1.2);">
                </div>
                <div class="toggle-switch">
                    <span class="switch-label">Notifikasi via WhatsApp (Nilai & Absensi)</span>
                    <input type="checkbox" checked style="transform: scale(1.2);">
                </div>
                <div class="toggle-switch">
                    <span class="switch-label">Notifikasi Tagihan Pembayaran</span>
                    <input type="checkbox" checked style="transform: scale(1.2);">
                </div>
            </div>
        </div>
    `;
}

// ---------------------------------------------------------
// 5. HELPER FUNCTIONS (UNTUK FITUR PENGATURAN)
// ---------------------------------------------------------

// Helper: Toggle Visibility Password (Mata)
window.togglePassword = function(inputId, btnElement) {
    const input = document.getElementById(inputId);
    const icon = btnElement.querySelector('svg');
    
    if (input.type === "password") {
        input.type = "text";
        // Ganti icon jadi mata dicoret (hide)
        icon.innerHTML = '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/>';
    } else {
        input.type = "password";
        // Ganti icon jadi mata biasa (show)
        icon.innerHTML = '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>';
    }
}

// Helper: Handle Password Change
window.handlePasswordChange = function() {
    const p1 = document.getElementById('newPass').value;
    const p2 = document.getElementById('confirmPass').value;
    const old = document.getElementById('oldPass').value;

    if(!old) {
        alert('Mohon masukkan password lama.');
        return;
    }
    
    if(!p1 || !p2) {
        alert('Mohon isi password baru.');
        return;
    }
    if(p1 !== p2) {
        alert('Konfirmasi password tidak cocok!');
        return;
    }
    
    // Simulasi sukses
    alert('Password berhasil diperbarui!');
    document.getElementById('oldPass').value = '';
    document.getElementById('newPass').value = '';
    document.getElementById('confirmPass').value = '';
}

// ---------------------------------------------------------
// 6. INISIALISASI
// ---------------------------------------------------------
// Load dashboard saat pertama buka
loadDashboard();