import React from 'react';
import { Card, Typography } from 'antd';

const { Title } = Typography;

export const TableSection = () => {
  return (
    <Card id="tablica" className="sec-card sec-table">
      <Title level={2} className="section-title">
        Таблица
      </Title>
      <div className="table-wrapper">
        <table className="centered-table">
          <thead>
            <tr>
              <th>Колонка 1</th>
              <th>Колонка 2</th>
              <th>Колонка 3</th>
              <th>Колонка 4</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={2}>Ячейка 11 и ячейка 12</td>
              <td>Ячейка 13</td>
              <td>Ячейка 14</td>
            </tr>
            <tr>
              <td colSpan={3}>Ячейка 21 и ячейка 22 и ячека 23</td>
              <td>Ячейка 24</td>
            </tr>
            <tr>
              <td colSpan={4}>
                Ячейка 31 и ячека 32 и ячейка 33 и ячейка 34
              </td>
            </tr>
            <tr>
              <td>Ячейка 21</td>
              <td>Ячейка 22</td>
              <td>Ячейка 21</td>
              <td>Ячейка 22</td>
            </tr>
            <tr>
              <td>Ячейка 21</td>
              <td>Ячейка 22</td>
              <td>Ячейка 21</td>
              <td>Ячейка 22</td>
            </tr>
            <tr>
              <td>Ячейка 21</td>
              <td>Ячейка 22</td>
              <td>Ячейка 21</td>
              <td>Ячейка 22</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Card>
  );
};