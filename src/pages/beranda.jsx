import React from "react";

import * as script from "../script";

function beranda() {
  return (
    <div>
      {/* Header */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="beranda">
            <img src="assets/logo tulisan.png" alt="Logo" className="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="beranda"
                >
                  Beranda
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Kelola Penjualan <i className="fas fa-angle-down"></i>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="laporan" className="dropdown-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.15em"
                        height="1.15em"
                        viewBox="0 0 24 24"
                      >
                        <g fill="none" fill-rule="evenodd">
                          <path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
                          <path
                            fill="currentColor"
                            d="M12 4a2 2 0 0 0-2 2h4a2 2 0 0 0-2-2M9.354 3c.705-.622 1.632-1 2.646-1s1.94.378 2.646 1H18a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM8.126 5H6v15h12V5h-2.126q.124.481.126 1v1a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V6q.002-.519.126-1M8 11a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1m0 4a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1"
                          />
                        </g>
                      </svg>
                      Laporan
                    </a>
                  </li>
                  <li>
                    <a href="catatannelayan1" className="dropdown-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.15em"
                        height="1.15em"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                        >
                          <path d="M4 5h0.01" />
                          <path d="M8 5h12" />
                          <path d="M4 10h0.01" />
                          <path d="M8 10h12" />
                          <path d="M4 15h0.01" />
                          <path d="M8 15h12" />
                          <path d="M4 20h0.01" />
                          <path d="M8 20h12" />
                        </g>
                      </svg>
                      Catatan Nelayan
                    </a>
                  </li>
                  <li>
                    <a href="catatanpengepul1" className="dropdown-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.15em"
                        height="1.15em"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                        >
                          <path d="M4 5h0.01" />
                          <path d="M8 5h12" />
                          <path d="M4 10h0.01" />
                          <path d="M8 10h12" />
                          <path d="M4 15h0.01" />
                          <path d="M8 15h12" />
                          <path d="M4 20h0.01" />
                          <path d="M8 20h12" />
                        </g>
                      </svg>
                      Catatan Pengepul
                    </a>
                  </li>
                  <li>
                    <a href="stok" className="dropdown-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.15em"
                        height="1.15em"
                        viewBox="0 0 256 256"
                      >
                        <path
                          fill="currentColor"
                          d="m222.72 67.9l-88-48.17a13.9 13.9 0 0 0-13.44 0l-88 48.18A14 14 0 0 0 26 80.18v95.64a14 14 0 0 0 7.28 12.27l88 48.18a13.92 13.92 0 0 0 13.44 0l88-48.18a14 14 0 0 0 7.28-12.27V80.18a14 14 0 0 0-7.28-12.28M127 30.25a2 2 0 0 1 1.92 0L212.51 76L128 122.24L43.49 76ZM39 177.57a2 2 0 0 1-1-1.75V86.66l84 46V223Zm177.92 0L134 223v-90.36l84-46v89.16a2 2 0 0 1-1 1.77Z"
                        />
                      </svg>
                      Stok
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="nelayan">
                  Nelayan
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="panduanartikel1">
                  Panduan dan Artikel
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="tentangkami1">
                  Tentang Kami
                </a>
              </li>
              <li className="nav-item gambar-profil">
                <a href="profil" className="nav-link">
                  <img src="assets/pak bahrul.png" alt="Gambar Profil" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Header End */}

      {/* Main Content */}
      <div className="main-content">
        <div className="main-search">
          <input
            type="text"
            placeholder="Apa yang ingin kamu cari?"
            style={{ marginTop: "30px" }}
          />
          <button type="button">
            <img src="assets/Modify Button.png" alt="Modify" />
          </button>
        </div>
        <div className="wrapper-main-content-beranda-primary">
          <div className="main-content-text-beranda">
            <h2>
              Tingkatkan kesejahteraan nelayan dengan sistem pengelolaan stok
              yang efisien, transparan, dan terintegrasi!
            </h2>
            <h3>
              Selamat datang di platform pengelolaan stok perikanan! Kami
              menghubungkan nelayan lokal dengan kemudahan dalam mengelola
              laporan, data stok, riwayat penangkapan, serta bergabung dalam
              komunitas nelayan. Dapatkan akses ke artikel informatif, fitur
              pelacakan stok yang akurat, dan dukungan untuk pengelolaan
              perikanan berkelanjutan.
            </h3>
          </div>
          <div className="main-content-image-beranda">
            <img src="assets/logo.png" alt="" />
          </div>
        </div>
        <div className="wrapper-main-content-panduan-dan-artikel-secondary">
          <div className="wrapper-main-content-panduan-dan-artikel-secondary-header">
            Panduan dan Artikel
          </div>
          <div className="wrapper-main-content-panduan-dan-artikel-secondary-content">
            <div
              className="wrapper-main-content-panduan-dan-artikel-secondary-content-card"
              data-aos="fade-down"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <a
                href="panduanartikel1"
                className="card-main-content-panduan-dan-artikel-secondary"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("assets/artikel 1.png")',
                }}
              >
                <span>15 Oktober 2024</span>
                <img
                  src="assets/favorite.svg"
                  alt="Favorit"
                  onClick={(event) =>
                    script.toggleFavorite(event, event.target)
                  }
                />
                <div className="card-main-content-panduan-dan-artikel-secondary-deskripsi">
                  <div className="card-main-content-panduan-dan-artikel-secondary-deskripsi-wrapper">
                    <div className="card-main-content-panduan-dan-artikel-secondary-deskripsi-kategori">
                      Inovasi
                    </div>
                    <div className="card-main-content-panduan-dan-artikel-secondary-deskripsi-kategori">
                      Tangkapan
                    </div>
                  </div>
                  <p>Inovasi dalam Penangkapan</p>
                </div>
              </a>
              <a
                href="/#"
                className="card-main-content-panduan-dan-artikel-secondary"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("assets/artikel 2.png")',
                }}
              >
                <span>18 Oktober 2024</span>
                <img
                  src="assets/favorite.svg"
                  alt="Favorit"
                  onClick={(event) =>
                    script.toggleFavorite(event, event.target)
                  }
                />
                <div className="card-main-content-panduan-dan-artikel-secondary-deskripsi">
                  <div className="card-main-content-panduan-dan-artikel-secondary-deskripsi-wrapper">
                    <div className="card-main-content-panduan-dan-artikel-secondary-deskripsi-kategori">
                      Tradisi
                    </div>
                    <div className="card-main-content-panduan-dan-artikel-secondary-deskripsi-kategori">
                      Nelayan
                    </div>
                  </div>
                  <p>Tradisi & Modernisasi Nelayan</p>
                </div>
              </a>
              <a
                href="/#"
                className="card-main-content-panduan-dan-artikel-secondary"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("assets/artikel 3.png")',
                }}
              >
                <span>22 Oktober 2024</span>
                <img
                  src="assets/favorite.svg"
                  alt="Favorit"
                  onClick={(event) =>
                    script.toggleFavorite(event, event.target)
                  }
                />
                <div className="card-main-content-panduan-dan-artikel-secondary-deskripsi">
                  <div className="card-main-content-panduan-dan-artikel-secondary-deskripsi-wrapper">
                    <div className="card-main-content-panduan-dan-artikel-secondary-deskripsi-kategori">
                      Inovasi
                    </div>
                    <div className="card-main-content-panduan-dan-artikel-secondary-deskripsi-kategori">
                      Nelayan
                    </div>
                  </div>
                  <p>Inovasi untuk Nelayan</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content End */}

      {/* Popup Welcome */}
      <div className="popup-welcome">
        <div
          className="popup-welcome-content"
          data-aos="fade-down"
          data-aos-delay="300"
          data-aos-duration="850"
          data-aos-once="true"
        >
          <h1>Selamat Datang di Amarine!</h1>
          <h3>
            Kelola hasil tangkapanmu dengan mudah dan efisien! Pantau, catat,
            dan optimalkan hasil tangkapan hanya dengan beberapa langkah
            sederhana.
          </h3>
          <button type="button" onClick={script.tutupPopupWelcome}>
            <img src="assets/close.svg" alt="Tutup" />
          </button>
        </div>
      </div>
      {/* Popup Welcome End */}

      {/* Footer */}
      <footer>
        <div className="container-fluid container-footer">
          <div className="footer-container">
            <div className="wrapper-kiri">
              <div className="logo-footer">
                <p>Amarine</p>
              </div>
              <div className="kontak-kami">
                <p>Kontak Kami</p>
              </div>
              <div className="media-sosial">
                <a href="/#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.65em"
                    height="1.65em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="white"
                      d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
                    />
                  </svg>
                </a>
                <a href="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.65em"
                    height="1.65em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="white"
                      d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
                    />
                  </svg>
                </a>
                <a href="/#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.65em"
                    height="1.65em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="white"
                      d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.2 4.2 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.52 8.52 0 0 1-5.33 1.84q-.51 0-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23"
                    />
                  </svg>
                </a>
                <a href="/#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.65em"
                    height="1.65em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="white"
                      d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
                    />
                  </svg>
                </a>
                <a href="/#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.65em"
                    height="1.65em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="white"
                      d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="wrapper-kanan ms-auto">
              <div className="selengkapnya">
                <a href="/#">Selengkapnya</a>
              </div>
              <div className="extend-selengkapnya">
                <a href="beranda">Beranda</a>
                <a href="panduanartikel1">Artikel</a>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <hr className="border border-white border-1 opacity-50" />
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 64 64"
              >
                <path
                  fill="white"
                  d="M32 2C18.214 2 7 13.216 7 27s11.215 25 25 25s25-11.216 25-25S45.785 2 32 2m0 45.001c-11.029 0-20.001-8.972-20.001-20.001C11.999 15.973 20.97 7.001 32 7.001c11.028 0 19.999 8.972 19.999 19.999C51.998 38.029 43.027 47.001 32 47.001"
                />
                <path
                  fill="white"
                  d="M25.414 19.337a10.5 10.5 0 0 1 3.26-2.338a9.4 9.4 0 0 1 3.994-.86q2.623 0 4.817 1.251a10.5 10.5 0 0 1 3.586 3.342l3.564-2.665a15 15 0 0 0-5.143-4.426Q36.398 12 32.667 12q-3.074 0-5.777 1.19a15.1 15.1 0 0 0-4.713 3.215a15.2 15.2 0 0 0-3.176 4.756q-1.168 2.723-1.168 5.84q0 3.113 1.168 5.841a15.2 15.2 0 0 0 3.176 4.752a15.1 15.1 0 0 0 4.713 3.219q2.705 1.186 5.777 1.187q3.73 0 6.825-1.642a14.95 14.95 0 0 0 5.143-4.426l-3.564-2.661a10.54 10.54 0 0 1-3.586 3.339q-2.194 1.25-4.817 1.25a9.4 9.4 0 0 1-3.994-.86a10.5 10.5 0 0 1-3.26-2.338c-.928-.98-1.666-2.131-2.213-3.441s-.82-2.719-.82-4.22q0-2.256.82-4.222c.82-1.966 1.285-2.458 2.213-3.442"
                />
              </svg>
              2024 Amarine, All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
      {/* Footer End */}
    </div>
  );
}

export default beranda;
