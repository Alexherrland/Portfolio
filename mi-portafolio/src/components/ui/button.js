import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, className, ...props }) => {
    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 rounded text-white ${className}`}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;