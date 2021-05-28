/////////////////////////////////////////////////////////////////////////////
//              AUTO GENERATED !! DO NOT MODIFY THIS FILE
/////////////////////////////////////////////////////////////////////////////

import { CssDeclaration, selector, CssFunctions } from "./css.base";
import { ICssSprites } from "./css.sprites.interface";
import { Configuration, IFileBlobConfiguration } from "src/src-de-telekom/public";

const fileblob = Configuration.instance.fileblob || {} as IFileBlobConfiguration;

export class CssSprites720p implements ICssSprites {

    private readonly back = `url(${fileblob.spritemap || "src/src-de-telekom-style/720p/sprite.png"})`;

    private createMixin(pos: string, width: string, height: string): CssDeclaration {

        return new CssDeclaration()
            .props({
                backgroundImage: this.back,
                backgroundPosition: pos,
                width: { value: width, important: true },
                height: { value: height, important: true }
            });
    }

    private add(style: string, declaration: CssDeclaration) {

        return CssFunctions.add(style, style => selector("." + style).extend(declaration));
    }

    public get A_IC_001_36x36() { return this.add("A-IC-001_36x36", this.A_IC_001_36x36_mixin); }
    public A_IC_001_36x36_mixin = this.createMixin("-432px -632px", "24px", "24px");

    public get A_IC_001_48x48() { return this.add("A-IC-001_48x48", this.A_IC_001_48x48_mixin); }
    public A_IC_001_48x48_mixin = this.createMixin("-580px -28px", "32px", "32px");

    public get A_IC_001_72x72() { return this.add("A-IC-001_72x72", this.A_IC_001_72x72_mixin); }
    public A_IC_001_72x72_mixin = this.createMixin("-320px -160px", "48px", "48px");

    public get A_IC_002_2_48x48() { return this.add("A-IC-002-2_48x48", this.A_IC_002_2_48x48_mixin); }
    public A_IC_002_2_48x48_mixin = this.createMixin("-580px -60px", "32px", "32px");

    public get A_IC_002_2_72x72() { return this.add("A-IC-002-2_72x72", this.A_IC_002_2_72x72_mixin); }
    public A_IC_002_2_72x72_mixin = this.createMixin("-320px -208px", "48px", "48px");

    public get A_IC_002_48x48() { return this.add("A-IC-002_48x48", this.A_IC_002_48x48_mixin); }
    public A_IC_002_48x48_mixin = this.createMixin("-580px -92px", "32px", "32px");

    public get A_IC_003_1_120x120() { return this.add("A-IC-003-1_120x120", this.A_IC_003_1_120x120_mixin); }
    public A_IC_003_1_120x120_mixin = this.createMixin("0px -224px", "80px", "80px");

    public get A_IC_003_1_168x168() { return this.add("A-IC-003-1_168x168", this.A_IC_003_1_168x168_mixin); }
    public A_IC_003_1_168x168_mixin = this.createMixin("0px 0px", "112px", "112px");

    public get A_IC_003_1_30x30() { return this.add("A-IC-003-1_30x30", this.A_IC_003_1_30x30_mixin); }
    public A_IC_003_1_30x30_mixin = this.createMixin("-286px -544px", "20px", "20px");

    public get A_IC_003_1_36x36() { return this.add("A-IC-003-1_36x36", this.A_IC_003_1_36x36_mixin); }
    public A_IC_003_1_36x36_mixin = this.createMixin("-456px -632px", "24px", "24px");

    public get A_IC_003_1_48x48() { return this.add("A-IC-003-1_48x48", this.A_IC_003_1_48x48_mixin); }
    public A_IC_003_1_48x48_mixin = this.createMixin("-580px -124px", "32px", "32px");

    public get A_IC_003_1_72x72() { return this.add("A-IC-003-1_72x72", this.A_IC_003_1_72x72_mixin); }
    public A_IC_003_1_72x72_mixin = this.createMixin("-320px -256px", "48px", "48px");

    public get A_IC_003_3_30x30() { return this.add("A-IC-003-3_30x30", this.A_IC_003_3_30x30_mixin); }
    public A_IC_003_3_30x30_mixin = this.createMixin("-306px -544px", "20px", "20px");

    public get A_IC_003_3_36x36() { return this.add("A-IC-003-3_36x36", this.A_IC_003_3_36x36_mixin); }
    public A_IC_003_3_36x36_mixin = this.createMixin("-480px -632px", "24px", "24px");

    public get A_IC_003_3_48x48() { return this.add("A-IC-003-3_48x48", this.A_IC_003_3_48x48_mixin); }
    public A_IC_003_3_48x48_mixin = this.createMixin("-580px -156px", "32px", "32px");

    public get A_IC_004_1_120x120() { return this.add("A-IC-004-1_120x120", this.A_IC_004_1_120x120_mixin); }
    public A_IC_004_1_120x120_mixin = this.createMixin("-80px -224px", "80px", "80px");

    public get A_IC_005_3_72x72() { return this.add("A-IC-005-3_72x72", this.A_IC_005_3_72x72_mixin); }
    public A_IC_005_3_72x72_mixin = this.createMixin("0px -304px", "48px", "48px");

    public get A_IC_005_120x120() { return this.add("A-IC-005_120x120", this.A_IC_005_120x120_mixin); }
    public A_IC_005_120x120_mixin = this.createMixin("-160px -224px", "80px", "80px");

    public get A_IC_005_72x72() { return this.add("A-IC-005_72x72", this.A_IC_005_72x72_mixin); }
    public A_IC_005_72x72_mixin = this.createMixin("-48px -304px", "48px", "48px");

    public get A_IC_007_120x120() { return this.add("A-IC-007_120x120", this.A_IC_007_120x120_mixin); }
    public A_IC_007_120x120_mixin = this.createMixin("-240px -224px", "80px", "80px");

    public get A_IC_008_2_48x48() { return this.add("A-IC-008-2_48x48", this.A_IC_008_2_48x48_mixin); }
    public A_IC_008_2_48x48_mixin = this.createMixin("-580px -188px", "32px", "32px");

    public get A_IC_008_2_72x72() { return this.add("A-IC-008-2_72x72", this.A_IC_008_2_72x72_mixin); }
    public A_IC_008_2_72x72_mixin = this.createMixin("-96px -304px", "48px", "48px");

    public get A_IC_008_30x30() { return this.add("A-IC-008_30x30", this.A_IC_008_30x30_mixin); }
    public A_IC_008_30x30_mixin = this.createMixin("-326px -544px", "20px", "20px");

    public get A_IC_008_36x36() { return this.add("A-IC-008_36x36", this.A_IC_008_36x36_mixin); }
    public A_IC_008_36x36_mixin = this.createMixin("-504px -632px", "24px", "24px");

    public get A_IC_008_48x48() { return this.add("A-IC-008_48x48", this.A_IC_008_48x48_mixin); }
    public A_IC_008_48x48_mixin = this.createMixin("-580px -220px", "32px", "32px");

    public get A_IC_009_1_30x30() { return this.add("A-IC-009-1_30x30", this.A_IC_009_1_30x30_mixin); }
    public A_IC_009_1_30x30_mixin = this.createMixin("-346px -544px", "20px", "20px");

    public get A_IC_009_1_36x36() { return this.add("A-IC-009-1_36x36", this.A_IC_009_1_36x36_mixin); }
    public A_IC_009_1_36x36_mixin = this.createMixin("-528px -632px", "24px", "24px");

    public get A_IC_009_1_48x48() { return this.add("A-IC-009-1_48x48", this.A_IC_009_1_48x48_mixin); }
    public A_IC_009_1_48x48_mixin = this.createMixin("-580px -252px", "32px", "32px");

    public get A_IC_009_1_72x72() { return this.add("A-IC-009-1_72x72", this.A_IC_009_1_72x72_mixin); }
    public A_IC_009_1_72x72_mixin = this.createMixin("-144px -304px", "48px", "48px");

    public get A_IC_009_2_30x30() { return this.add("A-IC-009-2_30x30", this.A_IC_009_2_30x30_mixin); }
    public A_IC_009_2_30x30_mixin = this.createMixin("-366px -544px", "20px", "20px");

    public get A_IC_009_2_36x36() { return this.add("A-IC-009-2_36x36", this.A_IC_009_2_36x36_mixin); }
    public A_IC_009_2_36x36_mixin = this.createMixin("-552px -632px", "24px", "24px");

    public get A_IC_013_1_24x24() { return this.add("A-IC-013-1_24x24", this.A_IC_013_1_24x24_mixin); }
    public A_IC_013_1_24x24_mixin = this.createMixin("-707px -672px", "16px", "16px");

    public get A_IC_013_1_30x30() { return this.add("A-IC-013-1_30x30", this.A_IC_013_1_30x30_mixin); }
    public A_IC_013_1_30x30_mixin = this.createMixin("-386px -544px", "20px", "20px");

    public get A_IC_013_1_36x36() { return this.add("A-IC-013-1_36x36", this.A_IC_013_1_36x36_mixin); }
    public A_IC_013_1_36x36_mixin = this.createMixin("-576px -632px", "24px", "24px");

    public get A_IC_013_1_48x48() { return this.add("A-IC-013-1_48x48", this.A_IC_013_1_48x48_mixin); }
    public A_IC_013_1_48x48_mixin = this.createMixin("-580px -284px", "32px", "32px");

    public get A_IC_013_2_24x24() { return this.add("A-IC-013-2_24x24", this.A_IC_013_2_24x24_mixin); }
    public A_IC_013_2_24x24_mixin = this.createMixin("-683px -648px", "16px", "16px");

    public get A_IC_013_2_30x30() { return this.add("A-IC-013-2_30x30", this.A_IC_013_2_30x30_mixin); }
    public A_IC_013_2_30x30_mixin = this.createMixin("-406px -544px", "20px", "20px");

    public get A_IC_013_2_48x48() { return this.add("A-IC-013-2_48x48", this.A_IC_013_2_48x48_mixin); }
    public A_IC_013_2_48x48_mixin = this.createMixin("-580px -316px", "32px", "32px");

    public get A_IC_013_3_36x36() { return this.add("A-IC-013-3_36x36", this.A_IC_013_3_36x36_mixin); }
    public A_IC_013_3_36x36_mixin = this.createMixin("-600px -632px", "24px", "24px");

    public get A_IC_015_1_1_30x30() { return this.add("A-IC-015-1-1_30x30", this.A_IC_015_1_1_30x30_mixin); }
    public A_IC_015_1_1_30x30_mixin = this.createMixin("-426px -544px", "20px", "20px");

    public get A_IC_015_1_1_36x36() { return this.add("A-IC-015-1-1_36x36", this.A_IC_015_1_1_36x36_mixin); }
    public A_IC_015_1_1_36x36_mixin = this.createMixin("-624px -632px", "24px", "24px");

    public get A_IC_015_1_1_48x48() { return this.add("A-IC-015-1-1_48x48", this.A_IC_015_1_1_48x48_mixin); }
    public A_IC_015_1_1_48x48_mixin = this.createMixin("-580px -348px", "32px", "32px");

    public get A_IC_015_2_1_30x30() { return this.add("A-IC-015-2-1_30x30", this.A_IC_015_2_1_30x30_mixin); }
    public A_IC_015_2_1_30x30_mixin = this.createMixin("-446px -544px", "20px", "20px");

    public get A_IC_015_2_1_36x36() { return this.add("A-IC-015-2-1_36x36", this.A_IC_015_2_1_36x36_mixin); }
    public A_IC_015_2_1_36x36_mixin = this.createMixin("-648px -632px", "24px", "24px");

    public get A_IC_015_2_1_48x48() { return this.add("A-IC-015-2-1_48x48", this.A_IC_015_2_1_48x48_mixin); }
    public A_IC_015_2_1_48x48_mixin = this.createMixin("-580px -380px", "32px", "32px");

    public get A_IC_015_2_2_48x48() { return this.add("A-IC-015-2-2_48x48", this.A_IC_015_2_2_48x48_mixin); }
    public A_IC_015_2_2_48x48_mixin = this.createMixin("-580px -412px", "32px", "32px");

    public get A_IC_015_2_2_54x54() { return this.add("A-IC-015-2-2_54x54", this.A_IC_015_2_2_54x54_mixin); }
    public A_IC_015_2_2_54x54_mixin = this.createMixin("-544px 0px", "36px", "36px");

    public get A_IC_015_3_1_36x36() { return this.add("A-IC-015-3-1_36x36", this.A_IC_015_3_1_36x36_mixin); }
    public A_IC_015_3_1_36x36_mixin = this.createMixin("-683px 0px", "24px", "24px");

    public get A_IC_015_3_2_36x36() { return this.add("A-IC-015-3-2_36x36", this.A_IC_015_3_2_36x36_mixin); }
    public A_IC_015_3_2_36x36_mixin = this.createMixin("-683px -24px", "24px", "24px");

    public get A_IC_015_3_2_54x54() { return this.add("A-IC-015-3-2_54x54", this.A_IC_015_3_2_54x54_mixin); }
    public A_IC_015_3_2_54x54_mixin = this.createMixin("-544px -36px", "36px", "36px");

    public get A_IC_015_4_1_36x36() { return this.add("A-IC-015-4-1_36x36", this.A_IC_015_4_1_36x36_mixin); }
    public A_IC_015_4_1_36x36_mixin = this.createMixin("-683px -48px", "24px", "24px");

    public get A_IC_015_4_1_54x54() { return this.add("A-IC-015-4-1_54x54", this.A_IC_015_4_1_54x54_mixin); }
    public A_IC_015_4_1_54x54_mixin = this.createMixin("-544px -72px", "36px", "36px");

    public get A_IC_015_4_2_36x36() { return this.add("A-IC-015-4-2_36x36", this.A_IC_015_4_2_36x36_mixin); }
    public A_IC_015_4_2_36x36_mixin = this.createMixin("-683px -72px", "24px", "24px");

    public get A_IC_015_4_2_54x54() { return this.add("A-IC-015-4-2_54x54", this.A_IC_015_4_2_54x54_mixin); }
    public A_IC_015_4_2_54x54_mixin = this.createMixin("-544px -108px", "36px", "36px");

    public get A_IC_017_24x24() { return this.add("A-IC-017_24x24", this.A_IC_017_24x24_mixin); }
    public A_IC_017_24x24_mixin = this.createMixin("-400px -384px", "16px", "16px");

    public get A_IC_018_24x24() { return this.add("A-IC-018_24x24", this.A_IC_018_24x24_mixin); }
    public A_IC_018_24x24_mixin = this.createMixin("-416px -384px", "16px", "16px");

    public get A_IC_020_2_48x48() { return this.add("A-IC-020-2_48x48", this.A_IC_020_2_48x48_mixin); }
    public A_IC_020_2_48x48_mixin = this.createMixin("-580px -444px", "32px", "32px");

    public get A_IC_022_48x48() { return this.add("A-IC-022_48x48", this.A_IC_022_48x48_mixin); }
    public A_IC_022_48x48_mixin = this.createMixin("-580px -476px", "32px", "32px");

    public get A_IC_023_36x36() { return this.add("A-IC-023_36x36", this.A_IC_023_36x36_mixin); }
    public A_IC_023_36x36_mixin = this.createMixin("-683px -96px", "24px", "24px");

    public get A_IC_024_1_30x30() { return this.add("A-IC-024-1_30x30", this.A_IC_024_1_30x30_mixin); }
    public A_IC_024_1_30x30_mixin = this.createMixin("-466px -544px", "20px", "20px");

    public get A_IC_024_30x30() { return this.add("A-IC-024_30x30", this.A_IC_024_30x30_mixin); }
    public A_IC_024_30x30_mixin = this.createMixin("-486px -544px", "20px", "20px");

    public get A_IC_024_36x36() { return this.add("A-IC-024_36x36", this.A_IC_024_36x36_mixin); }
    public A_IC_024_36x36_mixin = this.createMixin("-683px -120px", "24px", "24px");

    public get A_IC_024_48x48() { return this.add("A-IC-024_48x48", this.A_IC_024_48x48_mixin); }
    public A_IC_024_48x48_mixin = this.createMixin("-580px -508px", "32px", "32px");

    public get A_IC_024_72x72() { return this.add("A-IC-024_72x72", this.A_IC_024_72x72_mixin); }
    public A_IC_024_72x72_mixin = this.createMixin("-192px -304px", "48px", "48px");

    public get A_IC_025_30x30() { return this.add("A-IC-025_30x30", this.A_IC_025_30x30_mixin); }
    public A_IC_025_30x30_mixin = this.createMixin("-506px -544px", "20px", "20px");

    public get A_IC_025_48x48() { return this.add("A-IC-025_48x48", this.A_IC_025_48x48_mixin); }
    public A_IC_025_48x48_mixin = this.createMixin("-544px -360px", "32px", "32px");

    public get A_IC_027_1_24x24() { return this.add("A-IC-027-1_24x24", this.A_IC_027_1_24x24_mixin); }
    public A_IC_027_1_24x24_mixin = this.createMixin("-432px -384px", "16px", "16px");

    public get A_IC_027_1_30x30() { return this.add("A-IC-027-1_30x30", this.A_IC_027_1_30x30_mixin); }
    public A_IC_027_1_30x30_mixin = this.createMixin("-526px -544px", "20px", "20px");

    public get A_IC_027_1_36x36() { return this.add("A-IC-027-1_36x36", this.A_IC_027_1_36x36_mixin); }
    public A_IC_027_1_36x36_mixin = this.createMixin("-683px -144px", "24px", "24px");

    public get A_IC_027_2_24x24() { return this.add("A-IC-027-2_24x24", this.A_IC_027_2_24x24_mixin); }
    public A_IC_027_2_24x24_mixin = this.createMixin("-368px -192px", "16px", "16px");

    public get A_IC_027_2_30x30() { return this.add("A-IC-027-2_30x30", this.A_IC_027_2_30x30_mixin); }
    public A_IC_027_2_30x30_mixin = this.createMixin("-546px -544px", "20px", "20px");

    public get A_IC_027_2_48x48() { return this.add("A-IC-027-2_48x48", this.A_IC_027_2_48x48_mixin); }
    public A_IC_027_2_48x48_mixin = this.createMixin("-544px -392px", "32px", "32px");

    public get A_IC_027_2_72x72() { return this.add("A-IC-027-2_72x72", this.A_IC_027_2_72x72_mixin); }
    public A_IC_027_2_72x72_mixin = this.createMixin("-240px -304px", "48px", "48px");

    public get A_IC_027_3_36x36() { return this.add("A-IC-027-3_36x36", this.A_IC_027_3_36x36_mixin); }
    public A_IC_027_3_36x36_mixin = this.createMixin("-683px -168px", "24px", "24px");

    public get A_IC_027_4_24x24() { return this.add("A-IC-027-4_24x24", this.A_IC_027_4_24x24_mixin); }
    public A_IC_027_4_24x24_mixin = this.createMixin("-384px -192px", "16px", "16px");

    public get A_IC_027_4_48x48() { return this.add("A-IC-027-4_48x48", this.A_IC_027_4_48x48_mixin); }
    public A_IC_027_4_48x48_mixin = this.createMixin("-544px -424px", "32px", "32px");

    public get A_IC_027_5_24x24() { return this.add("A-IC-027-5_24x24", this.A_IC_027_5_24x24_mixin); }
    public A_IC_027_5_24x24_mixin = this.createMixin("-368px -240px", "16px", "16px");

    public get A_IC_027_5_30x30() { return this.add("A-IC-027-5_30x30", this.A_IC_027_5_30x30_mixin); }
    public A_IC_027_5_30x30_mixin = this.createMixin("-24px -688px", "20px", "20px");

    public get A_IC_027_5_36x36() { return this.add("A-IC-027-5_36x36", this.A_IC_027_5_36x36_mixin); }
    public A_IC_027_5_36x36_mixin = this.createMixin("-683px -192px", "24px", "24px");

    public get A_IC_027_6_24x24() { return this.add("A-IC-027-6_24x24", this.A_IC_027_6_24x24_mixin); }
    public A_IC_027_6_24x24_mixin = this.createMixin("-384px -240px", "16px", "16px");

    public get A_IC_028_1_24x24() { return this.add("A-IC-028-1_24x24", this.A_IC_028_1_24x24_mixin); }
    public A_IC_028_1_24x24_mixin = this.createMixin("-368px -288px", "16px", "16px");

    public get A_IC_028_1_30x30() { return this.add("A-IC-028-1_30x30", this.A_IC_028_1_30x30_mixin); }
    public A_IC_028_1_30x30_mixin = this.createMixin("-44px -688px", "20px", "20px");

    public get A_IC_028_1_36x36() { return this.add("A-IC-028-1_36x36", this.A_IC_028_1_36x36_mixin); }
    public A_IC_028_1_36x36_mixin = this.createMixin("-683px -216px", "24px", "24px");

    public get A_IC_028_2_24x24() { return this.add("A-IC-028-2_24x24", this.A_IC_028_2_24x24_mixin); }
    public A_IC_028_2_24x24_mixin = this.createMixin("-384px -288px", "16px", "16px");

    public get A_IC_028_2_30x30() { return this.add("A-IC-028-2_30x30", this.A_IC_028_2_30x30_mixin); }
    public A_IC_028_2_30x30_mixin = this.createMixin("-64px -688px", "20px", "20px");

    public get A_IC_028_2_36x36() { return this.add("A-IC-028-2_36x36", this.A_IC_028_2_36x36_mixin); }
    public A_IC_028_2_36x36_mixin = this.createMixin("-683px -240px", "24px", "24px");

    public get A_IC_028_2_72x72() { return this.add("A-IC-028-2_72x72", this.A_IC_028_2_72x72_mixin); }
    public A_IC_028_2_72x72_mixin = this.createMixin("-288px -304px", "48px", "48px");

    public get A_IC_029_1_30x30() { return this.add("A-IC-029-1_30x30", this.A_IC_029_1_30x30_mixin); }
    public A_IC_029_1_30x30_mixin = this.createMixin("-84px -688px", "20px", "20px");

    public get A_IC_029_1_36x36() { return this.add("A-IC-029-1_36x36", this.A_IC_029_1_36x36_mixin); }
    public A_IC_029_1_36x36_mixin = this.createMixin("-683px -264px", "24px", "24px");

    public get A_IC_029_1_48x48() { return this.add("A-IC-029-1_48x48", this.A_IC_029_1_48x48_mixin); }
    public A_IC_029_1_48x48_mixin = this.createMixin("-544px -456px", "32px", "32px");

    public get A_IC_029_2_30x30() { return this.add("A-IC-029-2_30x30", this.A_IC_029_2_30x30_mixin); }
    public A_IC_029_2_30x30_mixin = this.createMixin("-104px -688px", "20px", "20px");

    public get A_IC_029_2_36x36() { return this.add("A-IC-029-2_36x36", this.A_IC_029_2_36x36_mixin); }
    public A_IC_029_2_36x36_mixin = this.createMixin("-683px -288px", "24px", "24px");

    public get A_IC_030_30x30() { return this.add("A-IC-030_30x30", this.A_IC_030_30x30_mixin); }
    public A_IC_030_30x30_mixin = this.createMixin("-124px -688px", "20px", "20px");

    public get A_IC_030_36x36() { return this.add("A-IC-030_36x36", this.A_IC_030_36x36_mixin); }
    public A_IC_030_36x36_mixin = this.createMixin("-683px -312px", "24px", "24px");

    public get A_IC_030_48x48() { return this.add("A-IC-030_48x48", this.A_IC_030_48x48_mixin); }
    public A_IC_030_48x48_mixin = this.createMixin("-544px -488px", "32px", "32px");

    public get A_IC_030_72x72() { return this.add("A-IC-030_72x72", this.A_IC_030_72x72_mixin); }
    public A_IC_030_72x72_mixin = this.createMixin("-336px -304px", "48px", "48px");

    public get A_IC_031_30x30() { return this.add("A-IC-031_30x30", this.A_IC_031_30x30_mixin); }
    public A_IC_031_30x30_mixin = this.createMixin("-144px -688px", "20px", "20px");

    public get A_IC_032_2_48x48() { return this.add("A-IC-032_2_48x48", this.A_IC_032_2_48x48_mixin); }
    public A_IC_032_2_48x48_mixin = this.createMixin("-368px -160px", "32px", "32px");

    public get A_IC_032_30x30() { return this.add("A-IC-032_30x30", this.A_IC_032_30x30_mixin); }
    public A_IC_032_30x30_mixin = this.createMixin("-164px -688px", "20px", "20px");

    public get A_IC_033_30x30() { return this.add("A-IC-033_30x30", this.A_IC_033_30x30_mixin); }
    public A_IC_033_30x30_mixin = this.createMixin("-184px -688px", "20px", "20px");

    public get A_IC_033_36x36() { return this.add("A-IC-033_36x36", this.A_IC_033_36x36_mixin); }
    public A_IC_033_36x36_mixin = this.createMixin("-683px -336px", "24px", "24px");

    public get A_IC_034_1_30x30() { return this.add("A-IC-034-1_30x30", this.A_IC_034_1_30x30_mixin); }
    public A_IC_034_1_30x30_mixin = this.createMixin("-204px -688px", "20px", "20px");

    public get A_IC_034_1_36x36() { return this.add("A-IC-034-1_36x36", this.A_IC_034_1_36x36_mixin); }
    public A_IC_034_1_36x36_mixin = this.createMixin("-683px -360px", "24px", "24px");

    public get A_IC_034_3_36x36() { return this.add("A-IC-034-3_36x36", this.A_IC_034_3_36x36_mixin); }
    public A_IC_034_3_36x36_mixin = this.createMixin("-683px -384px", "24px", "24px");

    public get A_IC_034_4_48x48() { return this.add("A-IC-034-4_48x48", this.A_IC_034_4_48x48_mixin); }
    public A_IC_034_4_48x48_mixin = this.createMixin("-368px -208px", "32px", "32px");

    public get A_IC_034_4_72x72() { return this.add("A-IC-034-4_72x72", this.A_IC_034_4_72x72_mixin); }
    public A_IC_034_4_72x72_mixin = this.createMixin("0px -352px", "48px", "48px");

    public get A_IC_034_30x30() { return this.add("A-IC-034_30x30", this.A_IC_034_30x30_mixin); }
    public A_IC_034_30x30_mixin = this.createMixin("-224px -688px", "20px", "20px");

    public get A_IC_034_36x36() { return this.add("A-IC-034_36x36", this.A_IC_034_36x36_mixin); }
    public A_IC_034_36x36_mixin = this.createMixin("-683px -408px", "24px", "24px");

    public get A_IC_034_48x48() { return this.add("A-IC-034_48x48", this.A_IC_034_48x48_mixin); }
    public A_IC_034_48x48_mixin = this.createMixin("-368px -256px", "32px", "32px");

    public get A_IC_036_30x30() { return this.add("A-IC-036_30x30", this.A_IC_036_30x30_mixin); }
    public A_IC_036_30x30_mixin = this.createMixin("-244px -688px", "20px", "20px");

    public get A_IC_037_30x30() { return this.add("A-IC-037_30x30", this.A_IC_037_30x30_mixin); }
    public A_IC_037_30x30_mixin = this.createMixin("-264px -688px", "20px", "20px");

    public get A_IC_037_36x36() { return this.add("A-IC-037_36x36", this.A_IC_037_36x36_mixin); }
    public A_IC_037_36x36_mixin = this.createMixin("-683px -432px", "24px", "24px");

    public get A_IC_038_1_1_48x48() { return this.add("A-IC-038-1-1_48x48", this.A_IC_038_1_1_48x48_mixin); }
    public A_IC_038_1_1_48x48_mixin = this.createMixin("0px -568px", "32px", "32px");

    public get A_IC_038_1_2_36x36() { return this.add("A-IC-038-1-2_36x36", this.A_IC_038_1_2_36x36_mixin); }
    public A_IC_038_1_2_36x36_mixin = this.createMixin("-683px -456px", "24px", "24px");

    public get A_IC_038_1_2_48x48() { return this.add("A-IC-038-1-2_48x48", this.A_IC_038_1_2_48x48_mixin); }
    public A_IC_038_1_2_48x48_mixin = this.createMixin("-32px -568px", "32px", "32px");

    public get A_IC_038_1_3_48x48() { return this.add("A-IC-038-1-3_48x48", this.A_IC_038_1_3_48x48_mixin); }
    public A_IC_038_1_3_48x48_mixin = this.createMixin("-64px -568px", "32px", "32px");

    public get A_IC_039_36x36() { return this.add("A-IC-039_36x36", this.A_IC_039_36x36_mixin); }
    public A_IC_039_36x36_mixin = this.createMixin("-683px -480px", "24px", "24px");

    public get A_IC_039_48x48() { return this.add("A-IC-039_48x48", this.A_IC_039_48x48_mixin); }
    public A_IC_039_48x48_mixin = this.createMixin("-96px -568px", "32px", "32px");

    public get A_IC_040_36x36() { return this.add("A-IC-040_36x36", this.A_IC_040_36x36_mixin); }
    public A_IC_040_36x36_mixin = this.createMixin("-683px -504px", "24px", "24px");

    public get A_IC_040_48x48() { return this.add("A-IC-040_48x48", this.A_IC_040_48x48_mixin); }
    public A_IC_040_48x48_mixin = this.createMixin("-128px -568px", "32px", "32px");

    public get A_IC_041_48x48() { return this.add("A-IC-041_48x48", this.A_IC_041_48x48_mixin); }
    public A_IC_041_48x48_mixin = this.createMixin("-160px -568px", "32px", "32px");

    public get A_IC_042_48x48() { return this.add("A-IC-042_48x48", this.A_IC_042_48x48_mixin); }
    public A_IC_042_48x48_mixin = this.createMixin("-192px -568px", "32px", "32px");

    public get A_IC_043_2_72x72() { return this.add("A-IC-043-2_72x72", this.A_IC_043_2_72x72_mixin); }
    public A_IC_043_2_72x72_mixin = this.createMixin("-48px -352px", "48px", "48px");

    public get A_IC_044_1_24x24() { return this.add("A-IC-044-1_24x24", this.A_IC_044_1_24x24_mixin); }
    public A_IC_044_1_24x24_mixin = this.createMixin("-208px -112px", "16px", "16px");

    public get A_IC_044_1_30x30() { return this.add("A-IC-044-1_30x30", this.A_IC_044_1_30x30_mixin); }
    public A_IC_044_1_30x30_mixin = this.createMixin("-284px -688px", "20px", "20px");

    public get A_IC_044_2_24x24() { return this.add("A-IC-044-2_24x24", this.A_IC_044_2_24x24_mixin); }
    public A_IC_044_2_24x24_mixin = this.createMixin("-208px -128px", "16px", "16px");

    public get A_IC_044_2_30x30() { return this.add("A-IC-044-2_30x30", this.A_IC_044_2_30x30_mixin); }
    public A_IC_044_2_30x30_mixin = this.createMixin("-304px -688px", "20px", "20px");

    public get A_IC_044_3_24x24() { return this.add("A-IC-044-3_24x24", this.A_IC_044_3_24x24_mixin); }
    public A_IC_044_3_24x24_mixin = this.createMixin("-208px -144px", "16px", "16px");

    public get A_IC_044_3_30x30() { return this.add("A-IC-044-3_30x30", this.A_IC_044_3_30x30_mixin); }
    public A_IC_044_3_30x30_mixin = this.createMixin("-324px -688px", "20px", "20px");

    public get A_IC_045_1_1_30x30() { return this.add("A-IC-045-1-1_30x30", this.A_IC_045_1_1_30x30_mixin); }
    public A_IC_045_1_1_30x30_mixin = this.createMixin("-344px -688px", "20px", "20px");

    public get A_IC_045_1_2_30x30() { return this.add("A-IC-045-1-2_30x30", this.A_IC_045_1_2_30x30_mixin); }
    public A_IC_045_1_2_30x30_mixin = this.createMixin("-364px -688px", "20px", "20px");

    public get A_IC_045_2_1_48x48() { return this.add("A-IC-045-2-1_48x48", this.A_IC_045_2_1_48x48_mixin); }
    public A_IC_045_2_1_48x48_mixin = this.createMixin("-224px -568px", "32px", "32px");

    public get A_IC_045_2_2_48x48() { return this.add("A-IC-045-2-2_48x48", this.A_IC_045_2_2_48x48_mixin); }
    public A_IC_045_2_2_48x48_mixin = this.createMixin("-256px -568px", "32px", "32px");

    public get A_IC_046_1_24x24() { return this.add("A-IC-046-1_24x24", this.A_IC_046_1_24x24_mixin); }
    public A_IC_046_1_24x24_mixin = this.createMixin("-208px -160px", "16px", "16px");

    public get A_IC_046_1_30x30() { return this.add("A-IC-046-1_30x30", this.A_IC_046_1_30x30_mixin); }
    public A_IC_046_1_30x30_mixin = this.createMixin("-384px -688px", "20px", "20px");

    public get A_IC_046_1_36x36() { return this.add("A-IC-046-1_36x36", this.A_IC_046_1_36x36_mixin); }
    public A_IC_046_1_36x36_mixin = this.createMixin("-683px -528px", "24px", "24px");

    public get A_IC_046_1_48x48() { return this.add("A-IC-046-1_48x48", this.A_IC_046_1_48x48_mixin); }
    public A_IC_046_1_48x48_mixin = this.createMixin("-288px -568px", "32px", "32px");

    public get A_IC_046_1_54x54() { return this.add("A-IC-046-1_54x54", this.A_IC_046_1_54x54_mixin); }
    public A_IC_046_1_54x54_mixin = this.createMixin("-544px -144px", "36px", "36px");

    public get A_IC_046_1_72x72() { return this.add("A-IC-046-1_72x72", this.A_IC_046_1_72x72_mixin); }
    public A_IC_046_1_72x72_mixin = this.createMixin("-96px -352px", "48px", "48px");

    public get A_IC_046_2_30x30() { return this.add("A-IC-046-2_30x30", this.A_IC_046_2_30x30_mixin); }
    public A_IC_046_2_30x30_mixin = this.createMixin("-404px -688px", "20px", "20px");

    public get A_IC_046_3_36x36() { return this.add("A-IC-046-3_36x36", this.A_IC_046_3_36x36_mixin); }
    public A_IC_046_3_36x36_mixin = this.createMixin("-683px -552px", "24px", "24px");

    public get A_IC_046_3_54x54() { return this.add("A-IC-046-3_54x54", this.A_IC_046_3_54x54_mixin); }
    public A_IC_046_3_54x54_mixin = this.createMixin("-544px -180px", "36px", "36px");

    public get A_IC_046_3_72x72() { return this.add("A-IC-046-3_72x72", this.A_IC_046_3_72x72_mixin); }
    public A_IC_046_3_72x72_mixin = this.createMixin("-144px -352px", "48px", "48px");

    public get A_IC_046_4_72x72() { return this.add("A-IC-046-4_72x72", this.A_IC_046_4_72x72_mixin); }
    public A_IC_046_4_72x72_mixin = this.createMixin("-192px -352px", "48px", "48px");

    public get A_IC_046_5_36x36() { return this.add("A-IC-046-5_36x36", this.A_IC_046_5_36x36_mixin); }
    public A_IC_046_5_36x36_mixin = this.createMixin("-683px -576px", "24px", "24px");

    public get A_IC_046_5_48x48() { return this.add("A-IC-046-5_48x48", this.A_IC_046_5_48x48_mixin); }
    public A_IC_046_5_48x48_mixin = this.createMixin("-320px -568px", "32px", "32px");

    public get A_IC_046_5_54x54() { return this.add("A-IC-046-5_54x54", this.A_IC_046_5_54x54_mixin); }
    public A_IC_046_5_54x54_mixin = this.createMixin("-544px -216px", "36px", "36px");

    public get A_IC_046_5_72x72() { return this.add("A-IC-046-5_72x72", this.A_IC_046_5_72x72_mixin); }
    public A_IC_046_5_72x72_mixin = this.createMixin("-240px -352px", "48px", "48px");

    public get A_IC_046_7_54x54() { return this.add("A-IC-046-7_54x54", this.A_IC_046_7_54x54_mixin); }
    public A_IC_046_7_54x54_mixin = this.createMixin("-544px -252px", "36px", "36px");

    public get A_IC_046_8_48x48() { return this.add("A-IC-046-8_48x48", this.A_IC_046_8_48x48_mixin); }
    public A_IC_046_8_48x48_mixin = this.createMixin("-352px -568px", "32px", "32px");

    public get A_IC_046_8_72x72() { return this.add("A-IC-046-8_72x72", this.A_IC_046_8_72x72_mixin); }
    public A_IC_046_8_72x72_mixin = this.createMixin("-288px -352px", "48px", "48px");

    public get A_IC_046_9_72x72() { return this.add("A-IC-046-9_72x72", this.A_IC_046_9_72x72_mixin); }
    public A_IC_046_9_72x72_mixin = this.createMixin("-336px -352px", "48px", "48px");

    public get A_IC_047_1_24x24() { return this.add("A-IC-047-1_24x24", this.A_IC_047_1_24x24_mixin); }
    public A_IC_047_1_24x24_mixin = this.createMixin("-208px -176px", "16px", "16px");

    public get A_IC_047_2_24x24() { return this.add("A-IC-047-2_24x24", this.A_IC_047_2_24x24_mixin); }
    public A_IC_047_2_24x24_mixin = this.createMixin("-208px -192px", "16px", "16px");

    public get A_IC_047_3_24x24() { return this.add("A-IC-047-3_24x24", this.A_IC_047_3_24x24_mixin); }
    public A_IC_047_3_24x24_mixin = this.createMixin("-112px -208px", "16px", "16px");

    public get A_IC_048_1_20x20() { return this.add("A-IC-048-1_20x20", this.A_IC_048_1_20x20_mixin); }
    public A_IC_048_1_20x20_mixin = this.createMixin("-529px -480px", "13px", "13px");

    public get A_IC_048_1_24x24() { return this.add("A-IC-048-1_24x24", this.A_IC_048_1_24x24_mixin); }
    public A_IC_048_1_24x24_mixin = this.createMixin("-128px -208px", "16px", "16px");

    public get A_IC_048_2_20x20() { return this.add("A-IC-048-2_20x20", this.A_IC_048_2_20x20_mixin); }
    public A_IC_048_2_20x20_mixin = this.createMixin("-481px -432px", "13px", "13px");

    public get A_IC_048_2_24x24() { return this.add("A-IC-048-2_24x24", this.A_IC_048_2_24x24_mixin); }
    public A_IC_048_2_24x24_mixin = this.createMixin("-144px -208px", "16px", "16px");

    public get A_IC_048_3_20x20() { return this.add("A-IC-048-3_20x20", this.A_IC_048_3_20x20_mixin); }
    public A_IC_048_3_20x20_mixin = this.createMixin("-384px -368px", "13px", "13px");

    public get A_IC_048_3_24x24() { return this.add("A-IC-048-3_24x24", this.A_IC_048_3_24x24_mixin); }
    public A_IC_048_3_24x24_mixin = this.createMixin("-160px -208px", "16px", "16px");

    public get A_IC_049_1_50x24() { return this.add("A-IC-049-1_50x24", this.A_IC_049_1_50x24_mixin); }
    public A_IC_049_1_50x24_mixin = this.createMixin("-496px -480px", "33px", "16px");

    public get A_IC_049_1_64x30() { return this.add("A-IC-049-1_64x30", this.A_IC_049_1_64x30_mixin); }
    public A_IC_049_1_64x30_mixin = this.createMixin("-103px -544px", "43px", "20px");

    public get A_IC_049_1_77x36() { return this.add("A-IC-049-1_77x36", this.A_IC_049_1_77x36_mixin); }
    public A_IC_049_1_77x36_mixin = this.createMixin("0px -544px", "51px", "24px");

    public get A_IC_049_2_50x24() { return this.add("A-IC-049-2_50x24", this.A_IC_049_2_50x24_mixin); }
    public A_IC_049_2_50x24_mixin = this.createMixin("-448px -432px", "33px", "16px");

    public get A_IC_049_2_64x30() { return this.add("A-IC-049-2_64x30", this.A_IC_049_2_64x30_mixin); }
    public A_IC_049_2_64x30_mixin = this.createMixin("-146px -544px", "43px", "20px");

    public get A_IC_050_1_30x30() { return this.add("A-IC-050-1_30x30", this.A_IC_050_1_30x30_mixin); }
    public A_IC_050_1_30x30_mixin = this.createMixin("-424px -688px", "20px", "20px");

    public get A_IC_050_1_36x36() { return this.add("A-IC-050-1_36x36", this.A_IC_050_1_36x36_mixin); }
    public A_IC_050_1_36x36_mixin = this.createMixin("-683px -600px", "24px", "24px");

    public get A_IC_051_1_24x24() { return this.add("A-IC-051-1_24x24", this.A_IC_051_1_24x24_mixin); }
    public A_IC_051_1_24x24_mixin = this.createMixin("-176px -208px", "16px", "16px");

    public get A_IC_051_1_30x30() { return this.add("A-IC-051-1_30x30", this.A_IC_051_1_30x30_mixin); }
    public A_IC_051_1_30x30_mixin = this.createMixin("-444px -688px", "20px", "20px");

    public get A_IC_051_2_30x30() { return this.add("A-IC-051-2_30x30", this.A_IC_051_2_30x30_mixin); }
    public A_IC_051_2_30x30_mixin = this.createMixin("-464px -688px", "20px", "20px");

    public get A_IC_054_2_24x24() { return this.add("A-IC-054-2_24x24", this.A_IC_054_2_24x24_mixin); }
    public A_IC_054_2_24x24_mixin = this.createMixin("-192px -208px", "16px", "16px");

    public get A_IC_054_30x30() { return this.add("A-IC-054_30x30", this.A_IC_054_30x30_mixin); }
    public A_IC_054_30x30_mixin = this.createMixin("-484px -688px", "20px", "20px");

    public get A_IC_054_36x36() { return this.add("A-IC-054_36x36", this.A_IC_054_36x36_mixin); }
    public A_IC_054_36x36_mixin = this.createMixin("-683px -624px", "24px", "24px");

    public get A_IC_055_1_36x36() { return this.add("A-IC-055-1_36x36", this.A_IC_055_1_36x36_mixin); }
    public A_IC_055_1_36x36_mixin = this.createMixin("0px -664px", "24px", "24px");

    public get A_IC_055_2_24x24() { return this.add("A-IC-055-2_24x24", this.A_IC_055_2_24x24_mixin); }
    public A_IC_055_2_24x24_mixin = this.createMixin("-208px -208px", "16px", "16px");

    public get A_IC_055_36x36() { return this.add("A-IC-055_36x36", this.A_IC_055_36x36_mixin); }
    public A_IC_055_36x36_mixin = this.createMixin("-24px -664px", "24px", "24px");

    public get A_IC_057_3_48x48() { return this.add("A-IC-057-3_48x48", this.A_IC_057_3_48x48_mixin); }
    public A_IC_057_3_48x48_mixin = this.createMixin("-384px -568px", "32px", "32px");

    public get A_IC_057_3_72x72() { return this.add("A-IC-057-3_72x72", this.A_IC_057_3_72x72_mixin); }
    public A_IC_057_3_72x72_mixin = this.createMixin("-400px 0px", "48px", "48px");

    public get A_IC_058_1_36x36() { return this.add("A-IC-058-1_36x36", this.A_IC_058_1_36x36_mixin); }
    public A_IC_058_1_36x36_mixin = this.createMixin("-48px -664px", "24px", "24px");

    public get A_IC_058_1_48x48() { return this.add("A-IC-058-1_48x48", this.A_IC_058_1_48x48_mixin); }
    public A_IC_058_1_48x48_mixin = this.createMixin("-416px -568px", "32px", "32px");

    public get A_IC_058_2_30x30() { return this.add("A-IC-058-2_30x30", this.A_IC_058_2_30x30_mixin); }
    public A_IC_058_2_30x30_mixin = this.createMixin("-504px -688px", "20px", "20px");

    public get A_IC_058_2_36x36() { return this.add("A-IC-058-2_36x36", this.A_IC_058_2_36x36_mixin); }
    public A_IC_058_2_36x36_mixin = this.createMixin("-72px -664px", "24px", "24px");

    public get A_IC_058_2_42x42() { return this.add("A-IC-058-2_42x42", this.A_IC_058_2_42x42_mixin); }
    public A_IC_058_2_42x42_mixin = this.createMixin("-292px -192px", "28px", "28px");

    public get A_IC_058_2_48x48() { return this.add("A-IC-058-2_48x48", this.A_IC_058_2_48x48_mixin); }
    public A_IC_058_2_48x48_mixin = this.createMixin("-448px -568px", "32px", "32px");

    public get A_IC_058_2_72x72() { return this.add("A-IC-058-2_72x72", this.A_IC_058_2_72x72_mixin); }
    public A_IC_058_2_72x72_mixin = this.createMixin("-400px -48px", "48px", "48px");

    public get A_IC_059_1_36x36() { return this.add("A-IC-059-1_36x36", this.A_IC_059_1_36x36_mixin); }
    public A_IC_059_1_36x36_mixin = this.createMixin("-96px -664px", "24px", "24px");

    public get A_IC_059_1_48x48() { return this.add("A-IC-059-1_48x48", this.A_IC_059_1_48x48_mixin); }
    public A_IC_059_1_48x48_mixin = this.createMixin("-480px -568px", "32px", "32px");

    public get A_IC_059_2_36x36() { return this.add("A-IC-059-2_36x36", this.A_IC_059_2_36x36_mixin); }
    public A_IC_059_2_36x36_mixin = this.createMixin("-120px -664px", "24px", "24px");

    public get A_IC_059_2_37x30() { return this.add("A-IC-059-2_37x30", this.A_IC_059_2_37x30_mixin); }
    public A_IC_059_2_37x30_mixin = this.createMixin("-189px -544px", "25px", "20px");

    public get A_IC_059_2_42x42() { return this.add("A-IC-059-2_42x42", this.A_IC_059_2_42x42_mixin); }
    public A_IC_059_2_42x42_mixin = this.createMixin("-320px -632px", "28px", "28px");

    public get A_IC_059_2_48x48() { return this.add("A-IC-059-2_48x48", this.A_IC_059_2_48x48_mixin); }
    public A_IC_059_2_48x48_mixin = this.createMixin("-512px -568px", "32px", "32px");

    public get A_IC_059_2_72x72() { return this.add("A-IC-059-2_72x72", this.A_IC_059_2_72x72_mixin); }
    public A_IC_059_2_72x72_mixin = this.createMixin("-400px -96px", "48px", "48px");

    public get A_IC_060_1_36x36() { return this.add("A-IC-060-1_36x36", this.A_IC_060_1_36x36_mixin); }
    public A_IC_060_1_36x36_mixin = this.createMixin("-144px -664px", "24px", "24px");

    public get A_IC_060_1_48x48() { return this.add("A-IC-060-1_48x48", this.A_IC_060_1_48x48_mixin); }
    public A_IC_060_1_48x48_mixin = this.createMixin("-544px -568px", "32px", "32px");

    public get A_IC_060_2_36x36() { return this.add("A-IC-060-2_36x36", this.A_IC_060_2_36x36_mixin); }
    public A_IC_060_2_36x36_mixin = this.createMixin("-168px -664px", "24px", "24px");

    public get A_IC_060_2_72x72() { return this.add("A-IC-060-2_72x72", this.A_IC_060_2_72x72_mixin); }
    public A_IC_060_2_72x72_mixin = this.createMixin("-400px -144px", "48px", "48px");

    public get A_IC_061_1_36x36() { return this.add("A-IC-061-1_36x36", this.A_IC_061_1_36x36_mixin); }
    public A_IC_061_1_36x36_mixin = this.createMixin("-192px -664px", "24px", "24px");

    public get A_IC_061_1_48x48() { return this.add("A-IC-061-1_48x48", this.A_IC_061_1_48x48_mixin); }
    public A_IC_061_1_48x48_mixin = this.createMixin("-576px -568px", "32px", "32px");

    public get A_IC_061_2_36x36() { return this.add("A-IC-061-2_36x36", this.A_IC_061_2_36x36_mixin); }
    public A_IC_061_2_36x36_mixin = this.createMixin("-216px -664px", "24px", "24px");

    public get A_IC_061_2_48x48() { return this.add("A-IC-061-2_48x48", this.A_IC_061_2_48x48_mixin); }
    public A_IC_061_2_48x48_mixin = this.createMixin("-619px 0px", "32px", "32px");

    public get A_IC_062_1_36x36() { return this.add("A-IC-062-1_36x36", this.A_IC_062_1_36x36_mixin); }
    public A_IC_062_1_36x36_mixin = this.createMixin("-240px -664px", "24px", "24px");

    public get A_IC_062_1_48x48() { return this.add("A-IC-062-1_48x48", this.A_IC_062_1_48x48_mixin); }
    public A_IC_062_1_48x48_mixin = this.createMixin("-619px -32px", "32px", "32px");

    public get A_IC_062_2_36x36() { return this.add("A-IC-062-2_36x36", this.A_IC_062_2_36x36_mixin); }
    public A_IC_062_2_36x36_mixin = this.createMixin("-264px -664px", "24px", "24px");

    public get A_IC_062_2_48x48() { return this.add("A-IC-062-2_48x48", this.A_IC_062_2_48x48_mixin); }
    public A_IC_062_2_48x48_mixin = this.createMixin("-619px -64px", "32px", "32px");

    public get A_IC_062_2_52x42() { return this.add("A-IC-062-2_52x42", this.A_IC_062_2_52x42_mixin); }
    public A_IC_062_2_52x42_mixin = this.createMixin("-580px -540px", "35px", "28px");

    public get A_IC_062_3_36x30() { return this.add("A-IC-062-3_36x30", this.A_IC_062_3_36x30_mixin); }
    public A_IC_062_3_36x30_mixin = this.createMixin("-214px -544px", "24px", "20px");

    public get A_IC_062_3_36x36() { return this.add("A-IC-062-3_36x36", this.A_IC_062_3_36x36_mixin); }
    public A_IC_062_3_36x36_mixin = this.createMixin("-288px -664px", "24px", "24px");

    public get A_IC_063_1_36x30() { return this.add("A-IC-063-1_36x30", this.A_IC_063_1_36x30_mixin); }
    public A_IC_063_1_36x30_mixin = this.createMixin("-238px -544px", "24px", "20px");

    public get A_IC_063_1_36x36() { return this.add("A-IC-063-1_36x36", this.A_IC_063_1_36x36_mixin); }
    public A_IC_063_1_36x36_mixin = this.createMixin("-312px -664px", "24px", "24px");

    public get A_IC_063_1_42x42() { return this.add("A-IC-063-1_42x42", this.A_IC_063_1_42x42_mixin); }
    public A_IC_063_1_42x42_mixin = this.createMixin("-348px -632px", "28px", "28px");

    public get A_IC_063_1_48x48() { return this.add("A-IC-063-1_48x48", this.A_IC_063_1_48x48_mixin); }
    public A_IC_063_1_48x48_mixin = this.createMixin("-619px -96px", "32px", "32px");

    public get A_IC_063_2_36x30() { return this.add("A-IC-063-2_36x30", this.A_IC_063_2_36x30_mixin); }
    public A_IC_063_2_36x30_mixin = this.createMixin("-262px -544px", "24px", "20px");

    public get A_IC_063_2_36x36() { return this.add("A-IC-063-2_36x36", this.A_IC_063_2_36x36_mixin); }
    public A_IC_063_2_36x36_mixin = this.createMixin("-336px -664px", "24px", "24px");

    public get A_IC_063_2_42x42() { return this.add("A-IC-063-2_42x42", this.A_IC_063_2_42x42_mixin); }
    public A_IC_063_2_42x42_mixin = this.createMixin("-376px -632px", "28px", "28px");

    public get A_IC_063_2_48x48() { return this.add("A-IC-063-2_48x48", this.A_IC_063_2_48x48_mixin); }
    public A_IC_063_2_48x48_mixin = this.createMixin("-619px -128px", "32px", "32px");

    public get A_IC_065_1_36x36() { return this.add("A-IC-065-1_36x36", this.A_IC_065_1_36x36_mixin); }
    public A_IC_065_1_36x36_mixin = this.createMixin("-360px -664px", "24px", "24px");

    public get A_IC_065_1_48x48() { return this.add("A-IC-065-1_48x48", this.A_IC_065_1_48x48_mixin); }
    public A_IC_065_1_48x48_mixin = this.createMixin("-619px -160px", "32px", "32px");

    public get A_IC_065_2_36x36() { return this.add("A-IC-065-2_36x36", this.A_IC_065_2_36x36_mixin); }
    public A_IC_065_2_36x36_mixin = this.createMixin("-384px -664px", "24px", "24px");

    public get A_IC_065_2_48x48() { return this.add("A-IC-065-2_48x48", this.A_IC_065_2_48x48_mixin); }
    public A_IC_065_2_48x48_mixin = this.createMixin("-619px -192px", "32px", "32px");

    public get A_IC_066_2_36x36() { return this.add("A-IC-066-2_36x36", this.A_IC_066_2_36x36_mixin); }
    public A_IC_066_2_36x36_mixin = this.createMixin("-408px -664px", "24px", "24px");

    public get A_IC_066_2_48x48() { return this.add("A-IC-066-2_48x48", this.A_IC_066_2_48x48_mixin); }
    public A_IC_066_2_48x48_mixin = this.createMixin("-619px -224px", "32px", "32px");

    public get A_IC_067_1_36x36() { return this.add("A-IC-067-1_36x36", this.A_IC_067_1_36x36_mixin); }
    public A_IC_067_1_36x36_mixin = this.createMixin("-432px -664px", "24px", "24px");

    public get A_IC_067_1_48x48() { return this.add("A-IC-067-1_48x48", this.A_IC_067_1_48x48_mixin); }
    public A_IC_067_1_48x48_mixin = this.createMixin("-619px -256px", "32px", "32px");

    public get A_IC_067_2_36x36() { return this.add("A-IC-067-2_36x36", this.A_IC_067_2_36x36_mixin); }
    public A_IC_067_2_36x36_mixin = this.createMixin("-456px -664px", "24px", "24px");

    public get A_IC_067_2_48x48() { return this.add("A-IC-067-2_48x48", this.A_IC_067_2_48x48_mixin); }
    public A_IC_067_2_48x48_mixin = this.createMixin("-619px -288px", "32px", "32px");

    public get A_IC_069_36x36() { return this.add("A-IC-069_36x36", this.A_IC_069_36x36_mixin); }
    public A_IC_069_36x36_mixin = this.createMixin("-480px -664px", "24px", "24px");

    public get A_IC_069_48x48() { return this.add("A-IC-069_48x48", this.A_IC_069_48x48_mixin); }
    public A_IC_069_48x48_mixin = this.createMixin("-619px -320px", "32px", "32px");

    public get A_IC_072_120x120() { return this.add("A-IC-072_120x120", this.A_IC_072_120x120_mixin); }
    public A_IC_072_120x120_mixin = this.createMixin("-320px 0px", "80px", "80px");

    public get A_IC_072_168x168() { return this.add("A-IC-072_168x168", this.A_IC_072_168x168_mixin); }
    public A_IC_072_168x168_mixin = this.createMixin("-112px 0px", "112px", "112px");

    public get A_IC_072_30x30() { return this.add("A-IC-072_30x30", this.A_IC_072_30x30_mixin); }
    public A_IC_072_30x30_mixin = this.createMixin("-524px -688px", "20px", "20px");

    public get A_IC_072_36x36() { return this.add("A-IC-072_36x36", this.A_IC_072_36x36_mixin); }
    public A_IC_072_36x36_mixin = this.createMixin("-504px -664px", "24px", "24px");

    public get A_IC_072_48x48() { return this.add("A-IC-072_48x48", this.A_IC_072_48x48_mixin); }
    public A_IC_072_48x48_mixin = this.createMixin("-619px -352px", "32px", "32px");

    public get A_IC_073_2_36x36() { return this.add("A-IC-073-2_36x36", this.A_IC_073_2_36x36_mixin); }
    public A_IC_073_2_36x36_mixin = this.createMixin("-528px -664px", "24px", "24px");

    public get A_IC_073_24x24() { return this.add("A-IC-073_24x24", this.A_IC_073_24x24_mixin); }
    public A_IC_073_24x24_mixin = this.createMixin("-384px -304px", "16px", "16px");

    public get A_IC_073_36x36() { return this.add("A-IC-073_36x36", this.A_IC_073_36x36_mixin); }
    public A_IC_073_36x36_mixin = this.createMixin("-552px -664px", "24px", "24px");

    public get A_IC_076_36x36() { return this.add("A-IC-076_36x36", this.A_IC_076_36x36_mixin); }
    public A_IC_076_36x36_mixin = this.createMixin("-576px -664px", "24px", "24px");

    public get A_IC_076_48x48() { return this.add("A-IC-076_48x48", this.A_IC_076_48x48_mixin); }
    public A_IC_076_48x48_mixin = this.createMixin("-619px -384px", "32px", "32px");

    public get A_IC_077_30x30() { return this.add("A-IC-077_30x30", this.A_IC_077_30x30_mixin); }
    public A_IC_077_30x30_mixin = this.createMixin("-544px -688px", "20px", "20px");

    public get A_IC_077_36x36() { return this.add("A-IC-077_36x36", this.A_IC_077_36x36_mixin); }
    public A_IC_077_36x36_mixin = this.createMixin("-600px -664px", "24px", "24px");

    public get A_IC_077_48x48() { return this.add("A-IC-077_48x48", this.A_IC_077_48x48_mixin); }
    public A_IC_077_48x48_mixin = this.createMixin("-619px -416px", "32px", "32px");

    public get A_IC_078_72x72() { return this.add("A-IC-078_72x72", this.A_IC_078_72x72_mixin); }
    public A_IC_078_72x72_mixin = this.createMixin("-400px -192px", "48px", "48px");

    public get A_IC_079_1_36x36() { return this.add("A-IC-079-1_36x36", this.A_IC_079_1_36x36_mixin); }
    public A_IC_079_1_36x36_mixin = this.createMixin("-624px -664px", "24px", "24px");

    public get A_IC_079_1_48x48() { return this.add("A-IC-079_1_48x48", this.A_IC_079_1_48x48_mixin); }
    public A_IC_079_1_48x48_mixin = this.createMixin("-619px -448px", "32px", "32px");

    public get A_IC_079_24x24() { return this.add("A-IC-079_24x24", this.A_IC_079_24x24_mixin); }
    public A_IC_079_24x24_mixin = this.createMixin("-384px -320px", "16px", "16px");

    public get A_IC_079_36x36() { return this.add("A-IC-079_36x36", this.A_IC_079_36x36_mixin); }
    public A_IC_079_36x36_mixin = this.createMixin("-648px -664px", "24px", "24px");

    public get A_IC_079_48x48() { return this.add("A-IC-079_48x48", this.A_IC_079_48x48_mixin); }
    public A_IC_079_48x48_mixin = this.createMixin("-619px -480px", "32px", "32px");

    public get A_IC_079_72x72() { return this.add("A-IC-079_72x72", this.A_IC_079_72x72_mixin); }
    public A_IC_079_72x72_mixin = this.createMixin("-400px -240px", "48px", "48px");

    public get A_IC_080_1_30x30() { return this.add("A-IC-080-1_30x30", this.A_IC_080_1_30x30_mixin); }
    public A_IC_080_1_30x30_mixin = this.createMixin("-564px -688px", "20px", "20px");

    public get A_IC_080_1_48x48() { return this.add("A-IC-080-1_48x48", this.A_IC_080_1_48x48_mixin); }
    public A_IC_080_1_48x48_mixin = this.createMixin("-619px -512px", "32px", "32px");

    public get A_IC_080_48x48() { return this.add("A-IC-080_48x48", this.A_IC_080_48x48_mixin); }
    public A_IC_080_48x48_mixin = this.createMixin("-619px -544px", "32px", "32px");

    public get A_IC_082_72x72() { return this.add("A-IC-082_72x72", this.A_IC_082_72x72_mixin); }
    public A_IC_082_72x72_mixin = this.createMixin("-400px -288px", "48px", "48px");

    public get A_IC_083_48x48() { return this.add("A-IC-083_48x48", this.A_IC_083_48x48_mixin); }
    public A_IC_083_48x48_mixin = this.createMixin("0px -600px", "32px", "32px");

    public get A_IC_083_72x72() { return this.add("A-IC-083_72x72", this.A_IC_083_72x72_mixin); }
    public A_IC_083_72x72_mixin = this.createMixin("-400px -336px", "48px", "48px");

    public get A_IC_086_72x72() { return this.add("A-IC-086_72x72", this.A_IC_086_72x72_mixin); }
    public A_IC_086_72x72_mixin = this.createMixin("0px -400px", "48px", "48px");

    public get A_IC_087_72x72() { return this.add("A-IC-087_72x72", this.A_IC_087_72x72_mixin); }
    public A_IC_087_72x72_mixin = this.createMixin("-48px -400px", "48px", "48px");

    public get A_IC_088_120x120() { return this.add("A-IC-088_120x120", this.A_IC_088_120x120_mixin); }
    public A_IC_088_120x120_mixin = this.createMixin("-320px -80px", "80px", "80px");

    public get A_IC_088_168x168() { return this.add("A-IC-088_168x168", this.A_IC_088_168x168_mixin); }
    public A_IC_088_168x168_mixin = this.createMixin("0px -112px", "112px", "112px");

    public get A_IC_088_48x48() { return this.add("A-IC-088_48x48", this.A_IC_088_48x48_mixin); }
    public A_IC_088_48x48_mixin = this.createMixin("-32px -600px", "32px", "32px");

    public get A_IC_088_72x72() { return this.add("A-IC-088_72x72", this.A_IC_088_72x72_mixin); }
    public A_IC_088_72x72_mixin = this.createMixin("-96px -400px", "48px", "48px");

    public get A_IC_089_48x48() { return this.add("A-IC-089_48x48", this.A_IC_089_48x48_mixin); }
    public A_IC_089_48x48_mixin = this.createMixin("-64px -600px", "32px", "32px");

    public get A_IC_089_54x54() { return this.add("A-IC-089_54x54", this.A_IC_089_54x54_mixin); }
    public A_IC_089_54x54_mixin = this.createMixin("-544px -288px", "36px", "36px");

    public get A_IC_089_72x72() { return this.add("A-IC-089_72x72", this.A_IC_089_72x72_mixin); }
    public A_IC_089_72x72_mixin = this.createMixin("-144px -400px", "48px", "48px");

    public get A_IC_112_30x30() { return this.add("A-IC-112_30x30", this.A_IC_112_30x30_mixin); }
    public A_IC_112_30x30_mixin = this.createMixin("-584px -688px", "20px", "20px");

    public get A_IC_113_72x72() { return this.add("A-IC-113_72x72", this.A_IC_113_72x72_mixin); }
    public A_IC_113_72x72_mixin = this.createMixin("-192px -400px", "48px", "48px");

    public get A_IC_115_1_1_36x36() { return this.add("A-IC-115-1-1_36x36", this.A_IC_115_1_1_36x36_mixin); }
    public A_IC_115_1_1_36x36_mixin = this.createMixin("-672px -664px", "24px", "24px");

    public get A_IC_115_1_2_36x36() { return this.add("A-IC-115-1-2_36x36", this.A_IC_115_1_2_36x36_mixin); }
    public A_IC_115_1_2_36x36_mixin = this.createMixin("-707px 0px", "24px", "24px");

    public get A_IC_115_1_3_36x36() { return this.add("A-IC-115-1-3_36x36", this.A_IC_115_1_3_36x36_mixin); }
    public A_IC_115_1_3_36x36_mixin = this.createMixin("-707px -24px", "24px", "24px");

    public get A_IC_115_1_4_36x36() { return this.add("A-IC-115-1-4_36x36", this.A_IC_115_1_4_36x36_mixin); }
    public A_IC_115_1_4_36x36_mixin = this.createMixin("-707px -48px", "24px", "24px");

    public get A_IC_115_1_5_36x36() { return this.add("A-IC-115-1-5_36x36", this.A_IC_115_1_5_36x36_mixin); }
    public A_IC_115_1_5_36x36_mixin = this.createMixin("-707px -72px", "24px", "24px");

    public get A_IC_115_2_1_36x36() { return this.add("A-IC-115-2-1_36x36", this.A_IC_115_2_1_36x36_mixin); }
    public A_IC_115_2_1_36x36_mixin = this.createMixin("-707px -96px", "24px", "24px");

    public get A_IC_115_2_2_36x36() { return this.add("A-IC-115-2-2_36x36", this.A_IC_115_2_2_36x36_mixin); }
    public A_IC_115_2_2_36x36_mixin = this.createMixin("-707px -120px", "24px", "24px");

    public get A_IC_115_2_3_36x36() { return this.add("A-IC-115-2-3_36x36", this.A_IC_115_2_3_36x36_mixin); }
    public A_IC_115_2_3_36x36_mixin = this.createMixin("-707px -144px", "24px", "24px");

    public get A_IC_115_2_4_36x36() { return this.add("A-IC-115-2-4_36x36", this.A_IC_115_2_4_36x36_mixin); }
    public A_IC_115_2_4_36x36_mixin = this.createMixin("-707px -168px", "24px", "24px");

    public get A_IC_115_2_5_36x36() { return this.add("A-IC-115-2-5_36x36", this.A_IC_115_2_5_36x36_mixin); }
    public A_IC_115_2_5_36x36_mixin = this.createMixin("-707px -192px", "24px", "24px");

    public get A_IC_116_1_36x36() { return this.add("A-IC-116-1_36x36", this.A_IC_116_1_36x36_mixin); }
    public A_IC_116_1_36x36_mixin = this.createMixin("-707px -216px", "24px", "24px");

    public get A_IC_116_1_48x48() { return this.add("A-IC-116-1_48x48", this.A_IC_116_1_48x48_mixin); }
    public A_IC_116_1_48x48_mixin = this.createMixin("-96px -600px", "32px", "32px");

    public get A_IC_116_2_36x36() { return this.add("A-IC-116-2_36x36", this.A_IC_116_2_36x36_mixin); }
    public A_IC_116_2_36x36_mixin = this.createMixin("-707px -240px", "24px", "24px");

    public get A_IC_116_2_72x72() { return this.add("A-IC-116-2_72x72", this.A_IC_116_2_72x72_mixin); }
    public A_IC_116_2_72x72_mixin = this.createMixin("-240px -400px", "48px", "48px");

    public get A_IC_117_1_36x36() { return this.add("A-IC-117-1_36x36", this.A_IC_117_1_36x36_mixin); }
    public A_IC_117_1_36x36_mixin = this.createMixin("-707px -264px", "24px", "24px");

    public get A_IC_117_1_48x48() { return this.add("A-IC-117-1_48x48", this.A_IC_117_1_48x48_mixin); }
    public A_IC_117_1_48x48_mixin = this.createMixin("-128px -600px", "32px", "32px");

    public get A_IC_117_2_36x36() { return this.add("A-IC-117-2_36x36", this.A_IC_117_2_36x36_mixin); }
    public A_IC_117_2_36x36_mixin = this.createMixin("-707px -288px", "24px", "24px");

    public get A_IC_117_2_48x48() { return this.add("A-IC-117-2_48x48", this.A_IC_117_2_48x48_mixin); }
    public A_IC_117_2_48x48_mixin = this.createMixin("-160px -600px", "32px", "32px");

    public get A_IC_117_3_36x36() { return this.add("A-IC-117-3_36x36", this.A_IC_117_3_36x36_mixin); }
    public A_IC_117_3_36x36_mixin = this.createMixin("-707px -312px", "24px", "24px");

    public get A_IC_117_3_48x48() { return this.add("A-IC-117-3_48x48", this.A_IC_117_3_48x48_mixin); }
    public A_IC_117_3_48x48_mixin = this.createMixin("-192px -600px", "32px", "32px");

    public get A_IC_117_4_36x36() { return this.add("A-IC-117-4_36x36", this.A_IC_117_4_36x36_mixin); }
    public A_IC_117_4_36x36_mixin = this.createMixin("-707px -336px", "24px", "24px");

    public get A_IC_122_30x30() { return this.add("A-IC-122_30x30", this.A_IC_122_30x30_mixin); }
    public A_IC_122_30x30_mixin = this.createMixin("-604px -688px", "20px", "20px");

    public get A_IC_122_36x36() { return this.add("A-IC-122_36x36", this.A_IC_122_36x36_mixin); }
    public A_IC_122_36x36_mixin = this.createMixin("-707px -360px", "24px", "24px");

    public get A_IC_122_48x48() { return this.add("A-IC-122_48x48", this.A_IC_122_48x48_mixin); }
    public A_IC_122_48x48_mixin = this.createMixin("-224px -600px", "32px", "32px");

    public get A_IC_124_1_36x36() { return this.add("A-IC-124-1_36x36", this.A_IC_124_1_36x36_mixin); }
    public A_IC_124_1_36x36_mixin = this.createMixin("-707px -384px", "24px", "24px");

    public get A_IC_124_1_48x48() { return this.add("A-IC-124-1_48x48", this.A_IC_124_1_48x48_mixin); }
    public A_IC_124_1_48x48_mixin = this.createMixin("-256px -600px", "32px", "32px");

    public get A_IC_124_2_36x36() { return this.add("A-IC-124-2_36x36", this.A_IC_124_2_36x36_mixin); }
    public A_IC_124_2_36x36_mixin = this.createMixin("-707px -408px", "24px", "24px");

    public get A_IC_124_2_48x48() { return this.add("A-IC-124-2_48x48", this.A_IC_124_2_48x48_mixin); }
    public A_IC_124_2_48x48_mixin = this.createMixin("-288px -600px", "32px", "32px");

    public get A_IC_124_2_72x72() { return this.add("A-IC-124-2_72x72", this.A_IC_124_2_72x72_mixin); }
    public A_IC_124_2_72x72_mixin = this.createMixin("-288px -400px", "48px", "48px");

    public get A_IC_125_36x12() { return this.add("A-IC-125_36x12", this.A_IC_125_36x12_mixin); }
    public A_IC_125_36x12_mixin = this.createMixin("-445px -520px", "24px", "8px");

    public get A_IC_129_27x21() { return this.add("A-IC-129_27x21", this.A_IC_129_27x21_mixin); }
    public A_IC_129_27x21_mixin = this.createMixin("-427px -520px", "18px", "14px");

    public get A_IC_130_144x144() { return this.add("A-IC-130_144x144", this.A_IC_130_144x144_mixin); }
    public A_IC_130_144x144_mixin = this.createMixin("-112px -112px", "96px", "96px");

    public get A_IC_131_144x144() { return this.add("A-IC-131_144x144", this.A_IC_131_144x144_mixin); }
    public A_IC_131_144x144_mixin = this.createMixin("-224px 0px", "96px", "96px");

    public get A_IC_137_1_102x42() { return this.add("A-IC-137-1_102x42", this.A_IC_137_1_102x42_mixin); }
    public A_IC_137_1_102x42_mixin = this.createMixin("-224px -192px", "68px", "28px");

    public get A_IC_137_1_72x72() { return this.add("A-IC-137-1_72x72", this.A_IC_137_1_72x72_mixin); }
    public A_IC_137_1_72x72_mixin = this.createMixin("-336px -400px", "48px", "48px");

    public get A_IC_137_1_78x30() { return this.add("A-IC-137-1_78x30", this.A_IC_137_1_78x30_mixin); }
    public A_IC_137_1_78x30_mixin = this.createMixin("-51px -544px", "52px", "20px");

    public get A_IC_137_2_87x36() { return this.add("A-IC-137-2_87x36", this.A_IC_137_2_87x36_mixin); }
    public A_IC_137_2_87x36_mixin = this.createMixin("-427px -496px", "58px", "24px");

    public get A_IC_139_1_48x36() { return this.add("A-IC-139-1_48x36", this.A_IC_139_1_48x36_mixin); }
    public A_IC_139_1_48x36_mixin = this.createMixin("-651px -608px", "32px", "24px");

    public get A_IC_139_2_48x36() { return this.add("A-IC-139-2_48x36", this.A_IC_139_2_48x36_mixin); }
    public A_IC_139_2_48x36_mixin = this.createMixin("-619px -576px", "32px", "24px");

    public get A_IC_140_2_48x30() { return this.add("A-IC-140-2_48x30", this.A_IC_140_2_48x30_mixin); }
    public A_IC_140_2_48x30_mixin = this.createMixin("-544px -520px", "32px", "20px");

    public get A_IC_140_2_58x42() { return this.add("A-IC-140-2_58x42", this.A_IC_140_2_58x42_mixin); }
    public A_IC_140_2_58x42_mixin = this.createMixin("-580px 0px", "39px", "28px");

    public get A_IC_141_36x36() { return this.add("A-IC-141_36x36", this.A_IC_141_36x36_mixin); }
    public A_IC_141_36x36_mixin = this.createMixin("-707px -432px", "24px", "24px");

    public get A_IC_142_48x48() { return this.add("A-IC-142_48x48", this.A_IC_142_48x48_mixin); }
    public A_IC_142_48x48_mixin = this.createMixin("-320px -600px", "32px", "32px");

    public get A_IC_145_2_36x36() { return this.add("A-IC-145_2_36x36", this.A_IC_145_2_36x36_mixin); }
    public A_IC_145_2_36x36_mixin = this.createMixin("-707px -456px", "24px", "24px");

    public get A_IC_145_36x36() { return this.add("A-IC-145_36x36", this.A_IC_145_36x36_mixin); }
    public A_IC_145_36x36_mixin = this.createMixin("-707px -480px", "24px", "24px");

    public get A_IC_146_36x36() { return this.add("A-IC-146_36x36", this.A_IC_146_36x36_mixin); }
    public A_IC_146_36x36_mixin = this.createMixin("-707px -504px", "24px", "24px");

    public get A_IC_147_36x36() { return this.add("A-IC-147_36x36", this.A_IC_147_36x36_mixin); }
    public A_IC_147_36x36_mixin = this.createMixin("-707px -528px", "24px", "24px");

    public get A_IC_152_2_48x48() { return this.add("A-IC-152-2_48x48", this.A_IC_152_2_48x48_mixin); }
    public A_IC_152_2_48x48_mixin = this.createMixin("-352px -600px", "32px", "32px");

    public get A_IC_152_2_72x72() { return this.add("A-IC-152-2_72x72", this.A_IC_152_2_72x72_mixin); }
    public A_IC_152_2_72x72_mixin = this.createMixin("-384px -400px", "48px", "48px");

    public get A_IC_153_48x48() { return this.add("A-IC-153_48x48", this.A_IC_153_48x48_mixin); }
    public A_IC_153_48x48_mixin = this.createMixin("-384px -600px", "32px", "32px");

    public get A_IC_153_72x72() { return this.add("A-IC-153_72x72", this.A_IC_153_72x72_mixin); }
    public A_IC_153_72x72_mixin = this.createMixin("-448px 0px", "48px", "48px");

    public get A_IC_166_1_48x48() { return this.add("A-IC-166-1_48x48", this.A_IC_166_1_48x48_mixin); }
    public A_IC_166_1_48x48_mixin = this.createMixin("-416px -600px", "32px", "32px");

    public get A_IC_166_1_72x72() { return this.add("A-IC-166-1_72x72", this.A_IC_166_1_72x72_mixin); }
    public A_IC_166_1_72x72_mixin = this.createMixin("-448px -48px", "48px", "48px");

    public get A_IC_166_2_48x48() { return this.add("A-IC-166-2_48x48", this.A_IC_166_2_48x48_mixin); }
    public A_IC_166_2_48x48_mixin = this.createMixin("-448px -600px", "32px", "32px");

    public get A_IC_166_2_72x72() { return this.add("A-IC-166-2_72x72", this.A_IC_166_2_72x72_mixin); }
    public A_IC_166_2_72x72_mixin = this.createMixin("-448px -96px", "48px", "48px");

    public get A_IC_169_24x24() { return this.add("A-IC-169_24x24", this.A_IC_169_24x24_mixin); }
    public A_IC_169_24x24_mixin = this.createMixin("-384px -336px", "16px", "16px");

    public get A_IC_174_48x48() { return this.add("A-IC-174_48x48", this.A_IC_174_48x48_mixin); }
    public A_IC_174_48x48_mixin = this.createMixin("-480px -600px", "32px", "32px");

    public get A_IC_176_36x36() { return this.add("A-IC-176_36x36", this.A_IC_176_36x36_mixin); }
    public A_IC_176_36x36_mixin = this.createMixin("-707px -552px", "24px", "24px");

    public get A_IC_177_36x36() { return this.add("A-IC-177_36x36", this.A_IC_177_36x36_mixin); }
    public A_IC_177_36x36_mixin = this.createMixin("-707px -576px", "24px", "24px");

    public get A_IC_178_36x36() { return this.add("A-IC-178_36x36", this.A_IC_178_36x36_mixin); }
    public A_IC_178_36x36_mixin = this.createMixin("-707px -600px", "24px", "24px");

    public get A_IC_179_24x24() { return this.add("A-IC-179_24x24", this.A_IC_179_24x24_mixin); }
    public A_IC_179_24x24_mixin = this.createMixin("-384px -352px", "16px", "16px");

    public get A_IC_180_36x36() { return this.add("A-IC-180_36x36", this.A_IC_180_36x36_mixin); }
    public A_IC_180_36x36_mixin = this.createMixin("-707px -624px", "24px", "24px");

    public get A_IC_181_36x36() { return this.add("A-IC-181_36x36", this.A_IC_181_36x36_mixin); }
    public A_IC_181_36x36_mixin = this.createMixin("-707px -648px", "24px", "24px");

    public get A_IC_182_48x48() { return this.add("A-IC-182_48x48", this.A_IC_182_48x48_mixin); }
    public A_IC_182_48x48_mixin = this.createMixin("-512px -600px", "32px", "32px");

    public get A_IC_183_3_30x30() { return this.add("A-IC-183-3_30x30", this.A_IC_183_3_30x30_mixin); }
    public A_IC_183_3_30x30_mixin = this.createMixin("-624px -688px", "20px", "20px");

    public get A_IC_183_4_30x30() { return this.add("A-IC-183-4_30x30", this.A_IC_183_4_30x30_mixin); }
    public A_IC_183_4_30x30_mixin = this.createMixin("-644px -688px", "20px", "20px");

    public get A_IC_186_84x36() { return this.add("A-IC-186_84x36", this.A_IC_186_84x36_mixin); }
    public A_IC_186_84x36_mixin = this.createMixin("-485px -496px", "56px", "24px");

    public get A_IC_189_48x48() { return this.add("A-IC-189_48x48", this.A_IC_189_48x48_mixin); }
    public A_IC_189_48x48_mixin = this.createMixin("-544px -600px", "32px", "32px");

    public get A_IC_189_72x72() { return this.add("A-IC-189_72x72", this.A_IC_189_72x72_mixin); }
    public A_IC_189_72x72_mixin = this.createMixin("-448px -144px", "48px", "48px");

    public get A_IC_191_48x48() { return this.add("A-IC-191_48x48", this.A_IC_191_48x48_mixin); }
    public A_IC_191_48x48_mixin = this.createMixin("-576px -600px", "32px", "32px");

    public get A_IC_191_72x72() { return this.add("A-IC-191_72x72", this.A_IC_191_72x72_mixin); }
    public A_IC_191_72x72_mixin = this.createMixin("-448px -192px", "48px", "48px");

    public get A_IC_193_72x72() { return this.add("A-IC-193_72x72", this.A_IC_193_72x72_mixin); }
    public A_IC_193_72x72_mixin = this.createMixin("-448px -240px", "48px", "48px");

    public get A_IC_194_36x36() { return this.add("A-IC-194_36x36", this.A_IC_194_36x36_mixin); }
    public A_IC_194_36x36_mixin = this.createMixin("0px -688px", "24px", "24px");

    public get A_IC_194_42x42() { return this.add("A-IC-194_42x42", this.A_IC_194_42x42_mixin); }
    public A_IC_194_42x42_mixin = this.createMixin("-404px -632px", "28px", "28px");

    public get A_IC_195_48x48() { return this.add("A-IC-195_48x48", this.A_IC_195_48x48_mixin); }
    public A_IC_195_48x48_mixin = this.createMixin("-608px -600px", "32px", "32px");

    public get A_IC_195_72x72() { return this.add("A-IC-195_72x72", this.A_IC_195_72x72_mixin); }
    public A_IC_195_72x72_mixin = this.createMixin("-448px -288px", "48px", "48px");

    public get A_IC_196_48x48() { return this.add("A-IC-196_48x48", this.A_IC_196_48x48_mixin); }
    public A_IC_196_48x48_mixin = this.createMixin("-651px 0px", "32px", "32px");

    public get A_IC_197_48x48() { return this.add("A-IC-197_48x48", this.A_IC_197_48x48_mixin); }
    public A_IC_197_48x48_mixin = this.createMixin("-651px -32px", "32px", "32px");

    public get A_IC_197_72x72() { return this.add("A-IC-197_72x72", this.A_IC_197_72x72_mixin); }
    public A_IC_197_72x72_mixin = this.createMixin("-448px -336px", "48px", "48px");

    public get A_IC_198_1_48x48() { return this.add("A-IC-198-1_48x48", this.A_IC_198_1_48x48_mixin); }
    public A_IC_198_1_48x48_mixin = this.createMixin("-651px -64px", "32px", "32px");

    public get A_IC_198_2_48x48() { return this.add("A-IC-198-2_48x48", this.A_IC_198_2_48x48_mixin); }
    public A_IC_198_2_48x48_mixin = this.createMixin("-651px -96px", "32px", "32px");

    public get A_IC_198_3_48x48() { return this.add("A-IC-198-3_48x48", this.A_IC_198_3_48x48_mixin); }
    public A_IC_198_3_48x48_mixin = this.createMixin("-651px -128px", "32px", "32px");

    public get A_IC_198_4_48x48() { return this.add("A-IC-198-4_48x48", this.A_IC_198_4_48x48_mixin); }
    public A_IC_198_4_48x48_mixin = this.createMixin("-651px -160px", "32px", "32px");

    public get A_IC_203_72x72() { return this.add("A-IC-203_72x72", this.A_IC_203_72x72_mixin); }
    public A_IC_203_72x72_mixin = this.createMixin("-448px -384px", "48px", "48px");

    public get A_IC_204_72x72() { return this.add("A-IC-204_72x72", this.A_IC_204_72x72_mixin); }
    public A_IC_204_72x72_mixin = this.createMixin("0px -448px", "48px", "48px");

    public get A_IC_205_72x72() { return this.add("A-IC-205_72x72", this.A_IC_205_72x72_mixin); }
    public A_IC_205_72x72_mixin = this.createMixin("-48px -448px", "48px", "48px");

    public get A_IC_207_48x48() { return this.add("A-IC-207_48x48", this.A_IC_207_48x48_mixin); }
    public A_IC_207_48x48_mixin = this.createMixin("-651px -192px", "32px", "32px");

    public get A_IC_207_54x54() { return this.add("A-IC-207_54x54", this.A_IC_207_54x54_mixin); }
    public A_IC_207_54x54_mixin = this.createMixin("-544px -324px", "36px", "36px");

    public get A_IC_207_72x72() { return this.add("A-IC-207_72x72", this.A_IC_207_72x72_mixin); }
    public A_IC_207_72x72_mixin = this.createMixin("-96px -448px", "48px", "48px");

    public get A_IC_208_144x144() { return this.add("A-IC-208_144x144", this.A_IC_208_144x144_mixin); }
    public A_IC_208_144x144_mixin = this.createMixin("-224px -96px", "96px", "96px");

    public get A_IC_208_64x64() { return this.add("A-IC-208_64x64", this.A_IC_208_64x64_mixin); }
    public A_IC_208_64x64_mixin = this.createMixin("-384px -496px", "43px", "43px");

    public get A_IC_211_48x48() { return this.add("A-IC-211_48x48", this.A_IC_211_48x48_mixin); }
    public A_IC_211_48x48_mixin = this.createMixin("-651px -224px", "32px", "32px");

    public get A_IC_217_48x48() { return this.add("A-IC-217_48x48", this.A_IC_217_48x48_mixin); }
    public A_IC_217_48x48_mixin = this.createMixin("-651px -256px", "32px", "32px");

    public get A_IC_217_72x72() { return this.add("A-IC-217_72x72", this.A_IC_217_72x72_mixin); }
    public A_IC_217_72x72_mixin = this.createMixin("-144px -448px", "48px", "48px");

    public get A_IC_218_48x48() { return this.add("A-IC-218_48x48", this.A_IC_218_48x48_mixin); }
    public A_IC_218_48x48_mixin = this.createMixin("-651px -288px", "32px", "32px");

    public get A_IC_218_72x72() { return this.add("A-IC-218_72x72", this.A_IC_218_72x72_mixin); }
    public A_IC_218_72x72_mixin = this.createMixin("-192px -448px", "48px", "48px");

    public get A_IC_219_48x48() { return this.add("A-IC-219_48x48", this.A_IC_219_48x48_mixin); }
    public A_IC_219_48x48_mixin = this.createMixin("-651px -320px", "32px", "32px");

    public get A_IC_219_72x72() { return this.add("A-IC-219_72x72", this.A_IC_219_72x72_mixin); }
    public A_IC_219_72x72_mixin = this.createMixin("-240px -448px", "48px", "48px");

    public get A_IC_220_48x48() { return this.add("A-IC-220_48x48", this.A_IC_220_48x48_mixin); }
    public A_IC_220_48x48_mixin = this.createMixin("-651px -352px", "32px", "32px");

    public get A_IC_220_72x72() { return this.add("A-IC-220_72x72", this.A_IC_220_72x72_mixin); }
    public A_IC_220_72x72_mixin = this.createMixin("-288px -448px", "48px", "48px");

    public get A_IC_221_48x48() { return this.add("A-IC-221_48x48", this.A_IC_221_48x48_mixin); }
    public A_IC_221_48x48_mixin = this.createMixin("-651px -384px", "32px", "32px");

    public get A_IC_221_72x72() { return this.add("A-IC-221_72x72", this.A_IC_221_72x72_mixin); }
    public A_IC_221_72x72_mixin = this.createMixin("-336px -448px", "48px", "48px");

    public get A_IC_222_48x48() { return this.add("A-IC-222_48x48", this.A_IC_222_48x48_mixin); }
    public A_IC_222_48x48_mixin = this.createMixin("-651px -416px", "32px", "32px");

    public get A_IC_222_72x72() { return this.add("A-IC-222_72x72", this.A_IC_222_72x72_mixin); }
    public A_IC_222_72x72_mixin = this.createMixin("-384px -448px", "48px", "48px");

    public get A_IC_223_48x48() { return this.add("A-IC-223_48x48", this.A_IC_223_48x48_mixin); }
    public A_IC_223_48x48_mixin = this.createMixin("-651px -448px", "32px", "32px");

    public get A_IC_223_72x72() { return this.add("A-IC-223_72x72", this.A_IC_223_72x72_mixin); }
    public A_IC_223_72x72_mixin = this.createMixin("-432px -448px", "48px", "48px");

    public get A_IC_224_48x48() { return this.add("A-IC-224_48x48", this.A_IC_224_48x48_mixin); }
    public A_IC_224_48x48_mixin = this.createMixin("-651px -480px", "32px", "32px");

    public get A_IC_224_72x72() { return this.add("A-IC-224_72x72", this.A_IC_224_72x72_mixin); }
    public A_IC_224_72x72_mixin = this.createMixin("-496px 0px", "48px", "48px");

    public get A_IC_225_48x48() { return this.add("A-IC-225_48x48", this.A_IC_225_48x48_mixin); }
    public A_IC_225_48x48_mixin = this.createMixin("-651px -512px", "32px", "32px");

    public get A_IC_225_72x72() { return this.add("A-IC-225_72x72", this.A_IC_225_72x72_mixin); }
    public A_IC_225_72x72_mixin = this.createMixin("-496px -48px", "48px", "48px");

    public get A_IC_226_48x48() { return this.add("A-IC-226_48x48", this.A_IC_226_48x48_mixin); }
    public A_IC_226_48x48_mixin = this.createMixin("-651px -544px", "32px", "32px");

    public get A_IC_226_72x72() { return this.add("A-IC-226_72x72", this.A_IC_226_72x72_mixin); }
    public A_IC_226_72x72_mixin = this.createMixin("-496px -96px", "48px", "48px");

    public get A_IC_227_48x48() { return this.add("A-IC-227_48x48", this.A_IC_227_48x48_mixin); }
    public A_IC_227_48x48_mixin = this.createMixin("-651px -576px", "32px", "32px");

    public get A_IC_227_72x72() { return this.add("A-IC-227_72x72", this.A_IC_227_72x72_mixin); }
    public A_IC_227_72x72_mixin = this.createMixin("-496px -144px", "48px", "48px");

    public get A_IC_228_48x48() { return this.add("A-IC-228_48x48", this.A_IC_228_48x48_mixin); }
    public A_IC_228_48x48_mixin = this.createMixin("0px -632px", "32px", "32px");

    public get A_IC_228_72x72() { return this.add("A-IC-228_72x72", this.A_IC_228_72x72_mixin); }
    public A_IC_228_72x72_mixin = this.createMixin("-496px -192px", "48px", "48px");

    public get A_IC_229_48x48() { return this.add("A-IC-229_48x48", this.A_IC_229_48x48_mixin); }
    public A_IC_229_48x48_mixin = this.createMixin("-32px -632px", "32px", "32px");

    public get A_IC_229_72x72() { return this.add("A-IC-229_72x72", this.A_IC_229_72x72_mixin); }
    public A_IC_229_72x72_mixin = this.createMixin("-496px -240px", "48px", "48px");

    public get A_IC_230_48x48() { return this.add("A-IC-230_48x48", this.A_IC_230_48x48_mixin); }
    public A_IC_230_48x48_mixin = this.createMixin("-64px -632px", "32px", "32px");

    public get A_IC_230_72x72() { return this.add("A-IC-230_72x72", this.A_IC_230_72x72_mixin); }
    public A_IC_230_72x72_mixin = this.createMixin("-496px -288px", "48px", "48px");

    public get A_IC_231_48x48() { return this.add("A-IC-231_48x48", this.A_IC_231_48x48_mixin); }
    public A_IC_231_48x48_mixin = this.createMixin("-96px -632px", "32px", "32px");

    public get A_IC_231_72x72() { return this.add("A-IC-231_72x72", this.A_IC_231_72x72_mixin); }
    public A_IC_231_72x72_mixin = this.createMixin("-496px -336px", "48px", "48px");

    public get A_IC_232_48x48() { return this.add("A-IC-232_48x48", this.A_IC_232_48x48_mixin); }
    public A_IC_232_48x48_mixin = this.createMixin("-128px -632px", "32px", "32px");

    public get A_IC_232_72x72() { return this.add("A-IC-232_72x72", this.A_IC_232_72x72_mixin); }
    public A_IC_232_72x72_mixin = this.createMixin("-496px -384px", "48px", "48px");

    public get A_IC_233_48x48() { return this.add("A-IC-233_48x48", this.A_IC_233_48x48_mixin); }
    public A_IC_233_48x48_mixin = this.createMixin("-160px -632px", "32px", "32px");

    public get A_IC_233_72x72() { return this.add("A-IC-233_72x72", this.A_IC_233_72x72_mixin); }
    public A_IC_233_72x72_mixin = this.createMixin("-496px -432px", "48px", "48px");

    public get A_IC_234_48x48() { return this.add("A-IC-234_48x48", this.A_IC_234_48x48_mixin); }
    public A_IC_234_48x48_mixin = this.createMixin("-192px -632px", "32px", "32px");

    public get A_IC_234_72x72() { return this.add("A-IC-234_72x72", this.A_IC_234_72x72_mixin); }
    public A_IC_234_72x72_mixin = this.createMixin("0px -496px", "48px", "48px");

    public get A_IC_235_48x48() { return this.add("A-IC-235_48x48", this.A_IC_235_48x48_mixin); }
    public A_IC_235_48x48_mixin = this.createMixin("-224px -632px", "32px", "32px");

    public get A_IC_235_72x72() { return this.add("A-IC-235_72x72", this.A_IC_235_72x72_mixin); }
    public A_IC_235_72x72_mixin = this.createMixin("-48px -496px", "48px", "48px");

    public get A_IC_236_48x48() { return this.add("A-IC-236_48x48", this.A_IC_236_48x48_mixin); }
    public A_IC_236_48x48_mixin = this.createMixin("-256px -632px", "32px", "32px");

    public get A_IC_236_72x72() { return this.add("A-IC-236_72x72", this.A_IC_236_72x72_mixin); }
    public A_IC_236_72x72_mixin = this.createMixin("-96px -496px", "48px", "48px");

    public get A_IC_237_72x72() { return this.add("A-IC-237_72x72", this.A_IC_237_72x72_mixin); }
    public A_IC_237_72x72_mixin = this.createMixin("-144px -496px", "48px", "48px");

    public get A_IC_238_72x72() { return this.add("A-IC-238_72x72", this.A_IC_238_72x72_mixin); }
    public A_IC_238_72x72_mixin = this.createMixin("-192px -496px", "48px", "48px");

    public get A_IC_239_72x72() { return this.add("A-IC-239_72x72", this.A_IC_239_72x72_mixin); }
    public A_IC_239_72x72_mixin = this.createMixin("-240px -496px", "48px", "48px");

    public get A_IC_240_72x72() { return this.add("A-IC-240_72x72", this.A_IC_240_72x72_mixin); }
    public A_IC_240_72x72_mixin = this.createMixin("-288px -496px", "48px", "48px");

    public get A_IC_241_72x72() { return this.add("A-IC-241_72x72", this.A_IC_241_72x72_mixin); }
    public A_IC_241_72x72_mixin = this.createMixin("-336px -496px", "48px", "48px");

    public get A_IC_246_48x48() { return this.add("A-IC-246_48x48", this.A_IC_246_48x48_mixin); }
    public A_IC_246_48x48_mixin = this.createMixin("-288px -632px", "32px", "32px");

}
