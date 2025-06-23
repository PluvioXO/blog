// Development utility to help identify and categorize warnings
// Only runs in development mode

if (process.env.NODE_ENV === 'development') {
  const warningCounts = {};
  const originalWarn = console.warn;
  const originalError = console.error;

  console.warn = (...args) => {
    const message = args.join(' ');
    
    // Count warnings by type
    let warningType = 'Other';
    if (message.includes('React Router')) warningType = 'React Router';
    else if (message.includes('findDOMNode')) warningType = 'findDOMNode (Deprecated)';
    else if (message.includes('componentWill')) warningType = 'Legacy Lifecycle';
    else if (message.includes('key prop')) warningType = 'Missing Keys';
    else if (message.includes('prop type')) warningType = 'PropTypes';
    else if (message.includes('useEffect')) warningType = 'useEffect Dependencies';
    
    warningCounts[warningType] = (warningCounts[warningType] || 0) + 1;
    
    // Call original warn
    originalWarn.apply(console, args);
  };

  console.error = (...args) => {
    const message = args.join(' ');
    
    // Count errors by type
    let errorType = 'Other';
    if (message.includes('React Router')) errorType = 'React Router Error';
    else if (message.includes('Cannot read prop')) errorType = 'Property Access Error';
    else if (message.includes('undefined')) errorType = 'Undefined Reference';
    
    warningCounts[errorType] = (warningCounts[errorType] || 0) + 1;
    
    // Call original error
    originalError.apply(console, args);
  };

  // Log warning summary every 30 seconds
  setInterval(() => {
    if (Object.keys(warningCounts).length > 0) {
      console.group('🔍 Warning Summary (Development)');
      Object.entries(warningCounts).forEach(([type, count]) => {
        console.log(`${type}: ${count} occurrences`);
      });
      console.groupEnd();
    }
  }, 30000);

  // Add to window for manual inspection
  window.getWarningCounts = () => warningCounts;
  window.clearWarningCounts = () => {
    Object.keys(warningCounts).forEach(key => delete warningCounts[key]);
    console.log('Warning counts cleared');
  };
}

export default {}; 