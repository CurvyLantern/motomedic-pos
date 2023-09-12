export function hexToHsl(hex) {
    // Remove the # if it's included
    hex = hex.replace(/^#/, "");

    // Convert hexadecimal to RGB
    const r = parseInt(hex.slice(0, 2), 16) / 255;
    const g = parseInt(hex.slice(2, 4), 16) / 255;
    const b = parseInt(hex.slice(4, 6), 16) / 255;

    // Find the minimum and maximum values
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);

    // Calculate the lightness
    const lightness = (max + min) / 2;

    // Calculate the saturation
    let saturation = 0;
    let delta = max - min; // Define delta here
    if (delta !== 0) {
        saturation =
            lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);
    }

    // Calculate the hue
    let hue = 0;
    if (delta !== 0) {
        if (max === r) {
            hue = (g - b) / delta + (g < b ? 6 : 0);
        } else if (max === g) {
            hue = (b - r) / delta + 2;
        } else {
            hue = (r - g) / delta + 4;
        }
        hue *= 60;
    }

    return {
        h: Math.round(hue),
        s: Math.round(saturation * 100),
        l: Math.round(lightness * 100),
    };
}
export function hexToRgb(hex) {
    // Remove the # if it's included
    hex = hex.replace(/^#/, "");

    // Parse the hexadecimal values for each color channel
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);

    return {
        r: r,
        g: g,
        b: b,
    };
}
export function rgbToHex(r, g, b) {
    // Ensure that the RGB values are within the valid range (0-255)
    r = Math.min(255, Math.max(0, r));
    g = Math.min(255, Math.max(0, g));
    b = Math.min(255, Math.max(0, b));

    // Convert each RGB value to a hexadecimal string and pad with 0 if needed
    const hexR = r.toString(16).padStart(2, "0");
    const hexG = g.toString(16).padStart(2, "0");
    const hexB = b.toString(16).padStart(2, "0");

    // Combine the hexadecimal values and return the result
    return `#${hexR}${hexG}${hexB}`;
}
export function hslToHex(h, s, l) {
    // Ensure that the HSL values are within the valid range
    h = ((h % 360) + 360) % 360;
    s = Math.min(100, Math.max(0, s));
    l = Math.min(100, Math.max(0, l));

    // Convert HSL to RGB
    const c = ((1 - Math.abs(2 * l - 1)) * s) / 100;
    const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    const m = l / 100 - c / 2;

    let r, g, b;

    if (h >= 0 && h < 60) {
        r = c;
        g = x;
        b = 0;
    } else if (h >= 60 && h < 120) {
        r = x;
        g = c;
        b = 0;
    } else if (h >= 120 && h < 180) {
        r = 0;
        g = c;
        b = x;
    } else if (h >= 180 && h < 240) {
        r = 0;
        g = x;
        b = c;
    } else if (h >= 240 && h < 300) {
        r = x;
        g = 0;
        b = c;
    } else {
        r = c;
        g = 0;
        b = x;
    }

    // Convert RGB to hexadecimal strings and pad with 0 if needed
    const hexR = Math.round((r + m) * 255)
        .toString(16)
        .padStart(2, "0");
    const hexG = Math.round((g + m) * 255)
        .toString(16)
        .padStart(2, "0");
    const hexB = Math.round((b + m) * 255)
        .toString(16)
        .padStart(2, "0");

    // Combine the hexadecimal values and return the result
    return `#${hexR}${hexG}${hexB}`;
}

export const formatColor = ({ color, type }) => {
    if (type === "hsl") {
        const { h, s, l } = color;
        return `hsl(${h} ${s}% ${l}%)`;
    }
    if (type === "rgb") {
        const { r, g, b } = color;
        return `rgb(${r},${g},${b})`;
    }
    return "";
};
