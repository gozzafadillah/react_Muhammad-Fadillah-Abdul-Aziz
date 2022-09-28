import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useState, useRef } from "react";
import NavbarUtility from "../../utility/Navbar/NavbarUtility";
import { Col, Container, Row } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";

import "./form.css";
import { useNavigate } from "react-router-dom";

function FormComponent() {
  const navigated = useNavigate();

  const BASEDATA = {
    nama: "",
    email: "",
    phoneNumber: "",
    pendidikan: "",
    kelas: "",
    harapan: "",
  };

  const BASEERROR = {
    nama: "",
    email: "",
    phoneNumber: "",
  };

  const suratKesungguhan = useRef(null);
  const [data, setData] = useState(BASEDATA);
  const [errorMessages, setErrorMessages] = useState(BASEERROR);
  const [tombol, setTombol] = useState(false);

  const regexEmail =
    /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;
  const regexName = /^[A-Za-z ]*$/;
  const emailPattern = new RegExp(regexEmail);

  // Handle onChange
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "nama") {
      if (regexName.test(value)) {
        setErrorMessages({
          ...errorMessages,
          nama: "",
        });
      } else {
        setErrorMessages({
          ...errorMessages,
          nama: "Nama harus berupa huruf",
        });
      }
    }

    if (name === "email") {
      if (emailPattern.test(value)) {
        setErrorMessages({
          ...errorMessages,
          email: "",
        });
      } else {
        setErrorMessages({
          ...errorMessages,
          email: "Format email tidak sesuai",
        });
      }
    }
    if (name === "phoneNumber") {
      // jumlah nomor 9-14
      if (data.phoneNumber.length > 7 && data.phoneNumber.length < 15) {
        setErrorMessages({
          ...errorMessages,
          phoneNumber: "",
        });
      } else {
        setErrorMessages({
          ...errorMessages,
          phoneNumber: "No handphone tidak sesuai",
        });
      }
    }

    setData({
      ...data,
      [name]: value,
    });

    // Check input data
    const isNotEmpty = data.email && data.nama && data.phoneNumber;
    if (isNotEmpty) {
      let newTombol = true;
      setTombol(newTombol);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !errorMessages.nama &&
      !errorMessages.email &&
      !errorMessages.phoneNumber
    ) {
      navigated("/");
      alert(`Data pendaftar "${data.nama}" berhasil diterima`);
    } else {
      alert("Data pendaftar tidak sesuai");
    }
  };

  const kelasTersedia = [
    { id: 1, kelas: "Golang" },
    { id: 2, kelas: "ReactJS" },
    { id: 3, kelas: "Fullstack Developer" },
  ];

  return (
    <>
      <NavbarUtility />
      <h1 className="text-center my-5">Pendaftaran Peserta Coding Bootcamp</h1>
      <Container className="container-form">
        <Row className="justify-content-center">
          <Col md="8">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>
                  <strong>Nama</strong>
                </Form.Label>
                <Form.Control
                  name="nama"
                  type="text"
                  value={data.nama}
                  onChange={handleChange}
                  placeholder="Masukan Nama ..."
                  required
                />
                <p className="text-danger">{errorMessages.nama}</p>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>
                  <strong>Email</strong>
                </Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  onChange={handleChange}
                  value={data.email}
                  placeholder="Masukan Email ..."
                />
                <p className="text-danger">{errorMessages.email}</p>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>
                  <strong>No Handphone</strong>
                </Form.Label>
                <Form.Control
                  name="phoneNumber"
                  type="text"
                  onChange={handleChange}
                  value={data.phoneNumber}
                  placeholder="Masukan No Handphone ..."
                />
                <p className="text-danger">{errorMessages.phoneNumber}</p>
              </Form.Group>

              <Form.Group
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: "30px 150px 30px 0",
                }}
              >
                <Form.Label>
                  <strong>Latar Belakang Pendidikan</strong>
                </Form.Label>

                <Form.Check
                  inline
                  label="Non-IT"
                  name="pendidikan"
                  type="radio"
                  value="Non-IT"
                />
                <Form.Check
                  inline
                  label="IT"
                  name="pendidikan"
                  type="radio"
                  value="IT"
                />
              </Form.Group>

              <Form.Group
                className="mb-3 cek"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Form.Label>
                  <Form.Select
                    className="btn btn-outline-dark"
                    aria-label="Default select example"
                    name="kelas"
                  >
                    <option>Pilih Kelas</option>
                    {kelasTersedia.map((data) => (
                      <option key={data.id} value={data.kelas}>
                        {data.kelas}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Label>
              </Form.Group>

              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Foto Surat Kesungguhan</Form.Label>
                <Form.Control
                  type="file"
                  name="suratKesungguhan"
                  ref={suratKesungguhan}
                />
              </Form.Group>

              <Form.Group controlId="formFile" className="mb-3">
                <FloatingLabel
                  controlId="floatingTextarea2"
                  label="Harapan untuk bootcamp ini"
                >
                  <Form.Control
                    as="textarea"
                    placeholder="Harapan untuk bootcamp ini"
                    style={{ height: "100px" }}
                    name="harapan"
                  />
                </FloatingLabel>
              </Form.Group>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  margin: "50px 0",
                }}
              >
                <Button
                  variant="primary"
                  disabled={!tombol}
                  onChange={handleChange}
                  type="submit"
                >
                  Submit
                </Button>
                <Button variant="danger" type="reset">
                  reset
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default FormComponent;
