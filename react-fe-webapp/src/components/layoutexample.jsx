import { Outlet } from 'react-router-dom';

const LayoutExample = () => {
  return (
    <div>
      {/* You can add a navbar or header here */}
      <Outlet />
    </div>
  );
};

export default LayoutExample;
