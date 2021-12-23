import './portfolioList.scss';
import { Button } from 'antd';

const itemStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px',
  width: '170px',
  fontSize: '14px',
  fontWeight: '400',
  textTransform: 'uppercase',
  cursor: 'pointer',
};

const itemStyleActive = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px',
  width: '170px',
  fontSize: '14px',
  fontWeight: '400',
  textTransform: 'uppercase',
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
