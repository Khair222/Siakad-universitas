// Check if user is logged in (Simulasi Auth)
const currentUser = JSON.parse(localStorage.getItem('currentUser')) || { name: 'Dr. Ahmad Fauzi', role: 'dosen' };

// Update user info in Sidebar
document.getElementById('userName').textContent = currentUser.name;
document.getElementById('welcomeName').innerHTML = currentUser.name;
document.getElementById('userAvatar').textContent = currentUser.name.split(' ').map(n => n[0]).join('').substring(0, 2);

// Logout functionality
document.getElementById('logoutBtn').addEventListener('click', () => {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
});

// Navigation Logic
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

function loadPage(page) {
    switch (page) {
        case 'dashboard':
            loadDashboard();
            break;
        case 'jadwal':
            loadJadwal();
            break;
        case 'input-nilai':
            loadInputNilai();
            break;
        case 'input-absensi':
            loadInputAbsensi();
            break;
        case 'monitoring':
            loadMonitoring();
            break;
        case 'upload':
            loadUpload();
            break;
        case 'settings':
            loadSettings();
            break;
        default:
            loadDashboard();
    }
}

// 1. DASHBOARD OVERVIEW
function loadDashboard() {
    mainContent.innerHTML = `
        <div class="stats-grid">
            <div class="stat-card-dashboard">
                <div class="stat-header">
                    <div class="stat-info">
                        <p>Total Mahasiswa</p>
                        <h3>120</h3>
                        <div class="stat-detail" style="color: #6b7280;">
                            Diampuh semester ini
                        </div>
                    </div>
                    <div class="stat-icon blue">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                            <circle cx="9" cy="7" r="4"/>
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                        </svg>
                    </div>
                </div>
            </div>

            <div class="stat-card-dashboard">
                <div class="stat-header">
                    <div class="stat-info">
                        <p>Kelas Ajar</p>
                        <h3>4</h3>
                        <div class="stat-detail">Kelas Aktif</div>
                    </div>
                    <div class="stat-icon purple">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                            <line x1="8" y1="21" x2="16" y2="21"/>
                            <line x1="12" y1="17" x2="12" y2="21"/>
                        </svg>
                    </div>
                </div>
            </div>

            <div class="stat-card-dashboard">
                <div class="stat-header">
                    <div class="stat-info">
                        <p>Tugas Perlu Dinilai</p>
                        <h3 style="color: #d97706;">15</h3>
                        <div class="stat-detail">Tugas Baru</div>
                    </div>
                    <div class="stat-icon orange">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                            <polyline points="14 2 14 8 20 8"/>
                            <line x1="16" y1="13" x2="8" y2="13"/>
                            <line x1="16" y1="17" x2="8" y2="17"/>
                            <polyline points="10 9 9 9 8 9"/>
                        </svg>
                    </div>
                </div>
            </div>

             <div class="stat-card-dashboard">
                <div class="stat-header">
                    <div class="stat-info">
                        <p>Kehadiran Rata-rata</p>
                        <h3>88%</h3>
                        <div class="stat-detail" style="color: #059669;">Cukup Baik</div>
                    </div>
                    <div class="stat-icon green">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                            <polyline points="22 4 12 14.01 9 11.01"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header">
                <h3 class="card-title">Jadwal Mengajar Hari Ini</h3>
            </div>
            <div class="schedule-list">
                <div class="schedule-item" style="padding: 16px; border-left: 4px solid #059669; background: #ecfdf5; border-radius: 8px; margin-bottom: 16px;">
                    <div style="display: flex; justify-content: space-between; align-items: start;">
                        <div style="flex: 1;">
                            <span class="badge badge-success" style="margin-bottom: 8px;">Sedang Berlangsung</span>
                            <h4 style="font-weight: 700; margin-bottom: 8px;">Pemrograman Web (TI-5A)</h4>
                            <div style="display: grid; gap: 4px; font-size: 14px; color: #6b7280;">
                                <div>🕐 08:00 - 10:30</div>
                                <div>📍 Lab 3.1</div>
                            </div>
                        </div>
                         <button class="btn btn-sm btn-primary">Isi Absensi</button>
                    </div>
                </div>
                <div class="schedule-item" style="padding: 16px; border-left: 4px solid #d1d5db; background: #f9fafb; border-radius: 8px;">
                     <div style="display: flex; justify-content: space-between; align-items: start;">
                        <div style="flex: 1;">
                            <h4 style="font-weight: 700; margin-bottom: 8px;">Basis Data Lanjut (TI-5B)</h4>
                            <div style="display: grid; gap: 4px; font-size: 14px; color: #6b7280;">
                                <div>🕐 13:00 - 15:30</div>
                                <div>📍 Ruang 301</div>
                            </div>
                        </div>
                        <button class="btn btn-sm btn-secondary" disabled>Belum Mulai</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// 2. JADWAL MENGAJAR
function loadJadwal() {
    mainContent.innerHTML = `
        <div class="card-header" style="margin-bottom: 24px;">
            <div>
                <h2 style="font-size: 24px; font-weight: 700; margin-bottom: 4px;">Jadwal Mengajar</h2>
                <p style="color: #6b7280;">Semester Ganjil 2024/2025</p>
            </div>
        </div>
        <div class="card">
            <table>
                <thead>
                    <tr>
                        <th>Kode</th>
                        <th>Mata Kuliah</th>
                        <th>Kelas</th>
                        <th>SKS</th>
                        <th>Jadwal</th>
                        <th style="text-align: center;">Jumlah Mhs</th>
                        <th style="text-align: center;">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="font-family: monospace;">TI3014</td>
                        <td style="font-weight: 600;">Pemrograman Web</td>
                        <td>TI-5A</td>
                        <td>3</td>
                        <td>Senin, 08:00 - 10:30</td>
                        <td style="text-align: center;">30</td>
                        <td style="text-align: center;"><button class="btn btn-sm btn-primary">Detail</button></td>
                    </tr>
                    <tr>
                         <td style="font-family: monospace;">TI3014</td>
                        <td style="font-weight: 600;">Pemrograman Web</td>
                        <td>TI-5B</td>
                        <td>3</td>
                        <td>Selasa, 08:00 - 10:30</td>
                        <td style="text-align: center;">28</td>
                        <td style="text-align: center;"><button class="btn btn-sm btn-primary">Detail</button></td>
                    </tr>
                    <tr>
                         <td style="font-family: monospace;">TI3022</td>
                        <td style="font-weight: 600;">Basis Data Lanjut</td>
                        <td>TI-5A</td>
                        <td>3</td>
                        <td>Rabu, 10:45 - 13:15</td>
                        <td style="text-align: center;">31</td>
                        <td style="text-align: center;"><button class="btn btn-sm btn-primary">Detail</button></td>
                    </tr>
                    <tr>
                         <td style="font-family: monospace;">TI3022</td>
                        <td style="font-weight: 600;">Basis Data Lanjut</td>
                        <td>TI-5B</td>
                        <td>3</td>
                        <td>Senin, 13:00 - 15:30</td>
                        <td style="text-align: center;">31</td>
                        <td style="text-align: center;"><button class="btn btn-sm btn-primary">Detail</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;
}

// 3. INPUT NILAI
function loadInputNilai() {
    mainContent.innerHTML = `
        <div class="card-header" style="margin-bottom: 24px;">
            <div>
                <h2 style="font-size: 24px; font-weight: 700;">Input Nilai Mahasiswa</h2>
                <p style="color: #6b7280;">Masukkan nilai tugas, UTS, dan UAS</p>
            </div>
            <select class="btn btn-secondary" style="width: auto;">
                <option>Pemrograman Web - TI-3A</option>
                <option>Pemrograman Web - TI-3B</option>
            </select>
        </div>

        <div class="card">
            <table>
                <thead>
                    <tr>
                        <th>NIM</th>
                        <th>Nama Mahasiswa</th>
                        <th style="width:100px; text-align:center;">Tugas (20%)</th>
                        <th style="width:100px; text-align:center;">UTS (30%)</th>
                        <th style="width:100px; text-align:center;">UAS (50%)</th>
                        <th style="text-align:center;">Nilai Akhir</th>
                        <th style="text-align:center;">Grade</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="font-family: monospace;">220101</td>
                        <td style="font-weight:600">Budi Santoso</td>
                        <td style="text-align:center"><input type="number" class="btn btn-sm" style="width:60px; text-align:center; border:1px solid #d1d5db;" value="85"></td>
                        <td style="text-align:center"><input type="number" class="btn btn-sm" style="width:60px; text-align:center; border:1px solid #d1d5db;" value="82"></td>
                        <td style="text-align:center"><input type="number" class="btn btn-sm" style="width:60px; text-align:center; border:1px solid #d1d5db;" value="86"></td>
                        <td style="text-align:center; font-weight:700">84.6</td>
                        <td style="text-align:center"><span class="badge badge-success">A</span></td>
                    </tr>
                    <tr>
                        <td style="font-family: monospace;">220102</td>
                        <td style="font-weight:600">Siti Aminah</td>
                        <td style="text-align:center"><input type="number" class="btn btn-sm" style="width:60px; text-align:center; border:1px solid #d1d5db;" value="90"></td>
                        <td style="text-align:center"><input type="number" class="btn btn-sm" style="width:60px; text-align:center; border:1px solid #d1d5db;" value="88"></td>
                        <td style="text-align:center"><input type="number" class="btn btn-sm" style="width:60px; text-align:center; border:1px solid #d1d5db;" placeholder="0"></td>
                        <td style="text-align:center; font-weight:700">-</td>
                        <td style="text-align:center">-</td>
                    </tr>
                </tbody>
            </table>
            <div style="padding: 20px; text-align: right;">
                <button class="btn btn-primary">Simpan Nilai</button>
            </div>
        </div>
    `;
}

// 4. INPUT ABSENSI
function loadInputAbsensi() {
    mainContent.innerHTML = `
        <div class="card-header" style="margin-bottom: 24px;">
            <div>
                <h2 style="font-size: 24px; font-weight: 700;">Input Absensi Kelas</h2>
                <p style="color: #6b7280;">Silahkan tandai kehadiran mahasiswa</p>
            </div>
        </div>
        
        <div class="card" style="margin-bottom: 20px;">
            <div style="display: flex; gap: 16px; align-items: end;">
                <div style="flex: 1;">
                    <label style="display: block; margin-bottom: 8px; font-weight: 600;">Pilih Kelas</label>
                    <select class="btn btn-secondary" style="width: 100%;"><option>Pemrograman Web - TI-3A</option></select>
                </div>
                <div style="flex: 1;">
                    <label style="display: block; margin-bottom: 8px; font-weight: 600;">Pertemuan Ke-</label>
                    <select class="btn btn-secondary" style="width: 100%;"><option>14 (Hari Ini)</option><option>13</option></select>
                </div>
                <div style="flex: 1;">
                    <label style="display: block; margin-bottom: 8px; font-weight: 600;">Topik</label>
                    <input type="text" class="btn btn-secondary" style="width: 100%; text-align:left; cursor:text;" value="REST API Development" readonly>
                </div>
            </div>
        </div>

        <div class="card">
            <table>
                <thead>
                    <tr>
                        <th>NIM</th>
                        <th>Nama Mahasiswa</th>
                        <th style="text-align:center">Hadir (H)</th>
                        <th style="text-align:center">Ijin (I)</th>
                        <th style="text-align:center">Sakit (S)</th>
                        <th style="text-align:center">Alpha (A)</th>
                        <th>Keterangan</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="font-family: monospace;">220101</td>
                        <td style="font-weight:600">Budi Santoso</td>
                        <td style="text-align:center"><input type="radio" name="absen1" checked style="width:18px; height:18px; accent-color:#10b981;"></td>
                        <td style="text-align:center"><input type="radio" name="absen1" style="width:18px; height:18px; accent-color:#3b82f6;"></td>
                        <td style="text-align:center"><input type="radio" name="absen1" style="width:18px; height:18px; accent-color:#f59e0b;"></td>
                        <td style="text-align:center"><input type="radio" name="absen1" style="width:18px; height:18px; accent-color:#ef4444;"></td>
                        <td><input type="text" class="btn btn-sm btn-secondary" placeholder="Catatan..." style="width:100%"></td>
                    </tr>
                    <tr>
                        <td style="font-family: monospace;">220102</td>
                        <td style="font-weight:600">Siti Aminah</td>
                        <td style="text-align:center"><input type="radio" name="absen2" checked style="width:18px; height:18px; accent-color:#10b981;"></td>
                        <td style="text-align:center"><input type="radio" name="absen2" style="width:18px; height:18px; accent-color:#3b82f6;"></td>
                        <td style="text-align:center"><input type="radio" name="absen2" style="width:18px; height:18px; accent-color:#f59e0b;"></td>
                        <td style="text-align:center"><input type="radio" name="absen2" style="width:18px; height:18px; accent-color:#ef4444;"></td>
                        <td><input type="text" class="btn btn-sm btn-secondary" placeholder="Catatan..." style="width:100%"></td>
                    </tr>
                </tbody>
            </table>
            <div style="padding: 20px; text-align: right;">
                <button class="btn btn-primary">Simpan Absensi</button>
            </div>
        </div>
    `;
}

// 4. MONITORING MAHASISWA
function loadMonitoring() {
    mainContent.innerHTML = `
        <div class="card-header" style="margin-bottom: 24px;">
            <div>
                <h2 style="font-size: 24px; font-weight: 700; margin-bottom: 4px;">Monitoring Mahasiswa</h2>
                <p style="color: #6b7280;">Pantau performa dan kehadiran mahasiswa yang bermasalah</p>
            </div>
        </div>

        <div class="stats-grid">
             <div class="stat-card-dashboard">
                <div class="stat-header">
                    <div class="stat-info">
                        <p>Mahasiswa Terancam DO</p>
                        <h3 style="color: #dc2626;">2</h3>
                        <div class="stat-detail">Kehadiran < 50%</div>
                    </div>
                    <div class="stat-icon" style="background: #fee2e2; color: #dc2626;">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                             <circle cx="12" cy="12" r="10"/>
                            <line x1="12" y1="8" x2="12" y2="12"/>
                            <line x1="12" y1="16" x2="12.01" y2="16"/>
                        </svg>
                    </div>
                </div>
            </div>
             <div class="stat-card-dashboard">
                <div class="stat-header">
                    <div class="stat-info">
                        <p>Kehadiran Kurang</p>
                        <h3 style="color: #d97706;">8</h3>
                        <div class="stat-detail">Kehadiran 50% - 75%</div>
                    </div>
                    <div class="stat-icon orange">
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
                <h3 class="card-title">Daftar Mahasiswa Perlu Perhatian</h3>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>NIM</th>
                        <th>Nama</th>
                        <th>Kelas</th>
                        <th style="text-align: center;">Total Kehadiran</th>
                        <th style="text-align: center;">Rata-rata Nilai</th>
                        <th style="text-align: center;">Status</th>
                        <th style="text-align: center;">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>220101045</td>
                        <td>Doni Setiawan</td>
                        <td>TI-5A</td>
                        <td style="text-align: center; color: #dc2626; font-weight: 700;">45%</td>
                        <td style="text-align: center;">60</td>
                        <td style="text-align: center;"><span class="badge" style="background: #fee2e2; color: #dc2626;">Kritis</span></td>
                        <td style="text-align: center;">
                            <button class="btn btn-sm btn-primary">Hubungi</button>
                        </td>
                    </tr>
                     <tr>
                        <td>220101052</td>
                        <td>Rina Wati</td>
                        <td>TI-5B</td>
                        <td style="text-align: center; color: #d97706; font-weight: 700;">68%</td>
                        <td style="text-align: center;">75</td>
                        <td style="text-align: center;"><span class="badge" style="background: #fef3c7; color: #d97706;">Peringatan</span></td>
                         <td style="text-align: center;">
                            <button class="btn btn-sm btn-primary">Hubungi</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;
}

// 5. UPLOAD MATERI & TUGAS
function loadUpload() {
    mainContent.innerHTML = `
        <div class="card-header" style="margin-bottom: 24px;">
            <div>
                <h2 style="font-size: 24px; font-weight: 700; margin-bottom: 4px;">Upload Materi & Tugas</h2>
                <p style="color: #6b7280;">Bagikan modul perkuliahan atau berikan tugas kepada mahasiswa</p>
            </div>
        </div>

        <div class="card" style="margin-bottom: 24px;">
             <div class="card-header">
                <h3 class="card-title">Form Upload</h3>
            </div>
            <div style="display: grid; gap: 16px;">
                 <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                    <div>
                        <label style="display: block; margin-bottom: 8px; font-weight: 500;">Jenis Upload</label>
                        <select id="uploadType" class="form-control" style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px;">
                            <option value="materi">Materi Perkuliahan</option>
                            <option value="tugas">Tugas / Proyek</option>
                        </select>
                    </div>
                     <div>
                        <label style="display: block; margin-bottom: 8px; font-weight: 500;">Mata Kuliah</label>
                        <select class="form-control" style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px;">
                            <option>Pemrograman Web</option>
                             <option>Basis Data Lanjut</option>
                        </select>
                    </div>
                 </div>

                 <div>
                    <label style="display: block; margin-bottom: 8px; font-weight: 500;">Judul</label>
                    <input type="text" class="form-control" placeholder="Contoh: Modul 1 atau Tugas Proyek API" style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px;">
                </div>

                <!-- Dynamic Fields for Tugas -->
                <div id="tugasFields" style="display: none; grid-template-columns: 1fr 1fr; gap: 16px;">
                    <div>
                        <label style="display: block; margin-bottom: 8px; font-weight: 500;">Deadline Pengumpulan</label>
                        <input type="date" class="form-control" style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px;">
                    </div>
                     <div>
                        <label style="display: block; margin-bottom: 8px; font-weight: 500;">Bobot Nilai (%)</label>
                        <input type="number" class="form-control" placeholder="0-100" style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px;">
                    </div>
                </div>

                <div id="descField" style="display: none;">
                    <label style="display: block; margin-bottom: 8px; font-weight: 500;">Deskripsi / Instruksi Tugas</label>
                    <textarea class="form-control" rows="4" placeholder="Jelaskan detail tugas di sini..." style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px;"></textarea>
                </div>

                <div>
                   <label style="display: block; margin-bottom: 8px; font-weight: 500;">File Lampiran (Opsional)</label>
                   <div style="border: 2px dashed #d1d5db; padding: 32px; text-align: center; border-radius: 8px; background: #f9fafb; cursor: pointer;" onclick="document.getElementById('fileInput').click()">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2" style="margin-bottom: 8px;">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                            <polyline points="17 8 12 3 7 8"/>
                            <line x1="12" y1="3" x2="12" y2="15"/>
                        </svg>
                        <p style="color: #6b7280;">Klik untuk pilih file atau drag & drop disini</p>
                        <input type="file" id="fileInput" style="display: none;">
                   </div>
                </div>
                <div style="text-align: right;">
                    <button class="btn btn-primary" onclick="alert('Data berhasil disimpan!')">Simpan & Publikasikan</button>
                </div>
            </div>
        </div>

        <div class="card">
             <div class="card-header">
                <h3 class="card-title">Riwayat Upload & Tugas</h3>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Tanggal</th>
                        <th>Judul</th>
                        <th>Kategori</th>
                        <th>Mata Kuliah</th>
                        <th>Status</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>12 Des 2024</td>
                        <td>Proyek REST API</td>
                        <td><span class="badge" style="background: #fef3c7; color: #d97706;">Tugas</span></td>
                        <td>Pemrograman Web</td>
                        <td><span style="font-size: 13px;">Deadline: 15 Des</span></td>
                        <td>
                            <button class="btn btn-sm btn-secondary">Detail</button>
                        </td>
                    </tr>
                     <tr>
                        <td>10 Des 2024</td>
                        <td>Modul Pertemuan 13</td>
                         <td><span class="badge" style="background: #e0e7ff; color: #4338ca;">Materi</span></td>
                        <td>Pemrograman Web</td>
                         <td>2.4 MB</td>
                        <td>
                            <button class="btn btn-sm btn-secondary" style="color: #dc2626;">Hapus</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;

    // Add event listener for Type selection
    setTimeout(() => {
        const typeSelect = document.getElementById('uploadType');
        const tugasFields = document.getElementById('tugasFields');
        const descField = document.getElementById('descField');

        if (typeSelect) {
            typeSelect.addEventListener('change', function () {
                if (this.value === 'tugas') {
                    tugasFields.style.display = 'grid';
                    descField.style.display = 'block';
                } else {
                    tugasFields.style.display = 'none';
                    descField.style.display = 'none';
                }
            });
        }
    }, 0);
}

// 6. PENGATURAN
function loadSettings() {
    mainContent.innerHTML = `
        <div class="card-header" style="margin-bottom: 24px;">
            <div>
                <h2 style="font-size: 24px; font-weight: 700; margin-bottom: 4px;">Pengaturan Akun</h2>
                <p style="color: #6b7280;">Kelola informasi profil dan keamanan akun Anda</p>
            </div>
        </div>

        <div style="display: grid; gap: 24px;">
            <!-- Profil Section -->
            <div class="card">
                <div class="card-header" style="border-bottom: 1px solid #e5e7eb; padding-bottom: 16px; margin-bottom: 16px;">
                    <h3 class="card-title">Profil Dosen</h3>
                </div>
                <div style="display: flex; gap: 24px; align-items: start;">
                    <div style="text-align: center;">
                        <div style="width: 100px; height: 100px; background: #e0e7ff; color: #4f46e5; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 36px; font-weight: 700; margin-bottom: 12px; margin-left: auto; margin-right: auto;">
                            AF
                        </div>
                        <button class="btn btn-sm btn-secondary" style="width: 100%;">Ubah Foto</button>
                    </div>
                    <div style="flex: 1; display: grid; gap: 16px;">
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                            <div>
                                <label style="display: block; margin-bottom: 6px; font-weight: 500; font-size: 14px;">Nama Lengkap</label>
                                <input type="text" class="form-control" value="Dr. Ahmad Fauzi, M.Kom" style="width: 100%; padding: 8px 12px; border: 1px solid #d1d5db; border-radius: 6px;">
                            </div>
                             <div>
                                <label style="display: block; margin-bottom: 6px; font-weight: 500; font-size: 14px;">NIP</label>
                                <input type="text" class="form-control" value="0012018801" style="width: 100%; padding: 8px 12px; border: 1px solid #d1d5db; border-radius: 6px;">
                            </div>
                        </div>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                            <div>
                                <label style="display: block; margin-bottom: 6px; font-weight: 500; font-size: 14px;">Email</label>
                                <input type="email" class="form-control" value="ahmad.fauzi@univ.ac.id" style="width: 100%; padding: 8px 12px; border: 1px solid #d1d5db; border-radius: 6px;">
                            </div>
                             <div>
                                <label style="display: block; margin-bottom: 6px; font-weight: 500; font-size: 14px;">Nomor Telepon</label>
                                <input type="tel" class="form-control" value="081234567890" style="width: 100%; padding: 8px 12px; border: 1px solid #d1d5db; border-radius: 6px;">
                            </div>
                        </div>
                        <div style="text-align: right; margin-top: 8px;">
                             <button class="btn btn-primary" onclick="alert('Profil berhasil diperbarui!')">Simpan Perubahan</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Keamanan Section -->
            <div class="card">
                <div class="card-header" style="border-bottom: 1px solid #e5e7eb; padding-bottom: 16px; margin-bottom: 16px;">
                    <h3 class="card-title">Keamanan</h3>
                </div>
                <div style="max-width: 600px;">
                    <div style="margin-bottom: 16px;">
                        <label style="display: block; margin-bottom: 6px; font-weight: 500; font-size: 14px;">Password Saat Ini</label>
                        <input type="password" class="form-control" placeholder="Masukkan password saat ini" style="width: 100%; padding: 8px 12px; border: 1px solid #d1d5db; border-radius: 6px;">
                    </div>
                    <div style="margin-bottom: 16px;">
                         <label style="display: block; margin-bottom: 6px; font-weight: 500; font-size: 14px;">Password Baru</label>
                        <input type="password" class="form-control" placeholder="Minimal 8 karakter" style="width: 100%; padding: 8px 12px; border: 1px solid #d1d5db; border-radius: 6px;">
                    </div>
                    <div style="margin-bottom: 16px;">
                         <label style="display: block; margin-bottom: 6px; font-weight: 500; font-size: 14px;">Konfirmasi Password Baru</label>
                        <input type="password" class="form-control" placeholder="Ulangi password baru" style="width: 100%; padding: 8px 12px; border: 1px solid #d1d5db; border-radius: 6px;">
                    </div>
                    <button class="btn btn-secondary" onclick="alert('Password berhasil diubah!')">Update Password</button>
                </div>
            </div>

            <!-- Notifikasi Section -->
             <div class="card">
                <div class="card-header" style="border-bottom: 1px solid #e5e7eb; padding-bottom: 16px; margin-bottom: 16px;">
                    <h3 class="card-title">Preferensi Notifikasi</h3>
                </div>
                <div style="display: grid; gap: 16px;">
                    <div style="display: flex; justify-content: space-between; align-items: center; padding-bottom: 12px; border-bottom: 1px solid #f3f4f6;">
                        <div>
                            <h4 style="font-weight: 600; font-size: 14px;">Notifikasi Email</h4>
                            <p style="color: #6b7280; font-size: 13px;">Terima notifikasi tentang tugas dan jadwal via email</p>
                        </div>
                        <label class="switch" style="position: relative; display: inline-block; width: 44px; height: 24px;">
                            <input type="checkbox" checked style="opacity: 0; width: 0; height: 0;">
                            <span class="slider round" style="position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background-color: #10b981; transition: .4s; border-radius: 34px;"></span>
                            <span style="position: absolute; content: ''; height: 18px; width: 18px; left: 3px; bottom: 3px; background-color: white; transition: .4s; border-radius: 50%; transform: translateX(20px);"></span>
                        </label>
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <div>
                            <h4 style="font-weight: 600; font-size: 14px;">Notifikasi Sistem</h4>
                            <p style="color: #6b7280; font-size: 13px;">Tampilkan popup notifikasi saat sedang online</p>
                        </div>
                         <label class="switch" style="position: relative; display: inline-block; width: 44px; height: 24px;">
                            <input type="checkbox" checked style="opacity: 0; width: 0; height: 0;">
                            <span class="slider round" style="position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background-color: #10b981; transition: .4s; border-radius: 34px;"></span>
                             <span style="position: absolute; content: ''; height: 18px; width: 18px; left: 3px; bottom: 3px; background-color: white; transition: .4s; border-radius: 50%; transform: translateX(20px);"></span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Default load
loadDashboard();
