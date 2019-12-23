import React, {Component} from 'react';
import {Container, Row, Col, Card} from 'react-bootstrap';
import { Input } from "semantic-ui-react";
import View from "react-flexbox";
import { Icon } from "react-icons-kit";
import { user, bell, packageIcon, dollarSign } from "react-icons-kit/feather";
import {
  u1F372,
  u1F389, 
  u1F485,
  u1F3A2
} from "react-icons-kit/noto_emoji_regular";
import { androidMenu } from "react-icons-kit/ionicons";
import {
  starFullOutline,
  starHalfOutline,
  heartFullOutline
} from "react-icons-kit/typicons";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

class App extends Component {
  render() {
    return (
      // CONTAINER
      <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="6" style={{ backgroundColor: "#f7f7f7" }}>
            {/* HEADER */}
            <View auto row>
              <View column width="86%">
                <div className="ui small icon input" style={{ marginTop: 10 }}>
                  <Input
                    style={{ width: "97%" }}
                    fluid
                    icon="search"
                    iconPosition="left"
                    placeholder="Cari di Lakupon"
                  />
                </div>
              </View>
              <View
                column
                width="8%"
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 5
                }}
              >
                <Icon icon={bell} size={18} style={{ color: "#0040a8" }} />
              </View>
              <View
                column
                width="8%"
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 5
                }}
              >
                <Icon icon={user} size={18} style={{ color: "#0040a8" }} />
              </View>
            </View>

            {/* CAROUSEL COMPONENT*/}
            <div style={{ marginTop: 15 }}>
              <Carousel
                slidesPerPage={1}
                infinite
                keepDirectionWhenDragging
                autoPlay={2000}
              >
                <img
                  style={{ width: "98%", borderRadius: 7 }}
                  src="https://secure-awan.lakupon.com/cdn/banner/bn-20191203121149.jpg"
                  alt="001"
                />
                <img
                  style={{ width: "98%", borderRadius: 7 }}
                  src="https://secure-awan.lakupon.com/cdn/banner/bn-20191203155529.jpg"
                  alt="002"
                />
                <img
                  style={{ width: "98%", borderRadius: 7 }}
                  src="https://secure-awan.lakupon.com/cdn/banner/bn-20191129101648.jpg"
                  alt="003"
                />
              </Carousel>
            </div>

            {/* ALERT */}
            <div style={{ marginTop: 20 }}>
              <div className="ui negative tiny message">
                <i className="close icon"></i>
                <div className="header">Announcement</div>
                <p>Pemeliharaan sistem dari pukul 09.00 - 15.00</p>
              </div>
            </div>
            <p style={{ marginTop: 20, fontWeight: "500", fontSize: 16 }}>
              Kategori
            </p>

            {/* MENU */}
            <div style={{ marginTop: 15 }}>
              <View auto row>
                <View column width="15%" style={{ alignItems: "center" }}>
                  <div
                    style={{
                      width: 50,
                      height: 50,
                      backgroundColor: "#FFF",
                      borderRadius: 15,
                      borderSize: 1,
                      borderColor: "#000"
                    }}
                  >
                    <Icon
                      icon={u1F372}
                      size={30}
                      style={{
                        color: "#616161",
                        marginTop: "20%",
                        marginLeft: "20%"
                      }}
                    />
                  </div>
                  <p style={{ marginTop: 5 }}>Makanan</p>
                </View>
                <View column width="15%" style={{ alignItems: "center" }}>
                  <div
                    style={{
                      width: 50,
                      height: 50,
                      backgroundColor: "#FFF",
                      borderRadius: 15
                    }}
                  >
                    <Icon
                      icon={u1F389}
                      size={30}
                      style={{
                        color: "#616161",
                        marginTop: "20%",
                        marginLeft: "20%"
                      }}
                    />
                  </div>
                  <p style={{ marginTop: 5 }}>Kegiatan</p>
                </View>
                <View column width="15%" style={{ alignItems: "center" }}>
                  <div
                    style={{
                      width: 50,
                      height: 50,
                      backgroundColor: "#FFF",
                      borderRadius: 15
                    }}
                  >
                    <Icon
                      icon={u1F485}
                      size={30}
                      style={{
                        color: "#616161",
                        marginTop: "20%",
                        marginLeft: "20%"
                      }}
                    />
                  </div>
                  <p style={{ marginTop: 5 }}>Perawatan</p>
                </View>
                <View column width="15%" style={{ alignItems: "center" }}>
                  <div
                    style={{
                      width: 50,
                      height: 50,
                      backgroundColor: "#FFF",
                      borderRadius: 15
                    }}
                  >
                    <Icon
                      icon={u1F3A2}
                      size={30}
                      style={{
                        color: "#616161",
                        marginTop: "20%",
                        marginLeft: "20%"
                      }}
                    />
                  </div>
                  <p style={{ marginTop: 5 }}>Wisata</p>
                </View>
                <View column width="15%" style={{ alignItems: "center" }}>
                  <div
                    style={{
                      width: 50,
                      height: 50,
                      backgroundColor: "#FFF",
                      borderRadius: 15
                    }}
                  >
                    <Icon
                      icon={androidMenu}
                      size={30}
                      style={{
                        color: "#616161",
                        marginTop: "20%",
                        marginLeft: "20%"
                      }}
                    />
                  </div>
                  <p style={{ marginTop: 5 }}>Semua</p>
                </View>
              </View>
            </div>

            {/* TEXT LAKUPON SPECIAL */}
            <div style={{ marginTop: 20 }}>
              <View auto row>
                <View column>
                  <p style={{ marginTop: 5, fontWeight: "500", fontSize: 16 }}>
                    Lakupon Spesial
                  </p>
                </View>
                <View column>
                  <p
                    style={{
                      marginTop: 5,
                      color: "#0040a8",
                      textAlign: "right"
                    }}
                  >
                    Lihat Semua
                  </p>
                </View>
              </View>
            </div>

            {/* LAKUPON SPECIAL CAROUSEL */}
            <div style={{ marginTop: 15 }}>
              <Carousel clickToChange slidesPerPage={2} infinite>
                <img
                  style={{ width: "98%", borderRadius: 7 }}
                  src="https://secure-awan.lakupon.com/cdn/600/dl-9425-201912021503578027_600.jpg"
                  alt="001"
                />
                <img
                  style={{ width: "98%", borderRadius: 7 }}
                  src="https://secure-awan.lakupon.com/cdn/600/dl-9430-201912031303011537_600.jpg"
                  alt="001"
                />
                <img
                  style={{ width: "98%", borderRadius: 7 }}
                  src="https://secure-awan.lakupon.com/cdn/600/dl-9305-201910101148019437_600.jpg"
                  alt="001"
                />
              </Carousel>
            </div>

            {/* TERBARU */}
            <div style={{ marginTop: 20 }}>
              <View auto row>
                <View column>
                  <p style={{ marginTop: 5, fontWeight: "500", fontSize: 16 }}>
                    Produk Terbaru
                  </p>
                </View>
                <View column>
                  <p
                    style={{
                      marginTop: 5,
                      color: "#0040a8",
                      textAlign: "right"
                    }}
                  >
                    Lihat Semua
                  </p>
                </View>
              </View>
            </div>

            <div style={{ marginTop: 15 }}>
              <View auto row>
                <View column width="50%">
                  <Card style={{ width: "98%" }}>
                    <Card.Img
                      variant="top"
                      src="https://secure-awan.lakupon.com/cdn/600/dl-8946-201906171114476594_600.jpg"
                    />
                    <Card.Body>
                      <Card.Title>Restoran Djakarta Steak</Card.Title>
                      <Card.Text>
                        Paket Makan Untuk 2 / 4 Orang dari Djakarta Steak.
                      </Card.Text>
                      <View auto row style={{ alignItems: "center" }}>
                        <View column>
                          <Card.Text style={{ textDecoration: "line-through" }}>
                            Rp. 100.000
                          </Card.Text>
                        </View>
                        <View column>
                          <Card.Text
                            style={{
                              fontSize: 16,
                              fontWeight: "500",
                              color: "red",
                              textAlign: "right"
                            }}
                          >
                            Rp.60.000
                          </Card.Text>
                        </View>
                      </View>

                      <View auto row>
                        <View column style={{ width: "80%" }}>
                          <View auto row style={{ width: "20%" }}>
                            <View column>
                              <Icon
                                icon={starFullOutline}
                                size={20}
                                style={{
                                  marginTop: 10,
                                  color: "gold"
                                }}
                              />
                            </View>
                            <View column>
                              <Icon
                                icon={starFullOutline}
                                size={20}
                                style={{
                                  marginTop: 10,
                                  color: "gold"
                                }}
                              />
                            </View>
                            <View column>
                              <Icon
                                icon={starFullOutline}
                                size={20}
                                style={{
                                  marginTop: 10,
                                  color: "gold"
                                }}
                              />
                            </View>
                            <View column>
                              <Icon
                                icon={starFullOutline}
                                size={20}
                                style={{
                                  marginTop: 10,
                                  color: "gold"
                                }}
                              />
                            </View>
                            <View column>
                              <Icon
                                icon={starHalfOutline}
                                size={20}
                                style={{
                                  marginTop: 10,
                                  color: "gold"
                                }}
                              />
                            </View>
                          </View>
                        </View>
                        <View column>
                          <Icon
                            icon={heartFullOutline}
                            size={25}
                            style={{
                              marginTop: 10,
                              color: "red"
                            }}
                          />
                        </View>
                      </View>
                    </Card.Body>
                  </Card>
                </View>
                <View column width="50%">
                  <Card style={{ width: "98%" }}>
                    <Card.Img
                      variant="top"
                      src="https://secure-awan.lakupon.com/cdn/600/dl-9435-201912031154512775_600.jpg"
                    />
                    <Card.Body>
                      <Card.Title>Marcopolo Adventure</Card.Title>
                      <Card.Text>
                        Liburan Murah dan Seru Bermain Air Bersama Keluarga.
                      </Card.Text>
                      <View auto row style={{ alignItems: "center" }}>
                        <View column>
                          <Card.Text style={{ textDecoration: "line-through" }}>
                            Rp. 130.000
                          </Card.Text>
                        </View>
                        <View column>
                          <Card.Text
                            style={{
                              fontSize: 16,
                              fontWeight: "500",
                              color: "red",
                              textAlign: "right"
                            }}
                          >
                            Rp.90.000
                          </Card.Text>
                        </View>
                      </View>

                      <View auto row>
                        <View column style={{ width: "80%" }}>
                          <View auto row style={{ width: "20%" }}>
                            <View column>
                              <Icon
                                icon={starFullOutline}
                                size={20}
                                style={{
                                  marginTop: 10,
                                  color: "gold"
                                }}
                              />
                            </View>
                            <View column>
                              <Icon
                                icon={starFullOutline}
                                size={20}
                                style={{
                                  marginTop: 10,
                                  color: "gold"
                                }}
                              />
                            </View>
                            <View column>
                              <Icon
                                icon={starFullOutline}
                                size={20}
                                style={{
                                  marginTop: 10,
                                  color: "gold"
                                }}
                              />
                            </View>
                            <View column>
                              <Icon
                                icon={starFullOutline}
                                size={20}
                                style={{
                                  marginTop: 10,
                                  color: "gold"
                                }}
                              />
                            </View>
                            <View column>
                              <Icon
                                icon={starHalfOutline}
                                size={20}
                                style={{
                                  marginTop: 10,
                                  color: "gold"
                                }}
                              />
                            </View>
                          </View>
                        </View>
                        <View column>
                          <Icon
                            icon={heartFullOutline}
                            size={25}
                            style={{
                              marginTop: 10,
                              color: "red"
                            }}
                          />
                        </View>
                      </View>
                    </Card.Body>
                  </Card>
                </View>
              </View>
            </div>

            {/* REKOMENDASI */}
            <div style={{ marginTop: 20 }}>
              <View auto row>
                <View column>
                  <p style={{ marginTop: 5, fontWeight: "500", fontSize: 16 }}>
                    Rekomendasi Kami
                  </p>
                </View>
                <View column>
                  <p
                    style={{
                      marginTop: 5,
                      color: "#0040a8",
                      textAlign: "right"
                    }}
                  >
                    Lihat Semua
                  </p>
                </View>
              </View>
            </div>

            <div style={{ marginTop: 15 }}>
              <View auto row>
                <View column width="50%">
                  <Card style={{ width: "98%" }}>
                    <Card.Img
                      variant="top"
                      src="https://secure-awan.lakupon.com/cdn/600/dl-8831-201904051024407077_600.jpg"
                    />
                    <Card.Body>
                      <Card.Title>Signature Tangerang City</Card.Title>
                      <Card.Text>
                        Serunya Berkaraoke di Masterpiece Signature 2 Jam.
                      </Card.Text>
                      <View auto row style={{ alignItems: "center" }}>
                        <View column>
                          <Card.Text style={{ textDecoration: "line-through" }}>
                            Rp. 259.000
                          </Card.Text>
                        </View>
                        <View column>
                          <Card.Text
                            style={{
                              fontSize: 16,
                              fontWeight: "500",
                              color: "red",
                              textAlign: "right"
                            }}
                          >
                            Rp.50.000
                          </Card.Text>
                        </View>
                      </View>

                      <View auto row>
                        <View column style={{ width: "80%" }}>
                          <View auto row style={{ width: "20%" }}>
                            <View column>
                              <Icon
                                icon={starFullOutline}
                                size={20}
                                style={{
                                  marginTop: 10,
                                  color: "gold"
                                }}
                              />
                            </View>
                            <View column>
                              <Icon
                                icon={starFullOutline}
                                size={20}
                                style={{
                                  marginTop: 10,
                                  color: "gold"
                                }}
                              />
                            </View>
                            <View column>
                              <Icon
                                icon={starFullOutline}
                                size={20}
                                style={{
                                  marginTop: 10,
                                  color: "gold"
                                }}
                              />
                            </View>
                            <View column>
                              <Icon
                                icon={starFullOutline}
                                size={20}
                                style={{
                                  marginTop: 10,
                                  color: "gold"
                                }}
                              />
                            </View>
                            <View column>
                              <Icon
                                icon={starHalfOutline}
                                size={20}
                                style={{
                                  marginTop: 10,
                                  color: "gold"
                                }}
                              />
                            </View>
                          </View>
                        </View>
                        <View column>
                          <Icon
                            icon={heartFullOutline}
                            size={25}
                            style={{
                              marginTop: 10,
                              color: "red"
                            }}
                          />
                        </View>
                      </View>
                    </Card.Body>
                  </Card>
                </View>
                <View column width="50%">
                  <Card style={{ width: "98%" }}>
                    <Card.Img
                      variant="top"
                      src="https://secure-awan.lakupon.com/cdn/600/dl-9391-201911251132199849_600.jpg"
                    />
                    <Card.Body>
                      <Card.Title>Bakery Hotel Ciputra</Card.Title>
                      <Card.Text>
                        Dapatkan Pilihan Cake Spesial dari Bakery Hotel Ciputra.
                      </Card.Text>
                      <View auto row style={{ alignItems: "center" }}>
                        <View column>
                          <Card.Text style={{ textDecoration: "line-through" }}>
                            Rp. 130.000
                          </Card.Text>
                        </View>
                        <View column>
                          <Card.Text
                            style={{
                              fontSize: 16,
                              fontWeight: "500",
                              color: "red",
                              textAlign: "right"
                            }}
                          >
                            Rp.90.000
                          </Card.Text>
                        </View>
                      </View>

                      <View auto row>
                        <View column style={{ width: "80%" }}>
                          <View auto row style={{ width: "20%" }}>
                            <View column>
                              <Icon
                                icon={starFullOutline}
                                size={20}
                                style={{
                                  marginTop: 10,
                                  color: "gold"
                                }}
                              />
                            </View>
                            <View column>
                              <Icon
                                icon={starFullOutline}
                                size={20}
                                style={{
                                  marginTop: 10,
                                  color: "gold"
                                }}
                              />
                            </View>
                            <View column>
                              <Icon
                                icon={starFullOutline}
                                size={20}
                                style={{
                                  marginTop: 10,
                                  color: "gold"
                                }}
                              />
                            </View>
                            <View column>
                              <Icon
                                icon={starFullOutline}
                                size={20}
                                style={{
                                  marginTop: 10,
                                  color: "gold"
                                }}
                              />
                            </View>
                            <View column>
                              <Icon
                                icon={starHalfOutline}
                                size={20}
                                style={{
                                  marginTop: 10,
                                  color: "gold"
                                }}
                              />
                            </View>
                          </View>
                        </View>
                        <View column>
                          <Icon
                            icon={heartFullOutline}
                            size={25}
                            style={{
                              marginTop: 10,
                              color: "red"
                            }}
                          />
                        </View>
                      </View>
                    </Card.Body>
                  </Card>
                </View>
              </View>
            </div>

            {/* TERPOPULER */}
            <div style={{ marginTop: 20 }}>
              <View auto row>
                <View column>
                  <p style={{ marginTop: 5, fontWeight: "500", fontSize: 16 }}>
                    Produk Terpopuler
                  </p>
                </View>
                <View column>
                  <p
                    style={{
                      marginTop: 5,
                      color: "#0040a8",
                      textAlign: "right"
                    }}
                  >
                    Lihat Semua
                  </p>
                </View>
              </View>
            </div>

            <div style={{ marginTop: 15, marginBottom: 30 }}>
              <View auto row>
                <View column width="50%">
                  <Card style={{ width: "98%" }}>
                    <Card.Img
                      variant="top"
                      src="https://secure-awan.lakupon.com/cdn/600/dl-8800-201903191427303249_600.jpg"
                    />
                    <Card.Body>
                      <Card.Title>Wonderland Adventure</Card.Title>
                      <Card.Text>
                        Nikmati Liburan Murah Bersama Keluarga di Taman.
                      </Card.Text>
                      <View auto row style={{ alignItems: "center" }}>
                        <View column>
                          <Card.Text style={{ textDecoration: "line-through" }}>
                            Rp. 95.000
                          </Card.Text>
                        </View>
                        <View column>
                          <Card.Text
                            style={{
                              fontSize: 16,
                              fontWeight: "500",
                              color: "red",
                              textAlign: "right"
                            }}
                          >
                            Rp.55.000
                          </Card.Text>
                        </View>
                      </View>

                      <View auto row>
                        <View column style={{ width: "80%" }}>
                          <View auto row style={{ width: "20%" }}>
                            <View column>
                              <Icon
                                icon={starFullOutline}
                                size={20}
                                style={{
                                  marginTop: 10,
                                  color: "gold"
                                }}
                              />
                            </View>
                            <View column>
                              <Icon
                                icon={starFullOutline}
                                size={20}
                                style={{
                                  marginTop: 10,
                                  color: "gold"
                                }}
                              />
                            </View>
                            <View column>
                              <Icon
                                icon={starFullOutline}
                                size={20}
                                style={{
                                  marginTop: 10,
                                  color: "gold"
                                }}
                              />
                            </View>
                            <View column>
                              <Icon
                                icon={starFullOutline}
                                size={20}
                                style={{
                                  marginTop: 10,
                                  color: "gold"
                                }}
                              />
                            </View>
                            <View column>
                              <Icon
                                icon={starHalfOutline}
                                size={20}
                                style={{
                                  marginTop: 10,
                                  color: "gold"
                                }}
                              />
                            </View>
                          </View>
                        </View>
                        <View column>
                          <Icon
                            icon={heartFullOutline}
                            size={25}
                            style={{
                              marginTop: 10,
                              color: "red"
                            }}
                          />
                        </View>
                      </View>
                    </Card.Body>
                  </Card>
                </View>
                <View column width="50%">
                  <Card style={{ width: "98%" }}>
                    <Card.Img
                      variant="top"
                      src="https://secure-awan.lakupon.com/cdn/600/dl-9217-201909171304074319_600.jpg"
                    />
                    <Card.Body>
                      <Card.Title>Tiket Masuk Taman Ancol</Card.Title>
                      <Card.Text>
                        Liburan di Taman Impian Jaya Ancol. Harga Promo
                      </Card.Text>
                      <View auto row style={{ alignItems: "center" }}>
                        <View column>
                          <Card.Text style={{ textDecoration: "line-through" }}>
                            Rp. 25.000
                          </Card.Text>
                        </View>
                        <View column>
                          <Card.Text
                            style={{
                              fontSize: 16,
                              fontWeight: "500",
                              color: "red",
                              textAlign: "right"
                            }}
                          >
                            Rp.15.000
                          </Card.Text>
                        </View>
                      </View>

                      <View auto row>
                        <View column style={{ width: "80%" }}>
                          <View auto row style={{ width: "20%" }}>
                            <View column>
                              <Icon
                                icon={starFullOutline}
                                size={20}
                                style={{
                                  marginTop: 10,
                                  color: "gold"
                                }}
                              />
                            </View>
                            <View column>
                              <Icon
                                icon={starFullOutline}
                                size={20}
                                style={{
                                  marginTop: 10,
                                  color: "gold"
                                }}
                              />
                            </View>
                            <View column>
                              <Icon
                                icon={starFullOutline}
                                size={20}
                                style={{
                                  marginTop: 10,
                                  color: "gold"
                                }}
                              />
                            </View>
                            <View column>
                              <Icon
                                icon={starFullOutline}
                                size={20}
                                style={{
                                  marginTop: 10,
                                  color: "gold"
                                }}
                              />
                            </View>
                            <View column>
                              <Icon
                                icon={starHalfOutline}
                                size={20}
                                style={{
                                  marginTop: 10,
                                  color: "gold"
                                }}
                              />
                            </View>
                          </View>
                        </View>
                        <View column>
                          <Icon
                            icon={heartFullOutline}
                            size={25}
                            style={{
                              marginTop: 10,
                              color: "red"
                            }}
                          />
                        </View>
                      </View>
                    </Card.Body>
                  </Card>
                </View>
              </View>
            </div>

            <Col
              xs
              lg="12"
              style={{
                backgroundColor: "#FCFCFC",
                paddingTop: 10,
                marginBotton: 15
              }}
            >
              {/* KENAPA MEMILIH */}
              <div>
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: 16,
                    textAlign: "center",
                    marginBottom: 20
                  }}
                >
                  Kenapa Memilih Lakupon
                </p>
              </div>
              <View auto row style={{marginBottom:20}}>
                <View
                  column
                  style={{
                    alignItems: "center",
                    width: "20%"
                  }}
                >
                  <div
                    style={{
                      width: 80,
                      height: 80,
                      backgroundColor: "#dbdbdb",
                      borderRadius: 90,
                      borderSize: 1,
                      borderColor: "#000",
                      marginBottom: 5
                    }}
                  >
                    <Icon
                      icon={packageIcon}
                      size={30}
                      style={{
                        color: "#616161",
                        marginTop: "30%",
                        marginLeft: "30%"
                      }}
                    />
                  </div>
                  <p style={{ textAlign: "center" }}>
                    Gratis Ongkir Seluruh Indonesia
                  </p>
                </View>
                <View
                  column
                  style={{
                    alignItems: "center",
                    width: "20%"
                  }}
                >
                  <div
                    style={{
                      width: 80,
                      height: 80,
                      backgroundColor: "#dbdbdb",
                      borderRadius: 90,
                      borderSize: 1,
                      borderColor: "#000"
                    }}
                  >
                    <Icon
                      icon={dollarSign}
                      size={30}
                      style={{
                        color: "#616161",
                        marginTop: "30%",
                        marginLeft: "30%"
                      }}
                    />
                  </div>
                  <p style={{ textAlign: "center", paddingBottom:10 }}>
                    Harga Termurah
                  </p>
                </View>
              </View>
            </Col>

            <div style={{ marginTop: 25 }}>
              <p style={{ fontWeight: "500", textAlign: "center" }}>
                Lebih Mudah Menggunakan Aplikasi Lakupon. <br />
                Download sekarang dan nikmati semua kemudahannya.
              </p>
            </div>
            <div style={{ marginLeft:'17%', marginTop: 10}}>
              <img
                style={{ alignSelf:"center", width: "80%"}}
                src="https://i.ibb.co/LNHCvqN/logo.png"
                alt="001"
              />
            </div>
            <div style={{marginTop:20}}>
              <p style={{textAlign:'center'}}>2019 Hak Cipta PT. Online Pertama</p>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
