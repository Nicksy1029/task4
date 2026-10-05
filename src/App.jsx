import React from "react";
import { Layout, Row, Col } from "antd";
import { HeaderSection } from "./components/HeaderSection";
import { LinksSection } from "./components/LinksSection";
import { TableSection } from "./components/TableSection";
import { FormSection } from "./components/FormSection";
import "./App.css";

const { Content, Footer } = Layout;

function App() {
  return (
    <Layout className="app-layout">
      {/* Шапка */}
      <HeaderSection />

      {/* Основной контент */}
      <Content className="main-content">
        <div className="content-container">
          <Row gutter={[16, 24]}>
            {/*
              Порядок в Mobile First (xs):
              1. Таблица (order 1)
              2. Список (order 2)
              3. Форма (order 3)

              На экранах от md (768px и выше) порядок стандартный
            */}
            <Col xs={{ span: 24, order: 1 }} md={{ span: 24, order: 2 }}>
              <section id="table"><TableSection /></section>
            </Col>

            <Col xs={{ span: 24, order: 2 }} md={{ span: 24, order: 1 }}>
              <section id="list"><LinksSection /></section>
            </Col>

            <Col xs={{ span: 24, order: 3 }} md={{ span: 24, order: 3 }}>
              <section id="form"><FormSection /></section>
            </Col>
          </Row>
        </div>
      </Content>

      {/* Подвал */}
      <Footer
        className="app-footer"
        style={{
          backgroundColor: "#4338ca",
          color: "#ffffff",
          textAlign: "center",
          padding: "20px 0",
          width: "100%",
          fontWeight: "bold",
          fontSize: "16px",
        }}
      >
        <div className="footer-container">
          <p className="foot-text">(c) Горбатовский Михаил</p>
        </div>
      </Footer>
    </Layout>
  );
}

export default App;
