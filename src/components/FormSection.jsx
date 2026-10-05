import React from 'react';
import {
  Card,
  Typography,
  Form,
  Input,
  DatePicker,
  Radio,
  Select,
  Checkbox,
  Button,
} from 'antd';

const { Title } = Typography;
const { TextArea } = Input;

export const FormSection = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Форма отправлена:', values);
  };

  return (
    <Card id="forma" className="sec-card sec-form">
      <Title level={2} className="section-title">
        Форма
      </Title>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        initialValues={{
          'radio-group-1': 'male',
        }}
        className="centered-form"
      >
        <Form.Item
          label="ФИО"
          name="field_name"
          rules={[
            { required: true, message: 'Введите ФИО' },
            { pattern: /^[А-Яа-я\s]+$/, message: 'Допустимы только кириллица и пробелы' },
          ]}
        >
          <Input placeholder="Введите ФИО" />
        </Form.Item>

        <Form.Item
          label="Телефон (цифры и пробелы):"
          name="field_tel"
          rules={[
            { required: true, message: 'Введите номер телефона' },
            { pattern: /^[0-9\s]*$/, message: 'Допустимы только цифры и пробелы' },
          ]}
        >
          <Input placeholder="Введите номер телефона" />
        </Form.Item>

        <Form.Item
          label="Email:"
          name="field_email"
          rules={[{ type: 'email', message: 'Введите корректный email' }]}
        >
          <Input placeholder="Введите email" />
        </Form.Item>

        <Form.Item
          label="Дата рождения:"
          name="field_date"
          rules={[{ required: true, message: 'Выберите дату рождения' }]}
        >
          <DatePicker style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item label="Пол" name="radio-group-1">
          <Radio.Group>
            <Radio value="male">Мужской</Radio>
            <Radio value="female">Женский</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label="Любимый язык программирования:"
          name="field-name-4"
        >
          <Select
            mode="multiple"
            placeholder="Выберите языки"
            options={[
              { label: 'Pascal', value: 'Значение1' },
              { label: 'C', value: 'Значение2' },
              { label: 'C++', value: 'Значение3' },
              { label: 'Python', value: 'Python' },
              { label: 'C#', value: 'C#' },
              { label: 'Java', value: 'Java' },
              { label: 'JavaScript', value: 'JavaScript' },
              { label: 'Ruby', value: 'Ruby' },
              { label: 'Rust', value: 'Rust' },
              { label: 'Kotlin', value: 'Kotlin' },
              { label: 'PHP', value: 'PHP' },
            ]}
          />
        </Form.Item>

        <Form.Item label="Биография:" name="field-name-2">
          <TextArea
            rows={4}
            placeholder="Напишите о себе, своем опыте"
          />
        </Form.Item>

        <Form.Item
          name="check-1"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(new Error('Необходимо согласиться с контрактом')),
            },
          ]}
        >
          <Checkbox>С контрактом ознакомлен (а)</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Сохранить
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};