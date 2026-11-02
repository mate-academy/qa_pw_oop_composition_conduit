import { camelCaseToPhrase, capitalize } from './stringHelpers';

export function parseTestTreeHierarchy(fileName, logger) {
  const testFolder = 'tests/';
  const normalizedFileName = fileName.replace(/\\/g, '/');

  const testFolderIndex = normalizedFileName.indexOf(testFolder);

  if (testFolderIndex === -1) {
    throw new Error(
      `Cannot find '${testFolder}' in test file path: ${fileName}`,
    );
  }

  const attributesCamelCase = normalizedFileName
    .substring(testFolderIndex + testFolder.length)
    .split('/');

  let attributes = attributesCamelCase.map(attribute =>
    capitalize(camelCaseToPhrase(attribute)),
  );

  if (attributes[2]?.includes('.spec.js')) {
    attributes = attributes.slice(0, 2);
  }

  logger.debug(`Parsed test hierarchy: ${JSON.stringify(attributes)}`);

  return attributes;
}
