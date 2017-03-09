import Dataset from "./Dataset";

/** Provides a stream of datapoints from a `Dataset`. */
export abstract class DatasetSampler {
  constructor(
    readonly dataset: Dataset
  ) {

  }

  abstract nextSample(): number[];
}

export default DatasetSampler;

/** Returns a random datapoint from the `Dataset` on each request. */
export class BootstrapDatasetSampler extends DatasetSampler {
  nextSample() {
    return this.dataset.getSample(Math.floor(Math.random() * this.dataset.sampleCount));
  }
}
