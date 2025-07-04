const fs = require('fs');
const path = require('path');

const buildPath = path.resolve(__dirname, 'build');
const indexPath = path.join(buildPath, 'index.html');

console.log('Starting inlining process...');
console.log('Build path:', buildPath);
console.log('Index path:', indexPath);

let htmlContent = fs.readFileSync(indexPath, 'utf8');
console.log('Read index.html content.');

// Inline CSS
const cssLinkRegex = /<link href="\.\/static\/css\/(main\.[a-f0-9]+\.css)" rel="stylesheet">/;
const cssMatch = htmlContent.match(cssLinkRegex);

if (cssMatch) {
  console.log('CSS link found.');
  const cssFileName = cssMatch[1];
  const cssFilePath = path.join(buildPath, 'static', 'css', cssFileName);
  const cssContent = fs.readFileSync(cssFilePath, 'utf8');
  htmlContent = htmlContent.replace(cssMatch[0], `<style>${cssContent}</style>`);
  console.log('CSS inlined.');
}

// Inline JavaScript
const jsScriptRegex = /<script defer="defer" src="\.\/static\/js\/(main\.[a-f0-9]+\.js)"><\/script>/;
const jsMatch = htmlContent.match(jsScriptRegex);

if (jsMatch) {
  console.log('JavaScript script found.');
  const jsFileName = jsMatch[1];
  const jsFilePath = path.join(buildPath, 'static', 'js', jsFileName);
  const jsContent = fs.readFileSync(jsFilePath, 'utf8').replace(/\/\/# sourceMappingURL=.*/g, '');
  htmlContent = htmlContent.replace(jsMatch[0], `<script>${jsContent}</script>`);
  console.log('JavaScript inlined.');
}

fs.writeFileSync(indexPath, htmlContent, 'utf8');

console.log('Assets inlined successfully!');