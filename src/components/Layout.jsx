import React from 'react';
import { motion } from 'framer-motion';

const Layout = ({ children }) => {
    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {children}
        </motion.main>
    );
};

export default Layout;