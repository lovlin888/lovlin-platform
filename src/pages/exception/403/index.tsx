import { Result, Button } from 'antd';
import React from 'react';

export default () => (
  <Result
    status="403"
    title="403"
    style={{
      background: 'none',
    }}
    subTitle="Sorry, you don't have access to this page."
    extra={
      <Button type="primary">Back to home</Button>
    }
  />
);
