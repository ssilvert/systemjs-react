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
      '@patternfly/react-core': 'npm:@patternfly/react-core/dist/umd/index.js',
      '@patternfly/react-styles': 'npm:@patternfly/react-styles/dist/umd/index.js',
      '@patternfly/react-icons': 'npm:@patternfly/react-icons/dist/umd/index.js',
      '@patternfly/react-tokens': 'npm:@patternfly/react-tokens/dist/umd/index.js',
      'emotion': 'npm:emotion/dist/emotion.umd.min.js',
      'camel-case': 'npm:camel-case/camel-case.js',
      'upper-case': 'npm:upper-case/upper-case.js',
      'no-case': 'npm:no-case/no-case.js',
      'lower-case': 'npm:lower-case/lower-case.js',
      'prop-types': 'npm:prop-types/prop-types.min.js',
    },
    
    bundles: {
        
      },
      
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      'npm:@patternfly/react-core/dist/umd/styles': {
          defaultExtension: 'js',
      },
      'npm:@patternfly/react-styles/dist/umd': {
          defaultExtension: 'js',
      },
      'npm:no-case/vendor': {
          defaultExtension: 'js',
      },
    }
  });
})(this);
