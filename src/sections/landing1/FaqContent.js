import React, { useState } from "react";
import { Container, Row, Col, Collapse } from "react-bootstrap";

const FaqContent = () => {
  const [openItem, setOpenItem] = useState(1);

  return (
    <>
      {/* <!-- Content section --> */}
      <div className="content-section pt-13 pt-lg-28 pb-15 pb-lg-29  dark-mode-texts">
      <h2 className="title gr-text-2 mb-9 mb-lg-12 text-black text-center">Pertanyaan Umum</h2>

        <Container>
          <Row className="align-items-center justify-content-center">
            <Col
              md="12"
              lg="6"
              xl="6"
              className="offset-xl-1 mt-9 mt-lg-0 "
              data-aos="fade-left"
              data-aos-duration="1200"
            >
              <div
                className="accordion pl-9 pr-8 rounded-10 bg-white border-green border-top-5"
                id="accordionExample"
              >
                <div className="border-bottom overflow-hidden">
                  <div className="mb-0 border-bottom-0" id="heading2-1">
                    <button
                      className="btn-reset gr-text-7 font-weight-bold text-left text-blackish-blue px-0 py-8 accordion-trigger arrow-icon w-100 collapsed"
                      type="button"
                      aria-controls="collapse2-1"
                      onClick={() => setOpenItem(1)}
                      aria-expanded={openItem === 1}
                    >
                      Apa itu Kias Design?
                    </button>
                  </div>

                  <Collapse in={openItem === 1}>
                    <div>
                      <div className="gr-color-blackish-blue-opacity-7 mt-n3 gr-text-9 pb-8 pr-8">
                        Kias Design adalah Penyedia Jasa Desain dan Bangun Interior Rumah berbasis teknologi yang berpartner dengan Desainer Interior dan Kontraktor terbaik.
                      </div>
                    </div>
                  </Collapse>
                </div>
                <div className="border-bottom overflow-hidden">
                  <div className="mb-0 border-bottom-0" id="heading2-2">
                    <button
                      className="btn-reset gr-text-7 font-weight-bold text-left text-blackish-blue px-0 py-8 accordion-trigger arrow-icon w-100 collapsed"
                      type="button"
                      data-target="#collapse2-2"
                      onClick={() => setOpenItem(2)}
                      aria-expanded={openItem === 2}
                    >
                      Mengapa Kias Design dapat menjadi solusi desain dan pembangunan interior rumah kami yang lebih baik daripada penyedia jasa yang lain?
                    </button>
                  </div>

                  <Collapse in={openItem === 2}>
                    <div>
                      <div className="gr-color-blackish-blue-opacity-7 mt-n3 gr-text-9 pb-8 pr-8">
                        Kias Design didirikan oleh tim Interior Desainer Senior Pemenang Penghargaan dengan pengalaman lebih dari satu dekade di industri Interior Desain and Build yang telah dipercayakan untuk mengerjakan proyek Alam Sutera, Ismaya Group, Trans Group, Lippo Group, Trans Group, dan banyak group besar lainnya. Menggunakan teknologi yang modern dalam mendesain sehingga proses desain dan revisi desain dapat dilakukan dengan cepat, tidak perlu menunggu lama untuk mendapatkan desain anda dengan rendering yang menyerupai foto (tidak seperti kartun). Dalam proses pengerjaan desain, customer dapat request untuk mengganti desainer (1x) jika dirasa kurang cocok secara karakter maupun style desain. Uang customer aman, karena kami tidak akan memberikan uang ke mitra produksi sebelum proses dilapangan sesuai dengan proses yang telah disepakati. Waktu handover aman, karena kami akan terkena penalti jika jadwal pengerjaan molor dari tanggal yang telah dijanjikan.
                      </div>
                    </div>
                  </Collapse>
                </div>
                <div className="border-bottom overflow-hidden">
                  <div className="mb-0 border-bottom-0" id="heading2-3">
                    <button
                      className="btn-reset gr-text-7 font-weight-bold text-left text-blackish-blue px-0 py-8 accordion-trigger arrow-icon w-100"
                      type="button"
                      data-target="#collapse2-3"
                      onClick={() => setOpenItem(3)}
                      aria-expanded={openItem === 3}
                    >
                      Apakah saat meeting dengan Kias Design dilakukan secara langsung atau online?
                    </button>
                  </div>

                  <Collapse in={openItem === 3}>
                    <div>
                      <div className="gr-color-blackish-blue-opacity-7 mt-n3 gr-text-9 pb-8 pr-8">
                        Bisa keduanya, tapi demi menghemat waktu anda kami sarankan secara online (zoom) lebih baik.
                      </div>
                    </div>
                  </Collapse>
                </div>
                <div className="border-bottom overflow-hidden">
                  <div className="mb-0 border-bottom-0" id="heading2-3">
                    <button
                      className="btn-reset gr-text-7 font-weight-bold text-left text-blackish-blue px-0 py-8 accordion-trigger arrow-icon w-100"
                      type="button"
                      data-target="#collapse2-4"
                      onClick={() => setOpenItem(4)}
                      aria-expanded={openItem === 4}
                    >
                      Apakah Design Interior memiliki showroom?
                    </button>
                  </div>

                  <Collapse in={openItem === 4}>
                    <div>
                      <div className="gr-color-blackish-blue-opacity-7 mt-n3 gr-text-9 pb-8 pr-8">
                        Design Interior sampai sekarang belum memiliki showroom karena konsep kami full online service, sehingga tidak menambahkan cost yang memberatkan customer. Tetapi kedepannya tidak menutup kemungkinan kami akan mempunyai showroom. Untuk kepentingan melihat hasil pekerjaan kami bisa diatur untuk visit ke proyek kami yang sedang dikerjakan.
                      </div>
                    </div>
                  </Collapse>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default FaqContent;
