/**
 * SystemJs configuration.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': './node_modules/'
    },
    
    // map tells the System loader where to look for things
    map: {
      'react': 'npm:react/umd/react.development.js',
      'react-dom': 'npm:react-dom/umd/react-dom.development.js',
    },
    
    bundles: {
        
      },
      
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      
    }
  });
})(this);
