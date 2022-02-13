import initStoryshots, {
  multiSnapshotWithOptions,
} from '@storybook/addon-storyshots';
import { styleSheetSerializer } from 'jest-styled-components';

initStoryshots({
  snapshotSerializers: [styleSheetSerializer],
  integrityOptions: { cwd: __dirname }, // it will start searching from the current directory
  test: multiSnapshotWithOptions(),
});
