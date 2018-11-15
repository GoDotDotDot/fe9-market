import React from 'react'
import { Card, Icon, Avatar } from 'antd';
import { Link } from "react-router-dom";
import styles from '../styles/components/Tool.module.less'
import logo from "../assets/logo.png";

const { Meta } = Card;

const Tool = ({ id, title, description }) => (
  <Link to={`/tool/${id}`}>
    <Card
      className={styles.tool}
      hoverable={true}
      bordered={false}
    >
      <Meta
        avatar={<Avatar src={logo} />}
        title={title}
        description={description}
        className={styles.meta}
      />
    </Card>
  </Link>
)

export default Tool