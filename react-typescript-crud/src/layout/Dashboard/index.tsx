import { Outlet } from 'react-router-dom';
import SideBar from '../SideBar';

const DashboardLayout = () => {
  return (
    <>
      <SideBar />
      <div className="p-4 sm:ml-64">
        <div className="mt-14 rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
