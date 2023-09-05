import { useState } from "react";
import { useZxing } from "react-zxing";
import { useMediaDevices } from "react-media-devices";

export const BarcodeScanner = () => {
    const { devices } = useMediaDevices({
        constraints: {
            video: true,
            audio: false,
        },
    });
    const hasDevices = Array.isArray(devices) && devices.length > 0;
    console.log({ devices });
    const deviceId = hasDevices ? devices[0]?.deviceId : "";
    const [result, setResult] = useState("");
    const { ref } = useZxing({
        paused: !deviceId,
        deviceid: deviceId,
        onDecodeResult(value) {
            setResult(value.getText());
        },
    });
    console.log({ devices, deviceid: deviceId });
    return (
        <div>
            <video ref={ref} />
            <p>last result : {result}</p>

            <ul>
                {hasDevices
                    ? devices.map((device) => (
                          <li key={device.id}>{device.label}</li>
                      ))
                    : "no devices"}
            </ul>
        </div>
    );
};
