import React from 'react';

export default function ThemeProvider({ children }) {

    useEffect(() => {
        themeChange(false)
        // 👆 false parameter is required for react project
      }, [])
      
    return (
        <div>
            {children}
        </div>
    );
}
