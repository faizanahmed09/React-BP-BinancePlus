/**
 *
 * Asynchronously loads the component for ZeroLoss
 *
 */

import { lazyLoad } from "utils/loadable";

export const ZeroLoss = lazyLoad(
  () => import("./index"),
  (module) => module.ZeroLoss
);
