// @flow
import fs from 'fs';
import path from 'path';
import { appFolderPath } from '../config';
import { getNumberOfEpochsConsolidatedChannel } from '../ipc/getNumberOfEpochsConsolidated.ipc';
import type { GetNumberOfEpochsConsolidatedChannelResponse } from '../../common/ipc/api';

export const getNumberOfEpochsConsolidated = () => {
  getNumberOfEpochsConsolidatedChannel
    .onRequest((): Promise<GetNumberOfEpochsConsolidatedChannelResponse> => {
      const epochsPath = path.join(appFolderPath, 'DB-1.0', 'epochs');
      let epochsConsolidated = 0;
      if (fs.existsSync(epochsPath)) {
        const epochfiles = fs
          .readdirSync(epochsPath)
          .filter(file => file.indexOf('.epoch') > -1)
          .map(file => parseInt(file, 10));
        epochsConsolidated = Math.max(...epochfiles);
      }
      return Promise.resolve(epochsConsolidated);
    });
};
