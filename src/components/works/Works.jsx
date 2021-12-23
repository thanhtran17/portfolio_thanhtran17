import React, { useState, useEffect } from 'react';
import PortfolioList from '../portfolioList/PortfolioList';
import './works.scss';
import {
  featuredPortfolio,
  webPortfolio,
  designsPortfolio,
  geographyPortfolio,
} from '../../data';
import { Button } from 'antd';

export default function Works() {
  const [selected, setSelected] = useState('featured');
  const [data, setData] = useState([]);
  const list = [
    {
      id: 'web',
      title: 'Web Projects',
    },
    {
      id: 'featured',
      title: 'Administrations',
    },
    {
      id: 'designs',
      title: 'Designs',
    },
    {
      id: 'geography',
      title: 'Sports',
    },
  ];

  useEffect(() => {
    switch (selected) {
      case 'featured':
        setData(featuredPortfolio);
        break;
      case 'web':
        setData(webPortfolio);
        break;
      case 'designs':
        setData(designsPortfolio);
        break;
      case 'geography':
        setData(geographyPortfolio);
        break;
    }
  }, [selected]);

  return (
    <div className="works" id="works">
      <h1>WORKS</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            id={item.id}
            active={selected === item.id}
            setSelected={setSelected}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <a href={d.link}>
            <div className="item">
              <img src={d.img} alt="" />
              <h3>{d.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
