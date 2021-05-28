/**
 *  all values are related to Full HD
 *  and CssName().xxx() will take care about scaling.
 */
export class CssDimensions {

    public static readonly borderRadius = 6;
    public static readonly borderWidth = 6;
    public static readonly cursorWidth = 2;

    public static readonly screenWidth = 1920;
    public static readonly screenHeight = 1080;

    public static readonly safeareaLeft = 108;
    public static readonly safeareaRight = 108;
    public static readonly safeareaTop = 60;
    public static readonly safeareaBottom = 60;

    public static readonly safeareaWidth = CssDimensions.screenWidth - CssDimensions.safeareaLeft - CssDimensions.safeareaRight;
    public static readonly safeareaHeight = CssDimensions.screenHeight - CssDimensions.safeareaTop - CssDimensions.safeareaBottom;

    public static readonly dialog_content_width = 1176;

    //https://github.com/CTO-TVD/UIDesign/tree/master/Styleguide
    public static readonly safeareaLeft_UI20 = 72;
    public static readonly safeareaRight_UI20 = 72;
    public static readonly safeareaWidth_UI20 = CssDimensions.screenWidth - CssDimensions.safeareaLeft_UI20 - CssDimensions.safeareaRight_UI20;
    public static readonly safeareaTop_UI20 = 72; // title elements might be closer to the top-border due to inline top-padding/margin of div+font
    public static readonly safeareaBottom_UI20 = 72; // title elements might be closer to the top-border due to inline top-padding/margin of div+font

    public static readonly remoteInteractionLayerHeight = 470;

    public static readonly SceneImageHeight = 830;
    public static readonly SceneImageWidth = 1475;
}
