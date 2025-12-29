// Check if user is logged in
const currentUser = JSON.parse(localStorage.getItem('currentUser'));
if (!currentUser || currentUser.role !== 'mahasiswa') {
    window.location.href = 'index.html';
}

// Update user info
document.getElementById('userName').textContent = currentUser.name;
document.getElementById('welcomeName').textContent = currentUser.name;
document.getElementById('userAvatar').textContent = currentUser.name.charAt(0);

// Logout functionality
document.getElementById('logoutBtn').addEventListener('click', () => {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
});

// Navigation
const navItems = document.querySelectorAll('.nav-item[data-page]');
const mainContent = document.getElementById('mainContent');

navItems.forEach(item => {
    item.addEventListener('click', () => {
        navItems.forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');
        
        const page = item.dataset.page;
        loadPage(page);
    });
});

// Load page content
function loadPage(page) {
    switch(page) {
        case 'dashboard':
            loadDashboard();
            break;
        case 'krs':
            loadKRS();
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
        case 'tugas':
            loadTugas();
            break;
        case 'khs':
            loadKHS();
            break;
        case 'pengaturan':
            loadPengaturan();
            break;
        default:
            loadDashboard();
    }
}

// Dashboard page
function loadDashboard() {
    mainContent.innerHTML = `
        <div class="stats-grid">
            <div class="stat-card-dashboard">
                <div class="stat-header">
                    <div class="stat-info">
                        <p>IPK Kumulatif</p>
                        <h3>3.75</h3>
                        <div class="stat-detail" style="color: #059669;">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display: inline;">
                                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
                                <polyline points="17 6 23 6 23 12"/>
                            </svg>
                            +0.15 semester ini
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
                        <p>SKS Diambil</p>
                        <h3>21</h3>
                        <div class="stat-detail">Semester 5</div>
                    </div>
                    <div class="stat-icon blue">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                            <polyline points="14 2 14 8 20 8"/>
                        </svg>
                    </div>
                </div>
            </div>

            <div class="stat-card-dashboard">
                <div class="stat-header">
                    <div class="stat-info">
                        <p>Kehadiran</p>
                        <h3>92%</h3>
                        <div class="stat-detail">2 alpha</div>
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
                        <p>Tugas Pending</p>
                        <h3>3</h3>
                        <div class="stat-detail" style="color: #ef4444;">2 deadline minggu ini</div>
                    </div>
                    <div class="stat-icon yellow">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"/>
                            <line x1="12" y1="8" x2="12" y2="12"/>
                            <line x1="12" y1="16" x2="12.01" y2="16"/>
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
                    Jadwal Hari Ini
                </h3>
                <button class="btn btn-sm btn-secondary">Lihat Semua →</button>
            </div>
            <div class="schedule-list">
                <div class="schedule-item" style="padding: 16px; border-left: 4px solid #059669; background: #ecfdf5; border-radius: 8px; margin-bottom: 16px;">
                    <div style="display: flex; justify-content: between; align-items: start;">
                        <div style="flex: 1;">
                            <span class="badge badge-success" style="margin-bottom: 8px;">Sedang Berlangsung</span>
                            <h4 style="font-weight: 700; margin-bottom: 8px;">Pemrograman Web</h4>
                            <div style="display: grid; gap: 4px; font-size: 14px; color: #6b7280;">
                                <div>👨‍🏫 Dr. Ahmad Fauzi</div>
                                <div>🕐 08:00 - 10:30</div>
                                <div>📍 Lab 3.1</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="schedule-item" style="padding: 16px; border-left: 4px solid #d1d5db; background: #f9fafb; border-radius: 8px; margin-bottom: 16px;">
                    <h4 style="font-weight: 700; margin-bottom: 8px;">Basis Data Lanjut</h4>
                    <div style="display: grid; gap: 4px; font-size: 14px; color: #6b7280;">
                        <div>👨‍🏫 Dewi Sartika, M.Kom</div>
                        <div>🕐 10:45 - 12:15</div>
                        <div>📍 Ruang 301</div>
                    </div>
                </div>

                <div class="schedule-item" style="padding: 16px; border-left: 4px solid #d1d5db; background: #f9fafb; border-radius: 8px;">
                    <h4 style="font-weight: 700; margin-bottom: 8px;">Jaringan Komputer</h4>
                    <div style="display: grid; gap: 4px; font-size: 14px; color: #6b7280;">
                        <div>👨‍🏫 Ir. Budi Santoso</div>
                        <div>🕐 13:00 - 15:30</div>
                        <div>📍 Lab 2.2</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header">
                <h3 class="card-title">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display: inline; vertical-align: middle; margin-right: 8px;">
                        <circle cx="12" cy="12" r="10"/>
                        <line x1="12" y1="8" x2="12" y2="12"/>
                        <line x1="12" y1="16" x2="12.01" y2="16"/>
                    </svg>
                    Tugas yang Belum Dikumpulkan
                </h3>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Judul Tugas</th>
                        <th>Mata Kuliah</th>
                        <th>Deadline</th>
                        <th>Status</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Proyek REST API</td>
                        <td>Pemrograman Web</td>
                        <td>2024-12-15</td>
                        <td><span class="badge badge-warning">Pending</span></td>
                        <td><button class="btn btn-sm btn-primary">Submit</button></td>
                    </tr>
                    <tr>
                        <td>Normalisasi Database</td>
                        <td>Basis Data Lanjut</td>
                        <td>2024-12-18</td>
                        <td><span class="badge badge-warning">Pending</span></td>
                        <td><button class="btn btn-sm btn-primary">Submit</button></td>
                    </tr>
                    <tr>
                        <td>Konfigurasi Router</td>
                        <td>Jaringan Komputer</td>
                        <td>2024-12-20</td>
                        <td><span class="badge badge-warning">Pending</span></td>
                        <td><button class="btn btn-sm btn-primary">Submit</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;
}

// KRS page
// --- GANTI SELURUH FUNGSI loadKRS DENGAN KODE INI ---

function loadKRS() {
    // Simulasi State Management menggunakan LocalStorage
    // Status bisa: 'draft', 'pending', 'approved'
    let krsStatus = localStorage.getItem('krsStatus') || 'draft';
    
    // Data Mockup Mata Kuliah yang Ditawarkan
    const mataKuliahDitawarkan = [
        { kode: 'TI301', nama: 'Pemrograman Web', sks: 3, smst: 5, dosen: 'Dr. Ahmad Fauzi' },
        { kode: 'TI302', nama: 'Basis Data Lanjut', sks: 3, smst: 5, dosen: 'Dewi Sartika, M.Kom' },
        { kode: 'TI303', nama: 'Jaringan Komputer', sks: 3, smst: 5, dosen: 'Ir. Budi Santoso' },
        { kode: 'TI304', nama: 'Sistem Operasi', sks: 3, smst: 5, dosen: 'Prof. Siti Aminah' },
        { kode: 'TI305', nama: 'Pemrograman Mobile', sks: 3, smst: 5, dosen: 'Dr. Rahman Hakim' },
        { kode: 'TI306', nama: 'Keamanan Informasi', sks: 3, smst: 5, dosen: 'Andi Wijaya, M.T' },
        { kode: 'TI307', nama: 'Machine Learning', sks: 3, smst: 5, dosen: 'Dr. Lisa Permata' },
    ];

    // --- TAMPILAN 1: STATUS DRAFT (MEMILIH MATA KULIAH) ---
    if (krsStatus === 'draft') {
        let rows = mataKuliahDitawarkan.map(mk => `
            <tr>
                <td><input type="checkbox" class="mk-checkbox" value="${mk.sks}" checked style="width: 18px; height: 18px;"></td>
                <td style="font-family: monospace;">${mk.kode}</td>
                <td style="font-weight: 600;">${mk.nama}</td>
                <td class="sks-val">${mk.sks}</td>
                <td>${mk.smst}</td>
                <td>${mk.dosen}</td>
            </tr>
        `).join('');

        mainContent.innerHTML = `
            <div class="card-header" style="margin-bottom: 24px;">
                <div>
                    <h2 style="font-size: 24px; font-weight: 700; margin-bottom: 4px;">Pengisian KRS</h2>
                    <p style="color: #6b7280;">Silakan pilih mata kuliah yang akan diambil semester ini.</p>
                </div>
                <div style="text-align: right;">
                     <div style="font-size: 14px; color: #6b7280;">Dosen Pembimbing</div>
                     <div style="font-weight: 700;">Dr. Ahmad Fauzi</div>
                </div>
            </div>

            <div class="stats-grid">
                <div class="stat-card-dashboard">
                    <p style="color: #6b7280; font-size: 14px; margin-bottom: 4px;">SKS Dipilih</p>
                    <h3 id="totalSksDisplay" style="font-size: 36px; font-weight: 700; color: #059669;">21</h3>
                    <p style="color: #6b7280; font-size: 14px;">Maksimal 24 SKS</p>
                </div>
                <div class="stat-card-dashboard" style="background: #eff6ff; border-color: #bfdbfe;">
                    <p style="color: #1e40af; font-size: 14px; margin-bottom: 4px;">Status KRS</p>
                    <h3 style="font-size: 24px; font-weight: 700; color: #2563eb;">Draft</h3>
                    <p style="color: #6b7280; font-size: 14px;">Belum Diajukan</p>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Mata Kuliah Ditawarkan</h3>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Pilih</th>
                            <th>Kode</th>
                            <th>Mata Kuliah</th>
                            <th>SKS</th>
                            <th>Smst</th>
                            <th>Dosen</th>
                        </tr>
                    </thead>
                    <tbody>${rows}</tbody>
                </table>
                <div style="padding: 24px; border-top: 1px solid #f3f4f6; text-align: right;">
                    <button id="btnAjukan" class="btn btn-primary" style="padding: 12px 24px; font-size: 16px;">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                        </svg>
                        Ajukan ke Dosen PA
                    </button>
                </div>
            </div>
        `;

        // Logic Hitung SKS & Submit
        const checkboxes = document.querySelectorAll('.mk-checkbox');
        const totalDisplay = document.getElementById('totalSksDisplay');
        const btnAjukan = document.getElementById('btnAjukan');

        function updateSKS() {
            let total = 0;
            checkboxes.forEach(box => {
                if(box.checked) total += parseInt(box.value);
            });
            totalDisplay.textContent = total;
            
            // Validasi Max SKS
            if(total > 24) {
                totalDisplay.style.color = '#dc2626';
                btnAjukan.disabled = true;
                btnAjukan.style.opacity = '0.5';
                btnAjukan.textContent = 'SKS Berlebih';
            } else {
                totalDisplay.style.color = '#059669';
                btnAjukan.disabled = false;
                btnAjukan.style.opacity = '1';
                btnAjukan.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg> Ajukan ke Dosen PA`;
            }
        }

        checkboxes.forEach(box => box.addEventListener('change', updateSKS));
        
        btnAjukan.addEventListener('click', () => {
            showModal({
                title: 'Ajukan KRS?',
                message: 'Apakah Anda yakin ingin mengajukan KRS ini kepada Dosen Pembimbing? Data tidak dapat diubah setelah diajukan.',
                type: 'warning',
                showCancel: true,
                confirmText: 'Ya, Ajukan',
                cancelText: 'Batal',
                onConfirm: () => {
                    // Aksi saat user klik Ya
                    localStorage.setItem('krsStatus', 'pending');
                    
                    // Tampilkan pesan sukses sebentar sebelum reload
                    setTimeout(() => {
                        showModal({
                            title: 'Berhasil Diajukan',
                            message: 'KRS Anda telah berhasil dikirim ke Dosen PA.',
                            type: 'success',
                            onConfirm: () => loadKRS() // Reload halaman setelah klik OK
                        });
                    }, 300);
                }
            });
        });
    // --- TAMPILAN 2: STATUS PENDING (MENUNGGU PERSETUJUAN) ---
    } else if (krsStatus === 'pending') {
        mainContent.innerHTML = `
            <div class="card-header">
                <div>
                    <h2 style="font-size: 24px; font-weight: 700;">Status KRS</h2>
                </div>
            </div>

            <div class="card" style="text-align: center; padding: 48px 24px;">
                <div style="background: #fef3c7; width: 80px; height: 80px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 24px;">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#d97706" stroke-width="2">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12 6 12 12 16 14"/>
                    </svg>
                </div>
                <h3 style="font-size: 24px; font-weight: 700; color: #92400e; margin-bottom: 8px;">Menunggu Persetujuan</h3>
                <p style="color: #6b7280; max-width: 500px; margin: 0 auto 32px;">
                    KRS Anda sedang ditinjau oleh Dosen Pembimbing Akademik (<strong>Dr. Ahmad Fauzi</strong>). 
                    Anda akan mendapatkan notifikasi setelah KRS disetujui.
                </p>
                <div style="display: flex; gap: 12px; justify-content: center;">
                    <button class="btn btn-secondary" disabled style="opacity: 0.7; cursor: not-allowed;">
                        Edit KRS (Terkunci)
                    </button>
                    <button id="demoApproveBtn" class="btn btn-primary" style="background: #7c3aed;">
                        [Demo] Simulasi Dosen Setuju
                    </button>
                </div>
            </div>
        `;

        // Logic Simulasi Approval
        document.getElementById('demoApproveBtn').addEventListener('click', () => {
            showModal({
                title: 'KRS Disetujui',
                message: 'Dosen Pembimbing telah menyetujui Kartu Rencana Studi Anda. Anda sekarang dapat mencetak KRS.',
                type: 'success',
                confirmText: 'Lihat Hasil',
                onConfirm: () => {
                    localStorage.setItem('krsStatus', 'approved');
                    loadKRS();
                }
            });
        });
    // --- TAMPILAN 3: STATUS APPROVED (FINAL & CETAK) ---
    } else if (krsStatus === 'approved') {
        let rows = mataKuliahDitawarkan.map((mk, index) => `
            <tr>
                <td style="text-align: center;">${index + 1}</td>
                <td style="font-family: monospace;">${mk.kode}</td>
                <td style="font-weight: 600;">${mk.nama}</td>
                <td style="text-align: center;">${mk.sks}</td>
                <td style="text-align: center;">${mk.smst}</td>
                <td><span class="badge badge-success">Disetujui</span></td>
            </tr>
        `).join('');

        mainContent.innerHTML = `
            <div class="card-header" style="margin-bottom: 24px;">
                <div>
                    <h2 style="font-size: 24px; font-weight: 700; margin-bottom: 4px;">Kartu Rencana Studi (KRS)</h2>
                    <p style="color: #6b7280;">Semester 5 - Tahun Akademik 2024/2025</p>
                </div>
                <div style="display: flex; gap: 12px;">
                    <button id="btnReset" class="btn btn-secondary" style="font-size: 12px;">
                       Reset (Demo)
                    </button>
                    <button class="btn btn-primary" onclick="window.print()">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="6 9 6 2 18 2 18 9"/>
                            <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
                            <rect x="6" y="14" width="12" height="8"/>
                        </svg>
                        Cetak KRS
                    </button>
                </div>
            </div>

            <div class="stats-grid">
                <div class="stat-card-dashboard" style="background: #ecfdf5; border-color: #a7f3d0;">
                    <div style="display: flex; align-items: center; gap: 12px;">
                        <div style="background: white; padding: 8px; border-radius: 50%;">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                                <polyline points="22 4 12 14.01 9 11.01"/>
                            </svg>
                        </div>
                        <div>
                            <p style="color: #065f46; font-size: 14px; font-weight: 600;">KRS Disetujui</p>
                            <p style="color: #064e3b; font-size: 12px;">Disetujui oleh Dr. Ahmad Fauzi pada 13 Des 2025</p>
                        </div>
                    </div>
                </div>
                 <div class="stat-card-dashboard">
                    <p style="color: #6b7280; font-size: 14px; margin-bottom: 4px;">Total SKS</p>
                    <h3 style="font-size: 24px; font-weight: 700;">21 SKS</h3>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Mata Kuliah Diambil</h3>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th style="text-align: center;">No</th>
                            <th>Kode</th>
                            <th>Mata Kuliah</th>
                            <th style="text-align: center;">SKS</th>
                            <th style="text-align: center;">Semester</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>${rows}</tbody>
                </table>
            </div>
        `;

        // Tombol Reset untuk mengulang demo
        document.getElementById('btnReset').addEventListener('click', () => {
            localStorage.setItem('krsStatus', 'draft');
            loadKRS();
        });
    }
}
// Nilai page
function loadNilai() {
    mainContent.innerHTML = `
        <div class="card-header" style="margin-bottom: 24px;">
            <div>
                <h2 style="font-size: 24px; font-weight: 700; margin-bottom: 4px;">Nilai</h2>
                <p style="color: #6b7280;">Lihat hasil penilaian akademik Anda</p>
            </div>
            <button class="btn btn-primary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Export PDF
            </button>
        </div>

        <div class="stats-grid">
            <div class="stat-card-dashboard">
                <p style="color: #6b7280; font-size: 14px; margin-bottom: 4px;">Total SKS</p>
                <h3 style="font-size: 36px; font-weight: 700;">15</h3>
            </div>
            <div class="stat-card-dashboard">
                <p style="color: #6b7280; font-size: 14px; margin-bottom: 4px;">Rata-rata Nilai</p>
                <h3 style="font-size: 36px; font-weight: 700;">84.00</h3>
            </div>
            <div class="stat-card-dashboard">
                <p style="color: #6b7280; font-size: 14px; margin-bottom: 4px;">IPK Semester</p>
                <h3 style="font-size: 36px; font-weight: 700;">3.75</h3>
            </div>
            <div class="stat-card-dashboard">
                <p style="color: #6b7280; font-size: 14px; margin-bottom: 4px;">IPK Kumulatif</p>
                <h3 style="font-size: 36px; font-weight: 700; color: #059669;">3.75</h3>
            </div>
        </div>

        <div class="card">
            <div class="card-header">
                <h3 class="card-title">Daftar Nilai</h3>
                <select class="btn btn-secondary" style="width: auto;">
                    <option>Semester 5</option>
                    <option>Semester 4</option>
                    <option>Semester 3</option>
                    <option>Semester 2</option>
                    <option>Semester 1</option>
                </select>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Kode MK</th>
                        <th>Mata Kuliah</th>
                        <th style="text-align: center;">SKS</th>
                        <th style="text-align: center;">Tugas</th>
                        <th style="text-align: center;">Quiz</th>
                        <th style="text-align: center;">UTS</th>
                        <th style="text-align: center;">UAS</th>
                        <th style="text-align: center;">Nilai Akhir</th>
                        <th style="text-align: center;">Huruf</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="font-family: monospace;">TI301</td>
                        <td style="font-weight: 600;">Pemrograman Web</td>
                        <td style="text-align: center;">3</td>
                        <td style="text-align: center;">85</td>
                        <td style="text-align: center;">88</td>
                        <td style="text-align: center;">82</td>
                        <td style="text-align: center;">86</td>
                        <td style="text-align: center; font-weight: 700;">85</td>
                        <td style="text-align: center;"><span class="badge badge-success">A</span></td>
                    </tr>
                    <tr>
                        <td style="font-family: monospace;">TI302</td>
                        <td style="font-weight: 600;">Basis Data Lanjut</td>
                        <td style="text-align: center;">3</td>
                        <td style="text-align: center;">90</td>
                        <td style="text-align: center;">85</td>
                        <td style="text-align: center;">88</td>
                        <td style="text-align: center;">87</td>
                        <td style="text-align: center; font-weight: 700;">87</td>
                        <td style="text-align: center;"><span class="badge badge-success">A</span></td>
                    </tr>
                    <tr>
                        <td style="font-family: monospace;">TI303</td>
                        <td style="font-weight: 600;">Jaringan Komputer</td>
                        <td style="text-align: center;">3</td>
                        <td style="text-align: center;">78</td>
                        <td style="text-align: center;">80</td>
                        <td style="text-align: center;">75</td>
                        <td style="text-align: center;">80</td>
                        <td style="text-align: center; font-weight: 700;">78</td>
                        <td style="text-align: center;"><span class="badge badge-info">B+</span></td>
                    </tr>
                    <tr>
                        <td style="font-family: monospace;">TI304</td>
                        <td style="font-weight: 600;">Sistem Operasi</td>
                        <td style="text-align: center;">3</td>
                        <td style="text-align: center;">82</td>
                        <td style="text-align: center;">85</td>
                        <td style="text-align: center;">80</td>
                        <td style="text-align: center;">83</td>
                        <td style="text-align: center; font-weight: 700;">82</td>
                        <td style="text-align: center;"><span class="badge badge-success">A-</span></td>
                    </tr>
                    <tr>
                        <td style="font-family: monospace;">TI305</td>
                        <td style="font-weight: 600;">Pemrograman Mobile</td>
                        <td style="text-align: center;">3</td>
                        <td style="text-align: center;">88</td>
                        <td style="text-align: center;">90</td>
                        <td style="text-align: center;">85</td>
                        <td style="text-align: center;">88</td>
                        <td style="text-align: center; font-weight: 700;">88</td>
                        <td style="text-align: center;"><span class="badge badge-success">A</span></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="card" style="background: #ecfdf5; border: 1px solid #a7f3d0;">
            <h4 style="font-weight: 700; color: #047857; margin-bottom: 12px;">Keterangan Nilai</h4>
            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; font-size: 14px;">
                <div><span style="font-weight: 700;">A:</span> 85-100</div>
                <div><span style="font-weight: 700;">A-:</span> 80-84</div>
                <div><span style="font-weight: 700;">B+:</span> 75-79</div>
                <div><span style="font-weight: 700;">B:</span> 70-74</div>
                <div><span style="font-weight: 700;">B-:</span> 65-69</div>
                <div><span style="font-weight: 700;">C+:</span> 60-64</div>
                <div><span style="font-weight: 700;">C:</span> 55-59</div>
                <div><span style="font-weight: 700;">D:</span> 50-54</div>
            </div>
        </div>
    `;
}

// Kehadiran page
function loadKehadiran() {
    mainContent.innerHTML = `
        <div class="card-header" style="margin-bottom: 24px;">
            <div>
                <h2 style="font-size: 24px; font-weight: 700; margin-bottom: 4px;">Kehadiran</h2>
                <p style="color: #6b7280;">Monitoring kehadiran kuliah Anda</p>
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
                        <p>Persentase</p>
                        <h3 style="color: #059669;">92%</h3>
                    </div>
                    <div class="stat-icon emerald">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                            <line x1="16" y1="2" x2="16" y2="6"/>
                            <line x1="8" y1="2" x2="8" y2="6"/>
                            <line x1="3" y1="10" x2="21" y2="10"/>
                        </svg>
                    </div>
                </div>
            </div>

            <div class="stat-card-dashboard">
                <div class="stat-header">
                    <div class="stat-info">
                        <p>Total Alpha</p>
                        <h3>2</h3>
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

            <div class="stat-card-dashboard">
                <div class="stat-header">
                    <div class="stat-info">
                        <p>Status</p>
                        <h3 style="font-size: 18px; color: #16a34a;">Aman</h3>
                        <div class="stat-detail">Di atas 75%</div>
                    </div>
                    <div class="stat-icon blue">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"/>
                            <line x1="12" y1="16" x2="12" y2="12"/>
                            <line x1="12" y1="8" x2="12.01" y2="8"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header">
                <h3 class="card-title">Rekap Kehadiran per Mata Kuliah</h3>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Mata Kuliah</th>
                        <th style="text-align: center;">Total Pertemuan</th>
                        <th style="text-align: center;">Hadir</th>
                        <th style="text-align: center;">Ijin</th>
                        <th style="text-align: center;">Sakit</th>
                        <th style="text-align: center;">Alpha</th>
                        <th style="text-align: center;">Persentase</th>
                        <th style="text-align: center;">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="font-weight: 600;">Pemrograman Web</td>
                        <td style="text-align: center;">14</td>
                        <td style="text-align: center; color: #16a34a; font-weight: 700;">13</td>
                        <td style="text-align: center; color: #2563eb;">0</td>
                        <td style="text-align: center; color: #d97706;">1</td>
                        <td style="text-align: center; color: #dc2626; font-weight: 700;">0</td>
                        <td style="text-align: center;"><span class="badge badge-success">93%</span></td>
                        <td style="text-align: center;">
                            <button class="btn btn-sm btn-secondary" onclick="loadDetailKehadiran('Pemrograman Web', 'Dr. Ahmad Fauzi', 'Senin, 08:00')">Detail</button>
                        </td>
                    </tr>
                    <tr>
                        <td style="font-weight: 600;">Basis Data Lanjut</td>
                        <td style="text-align: center;">14</td>
                        <td style="text-align: center; color: #16a34a; font-weight: 700;">14</td>
                        <td style="text-align: center; color: #2563eb;">0</td>
                        <td style="text-align: center; color: #d97706;">0</td>
                        <td style="text-align: center; color: #dc2626; font-weight: 700;">0</td>
                        <td style="text-align: center;"><span class="badge badge-success">100%</span></td>
                        <td style="text-align: center;">
                            <button class="btn btn-sm btn-secondary" onclick="loadDetailKehadiran('Basis Data Lanjut', 'Dewi Sartika, M.Kom', 'Senin, 10:45')">Detail</button>
                        </td>
                    </tr>
                    <tr>
                        <td style="font-weight: 600;">Jaringan Komputer</td>
                        <td style="text-align: center;">14</td>
                        <td style="text-align: center; color: #16a34a; font-weight: 700;">12</td>
                        <td style="text-align: center; color: #2563eb;">1</td>
                        <td style="text-align: center; color: #d97706;">0</td>
                        <td style="text-align: center; color: #dc2626; font-weight: 700;">1</td>
                        <td style="text-align: center;"><span class="badge badge-success">86%</span></td>
                        <td style="text-align: center;">
                            <button class="btn btn-sm btn-secondary" onclick="loadDetailKehadiran('Jaringan Komputer', 'Ir. Budi Santoso', 'Senin, 13:00')">Detail</button>
                        </td>
                    </tr>
                    <tr>
                        <td style="font-weight: 600;">Sistem Operasi</td>
                        <td style="text-align: center;">14</td>
                        <td style="text-align: center; color: #16a34a; font-weight: 700;">13</td>
                        <td style="text-align: center; color: #2563eb;">0</td>
                        <td style="text-align: center; color: #d97706;">0</td>
                        <td style="text-align: center; color: #dc2626; font-weight: 700;">1</td>
                        <td style="text-align: center;"><span class="badge badge-success">93%</span></td>
                        <td style="text-align: center;">
                            <button class="btn btn-sm btn-secondary" onclick="loadDetailKehadiran('Sistem Operasi', 'Prof. Siti Aminah', 'Rabu, 08:00')">Detail</button>
                        </td>
                    </tr>
                    <tr>
                        <td style="font-weight: 600;">Pemrograman Mobile</td>
                        <td style="text-align: center;">14</td>
                        <td style="text-align: center; color: #16a34a; font-weight: 700;">13</td>
                        <td style="text-align: center; color: #2563eb;">1</td>
                        <td style="text-align: center; color: #d97706;">0</td>
                        <td style="text-align: center; color: #dc2626; font-weight: 700;">0</td>
                        <td style="text-align: center;"><span class="badge badge-success">93%</span></td>
                        <td style="text-align: center;">
                            <button class="btn btn-sm btn-secondary" onclick="loadDetailKehadiran('Pemrograman Mobile', 'Dr. Rahman Hakim', 'Rabu, 13:00')">Detail</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="card" style="background: #fef3c7; border: 1px solid #fde047;">
            <div style="display: flex; gap: 12px;">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d97706" stroke-width="2" style="flex-shrink: 0;">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="12" y1="8" x2="12" y2="12"/>
                    <line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
                <div>
                    <h4 style="font-weight: 700; color: #78350f; margin-bottom: 8px;">Perhatian!</h4>
                    <p style="color: #92400e; font-size: 14px;">
                        Kehadiran minimal 75% dari total pertemuan diperlukan untuk dapat mengikuti ujian akhir semester.
                        Pastikan Anda selalu hadir dalam setiap pertemuan kuliah.
                    </p>
                </div>
            </div>
        </div>
    `;
}
// --- FITUR DETAIL KEHADIRAN ---

function loadDetailKehadiran(mkName, dosenName, jadwal) {
    let pertemuanRows = '';
    const todayMeeting = 14; // Simulasi kita berada di pertemuan ke-14
    
    // Loop 17 Pertemuan (sesuai permintaan)
    for (let i = 1; i <= 17; i++) {
        let jenis = 'Kuliah Rutin';
        let status = '';
        let buttonState = '';
        let badgeClass = '';
        
        // Simulasi Tanggal
        let tanggal = new Date(2024, 8, (i * 7)); 
        let formattedDate = tanggal.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });

        // Tentukan Jenis Pertemuan (UTS/UAS)
        if (i === 8) { jenis = 'Ujian Tengah Semester (UTS)'; }
        else if (i === 16) { jenis = 'Ujian Akhir Semester (UAS)'; }
        else if (i === 17) { jenis = 'Evaluasi / Remedial'; }

        // LOGIKA STATUS DAN TOMBOL
        if (i < todayMeeting) {
            // MASA LALU (Sudah Lewat)
            status = 'Hadir';
            badgeClass = 'badge-success';
            
            // Simulasi ada 1 sakit di pertemuan 5
            if (i === 5) { status = 'Sakit'; badgeClass = 'badge-warning'; }
            
            buttonState = `
                <button class="btn btn-sm" disabled style="background: #e5e7eb; color: #9ca3af; border: none; cursor: not-allowed; width: 100%;">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right:4px; vertical-align:middle"><polyline points="20 6 9 17 4 12"/></svg>
                    Tercatat
                </button>
            `;
        } else if (i === todayMeeting) {
            // HARI INI (Tombol Absen Aktif)
            status = 'Belum Absen';
            badgeClass = 'badge-danger';
            
            buttonState = `
                <button class="btn btn-sm btn-primary" onclick="lakukanAbsensi(this, ${i})" style="width: 100%;">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right:4px; vertical-align:middle"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>
                    Absen Masuk
                </button>
            `;
        } else {
            // MASA DEPAN (Belum Dibuka)
            status = 'Terjadwal';
            badgeClass = 'badge-info';
            formattedDate = '-'; // Tanggal disembunyikan
            
            buttonState = `
                <button class="btn btn-sm" disabled style="background: white; border: 1px solid #e5e7eb; color: #d1d5db; cursor: not-allowed; width: 100%;">
                    Belum Dibuka
                </button>
            `;
        }

        // Khusus UTS/UAS biasanya tidak ada tombol absen mandiri
        if (i === 8 || i === 16) {
            buttonState = `<div style="text-align:center; font-size: 12px; color: #6b7280; font-style: italic;">Berita Acara Ujian</div>`;
        }

        pertemuanRows += `
            <tr>
                <td style="text-align: center; font-weight: 600;">${i}</td>
                <td>
                    <div style="font-weight: 600; color: #374151;">${jenis}</div>
                    <div style="font-size: 12px; color: #6b7280;">${formattedDate}</div>
                </td>
                <td style="text-align: center;">
                    <span class="badge ${badgeClass}" id="status-${i}">${status}</span>
                </td>
                <td style="text-align: center;">
                    ${buttonState}
                </td>
            </tr>
        `;
    }

    // Render Halaman
    mainContent.innerHTML = `
        <div class="card-header" style="margin-bottom: 24px; display: flex; align-items: center; gap: 16px;">
            <button class="btn btn-secondary" onclick="loadKehadiran()" style="padding: 8px 12px;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
                Kembali
            </button>
            <div>
                <h2 style="font-size: 24px; font-weight: 700; margin-bottom: 4px;">${mkName}</h2>
                <div style="display: flex; gap: 16px; font-size: 14px; color: #6b7280;">
                    <span style="display: flex; align-items: center; gap: 4px;">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                        ${dosenName}
                    </span>
                    <span style="display: flex; align-items: center; gap: 4px;">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                        ${jadwal}
                    </span>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header">
                <h3 class="card-title">Riwayat Pertemuan (17 Pertemuan)</h3>
            </div>
            <table>
                <thead>
                    <tr>
                        <th style="width: 60px; text-align: center;">No</th>
                        <th>Topik & Tanggal</th>
                        <th style="text-align: center;">Status</th>
                        <th style="text-align: center; width: 160px;">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    ${pertemuanRows}
                </tbody>
            </table>
        </div>
    `;
}

// Fungsi Aksi Absensi
function lakukanAbsensi(btnElement, pertemuanKe) {
    // Gunakan Custom Modal yang sudah kita buat sebelumnya
    showModal({
        title: 'Konfirmasi Absensi',
        message: `Apakah Anda yakin ingin melakukan absensi untuk Pertemuan ke-${pertemuanKe}? Lokasi Anda akan dicatat.`,
        type: 'warning',
        showCancel: true,
        confirmText: 'Ya, Saya Hadir',
        onConfirm: () => {
            // Simulasi Loading
            btnElement.innerHTML = 'Memproses...';
            btnElement.disabled = true;

            setTimeout(() => {
                // Update UI: Ubah Badge
                const badge = document.getElementById(`status-${pertemuanKe}`);
                badge.className = 'badge badge-success';
                badge.textContent = 'Hadir';

                // Update UI: Ubah Tombol
                btnElement.className = 'btn btn-sm';
                btnElement.style.background = '#e5e7eb';
                btnElement.style.color = '#9ca3af';
                btnElement.style.border = 'none';
                btnElement.style.cursor = 'not-allowed';
                btnElement.innerHTML = `
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right:4px; vertical-align:middle"><polyline points="20 6 9 17 4 12"/></svg>
                    Berhasil
                `;

                // Pesan Sukses
                showModal({
                    title: 'Berhasil',
                    message: 'Kehadiran Anda berhasil dicatat.',
                    type: 'success'
                });
            }, 800);
        }
    });
}

// Tugas page
function loadTugas() {
    mainContent.innerHTML = `
        <div class="card-header" style="margin-bottom: 24px;">
            <div>
                <h2 style="font-size: 24px; font-weight: 700; margin-bottom: 4px;">Tugas</h2>
                <p style="color: #6b7280;">Kelola pengumpulan tugas kuliah Anda</p>
            </div>
        </div>

        <div class="stats-grid" style="grid-template-columns: repeat(3, 1fr);">
            <div class="stat-card-dashboard">
                <div class="stat-header">
                    <div class="stat-info"><p>Tugas Pending</p><h3>3</h3></div>
                    <div class="stat-icon yellow"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg></div>
                </div>
            </div>
            <div class="stat-card-dashboard">
                <div class="stat-header">
                    <div class="stat-info"><p>Menunggu Penilaian</p><h3>2</h3></div>
                    <div class="stat-icon blue"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
                </div>
            </div>
            <div class="stat-card-dashboard">
                <div class="stat-header">
                    <div class="stat-info"><p>Sudah Dinilai</p><h3>2</h3></div>
                    <div class="stat-icon green"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg></div>
                </div>
            </div>
        </div>

        <div class="card">
            <div style="border-bottom: 1px solid #e5e7eb; margin-bottom: 24px;">
                <div style="display: flex; gap: 8px;">
                    <button class="btn btn-sm" style="border-bottom: 2px solid #059669; color: #059669; border-radius: 0; padding: 16px 24px;">Pending (3)</button>
                    <button class="btn btn-sm btn-secondary" style="border-radius: 0; padding: 16px 24px;">Submitted (2)</button>
                </div>
            </div>

            <div style="display: grid; gap: 16px;">
                <div style="border: 1px solid #e5e7eb; border-radius: 8px; padding: 24px;">
                    <h4 style="font-size: 18px; font-weight: 700; margin-bottom: 8px;">Proyek REST API</h4>
                    <p style="font-size: 14px; color: #6b7280; margin-bottom: 12px;">Pemrograman Web</p>
                    <p style="color: #374151; margin-bottom: 16px;">Buat REST API menggunakan Node.js dan Express untuk sistem manajemen buku.</p>
                    
                    <div style="display: flex; gap: 16px; font-size: 14px; margin-bottom: 16px;">
                        <div style="display: flex; align-items: center; gap: 6px; color: #dc2626; font-weight: 700;">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                            Deadline: 2024-12-15 (2 hari lagi)
                        </div>
                    </div>
                    
                    <div style="display: flex; gap: 12px;">
                        <button class="btn btn-primary" onclick="openUploadModal('Proyek REST API', 'Pemrograman Web')">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                            Upload Tugas
                        </button>
                        
                        <button class="btn btn-secondary" onclick="loadDetailTugas('Proyek REST API', 'Pemrograman Web', '2024-12-15', 'Buat REST API menggunakan Node.js dan Express. Wajib menggunakan database MySQL dan menyertakan dokumentasi Postman.', 'pending')">
                            Lihat Detail
                        </button>
                    </div>
                </div>

                <div style="border: 1px solid #e5e7eb; border-radius: 8px; padding: 24px;">
                    <h4 style="font-size: 18px; font-weight: 700; margin-bottom: 8px;">Normalisasi Database</h4>
                    <p style="font-size: 14px; color: #6b7280; margin-bottom: 12px;">Basis Data Lanjut</p>
                    <p style="color: #374151; margin-bottom: 16px;">Lakukan normalisasi pada studi kasus e-commerce yang diberikan hingga bentuk 3NF.</p>
                    
                     <div style="display: flex; gap: 16px; font-size: 14px; margin-bottom: 16px;">
                        <div style="display: flex; align-items: center; gap: 6px; color: #d97706; font-weight: 700;">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                             Deadline: 2024-12-18 (5 hari lagi)
                        </div>
                    </div>

                    <div style="display: flex; gap: 12px;">
                        <button class="btn btn-primary" onclick="openUploadModal('Normalisasi Database', 'Basis Data Lanjut')">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                            Upload Tugas
                        </button>
                        <button class="btn btn-secondary" onclick="loadDetailTugas('Normalisasi Database', 'Basis Data Lanjut', '2024-12-18', 'Analisis tabel un-normalized yang diberikan, lalu pecah menjadi bentuk 1NF, 2NF, dan 3NF. Kumpulkan dalam format PDF.', 'pending')">
                            Lihat Detail
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}
/* --- FITUR DETAIL TUGAS --- */
/* --- FITUR DETAIL TUGAS (GANTI BAGIAN PALING BAWAH FILE) --- */

function loadDetailTugas(judul, matkul, deadline, deskripsi, status) {
    mainContent.innerHTML = `
        <div class="card-header" style="margin-bottom: 24px; display: flex; align-items: center; gap: 16px;">
            <button class="btn btn-secondary" onclick="loadTugas()" style="padding: 8px 12px;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
                Kembali
            </button>
            <div>
                <h2 style="font-size: 24px; font-weight: 700; margin-bottom: 4px;">Detail Tugas</h2>
                <div style="display: flex; gap: 16px; font-size: 14px; color: #6b7280;">
                    <span style="display: flex; align-items: center; gap: 4px;">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
                        ${matkul}
                    </span>
                    <span style="display: flex; align-items: center; gap: 4px; color: #d97706; font-weight: 600;">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                        Due: ${deadline}
                    </span>
                </div>
            </div>
        </div>

        <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 24px;">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">${judul}</h3>
                    <span class="badge badge-warning">Pending</span>
                </div>
                <div style="margin-bottom: 24px;">
                    <h4 style="font-size: 14px; font-weight: 700; color: #374151; margin-bottom: 8px;">Deskripsi Tugas</h4>
                    <p style="color: #4b5563; line-height: 1.6;">${deskripsi}</p>
                </div>
                
                <div style="background: #f3f4f6; padding: 16px; border-radius: 8px;">
                    <h4 style="font-size: 14px; font-weight: 700; color: #374151; margin-bottom: 8px;">File Pendukung</h4>
                    <div style="display: flex; align-items: center; gap: 8px; background: white; padding: 12px; border: 1px solid #d1d5db; border-radius: 6px; cursor: pointer;">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                            <line x1="16" y1="13" x2="8" y2="13"></line>
                            <line x1="16" y1="17" x2="8" y2="17"></line>
                            <polyline points="10 9 9 9 8 9"></polyline>
                        </svg>
                        <div style="flex: 1;">
                            <div style="font-size: 14px; font-weight: 500;">Soal_${judul.replace(/\s+/g, '_')}.pdf</div>
                            <div style="font-size: 12px; color: #6b7280;">2.4 MB</div>
                        </div>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6b7280" stroke-width="2">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="7 10 12 15 17 10"></polyline>
                            <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Pengumpulan</h3>
                </div>
                <form id="submissionForm" onsubmit="submitTugas(event)">
                    <div style="margin-bottom: 16px;">
                        <label style="display: block; font-size: 14px; font-weight: 500; margin-bottom: 8px; color: #374151;">Upload File</label>
                        
                        <div style="border: 2px dashed #d1d5db; border-radius: 8px; padding: 24px; text-align: center; cursor: pointer; transition: all 0.2s; position: relative;" 
                             onmouseover="this.style.borderColor='#059669'; this.style.background='#f0fdf4'" 
                             onmouseout="this.style.borderColor='#d1d5db'; this.style.background='white'">
                            
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2" style="margin-bottom: 8px;">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                <polyline points="17 8 12 3 7 8"/>
                                <line x1="12" y1="3" x2="12" y2="15"/>
                            </svg>
                            <p style="font-size: 14px; color: #6b7280;">Klik atau drag file ke sini</p>
                            <p style="font-size: 12px; color: #9ca3af; margin-top: 4px;">PDF, ZIP, atau DOCX (Max 10MB)</p>
                            
                            <input type="file" required style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0; cursor: pointer;">
                        </div>
                    </div>

                    <div style="margin-bottom: 24px;">
                        <label style="display: block; font-size: 14px; font-weight: 500; margin-bottom: 8px; color: #374151;">Catatan (Opsional)</label>
                        <textarea style="width: 100%; padding: 12px; border: 1px solid #d1d5db; border-radius: 8px; font-family: inherit;" rows="3" placeholder="Tambahkan pesan untuk dosen..."></textarea>
                    </div>

                    <button type="submit" class="btn btn-primary" style="width: 100%; justify-content: center;">
                        Kirim Tugas
                    </button>
                </form>
            </div>
        </div>
    `;
}
function openUploadModal(judul, matkul) {
    // Hapus modal lama jika ada
    const existingModal = document.getElementById('uploadModal');
    if (existingModal) existingModal.remove();

    const modalHtml = `
        <div class="modal-overlay" id="uploadModal">
            <div class="modal-card" style="text-align: left; max-width: 450px;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                    <div>
                        <h3 style="font-size: 18px; font-weight: 700; color: #111827;">Upload Tugas</h3>
                        <p style="font-size: 13px; color: #6b7280;">${matkul}</p>
                    </div>
                    <button onclick="closeUploadModal()" style="background: none; border: none; cursor: pointer; color: #9ca3af; padding: 4px;">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                    </button>
                </div>

                <div style="margin-bottom: 16px; background: #f3f4f6; padding: 12px; border-radius: 8px;">
                    <span style="font-size: 12px; color: #6b7280; display: block; margin-bottom: 4px;">Judul Tugas:</span>
                    <span style="font-weight: 600; color: #374151;">${judul}</span>
                </div>

                <form id="uploadForm" onsubmit="prosesUpload(event)">
                    <div style="margin-bottom: 16px;">
                        <label style="display: block; font-size: 14px; font-weight: 500; margin-bottom: 8px; color: #374151;">File Tugas</label>
                        
                        <div style="border: 2px dashed #d1d5db; border-radius: 8px; padding: 32px 24px; text-align: center; cursor: pointer; position: relative; transition: all 0.2s;" 
                             onmouseover="this.style.borderColor='#059669'; this.style.background='#f0fdf4'" 
                             onmouseout="this.style.borderColor='#d1d5db'; this.style.background='white'">
                            
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2" style="margin-bottom: 8px;">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                <polyline points="17 8 12 3 7 8"/>
                                <line x1="12" y1="3" x2="12" y2="15"/>
                            </svg>
                            <p style="font-size: 14px; color: #6b7280; font-weight: 500;">Klik untuk pilih file</p>
                            <p style="font-size: 12px; color: #9ca3af; margin-top: 4px;">PDF, DOCX, ZIP (Max 10MB)</p>
                            
                            <input type="file" required style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0; cursor: pointer;">
                        </div>
                    </div>

                    <div style="margin-bottom: 24px;">
                        <label style="display: block; font-size: 14px; font-weight: 500; margin-bottom: 8px; color: #374151;">Catatan Tambahan</label>
                        <textarea style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 8px; font-family: inherit; font-size: 14px;" rows="2" placeholder="Pesan untuk dosen..."></textarea>
                    </div>

                    <div style="display: flex; gap: 12px;">
                        <button type="button" class="btn btn-secondary" style="flex: 1; justify-content: center;" onclick="closeUploadModal()">Batal</button>
                        <button type="submit" class="btn btn-primary" style="flex: 1; justify-content: center;">Kirim</button>
                    </div>
                </form>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHtml);
    setTimeout(() => {
        document.getElementById('uploadModal').classList.add('active');
    }, 10);
}
function closeUploadModal() {
    const modal = document.getElementById('uploadModal');
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => modal.remove(), 300);
    }
}

function prosesUpload(e) {
    e.preventDefault();
    
    // Tampilkan loading di tombol
    const btn = e.target.querySelector('button[type="submit"]');
    const originalText = btn.innerText;
    btn.disabled = true;
    btn.innerText = "Mengupload...";

    // Simulasi delay upload
    setTimeout(() => {
        closeUploadModal();
        
        // Tampilkan Sukses menggunakan showModal yang sudah ada
        showModal({
            title: 'Berhasil Dikirim!',
            message: 'File tugas Anda telah berhasil diupload ke sistem.',
            type: 'success',
            onConfirm: () => loadTugas() // Refresh halaman tugas
        });
    }, 1500);
}

// KHS page
function loadKHS() {
    mainContent.innerHTML = `
        <div class="card-header" style="margin-bottom: 24px;">
            <div>
                <h2 style="font-size: 24px; font-weight: 700; margin-bottom: 4px;">Kartu Hasil Studi (KHS)</h2>
                <p style="color: #6b7280;">Rekap hasil studi per semester</p>
            </div>
            <button class="btn btn-primary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Export Transkrip
            </button>
        </div>

        <div class="stats-grid" style="grid-template-columns: repeat(3, 1fr);">
            <div style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: white; border-radius: 12px; padding: 24px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
                    <div style="background: rgba(255, 255, 255, 0.2); padding: 12px; border-radius: 8px;">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="8" r="7"/>
                            <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
                        </svg>
                    </div>
                    <p style="color: rgba(255, 255, 255, 0.9);">IPK Kumulatif</p>
                </div>
                <h3 style="font-size: 48px; font-weight: 700; margin-bottom: 8px;">3.75</h3>
                <div style="display: flex; align-items: center; gap: 6px; color: rgba(255, 255, 255, 0.9);">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
                        <polyline points="17 6 23 6 23 12"/>
                    </svg>
                    <span style="font-size: 14px;">Konsisten meningkat</span>
                </div>
            </div>

            <div class="stat-card-dashboard">
                <p style="color: #6b7280; font-size: 14px; margin-bottom: 4px;">Total SKS Lulus</p>
                <h3 style="font-size: 42px; font-weight: 700; margin-bottom: 8px;">103</h3>
                <p style="color: #6b7280; font-size: 14px; margin-bottom: 16px;">dari 120 SKS</p>
                <div style="background: #e5e7eb; height: 8px; border-radius: 9999px;">
                    <div style="background: #059669; height: 8px; border-radius: 9999px; width: 86%;"></div>
                </div>
            </div>

            <div class="stat-card-dashboard">
                <p style="color: #6b7280; font-size: 14px; margin-bottom: 4px;">Semester Aktif</p>
                <h3 style="font-size: 42px; font-weight: 700; margin-bottom: 8px;">5</h3>
                <p style="color: #6b7280; font-size: 14px; margin-bottom: 8px;">dari 6 semester</p>
                <p style="font-size: 14px; color: #059669; font-weight: 600;">Target Lulus: 2025</p>
            </div>
        </div>

        <div class="card">
            <div class="card-header">
                <h3 class="card-title">Rekap KHS per Semester</h3>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Semester</th>
                        <th style="text-align: center;">SKS Diambil</th>
                        <th style="text-align: center;">IPS</th>
                        <th style="text-align: center;">IPK</th>
                        <th style="text-align: center;">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="font-weight: 600;">Semester 1</td>
                        <td style="text-align: center;">20</td>
                        <td style="text-align: center;"><span class="badge badge-success">3.65</span></td>
                        <td style="text-align: center;"><span class="badge" style="background: #d1fae5; color: #047857; font-weight: 700;">3.65</span></td>
                        <td style="text-align: center;"><button class="btn btn-sm btn-secondary" onclick="loadDetailKHS(1)">Lihat Detail</button></td>
                    </tr>
                    <tr>
                        <td style="font-weight: 600;">Semester 2</td>
                        <td style="text-align: center;">21</td>
                        <td style="text-align: center;"><span class="badge badge-success">3.70</span></td>
                        <td style="text-align: center;"><span class="badge" style="background: #d1fae5; color: #047857; font-weight: 700;">3.68</span></td>
                        <td style="text-align: center;"><button class="btn btn-sm btn-secondary" onclick="loadDetailKHS(2)">Lihat Detail</button></td>
                    </tr>
                    <tr>
                        <td style="font-weight: 600;">Semester 3</td>
                        <td style="text-align: center;">20</td>
                        <td style="text-align: center;"><span class="badge badge-success">3.75</span></td>
                        <td style="text-align: center;"><span class="badge" style="background: #d1fae5; color: #047857; font-weight: 700;">3.70</span></td>
                        <td style="text-align: center;"><button class="btn btn-sm btn-secondary" onclick="loadDetailKHS(3)">Lihat Detail</button></td>
                    </tr>
                    <tr>
                        <td style="font-weight: 600;">Semester 4</td>
                        <td style="text-align: center;">21</td>
                        <td style="text-align: center;"><span class="badge badge-success">3.80</span></td>
                        <td style="text-align: center;"><span class="badge" style="background: #d1fae5; color: #047857; font-weight: 700;">3.73</span></td>
                        <td style="text-align: center;"><button class="btn btn-sm btn-secondary" onclick="loadDetailKHS(4)">Lihat Detail</button></td>
                    </tr>
                    <tr>
                        <td style="font-weight: 600;">Semester 5</td>
                        <td style="text-align: center;">21</td>
                        <td style="text-align: center;"><span class="badge badge-success">3.85</span></td>
                        <td style="text-align: center;"><span class="badge" style="background: #d1fae5; color: #047857; font-weight: 700;">3.75</span></td>
                        <td style="text-align: center;"><button class="btn btn-sm btn-secondary" onclick="loadDetailKHS(5)">Lihat Detail</button></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Grafik Perkembangan IPK</h3>
                </div>
                <div style="height: 256px; display: flex; align-items: flex-end; justify-content: space-between; gap: 8px;">
                    <div style="flex: 1; display: flex; flex-direction: column; align-items: center; gap: 8px;">
                        <div style="font-size: 12px; font-weight: 700; color: #059669;">3.65</div>
                        <div style="width: 100%; background: linear-gradient(to top, #10b981, #6ee7b7); border-radius: 4px 4px 0 0; height: 91%;"></div>
                        <div style="font-size: 12px; color: #6b7280;">Sem 1</div>
                    </div>
                    <div style="flex: 1; display: flex; flex-direction: column; align-items: center; gap: 8px;">
                        <div style="font-size: 12px; font-weight: 700; color: #059669;">3.68</div>
                        <div style="width: 100%; background: linear-gradient(to top, #10b981, #6ee7b7); border-radius: 4px 4px 0 0; height: 92%;"></div>
                        <div style="font-size: 12px; color: #6b7280;">Sem 2</div>
                    </div>
                    <div style="flex: 1; display: flex; flex-direction: column; align-items: center; gap: 8px;">
                        <div style="font-size: 12px; font-weight: 700; color: #059669;">3.70</div>
                        <div style="width: 100%; background: linear-gradient(to top, #10b981, #6ee7b7); border-radius: 4px 4px 0 0; height: 93%;"></div>
                        <div style="font-size: 12px; color: #6b7280;">Sem 3</div>
                    </div>
                    <div style="flex: 1; display: flex; flex-direction: column; align-items: center; gap: 8px;">
                        <div style="font-size: 12px; font-weight: 700; color: #059669;">3.73</div>
                        <div style="width: 100%; background: linear-gradient(to top, #10b981, #6ee7b7); border-radius: 4px 4px 0 0; height: 93%;"></div>
                        <div style="font-size: 12px; color: #6b7280;">Sem 4</div>
                    </div>
                    <div style="flex: 1; display: flex; flex-direction: column; align-items: center; gap: 8px;">
                        <div style="font-size: 12px; font-weight: 700; color: #059669;">3.75</div>
                        <div style="width: 100%; background: linear-gradient(to top, #10b981, #6ee7b7); border-radius: 4px 4px 0 0; height: 94%;"></div>
                        <div style="font-size: 12px; color: #6b7280;">Sem 5</div>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Prestasi Akademik</h3>
                </div>
                <div style="display: grid; gap: 16px;">
                    <div style="display: flex; gap: 16px; padding: 16px; background: #fef3c7; border: 1px solid #fde047; border-radius: 8px;">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d97706" stroke-width="2" style="flex-shrink: 0;">
                            <circle cx="12" cy="8" r="7"/>
                            <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
                        </svg>
                        <div>
                            <h4 style="font-weight: 700; margin-bottom: 4px;">Mahasiswa Berprestasi</h4>
                            <p style="font-size: 14px; color: #6b7280; margin-bottom: 4px;">Peringkat 5 besar angkatan 2022</p>
                            <p style="font-size: 12px; color: #9ca3af;">Semester 4</p>
                        </div>
                    </div>

                    <div style="display: flex; gap: 16px; padding: 16px; background: #dbeafe; border: 1px solid #93c5fd; border-radius: 8px;">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2" style="flex-shrink: 0;">
                            <circle cx="12" cy="8" r="7"/>
                            <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
                        </svg>
                        <div>
                            <h4 style="font-weight: 700; margin-bottom: 4px;">Dean's List</h4>
                            <p style="font-size: 14px; color: #6b7280; margin-bottom: 4px;">IPS di atas 3.75 selama 3 semester berturut-turut</p>
                            <p style="font-size: 12px; color: #9ca3af;">Semester 3-5</p>
                        </div>
                    </div>

                    <div style="display: flex; gap: 16px; padding: 16px; background: #dcfce7; border: 1px solid #86efac; border-radius: 8px;">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2" style="flex-shrink: 0;">
                            <circle cx="12" cy="8" r="7"/>
                            <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
                        </svg>
                        <div>
                            <h4 style="font-weight: 700; margin-bottom: 4px;">Best Project</h4>
                            <p style="font-size: 14px; color: #6b7280; margin-bottom: 4px;">Proyek terbaik mata kuliah Pemrograman Web</p>
                            <p style="font-size: 12px; color: #9ca3af;">Semester 5</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="card" style="background: #ecfdf5; border: 1px solid #a7f3d0;">
            <h4 style="font-weight: 700; color: #047857; margin-bottom: 12px;">Keterangan IPK</h4>
            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; font-size: 14px;">
                <div><span style="font-weight: 700;">Cum Laude:</span> IPK ≥ 3.50</div>
                <div><span style="font-weight: 700;">Sangat Memuaskan:</span> 3.00 - 3.49</div>
                <div><span style="font-weight: 700;">Memuaskan:</span> 2.75 - 2.99</div>
                <div><span style="font-weight: 700;">Cukup:</span> 2.00 - 2.74</div>
            </div>
        </div>
    `;
}
/* --- FITUR DETAIL KHS --- */
function loadDetailKHS(semester) {
    // 1. Database Dummy Mata Kuliah per Semester
    const dataKHS = {
        1: [
            { kode: 'TI101', matkul: 'Algoritma & Pemrograman Dasar', sks: 4, nilai: 'A', bobot: 4.00 },
            { kode: 'TI102', matkul: 'Pengantar Teknologi Informasi', sks: 3, nilai: 'A', bobot: 4.00 },
            { kode: 'TI103', matkul: 'Matematika Diskrit', sks: 3, nilai: 'B+', bobot: 3.50 },
            { kode: 'TI104', matkul: 'Bahasa Inggris I', sks: 2, nilai: 'A', bobot: 4.00 },
            { kode: 'TI105', matkul: 'Pendidikan Agama', sks: 2, nilai: 'A', bobot: 4.00 },
            { kode: 'TI106', matkul: 'Fisika Dasar', sks: 3, nilai: 'B', bobot: 3.00 },
            { kode: 'TI107', matkul: 'Logika Informatika', sks: 3, nilai: 'A-', bobot: 3.70 }
        ],
        2: [
            { kode: 'TI201', matkul: 'Struktur Data & Algoritma', sks: 4, nilai: 'A', bobot: 4.00 },
            { kode: 'TI202', matkul: 'Arsitektur Komputer', sks: 3, nilai: 'A-', bobot: 3.70 },
            { kode: 'TI203', matkul: 'Aljabar Linier', sks: 3, nilai: 'B+', bobot: 3.50 },
            { kode: 'TI204', matkul: 'Basis Data Dasar', sks: 4, nilai: 'A', bobot: 4.00 },
            { kode: 'TI205', matkul: 'Bahasa Inggris II', sks: 2, nilai: 'A', bobot: 4.00 },
            { kode: 'TI206', matkul: 'Pancasila & Kewarganegaraan', sks: 2, nilai: 'A', bobot: 4.00 },
            { kode: 'TI207', matkul: 'Statistika Dasar', sks: 3, nilai: 'B', bobot: 3.00 }
        ],
        3: [
            { kode: 'TI301', matkul: 'Pemrograman Berorientasi Objek', sks: 4, nilai: 'A', bobot: 4.00 },
            { kode: 'TI302', matkul: 'Sistem Operasi', sks: 3, nilai: 'A', bobot: 4.00 },
            { kode: 'TI303', matkul: 'Jaringan Komputer Dasar', sks: 3, nilai: 'A-', bobot: 3.70 },
            { kode: 'TI304', matkul: 'Analisis & Perancangan Sistem', sks: 3, nilai: 'A', bobot: 4.00 },
            { kode: 'TI305', matkul: 'Interaksi Manusia & Komputer', sks: 3, nilai: 'B+', bobot: 3.50 },
            { kode: 'TI306', matkul: 'Kewirausahaan', sks: 2, nilai: 'A', bobot: 4.00 },
            { kode: 'TI307', matkul: 'Web Design', sks: 2, nilai: 'A', bobot: 4.00 }
        ],
        4: [
            { kode: 'TI401', matkul: 'Pemrograman Web Lanjut', sks: 4, nilai: 'A', bobot: 4.00 },
            { kode: 'TI402', matkul: 'Jaringan Komputer Lanjut', sks: 3, nilai: 'A', bobot: 4.00 },
            { kode: 'TI403', matkul: 'Keamanan Siber', sks: 3, nilai: 'A-', bobot: 3.70 },
            { kode: 'TI404', matkul: 'Kecerdasan Buatan', sks: 3, nilai: 'B+', bobot: 3.50 },
            { kode: 'TI405', matkul: 'Metodologi Penelitian', sks: 2, nilai: 'A', bobot: 4.00 },
            { kode: 'TI406', matkul: 'Cloud Computing', sks: 3, nilai: 'A', bobot: 4.00 },
            { kode: 'TI407', matkul: 'Internet of Things', sks: 3, nilai: 'A-', bobot: 3.70 }
        ],
        5: [
            { kode: 'TI501', matkul: 'Pemrograman Mobile', sks: 4, nilai: 'A', bobot: 4.00 },
            { kode: 'TI502', matkul: 'Data Mining', sks: 3, nilai: 'A', bobot: 4.00 },
            { kode: 'TI503', matkul: 'Manajemen Proyek TI', sks: 3, nilai: 'A-', bobot: 3.70 },
            { kode: 'TI504', matkul: 'Etika Profesi', sks: 2, nilai: 'A', bobot: 4.00 },
            { kode: 'TI505', matkul: 'Bahasa Indonesia', sks: 2, nilai: 'A', bobot: 4.00 },
            { kode: 'TI506', matkul: 'Kerja Praktik / Magang', sks: 4, nilai: 'A', bobot: 4.00 },
            { kode: 'TI507', matkul: 'E-Commerce', sks: 3, nilai: 'A', bobot: 4.00 }
        ]
    };

    const matkulList = dataKHS[semester] || [];
    
    // 2. Hitung Total SKS dan IP Semester (IPS)
    let totalSks = 0;
    let totalBobot = 0;
    
    // Generate baris tabel HTML
    let tableRows = matkulList.map((mk, index) => {
        totalSks += mk.sks;
        totalBobot += (mk.sks * mk.bobot);
        
        // Tentukan warna badge nilai
        let badgeColor = 'badge-success'; // A, A-
        if(mk.nilai.includes('B')) badgeColor = 'badge-info';
        if(mk.nilai.includes('C')) badgeColor = 'badge-warning';
        if(mk.nilai.includes('D') || mk.nilai.includes('E')) badgeColor = 'badge-danger';

        return `
            <tr>
                <td style="text-align: center;">${index + 1}</td>
                <td style="font-family: monospace;">${mk.kode}</td>
                <td style="font-weight: 600;">${mk.matkul}</td>
                <td style="text-align: center;">${mk.sks}</td>
                <td style="text-align: center;"><span class="badge ${badgeColor}">${mk.nilai}</span></td>
                <td style="text-align: center;">${mk.bobot.toFixed(2)}</td>
                <td style="text-align: center;">${(mk.sks * mk.bobot).toFixed(2)}</td>
            </tr>
        `;
    }).join('');

    // Hitung IPS
    const ips = totalSks > 0 ? (totalBobot / totalSks).toFixed(2) : "0.00";

    // 3. Render Halaman Detail
    mainContent.innerHTML = `
        <div class="card-header" style="margin-bottom: 24px; display: flex; align-items: center; gap: 16px;">
            <button class="btn btn-secondary" onclick="loadKHS()" style="padding: 8px 12px;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
                Kembali
            </button>
            <div>
                <h2 style="font-size: 24px; font-weight: 700; margin-bottom: 4px;">Detail KHS Semester ${semester}</h2>
                <p style="color: #6b7280; font-size: 14px;">Tahun Akademik 202${semester+1}/202${semester+2}</p>
            </div>
        </div>

        <div class="stats-grid">
             <div class="stat-card-dashboard" style="background: white;">
                <p style="color: #6b7280; font-size: 14px; margin-bottom: 4px;">Total SKS Diambil</p>
                <h3 style="font-size: 28px; font-weight: 700; color: #111827;">${totalSks}</h3>
            </div>
            <div class="stat-card-dashboard" style="background: white;">
                <p style="color: #6b7280; font-size: 14px; margin-bottom: 4px;">Total Mutu</p>
                <h3 style="font-size: 28px; font-weight: 700; color: #111827;">${totalBobot.toFixed(2)}</h3>
            </div>
            <div class="stat-card-dashboard" style="background: #ecfdf5; border-color: #a7f3d0;">
                <p style="color: #065f46; font-size: 14px; margin-bottom: 4px;">Indeks Prestasi Semester (IPS)</p>
                <h3 style="font-size: 32px; font-weight: 700; color: #059669;">${ips}</h3>
            </div>
        </div>

        <div class="card">
            <div class="card-header" style="display: flex; justify-content: space-between; align-items: center;">
                <h3 class="card-title">Daftar Mata Kuliah</h3>
                <button class="btn btn-sm btn-primary" onclick="window.print()">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 4px;">
                        <polyline points="6 9 6 2 18 2 18 9"/>
                        <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
                        <rect x="6" y="14" width="12" height="8"/>
                    </svg>
                    Cetak KHS
                </button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th style="text-align: center;">No</th>
                        <th>Kode</th>
                        <th>Mata Kuliah</th>
                        <th style="text-align: center;">SKS</th>
                        <th style="text-align: center;">Nilai Huruf</th>
                        <th style="text-align: center;">Bobot</th>
                        <th style="text-align: center;">Mutu (SKS x Bobot)</th>
                    </tr>
                </thead>
                <tbody>
                    ${tableRows}
                </tbody>
                <tfoot>
                     <tr style="background: #f9fafb; font-weight: 700;">
                        <td colspan="3" style="text-align: right; padding-right: 24px;">TOTAL</td>
                        <td style="text-align: center;">${totalSks}</td>
                        <td></td>
                        <td></td>
                        <td style="text-align: center;">${totalBobot.toFixed(2)}</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    `;
}

// Jadwal page
function loadJadwal() {
    mainContent.innerHTML = `
        <div class="card-header" style="margin-bottom: 24px;">
            <div>
                <h2 style="font-size: 24px; font-weight: 700; margin-bottom: 4px;">Jadwal Kuliah</h2>
                <p style="color: #6b7280;">Jadwal perkuliahan Semester 5 - TA 2024/2025</p>
            </div>
        </div>

        <div class="card">
            <div class="card-header">
                <h3 class="card-title">Jadwal Mingguan</h3>
                <select class="btn btn-secondary" style="width: auto;">
                    <option>Semua Hari</option>
                    <option>Senin</option>
                    <option>Selasa</option>
                    <option>Rabu</option>
                    <option>Kamis</option>
                    <option>Jumat</option>
                </select>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Hari</th>
                        <th>Mata Kuliah</th>
                        <th>Dosen</th>
                        <th>Waktu</th>
                        <th>Ruangan</th>
                        <th>SKS</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="font-weight: 600;">Senin</td>
                        <td>Pemrograman Web</td>
                        <td>Dr. Ahmad Fauzi</td>
                        <td>08:00 - 10:30</td>
                        <td>Lab 3.1</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td style="font-weight: 600;">Senin</td>
                        <td>Basis Data Lanjut</td>
                        <td>Dewi Sartika, M.Kom</td>
                        <td>10:45 - 12:15</td>
                        <td>Ruang 301</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td style="font-weight: 600;">Senin</td>
                        <td>Jaringan Komputer</td>
                        <td>Ir. Budi Santoso</td>
                        <td>13:00 - 15:30</td>
                        <td>Lab 2.2</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td style="font-weight: 600;">Rabu</td>
                        <td>Sistem Operasi</td>
                        <td>Prof. Siti Aminah</td>
                        <td>08:00 - 10:30</td>
                        <td>Lab 3.3</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td style="font-weight: 600;">Rabu</td>
                        <td>Pemrograman Mobile</td>
                        <td>Dr. Rahman Hakim</td>
                        <td>13:00 - 15:30</td>
                        <td>Lab 2.1</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td style="font-weight: 600;">Jumat</td>
                        <td>Keamanan Informasi</td>
                        <td>Andi Wijaya, M.T</td>
                        <td>08:00 - 10:30</td>
                        <td>Ruang 402</td>
                        <td>3</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;
}

// Pengaturan page
function loadPengaturan() {
    mainContent.innerHTML = `
        <div class="card-header" style="margin-bottom: 24px;">
            <div>
                <h2 style="font-size: 24px; font-weight: 700; margin-bottom: 4px;">Pengaturan Akun</h2>
                <p style="color: #6b7280;">Kelola informasi profil dan keamanan akun Anda</p>
            </div>
        </div>

        <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 24px;">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align: middle; margin-right: 8px;">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                            <circle cx="12" cy="7" r="4"/>
                        </svg>
                        Informasi Pribadi
                    </h3>
                </div>
                <form id="profileForm">
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
                        <div class="form-group" style="margin-bottom: 0;">
                            <label style="display: block; margin-bottom: 8px; font-weight: 500;">Nama Lengkap</label>
                            <input type="text" value="${currentUser.name}" disabled style="background: #f3f4f6; color: #6b7280;">
                        </div>
                        <div class="form-group" style="margin-bottom: 0;">
                            <label style="display: block; margin-bottom: 8px; font-weight: 500;">NIM</label>
                            <input type="text" value="${currentUser.nim}" disabled style="background: #f3f4f6; color: #6b7280;">
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label style="display: block; margin-bottom: 8px; font-weight: 500;">Email</label>
                        <input type="text" value="budi.santoso@students.usu.ac.id">
                    </div>

                    <div class="form-group">
                        <label style="display: block; margin-bottom: 8px; font-weight: 500;">Nomor Telepon</label>
                        <input type="text" value="081234567890">
                    </div>

                    <div class="form-group">
                        <label style="display: block; margin-bottom: 8px; font-weight: 500;">Alamat</label>
                        <textarea style="width: 100%; padding: 12px; border: 1px solid #d1d5db; border-radius: 8px; font-family: inherit;" rows="3">Jl. Dr. Mansyur No. 9, Medan</textarea>
                    </div>

                    <div style="text-align: right;">
                        <button type="submit" class="btn btn-primary">Simpan Perubahan</button>
                    </div>
                </form>
            </div>

            <div style="display: flex; flex-direction: column; gap: 24px;">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align: middle; margin-right: 8px;">
                                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                            </svg>
                            Keamanan
                        </h3>
                    </div>
                    <form id="passwordForm">
                        <div class="form-group">
                            <label style="display: block; margin-bottom: 8px; font-weight: 500;">Password Lama</label>
                            <input type="password" placeholder="••••••">
                        </div>
                        <div class="form-group">
                            <label style="display: block; margin-bottom: 8px; font-weight: 500;">Password Baru</label>
                            <input type="password" placeholder="Minimal 8 karakter">
                        </div>
                        <div class="form-group">
                            <label style="display: block; margin-bottom: 8px; font-weight: 500;">Konfirmasi Password</label>
                            <input type="password" placeholder="Ulangi password baru">
                        </div>
                        <button type="submit" class="btn btn-secondary" style="width: 100%;">Update Password</button>
                    </form>
                </div>

                <div class="card" style="background: #fef2f2; border: 1px solid #fee2e2;">
                    <h4 style="color: #991b1b; font-weight: 700; margin-bottom: 8px;">Zona Bahaya</h4>
                    <p style="font-size: 14px; color: #7f1d1d; margin-bottom: 16px;">
                        Menonaktifkan akun sementara atau menghapus data permanen.
                    </p>
                    <button class="btn btn-sm" style="background: #ef4444; color: white; border: none;">Nonaktifkan Akun</button>
                </div>
            </div>
        </div>
    `;

    // Add event listeners for forms (Mock functionality)
    // Di dalam loadPengaturan()
    // Di dalam loadPengaturan()
    document.getElementById('profileForm').addEventListener('submit', (e) => {
        e.preventDefault();
        showModal({
            title: 'Data Tersimpan',
            message: 'Perubahan informasi profil Anda berhasil disimpan ke dalam sistem.',
            type: 'success'
        });
    });

    document.getElementById('passwordForm').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Password berhasil diubah! Silakan login ulang.');
    });
}


/* --- LOGIKA NOTIFIKASI --- */

// 1. Data Mockup Notifikasi (Sesuai kebutuhan sistem)
const notifications = [
    {
        id: 1,
        title: "Deadline Tugas Besok!",
        message: "Tugas 'Proyek REST API' untuk mata kuliah Pemrograman Web berakhir besok jam 23:59.",
        type: "warning", // Tipe: deadline/warning
        time: "1 jam yang lalu",
        read: false
    },
    {
        id: 2,
        title: "Nilai Keluar",
        message: "Nilai UTS Basis Data Lanjut telah dipublikasikan. Cek menu Nilai sekarang.",
        type: "success", // Tipe: academic update
        time: "5 jam yang lalu",
        read: false
    },
    {
        id: 3,
        title: "Perubahan Jadwal",
        message: "Kuliah Jaringan Komputer hari ini dipindahkan ke Lab 2.3.",
        type: "info", // Tipe: announcement
        time: "1 hari yang lalu",
        read: true
    }
];

// 2. Inisialisasi Sistem Notifikasi
document.addEventListener('DOMContentLoaded', () => {
    initNotificationSystem();
});

function initNotificationSystem() {
    const notifBtn = document.querySelector('.notification-btn');
    const badge = document.querySelector('.notification-badge');
    
    // Buat elemen dropdown secara dinamis
    const dropdownHTML = `
        <div class="notification-dropdown" id="notifDropdown">
            <div class="notif-header">
                <h3>Notifikasi</h3>
                <button class="mark-read" onclick="markAllRead()">Tandai sudah dibaca</button>
            </div>
            <div class="notif-list" id="notifList">
                </div>
            <div style="padding: 12px; text-align: center; border-top: 1px solid #f3f4f6;">
                <a href="#" style="font-size: 12px; color: #059669; text-decoration: none; font-weight: 600;">Lihat Semua Notifikasi</a>
            </div>
        </div>
    `;
    
    // Masukkan dropdown ke dalam DOM (setelah tombol notifikasi)
    notifBtn.parentElement.insertAdjacentHTML('beforeend', dropdownHTML);
    
    // Update Badge
    updateBadge(badge);

    // Event Listener untuk tombol lonceng
    notifBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const dropdown = document.getElementById('notifDropdown');
        dropdown.classList.toggle('active');
        renderNotifications();
    });

    // Event Listener untuk menutup dropdown saat klik di luar
    document.addEventListener('click', (e) => {
        const dropdown = document.getElementById('notifDropdown');
        if (dropdown && !dropdown.contains(e.target) && !notifBtn.contains(e.target)) {
            dropdown.classList.remove('active');
        }
    });
}

// 3. Render List Notifikasi
function renderNotifications() {
    const listContainer = document.getElementById('notifList');
    listContainer.innerHTML = notifications.map(notif => {
        // Tentukan warna icon berdasarkan tipe
        let iconColor = '#3b82f6'; // Default blue
        let bgIcon = '#dbeafe';
        let iconSvg = '';

        if (notif.type === 'warning') {
            iconColor = '#d97706'; // Yellow/Orange
            bgIcon = '#fef3c7';
            iconSvg = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="${iconColor}" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`;
        } else if (notif.type === 'success') {
            iconColor = '#059669'; // Green
            bgIcon = '#dcfce7';
            iconSvg = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="${iconColor}" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`;
        } else {
            iconSvg = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="${iconColor}" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`;
        }

        return `
            <div class="notif-item ${notif.read ? '' : 'unread'}" onclick="readNotification(${notif.id})">
                <div class="notif-icon" style="background: ${bgIcon}">
                    ${iconSvg}
                </div>
                <div class="notif-content">
                    <h4>${notif.title}</h4>
                    <p>${notif.message}</p>
                    <div class="notif-time">${notif.time}</div>
                </div>
            </div>
        `;
    }).join('');
}

// 4. Helper Functions
function updateBadge(badgeElement) {
    const unreadCount = notifications.filter(n => !n.read).length;
    badgeElement.textContent = unreadCount;
    badgeElement.style.display = unreadCount > 0 ? 'flex' : 'none';
}

function markAllRead() {
    notifications.forEach(n => n.read = true);
    renderNotifications();
    updateBadge(document.querySelector('.notification-badge'));
}

// Fungsi dummy untuk klik notifikasi
window.readNotification = function(id) {
    const notif = notifications.find(n => n.id === id);
    if (notif) {
        notif.read = true;
        renderNotifications();
        updateBadge(document.querySelector('.notification-badge'));
        // Opsional: Redirect ke halaman terkait
        if(notif.type === 'warning') loadPage('tugas');
        if(notif.type === 'success') loadPage('nilai');
    }
}

/* --- SISTEM MODAL CUSTOM --- */
function showModal({ title, message, type = 'success', onConfirm = null, showCancel = false, confirmText = 'Oke', cancelText = 'Batal' }) {
    // Hapus modal lama jika ada
    const existingModal = document.getElementById('customModal');
    if (existingModal) existingModal.remove();

    // Tentukan Icon berdasarkan tipe
    let iconSvg = '';
    let iconClass = type; // success, warning, danger
    
    if (type === 'success') {
        iconSvg = `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>`;
    } else if (type === 'warning') {
        iconSvg = `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`;
    } else if (type === 'danger') {
        iconSvg = `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>`;
    }

    // Tentukan tombol
    let buttonsHtml = '';
    if (showCancel) {
        buttonsHtml = `
            <button class="modal-btn modal-btn-cancel" id="modalCancelBtn">${cancelText}</button>
            <button class="modal-btn ${type === 'danger' ? 'modal-btn-danger' : 'modal-btn-primary'}" id="modalConfirmBtn">${confirmText}</button>
        `;
    } else {
        buttonsHtml = `
            <button class="modal-btn modal-btn-primary" id="modalConfirmBtn">${confirmText}</button>
        `;
    }

    // Template HTML
    const modalHtml = `
        <div class="modal-overlay" id="customModal">
            <div class="modal-card">
                <div class="modal-icon-wrapper ${iconClass}">
                    ${iconSvg}
                </div>
                <h3 class="modal-title">${title}</h3>
                <p class="modal-message">${message}</p>
                <div class="modal-actions">
                    ${buttonsHtml}
                </div>
            </div>
        </div>
    `;

    // Masukkan ke body
    document.body.insertAdjacentHTML('beforeend', modalHtml);

    // Animasi Masuk
    setTimeout(() => {
        document.getElementById('customModal').classList.add('active');
    }, 10);

    // Event Listener Tombol
    const confirmBtn = document.getElementById('modalConfirmBtn');
    const cancelBtn = document.getElementById('modalCancelBtn');
    const modalEl = document.getElementById('customModal');

    const closeModal = () => {
        modalEl.classList.remove('active');
        setTimeout(() => modalEl.remove(), 300);
    };

    confirmBtn.addEventListener('click', () => {
        closeModal();
        if (onConfirm) onConfirm();
    });

    if (cancelBtn) {
        cancelBtn.addEventListener('click', closeModal);
    }
}

/* --- FITUR DETAIL TUGAS --- */



// Load dashboard by default
loadDashboard();
