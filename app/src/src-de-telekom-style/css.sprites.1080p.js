define(["require", "exports", "./css.base", "src/src-de-telekom/public"], function (require, exports, css_base_1, public_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CssSprites1080p = void 0;
    var fileblob = public_1.Configuration.instance.fileblob || {};
    var CssSprites1080p = (function () {
        function CssSprites1080p() {
            this.back = "url(" + (fileblob.spritemap || "src/src-de-telekom-style/1080p/sprite.png") + ")";
            this.A_IC_001_36x36_mixin = this.createMixin("-648px -948px", "36px", "36px");
            this.A_IC_001_48x48_mixin = this.createMixin("-870px -42px", "48px", "48px");
            this.A_IC_001_72x72_mixin = this.createMixin("-480px -240px", "72px", "72px");
            this.A_IC_002_2_48x48_mixin = this.createMixin("-870px -90px", "48px", "48px");
            this.A_IC_002_2_72x72_mixin = this.createMixin("-480px -312px", "72px", "72px");
            this.A_IC_002_48x48_mixin = this.createMixin("-870px -138px", "48px", "48px");
            this.A_IC_003_1_120x120_mixin = this.createMixin("0px -336px", "120px", "120px");
            this.A_IC_003_1_168x168_mixin = this.createMixin("0px 0px", "168px", "168px");
            this.A_IC_003_1_30x30_mixin = this.createMixin("-428px -816px", "30px", "30px");
            this.A_IC_003_1_36x36_mixin = this.createMixin("-684px -948px", "36px", "36px");
            this.A_IC_003_1_48x48_mixin = this.createMixin("-870px -186px", "48px", "48px");
            this.A_IC_003_1_72x72_mixin = this.createMixin("-480px -384px", "72px", "72px");
            this.A_IC_003_3_30x30_mixin = this.createMixin("-458px -816px", "30px", "30px");
            this.A_IC_003_3_36x36_mixin = this.createMixin("-720px -948px", "36px", "36px");
            this.A_IC_003_3_48x48_mixin = this.createMixin("-870px -234px", "48px", "48px");
            this.A_IC_004_1_120x120_mixin = this.createMixin("-120px -336px", "120px", "120px");
            this.A_IC_005_3_72x72_mixin = this.createMixin("0px -456px", "72px", "72px");
            this.A_IC_005_120x120_mixin = this.createMixin("-240px -336px", "120px", "120px");
            this.A_IC_005_72x72_mixin = this.createMixin("-72px -456px", "72px", "72px");
            this.A_IC_007_120x120_mixin = this.createMixin("-360px -336px", "120px", "120px");
            this.A_IC_008_2_48x48_mixin = this.createMixin("-870px -282px", "48px", "48px");
            this.A_IC_008_2_72x72_mixin = this.createMixin("-144px -456px", "72px", "72px");
            this.A_IC_008_30x30_mixin = this.createMixin("-488px -816px", "30px", "30px");
            this.A_IC_008_36x36_mixin = this.createMixin("-756px -948px", "36px", "36px");
            this.A_IC_008_48x48_mixin = this.createMixin("-870px -330px", "48px", "48px");
            this.A_IC_009_1_30x30_mixin = this.createMixin("-518px -816px", "30px", "30px");
            this.A_IC_009_1_36x36_mixin = this.createMixin("-792px -948px", "36px", "36px");
            this.A_IC_009_1_48x48_mixin = this.createMixin("-870px -378px", "48px", "48px");
            this.A_IC_009_1_72x72_mixin = this.createMixin("-216px -456px", "72px", "72px");
            this.A_IC_009_2_30x30_mixin = this.createMixin("-548px -816px", "30px", "30px");
            this.A_IC_009_2_36x36_mixin = this.createMixin("-828px -948px", "36px", "36px");
            this.A_IC_013_1_24x24_mixin = this.createMixin("-1060px -1008px", "24px", "24px");
            this.A_IC_013_1_30x30_mixin = this.createMixin("-578px -816px", "30px", "30px");
            this.A_IC_013_1_36x36_mixin = this.createMixin("-864px -948px", "36px", "36px");
            this.A_IC_013_1_48x48_mixin = this.createMixin("-870px -426px", "48px", "48px");
            this.A_IC_013_2_24x24_mixin = this.createMixin("-1024px -972px", "24px", "24px");
            this.A_IC_013_2_30x30_mixin = this.createMixin("-608px -816px", "30px", "30px");
            this.A_IC_013_2_48x48_mixin = this.createMixin("-870px -474px", "48px", "48px");
            this.A_IC_013_3_36x36_mixin = this.createMixin("-900px -948px", "36px", "36px");
            this.A_IC_015_1_1_30x30_mixin = this.createMixin("-638px -816px", "30px", "30px");
            this.A_IC_015_1_1_36x36_mixin = this.createMixin("-936px -948px", "36px", "36px");
            this.A_IC_015_1_1_48x48_mixin = this.createMixin("-870px -522px", "48px", "48px");
            this.A_IC_015_2_1_30x30_mixin = this.createMixin("-668px -816px", "30px", "30px");
            this.A_IC_015_2_1_36x36_mixin = this.createMixin("-972px -948px", "36px", "36px");
            this.A_IC_015_2_1_48x48_mixin = this.createMixin("-870px -570px", "48px", "48px");
            this.A_IC_015_2_2_48x48_mixin = this.createMixin("-870px -618px", "48px", "48px");
            this.A_IC_015_2_2_54x54_mixin = this.createMixin("-816px 0px", "54px", "54px");
            this.A_IC_015_3_1_36x36_mixin = this.createMixin("-1024px 0px", "36px", "36px");
            this.A_IC_015_3_2_36x36_mixin = this.createMixin("-1024px -36px", "36px", "36px");
            this.A_IC_015_3_2_54x54_mixin = this.createMixin("-816px -54px", "54px", "54px");
            this.A_IC_015_4_1_36x36_mixin = this.createMixin("-1024px -72px", "36px", "36px");
            this.A_IC_015_4_1_54x54_mixin = this.createMixin("-816px -108px", "54px", "54px");
            this.A_IC_015_4_2_36x36_mixin = this.createMixin("-1024px -108px", "36px", "36px");
            this.A_IC_015_4_2_54x54_mixin = this.createMixin("-816px -162px", "54px", "54px");
            this.A_IC_017_24x24_mixin = this.createMixin("-600px -576px", "24px", "24px");
            this.A_IC_018_24x24_mixin = this.createMixin("-624px -576px", "24px", "24px");
            this.A_IC_020_2_48x48_mixin = this.createMixin("-870px -666px", "48px", "48px");
            this.A_IC_022_48x48_mixin = this.createMixin("-870px -714px", "48px", "48px");
            this.A_IC_023_36x36_mixin = this.createMixin("-1024px -144px", "36px", "36px");
            this.A_IC_024_1_30x30_mixin = this.createMixin("-698px -816px", "30px", "30px");
            this.A_IC_024_30x30_mixin = this.createMixin("-728px -816px", "30px", "30px");
            this.A_IC_024_36x36_mixin = this.createMixin("-1024px -180px", "36px", "36px");
            this.A_IC_024_48x48_mixin = this.createMixin("-870px -762px", "48px", "48px");
            this.A_IC_024_72x72_mixin = this.createMixin("-288px -456px", "72px", "72px");
            this.A_IC_025_30x30_mixin = this.createMixin("-758px -816px", "30px", "30px");
            this.A_IC_025_48x48_mixin = this.createMixin("-816px -540px", "48px", "48px");
            this.A_IC_027_1_24x24_mixin = this.createMixin("-648px -576px", "24px", "24px");
            this.A_IC_027_1_30x30_mixin = this.createMixin("-788px -816px", "30px", "30px");
            this.A_IC_027_1_36x36_mixin = this.createMixin("-1024px -216px", "36px", "36px");
            this.A_IC_027_2_24x24_mixin = this.createMixin("-552px -288px", "24px", "24px");
            this.A_IC_027_2_30x30_mixin = this.createMixin("-818px -816px", "30px", "30px");
            this.A_IC_027_2_48x48_mixin = this.createMixin("-816px -588px", "48px", "48px");
            this.A_IC_027_2_72x72_mixin = this.createMixin("-360px -456px", "72px", "72px");
            this.A_IC_027_3_36x36_mixin = this.createMixin("-1024px -252px", "36px", "36px");
            this.A_IC_027_4_24x24_mixin = this.createMixin("-576px -288px", "24px", "24px");
            this.A_IC_027_4_48x48_mixin = this.createMixin("-816px -636px", "48px", "48px");
            this.A_IC_027_5_24x24_mixin = this.createMixin("-552px -360px", "24px", "24px");
            this.A_IC_027_5_30x30_mixin = this.createMixin("-36px -1032px", "30px", "30px");
            this.A_IC_027_5_36x36_mixin = this.createMixin("-1024px -288px", "36px", "36px");
            this.A_IC_027_6_24x24_mixin = this.createMixin("-576px -360px", "24px", "24px");
            this.A_IC_028_1_24x24_mixin = this.createMixin("-552px -432px", "24px", "24px");
            this.A_IC_028_1_30x30_mixin = this.createMixin("-66px -1032px", "30px", "30px");
            this.A_IC_028_1_36x36_mixin = this.createMixin("-1024px -324px", "36px", "36px");
            this.A_IC_028_2_24x24_mixin = this.createMixin("-576px -432px", "24px", "24px");
            this.A_IC_028_2_30x30_mixin = this.createMixin("-96px -1032px", "30px", "30px");
            this.A_IC_028_2_36x36_mixin = this.createMixin("-1024px -360px", "36px", "36px");
            this.A_IC_028_2_72x72_mixin = this.createMixin("-432px -456px", "72px", "72px");
            this.A_IC_029_1_30x30_mixin = this.createMixin("-126px -1032px", "30px", "30px");
            this.A_IC_029_1_36x36_mixin = this.createMixin("-1024px -396px", "36px", "36px");
            this.A_IC_029_1_48x48_mixin = this.createMixin("-816px -684px", "48px", "48px");
            this.A_IC_029_2_30x30_mixin = this.createMixin("-156px -1032px", "30px", "30px");
            this.A_IC_029_2_36x36_mixin = this.createMixin("-1024px -432px", "36px", "36px");
            this.A_IC_030_30x30_mixin = this.createMixin("-186px -1032px", "30px", "30px");
            this.A_IC_030_36x36_mixin = this.createMixin("-1024px -468px", "36px", "36px");
            this.A_IC_030_48x48_mixin = this.createMixin("-816px -732px", "48px", "48px");
            this.A_IC_030_72x72_mixin = this.createMixin("-504px -456px", "72px", "72px");
            this.A_IC_031_30x30_mixin = this.createMixin("-216px -1032px", "30px", "30px");
            this.A_IC_032_2_48x48_mixin = this.createMixin("-552px -240px", "48px", "48px");
            this.A_IC_032_30x30_mixin = this.createMixin("-246px -1032px", "30px", "30px");
            this.A_IC_033_30x30_mixin = this.createMixin("-276px -1032px", "30px", "30px");
            this.A_IC_033_36x36_mixin = this.createMixin("-1024px -504px", "36px", "36px");
            this.A_IC_034_1_30x30_mixin = this.createMixin("-306px -1032px", "30px", "30px");
            this.A_IC_034_1_36x36_mixin = this.createMixin("-1024px -540px", "36px", "36px");
            this.A_IC_034_3_36x36_mixin = this.createMixin("-1024px -576px", "36px", "36px");
            this.A_IC_034_4_48x48_mixin = this.createMixin("-552px -312px", "48px", "48px");
            this.A_IC_034_4_72x72_mixin = this.createMixin("0px -528px", "72px", "72px");
            this.A_IC_034_30x30_mixin = this.createMixin("-336px -1032px", "30px", "30px");
            this.A_IC_034_36x36_mixin = this.createMixin("-1024px -612px", "36px", "36px");
            this.A_IC_034_48x48_mixin = this.createMixin("-552px -384px", "48px", "48px");
            this.A_IC_036_30x30_mixin = this.createMixin("-366px -1032px", "30px", "30px");
            this.A_IC_037_30x30_mixin = this.createMixin("-396px -1032px", "30px", "30px");
            this.A_IC_037_36x36_mixin = this.createMixin("-1024px -648px", "36px", "36px");
            this.A_IC_038_1_1_48x48_mixin = this.createMixin("0px -852px", "48px", "48px");
            this.A_IC_038_1_2_36x36_mixin = this.createMixin("-1024px -684px", "36px", "36px");
            this.A_IC_038_1_2_48x48_mixin = this.createMixin("-48px -852px", "48px", "48px");
            this.A_IC_038_1_3_48x48_mixin = this.createMixin("-96px -852px", "48px", "48px");
            this.A_IC_039_36x36_mixin = this.createMixin("-1024px -720px", "36px", "36px");
            this.A_IC_039_48x48_mixin = this.createMixin("-144px -852px", "48px", "48px");
            this.A_IC_040_36x36_mixin = this.createMixin("-1024px -756px", "36px", "36px");
            this.A_IC_040_48x48_mixin = this.createMixin("-192px -852px", "48px", "48px");
            this.A_IC_041_48x48_mixin = this.createMixin("-240px -852px", "48px", "48px");
            this.A_IC_042_48x48_mixin = this.createMixin("-288px -852px", "48px", "48px");
            this.A_IC_043_2_72x72_mixin = this.createMixin("-72px -528px", "72px", "72px");
            this.A_IC_044_1_24x24_mixin = this.createMixin("-312px -168px", "24px", "24px");
            this.A_IC_044_1_30x30_mixin = this.createMixin("-426px -1032px", "30px", "30px");
            this.A_IC_044_2_24x24_mixin = this.createMixin("-312px -192px", "24px", "24px");
            this.A_IC_044_2_30x30_mixin = this.createMixin("-456px -1032px", "30px", "30px");
            this.A_IC_044_3_24x24_mixin = this.createMixin("-312px -216px", "24px", "24px");
            this.A_IC_044_3_30x30_mixin = this.createMixin("-486px -1032px", "30px", "30px");
            this.A_IC_045_1_1_30x30_mixin = this.createMixin("-516px -1032px", "30px", "30px");
            this.A_IC_045_1_2_30x30_mixin = this.createMixin("-546px -1032px", "30px", "30px");
            this.A_IC_045_2_1_48x48_mixin = this.createMixin("-336px -852px", "48px", "48px");
            this.A_IC_045_2_2_48x48_mixin = this.createMixin("-384px -852px", "48px", "48px");
            this.A_IC_046_1_24x24_mixin = this.createMixin("-312px -240px", "24px", "24px");
            this.A_IC_046_1_30x30_mixin = this.createMixin("-576px -1032px", "30px", "30px");
            this.A_IC_046_1_36x36_mixin = this.createMixin("-1024px -792px", "36px", "36px");
            this.A_IC_046_1_48x48_mixin = this.createMixin("-432px -852px", "48px", "48px");
            this.A_IC_046_1_54x54_mixin = this.createMixin("-816px -216px", "54px", "54px");
            this.A_IC_046_1_72x72_mixin = this.createMixin("-144px -528px", "72px", "72px");
            this.A_IC_046_2_30x30_mixin = this.createMixin("-606px -1032px", "30px", "30px");
            this.A_IC_046_3_36x36_mixin = this.createMixin("-1024px -828px", "36px", "36px");
            this.A_IC_046_3_54x54_mixin = this.createMixin("-816px -270px", "54px", "54px");
            this.A_IC_046_3_72x72_mixin = this.createMixin("-216px -528px", "72px", "72px");
            this.A_IC_046_4_72x72_mixin = this.createMixin("-288px -528px", "72px", "72px");
            this.A_IC_046_5_36x36_mixin = this.createMixin("-1024px -864px", "36px", "36px");
            this.A_IC_046_5_48x48_mixin = this.createMixin("-480px -852px", "48px", "48px");
            this.A_IC_046_5_54x54_mixin = this.createMixin("-816px -324px", "54px", "54px");
            this.A_IC_046_5_72x72_mixin = this.createMixin("-360px -528px", "72px", "72px");
            this.A_IC_046_7_54x54_mixin = this.createMixin("-816px -378px", "54px", "54px");
            this.A_IC_046_8_48x48_mixin = this.createMixin("-528px -852px", "48px", "48px");
            this.A_IC_046_8_72x72_mixin = this.createMixin("-432px -528px", "72px", "72px");
            this.A_IC_046_9_72x72_mixin = this.createMixin("-504px -528px", "72px", "72px");
            this.A_IC_047_1_24x24_mixin = this.createMixin("-312px -264px", "24px", "24px");
            this.A_IC_047_2_24x24_mixin = this.createMixin("-312px -288px", "24px", "24px");
            this.A_IC_047_3_24x24_mixin = this.createMixin("-168px -312px", "24px", "24px");
            this.A_IC_048_1_20x20_mixin = this.createMixin("-794px -720px", "20px", "20px");
            this.A_IC_048_1_24x24_mixin = this.createMixin("-192px -312px", "24px", "24px");
            this.A_IC_048_2_20x20_mixin = this.createMixin("-722px -648px", "20px", "20px");
            this.A_IC_048_2_24x24_mixin = this.createMixin("-216px -312px", "24px", "24px");
            this.A_IC_048_3_20x20_mixin = this.createMixin("-576px -552px", "20px", "20px");
            this.A_IC_048_3_24x24_mixin = this.createMixin("-240px -312px", "24px", "24px");
            this.A_IC_049_1_50x24_mixin = this.createMixin("-744px -720px", "50px", "24px");
            this.A_IC_049_1_64x30_mixin = this.createMixin("-155px -816px", "64px", "30px");
            this.A_IC_049_1_77x36_mixin = this.createMixin("0px -816px", "77px", "36px");
            this.A_IC_049_2_50x24_mixin = this.createMixin("-672px -648px", "50px", "24px");
            this.A_IC_049_2_64x30_mixin = this.createMixin("-219px -816px", "64px", "30px");
            this.A_IC_050_1_30x30_mixin = this.createMixin("-636px -1032px", "30px", "30px");
            this.A_IC_050_1_36x36_mixin = this.createMixin("-1024px -900px", "36px", "36px");
            this.A_IC_051_1_24x24_mixin = this.createMixin("-264px -312px", "24px", "24px");
            this.A_IC_051_1_30x30_mixin = this.createMixin("-666px -1032px", "30px", "30px");
            this.A_IC_051_2_30x30_mixin = this.createMixin("-696px -1032px", "30px", "30px");
            this.A_IC_054_2_24x24_mixin = this.createMixin("-288px -312px", "24px", "24px");
            this.A_IC_054_30x30_mixin = this.createMixin("-726px -1032px", "30px", "30px");
            this.A_IC_054_36x36_mixin = this.createMixin("-1024px -936px", "36px", "36px");
            this.A_IC_055_1_36x36_mixin = this.createMixin("0px -996px", "36px", "36px");
            this.A_IC_055_2_24x24_mixin = this.createMixin("-312px -312px", "24px", "24px");
            this.A_IC_055_36x36_mixin = this.createMixin("-36px -996px", "36px", "36px");
            this.A_IC_057_3_48x48_mixin = this.createMixin("-576px -852px", "48px", "48px");
            this.A_IC_057_3_72x72_mixin = this.createMixin("-600px 0px", "72px", "72px");
            this.A_IC_058_1_36x36_mixin = this.createMixin("-72px -996px", "36px", "36px");
            this.A_IC_058_1_48x48_mixin = this.createMixin("-624px -852px", "48px", "48px");
            this.A_IC_058_2_30x30_mixin = this.createMixin("-756px -1032px", "30px", "30px");
            this.A_IC_058_2_36x36_mixin = this.createMixin("-108px -996px", "36px", "36px");
            this.A_IC_058_2_42x42_mixin = this.createMixin("-438px -288px", "42px", "42px");
            this.A_IC_058_2_48x48_mixin = this.createMixin("-672px -852px", "48px", "48px");
            this.A_IC_058_2_72x72_mixin = this.createMixin("-600px -72px", "72px", "72px");
            this.A_IC_059_1_36x36_mixin = this.createMixin("-144px -996px", "36px", "36px");
            this.A_IC_059_1_48x48_mixin = this.createMixin("-720px -852px", "48px", "48px");
            this.A_IC_059_2_36x36_mixin = this.createMixin("-180px -996px", "36px", "36px");
            this.A_IC_059_2_37x30_mixin = this.createMixin("-283px -816px", "37px", "30px");
            this.A_IC_059_2_42x42_mixin = this.createMixin("-480px -948px", "42px", "42px");
            this.A_IC_059_2_48x48_mixin = this.createMixin("-768px -852px", "48px", "48px");
            this.A_IC_059_2_72x72_mixin = this.createMixin("-600px -144px", "72px", "72px");
            this.A_IC_060_1_36x36_mixin = this.createMixin("-216px -996px", "36px", "36px");
            this.A_IC_060_1_48x48_mixin = this.createMixin("-816px -852px", "48px", "48px");
            this.A_IC_060_2_36x36_mixin = this.createMixin("-252px -996px", "36px", "36px");
            this.A_IC_060_2_72x72_mixin = this.createMixin("-600px -216px", "72px", "72px");
            this.A_IC_061_1_36x36_mixin = this.createMixin("-288px -996px", "36px", "36px");
            this.A_IC_061_1_48x48_mixin = this.createMixin("-864px -852px", "48px", "48px");
            this.A_IC_061_2_36x36_mixin = this.createMixin("-324px -996px", "36px", "36px");
            this.A_IC_061_2_48x48_mixin = this.createMixin("-928px 0px", "48px", "48px");
            this.A_IC_062_1_36x36_mixin = this.createMixin("-360px -996px", "36px", "36px");
            this.A_IC_062_1_48x48_mixin = this.createMixin("-928px -48px", "48px", "48px");
            this.A_IC_062_2_36x36_mixin = this.createMixin("-396px -996px", "36px", "36px");
            this.A_IC_062_2_48x48_mixin = this.createMixin("-928px -96px", "48px", "48px");
            this.A_IC_062_2_52x42_mixin = this.createMixin("-870px -810px", "52px", "42px");
            this.A_IC_062_3_36x30_mixin = this.createMixin("-320px -816px", "36px", "30px");
            this.A_IC_062_3_36x36_mixin = this.createMixin("-432px -996px", "36px", "36px");
            this.A_IC_063_1_36x30_mixin = this.createMixin("-356px -816px", "36px", "30px");
            this.A_IC_063_1_36x36_mixin = this.createMixin("-468px -996px", "36px", "36px");
            this.A_IC_063_1_42x42_mixin = this.createMixin("-522px -948px", "42px", "42px");
            this.A_IC_063_1_48x48_mixin = this.createMixin("-928px -144px", "48px", "48px");
            this.A_IC_063_2_36x30_mixin = this.createMixin("-392px -816px", "36px", "30px");
            this.A_IC_063_2_36x36_mixin = this.createMixin("-504px -996px", "36px", "36px");
            this.A_IC_063_2_42x42_mixin = this.createMixin("-564px -948px", "42px", "42px");
            this.A_IC_063_2_48x48_mixin = this.createMixin("-928px -192px", "48px", "48px");
            this.A_IC_065_1_36x36_mixin = this.createMixin("-540px -996px", "36px", "36px");
            this.A_IC_065_1_48x48_mixin = this.createMixin("-928px -240px", "48px", "48px");
            this.A_IC_065_2_36x36_mixin = this.createMixin("-576px -996px", "36px", "36px");
            this.A_IC_065_2_48x48_mixin = this.createMixin("-928px -288px", "48px", "48px");
            this.A_IC_066_2_36x36_mixin = this.createMixin("-612px -996px", "36px", "36px");
            this.A_IC_066_2_48x48_mixin = this.createMixin("-928px -336px", "48px", "48px");
            this.A_IC_067_1_36x36_mixin = this.createMixin("-648px -996px", "36px", "36px");
            this.A_IC_067_1_48x48_mixin = this.createMixin("-928px -384px", "48px", "48px");
            this.A_IC_067_2_36x36_mixin = this.createMixin("-684px -996px", "36px", "36px");
            this.A_IC_067_2_48x48_mixin = this.createMixin("-928px -432px", "48px", "48px");
            this.A_IC_069_36x36_mixin = this.createMixin("-720px -996px", "36px", "36px");
            this.A_IC_069_48x48_mixin = this.createMixin("-928px -480px", "48px", "48px");
            this.A_IC_072_120x120_mixin = this.createMixin("-480px 0px", "120px", "120px");
            this.A_IC_072_168x168_mixin = this.createMixin("-168px 0px", "168px", "168px");
            this.A_IC_072_30x30_mixin = this.createMixin("-786px -1032px", "30px", "30px");
            this.A_IC_072_36x36_mixin = this.createMixin("-756px -996px", "36px", "36px");
            this.A_IC_072_48x48_mixin = this.createMixin("-928px -528px", "48px", "48px");
            this.A_IC_073_2_36x36_mixin = this.createMixin("-792px -996px", "36px", "36px");
            this.A_IC_073_24x24_mixin = this.createMixin("-576px -456px", "24px", "24px");
            this.A_IC_073_36x36_mixin = this.createMixin("-828px -996px", "36px", "36px");
            this.A_IC_076_36x36_mixin = this.createMixin("-864px -996px", "36px", "36px");
            this.A_IC_076_48x48_mixin = this.createMixin("-928px -576px", "48px", "48px");
            this.A_IC_077_30x30_mixin = this.createMixin("-816px -1032px", "30px", "30px");
            this.A_IC_077_36x36_mixin = this.createMixin("-900px -996px", "36px", "36px");
            this.A_IC_077_48x48_mixin = this.createMixin("-928px -624px", "48px", "48px");
            this.A_IC_078_72x72_mixin = this.createMixin("-600px -288px", "72px", "72px");
            this.A_IC_079_1_36x36_mixin = this.createMixin("-936px -996px", "36px", "36px");
            this.A_IC_079_1_48x48_mixin = this.createMixin("-928px -672px", "48px", "48px");
            this.A_IC_079_24x24_mixin = this.createMixin("-576px -480px", "24px", "24px");
            this.A_IC_079_36x36_mixin = this.createMixin("-972px -996px", "36px", "36px");
            this.A_IC_079_48x48_mixin = this.createMixin("-928px -720px", "48px", "48px");
            this.A_IC_079_72x72_mixin = this.createMixin("-600px -360px", "72px", "72px");
            this.A_IC_080_1_30x30_mixin = this.createMixin("-846px -1032px", "30px", "30px");
            this.A_IC_080_1_48x48_mixin = this.createMixin("-928px -768px", "48px", "48px");
            this.A_IC_080_48x48_mixin = this.createMixin("-928px -816px", "48px", "48px");
            this.A_IC_082_72x72_mixin = this.createMixin("-600px -432px", "72px", "72px");
            this.A_IC_083_48x48_mixin = this.createMixin("0px -900px", "48px", "48px");
            this.A_IC_083_72x72_mixin = this.createMixin("-600px -504px", "72px", "72px");
            this.A_IC_086_72x72_mixin = this.createMixin("0px -600px", "72px", "72px");
            this.A_IC_087_72x72_mixin = this.createMixin("-72px -600px", "72px", "72px");
            this.A_IC_088_120x120_mixin = this.createMixin("-480px -120px", "120px", "120px");
            this.A_IC_088_168x168_mixin = this.createMixin("0px -168px", "168px", "168px");
            this.A_IC_088_48x48_mixin = this.createMixin("-48px -900px", "48px", "48px");
            this.A_IC_088_72x72_mixin = this.createMixin("-144px -600px", "72px", "72px");
            this.A_IC_089_48x48_mixin = this.createMixin("-96px -900px", "48px", "48px");
            this.A_IC_089_54x54_mixin = this.createMixin("-816px -432px", "54px", "54px");
            this.A_IC_089_72x72_mixin = this.createMixin("-216px -600px", "72px", "72px");
            this.A_IC_112_30x30_mixin = this.createMixin("-876px -1032px", "30px", "30px");
            this.A_IC_113_72x72_mixin = this.createMixin("-288px -600px", "72px", "72px");
            this.A_IC_115_1_1_36x36_mixin = this.createMixin("-1008px -996px", "36px", "36px");
            this.A_IC_115_1_2_36x36_mixin = this.createMixin("-1060px 0px", "36px", "36px");
            this.A_IC_115_1_3_36x36_mixin = this.createMixin("-1060px -36px", "36px", "36px");
            this.A_IC_115_1_4_36x36_mixin = this.createMixin("-1060px -72px", "36px", "36px");
            this.A_IC_115_1_5_36x36_mixin = this.createMixin("-1060px -108px", "36px", "36px");
            this.A_IC_115_2_1_36x36_mixin = this.createMixin("-1060px -144px", "36px", "36px");
            this.A_IC_115_2_2_36x36_mixin = this.createMixin("-1060px -180px", "36px", "36px");
            this.A_IC_115_2_3_36x36_mixin = this.createMixin("-1060px -216px", "36px", "36px");
            this.A_IC_115_2_4_36x36_mixin = this.createMixin("-1060px -252px", "36px", "36px");
            this.A_IC_115_2_5_36x36_mixin = this.createMixin("-1060px -288px", "36px", "36px");
            this.A_IC_116_1_36x36_mixin = this.createMixin("-1060px -324px", "36px", "36px");
            this.A_IC_116_1_48x48_mixin = this.createMixin("-144px -900px", "48px", "48px");
            this.A_IC_116_2_36x36_mixin = this.createMixin("-1060px -360px", "36px", "36px");
            this.A_IC_116_2_72x72_mixin = this.createMixin("-360px -600px", "72px", "72px");
            this.A_IC_117_1_36x36_mixin = this.createMixin("-1060px -396px", "36px", "36px");
            this.A_IC_117_1_48x48_mixin = this.createMixin("-192px -900px", "48px", "48px");
            this.A_IC_117_2_36x36_mixin = this.createMixin("-1060px -432px", "36px", "36px");
            this.A_IC_117_2_48x48_mixin = this.createMixin("-240px -900px", "48px", "48px");
            this.A_IC_117_3_36x36_mixin = this.createMixin("-1060px -468px", "36px", "36px");
            this.A_IC_117_3_48x48_mixin = this.createMixin("-288px -900px", "48px", "48px");
            this.A_IC_117_4_36x36_mixin = this.createMixin("-1060px -504px", "36px", "36px");
            this.A_IC_122_30x30_mixin = this.createMixin("-906px -1032px", "30px", "30px");
            this.A_IC_122_36x36_mixin = this.createMixin("-1060px -540px", "36px", "36px");
            this.A_IC_122_48x48_mixin = this.createMixin("-336px -900px", "48px", "48px");
            this.A_IC_124_1_36x36_mixin = this.createMixin("-1060px -576px", "36px", "36px");
            this.A_IC_124_1_48x48_mixin = this.createMixin("-384px -900px", "48px", "48px");
            this.A_IC_124_2_36x36_mixin = this.createMixin("-1060px -612px", "36px", "36px");
            this.A_IC_124_2_48x48_mixin = this.createMixin("-432px -900px", "48px", "48px");
            this.A_IC_124_2_72x72_mixin = this.createMixin("-432px -600px", "72px", "72px");
            this.A_IC_125_36x12_mixin = this.createMixin("-667px -780px", "36px", "12px");
            this.A_IC_129_27x21_mixin = this.createMixin("-640px -780px", "27px", "21px");
            this.A_IC_130_144x144_mixin = this.createMixin("-168px -168px", "144px", "144px");
            this.A_IC_131_144x144_mixin = this.createMixin("-336px 0px", "144px", "144px");
            this.A_IC_137_1_102x42_mixin = this.createMixin("-336px -288px", "102px", "42px");
            this.A_IC_137_1_72x72_mixin = this.createMixin("-504px -600px", "72px", "72px");
            this.A_IC_137_1_78x30_mixin = this.createMixin("-77px -816px", "78px", "30px");
            this.A_IC_137_2_87x36_mixin = this.createMixin("-640px -744px", "87px", "36px");
            this.A_IC_139_1_48x36_mixin = this.createMixin("-976px -912px", "48px", "36px");
            this.A_IC_139_2_48x36_mixin = this.createMixin("-928px -864px", "48px", "36px");
            this.A_IC_140_2_48x30_mixin = this.createMixin("-816px -780px", "48px", "30px");
            this.A_IC_140_2_58x42_mixin = this.createMixin("-870px 0px", "58px", "42px");
            this.A_IC_141_36x36_mixin = this.createMixin("-1060px -648px", "36px", "36px");
            this.A_IC_142_48x48_mixin = this.createMixin("-480px -900px", "48px", "48px");
            this.A_IC_145_2_36x36_mixin = this.createMixin("-1060px -684px", "36px", "36px");
            this.A_IC_145_36x36_mixin = this.createMixin("-1060px -720px", "36px", "36px");
            this.A_IC_146_36x36_mixin = this.createMixin("-1060px -756px", "36px", "36px");
            this.A_IC_147_36x36_mixin = this.createMixin("-1060px -792px", "36px", "36px");
            this.A_IC_152_2_48x48_mixin = this.createMixin("-528px -900px", "48px", "48px");
            this.A_IC_152_2_72x72_mixin = this.createMixin("-576px -600px", "72px", "72px");
            this.A_IC_153_48x48_mixin = this.createMixin("-576px -900px", "48px", "48px");
            this.A_IC_153_72x72_mixin = this.createMixin("-672px 0px", "72px", "72px");
            this.A_IC_166_1_48x48_mixin = this.createMixin("-624px -900px", "48px", "48px");
            this.A_IC_166_1_72x72_mixin = this.createMixin("-672px -72px", "72px", "72px");
            this.A_IC_166_2_48x48_mixin = this.createMixin("-672px -900px", "48px", "48px");
            this.A_IC_166_2_72x72_mixin = this.createMixin("-672px -144px", "72px", "72px");
            this.A_IC_169_24x24_mixin = this.createMixin("-576px -504px", "24px", "24px");
            this.A_IC_174_48x48_mixin = this.createMixin("-720px -900px", "48px", "48px");
            this.A_IC_176_36x36_mixin = this.createMixin("-1060px -828px", "36px", "36px");
            this.A_IC_177_36x36_mixin = this.createMixin("-1060px -864px", "36px", "36px");
            this.A_IC_178_36x36_mixin = this.createMixin("-1060px -900px", "36px", "36px");
            this.A_IC_179_24x24_mixin = this.createMixin("-576px -528px", "24px", "24px");
            this.A_IC_180_36x36_mixin = this.createMixin("-1060px -936px", "36px", "36px");
            this.A_IC_181_36x36_mixin = this.createMixin("-1060px -972px", "36px", "36px");
            this.A_IC_182_48x48_mixin = this.createMixin("-768px -900px", "48px", "48px");
            this.A_IC_183_3_30x30_mixin = this.createMixin("-936px -1032px", "30px", "30px");
            this.A_IC_183_4_30x30_mixin = this.createMixin("-966px -1032px", "30px", "30px");
            this.A_IC_186_84x36_mixin = this.createMixin("-727px -744px", "84px", "36px");
            this.A_IC_189_48x48_mixin = this.createMixin("-816px -900px", "48px", "48px");
            this.A_IC_189_72x72_mixin = this.createMixin("-672px -216px", "72px", "72px");
            this.A_IC_191_48x48_mixin = this.createMixin("-864px -900px", "48px", "48px");
            this.A_IC_191_72x72_mixin = this.createMixin("-672px -288px", "72px", "72px");
            this.A_IC_193_72x72_mixin = this.createMixin("-672px -360px", "72px", "72px");
            this.A_IC_194_36x36_mixin = this.createMixin("0px -1032px", "36px", "36px");
            this.A_IC_194_42x42_mixin = this.createMixin("-606px -948px", "42px", "42px");
            this.A_IC_195_48x48_mixin = this.createMixin("-912px -900px", "48px", "48px");
            this.A_IC_195_72x72_mixin = this.createMixin("-672px -432px", "72px", "72px");
            this.A_IC_196_48x48_mixin = this.createMixin("-976px 0px", "48px", "48px");
            this.A_IC_197_48x48_mixin = this.createMixin("-976px -48px", "48px", "48px");
            this.A_IC_197_72x72_mixin = this.createMixin("-672px -504px", "72px", "72px");
            this.A_IC_198_1_48x48_mixin = this.createMixin("-976px -96px", "48px", "48px");
            this.A_IC_198_2_48x48_mixin = this.createMixin("-976px -144px", "48px", "48px");
            this.A_IC_198_3_48x48_mixin = this.createMixin("-976px -192px", "48px", "48px");
            this.A_IC_198_4_48x48_mixin = this.createMixin("-976px -240px", "48px", "48px");
            this.A_IC_203_72x72_mixin = this.createMixin("-672px -576px", "72px", "72px");
            this.A_IC_204_72x72_mixin = this.createMixin("0px -672px", "72px", "72px");
            this.A_IC_205_72x72_mixin = this.createMixin("-72px -672px", "72px", "72px");
            this.A_IC_207_48x48_mixin = this.createMixin("-976px -288px", "48px", "48px");
            this.A_IC_207_54x54_mixin = this.createMixin("-816px -486px", "54px", "54px");
            this.A_IC_207_72x72_mixin = this.createMixin("-144px -672px", "72px", "72px");
            this.A_IC_208_144x144_mixin = this.createMixin("-336px -144px", "144px", "144px");
            this.A_IC_208_64x64_mixin = this.createMixin("-576px -744px", "64px", "64px");
            this.A_IC_211_48x48_mixin = this.createMixin("-976px -336px", "48px", "48px");
            this.A_IC_217_48x48_mixin = this.createMixin("-976px -384px", "48px", "48px");
            this.A_IC_217_72x72_mixin = this.createMixin("-216px -672px", "72px", "72px");
            this.A_IC_218_48x48_mixin = this.createMixin("-976px -432px", "48px", "48px");
            this.A_IC_218_72x72_mixin = this.createMixin("-288px -672px", "72px", "72px");
            this.A_IC_219_48x48_mixin = this.createMixin("-976px -480px", "48px", "48px");
            this.A_IC_219_72x72_mixin = this.createMixin("-360px -672px", "72px", "72px");
            this.A_IC_220_48x48_mixin = this.createMixin("-976px -528px", "48px", "48px");
            this.A_IC_220_72x72_mixin = this.createMixin("-432px -672px", "72px", "72px");
            this.A_IC_221_48x48_mixin = this.createMixin("-976px -576px", "48px", "48px");
            this.A_IC_221_72x72_mixin = this.createMixin("-504px -672px", "72px", "72px");
            this.A_IC_222_48x48_mixin = this.createMixin("-976px -624px", "48px", "48px");
            this.A_IC_222_72x72_mixin = this.createMixin("-576px -672px", "72px", "72px");
            this.A_IC_223_48x48_mixin = this.createMixin("-976px -672px", "48px", "48px");
            this.A_IC_223_72x72_mixin = this.createMixin("-648px -672px", "72px", "72px");
            this.A_IC_224_48x48_mixin = this.createMixin("-976px -720px", "48px", "48px");
            this.A_IC_224_72x72_mixin = this.createMixin("-744px 0px", "72px", "72px");
            this.A_IC_225_48x48_mixin = this.createMixin("-976px -768px", "48px", "48px");
            this.A_IC_225_72x72_mixin = this.createMixin("-744px -72px", "72px", "72px");
            this.A_IC_226_48x48_mixin = this.createMixin("-976px -816px", "48px", "48px");
            this.A_IC_226_72x72_mixin = this.createMixin("-744px -144px", "72px", "72px");
            this.A_IC_227_48x48_mixin = this.createMixin("-976px -864px", "48px", "48px");
            this.A_IC_227_72x72_mixin = this.createMixin("-744px -216px", "72px", "72px");
            this.A_IC_228_48x48_mixin = this.createMixin("0px -948px", "48px", "48px");
            this.A_IC_228_72x72_mixin = this.createMixin("-744px -288px", "72px", "72px");
            this.A_IC_229_48x48_mixin = this.createMixin("-48px -948px", "48px", "48px");
            this.A_IC_229_72x72_mixin = this.createMixin("-744px -360px", "72px", "72px");
            this.A_IC_230_48x48_mixin = this.createMixin("-96px -948px", "48px", "48px");
            this.A_IC_230_72x72_mixin = this.createMixin("-744px -432px", "72px", "72px");
            this.A_IC_231_48x48_mixin = this.createMixin("-144px -948px", "48px", "48px");
            this.A_IC_231_72x72_mixin = this.createMixin("-744px -504px", "72px", "72px");
            this.A_IC_232_48x48_mixin = this.createMixin("-192px -948px", "48px", "48px");
            this.A_IC_232_72x72_mixin = this.createMixin("-744px -576px", "72px", "72px");
            this.A_IC_233_48x48_mixin = this.createMixin("-240px -948px", "48px", "48px");
            this.A_IC_233_72x72_mixin = this.createMixin("-744px -648px", "72px", "72px");
            this.A_IC_234_48x48_mixin = this.createMixin("-288px -948px", "48px", "48px");
            this.A_IC_234_72x72_mixin = this.createMixin("0px -744px", "72px", "72px");
            this.A_IC_235_48x48_mixin = this.createMixin("-336px -948px", "48px", "48px");
            this.A_IC_235_72x72_mixin = this.createMixin("-72px -744px", "72px", "72px");
            this.A_IC_236_48x48_mixin = this.createMixin("-384px -948px", "48px", "48px");
            this.A_IC_236_72x72_mixin = this.createMixin("-144px -744px", "72px", "72px");
            this.A_IC_237_72x72_mixin = this.createMixin("-216px -744px", "72px", "72px");
            this.A_IC_238_72x72_mixin = this.createMixin("-288px -744px", "72px", "72px");
            this.A_IC_239_72x72_mixin = this.createMixin("-360px -744px", "72px", "72px");
            this.A_IC_240_72x72_mixin = this.createMixin("-432px -744px", "72px", "72px");
            this.A_IC_241_72x72_mixin = this.createMixin("-504px -744px", "72px", "72px");
            this.A_IC_246_48x48_mixin = this.createMixin("-432px -948px", "48px", "48px");
        }
        CssSprites1080p.prototype.createMixin = function (pos, width, height) {
            return new css_base_1.CssDeclaration()
                .props({
                backgroundImage: this.back,
                backgroundPosition: pos,
                width: { value: width, important: true },
                height: { value: height, important: true }
            });
        };
        CssSprites1080p.prototype.add = function (style, declaration) {
            return css_base_1.CssFunctions.add(style, function (style) { return css_base_1.selector("." + style).extend(declaration); });
        };
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_001_36x36", {
            get: function () { return this.add("A-IC-001_36x36", this.A_IC_001_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_001_48x48", {
            get: function () { return this.add("A-IC-001_48x48", this.A_IC_001_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_001_72x72", {
            get: function () { return this.add("A-IC-001_72x72", this.A_IC_001_72x72_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_002_2_48x48", {
            get: function () { return this.add("A-IC-002-2_48x48", this.A_IC_002_2_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_002_2_72x72", {
            get: function () { return this.add("A-IC-002-2_72x72", this.A_IC_002_2_72x72_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_002_48x48", {
            get: function () { return this.add("A-IC-002_48x48", this.A_IC_002_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_003_1_120x120", {
            get: function () { return this.add("A-IC-003-1_120x120", this.A_IC_003_1_120x120_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_003_1_168x168", {
            get: function () { return this.add("A-IC-003-1_168x168", this.A_IC_003_1_168x168_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_003_1_30x30", {
            get: function () { return this.add("A-IC-003-1_30x30", this.A_IC_003_1_30x30_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_003_1_36x36", {
            get: function () { return this.add("A-IC-003-1_36x36", this.A_IC_003_1_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_003_1_48x48", {
            get: function () { return this.add("A-IC-003-1_48x48", this.A_IC_003_1_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_003_1_72x72", {
            get: function () { return this.add("A-IC-003-1_72x72", this.A_IC_003_1_72x72_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_003_3_30x30", {
            get: function () { return this.add("A-IC-003-3_30x30", this.A_IC_003_3_30x30_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_003_3_36x36", {
            get: function () { return this.add("A-IC-003-3_36x36", this.A_IC_003_3_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_003_3_48x48", {
            get: function () { return this.add("A-IC-003-3_48x48", this.A_IC_003_3_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_004_1_120x120", {
            get: function () { return this.add("A-IC-004-1_120x120", this.A_IC_004_1_120x120_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_005_3_72x72", {
            get: function () { return this.add("A-IC-005-3_72x72", this.A_IC_005_3_72x72_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_005_120x120", {
            get: function () { return this.add("A-IC-005_120x120", this.A_IC_005_120x120_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_005_72x72", {
            get: function () { return this.add("A-IC-005_72x72", this.A_IC_005_72x72_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_007_120x120", {
            get: function () { return this.add("A-IC-007_120x120", this.A_IC_007_120x120_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_008_2_48x48", {
            get: function () { return this.add("A-IC-008-2_48x48", this.A_IC_008_2_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_008_2_72x72", {
            get: function () { return this.add("A-IC-008-2_72x72", this.A_IC_008_2_72x72_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_008_30x30", {
            get: function () { return this.add("A-IC-008_30x30", this.A_IC_008_30x30_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_008_36x36", {
            get: function () { return this.add("A-IC-008_36x36", this.A_IC_008_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_008_48x48", {
            get: function () { return this.add("A-IC-008_48x48", this.A_IC_008_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_009_1_30x30", {
            get: function () { return this.add("A-IC-009-1_30x30", this.A_IC_009_1_30x30_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_009_1_36x36", {
            get: function () { return this.add("A-IC-009-1_36x36", this.A_IC_009_1_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_009_1_48x48", {
            get: function () { return this.add("A-IC-009-1_48x48", this.A_IC_009_1_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_009_1_72x72", {
            get: function () { return this.add("A-IC-009-1_72x72", this.A_IC_009_1_72x72_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_009_2_30x30", {
            get: function () { return this.add("A-IC-009-2_30x30", this.A_IC_009_2_30x30_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_009_2_36x36", {
            get: function () { return this.add("A-IC-009-2_36x36", this.A_IC_009_2_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_013_1_24x24", {
            get: function () { return this.add("A-IC-013-1_24x24", this.A_IC_013_1_24x24_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_013_1_30x30", {
            get: function () { return this.add("A-IC-013-1_30x30", this.A_IC_013_1_30x30_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_013_1_36x36", {
            get: function () { return this.add("A-IC-013-1_36x36", this.A_IC_013_1_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_013_1_48x48", {
            get: function () { return this.add("A-IC-013-1_48x48", this.A_IC_013_1_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_013_2_24x24", {
            get: function () { return this.add("A-IC-013-2_24x24", this.A_IC_013_2_24x24_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_013_2_30x30", {
            get: function () { return this.add("A-IC-013-2_30x30", this.A_IC_013_2_30x30_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_013_2_48x48", {
            get: function () { return this.add("A-IC-013-2_48x48", this.A_IC_013_2_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_013_3_36x36", {
            get: function () { return this.add("A-IC-013-3_36x36", this.A_IC_013_3_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_015_1_1_30x30", {
            get: function () { return this.add("A-IC-015-1-1_30x30", this.A_IC_015_1_1_30x30_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_015_1_1_36x36", {
            get: function () { return this.add("A-IC-015-1-1_36x36", this.A_IC_015_1_1_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_015_1_1_48x48", {
            get: function () { return this.add("A-IC-015-1-1_48x48", this.A_IC_015_1_1_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_015_2_1_30x30", {
            get: function () { return this.add("A-IC-015-2-1_30x30", this.A_IC_015_2_1_30x30_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_015_2_1_36x36", {
            get: function () { return this.add("A-IC-015-2-1_36x36", this.A_IC_015_2_1_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_015_2_1_48x48", {
            get: function () { return this.add("A-IC-015-2-1_48x48", this.A_IC_015_2_1_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_015_2_2_48x48", {
            get: function () { return this.add("A-IC-015-2-2_48x48", this.A_IC_015_2_2_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_015_2_2_54x54", {
            get: function () { return this.add("A-IC-015-2-2_54x54", this.A_IC_015_2_2_54x54_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_015_3_1_36x36", {
            get: function () { return this.add("A-IC-015-3-1_36x36", this.A_IC_015_3_1_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_015_3_2_36x36", {
            get: function () { return this.add("A-IC-015-3-2_36x36", this.A_IC_015_3_2_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_015_3_2_54x54", {
            get: function () { return this.add("A-IC-015-3-2_54x54", this.A_IC_015_3_2_54x54_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_015_4_1_36x36", {
            get: function () { return this.add("A-IC-015-4-1_36x36", this.A_IC_015_4_1_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_015_4_1_54x54", {
            get: function () { return this.add("A-IC-015-4-1_54x54", this.A_IC_015_4_1_54x54_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_015_4_2_36x36", {
            get: function () { return this.add("A-IC-015-4-2_36x36", this.A_IC_015_4_2_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_015_4_2_54x54", {
            get: function () { return this.add("A-IC-015-4-2_54x54", this.A_IC_015_4_2_54x54_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_017_24x24", {
            get: function () { return this.add("A-IC-017_24x24", this.A_IC_017_24x24_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_018_24x24", {
            get: function () { return this.add("A-IC-018_24x24", this.A_IC_018_24x24_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_020_2_48x48", {
            get: function () { return this.add("A-IC-020-2_48x48", this.A_IC_020_2_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_022_48x48", {
            get: function () { return this.add("A-IC-022_48x48", this.A_IC_022_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_023_36x36", {
            get: function () { return this.add("A-IC-023_36x36", this.A_IC_023_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_024_1_30x30", {
            get: function () { return this.add("A-IC-024-1_30x30", this.A_IC_024_1_30x30_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_024_30x30", {
            get: function () { return this.add("A-IC-024_30x30", this.A_IC_024_30x30_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_024_36x36", {
            get: function () { return this.add("A-IC-024_36x36", this.A_IC_024_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_024_48x48", {
            get: function () { return this.add("A-IC-024_48x48", this.A_IC_024_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_024_72x72", {
            get: function () { return this.add("A-IC-024_72x72", this.A_IC_024_72x72_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_025_30x30", {
            get: function () { return this.add("A-IC-025_30x30", this.A_IC_025_30x30_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_025_48x48", {
            get: function () { return this.add("A-IC-025_48x48", this.A_IC_025_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_027_1_24x24", {
            get: function () { return this.add("A-IC-027-1_24x24", this.A_IC_027_1_24x24_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_027_1_30x30", {
            get: function () { return this.add("A-IC-027-1_30x30", this.A_IC_027_1_30x30_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_027_1_36x36", {
            get: function () { return this.add("A-IC-027-1_36x36", this.A_IC_027_1_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_027_2_24x24", {
            get: function () { return this.add("A-IC-027-2_24x24", this.A_IC_027_2_24x24_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_027_2_30x30", {
            get: function () { return this.add("A-IC-027-2_30x30", this.A_IC_027_2_30x30_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_027_2_48x48", {
            get: function () { return this.add("A-IC-027-2_48x48", this.A_IC_027_2_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_027_2_72x72", {
            get: function () { return this.add("A-IC-027-2_72x72", this.A_IC_027_2_72x72_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_027_3_36x36", {
            get: function () { return this.add("A-IC-027-3_36x36", this.A_IC_027_3_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_027_4_24x24", {
            get: function () { return this.add("A-IC-027-4_24x24", this.A_IC_027_4_24x24_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_027_4_48x48", {
            get: function () { return this.add("A-IC-027-4_48x48", this.A_IC_027_4_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_027_5_24x24", {
            get: function () { return this.add("A-IC-027-5_24x24", this.A_IC_027_5_24x24_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_027_5_30x30", {
            get: function () { return this.add("A-IC-027-5_30x30", this.A_IC_027_5_30x30_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_027_5_36x36", {
            get: function () { return this.add("A-IC-027-5_36x36", this.A_IC_027_5_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_027_6_24x24", {
            get: function () { return this.add("A-IC-027-6_24x24", this.A_IC_027_6_24x24_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_028_1_24x24", {
            get: function () { return this.add("A-IC-028-1_24x24", this.A_IC_028_1_24x24_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_028_1_30x30", {
            get: function () { return this.add("A-IC-028-1_30x30", this.A_IC_028_1_30x30_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_028_1_36x36", {
            get: function () { return this.add("A-IC-028-1_36x36", this.A_IC_028_1_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_028_2_24x24", {
            get: function () { return this.add("A-IC-028-2_24x24", this.A_IC_028_2_24x24_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_028_2_30x30", {
            get: function () { return this.add("A-IC-028-2_30x30", this.A_IC_028_2_30x30_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_028_2_36x36", {
            get: function () { return this.add("A-IC-028-2_36x36", this.A_IC_028_2_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_028_2_72x72", {
            get: function () { return this.add("A-IC-028-2_72x72", this.A_IC_028_2_72x72_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_029_1_30x30", {
            get: function () { return this.add("A-IC-029-1_30x30", this.A_IC_029_1_30x30_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_029_1_36x36", {
            get: function () { return this.add("A-IC-029-1_36x36", this.A_IC_029_1_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_029_1_48x48", {
            get: function () { return this.add("A-IC-029-1_48x48", this.A_IC_029_1_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_029_2_30x30", {
            get: function () { return this.add("A-IC-029-2_30x30", this.A_IC_029_2_30x30_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_029_2_36x36", {
            get: function () { return this.add("A-IC-029-2_36x36", this.A_IC_029_2_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_030_30x30", {
            get: function () { return this.add("A-IC-030_30x30", this.A_IC_030_30x30_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_030_36x36", {
            get: function () { return this.add("A-IC-030_36x36", this.A_IC_030_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_030_48x48", {
            get: function () { return this.add("A-IC-030_48x48", this.A_IC_030_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_030_72x72", {
            get: function () { return this.add("A-IC-030_72x72", this.A_IC_030_72x72_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_031_30x30", {
            get: function () { return this.add("A-IC-031_30x30", this.A_IC_031_30x30_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_032_2_48x48", {
            get: function () { return this.add("A-IC-032_2_48x48", this.A_IC_032_2_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_032_30x30", {
            get: function () { return this.add("A-IC-032_30x30", this.A_IC_032_30x30_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_033_30x30", {
            get: function () { return this.add("A-IC-033_30x30", this.A_IC_033_30x30_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_033_36x36", {
            get: function () { return this.add("A-IC-033_36x36", this.A_IC_033_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_034_1_30x30", {
            get: function () { return this.add("A-IC-034-1_30x30", this.A_IC_034_1_30x30_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_034_1_36x36", {
            get: function () { return this.add("A-IC-034-1_36x36", this.A_IC_034_1_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_034_3_36x36", {
            get: function () { return this.add("A-IC-034-3_36x36", this.A_IC_034_3_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_034_4_48x48", {
            get: function () { return this.add("A-IC-034-4_48x48", this.A_IC_034_4_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_034_4_72x72", {
            get: function () { return this.add("A-IC-034-4_72x72", this.A_IC_034_4_72x72_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_034_30x30", {
            get: function () { return this.add("A-IC-034_30x30", this.A_IC_034_30x30_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_034_36x36", {
            get: function () { return this.add("A-IC-034_36x36", this.A_IC_034_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_034_48x48", {
            get: function () { return this.add("A-IC-034_48x48", this.A_IC_034_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_036_30x30", {
            get: function () { return this.add("A-IC-036_30x30", this.A_IC_036_30x30_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_037_30x30", {
            get: function () { return this.add("A-IC-037_30x30", this.A_IC_037_30x30_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_037_36x36", {
            get: function () { return this.add("A-IC-037_36x36", this.A_IC_037_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_038_1_1_48x48", {
            get: function () { return this.add("A-IC-038-1-1_48x48", this.A_IC_038_1_1_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_038_1_2_36x36", {
            get: function () { return this.add("A-IC-038-1-2_36x36", this.A_IC_038_1_2_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_038_1_2_48x48", {
            get: function () { return this.add("A-IC-038-1-2_48x48", this.A_IC_038_1_2_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_038_1_3_48x48", {
            get: function () { return this.add("A-IC-038-1-3_48x48", this.A_IC_038_1_3_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_039_36x36", {
            get: function () { return this.add("A-IC-039_36x36", this.A_IC_039_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_039_48x48", {
            get: function () { return this.add("A-IC-039_48x48", this.A_IC_039_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_040_36x36", {
            get: function () { return this.add("A-IC-040_36x36", this.A_IC_040_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_040_48x48", {
            get: function () { return this.add("A-IC-040_48x48", this.A_IC_040_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_041_48x48", {
            get: function () { return this.add("A-IC-041_48x48", this.A_IC_041_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_042_48x48", {
            get: function () { return this.add("A-IC-042_48x48", this.A_IC_042_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_043_2_72x72", {
            get: function () { return this.add("A-IC-043-2_72x72", this.A_IC_043_2_72x72_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_044_1_24x24", {
            get: function () { return this.add("A-IC-044-1_24x24", this.A_IC_044_1_24x24_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_044_1_30x30", {
            get: function () { return this.add("A-IC-044-1_30x30", this.A_IC_044_1_30x30_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_044_2_24x24", {
            get: function () { return this.add("A-IC-044-2_24x24", this.A_IC_044_2_24x24_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_044_2_30x30", {
            get: function () { return this.add("A-IC-044-2_30x30", this.A_IC_044_2_30x30_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_044_3_24x24", {
            get: function () { return this.add("A-IC-044-3_24x24", this.A_IC_044_3_24x24_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_044_3_30x30", {
            get: function () { return this.add("A-IC-044-3_30x30", this.A_IC_044_3_30x30_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_045_1_1_30x30", {
            get: function () { return this.add("A-IC-045-1-1_30x30", this.A_IC_045_1_1_30x30_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_045_1_2_30x30", {
            get: function () { return this.add("A-IC-045-1-2_30x30", this.A_IC_045_1_2_30x30_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_045_2_1_48x48", {
            get: function () { return this.add("A-IC-045-2-1_48x48", this.A_IC_045_2_1_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_045_2_2_48x48", {
            get: function () { return this.add("A-IC-045-2-2_48x48", this.A_IC_045_2_2_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_046_1_24x24", {
            get: function () { return this.add("A-IC-046-1_24x24", this.A_IC_046_1_24x24_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_046_1_30x30", {
            get: function () { return this.add("A-IC-046-1_30x30", this.A_IC_046_1_30x30_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_046_1_36x36", {
            get: function () { return this.add("A-IC-046-1_36x36", this.A_IC_046_1_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_046_1_48x48", {
            get: function () { return this.add("A-IC-046-1_48x48", this.A_IC_046_1_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_046_1_54x54", {
            get: function () { return this.add("A-IC-046-1_54x54", this.A_IC_046_1_54x54_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_046_1_72x72", {
            get: function () { return this.add("A-IC-046-1_72x72", this.A_IC_046_1_72x72_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_046_2_30x30", {
            get: function () { return this.add("A-IC-046-2_30x30", this.A_IC_046_2_30x30_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_046_3_36x36", {
            get: function () { return this.add("A-IC-046-3_36x36", this.A_IC_046_3_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_046_3_54x54", {
            get: function () { return this.add("A-IC-046-3_54x54", this.A_IC_046_3_54x54_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_046_3_72x72", {
            get: function () { return this.add("A-IC-046-3_72x72", this.A_IC_046_3_72x72_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_046_4_72x72", {
            get: function () { return this.add("A-IC-046-4_72x72", this.A_IC_046_4_72x72_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_046_5_36x36", {
            get: function () { return this.add("A-IC-046-5_36x36", this.A_IC_046_5_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_046_5_48x48", {
            get: function () { return this.add("A-IC-046-5_48x48", this.A_IC_046_5_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_046_5_54x54", {
            get: function () { return this.add("A-IC-046-5_54x54", this.A_IC_046_5_54x54_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_046_5_72x72", {
            get: function () { return this.add("A-IC-046-5_72x72", this.A_IC_046_5_72x72_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_046_7_54x54", {
            get: function () { return this.add("A-IC-046-7_54x54", this.A_IC_046_7_54x54_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_046_8_48x48", {
            get: function () { return this.add("A-IC-046-8_48x48", this.A_IC_046_8_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_046_8_72x72", {
            get: function () { return this.add("A-IC-046-8_72x72", this.A_IC_046_8_72x72_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_046_9_72x72", {
            get: function () { return this.add("A-IC-046-9_72x72", this.A_IC_046_9_72x72_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_047_1_24x24", {
            get: function () { return this.add("A-IC-047-1_24x24", this.A_IC_047_1_24x24_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_047_2_24x24", {
            get: function () { return this.add("A-IC-047-2_24x24", this.A_IC_047_2_24x24_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_047_3_24x24", {
            get: function () { return this.add("A-IC-047-3_24x24", this.A_IC_047_3_24x24_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_048_1_20x20", {
            get: function () { return this.add("A-IC-048-1_20x20", this.A_IC_048_1_20x20_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_048_1_24x24", {
            get: function () { return this.add("A-IC-048-1_24x24", this.A_IC_048_1_24x24_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_048_2_20x20", {
            get: function () { return this.add("A-IC-048-2_20x20", this.A_IC_048_2_20x20_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_048_2_24x24", {
            get: function () { return this.add("A-IC-048-2_24x24", this.A_IC_048_2_24x24_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_048_3_20x20", {
            get: function () { return this.add("A-IC-048-3_20x20", this.A_IC_048_3_20x20_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_048_3_24x24", {
            get: function () { return this.add("A-IC-048-3_24x24", this.A_IC_048_3_24x24_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_049_1_50x24", {
            get: function () { return this.add("A-IC-049-1_50x24", this.A_IC_049_1_50x24_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_049_1_64x30", {
            get: function () { return this.add("A-IC-049-1_64x30", this.A_IC_049_1_64x30_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_049_1_77x36", {
            get: function () { return this.add("A-IC-049-1_77x36", this.A_IC_049_1_77x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_049_2_50x24", {
            get: function () { return this.add("A-IC-049-2_50x24", this.A_IC_049_2_50x24_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_049_2_64x30", {
            get: function () { return this.add("A-IC-049-2_64x30", this.A_IC_049_2_64x30_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_050_1_30x30", {
            get: function () { return this.add("A-IC-050-1_30x30", this.A_IC_050_1_30x30_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_050_1_36x36", {
            get: function () { return this.add("A-IC-050-1_36x36", this.A_IC_050_1_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_051_1_24x24", {
            get: function () { return this.add("A-IC-051-1_24x24", this.A_IC_051_1_24x24_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_051_1_30x30", {
            get: function () { return this.add("A-IC-051-1_30x30", this.A_IC_051_1_30x30_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_051_2_30x30", {
            get: function () { return this.add("A-IC-051-2_30x30", this.A_IC_051_2_30x30_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_054_2_24x24", {
            get: function () { return this.add("A-IC-054-2_24x24", this.A_IC_054_2_24x24_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_054_30x30", {
            get: function () { return this.add("A-IC-054_30x30", this.A_IC_054_30x30_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_054_36x36", {
            get: function () { return this.add("A-IC-054_36x36", this.A_IC_054_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_055_1_36x36", {
            get: function () { return this.add("A-IC-055-1_36x36", this.A_IC_055_1_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_055_2_24x24", {
            get: function () { return this.add("A-IC-055-2_24x24", this.A_IC_055_2_24x24_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_055_36x36", {
            get: function () { return this.add("A-IC-055_36x36", this.A_IC_055_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_057_3_48x48", {
            get: function () { return this.add("A-IC-057-3_48x48", this.A_IC_057_3_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_057_3_72x72", {
            get: function () { return this.add("A-IC-057-3_72x72", this.A_IC_057_3_72x72_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_058_1_36x36", {
            get: function () { return this.add("A-IC-058-1_36x36", this.A_IC_058_1_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_058_1_48x48", {
            get: function () { return this.add("A-IC-058-1_48x48", this.A_IC_058_1_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_058_2_30x30", {
            get: function () { return this.add("A-IC-058-2_30x30", this.A_IC_058_2_30x30_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_058_2_36x36", {
            get: function () { return this.add("A-IC-058-2_36x36", this.A_IC_058_2_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_058_2_42x42", {
            get: function () { return this.add("A-IC-058-2_42x42", this.A_IC_058_2_42x42_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_058_2_48x48", {
            get: function () { return this.add("A-IC-058-2_48x48", this.A_IC_058_2_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_058_2_72x72", {
            get: function () { return this.add("A-IC-058-2_72x72", this.A_IC_058_2_72x72_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_059_1_36x36", {
            get: function () { return this.add("A-IC-059-1_36x36", this.A_IC_059_1_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_059_1_48x48", {
            get: function () { return this.add("A-IC-059-1_48x48", this.A_IC_059_1_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_059_2_36x36", {
            get: function () { return this.add("A-IC-059-2_36x36", this.A_IC_059_2_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_059_2_37x30", {
            get: function () { return this.add("A-IC-059-2_37x30", this.A_IC_059_2_37x30_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_059_2_42x42", {
            get: function () { return this.add("A-IC-059-2_42x42", this.A_IC_059_2_42x42_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_059_2_48x48", {
            get: function () { return this.add("A-IC-059-2_48x48", this.A_IC_059_2_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_059_2_72x72", {
            get: function () { return this.add("A-IC-059-2_72x72", this.A_IC_059_2_72x72_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_060_1_36x36", {
            get: function () { return this.add("A-IC-060-1_36x36", this.A_IC_060_1_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_060_1_48x48", {
            get: function () { return this.add("A-IC-060-1_48x48", this.A_IC_060_1_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_060_2_36x36", {
            get: function () { return this.add("A-IC-060-2_36x36", this.A_IC_060_2_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_060_2_72x72", {
            get: function () { return this.add("A-IC-060-2_72x72", this.A_IC_060_2_72x72_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_061_1_36x36", {
            get: function () { return this.add("A-IC-061-1_36x36", this.A_IC_061_1_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_061_1_48x48", {
            get: function () { return this.add("A-IC-061-1_48x48", this.A_IC_061_1_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_061_2_36x36", {
            get: function () { return this.add("A-IC-061-2_36x36", this.A_IC_061_2_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_061_2_48x48", {
            get: function () { return this.add("A-IC-061-2_48x48", this.A_IC_061_2_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_062_1_36x36", {
            get: function () { return this.add("A-IC-062-1_36x36", this.A_IC_062_1_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_062_1_48x48", {
            get: function () { return this.add("A-IC-062-1_48x48", this.A_IC_062_1_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_062_2_36x36", {
            get: function () { return this.add("A-IC-062-2_36x36", this.A_IC_062_2_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_062_2_48x48", {
            get: function () { return this.add("A-IC-062-2_48x48", this.A_IC_062_2_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_062_2_52x42", {
            get: function () { return this.add("A-IC-062-2_52x42", this.A_IC_062_2_52x42_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_062_3_36x30", {
            get: function () { return this.add("A-IC-062-3_36x30", this.A_IC_062_3_36x30_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_062_3_36x36", {
            get: function () { return this.add("A-IC-062-3_36x36", this.A_IC_062_3_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_063_1_36x30", {
            get: function () { return this.add("A-IC-063-1_36x30", this.A_IC_063_1_36x30_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_063_1_36x36", {
            get: function () { return this.add("A-IC-063-1_36x36", this.A_IC_063_1_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_063_1_42x42", {
            get: function () { return this.add("A-IC-063-1_42x42", this.A_IC_063_1_42x42_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_063_1_48x48", {
            get: function () { return this.add("A-IC-063-1_48x48", this.A_IC_063_1_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_063_2_36x30", {
            get: function () { return this.add("A-IC-063-2_36x30", this.A_IC_063_2_36x30_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_063_2_36x36", {
            get: function () { return this.add("A-IC-063-2_36x36", this.A_IC_063_2_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_063_2_42x42", {
            get: function () { return this.add("A-IC-063-2_42x42", this.A_IC_063_2_42x42_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_063_2_48x48", {
            get: function () { return this.add("A-IC-063-2_48x48", this.A_IC_063_2_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_065_1_36x36", {
            get: function () { return this.add("A-IC-065-1_36x36", this.A_IC_065_1_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_065_1_48x48", {
            get: function () { return this.add("A-IC-065-1_48x48", this.A_IC_065_1_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_065_2_36x36", {
            get: function () { return this.add("A-IC-065-2_36x36", this.A_IC_065_2_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_065_2_48x48", {
            get: function () { return this.add("A-IC-065-2_48x48", this.A_IC_065_2_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_066_2_36x36", {
            get: function () { return this.add("A-IC-066-2_36x36", this.A_IC_066_2_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_066_2_48x48", {
            get: function () { return this.add("A-IC-066-2_48x48", this.A_IC_066_2_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_067_1_36x36", {
            get: function () { return this.add("A-IC-067-1_36x36", this.A_IC_067_1_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_067_1_48x48", {
            get: function () { return this.add("A-IC-067-1_48x48", this.A_IC_067_1_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_067_2_36x36", {
            get: function () { return this.add("A-IC-067-2_36x36", this.A_IC_067_2_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_067_2_48x48", {
            get: function () { return this.add("A-IC-067-2_48x48", this.A_IC_067_2_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_069_36x36", {
            get: function () { return this.add("A-IC-069_36x36", this.A_IC_069_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_069_48x48", {
            get: function () { return this.add("A-IC-069_48x48", this.A_IC_069_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_072_120x120", {
            get: function () { return this.add("A-IC-072_120x120", this.A_IC_072_120x120_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_072_168x168", {
            get: function () { return this.add("A-IC-072_168x168", this.A_IC_072_168x168_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_072_30x30", {
            get: function () { return this.add("A-IC-072_30x30", this.A_IC_072_30x30_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_072_36x36", {
            get: function () { return this.add("A-IC-072_36x36", this.A_IC_072_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_072_48x48", {
            get: function () { return this.add("A-IC-072_48x48", this.A_IC_072_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_073_2_36x36", {
            get: function () { return this.add("A-IC-073-2_36x36", this.A_IC_073_2_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_073_24x24", {
            get: function () { return this.add("A-IC-073_24x24", this.A_IC_073_24x24_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_073_36x36", {
            get: function () { return this.add("A-IC-073_36x36", this.A_IC_073_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_076_36x36", {
            get: function () { return this.add("A-IC-076_36x36", this.A_IC_076_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_076_48x48", {
            get: function () { return this.add("A-IC-076_48x48", this.A_IC_076_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_077_30x30", {
            get: function () { return this.add("A-IC-077_30x30", this.A_IC_077_30x30_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_077_36x36", {
            get: function () { return this.add("A-IC-077_36x36", this.A_IC_077_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_077_48x48", {
            get: function () { return this.add("A-IC-077_48x48", this.A_IC_077_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_078_72x72", {
            get: function () { return this.add("A-IC-078_72x72", this.A_IC_078_72x72_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_079_1_36x36", {
            get: function () { return this.add("A-IC-079-1_36x36", this.A_IC_079_1_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_079_1_48x48", {
            get: function () { return this.add("A-IC-079_1_48x48", this.A_IC_079_1_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_079_24x24", {
            get: function () { return this.add("A-IC-079_24x24", this.A_IC_079_24x24_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_079_36x36", {
            get: function () { return this.add("A-IC-079_36x36", this.A_IC_079_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_079_48x48", {
            get: function () { return this.add("A-IC-079_48x48", this.A_IC_079_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_079_72x72", {
            get: function () { return this.add("A-IC-079_72x72", this.A_IC_079_72x72_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_080_1_30x30", {
            get: function () { return this.add("A-IC-080-1_30x30", this.A_IC_080_1_30x30_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_080_1_48x48", {
            get: function () { return this.add("A-IC-080-1_48x48", this.A_IC_080_1_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_080_48x48", {
            get: function () { return this.add("A-IC-080_48x48", this.A_IC_080_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_082_72x72", {
            get: function () { return this.add("A-IC-082_72x72", this.A_IC_082_72x72_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_083_48x48", {
            get: function () { return this.add("A-IC-083_48x48", this.A_IC_083_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_083_72x72", {
            get: function () { return this.add("A-IC-083_72x72", this.A_IC_083_72x72_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_086_72x72", {
            get: function () { return this.add("A-IC-086_72x72", this.A_IC_086_72x72_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_087_72x72", {
            get: function () { return this.add("A-IC-087_72x72", this.A_IC_087_72x72_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_088_120x120", {
            get: function () { return this.add("A-IC-088_120x120", this.A_IC_088_120x120_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_088_168x168", {
            get: function () { return this.add("A-IC-088_168x168", this.A_IC_088_168x168_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_088_48x48", {
            get: function () { return this.add("A-IC-088_48x48", this.A_IC_088_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_088_72x72", {
            get: function () { return this.add("A-IC-088_72x72", this.A_IC_088_72x72_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_089_48x48", {
            get: function () { return this.add("A-IC-089_48x48", this.A_IC_089_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_089_54x54", {
            get: function () { return this.add("A-IC-089_54x54", this.A_IC_089_54x54_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_089_72x72", {
            get: function () { return this.add("A-IC-089_72x72", this.A_IC_089_72x72_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_112_30x30", {
            get: function () { return this.add("A-IC-112_30x30", this.A_IC_112_30x30_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_113_72x72", {
            get: function () { return this.add("A-IC-113_72x72", this.A_IC_113_72x72_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_115_1_1_36x36", {
            get: function () { return this.add("A-IC-115-1-1_36x36", this.A_IC_115_1_1_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_115_1_2_36x36", {
            get: function () { return this.add("A-IC-115-1-2_36x36", this.A_IC_115_1_2_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_115_1_3_36x36", {
            get: function () { return this.add("A-IC-115-1-3_36x36", this.A_IC_115_1_3_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_115_1_4_36x36", {
            get: function () { return this.add("A-IC-115-1-4_36x36", this.A_IC_115_1_4_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_115_1_5_36x36", {
            get: function () { return this.add("A-IC-115-1-5_36x36", this.A_IC_115_1_5_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_115_2_1_36x36", {
            get: function () { return this.add("A-IC-115-2-1_36x36", this.A_IC_115_2_1_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_115_2_2_36x36", {
            get: function () { return this.add("A-IC-115-2-2_36x36", this.A_IC_115_2_2_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_115_2_3_36x36", {
            get: function () { return this.add("A-IC-115-2-3_36x36", this.A_IC_115_2_3_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_115_2_4_36x36", {
            get: function () { return this.add("A-IC-115-2-4_36x36", this.A_IC_115_2_4_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_115_2_5_36x36", {
            get: function () { return this.add("A-IC-115-2-5_36x36", this.A_IC_115_2_5_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_116_1_36x36", {
            get: function () { return this.add("A-IC-116-1_36x36", this.A_IC_116_1_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_116_1_48x48", {
            get: function () { return this.add("A-IC-116-1_48x48", this.A_IC_116_1_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_116_2_36x36", {
            get: function () { return this.add("A-IC-116-2_36x36", this.A_IC_116_2_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_116_2_72x72", {
            get: function () { return this.add("A-IC-116-2_72x72", this.A_IC_116_2_72x72_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_117_1_36x36", {
            get: function () { return this.add("A-IC-117-1_36x36", this.A_IC_117_1_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_117_1_48x48", {
            get: function () { return this.add("A-IC-117-1_48x48", this.A_IC_117_1_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_117_2_36x36", {
            get: function () { return this.add("A-IC-117-2_36x36", this.A_IC_117_2_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_117_2_48x48", {
            get: function () { return this.add("A-IC-117-2_48x48", this.A_IC_117_2_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_117_3_36x36", {
            get: function () { return this.add("A-IC-117-3_36x36", this.A_IC_117_3_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_117_3_48x48", {
            get: function () { return this.add("A-IC-117-3_48x48", this.A_IC_117_3_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_117_4_36x36", {
            get: function () { return this.add("A-IC-117-4_36x36", this.A_IC_117_4_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_122_30x30", {
            get: function () { return this.add("A-IC-122_30x30", this.A_IC_122_30x30_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_122_36x36", {
            get: function () { return this.add("A-IC-122_36x36", this.A_IC_122_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_122_48x48", {
            get: function () { return this.add("A-IC-122_48x48", this.A_IC_122_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_124_1_36x36", {
            get: function () { return this.add("A-IC-124-1_36x36", this.A_IC_124_1_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_124_1_48x48", {
            get: function () { return this.add("A-IC-124-1_48x48", this.A_IC_124_1_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_124_2_36x36", {
            get: function () { return this.add("A-IC-124-2_36x36", this.A_IC_124_2_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_124_2_48x48", {
            get: function () { return this.add("A-IC-124-2_48x48", this.A_IC_124_2_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_124_2_72x72", {
            get: function () { return this.add("A-IC-124-2_72x72", this.A_IC_124_2_72x72_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_125_36x12", {
            get: function () { return this.add("A-IC-125_36x12", this.A_IC_125_36x12_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_129_27x21", {
            get: function () { return this.add("A-IC-129_27x21", this.A_IC_129_27x21_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_130_144x144", {
            get: function () { return this.add("A-IC-130_144x144", this.A_IC_130_144x144_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_131_144x144", {
            get: function () { return this.add("A-IC-131_144x144", this.A_IC_131_144x144_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_137_1_102x42", {
            get: function () { return this.add("A-IC-137-1_102x42", this.A_IC_137_1_102x42_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_137_1_72x72", {
            get: function () { return this.add("A-IC-137-1_72x72", this.A_IC_137_1_72x72_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_137_1_78x30", {
            get: function () { return this.add("A-IC-137-1_78x30", this.A_IC_137_1_78x30_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_137_2_87x36", {
            get: function () { return this.add("A-IC-137-2_87x36", this.A_IC_137_2_87x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_139_1_48x36", {
            get: function () { return this.add("A-IC-139-1_48x36", this.A_IC_139_1_48x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_139_2_48x36", {
            get: function () { return this.add("A-IC-139-2_48x36", this.A_IC_139_2_48x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_140_2_48x30", {
            get: function () { return this.add("A-IC-140-2_48x30", this.A_IC_140_2_48x30_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_140_2_58x42", {
            get: function () { return this.add("A-IC-140-2_58x42", this.A_IC_140_2_58x42_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_141_36x36", {
            get: function () { return this.add("A-IC-141_36x36", this.A_IC_141_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_142_48x48", {
            get: function () { return this.add("A-IC-142_48x48", this.A_IC_142_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_145_2_36x36", {
            get: function () { return this.add("A-IC-145_2_36x36", this.A_IC_145_2_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_145_36x36", {
            get: function () { return this.add("A-IC-145_36x36", this.A_IC_145_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_146_36x36", {
            get: function () { return this.add("A-IC-146_36x36", this.A_IC_146_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_147_36x36", {
            get: function () { return this.add("A-IC-147_36x36", this.A_IC_147_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_152_2_48x48", {
            get: function () { return this.add("A-IC-152-2_48x48", this.A_IC_152_2_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_152_2_72x72", {
            get: function () { return this.add("A-IC-152-2_72x72", this.A_IC_152_2_72x72_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_153_48x48", {
            get: function () { return this.add("A-IC-153_48x48", this.A_IC_153_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_153_72x72", {
            get: function () { return this.add("A-IC-153_72x72", this.A_IC_153_72x72_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_166_1_48x48", {
            get: function () { return this.add("A-IC-166-1_48x48", this.A_IC_166_1_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_166_1_72x72", {
            get: function () { return this.add("A-IC-166-1_72x72", this.A_IC_166_1_72x72_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_166_2_48x48", {
            get: function () { return this.add("A-IC-166-2_48x48", this.A_IC_166_2_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_166_2_72x72", {
            get: function () { return this.add("A-IC-166-2_72x72", this.A_IC_166_2_72x72_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_169_24x24", {
            get: function () { return this.add("A-IC-169_24x24", this.A_IC_169_24x24_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_174_48x48", {
            get: function () { return this.add("A-IC-174_48x48", this.A_IC_174_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_176_36x36", {
            get: function () { return this.add("A-IC-176_36x36", this.A_IC_176_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_177_36x36", {
            get: function () { return this.add("A-IC-177_36x36", this.A_IC_177_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_178_36x36", {
            get: function () { return this.add("A-IC-178_36x36", this.A_IC_178_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_179_24x24", {
            get: function () { return this.add("A-IC-179_24x24", this.A_IC_179_24x24_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_180_36x36", {
            get: function () { return this.add("A-IC-180_36x36", this.A_IC_180_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_181_36x36", {
            get: function () { return this.add("A-IC-181_36x36", this.A_IC_181_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_182_48x48", {
            get: function () { return this.add("A-IC-182_48x48", this.A_IC_182_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_183_3_30x30", {
            get: function () { return this.add("A-IC-183-3_30x30", this.A_IC_183_3_30x30_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_183_4_30x30", {
            get: function () { return this.add("A-IC-183-4_30x30", this.A_IC_183_4_30x30_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_186_84x36", {
            get: function () { return this.add("A-IC-186_84x36", this.A_IC_186_84x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_189_48x48", {
            get: function () { return this.add("A-IC-189_48x48", this.A_IC_189_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_189_72x72", {
            get: function () { return this.add("A-IC-189_72x72", this.A_IC_189_72x72_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_191_48x48", {
            get: function () { return this.add("A-IC-191_48x48", this.A_IC_191_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_191_72x72", {
            get: function () { return this.add("A-IC-191_72x72", this.A_IC_191_72x72_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_193_72x72", {
            get: function () { return this.add("A-IC-193_72x72", this.A_IC_193_72x72_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_194_36x36", {
            get: function () { return this.add("A-IC-194_36x36", this.A_IC_194_36x36_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_194_42x42", {
            get: function () { return this.add("A-IC-194_42x42", this.A_IC_194_42x42_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_195_48x48", {
            get: function () { return this.add("A-IC-195_48x48", this.A_IC_195_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_195_72x72", {
            get: function () { return this.add("A-IC-195_72x72", this.A_IC_195_72x72_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_196_48x48", {
            get: function () { return this.add("A-IC-196_48x48", this.A_IC_196_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_197_48x48", {
            get: function () { return this.add("A-IC-197_48x48", this.A_IC_197_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_197_72x72", {
            get: function () { return this.add("A-IC-197_72x72", this.A_IC_197_72x72_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_198_1_48x48", {
            get: function () { return this.add("A-IC-198-1_48x48", this.A_IC_198_1_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_198_2_48x48", {
            get: function () { return this.add("A-IC-198-2_48x48", this.A_IC_198_2_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_198_3_48x48", {
            get: function () { return this.add("A-IC-198-3_48x48", this.A_IC_198_3_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_198_4_48x48", {
            get: function () { return this.add("A-IC-198-4_48x48", this.A_IC_198_4_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_203_72x72", {
            get: function () { return this.add("A-IC-203_72x72", this.A_IC_203_72x72_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_204_72x72", {
            get: function () { return this.add("A-IC-204_72x72", this.A_IC_204_72x72_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_205_72x72", {
            get: function () { return this.add("A-IC-205_72x72", this.A_IC_205_72x72_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_207_48x48", {
            get: function () { return this.add("A-IC-207_48x48", this.A_IC_207_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_207_54x54", {
            get: function () { return this.add("A-IC-207_54x54", this.A_IC_207_54x54_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_207_72x72", {
            get: function () { return this.add("A-IC-207_72x72", this.A_IC_207_72x72_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_208_144x144", {
            get: function () { return this.add("A-IC-208_144x144", this.A_IC_208_144x144_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_208_64x64", {
            get: function () { return this.add("A-IC-208_64x64", this.A_IC_208_64x64_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_211_48x48", {
            get: function () { return this.add("A-IC-211_48x48", this.A_IC_211_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_217_48x48", {
            get: function () { return this.add("A-IC-217_48x48", this.A_IC_217_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_217_72x72", {
            get: function () { return this.add("A-IC-217_72x72", this.A_IC_217_72x72_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_218_48x48", {
            get: function () { return this.add("A-IC-218_48x48", this.A_IC_218_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_218_72x72", {
            get: function () { return this.add("A-IC-218_72x72", this.A_IC_218_72x72_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_219_48x48", {
            get: function () { return this.add("A-IC-219_48x48", this.A_IC_219_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_219_72x72", {
            get: function () { return this.add("A-IC-219_72x72", this.A_IC_219_72x72_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_220_48x48", {
            get: function () { return this.add("A-IC-220_48x48", this.A_IC_220_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_220_72x72", {
            get: function () { return this.add("A-IC-220_72x72", this.A_IC_220_72x72_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_221_48x48", {
            get: function () { return this.add("A-IC-221_48x48", this.A_IC_221_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_221_72x72", {
            get: function () { return this.add("A-IC-221_72x72", this.A_IC_221_72x72_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_222_48x48", {
            get: function () { return this.add("A-IC-222_48x48", this.A_IC_222_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_222_72x72", {
            get: function () { return this.add("A-IC-222_72x72", this.A_IC_222_72x72_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_223_48x48", {
            get: function () { return this.add("A-IC-223_48x48", this.A_IC_223_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_223_72x72", {
            get: function () { return this.add("A-IC-223_72x72", this.A_IC_223_72x72_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_224_48x48", {
            get: function () { return this.add("A-IC-224_48x48", this.A_IC_224_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_224_72x72", {
            get: function () { return this.add("A-IC-224_72x72", this.A_IC_224_72x72_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_225_48x48", {
            get: function () { return this.add("A-IC-225_48x48", this.A_IC_225_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_225_72x72", {
            get: function () { return this.add("A-IC-225_72x72", this.A_IC_225_72x72_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_226_48x48", {
            get: function () { return this.add("A-IC-226_48x48", this.A_IC_226_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_226_72x72", {
            get: function () { return this.add("A-IC-226_72x72", this.A_IC_226_72x72_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_227_48x48", {
            get: function () { return this.add("A-IC-227_48x48", this.A_IC_227_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_227_72x72", {
            get: function () { return this.add("A-IC-227_72x72", this.A_IC_227_72x72_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_228_48x48", {
            get: function () { return this.add("A-IC-228_48x48", this.A_IC_228_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_228_72x72", {
            get: function () { return this.add("A-IC-228_72x72", this.A_IC_228_72x72_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_229_48x48", {
            get: function () { return this.add("A-IC-229_48x48", this.A_IC_229_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_229_72x72", {
            get: function () { return this.add("A-IC-229_72x72", this.A_IC_229_72x72_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_230_48x48", {
            get: function () { return this.add("A-IC-230_48x48", this.A_IC_230_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_230_72x72", {
            get: function () { return this.add("A-IC-230_72x72", this.A_IC_230_72x72_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_231_48x48", {
            get: function () { return this.add("A-IC-231_48x48", this.A_IC_231_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_231_72x72", {
            get: function () { return this.add("A-IC-231_72x72", this.A_IC_231_72x72_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_232_48x48", {
            get: function () { return this.add("A-IC-232_48x48", this.A_IC_232_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_232_72x72", {
            get: function () { return this.add("A-IC-232_72x72", this.A_IC_232_72x72_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_233_48x48", {
            get: function () { return this.add("A-IC-233_48x48", this.A_IC_233_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_233_72x72", {
            get: function () { return this.add("A-IC-233_72x72", this.A_IC_233_72x72_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_234_48x48", {
            get: function () { return this.add("A-IC-234_48x48", this.A_IC_234_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_234_72x72", {
            get: function () { return this.add("A-IC-234_72x72", this.A_IC_234_72x72_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_235_48x48", {
            get: function () { return this.add("A-IC-235_48x48", this.A_IC_235_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_235_72x72", {
            get: function () { return this.add("A-IC-235_72x72", this.A_IC_235_72x72_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_236_48x48", {
            get: function () { return this.add("A-IC-236_48x48", this.A_IC_236_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_236_72x72", {
            get: function () { return this.add("A-IC-236_72x72", this.A_IC_236_72x72_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_237_72x72", {
            get: function () { return this.add("A-IC-237_72x72", this.A_IC_237_72x72_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_238_72x72", {
            get: function () { return this.add("A-IC-238_72x72", this.A_IC_238_72x72_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_239_72x72", {
            get: function () { return this.add("A-IC-239_72x72", this.A_IC_239_72x72_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_240_72x72", {
            get: function () { return this.add("A-IC-240_72x72", this.A_IC_240_72x72_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_241_72x72", {
            get: function () { return this.add("A-IC-241_72x72", this.A_IC_241_72x72_mixin); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssSprites1080p.prototype, "A_IC_246_48x48", {
            get: function () { return this.add("A-IC-246_48x48", this.A_IC_246_48x48_mixin); },
            enumerable: false,
            configurable: true
        });
        return CssSprites1080p;
    }());
    exports.CssSprites1080p = CssSprites1080p;
});
//# sourceMappingURL=css.sprites.1080p.js.map