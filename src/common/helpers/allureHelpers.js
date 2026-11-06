import { camelCaseToPhrase, capitalize } from './stringHelpers';

export function parseTestTreeHierarchy(fileName, logger) {
  const normalizedFileName = fileName.replace(/\\/g, '/');
  const testFolder = '/tests/';
  const testFolderIndex = normalizedFileName.lastIndexOf(testFolder);
  const relativeFileName =
    testFolderIndex >= 0
      ? normalizedFileName.substring(testFolderIndex + testFolder.length)
      : normalizedFileName.startsWith('tests/')
        ? normalizedFileName.substring('tests/'.length)
        : normalizedFileName;

  const attributesCamelCase = relativeFileName.split('/');

  let attributes = attributesCamelCase.map(attribute =>
    capitalize(camelCaseToPhrase(attribute)),
  );

  if (attributes[2]?.includes('.spec.js')) {
    attributes = attributes.slice(0, 2);
  }

  logger.debug(`Parsed test hierarchy: ${JSON.stringify(attributes)}`);

  return attributes;
}
