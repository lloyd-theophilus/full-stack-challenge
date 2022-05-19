import React from 'react'
import { Typography, Card, Button } from "antd";
import { Link } from "react-router-dom";



const Homepage = () => {
  return (
    <div className="site-card-border-less-wrapper">
      <Card className='card-title'
        title="Card title" bordered={false}>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </div>
  );
}

export default Homepage