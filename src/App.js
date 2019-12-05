import React, {Component} from 'react';
import {Container, Row, Col, Card} from 'react-bootstrap';
import { Input } from "semantic-ui-react";
import View from "react-flexbox";
import { Icon } from "react-icons-kit";
import { user, bell } from "react-icons-kit/feather";
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

            {/* CAROUSEL */}
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

              {/* ALERT */}
            </div>
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
            <div style={{ marginBottom: 100 }}>
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
                        <View
                          column
                          style={{width: "80%" }}
                        >
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
                      src="https://secure-awan.lakupon.com/cdn/600/dl-8565-201901081038577447_600.jpg"
                    />
                    <Card.Body>
                      <Card.Title>Cilegon Green Waterpark</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </View>
              </View>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
