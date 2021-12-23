import './portfolioList.scss';
import { Button } from 'antd';

const itemStyle = {
  display: 'flex',
  'align-items': 'center',
  'justify-content': 'center',
  padding: '20px',
  width: '170px',
  'font-size': '14px',
  'font-weight': '400',
  'text-transform': 'uppercase',
  cursor: 'pointer',
};

const itemStyleActive = {
  display: 'flex',
  'align-items': 'center',
  'justify-content': 'center',
  padding: '20px',
  width: '170px',
  'font-size': '14px',
  'font-weight': '400',
  'text-transform': 'uppercase',
  cursor: 'pointer',
  background: '#03204c',
};

export default function PortfolioList({ id, title, active, setSelected }) {
  return (
    <Button
      className={active ? 'portfolioList active' : 'portfolioList'}
      type={active ? 'primary' : 'default'}
      onClick={() => setSelected(id)}
      style={active ? itemStyleActive : itemStyle}
    >
      {title}
    </Button>
  );
}
