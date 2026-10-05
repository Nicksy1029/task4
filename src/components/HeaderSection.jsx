import React from 'react';
import { Layout, Button } from 'antd';
import './HeaderSection.css';

const { Header } = Layout;

export const HeaderSection = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Header className="site-header">
      <div className="header-content">
        <div className="header-brand">
          <span className="header-title">Задание 4</span>
        </div>

        <nav className="header-nav">
          <Button type="primary" onClick={() => scrollToSection('list')}>
            Список
          </Button>
          <Button type="primary" onClick={() => scrollToSection('table')}>
            Таблица
          </Button>
          <Button type="primary" onClick={() => scrollToSection('form')}>
            Форма
          </Button>
        </nav>
      </div>
    </Header>
  );
};