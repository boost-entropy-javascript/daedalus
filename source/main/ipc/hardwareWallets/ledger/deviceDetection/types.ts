export type Device = {
  vendorId: number;
  productId: number;
  path: string;
  deviceName: string;
  manufacturer: string;
  serialNumber: string;
  deviceAddress: number;
  product: string;
  release: number;
  interface: number;
  usagePage: number;
  usage: number;
};

export type DeviceModel = {
  id: string;
  productName: string;
  productIdMM: number;
  legacyUsbProductId: number;
  usbOnly: boolean;
  memorySize: number;
  blockSize: number;
};

export type TrackedDevice = {
  deviceModel: DeviceModel;
  descriptor: string;
  device: Device;
};

export type DectorUnsubscriber = () => void;

export type Detector = (
  onAdd: (device: TrackedDevice) => void,
  onRemove: (device: TrackedDevice) => void
) => DectorUnsubscriber;
