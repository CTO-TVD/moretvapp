export class CssNames {

    private static getVendorName(name: string): string {

        const elementStyle = document.createElement("div").style;
        const vendors = ["", "webkit", "Moz", "ms", "O"];

        for (const vendor of vendors) {

            const vendorName = vendor === "" ? name : vendor + name.substr(0, 1).toUpperCase() + name.substr(1);

            if (vendorName in elementStyle) return vendorName;
        }

        return "transform";
    }

    public static readonly transform = CssNames.getVendorName("transform");
    public static readonly transition = CssNames.getVendorName("transition");
}
