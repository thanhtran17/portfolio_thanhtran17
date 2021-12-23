import React, { useState, useEffect } from 'react';
import PortfolioList from '../portfolioList/PortfolioList';
import './works.scss';
import {
  featuredPortfolio,
  webPortfolio,
  designsPortfolio,
  geographyPortfolio,
} from '../../data';
import { v4 as uuidv4 } from 'uuid';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

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
          <div className="cont" key={uuidv4()}>
            <PortfolioList
              title={item.title}
              id={item.id}
              active={selected === item.id}
              setSelected={setSelected}
            />
          </div>
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <a href={d.link} key={uuidv4()}>
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
