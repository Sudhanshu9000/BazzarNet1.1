import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from './context/AppContext';
import PublicRoutes from './routes/PublicRoutes';
import CustomerRoutes from './routes/CustomerRoutes';
import VendorRoutes from './routes/VendorRoutes';
import AdminRoutes from './routes/AdminRoutes';
import PincodeModal from './components/PincodeModal'; // NEW: Import PincodeModal
import Loader from './components/Loader';

const App = () => {
  const { theme, isLoggedIn, isVendor, isAdmin, showPincodeModal, setShowPincodeModal } = useContext(AppContext);
  const [isInitializing, setIsInitializing] = useState(true);

  useEffect(() => {
    // Add a small delay to ensure all context initialization is complete
    const timer = setTimeout(() => {
      setIsInitializing(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isInitializing) {
    return <Loader />;
  }

  return (
    <div className={`font-poppins min-h-screen flex flex-col transition-all duration-300 ${theme === 'dark' ? 'bg-[#07080a] text-[#E0E0E0]' : 'bg-[#E0E0E0] text-[#333]'}`}>
      {isLoggedIn ? (
        isAdmin ? (
          <AdminRoutes />
        ) : isVendor ? (
          <VendorRoutes />
        ) : (
          <CustomerRoutes />
        )
      ) : (
        <PublicRoutes />
      )}
      {/* NEW: Render PincodeModal conditionally */}
      {isLoggedIn && !isVendor && !isAdmin && (
        <PincodeModal isOpen={showPincodeModal} onClose={() => setShowPincodeModal(false)} />
      )}
    </div>
  );
};

export default App;