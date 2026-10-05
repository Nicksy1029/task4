import React from 'react';
import { Card, Typography } from 'antd';

const { Title } = Typography;

export const LinksSection = () => {
  return (
    <Card id="spisok" className="sec-card sec-links">
      <Title level={2} className="section-title">
        Список
      </Title>
      <ul className="centred-list">
        <li id="first">
          <a href="https://www.kubsu.ru/">
            КубГУ (В чем отличие от следующего должно быть?)
          </a>
        </li>
        <li>
          <a href="https://www.kubsu.ru/">КубГУ https</a>
        </li>
        <li>
          <a href="https://github.com/Nicksy1029">
            <picture>
              <img src="./котик.jpg" alt="котик" style={{ maxWidth: '150px' }} />
            </picture>
          </a>
        </li>
        <li>
          <a href="/about">Внутренняя страница</a>
        </li>
        <li>
          <a href="/">Главная страница</a>
        </li>
        <li>
          <a href="#first">ссылка на первый пункт</a>
        </li>
        <li>
          <a href="page.html?param1=value1&param2=value2&param3=value3">
            ссылка с тремя параметрами
          </a>
        </li>
        <li>
          <a href="page.html?id=calue">ссылка с параметром id</a>
        </li>
        <li>
          <a href="./about">Относительная страница в текущем каталоге</a>
        </li>
        <li>
          <a href="./about/team">Относительная страница в каталоге about</a>
        </li>
        <li>
          <a href="../about">Относительная страница в каталоге уровнем выше</a>
        </li>
        <li>
          <a href="../../about">
            Относительная страница в каталоге двумя уровнями выше
          </a>
        </li>
        <li>
          <p>
            Вот контекстная{' '}
            <a href="https://github.com/Nicksy1029">ссылка</a> внутри абзаца
          </p>
        </li>
        <li>
          <a href="https://ru.wikipedia.org/wiki/Star_Wars:_Knights_of_the_Old_Republic#%D0%A1%D1%8E%D0%B6%D0%B5%D1%82">
            Ссылку на фрагмент страницы стороннего сайта
          </a>
        </li>
        <li>
          <img
            src="./image.jpg"
            useMap="#workmap"
            alt="Картинка с зонами"
            width="300"
            height="400"
          />
        </li>
        <li>
          <a href="">пустой href</a>
        </li>
        <li>
          <a>без href</a>
        </li>
        <li>
          <a href="https://example.com/" rel="nofollow">
            Ссылка по которой запрещен переход поисковикам
          </a>
        </li>
        <li>
          <a href="https://example.com/">
            Ссылка запрещенная для индексации поисковиками
          </a>
        </li>
        <ol>
          <li>
            <a href="https://example.com/">title</a>
          </li>
          <li>
            <a href="https://example.com/">title</a>
          </li>
          <li>
            <a href="https://example.com/">title</a>
          </li>
        </ol>
        <li>
          <a href="ftp://login:password@ftp.example.com/files/document.pdf">
            ссылка на файл на сервере FTP с авторизацией
          </a>
        </li>
      </ul>

      <map name="workmap">
        <area
          shape="rect"
          coords="30,30,200,150"
          href="https://kubsu.ru/"
          alt="Зона 1"
        />
        <area
          shape="rect"
          coords="0,250,200,400"
          href="https://kubsu.ru/"
          alt="Зона 2"
        />
        <area
          shape="circle"
          coords="250,200,60"
          href="https://example.com/"
          alt="Зона 3"
        />
      </map>
    </Card>
  );
};