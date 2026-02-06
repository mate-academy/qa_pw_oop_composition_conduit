import { camelCaseToPhrase, capitalize } from './stringHelpers';

export function parseTestTreeHierarchy(fileName, logger) {
  const testFolder = 'tests/';

  const attributesCamelCase = fileName
    .substring(fileName.indexOf(testFolder) + testFolder.length)
    .split('/');

  let attributes = attributesCamelCase.map(attribute =>
    capitalize(camelCaseToPhrase(attribute)),
  );

  if (attributes.length > 0) {
    const last = attributes[attributes.length - 1];
    if (last.includes('.spec.js') || last.includes('.spec.ts')) {
      attributes[attributes.length - 1] = capitalize(
        camelCaseToPhrase(last.replace(/\.spec\.(js|ts)$/i, '')),
      );
    }
  }
  if (attributes.length > 2) {
    attributes = attributes.slice(0, 2);
  }

  logger.debug(`Parsed test hierarchy: ${JSON.stringify(attributes)}`);

  return attributes;
}
