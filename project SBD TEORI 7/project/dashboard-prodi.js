// Navigasi Logic
const navItems = document.querySelectorAll('.nav-item[data-page]');
const mainContent = document.getElementById('mainContent');

// Tambahkan event listener ke setiap menu sidebar
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navItems.forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');
        
        const page = item.dataset.page;
        loadPage(page);
    });
});

// Logout (Dummy)
document.getElementById('logoutBtn').addEventListener('click', () => {
    alert("Logout berhasil");
    window.location.href = 'index.html'; // Ganti dengan halaman login Anda
});

// Router Halaman
function loadPage(page) {
    switch(page) {
        case 'dashboard':
            loadDashboard();
            break;
        case 'approval-krs':
            loadApprovalKRS();
            break;
        case 'kurikulum':
            loadKurikulum();
            break;
        case 'laporan':
            loadLaporan();
            break;
        case 'pengaturan':
            loadPengaturan();
            break;
        default:
            loadDashboard();
    }
}

// ==========================================
// 1. DASHBOARD OVERVIEW (Statistik Akademik) [cite: 116]
// ==========================================
function loadDashboard() {
    mainContent.innerHTML = `
        <div class="stats-grid">
            <div class="stat-card-dashboard">
                <div class="stat-header">
                    <div class="stat-info">
                        <p>Total Mahasiswa</p>
                        <h3>450</h3>
                        <div class="stat-detail">D3 TI Vokasi</div>
                    </div>
                    <div class="stat-icon blue">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                            <circle cx="9" cy="7" r="4"/>
                        </svg>
                    </div>
                </div>
            </div>

            <div class="stat-card-dashboard">
                <div class="stat-header">
                    <div class="stat-info">
                        <p>KRS Menunggu Approval</p>
                        <h3 style="color: #d97706;">25</h3>
                        <div class="stat-detail">Perlu tindakan segera</div>
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

            <div class="stat-card-dashboard">
                <div class="stat-header">
                    <div class="stat-info">
                        <p>Rata-rata IPK Prodi</p>
                        <h3>3.45</h3>
                        <div class="stat-detail" style="color: #059669;">Target: 3.50</div>
                    </div>
                    <div class="stat-icon green">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                             <line x1="18" y1="20" x2="18" y2="10"/>
                             <line x1="12" y1="20" x2="12" y2="4"/>
                             <line x1="6" y1="20" x2="6" y2="14"/>
                        </svg>
                    </div>
                </div>
            </div>
            
            <div class="stat-card-dashboard">
                <div class="stat-header">
                    <div class="stat-info">
                        <p>Mahasiswa Berisiko</p>
                        <h3 style="color: #dc2626;">12</h3>
                        <div class="stat-detail">IPK < 2.0 atau Absen < 75%</div>
                    </div>
                    <div class="stat-icon" style="background: #fee2e2; color: #dc2626;">
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
                <h3 class="card-title">Status Mahasiswa per Angkatan</h3>
            </div>
            <div style="padding: 20px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;">
                <div style="text-align: center; padding: 15px; background: #f0f9ff; border-radius: 8px;">
                    <h4 style="font-size: 18px; color: #0284c7;">Angkatan 2024</h4>
                    <p style="font-size: 24px; font-weight: bold;">150</p>
                    <span class="badge badge-success">Aktif</span>
                </div>
                <div style="text-align: center; padding: 15px; background: #f0fdf4; border-radius: 8px;">
                    <h4 style="font-size: 18px; color: #059669;">Angkatan 2023</h4>
                    <p style="font-size: 24px; font-weight: bold;">145</p>
                    <span class="badge badge-success">Aktif</span>
                </div>
                <div style="text-align: center; padding: 15px; background: #fff7ed; border-radius: 8px;">
                    <h4 style="font-size: 18px; color: #ea580c;">Angkatan 2022</h4>
                    <p style="font-size: 24px; font-weight: bold;">155</p>
                    <span class="badge badge-warning">Tingkat Akhir</span>
                </div>
            </div>
        </div>
    `;
}

// ==========================================
// 2. APPROVAL KRS (Monitoring KRS) [cite: 117]
// ==========================================
function loadApprovalKRS() {
    mainContent.innerHTML = `
        <div class="card-header" style="margin-bottom: 24px;">
            <div>
                <h2 style="font-size: 24px; font-weight: 700;">Approval KRS</h2>
                <p style="color: #6b7280;">Validasi Kartu Rencana Studi Mahasiswa</p>
            </div>
            <div style="display: flex; gap: 10px;">
                <input type="text" placeholder="Cari NIM/Nama..." class="btn btn-secondary" style="width: 250px; cursor: text; text-align: left;">
                <select class="btn btn-secondary"><option>Semua Status</option><option>Menunggu</option><option>Disetujui</option></select>
            </div>
        </div>

        <div class="card">
            <table>
                <thead>
                    <tr>
                        <th>NIM</th>
                        <th>Nama Mahasiswa</th>
                        <th>Dosen Wali</th>
                        <th style="text-align: center;">SKS</th>
                        <th style="text-align: center;">IPS Lalu</th>
                        <th style="text-align: center;">Status</th>
                        <th style="text-align: center;">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="font-family: monospace;">220101</td>
                        <td style="font-weight: 600;">Budi Santoso</td>
                        <td>Dr. Ahmad Fauzi</td>
                        <td style="text-align: center;">21</td>
                        <td style="text-align: center;">3.75</td>
                        <td style="text-align: center;"><span class="badge badge-warning">Menunggu</span></td>
                        <td style="text-align: center;">
                            <button class="btn btn-sm btn-primary">Approve</button>
                            <button class="btn btn-sm btn-secondary" style="color: #dc2626;">Reject</button>
                        </td>
                    </tr>
                    <tr>
                        <td style="font-family: monospace;">220105</td>
                        <td style="font-weight: 600;">Citra Lestari</td>
                        <td>Dewi Sartika, M.Kom</td>
                        <td style="text-align: center;">24</td>
                        <td style="text-align: center;">3.90</td>
                        <td style="text-align: center;"><span class="badge badge-warning">Menunggu</span></td>
                        <td style="text-align: center;">
                            <button class="btn btn-sm btn-primary">Approve</button>
                            <button class="btn btn-sm btn-secondary" style="color: #dc2626;">Reject</button>
                        </td>
                    </tr>
                     <tr>
                        <td style="font-family: monospace;">220110</td>
                        <td style="font-weight: 600;">Doni Tata</td>
                        <td>Ir. Budi Santoso</td>
                        <td style="text-align: center;">20</td>
                        <td style="text-align: center;">3.20</td>
                        <td style="text-align: center;"><span class="badge badge-success">Disetujui</span></td>
                        <td style="text-align: center;">
                            <button class="btn btn-sm btn-secondary" disabled>Selesai</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;
}

// ==========================================
// 3. KURIKULUM (Kelola Kurikulum) [cite: 7, 118]
// ==========================================
function loadKurikulum() {
    mainContent.innerHTML = `
        <div class="card-header" style="margin-bottom: 24px;">
            <div>
                <h2 style="font-size: 24px; font-weight: 700;">Manajemen Kurikulum</h2>
                <p style="color: #6b7280;">Daftar Mata Kuliah Aktif Tahun 2024</p>
            </div>
            <button class="btn btn-primary">+ Tambah Mata Kuliah</button>
        </div>

        <div class="card">
            <div class="card-header">
                <h3 class="card-title">Semester 5 (Ganjil)</h3>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Kode MK</th>
                        <th>Nama Mata Kuliah</th>
                        <th style="text-align: center;">SKS</th>
                        <th style="text-align: center;">Jenis</th>
                        <th>Dosen Koordinator</th>
                        <th style="text-align: center;">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="font-family: monospace;">TI301</td>
                        <td style="font-weight: 600;">Pemrograman Web</td>
                        <td style="text-align: center;">3</td>
                        <td style="text-align: center;"><span class="badge badge-success">Wajib</span></td>
                        <td>Dr. Ahmad Fauzi</td>
                        <td style="text-align: center;">
                            <button class="btn btn-sm btn-secondary">Edit</button>
                        </td>
                    </tr>
                    <tr>
                        <td style="font-family: monospace;">TI302</td>
                        <td style="font-weight: 600;">Basis Data Lanjut</td>
                        <td style="text-align: center;">3</td>
                        <td style="text-align: center;"><span class="badge badge-success">Wajib</span></td>
                        <td>Dewi Sartika, M.Kom</td>
                        <td style="text-align: center;">
                            <button class="btn btn-sm btn-secondary">Edit</button>
                        </td>
                    </tr>
                    <tr>
                        <td style="font-family: monospace;">TI307</td>
                        <td style="font-weight: 600;">Machine Learning</td>
                        <td style="text-align: center;">3</td>
                        <td style="text-align: center;"><span class="badge badge-info">Pilihan</span></td>
                        <td>Dr. Lisa Permata</td>
                        <td style="text-align: center;">
                            <button class="btn btn-sm btn-secondary">Edit</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;
}

// ==========================================
// 4. LAPORAN & PENGATURAN [cite: 119]
// ==========================================
function loadLaporan() {
    mainContent.innerHTML = `
        <div class="card-header" style="margin-bottom: 24px;">
            <div>
                <h2 style="font-size: 24px; font-weight: 700;">Laporan Akademik</h2>
                <p style="color: #6b7280;">Cetak laporan untuk arsip prodi</p>
            </div>
        </div>

        <div class="card-grid-2">
            <div class="card">
                <div class="card-header"><h3 class="card-title">Laporan Nilai & KHS</h3></div>
                <div style="padding: 20px;">
                    <p style="color: #6b7280; margin-bottom: 15px;">Rekapitulasi nilai mahasiswa per semester.</p>
                    <button class="btn btn-primary" style="width: 100%;">Download PDF</button>
                </div>
            </div>
            <div class="card">
                <div class="card-header"><h3 class="card-title">Laporan Kehadiran</h3></div>
                <div style="padding: 20px;">
                    <p style="color: #6b7280; margin-bottom: 15px;">Rekapitulasi absensi per mata kuliah.</p>
                    <button class="btn btn-primary" style="width: 100%;">Download Excel</button>
                </div>
            </div>
            <div class="card">
                <div class="card-header"><h3 class="card-title">Statistik Prestasi</h3></div>
                <div style="padding: 20px;">
                    <p style="color: #6b7280; margin-bottom: 15px;">Data mahasiswa berprestasi dan IPK tertinggi.</p>
                    <button class="btn btn-secondary" style="width: 100%;">Lihat Detail</button>
                </div>
            </div>
            <div class="card">
                <div class="card-header"><h3 class="card-title">Laporan Kurikulum</h3></div>
                <div style="padding: 20px;">
                    <p style="color: #6b7280; margin-bottom: 15px;">Dokumen sebaran mata kuliah aktif.</p>
                    <button class="btn btn-secondary" style="width: 100%;">Lihat Detail</button>
                </div>
            </div>
        </div>
    `;
}

function loadPengaturan() {
    mainContent.innerHTML = `
        <div class="card-header"><h2>Pengaturan Prodi</h2></div>
        <div class="card" style="max-width: 600px;">
            <div style="display: grid; gap: 16px; padding: 20px;">
                <div>
                    <label style="display: block; margin-bottom: 8px; font-weight: 600;">Periode Akademik Aktif</label>
                    <select class="btn btn-secondary" style="width: 100%;">
                        <option selected>Ganjil 2024/2025</option>
                        <option>Genap 2024/2025</option>
                    </select>
                </div>
                <div>
                    <label style="display: block; margin-bottom: 8px; font-weight: 600;">Batas Pengisian KRS</label>
                    <input type="date" class="btn btn-secondary" style="width: 100%;" value="2024-08-30">
                </div>
                <div>
                    <label style="display: block; margin-bottom: 8px; font-weight: 600;">Status Sistem</label>
                    <div style="display: flex; gap: 10px;">
                        <label><input type="radio" name="sys" checked> Masa Perkuliahan</label>
                        <label><input type="radio" name="sys"> Masa Ujian</label>
                        <label><input type="radio" name="sys"> Libur</label>
                    </div>
                </div>
                <button class="btn btn-primary">Simpan Konfigurasi</button>
            </div>
        </div>
    `;
}

// Load default page
loadDashboard();